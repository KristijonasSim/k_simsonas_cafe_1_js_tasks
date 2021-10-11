/*
  Trukmė:
    Egzamino užduotis trunka 1val ir 30min
    Pradžia: 18:30
    Pabaiga: 20:00

  Pateikimas:
    Failo pavadinimas turi būti tokiu formatu: vardas_pavarde.js
    Užduoties failą reikia man atsiųsti per Miscrosoft Teams programą, privačia žinute(matysis atsiuntimo laikas)
*/
class Apartment {
  street;
  city;
  type;
  price;
  rooms;

  constructor({street, city, type, price, rooms}) {
    this.street = street;
    this.city = city;
    this.type = type;
    this.price = price;
    this.rooms = rooms;
  } 
 
  get fullAdress() {
    return this.street + ' ' + this.city;
  }

  get squares() {
    return this.rooms.reduce((sum, c) => sum + c)
  }

  get roomCount() {
    return this.rooms.length
  }
}


const data = [
   { street: 'Savanorių g. 10', city: 'Vilnius', type: 'flat', price: 90000, rooms: [24, 31] },
   { street: 'Verkių g. 10', city: 'Vilnius', type: 'house', price: 150000, rooms: [24, 16, 14, 12] },
   { street: 'Jaunimo g. 17', city: 'Vilnius', type: 'cottage', price: 120000, rooms: [10, 10, 16, 14, 12] },
   { street: 'Veidrodžių g. 75', city: 'Vilnius', type: 'house', price: 220000, rooms: [24, 16, 16, 14, 12] },
   { street: 'Gedimino pr. 18', city: 'Vilnius', type: 'flat', price: 370000, rooms: [24, 32, 31] },
   { street: 'Jonavos g. 17', city: 'Kaunas', type: 'house', price: 90000, rooms: [18, 20, 12, 60] },
   { street: 'Savanorių pr. 21a', city: 'Kaunas', type: 'flat', price: 60000, rooms: [24, 30] },
   { street: 'Partizanų g. 55', city: 'Kaunas', type: 'flat', price: 75000, rooms: [20, 30, 16] },
   { street: 'Krantų pr. 18', city: 'Klaipėda', type: 'house', price: 77000, rooms: [17, 12, 10, 5] },
]

const apartment = data.map((a) => new Apartment(a));


/*
  1. Sukurkite klasę Apartment, kuri turi tokias savybes:
    street: String
    city: String
    type: 'flat'|'house'|'cottage'  (viena iš trijų string reikšmių)
    price: Number
    rooms: Array<Number>   (masyvas sudarytas iš skaičių)
*/
console.group("1. Sukurkite klasę Apartment");
{
  console.dir(Apartment)
}
console.groupEnd();

// Šios užduoties rezultatą naudoti kitoms užduotims atlikti
console.group("2. Naudodami <data> kintamojo duomenis, sukurkite masyvą sudarytą iš Apartment klasės objektų.");
{
  console.log(apartment);
}
console.groupEnd();

console.group("3. Klasėje Apartment sukurkite get'erį 'address' kuris grąžintų pilną būsto adresą, formatu: 'GATVĖ, MIESTAS'.");
{
  apartment.forEach(a => console.log(a.fullAdress));
}
console.groupEnd();

console.group("4. Klasėje Apartment sukurkite get'erį 'squares' kuris grąžina visą būsto kvadratūrą.");
{
  apartment.forEach(a => console.log(a.squares));

}
console.groupEnd();

console.group("5. Klasėje Apartment sukurkite get'erį 'roomCount' kuris grąžina būsto kambarių skaičių.");
{
  apartment.forEach(a => console.log(a.roomCount));

}
console.groupEnd();

console.group("6. Atrinkite ir atspausdinkite visus būstus iš Vilniaus, kurių tipas yra 'flat'");
{
  typeFlat = apartment.filter(c => c.type.includes('flat'));
  console.table(typeFlat); 
 
}
console.groupEnd();

console.group("7. Atrinkite ir atspausdinkite visus būstus NE iš Kauno, kurie yra didesni nei 4 kambarių.");
{
  notFromKaunas = apartment.filter(c => c.rooms.length > 4 && !c.city.includes(`Kaunas`));
  console.table(notFromKaunas); 
}
console.groupEnd();

console.group("8. Atrinkite ir atspausdinkite visus būstus kurių kvadratūra didesnė už 60.");
{
  moreThen60squores = apartment.filter(c => c.squares > 60 );
  console.table(moreThen60squores); 
}
console.groupEnd();

console.group("9. Atrinkite visus būstus kurių vieno kvadrato kaina yra didesnė nei 2000");
{
  expensiveApart = apartment.filter(c => c.price / c.squares > 2000 );
  console.table(expensiveApart); 

}
console.groupEnd();

/*
Apartment {      →             {
  street,        →               street,
  city,          →               city,        
  type,          →               type,
  price,         →               price,
  rooms,         →               rooms,
}                →               roomCount,   +
                 →               squars,      +
                 →               address      +
                 →             }

*/
console.group("10. Suformuokite naują masyvą, kur kiekvienas orginalus objektas būtų papildytas Apartmet klasės get'erių reikšmėmis:");
{
  const result = apartment.map(({ street, city, type, price, rooms, fullAdress, squares, roomCount }) => ({
    street,
    city,
    type,
    price,
    rooms,
    fullAdress,
    squares,
    roomCount
  }));
  console.table(result);
}



console.groupEnd();
