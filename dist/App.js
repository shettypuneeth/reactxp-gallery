/*
* This file demonstrates a basic ReactXP app.
*/
"use strict";
const RX = require("reactxp");
const Gallery_1 = require("./components/Gallery");
const styles = {
    container: RX.Styles.createViewStyle({
        flex: 1,
    })
};
class App extends RX.Component {
    render() {
        return (RX.createElement(RX.View, { style: styles.container },
            RX.createElement(Gallery_1.default, null)));
    }
}
module.exports = App;
//# sourceMappingURL=App.js.map