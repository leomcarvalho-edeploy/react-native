import React from 'react';
import { Text, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';

const TextButton = {
  Press: 'SEARCH',
  Pressed: 'SEARCHING',
};

const SearchButton = (props) => (
  <TouchableHighlight
    style={props.styleButton}
    onPress={() => props.onPressButton()}
  >
    <Text
      style={
        props.pressed ? props.stylesButtonPressed : props.stylesButtonUnpressed
      }
    >
      {props.pressed ? TextButton.Pressed : TextButton.Press}
    </Text>
  </TouchableHighlight>
);

SearchButton.propTypes = {
  styleButton: PropTypes.object.isRequired,
  pressed: PropTypes.bool.isRequired,
  stylesButtonPressed: PropTypes.object.isRequired,
  stylesButtonUnpressed: PropTypes.object.isRequired,
  onPressButton: PropTypes.func.isRequired,
};

export default SearchButton;
