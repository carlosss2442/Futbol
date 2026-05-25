
import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { getFitxaEquip, getObjEquip, } from '../utils/funcionsEquips';
import InfoEquip from './infoEquip';

const InfoPartido = ({ local, visitante, hora, estadio = null, arbitro }) => {
    const objectTeam = getObjEquip(local)
    const ficha = getFitxaEquip(objectTeam[0]);

    return (
        <View style={styles.container}>
            <View style={styles.estadioYhoraCont}>
                <View style={{ flexDirection: 'row' }}>
                    <InfoEquip nom={local}></InfoEquip>
                    <InfoEquip nom={visitante}></InfoEquip>
                </View>
                <Text style={styles.text1}>{hora}</Text>
                <Text style={styles.text1}>{estadio == null ? ficha.estadio : estadio} : {ficha.capacidad}</Text>
                <Text style={styles.text1}>{arbitro}</Text>
            </View>

        </View>
    )

}

const styles = StyleSheet.create({
    container: {

        backgroundColor: 'white',
        alignItems: 'center',
        alignContent: 'center',
        marginTop: 10,

    },
    titol: {
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 10,
    },
    partido: {
        alignContent: 'center',
        backgroundColor: 'yellow',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        width: 25,
        height: 200,
        borderWidth: 2,

    },
    estadioYhoraCont: {
        justifyContent: 'space-evenlys',
        backgroundColor: '#d3d3d3',
        borderRadius: 10,
        width: 330,
        height: 290,
        borderWidth: 2,
        alignContent: 'center',
        alignItems: 'center',
        padding: 5,
        marginBottom: 3,
    },

    estadioYhoraText: {
        fontWeight: 'bold',
        fontSize: 20,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: '#a9a9a9',
        borderRadius: "5%",
        padding: 5,
        width: 300,
    },
    text1: {
        fontSize: 18,
        fontWeight: 'bold'
    },

});


export default InfoPartido;