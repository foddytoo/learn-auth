import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

// Class function that has some self awareness. Better than static const.
const Button = (props, { onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonStyle}>
      <Text style={styles.textStyle}>{props.children}</Text>
    </TouchableOpacity>
  );
};

const styles = {

  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#424242',
    borderRadius: 3,
    padding: 15
  },

  textStyle: {
    alignSelf: 'center',
    fontSize: 14,
    fontWeight: '600',
    color: '#FFF'
  }
};

export { Button };
