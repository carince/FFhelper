import fs from "fs";
import inquirer from "inquirer";
import process from "child_process";

interface settingsInt {
    directory: string;
    trimConfirm: boolean;
    trimStart?: string;
    trimStop?: string;
    audioSelected: Array<number>;
    mergeAudio: boolean;
    compressConfirm: boolean;
    compressCRF?: string;
    output: string;
}

const settings: settingsInt = {
    directory: "",
    trimConfirm: false,
    trimStart: "",
    trimStop: "",
    audioSelected: [],
    mergeAudio: false,
    compressConfirm: false,
    compressCRF: "",
    output: ""
};

async function askSettings(): Promise<void> {
    let prompt: any = await inquirer.prompt({
        name: "directory",
        type: "input",
        message: "Input video directory:",
        validate: function (file) {
            const cleaned = file.replace(/"|'/g, "");
            if (fs.existsSync(cleaned)) {
                return true;
            } else {
                return cleaned;
            }
        }
    });
    settings.directory = prompt.directory.replace(/"|'/g, "");

    prompt = await inquirer.prompt({
        name: "confirm",
        type: "confirm",
        message: "Trim video?",
        default() { return true; }
    });
    settings.trimConfirm = prompt.confirm;

    if (prompt.confirm) {
        prompt = await inquirer.prompt({
            name: "start",
            type: "input",
            message: "[TRIM] Start Time",
            suffix: " HH:MM:SS"
        });
        settings.trimStart = prompt.start.toString();

        prompt = await inquirer.prompt({
            name: "stop",
            type: "input",
            message: "[TRIM] Stop Time",
            suffix: " HH:MM:SS"
        });
        settings.trimStop = prompt.stop.toString();
    }

    const probeOutput: Buffer = process.execSync(`ffprobe -show_entries stream=channels -select_streams a:0 -of compact=p=0:nk=1 -v 0 "${settings.directory}"`);

    if (parseFloat(probeOutput.toString()) > 1) {
        const audioArr: any[] = [...Array(parseFloat(probeOutput.toString())).keys()];
        prompt = await inquirer.prompt({
            name: "selected",
            type: "checkbox",
            message: "Select audio channels for playback",
            suffix: " 0: Game, 1: Mic",
            choices: audioArr
        });
        settings.audioSelected = prompt.selected;

        if (prompt.selected.length === 2) {
            prompt = await inquirer.prompt({
                name: "merge",
                type: "confirm",
                message: "Merge selected audio channels?",
                default() { return true; }
            });
            settings.mergeAudio = prompt.merge;
        }
    }

    prompt = await inquirer.prompt({
        name: "compressConfirm",
        type: "confirm",
        message: "Compress video?",
        default() { return true; }
    });
    settings.compressConfirm = prompt.compressConfirm;

    if (prompt.compressConfirm) {
        prompt = await inquirer.prompt({
            name: "compressCRF",
            type: "input",
            message: "CRF value for compression",
            suffix: " Lower for Higher filesize, Higher for Lower filesize."
        });
        settings.compressCRF = prompt.compressCRF.toString();
    }

    prompt = await inquirer.prompt({
        name: "output",
        type: "input",
        message: "Output video filename:",
        default() { return "output"; }
    });
    settings.output = prompt.output.toString();

    console.log("FFhelper Settings JSON:");
    console.log(settings);
}

export { settings, askSettings };
