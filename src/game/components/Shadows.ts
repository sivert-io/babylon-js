import {
    CascadedShadowGenerator,
    DirectionalLight,
    Scene,
    ShadowGenerator,
} from "babylonjs";

interface ShadowGeneratorProps {
    scene: Scene;
    light: DirectionalLight;
}

export class Shadow {
    generator: CascadedShadowGenerator;

    constructor(readonly props: ShadowGeneratorProps) {
        console.log("ShadowGenerator created");

        // Create a shadow generator
        this.generator = new CascadedShadowGenerator(2048, props.light);
        this.generator.stabilizeCascades = true;
        this.generator.darkness = 0.2;
        this.generator.forceBackFacesOnly = true;
        this.generator.shadowMaxZ = 500;
        this.generator.autoCalcDepthBounds = true;
        this.generator.lambda = 0.5;
        this.generator.depthClamp = true;
        this.generator.penumbraDarkness = 0.2;
        this.generator.usePercentageCloserFiltering = true;
        this.generator.filteringQuality = ShadowGenerator.QUALITY_HIGH;
    }
}
