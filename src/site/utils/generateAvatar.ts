import { createAvatar } from "@dicebear/core";
import { loreleiNeutral } from "@dicebear/collection";

const avatar = (seed: string) =>
    createAvatar(loreleiNeutral, {
        seed,
        frecklesProbability: 25,
        glassesProbability: 25,
    });

export { avatar };
