<h1 align="center">FFhelper</h1>
<p align="center">A FFmpeg CLI tool to make trimming, compressing, and audio management easier.<br>Made with ♥ by Norikiru</p>

<p align="center"><img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/Norikiru/FFhelper?color=yellow&style=flat-square"> <img alt="GitHub forks" src="https://img.shields.io/github/forks/Norikiru/FFhelper?style=flat-square"> <img alt="GitHub issues" src="https://img.shields.io/github/issues/Norikiru/FFhelper?style=flat-square"> <img alt="License" src="https://img.shields.io/badge/License-GPLv3-blue.svg?style=flat-square"></p>


## 💥 Features 
- Video Trimming
- Audio Management (Select and merge audio channels!)
- Video Compression
- *And more to be added!*

------------

### Prerequisites
- [NodeJS](https://nodejs.org/en/download/ "NodeJS v16.17.0^")
- [git](https://git-scm.com/downloads "git")

### ⬇️ Download
You can get the executable from the [release](https://github.com/Norikiru/FFhelper/releases "Releases Page") page.
If you want to try new features before they get pushed to the main branch, follow the [Building](https://github.com/Norikiru/FFhelper#Building "Building Guide") guide below.

### 🛠️ Building
- Open your terminal and clone the repository:
```bash
git clone https://github.com/Norikiru/FFhelper.git
```

- Go into the ffhelper directory:
```bash
cd ./ffhelper
```

- Install required dependencies:
```bash
npm i
```

- Build with Rollup:
```bash
npm run build
```

- Bundle into a executable: 
```bash
npm run bundle
```

- You should be able to see your executable in the `dist` folder
```bash
cd ./dist
./ffhelper.exe
```

### 🆕 Updating
You must be in the root folder to be able to pull new commits
```bash
git pull
```

## 💖 Contributing
If you encounter any issues with FFhelper, feel free to give feedback on the issues page.
Feel free to fork the repo and do pull requests to help in maintaining FFhelper! PR's are always welcome.

## ⭐ Support
Support the project by giving the repository a star!