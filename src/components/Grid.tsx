import RX = require('reactxp');

import Image from './Image';
import { IMAGE_LIST } from './resources';

const styles = {
  container: RX.Styles.createScrollViewStyle({
      flex: 1,
  }),
  gridRow: RX.Styles.createViewStyle({
    flexDirection: 'row',
  }),
};

class Grid extends RX.Component<{data: Array<any>, handleImagePress: Function}, null> {
  renderGridItem(index: number) {
    const image = this.props.data[index];

    return (
      <Image
        name={image.assetName}
        id={image.id}
        key={image.id}
        onPress={this.props.handleImagePress}
      />
    );
  }

  createGridRow(items: Array<any>, key: string) {
    return (
      <RX.View style={styles.gridRow} key={key}>
        { items }
      </RX.View>
    );
  }

  renderGrid() {
    let count = 0;
    let columnCount = 0;
    let gridCount = 0;
    let gridId = `__${gridCount}__`;
    let rows = [];
    let row = []

    while(count < this.props.data.length) {
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

  render(): JSX.Element | null {
    return (
      <RX.ScrollView style={ styles.container }>
        { this.renderGrid() }
      </RX.ScrollView>
    );
  }
}

export default Grid;