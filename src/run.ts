import { settings } from "./settings.js";
import os from "os";
import process from "child_process";

interface argsInt {
    input: string;
    trim: string;
    audio: string;
    compression: string;
    output: string;
}

export default async function ffmpegProcessing() {
    let ffmpegArgs: argsInt = {
        input: "",
        trim: "",
        audio: "",
        compression: "",
        output: ""
    };

    ffmpegArgs.input = `-i "${settings.directory}"`;

    if (settings.trimConfirm) {
        ffmpegArgs.trim = `-ss ${settings.trimStart} -to ${settings.trimStop}`;
    } else {
        ffmpegArgs.trim = "";
    }

    if (settings.mergeAudio) {
        let audioArg = "";

        for (const channel in settings.audioSelected) {
            audioArg = audioArg.concat(`[0:a:${channel}]`);
        }

        ffmpegArgs.audio = `-filter_complex "${audioArg}amix=inputs=${settings.audioSelected.length} [a]" -map 0:v:0 -map "[a]"`;
    } else if (settings.audioSelected.length === 1) {
        ffmpegArgs.audio = `-map 0:v:0 -map 0:a:${settings.audioSelected[0]} -c:a copy`;
    } else {
        ffmpegArgs.audio = "-map 0:v:0";
    }

    if (settings.compressConfirm) {
        ffmpegArgs.compression = `-c:v libx264 -crf ${settings.compressCRF}`;
    } else {
        ffmpegArgs.compression = "-c:v copy";
    }

    ffmpegArgs.output = `"${os.homedir}/Videos/FFhelper/${settings.output}.mp4"`;

    console.log(`FFmpeg Command: ffmpeg  -y -v quiet -stats ${ffmpegArgs.input} ${ffmpegArgs.trim} ${ffmpegArgs.audio} ${ffmpegArgs.compression} ${ffmpegArgs.output}`);
    process.execSync(`ffmpeg  -y -v quiet -stats ${ffmpegArgs.input} ${ffmpegArgs.trim} ${ffmpegArgs.audio} ${ffmpegArgs.compression} ${ffmpegArgs.output}`, { stdio: "inherit" });
} 
