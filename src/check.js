import os from 'os'
import fs from 'fs'
import process from 'child_process'

export default async function check() {
    process.exec('ffmpeg -version', function (err) {
        if (err) {
            console.log(`FFmpeg not installed.`)
        }
    })

    if (!fs.existsSync(`${os.homedir}/Videos/ffhelper`)){
        fs.mkdirSync(`${os.homedir}/Videos/ffhelper`, { recursive: true });
    }
}