import {
    BackgroundMaterial,
    CubeTexture,
    DirectionalLight,
    ImageProcessingConfiguration,
    Mesh,
    MeshBuilder,
    Scene,
    Texture,
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

        // Load and set an environment map
        const environmentMap = CubeTexture.CreateFromPrefilteredData(
            props.skyboxTexture,
            props.scene
        );
        props.scene.environmentTexture = environmentMap.clone();
        environmentMap.coordinatesMode = Texture.SKYBOX_MODE;
        props.scene.environmentIntensity = 0.7;

        // Create a skydome
        const skydome = MeshBuilder.CreateBox(
            "box",
            { size: 10000, sideOrientation: Mesh.BACKSIDE },
            props.scene
        );
        //skydome.position.y = 5000;
        skydome.isPickable = false;
        //skydome.receiveShadows = true;

        // Sets the skydome in ground projection mode
        const sky = new BackgroundMaterial("skyMaterial", props.scene);
        sky.reflectionTexture = environmentMap;
        sky.enableGroundProjection = true;
        sky.projectedGroundRadius = 5000;
        sky.projectedGroundHeight = 500;
        skydome.material = sky;

        // Fancy Image Processing setup
        props.scene.imageProcessingConfiguration.exposure = 1.6;
        props.scene.imageProcessingConfiguration.toneMappingEnabled = true;
        props.scene.imageProcessingConfiguration.toneMappingType =
            BABYLON.ImageProcessingConfiguration.TONEMAPPING_ACES;

        // Setup a Light to cast shadows
        this.light = new DirectionalLight(
            "light0",
            new Vector3(-800, -1400, -1000),
            props.scene
        );
        this.light.intensity = 2;
        this.light.shadowMinZ = 1800;
        this.light.shadowMaxZ = 2100;
        this.light.diffuse = new BABYLON.Color3(1, 0.9, 0.6);
    }
}
