import RX = require('reactxp');

import Grid from './Grid';
import Transition from './Transition';
import Details from './Details'

import { IMAGE_LIST } from './resources';

const styles = {
  container: RX.Styles.createViewStyle({
    flex: 1,
    position: 'relative'
  })
};

class Gallery extends RX.Component<any, any> {
  constructor() {
    super();

    this.state = {
      selectedPhoto: null,
      sourceLocation: {},
      openProgress: new RX.Animated.Value(0)
    };

    this.openDetails = this.openDetails.bind(this);
    this.closeDetails = this.closeDetails.bind(this);
  }

  openDetails(id: string) {
    const selectedPhoto = IMAGE_LIST.filter(p => p.id === id)[0];
    this.setState({ selectedPhoto }, () => {
      RX.Animated.timing(this.state.openProgress, {
        toValue: 1,
        duration: 350,
        easing: RX.Animated.Easing.InOut(),
        useNativeDriver: true
      }).start();
    });
  }

  closeDetails() {
    RX.Animated.timing(this.state.openProgress, {
      toValue: 0,
      duration: 400,
      easing: RX.Animated.Easing.InOut(),
      useNativeDriver: true
    }).start(() => this.setState({ selectedPhoto: null }));
    console.log('Clicked');
  }

  render(): JSX.Element | null {
    return (
      <RX.View style={styles.container}>
        <Grid data={IMAGE_LIST} handleImagePress={this.openDetails} />  
        <Details 
          photo={this.state.selectedPhoto}
          close={this.closeDetails}
          openProgress={this.state.openProgress}
        />
      </RX.View>
    );
  }
}

export default Gallery;