import {
    CubeTexture,
    DirectionalLight,
    ImageProcessingConfiguration,
    Scene,
    TransformNode,
    Vector3,
} from "babylonjs";

interface SkyProps {
    scene: Scene;
    skyboxSize: number;
    skyboxTexture: string;
}

export class Sky {
    light: DirectionalLight;

    constructor(readonly props: SkyProps) {
        console.log("Sky created");

        // Environment lighting maps to be cycled through
        var env256 = CubeTexture.CreateFromPrefilteredData(
            props.skyboxTexture,
            props.scene
        );
        env256.name = "flowerRoad_256";
        env256.gammaSpace = false;
        props.scene.environmentTexture = env256;

        props.scene.createDefaultSkybox(env256, true, props.skyboxSize);

        props.scene.imageProcessingConfiguration.toneMappingEnabled = true;
        props.scene.imageProcessingConfiguration.toneMappingType =
            ImageProcessingConfiguration.TONEMAPPING_ACES;

        this.light = new DirectionalLight(
            "directional",
            new Vector3(-0.5, -0.65, -0.57),
            props.scene
        );
        var lightParent = new TransformNode("lightParent");
        lightParent.position = Vector3.Zero();
        this.light.parent = lightParent;
    }
}
