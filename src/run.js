import { settings } from './settings.js'
import os from 'os'
import process from 'child_process'

export default async function ffmpegProcessing() {
    let ffmpegArgs = {};

    ffmpegArgs.input = `-i "${settings.directory}"`

    if (settings.trimConfirm) {
        ffmpegArgs.trim = `-ss ${settings.trimStart} -to ${settings.trimStop}`
    } else {
        ffmpegArgs.trim = ``
    }

    if (settings.mergeAudio) {
        let audioArg = ``;

        for (const channel in settings.audioSelected) {
            audioArg = audioArg.concat(`[0:a:${channel}]`)
        }

        ffmpegArgs.audio = `-filter_complex "${audioArg}amix=inputs=${settings.audioSelected.length} [a]" -map 0:v:0 -map "[a]"`
    } else if (settings.audioSelected.length > 0) {
        ffmpegArgs.audio = `-map 0:v:0 -map 0:a:${settings.audioSelected[0]} -c:a copy`
    } else {
        ffmpegArgs.audio = `-map 0:v:0`
    }

    if (settings.compressConfirm) {
        ffmpegArgs.compression = `-c:v libx265 -crf ${settings.compressCRF}`
    } else {
        ffmpegArgs.compression = `-c:v copy`
    }

    ffmpegArgs.output = `"${os.homedir}/Videos/ffhelper/${settings.output}.mp4"`

    console.log(`FFmpeg Command: ffmpeg ${ffmpegArgs.input} ${ffmpegArgs.trim} ${ffmpegArgs.audio} ${ffmpegArgs.compression} ${ffmpegArgs.output}`)
    process.execSync(`ffmpeg ${ffmpegArgs.input} ${ffmpegArgs.trim} ${ffmpegArgs.audio} ${ffmpegArgs.compression} ${ffmpegArgs.output}`, { stdio: 'inherit' })
} 