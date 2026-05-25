
import * as file from '../assets/dades/dades2.json' with { type: "json" };
const dades = file.default.equips;//dades és un array d'equips, ara

// A partir d'un nom d'un equip ('Valencia', 'Levante', 'Barcelona', ... ), 
// obtinc l'objecte d'eixe equip amb totes seues dades.
export const getObjEquip = (nomEquip) => {
    //imprementeu-ho
    return (dades.filter(ele => ele.strTeam == nomEquip));
}
//console.log(getObjEquip("Valencia"));
//a partir d'un obj amb les dades d'un equip, obtinc la imatge de l'escut (strBadge)
const getUrlImatgeEscut = (unEquipObj) => {
    //implementeu-ho
    return (unEquipObj.strBadge);
}
//const equip = getObjEquip("Barcelona");
//console.log(getUrlImatgeEscut(equip[0]));

//obtinc l'any de fundació (intFormedYear)
const getAnyFundacio = (unEquipObj) => {
    //implementeu-ho
    return (unEquipObj.intFormedYear);
}

/* const equip2 = getObjEquip("Valencia");
console.log(getAnyFundacio(equip2[0])); */

//obtinc El nom de l'estadi (strStadium)
const getNomEstadi = (unEquipObj) => {
    //implementeu-ho
    return (unEquipObj.strStadium);
}
/* const equip3 = getObjEquip("Valencia");
console.log(getNomEstadi(equip3[0])); */

//obtinc el nom de l'equip (strTeam)
const getNomEquip = (unEquipObj) => {
    //implementeu-ho
    return (unEquipObj.strTeam);
}
/* const equipo = getObjEquip("Barcelona")
console.log(getNomEquip(equipo[0])); */

const getLigaEquipo = (unEquipObj) => {
    return ([unEquipObj.strLeague, unEquipObj.strLeague2, unEquipObj.strLeague3, unEquipObj.strLeague4])
}

//obtinc la fitxa de l'equip.
//La fitxa consisteix en un objecte amb els atributs: nom,imatgeEscut,anyFundacio,estadi
export const getFitxaEquip = (unEquipObj) => {
    //implementeu-ho
    return ({
        nombre: getNomEquip(unEquipObj),
        escudo: getUrlImatgeEscut(unEquipObj),
        anyoFun: getAnyFundacio(unEquipObj),
        estadio: getNomEstadi(unEquipObj),
        capacidad: getLigaEquipo(unEquipObj),

    })
}

const equipACercar = 'Barcelona';
const objectEquip = getObjEquip(equipACercar)
console.log(getFitxaEquip(objectEquip[0]))

