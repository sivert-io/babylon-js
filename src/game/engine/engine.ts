// engine.ts
import * as BABYLON from "babylonjs";

export const createEngine = async (
    canvas: HTMLCanvasElement
): Promise<BABYLON.WebGPUEngine> => {
    const engine = new BABYLON.WebGPUEngine(canvas, {
        enableAllFeatures: true,
    });
    await engine.initAsync();
    window.addEventListener("resize", () => engine.resize());
    return engine;
};
