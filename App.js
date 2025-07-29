import { StatusBar } from 'expo-status-bar'
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableHighlight,
  TouchableOpacity,
  Pressable,
} from 'react-native'
import { getLatestGames } from './lib/metacritic'

export default function App() {
  const [games, setGames] = useState([])

  useEffect(() => {
    getLatestGames().then((games) => {
      setGames(games)
    })
  }, [])

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Image
        source={icon}
        style={{ width: 200, height: 100, resizeMode: 'center' }}
      />
      <Image
        source={{
          uri: 'https://cdn-images.dzcdn.net/images/cover/4333981d6071855ef2f893ea11a33b49/0x1900-000000-80-0-0.jpg',
        }}
        style={{ width: 200, height: 100 }}
      />
      <Text style={{ color: 'white' }}>Tenemos aqui la pp!</Text>
      {/*Este Button no es customizable salvo por el color y texto. No tiene styles--------------------------------------------------------*/}
      <Button color="green" title="Pulsa aquí" onPress={() => alert('Hola')} />

      {/*TouchableHighlight---------------------------------------------------------------------------------------------------------------*/}
      <TouchableHighlight
        underlayColor={'#09F'}
        onPress={() => alert('Hola desde TouchableHighlight')}
        style={{
          width: 200,
          height: 200,
          backgroundColor: 'red',
          borderRadius: 100,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text style={{ color: 'white' }}>Pulsa aquí</Text>
      </TouchableHighlight>

      {/*TouchableOpacity-------------------------------------------------------------------------------------------------------------------*/}
      <TouchableOpacity
        onPress={() => alert('Hola desde TouchableOpacity')}
        style={{
          width: 200,
          height: 200,
          backgroundColor: 'blue',
          borderRadius: 100,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text style={{ color: 'white' }}>Pulsa aquí</Text>
      </TouchableOpacity>

      {/*Pressable---------------------------------------------------------------------------------------------------------------------------*/}
      <Pressable
        onPress={() => {}}
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
          },
          styles.wrapperCustom,
        ]}
      >
        {({ pressed }) => (
          <Text style={{ fontSize: pressed ? 32 : 16 }}>
            {pressed ? 'Pressed!' : 'Press Me'}
          </Text>
        )}
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
