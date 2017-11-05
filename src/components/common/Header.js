// Import libraries for making a Component
import React from 'react';
import { Text, View } from 'react-native';


// Make a static Component
const Header = (props) => {
  const { textStyle, viewStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
    //<Text style={textStyle}>Albums</Text>
  );
};

// Styling
const styles = {
  viewStyle: {
    backgroundColor: 'white',
    //flex: 1,
    height: 56,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowColor: '#212121',
    elevation: 2,
    // borderBottomWidth: 1,
    // borderBottomColor: '#e8e8e8',
  },
  textStyle: {
    fontSize: 14,
    //paddingHorizontal: 60,
    color: '#212121',
    fontFamily: 'Verdana'
  }
};

// Make it available to other parts of the app
export { Header };
