// physics.ts
import * as BABYLON from "babylonjs";
import HavokPhysics from "@babylonjs/havok";

export const getInitializedHavok = async (): Promise<BABYLON.HavokPlugin> => {
    const havokInstance = HavokPhysics();
    const hk = new BABYLON.HavokPlugin(true, await havokInstance);
    return hk;
};
