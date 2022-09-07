import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import LoadURL from './LoadUrl';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Techno App </Text>
      <Text style={{ textAlign:'center',color:"white"}}>Sinhala programing and tech news blogpost</Text>
      <LoadURL name="test home page" eturl="https://intechlk.blogspot.com/" />
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 4,
    backgroundColor:'black',
  },
  paragraph: {
    margin: 10,
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
    color:"white"
  },
});
