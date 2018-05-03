import RX = require('reactxp');

import { IMAGE_IDS } from './resources';

// Since RN/RXP does not allow for dynamic image names in require() for locally hosted images,
//  a cheap workaround to load images. NOT ADVISED.
export const getImageSource = (id: string, name: string) => {
  if (RX.Platform.getType() === 'web') {
    return `./assets/${name}`;
  }

  switch(id) {
    case IMAGE_IDS.monalisa:
      return require('../../assets/mona-lisa.jpg');
    case IMAGE_IDS.scream:
      return require('../../assets/the-scream.jpg');
    case IMAGE_IDS.starryNight:
      return require('../../assets/starry-night.jpg');
    case IMAGE_IDS.monalisa:
      return require('../../assets/mona-lisa.jpg');
    case IMAGE_IDS.girlWPearEaring:
      return require('../../assets/girl-with-a-pearl-earring.jpg');
    case IMAGE_IDS.guernica:
      return require('../../assets/guernica-picasso.jpg');
    case IMAGE_IDS.creationOfAdam:
      return require('../../assets/the-creation-of-adam.jpg');
    case IMAGE_IDS.lastSupper:
      return require('../../assets/the-last-supper.jpg');
    case IMAGE_IDS.persistanceOfMemory:
      return require('../../assets/the-persistence-of-memory.jpg');  
    default: return null;
  }
}