import fs from 'fs'
import inquirer from 'inquirer'
import process from 'child_process'

let settings = {}
async function askSettings() {
    let video = await inquirer.prompt({
        name: 'directory',
        type: 'input',
        message: 'Input video directory:',
        validate: function (file) {
            const cleaned = file.replace(/"/g, ``)
            if (fs.existsSync(cleaned)) {
                return true
            } else {
                return cleaned
            }
        }
    })
    settings.directory = video.directory.replace(/"|'/g, ``)

    let trim = await inquirer.prompt({
        name: 'confirm',
        type: 'confirm',
        message: 'Trim video?',
        default() { return true }
    })
    settings.trimConfirm = trim.confirm

    if (trim.confirm) {
        trim = await inquirer.prompt({
            name: 'start',
            type: 'input',
            message: '[TRIM] Start Time',
            suffix: ' HH:MM:SS'
        })
        settings.trimStart = trim.start

        trim = await inquirer.prompt({
            name: 'stop',
            type: 'input',
            message: '[TRIM] Stop Time',
            suffix: ' HH:MM:SS'
        })
        settings.trimStop = trim.stop
    }

    const probeOutput = process.execSync(`ffprobe -show_entries stream=channels -select_streams a:0 -of compact=p=0:nk=1 -v 0 "${video.directory}"`)

    if (probeOutput > 1) {
        let audio = await inquirer.prompt({
            name: 'selected',
            type: 'checkbox',
            message: 'Select audio channels for playback',
            suffix: ' 0: Game, 1: Mic',
            choices: [...Array(parseFloat(probeOutput)).keys()]
        })
        settings.audioSelected = audio.selected

        if (audio.selected.length === 2) {
            audio = await inquirer.prompt({
                name: 'merge',
                type: 'confirm',
                message: 'Merge selected audio channels?',
                default() { return true }
            })
            settings.mergeAudio = audio.merge
        }
    }

    video = await inquirer.prompt({
        name: 'compressConfirm',
        type: 'confirm',
        message: 'Compress video?'
    })
    settings.compressConfirm = video.compressConfirm

    if (video.compressConfirm) {
        video = await inquirer.prompt({
            name: 'compressCRF',
            type: 'input',
            message: 'CRF value for compression',
            suffix: ' Lower for Higher filesize, Higher for Lower filesize.'
        })
        settings.compressCRF = video.compressCRF
    }

    video = await inquirer.prompt({
        name: 'output',
        type: 'input',
        message: 'Output video filename:'
    })
    settings.output = video.output

    console.log(`FFhelper Settings JSON:`)
    console.log(settings)
}

export { settings, askSettings }