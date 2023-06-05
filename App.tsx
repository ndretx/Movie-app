import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View, Image, SafeAreaView, ScrollView } from 'react-native';
import Movies from './MovieDataSet';


export default function App() {
  return (

    <SafeAreaView style={styles.container}>

        <Text style={styles.titulo}> Movies App</Text>
        <FlatList
          data={Movies}
          // a propriedade key do FlatList espera uma string como identificador único. Portanto, é necessário converter o valor numérico item.id para uma string.
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) =>

            <View style={styles.card}>
              <Image source={item.image} style={styles.image} />
              <Text style={styles.item}>{item.name} </Text>
              <Text style={styles.item}>{item.genre} </Text>
              <Text style={styles.item}>{item.rating} </Text>

            </View>}
        />
      
    </SafeAreaView>

  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },

  item: {
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',

  },
  image: {
    width: 300,
    height: 350,
    marginTop: -80,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'white',
    overflow: 'hidden',

  },
  titulo: {
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',

  },
  card: {
    width: 300,
    height: 400,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 100,
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 10,



  }

});
