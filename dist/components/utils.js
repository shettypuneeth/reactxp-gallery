"use strict";
const RX = require("reactxp");
const resources_1 = require("./resources");
// Since RN/RXP does not allow for dynamic image names in require() for locally hosted images,
//  a cheap workaround to load images. NOT ADVISED.
exports.getImageSource = (id, name) => {
    if (RX.Platform.getType() === 'web') {
        return `./assets/${name}`;
    }
    switch (id) {
        case resources_1.IMAGE_IDS.monalisa:
            return require('../../assets/mona-lisa.jpg');
        case resources_1.IMAGE_IDS.scream:
            return require('../../assets/the-scream.jpg');
        case resources_1.IMAGE_IDS.starryNight:
            return require('../../assets/starry-night.jpg');
        case resources_1.IMAGE_IDS.monalisa:
            return require('../../assets/mona-lisa.jpg');
        case resources_1.IMAGE_IDS.girlWPearEaring:
            return require('../../assets/girl-with-a-pearl-earring.jpg');
        case resources_1.IMAGE_IDS.guernica:
            return require('../../assets/guernica-picasso.jpg');
        case resources_1.IMAGE_IDS.creationOfAdam:
            return require('../../assets/the-creation-of-adam.jpg');
        case resources_1.IMAGE_IDS.lastSupper:
            return require('../../assets/the-last-supper.jpg');
        case resources_1.IMAGE_IDS.persistanceOfMemory:
            return require('../../assets/the-persistence-of-memory.jpg');
        default: return null;
    }
};
//# sourceMappingURL=utils.js.map