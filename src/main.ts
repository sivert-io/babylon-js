import { Game } from "./game";

console.log(`main.ts starting ${Game.name}`);
window.addEventListener("DOMContentLoaded", async () => {
    const canvas = document.getElementById("renderCanvas") as HTMLCanvasElement;
    const app = new Game(canvas, true);
    await app.init();
    app.run();
});
