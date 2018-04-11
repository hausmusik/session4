//alert ("hello enis");

let nachricht = "Hallo Enis"; //laesst sich im nachhinein aendern
//alert (nachricht);
nachricht = "Anderer Text";
//alert (nachricht)
console.log(nachricht);

const linkColor = "#ff0000"; //laesst sich nicht mehr aendern
let neueVariable = "test";
console.log("Variable: Neue Variable:", neueVariable);

//Variable als Zahlen
let highscore = 78.324;
console.log ("Highscore:", highscore /20); //direktes Rechnen

let meineNachricht = "test1";
meineNachricht = "test2";
console.log (meineNachricht);
meineNachricht = `Hallo
balabbalaalba
blalala
blabla`; //man kann ueber mehrere zeilen schreiben
console.log (meineNachricht)

let fullname = "Julian 'the dude' Enis" //Verschiedene Anfuehrungszeichen koennen verschachtelt werden
console.log (fullname)

let isOver18 = true; //kann nur wahr oder falsch sein
console.log ("ueber 18?", isOver18);
let age = 17;
console.log("age over 18", age > 18);

let zahlenListe = [2, 4, 67, 45, 32]; //Liste
console.log (zahlenListe);
let nameList = ["s", "is", "nis", "enis"];
console.log(nameList [1]); //Heraussuchen von einzelnen Eintraegen vie Nummer in []

console.log(nameList.length); //Laenge der Liste
console.log(fullname.length)
let benutzer = {
    vorname: "Julian",
    nachname: "Zwerenz",
    Alter: 21
};
console.log ("Benutzer:", benutzer.Alter);//mit .irgendwas kann man sich das entsprechende attribute anzeigen lassen
benutzer.Bestzeit = 200; //Hinzufuegen von weitern Attributen
console.log(benutzer);
benutzer["Bestzeit ever"] = 100;
console.log(benutzer);

//Benutzereingabe
//let alter = prompt ("Wie alt bist du");
//console.log(alter);
//console.log("Ueber 18?", alter > 18);

//Abfrage
// if (alter > 18) {
//     console.log("Du darfst ausnahmsweise rein");
// } else {
//     console.log("leider bist du noch nicht 18");
// }
for (let i=0;i<10;i++) {  //oder für das voranschreiten: i = i + 1
    console.log ("Wert von i:",i);
}
function showAge(birthYear) { //Funktion zur Berechnung von irgendwas
    let age = 2018 - birthYear;
    console.log ("Du bist", age, "Jahre alt");
}

showAge (1967);
showAge (1988);

function calcAge (birthYear) { // Funktion zur reinen Berechnung
    return 2018 - birthYear;
}
console.log ("Du bist", calcAge(1991), "Jahre alt.");

