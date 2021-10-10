//1. Sukurti objektų(žmonių) masyvą su 8 elementais, kuriame būtų:



const people = [
  {
    name: 'Jonas',
    surname: 'Jonaitis',
    sex: 'male',
    age: 26,
    height: 1.85,
    weight: 90,

  },
  {
    name: 'Severija',
    surname: 'Piktutytė',
    sex: 'female',
    age: 26,
    height: 1.75,
    weight:65,
  },
  {
    name: 'Valdas',
    surname: 'Vilktorinas',
    sex: 'male',
    age: 16,
    height:1.80,
    weight:79,
  },
  {
    name: 'Virginijus',
    surname: 'Uostauskas',
    sex: 'male',
    age: 32,
    income: 2400,
    height: 1.95,
    weight: 100,
  },
  {
    name: 'Samanta',
    surname: 'Uostauskienė',
    sex: 'female',
    age: 19,
    height: 1.80,
    weight: 72,
  },
  {
    name: 'Janina',
    surname: 'Stalautinskienė',
    sex: 'female',
    age: 72,
    height: 1.60,
    weight: 70,
  }
];
//2. Panaudojant array.foreach:
//  - Atspausdinti kiekvieną elementą
// - Atspausdinti kiekvieno elemento pilną vardą
// - Atspausdinti kiekvieno elemento kūno masės indeksą


console.groupCollapsed(`2.1.Atspausdinti kiekvieną elementą`) 

{
  people.forEach(p => console.table(`${p.name} ${p.surname} - ${p.sex}, ${p.age}, ${p.height}, ${p.weight},${p.KMI}`))
}
console.groupEnd();
console.log(`---`)
console.log(`---`)

console.groupCollapsed(`2.2.Atspausdinti kiekvieno elemento pilną vardą`) 
{
  people.forEach(p => console.log(`${p.name} - ${p.surname}`))
}
console.groupEnd();
console.log(`---`)
console.log(`---`)

console.groupCollapsed(`2.3.Atspausdinti kiekvieno elemento kūno masės indeksą`) 
{
  people.forEach(({weight, height}) => console.log(weight / height ** 2))
}
console.groupEnd();
console.log(`---`)
console.log(`---`)

//3. Panaudojant array.filter atrinkti į naują masyvą ir po to atspausdinti žmones:
//- kurių vardas ilgesnis nei 6 simboliai
//- kurių svoris didesnis nei 80kg
//- kurie aukštesni nei 185cm

console.groupCollapsed(`3.1 kurių vardas ilgesnis nei 6 simboliai`) 
{ people
  .filter(({name}) => name.length > 6)
  .forEach(({ name }) => console.log(name)); 
}

console.groupEnd();
console.log(`---`)
console.log(`---`)

console.groupCollapsed(`3.2 kurių svoris didesnis nei 80kg`) 
{ people
  .filter(({weight}) => weight > 80)
  .forEach(({ name }) => console.log(name)); 
}
console.groupEnd();
console.log(`---`)
console.log(`---`)

console.groupCollapsed(`3.2 kurie aukštesni nei 185cm`) 
{ people
  .filter(({height}) => height > 185)
  .forEach(({ name }) => console.log(name)); 
}
console.groupEnd();
console.log(`---`)
console.log(`---`)


//4. Panaudojant array.map atrinkti į naują masyvą ir po to atspausdinti
//  - ūgius
// - svorius
//  - ūgius, svorius ir amžius : [{height, weight, age}, ...]
//  - KMI indeksus
//  - KMI indeksus ir amžius

console.groupCollapsed(`4.1 ūgius`) 
{ 
  {
    const result = people.map(({height}) =>({height}));
    console.table(result);
  }
}  
console.groupEnd();
console.log(`---`)
console.log(`---`)


console.groupCollapsed(`4.2 svorius`) 
{ 
  {
    const result = people.map(({weight}) =>({weight}));
    console.table(result);
  }
}  
console.groupEnd();
console.log(`---`)
console.log(`---`)

console.groupCollapsed(`4.3 ūgius, svorius ir amžius`) 
{ 
  {
    const result = people.map(({height, weight, age}) =>({height, weight, age}));
    console.table(result);
  }
}  
console.groupEnd();
console.log(`---`)
console.log(`---`)


console.groupCollapsed(`4.4 KMI`) 
{ 
  {
    const peopkeKMI = people.map(p => p.weight / p.height **2);
    console.table(peopkeKMI);
  }
}  
console.groupEnd();
console.log(`---`)
console.log(`---`)


console.groupCollapsed(`4.5 KMI indeksus ir amžius`) 
{ 
  console.table(people.map(({weight, height, age })=>({
    age,
    bmi: weight / height **2
  })))
}  
console.groupEnd();
console.log(`---`)
console.log(`---`)

//5. Panaudojant array.reduce suskaičiuoti ir po to atspausdinti
//- svorių vidurkį
//- ūgio vidurkį


console.groupCollapsed(`5.1 svorių vidurkį`) 
{ 
  var arr = Object.values(people);
  var sum = (prev, cur) => ({weight: prev.weight + cur.weight});
  var avg = arr.reduce(sum).weight / arr.length;
  console.log(avg);

  console.log(people.reduce((sum, p) => sum + p.weight, 0) / people.length);
}  
console.groupEnd();
console.log(`---`)
console.log(`---`)

console.groupCollapsed(`5.1 ūgio vidurkį`) 
{ 
  var arr = Object.values(people);
  var sum = (prev, cur) => ({height: prev.height + cur.height});
  var avg = arr.reduce(sum).height / arr.length;
  console.log(avg);

  console.log(people.reduce((sum, p) => sum + p.height, 0) / people.length);
}  
console.groupEnd();
console.log(`---`)
console.log(`---`)


//0. Pasinaudojant 1 dalies elementų masyvu, sukurti Person prototipų(Class) masyvą:

console.groupCollapsed(`6.1 suskaičiuoja kūno masės indeksą`) 
{ 
  class person {
    name;
    surname;
    height;
    weight;
    sex;;
    age;
    constructor({name, surname, height, weight, sex, age}) {
      this.name = name;
      this.surname = surname;
      this.height = height;
      this.weight = weight;
      this.sex = sex;
      this.age = age;

    }
    
    getBMI(){
      return this.weight / this.height ** 2
    }

    toString(){
      
      return `${this.name} ${this.surname}:\n`
      +`\theight: ${this.height}`
      +`\tweight: ${this.weight}`
      +`\tsex: ${this.sex}`
      +`\tage: ${this.age}`;

    }


}
  const result = peopleArr.filter(p => p.sex === `female` && p.age <= 20 && p.weight > 70)
  console.table(result);
  const peopleArr = people.map(p => new person(p));
  {
  console.table(peopleArr);
  peopleArr.forEach(p => console.log(p.getBMI()));
  peopleArr.forEach(p => console.log(p.toString()));

  }
}  
console.groupEnd();
console.log(`---`)
console.log(`---`)