import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, ScrollView, Pressable } from 'react-native';
import InfoEquip from './infoEquip';
import { getFitxaEquip, getObjEquip, getNomEstadi } from '../utils/funcionsEquips';
import Detalles from '../../futbol2/components/detalles';

const InfoPartido = ({ local, visitante, hora, estadio = null, arbitro }) => {
    const equipLocal = getObjEquip(local);
    const fitxa = getFitxaEquip(equipLocal[0]);
    const [abrir, setAbrir] = useState(false);

    const buton = () => {
        if (abrir == false) {
            setAbrir(true);
        } else {
            setAbrir(false)
        }
    }
    return (

        <View style={styles.container}>
            <View>
                <View style={styles.estadioYhoraCont}> 
                    <View style={{ flexDirection: 'row', }}>
                        <InfoEquip nom={local}></InfoEquip>
                        <InfoEquip nom={visitante}></InfoEquip>
                    </View>
                    <View style={styles.estadioYhoraText}>
                        <Pressable
                            onPress={() => buton()}
                            style={{width:50}}
                        >
                            <Text style={{ fontWeight: 'bold', fontSize: 18 }}>+ info</Text>
                        </Pressable>
                        {abrir == true && (
                            <Detalles
                                local={local}
                                visitante={visitante}
                                hora={hora}
                                estadio={estadio}
                                arbitro={arbitro}
                            />
                        )}
                    </View>
                </View>
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
        width: 250,
        height: 200,
        borderWidth: 2,

    },
    estadioYhoraCont: {
        justifyContent: 'space-evenly',  // tenías 'space-evenlys' con typo
        backgroundColor: '#d3d3d3ea',
        borderRadius: 10,
        width: '100%',      // ← en vez de 405
        height: 300,     // ← elimina la altura fija
        borderWidth: 1,
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