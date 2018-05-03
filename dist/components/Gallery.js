"use strict";
const RX = require("reactxp");
const Grid_1 = require("./Grid");
const Details_1 = require("./Details");
const resources_1 = require("./resources");
const styles = {
    container: RX.Styles.createViewStyle({
        flex: 1,
        position: 'relative'
    })
};
class Gallery extends RX.Component {
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
    openDetails(id) {
        const selectedPhoto = resources_1.IMAGE_LIST.filter(p => p.id === id)[0];
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
    render() {
        return (RX.createElement(RX.View, { style: styles.container },
            RX.createElement(Grid_1.default, { data: resources_1.IMAGE_LIST, handleImagePress: this.openDetails }),
            RX.createElement(Details_1.default, { photo: this.state.selectedPhoto, close: this.closeDetails, openProgress: this.state.openProgress })));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Gallery;
//# sourceMappingURL=Gallery.js.map