// object destructuring

const band={
  bandName: "Zeppling",
  famousSong: "Stair to the heaven",
  year : 1968,
  anotherSong : "All is Well"
};

const bName= band.bandName;
const fSong= band.famousSong;
// console.log(`band name is ${bName} famous song is ${fSong}`);

const {bandName , famousSong, ...restProp}=band; // bydefault key names se hi variable banege
// console.log(bandName,famousSong);

console.log(restProp);// ek naya object hi bana lia...objects se 
const {bandName : var1, famousSong: var2}=band; // if variable name change krna ho
 console.log(var1,var2);
// react m kaafi kaam aayega object restructuring

