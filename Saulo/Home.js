import React from 'react';
import { StyleSheet, View, Text, ActivityIndicator } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import SearchButton from './components/SearchButton';
import { requestUserData } from './actions';

class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      pressed: false,
      isLoading: false,
    };
  }

  onPressButton() {
    const pressed = !this.state.pressed;
    this.props.requestUserData();
    this.setState({ isLoading: true });
    this.setState({ pressed }, () => console.log('ALTEROU'));
  }

  user = (x) => (
    <Text key={x.id}>
      {x.name} {x.username}
    </Text>
  );

  render() {
    // if (this.state.isLoading) {
    //   return (
    //     <View style={{ flex: 1, justifyContent: 'center' }}>
    //       <ActivityIndicator />
    //     </View>
    //   );
    // }
    const results = [...this.props.data];
    return (
      <View style={styles.container}>
        {results.map(this.user)}
        <SearchButton
          styleButton={styles.button}
          pressed={this.state.pressed}
          stylesButtonPressed={styles.buttonPressed}
          stylesButtonUnpressed={styles.buttonUnpressed}
          onPressButton={() => this.onPressButton()}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => ({ data: state.data });

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ requestUserData }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);

const styles = StyleSheet.flatten({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 40,
    justifyContent: 'flex-end',
  },
  button: {
    backgroundColor: '#333',
    height: 60,
    margin: 20,
    borderWidth: 2,
    borderColor: '#05a5d1',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonUnpressed: {
    color: 'white',
    fontSize: 17,
    fontWeight: '600',
  },
  buttonPressed: {
    color: '#05a5d1',
    fontSize: 17,
    fontWeight: '600',
  },
});
