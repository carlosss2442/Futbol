import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { getFitxaEquip, getObjEquip, } from '../utils/funcionsEquips';

const MostrarError = ({text}) => {
    return (
        <View style={styles.cajaNo}>
             <Text style={styles.titol}>No he trobat cap partit amb els equips que contenen <Text style={{color: 'blue', fontWeight: 'bold'}}>"{text}"</Text> </Text>
            <Image source={require("../assets/robot.jpg")} style={{height: 230, width: 120}}></Image>
        </View>
    )
}
const styles = StyleSheet.create({
  
  titol: {
    margin: 5,
    fontSize: 25,
    fontWeight: "bold",
    justifyContent: 'center',
    alignItems: 'center',

  },
  barpanel: {
    flex: 1,
    marginTop: "10%",
  },
  bar: {
    backgroundColor: 'yellow',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 25,
  },
  cajaNo: {
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: "30%",
  }
});
export default MostrarError;