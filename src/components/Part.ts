import {
    CascadedShadowGenerator,
    Color3,
    CreateBox,
    CreateSphere,
    PBRMetallicRoughnessMaterial,
    PhysicsBody,
    PhysicsMotionType,
    PhysicsShapeBox,
    PhysicsShapeSphere,
    Quaternion,
    Scene,
    Vector3,
} from "babylonjs";

interface PartProps {
    name: string;
    shape?: string;
    size?: Vector3;
    color: Color3;
    position: Vector3;
    canCollide?: boolean;
    mass: number;
    scene: Scene;
    shadow_generator: CascadedShadowGenerator;
    physicsType?: PhysicsMotionType;
    receiveShadows?: boolean;
    castShadows?: boolean;
    opacity?: number;
}

export class Part {
    constructor(readonly props: PartProps) {
        console.log(`Part created: ${props.name}`);

        // Create a mesh
        let part = null;
        switch (props.shape) {
            case "sphere":
                part = CreateSphere(
                    props.name,
                    { diameter: props.size?.x ?? 1, segments: 32 },
                    props.scene
                );
                break;

            default:
                part = CreateBox(
                    props.name,
                    {
                        width: props.size?.x ?? 1,
                        height: props.size?.y ?? 1,
                        depth: props.size?.z ?? 1,
                    },
                    props.scene
                );
                break;
        }

        part.position = props.position;
        const material = new PBRMetallicRoughnessMaterial(
            "partMat",
            props.scene
        );
        material.baseColor = props.color;
        material.metallic = 0;
        material.roughness = 1;

        part.material = material;

        if (props.canCollide) {
            let partsShape = null;
            let partsBody = null;

            switch (props.shape) {
                case "sphere":
                    // Create a sphere shape
                    partsShape = new PhysicsShapeSphere(
                        Vector3.Zero(),
                        1,
                        props.scene
                    );

                    partsBody = new PhysicsBody(
                        part,
                        props.physicsType ?? PhysicsMotionType.DYNAMIC,
                        false,
                        props.scene
                    );
                    break;

                default:
                    // Create a static box shape
                    partsShape = new PhysicsShapeBox(
                        Vector3.Zero(),
                        Quaternion.Identity(),
                        props.size ?? new Vector3(1, 1, 1),
                        props.scene
                    );

                    // Create a body and attach it to the ground. Set it as Static.
                    partsBody = new PhysicsBody(
                        part,
                        props.physicsType ?? PhysicsMotionType.DYNAMIC,
                        false,
                        props.scene
                    );
                    break;
            }

            // Set shape material properties
            partsShape.material = { friction: 0.3, restitution: 0 };

            // Associate shape and body
            partsBody.shape = partsShape;

            // And body mass
            partsBody.setMassProperties({
                mass: props.mass,
                inertia: Vector3.Zero(),
                inertiaOrientation: Quaternion.Identity(),
            });

            if (props.receiveShadows) part.receiveShadows = true;

            if (props.castShadows)
                props.shadow_generator.addShadowCaster(part, true);
        }
    }
}
