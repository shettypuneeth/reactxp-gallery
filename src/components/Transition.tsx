import RX = require('reactxp');

import { getImageSource } from './utils';

const DIMENSIONS = RX.UserInterface.measureWindow();

const styles = {
  image: RX.Styles.createImageStyle({
    position: 'absolute',
    backgroundColor: 'green',
    width: DIMENSIONS.width,
    height: 400
  })
}

class Transition extends RX.Component<any, any> {
  constructor(props: any) {
    super(props);

    const { width } = DIMENSIONS;
    const {
      sourceDimensions = {}
    } = this.props;

    const {
      pageX = 0,
      pageY = 0
    } = sourceDimensions;

    this.state = {
      sourceDimension: {
        width: width / 2,
        height: 200,
        pageX,
        pageY
      }
    };
  }

  componentWillReceiveProps(nextProps: any) {
    const { photo, sourceLocation } = nextProps;
    this.setState({
      photo,
      sourceDimension: {
        ...this.state.sourceDimension,
        ...sourceLocation
      }
    })
  }
  

  render(): any {
    const {
      openProgress,
    } = this.props;
    const { photo } = this.state;
    const { sourceDimension } = this.state;

    console.log(sourceDimension);

    if (photo) {
      const translateInitX = sourceDimension.pageX + sourceDimension.width / 2;
      const translateInitY = sourceDimension.pageY + sourceDimension.height / 2;
      const translateDestX = DIMENSIONS.width/ 2;
      const translateDestY = 150;

      const openingInitTranslateX = translateInitX - translateDestX;
      const openingInitTranslateY = translateInitY - translateDestY;

      const openingInitScale = 0.5;

      console.log(`y: ${sourceDimension.pageY} x: ${sourceDimension.pageX}`);
      

      const dynamicStyles = RX.Styles.createImageStyle({
        left: 0,
        top: 0,
      }, false);

      const animatedStyles = RX.Styles.createAnimatedImageStyle({
        opacity: openProgress.interpolate({
          inputRange: [0.01, 0.99],
          outputRange: [0, 1]
        }),
        transform: [
          {
            scale: openProgress.interpolate({
              inputRange: [0.01, 0.99],
              outputRange: [openingInitScale, 1]
            })
          },
          {
            translateX: openProgress.interpolate({
              inputRange: [0.01, 0.99],
              outputRange: [0, 0]
            })
          },
          {
            translateY: openProgress.interpolate({
              inputRange: [0.01, 0.99],
              outputRange: [600, 0]
            })
          }
        ]
      });

      const mergedStyles = [
        styles.image,
        dynamicStyles,
        animatedStyles        
      ]

      return (
        <RX.Animated.Image 
          source={getImageSource(photo.id, photo.name)}
          style={mergedStyles}
          resizeMode='cover'
        />
      )
    }
    return null;
  }
}

export default Transition;