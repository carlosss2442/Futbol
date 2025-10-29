
import * as file from '../assets/dades/dades.json' with { type: "json" };
const dades = file.default.equips;//dades és un array d'equips, ara

// A partir d'un nom d'un equip ('Valencia', 'Levante', 'Barcelona', ... ), 
// obtinc l'objecte d'eixe equip amb totes seues dades.
const getObjEquip = (nomEquip)=> {
    //imprementeu-ho
}

//a partir d'un obj amb les dades d'un equip, obtinc la imatge de l'escut (strBadge)
const getUrlImatgeEscut = (unEquipObj)=>{
    //implementeu-ho
}

//obtinc l'any de fundació (intFormedYear)
const getAnyFundacio = (unEquipObj)=>{
    //implementeu-ho
}

//obtinc El nom de l'estadi (strStadium)
const getNomEstadi = (unEquipObj)=>{
    //implementeu-ho
}

//obtinc el nom de l'equip (strTeam)
const getNomEquip = (unEquipObj)=>{
   //implementeu-ho
}

//obtinc la fitxa de l'equip.
//La fitxa consisteix en un objecte amb els atributs: nom,imatgeEscut,anyFundacio,estadi
const getFitxaEquip = (unEquipObj)=>{
   //implementeu-ho
}

const equipACercar = 'Girona';


