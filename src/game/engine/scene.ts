import {
    ArcRotateCamera,
    Color3,
    HavokPlugin,
    PhysicsMotionType,
    Scene,
    Vector3,
    WebGPUEngine,
    Color4,
} from "babylonjs";
import { Part } from "../components/Part";
import { Sky } from "../components/Sky";
import { Shadow } from "../components/Shadows";

// scene.ts
export const createScene = (
    engine: WebGPUEngine,
    canvas: HTMLCanvasElement,
    hk: HavokPlugin
) => {
    // This creates a basic Babylon Scene object (non-mesh)
    const scene = new Scene(engine);
    scene.clearColor = new Color4();

    // This creates and positions a free camera (non-mesh)
    const camera = new ArcRotateCamera(
        "MainCamera",
        0,
        0,
        0,
        new Vector3(0, 10, 0),
        scene
    );

    // This targets the camera to scene origin
    camera.setTarget(Vector3.Zero());

    // This attaches the camera to the canvas
    camera.attachControl(canvas, true);

    camera.position = new Vector3(40, 10, 40);

    const sky = new Sky({
        scene,
        skyboxSize: 10000,
        skyboxTexture: "skyboxes/02.env",
    });

    const shadows = new Shadow({
        light: sky.light,
        scene,
    });

    // PHYSICS!
    scene.enablePhysics(new Vector3(0, -9.81, 0), hk);

    {
        Array.from({ length: 1 }).forEach((_, i) => {
            Array.from({ length: 500 }).forEach((_, j) => {
                const box = new Part({
                    canCollide: true,
                    color: Color3.FromHexString("#FFD700"),
                    mass: 1,
                    name: `box-${i}-${j}`,
                    position: new Vector3(0, j * 3 + 0.5, i * 1 - 10),
                    scene: scene,
                    shape: "box",
                    size: new Vector3(1, 1, 1),
                    shadow_generator: shadows.generator,
                    castShadows: true,
                    material_properties: { restitution: 0, friction: 1 },
                });
            });
        });
    }

    const ground = new Part({
        canCollide: true,
        color: Color3.FromHexString("#C1E1C1"),
        mass: 0,
        name: "ground",
        physicsType: PhysicsMotionType.STATIC,
        position: new Vector3(0, 0, 0),
        scene: scene,
        shape: "box",
        size: new Vector3(200, 0.1, 200),
        shadow_generator: shadows.generator,
        receiveShadows: true,
    });

    return scene;
};
