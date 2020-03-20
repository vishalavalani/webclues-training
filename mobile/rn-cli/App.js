import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AppStyles from './AppStyles';
const App = () => {
  const {container, text} = AppStyles;
  return (
    <View style={container}>
      <Text style={text}>Welcome to React Native training!</Text>
    </View>
  );
};

export default App;
