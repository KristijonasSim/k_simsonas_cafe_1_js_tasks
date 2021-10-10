console.groupCollapsed('1 - https://edabit.com/challenge/nuXdWHAoHv9y38sn7');
{
const sortDrinkByPrice = drinks => drinks.sort((a,b) => a.price - b.price);


  drinks = [{name: "lemonade", price: 50},{name: "lime", price: 10}]
    console.log(sortDrinkByPrice([{name: "lemonade", price: 50},{name: "lime", price: 10}]))
}
console.groupEnd();

console.groupCollapsed('2 - https://edabit.com/challenge/9KEKJG5PZTFmG3Zau');
{
  const addName = (obj, name, value) => (obj[name] = value);
  

    addName({}, "Brutus", 300) //➞ { Brutus: 300 }

    addName({ piano: 500 }, "Brutus", 400) //➞ { piano: 500, Brutus: 400 }

    addName({ piano: 500, stereo: 300 }, "Caligula", 440) //➞ { piano: 500, stereo: 300, Caligula: 440 }
    
    console.log(addName({ piano: 500 }, "Brutus", 300))
}
console.groupEnd();

console.groupCollapsed('3 - https://edabit.com/challenge/48EJWLhF224na8po3');
{
  function generation(x, y) {
	 const generations = {
     "-3": { m: "great grandfather", f: "great grandmother" },
     "-2": { m: "grandfather", f: "grandmother" },
     "-1": { m: "father", f: "mother" },
     "0": { m: "me!", f: "me!" },
     "1": { m: "son", f: "daughter" },
     "2": { m: "grandson", f: "granddaughter" },
     "3": { m: "great grandson", f: "great granddaughter" },
   }
   return generations [x] [y] }
    generation(2, "f")// ➞ "granddaughter"

    generation(-3, "m")// ➞ "great grandfather"

    generation(1, "f")// ➞ "daughter"

    console.log(generation(0, "m"))

}
console.groupEnd();

console.groupCollapsed('4 - https://edabit.com/challenge/i6YqzHcSiPiEQKjeX');
{
  function maximumScore(tileHand) {
   return tileHand.reduce((a,b) => a + b, 0) 
  }
        [
          { tile: "N", score: 1 },
          { tile: "K", score: 5 },
          { tile: "Z", score: 10 },
          { tile: "X", score: 8 },
          { tile: "D", score: 2 },
          { tile: "A", score: 1 },
          { tile: "E", score: 1 }
        ]

}
console.groupEnd();

console.groupCollapsed('5 - https://edabit.com/challenge/8s2jy9hR2TAeQinKD');
{
  function calculateDifference(obj, limit){
    return Object.values(obj).reduce((a,b)=> a + b, 0) - limit
  } 

  }
    calculateDifference({ "baseball bat": 20 }, 5) //➞ 15

    calculateDifference({ skate: 10, painting: 20 }, 19)// ➞ 11

    calculateDifference({ skate: 200, painting: 200, shoes: 1 }, 400)// ➞ 1

    console.log(calculateDifference({ skate: 10, painting: 20 }, 19))

console.groupEnd();

console.groupCollapsed('6 - https://edabit.com/challenge/pPNAs5PvB3WvnDwDM');
{
  function toArray(obj) {
    return Object.entries(obj);

  }
      toArray({ a: 1, b: 2 }) //➞ [["a", 1], ["b", 2]]

      toArray({ shrimp: 15, tots: 12 })// ➞ [["shrimp", 15], ["tots", 12]]

      toArray({})// ➞ []
  
       console.log(toArray({ a: 1, b: 2 }))
}
console.groupEnd();

console.groupCollapsed('7 - https://edabit.com/challenge/QXWM2oo7rQNiyDsip');
{
  function inkLevels(inks) {
    return Math.min(...Object.values(inks))
  }

      inkLevels({
        "cyan": 23,
        "magenta": 12,
        "yellow": 10
      }) //➞ 10
      
      inkLevels({
        "cyan": 432,
        "magenta": 543,
        "yellow": 777
      }) //➞ 432
      
      inkLevels({
        "cyan": 700,
        "magenta": 700,
        "yellow": 0
      }) //➞ 0

      console.log(inkLevels({
        "cyan": 700,
        "magenta": 700,
        "yellow": 0
      }))
}
console.groupEnd();

console.groupCollapsed('8 - https://edabit.com/challenge/pLNavsePxJ87t9Nak');
{
  function calculateLosses(obj) {
    return Object.values(obj).reduce((a,b)=> a + b, 0) || 'Lucky you!';
  } 

  
      const stolenItems = {
        tv: 30,
        skate: 20,
        stereo: 50,
      } //➞ 100
      
      const stolenItems = {
        painting: 20000,
      } //➞ 20000
      
      const stolenItems = {} //➞ "Lucky you!"
}
console.groupEnd();
