import os from "os";
import fs from "fs";
import process from "child_process";

export default async function check() {
    process.exec("ffmpeg -version", function (err) {
        if (err) {
            console.log("FFmpeg not installed.");
        }
    });

    if (!fs.existsSync(`${os.homedir}/Videos/FFhelper`)){
        fs.mkdirSync(`${os.homedir}/Videos/FFhelper`, { recursive: true });
    }
}
