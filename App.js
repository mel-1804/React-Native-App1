import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TouchableHighlight } from 'react-native';

import icon from './assets/icon.png';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Image source={icon} style={{ width: 200, height: 100, resizeMode: 'center'}}/>
      <Image source={{uri: "https://cdn-images.dzcdn.net/images/cover/4333981d6071855ef2f893ea11a33b49/0x1900-000000-80-0-0.jpg"}} style={{ width: 200, height: 100}}/>
      <Text style={{color:'white'}}>Tenemos aqui la pp!</Text>
      {/*Este Button no es customizable salvo por el color y texto. No tiene styles*/}
      <Button 
      color='green' 
      title="Pulsa aquí" 
      onPress={() => alert('Hola')}/>

      <TouchableHighlight>
        underlayColor='red'
        onPress={() => alert('Hola desde TouchableHighlight')}
        style={{width: 200, height: 200, backgroundColor: 'blue', borderRadius: 100, justifytContent: 'center', alignItems: 'center'}}
        <Text style={{color: 'white'}}>Pulsa aquí</Text>  
      </TouchableHighlight> 
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
