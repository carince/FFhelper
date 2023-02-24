import check from "./check.js";
import { askSettings } from "./settings.js";
import ffmpeg from "./run.js";

async function index() {
    await check();
    await askSettings();
    await ffmpeg(); 
} index();
