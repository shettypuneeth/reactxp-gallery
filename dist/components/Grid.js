"use strict";
const RX = require("reactxp");
const Image_1 = require("./Image");
const styles = {
    container: RX.Styles.createScrollViewStyle({
        flex: 1,
    }),
    gridRow: RX.Styles.createViewStyle({
        flexDirection: 'row',
    }),
};
class Grid extends RX.Component {
    renderGridItem(index) {
        const image = this.props.data[index];
        return (RX.createElement(Image_1.default, { name: image.assetName, id: image.id, key: image.id, onPress: this.props.handleImagePress }));
    }
    createGridRow(items, key) {
        return (RX.createElement(RX.View, { style: styles.gridRow, key: key }, items));
    }
    renderGrid() {
        let count = 0;
        let columnCount = 0;
        let gridCount = 0;
        let gridId = `__${gridCount}__`;
        let rows = [];
        let row = [];
        while (count < this.props.data.length) {
            row.push(this.renderGridItem(count));
            columnCount = columnCount + 1;
            if (columnCount >= 2) {
                rows.push(this.createGridRow(row, gridId));
                gridCount = gridCount + 1;
                gridId = `__${gridCount}__`;
                columnCount = 0;
                row = [];
            }
            count++;
        }
        return rows;
    }
    render() {
        return (RX.createElement(RX.ScrollView, { style: styles.container }, this.renderGrid()));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Grid;
//# sourceMappingURL=Grid.js.map