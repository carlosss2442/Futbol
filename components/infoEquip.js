import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { getFitxaEquip, getObjEquip } from '../utils/funcionsEquips';

const InfoEquip = (props) => {
  const [mostrarTooltip, setMostrarTooltip] = useState(false);
  const objectTeam = getObjEquip(props.nom);
  const ficha = getFitxaEquip(objectTeam[0]);

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
            {/* Tooltip manual */}
            {mostrarTooltip && (
              <View style={styles.tooltip}>
                <Text style={styles.tooltipText}>{ficha.nuevoNombre}</Text>
              </View>
            )}
            <TouchableOpacity
              onPress={() => setMostrarTooltip(!mostrarTooltip)}
              onLongPress={() => setMostrarTooltip(true)}
              onPressOut={() => setMostrarTooltip(false)}
            >
              <Image
                source={{ uri: ficha.escudo }}
                style={{ width: 80, height: 80 }}
              />
            </TouchableOpacity>
          </View>

        </View>
        <Text style={styles.titol}>{ficha.nombre}</Text>
        <Text style={{ fontSize: 20 }}>{ficha.anyoFun}</Text>
      </View>
    </View>
  );
};

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
    padding: 5,
  },
  cuadro1: {
    alignContent: "center",
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
    height: 80,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  cuadro2: {
    alignContent: "center",
    borderColor: 'black',
    alignItems: 'center',
    width: 80,
    height: 80,
    justifyContent: 'center',
  },
  tooltip: {
    position: 'absolute',
    top: -35,
    backgroundColor: 'rgba(0,0,0,0.75)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    zIndex: 999,
  },
  tooltipText: {
    color: 'white',
    fontSize: 12,
  },
});

export default InfoEquip;