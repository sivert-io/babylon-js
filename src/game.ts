// game.ts
import * as BABYLON from "babylonjs";
import { createEngine } from "./engine/engine";
import { createScene } from "./engine/scene";
import { getInitializedHavok } from "./engine/physics";

export class Game {
    engine!: BABYLON.WebGPUEngine;
    scene!: BABYLON.Scene;
    hk!: BABYLON.HavokPlugin;

    constructor(
        readonly canvas: HTMLCanvasElement,
        readonly useDebug: boolean
    ) {}

    async init(): Promise<this> {
        this.engine = await createEngine(this.canvas);
        this.hk = await getInitializedHavok();
        this.scene = createScene(this.engine, this.canvas, this.hk);
        return this;
    }

    debug(debugOn: boolean = true) {
        if (debugOn) {
            this.scene.debugLayer.show({ overlay: true });
        } else {
            this.scene.debugLayer.hide();
        }
    }

    run() {
        this.debug(this.useDebug);
        this.engine.runRenderLoop(() => {
            this.scene.render();
        });
    }
}
