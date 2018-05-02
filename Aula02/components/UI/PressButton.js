import React from 'react';
import { Text, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';
export const TEXTBUTTON = {
  FOLOWWING: 'Folowing',
  FOLLOWED: 'Followed',
};

const PressButton = (props) => (
  <TouchableHighlight
    style={props.styleButton}
    onPress={props.onPress}
  >
    <Text
      style={
        props.pressed ? props.stylesButtonPressed : props.stylesButtonUnpressed
      }
    >
      {props.pressed ? TEXTBUTTON.FOLOWWING : TEXTBUTTON.FOLLOWED}
    </Text>
  </TouchableHighlight>
);

PressButton.propTypes = {
  styleButton: PropTypes.object.isRequired,
  pressed: PropTypes.bool.isRequired,
  stylesButtonPressed: PropTypes.object.isRequired,
  stylesButtonUnpressed: PropTypes.object.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default PressButton;
