/*
1. Sukurti klasę Automobilis
  - sukurti konstruktorių, su 3 argumentais:
    - marke, modelis, kaina

  - konstruktoriuje aprašyti, jog perduotus argumentus išsaugotume formuojame objekte savybėmis:
    - this.brand
    - this.model
    - this.price

  */
 class Automobilis {
   constructor(brand, model, price) {
     this.brand = brand;
     this.model = model;
     this.price = price;
   }

 }
/*
2. Sukurkite 3 skirtingus objektus pagal klasę Automobilis kintamuosiuose:*/
const myCar = new Automobilis ("Toyota", "Corola", 10000)
const friendsCar = new Automobilis ("Audi", "tt", 5000)
const momsCar = new Automobilis ("BMW", 350, 1000)
const allCars = [myCar, friendsCar, momsCar];



/*3. Atsispausdinkite car1, car2 ir car3 kintamuosius. Peržiūrėkite juos konsolėje, panagrinėkite kas yra tie objektai */
console.table(myCar);
console.table(friendsCar);
console.table(momsCar);

/*3
4. Atspausdinkite visų kintamųjų (kurie rodo į klasės objektus):*/
  //modelius:
    - console.log(myCar.model);
    - console.log(friendsCar.model);
    - console.log(momsCar.model);
 //markes:
    - console.log(myCar.brand);
    - console.log(friendsCar.brand);
    - console.log(momsCar.brand);
  //kainas:
    - console.log(myCar.price);
    - console.log(friendsCar.price);
    - console.log(momsCar.price);

/*
5. Padidinkite Automobilis objektų kainas šimtu.*/
      myCar.price = myCar.price + 100;
      friendsCar.price = friendsCar.price + 100;
      momsCar.price = momsCar.price + 100;
      console.log(myCar);

/*6. Po padidinimo, vėl atsispausdinkite objektus ir pažiūrėkite pakitusias Automobilis objektų savybes.*/
      console.table(allCars);


