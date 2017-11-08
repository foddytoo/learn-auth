import React, { Component } from 'react';
import { View, TextInput, Text } from 'react-native';

const Input = ({ label, value, onChangeText }) => {

  const { inputStyle, labelStyle, containerStyle } = styles;

  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={{ height: 45, width:180 }}
        style={inputStyle}
      />
    </View>
  );
};

const styles = {

  inputStyle: {
    color: '#757575',
    paddingHorizontal: 15,
    paddingVertical: 5,
    fontSize: 14,
    lineHeight: 24,
    flex: 2
  },
  labelStyle: {
    fontSize: 12,
    paddingLeft: 15,
    flex: 1,
    color: '#757575',
    paddingVertical: 5,
  },
  containerStyle: {
    height: 45,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#bdbdbd',
    borderWidth: 1,
    marginVertical: 30,
  }

};

export { Input };
