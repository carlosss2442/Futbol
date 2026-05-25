import { React, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import InfoPartido from './components/infoPartido';
import { Searchbar } from 'react-native-paper';

const App = () => {

  const partidos = [
    { local: "Mallorca", visitante: "Valencia", hora: "21:00", estadio: 'Florida', arbitro: "Martinez Munuera" },
    { local: "Levante", visitante: "Elche", hora: "16:15", arbitro: "Gil manzano" },
    { local: "Barcelona", visitante: "Sevilla", hora: "19:30", arbitro: "Escuadra Fernandez" },
    { local: "Villarreal", visitante: "Girona", hora: "22:00", arbitro: "David serrano" },
  ];

  const [text, setText] = useState("");

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Searchbar
        placeholder='Buscar...'
        onChangeText={(newText) => setText(newText)}
        value={text}
        style={styles.bar}
        theme={{ colors: { onSurfaceVariant: "green" } }}
        placeholderTextColor="green"
        iconColor='green'
      />

      <Text style={styles.titol}>Llistat de partits:</Text>

      <FlatList
        data={partidos}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <InfoPartido
            local={item.local}
            visitante={item.visitante}
            hora={item.hora}
            estadio={item.estadio}
            arbitro={item.arbitro}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 60,
    backgroundColor: "#fff",
  },

  titol: {
    marginVertical: 15,
    fontSize: 25,
    fontWeight: "bold",
    textAlign: 'center',
  },

  bar: {
    width: '100%',
    alignSelf: 'center',
    backgroundColor: 'yellow',
    borderRadius: 15,
  },
});

export default App;