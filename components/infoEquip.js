import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { getFitxaEquip, getObjEquip, } from '../utils/funcionsEquips';

const InfoEquip = (props) => {
    const objectTeam = getObjEquip(props.nom);
    const ficha = getFitxaEquip(objectTeam[0])

    return (
        <View style={styles.container}>
            <View style={styles.ficha}>
                <Image source={{uri: ficha.escudo}} style={{width: 100, height: 100}}/>
                <Text style={styles.titol}>{ficha.nombre}</Text>
                <Text style={{fontSize: 20}}>{ficha.anyoFun}</Text>
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
    width: 150,
    height: 190,
    borderWidth: 2,
    margin: 5,

  }
});
export default InfoEquip;