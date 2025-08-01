import { StatusBar } from 'expo-status-bar'
import { useState, useEffect } from 'react'
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

  // useEffect(() => {
  //   getLatestGames()
  //     .then((games) => {
  //       console.log('GAMES RECIBIDOS:', games) // <- Agrega esto
  //       setGames(games)
  //     })
  //     .catch((error) => {
  //       console.error('ERROR AL OBTENER GAMES:', error)
  //     })
  // }, [])

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      {games.map((game, index) => (
        <View key={game.slug || index} style={styles.card}>
          {game.background_image && (
            <Image
              source={{ uri: game.background_image }}
              style={styles.image}
            />
          )}
          <Text style={styles.tittle}>{game.name}</Text>
          <Text style={styles.description}>Lanzamiento: {game.released}</Text>
          <Text style={styles.score}>Score: N/A</Text>
        </View>
      ))}
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
  card: {},
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  tittle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#fff',
  },
  description: {
    fontSize: 16,
    color: '#eee',
  },
  score: {
    fontSize: 16,
    color: 'green',
    marginTop: 10,
  },
})
