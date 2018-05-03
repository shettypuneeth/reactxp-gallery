import RX = require('reactxp');

import { getImageSource } from './utils';
import { IMAGE_IDS } from './resources';

// not able to find an easy way to get device width on react-xp, so hard-coding.
const styles = {
  container: RX.Styles.createImageStyle({
    flex: 1
  }),
  image: RX.Styles.createImageStyle({
    flex: 1,
    height: 200
  })
};

class Image extends RX.Component<{
    name: string,
    height?: number,
    id: string,
    onPress?: Function
  },
  null
  > {
  _image: any;
  constructor() {
    super();
    this._image = null;
    this.handlePress = this.handlePress.bind(this);
  }

  handlePress() {
    if (this._image) {
      this.props.onPress(this.props.id);
    }
  }
  
  render(): JSX.Element | null {
    const mergedStyles = [
      styles.image
    ];

    if (this.props.height) {
      mergedStyles.push(RX.Styles.createImageStyle({
        height: this.props.height
      }, false));
    }

    return (
      <RX.View 
        disableTouchOpacityAnimation={true}
        style={styles.container}
        onPress={this.handlePress}
      >
        <RX.Image 
          ref={(r) => {this._image = r}}
          style={mergedStyles}
          source={getImageSource(this.props.id, this.props.name)}
          resizeMode='cover' 
        />
      </RX.View>
    );
  }
}

export default Image;