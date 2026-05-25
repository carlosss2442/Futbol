import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { getFitxaEquip, getObjEquip, } from '../utils/funcionsEquips';


const InfoEquip = (props) => {
  const objectTeam = getObjEquip(props.nom);
  const ficha = getFitxaEquip(objectTeam[0])

  const imatgesCompeticions = {
    "Spanish La Liga": require("../assets/imagenes/LL.png"),
    "Copa del Rey": require("../assets/imagenes/CopaDelRey.png"),
    "Supercopa de Espana": require("../assets/imagenes/Supercopa.png"),
    "UEFA Champions League": require("../assets/imagenes/UEFA_Champions.png")
  };

  return (
    <View style={styles.container}>
      <View style={styles.ficha}>
        <View style={{ flexDirection: 'row' }}>
          <View style={styles.cuadro1}>
            {ficha.competiciones.map((item, index) => (
              <Image
                key={index}
                source={imatgesCompeticions[item]}
                style={{ width: "40%", height: "40%" }}
              />
            ))}
          </View>
          <View style={styles.cuadro2}>
            <Image source={{ uri: ficha.escudo }} style={{ width: "100%", height: "100%" }} />
          </View>
        </View>
        <Text style={styles.titol}>{ficha.nombre}</Text>
        <Text style={{ fontSize: 20 }}>{ficha.anyoFun}</Text>
      </View>
    </View>
  )


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    alignContent: 'center',

  },
  titol: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  ficha: {
    alignContent: 'center',
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    width: 160,
    height: 150,
    borderWidth: 2,
    margin: 5,
    padding: 5
  },

  cuadro1: {

    alignContent: "center",
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
    height: 80,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },

  cuadro2: {
    alignContent: "center",
    borderColor: 'black',
    alignItems: 'center',
    width: 80,
    height: 80,
    justifyContent: 'center'

  }
});
export default InfoEquip;