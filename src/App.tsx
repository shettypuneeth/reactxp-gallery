/*
* This file demonstrates a basic ReactXP app.
*/

import RX = require('reactxp');

import Gallery from './components/Gallery';

const styles = {
    container: RX.Styles.createViewStyle({
        flex: 1,
    })
};

class App extends RX.Component<null, null> {
    render(): JSX.Element | null {
        return (
            <RX.View style={ styles.container }>
                <Gallery />
            </RX.View>
        );
    }
}

export = App;
