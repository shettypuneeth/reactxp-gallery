"use strict";
const RX = require("reactxp");
const utils_1 = require("./utils");
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
class Image extends RX.Component {
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
    render() {
        const mergedStyles = [
            styles.image
        ];
        if (this.props.height) {
            mergedStyles.push(RX.Styles.createImageStyle({
                height: this.props.height
            }, false));
        }
        return (RX.createElement(RX.View, { disableTouchOpacityAnimation: true, style: styles.container, onPress: this.handlePress },
            RX.createElement(RX.Image, { ref: (r) => { this._image = r; }, style: mergedStyles, source: utils_1.getImageSource(this.props.id, this.props.name), resizeMode: 'cover' })));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Image;
//# sourceMappingURL=Image.js.map