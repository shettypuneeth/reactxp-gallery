import RX = require('reactxp');

import { getImageSource } from './utils';

import Image from './Image';

const DIMENSIONS = RX.UserInterface.measureWindow();

const styles = {
  container: RX.Styles.createViewStyle({
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  }),
  body: RX.Styles.createViewStyle({
    backgroundColor: '#fff',
  }),
  title: RX.Styles.createTextStyle({
    color: '#2c3e50',
    fontWeight: '700',
    fontSize: 28,
    paddingTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
  }),
  image: RX.Styles.createImageStyle({
    backgroundColor: 'green',
    width: DIMENSIONS.width,
    height: 350
  }),
  description: RX.Styles.createTextStyle({
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 40,
    fontSize: 18,
    color: '#34495e'
  }),
  close: RX.Styles.createViewStyle({
    position: 'absolute',
    top: 25,
    right: 25,
  }),
  closeIcon: RX.Styles.createTextStyle({
    textAlign: 'center',
    backgroundColor: '#fff',
    width: 40,
    height: 40,
    borderRadius: 20,
    fontSize: 28,
    color: '#2c3e50'
  })
};

class Details extends RX.Component<any, null> {
  render(): JSX.Element | null {
    const {
      photo,
      close,
      openProgress
    } = this.props;
    if (!photo) return null;

    const aspectRatio = photo.height / photo.width;
    const imageHeight = aspectRatio * DIMENSIONS.width;

    const dynamicImageStyles = RX.Styles.createImageStyle({
      height: imageHeight
    }, false);
    const animatedImageStyles = RX.Styles.createAnimatedImageStyle({
      opacity: openProgress,
      transform: [
        {
          scale: openProgress.interpolate({
            inputRange: [0.01, 0.99],
            outputRange: [0.5, 1]
          })
        }
      ]
    });
    const dynamicBodyStyle = RX.Styles.createViewStyle({
      minHeight: DIMENSIONS.height - imageHeight - 20
    }, false);
    const animatedBodyStyle = RX.Styles.createAnimatedImageStyle({
      opacity: openProgress,
      transform: [
        {
          translateY: openProgress.interpolate({
            inputRange: [0, 1],
            outputRange: [100, 0]
          })
        }
      ]
    });

    const mergedStyles = [
      styles.image,
      dynamicImageStyles,
      animatedImageStyles
    ]

    return (
      <RX.View style={styles.container}>
        <RX.ScrollView>
          <RX.Animated.Image 
            source={getImageSource(photo.id, photo.assetName)}
            style={mergedStyles}
            resizeMode='cover'
          />
          <RX.Animated.View style={[styles.body, dynamicBodyStyle, animatedBodyStyle]}>
            <RX.Text style={styles.title}>{ photo.title } </RX.Text>
            <RX.Text style={styles.description}>
              { photo.description }
            </RX.Text>
          </RX.Animated.View>
        </RX.ScrollView>
        <RX.Animated.View
          disableTouchOpacityAnimation={true}
          style={[styles.close, {opacity: openProgress}]}
          onPress={close}
        >
          <RX.Text style={styles.closeIcon}>&#215;</RX.Text>
        </RX.Animated.View>     
      </RX.View>
    )
  }
}

export default Details;