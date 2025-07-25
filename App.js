import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

import icon from './assets/icon.png';

export default function App() {
  return (
    <View style={styles.container}>
      <Image blurRadius={10} source={icon} style={{ width: 200, height: 100, resizeMode: 'center'}}/>
      <Image source={{uri: "https://cdn-images.dzcdn.net/images/cover/4333981d6071855ef2f893ea11a33b49/0x1900-000000-80-0-0.jpg"}} style={{ width: 200, height: 100}}/>
      <Text style={{color:'white'}}>Open up App.js to start working on your app!</Text>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
