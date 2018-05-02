import React from 'react';
import { Text, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { pressButton } from '../../actions';
export const TEXTBUTTON = {
  FOLOWWING: 'Folowing',
  FOLLOWED: 'Followed',
};

const PressButton = ([props, dispatch]) => (
  <TouchableHighlight
    style={props.styleButton}
    onPress={dispatch(pressButton())}
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
};
export default connect(null, pressButton)(PressButton);
