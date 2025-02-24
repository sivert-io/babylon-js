import {
    CascadedShadowGenerator,
    Color3,
    PhysicsMotionType,
    Scene,
    Vector3,
} from "babylonjs";
import { Part } from "./Part";

interface RocketLauncherProps {
    scene: Scene;
    shadow_generator: CascadedShadowGenerator;
    speed: number;
    explosionRadius: number;
    explosionForce: number;
    damage: number;
    launchKey: string;
}

export class RocketLauncher {
    constructor(readonly props: RocketLauncherProps) {}

    public launchRocket() {
        console.log("Rocket launched!");
    }

    createRocket() {
        const rocketPart = new Part({
            name: "Rocket",
            shape: "sphere",
            size: new Vector3(1, 1, 1),
            color: new Color3(1, 0, 0),
            position: new Vector3(0, 0, 0),
            canCollide: true,
            mass: 1,
            scene: this.props.scene,
            shadow_generator: this.props.shadow_generator,
            physicsType: PhysicsMotionType.STATIC,
            receiveShadows: true,
            castShadows: true,
            opacity: 1,
        });

        return rocketPart;
    }
}
