import React from 'react';
import { StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';
import PressButton from './components/UI/PressButton';
import { pressButton } from './actions';

const store = createStore(reducer);
const pressed = false;
const styles = StyleSheet.flatten({
  container: {
    paddingTop: 40,
    backgroundColor: 'pink',
    flex: 1,
    justifyContent: 'flex-end',
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

function App() {
  return (
    <Provider store={store}>
      <PressButton
        styleButton={styles.button}
        pressed={pressed}
        stylesButtonPressed={styles.buttonTextPressed}
        stylesButtonUnpressed={styles.buttonTextUnpressed}
        onPress={() => store.dispatch({ type: pressButton })}
      />
    </Provider>
  );
}

export default App;
