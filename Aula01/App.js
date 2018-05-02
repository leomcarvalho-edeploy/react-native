import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';
import PressButton from './components/UI/PressButton';

const store = createStore(reducer);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    height: 60,
    borderColor: '#05A5D1',
    borderWidth: 2,
    backgroundColor: '#333',
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTextUnpressed: {
    color: '#FAFAFA',
    fontSize: 20,
    fontWeight: '600',
  },
  buttonTextPressed: {
    color: 'blue',
    fontSize: 20,
    fontWeight: '600',
  },
});

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <PressButton
            styleButton={styles.button}
            pressed={this.state.pressed}
            stylesButtonPressed={styles.buttonTextPressed}
            stylesButtonUnpressed={styles.buttonTextUnpressed}
          />
        </View>
      </Provider>
    );
  }
}
