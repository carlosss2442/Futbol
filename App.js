import {React, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import InfoEquip from './components/infoEquip';
import InfoPartido from './components/infoPartido';
const App = () => {



// Pantalla Principal
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.titol}>Llistat de partits:</Text>
      <View style={{flex:0.25}}>
        <InfoPartido local="Barcelona" visitante="Valencia" hora="9:00 pm" arbitro="Gil Manzano"></InfoPartido>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin:5,
    padding: 5,
    backgroundColor: "#fff",
  },
  titol: {
    margin: 5,
    fontSize: 25,
    fontWeight: "bold",

  }
});
export default App;
