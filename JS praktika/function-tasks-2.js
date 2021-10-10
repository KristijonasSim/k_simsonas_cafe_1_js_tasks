// ----------------------Užduotys--------------------------
const numbers = [1, 2, -2, 6, -5, 9, 1.02, 45, -69, 77, -12, 2, 8, -2, -4, 59, 7, -3];

console.group('1. Padauginti masyvo narius iš 2');
console.log('---');
{
  
  console.log({
    numbers,
    numbersDoubled: numbers.map(a => a * 2)
  });
}
console.log('---');
console.groupEnd();
console.log();

console.group('2. Pakelti masyvo narius kvadratu');
console.log('---');
{
  console.log({
    numbers,
    numbersDoubled: numbers.map(a => a ** 2)
  });
}
console.log('---');
console.groupEnd();
console.log();

console.group('3. Padauginti masyvo narius iš jų index\'o (vietos masyve)');
console.log('---');
{
  console.log({
    numbers,
    numbersDoubled: numbers.map((a,i) => a * i)
  });
}
console.log('---');
console.groupEnd();
console.log();

console.group('4. Atrinkti tiktai teigimų elementų masyvą');
console.log('---');
{
  console.log({
    numbers,
    numbersDoubled: numbers.map(a => a > 0)
  });
}
console.log('---');
console.groupEnd();
console.log();

console.group('5. Atrinkti tiktai neigiamų elementų masyvą');
console.log('---');
{
  console.log({
    numbers,
    numbersDoubled: numbers.map(a => a < 0)
  });
console.log('---');
console.groupEnd();
console.log();
}
console.group('6. Atrinkti tiktai lyginių skaičių masyvą');
console.log('---');
{
  console.log({
    numbers,
    numbersDoubled: numbers.map(a => a % 2 === 0)
  });
}
console.log('---');
console.groupEnd();
console.log();

console.group('7. Atrinkti tiktai nelyginių skaičių masyvą');
console.log('---');
{
  console.log({
    numbers,
    numbersDoubled: numbers.map(a => a % 2 === 1)
  });
}
console.log('---');
console.groupEnd();
console.log();

console.group("8. Visas neigiamas vertes masyve padaryti teigiamomis");
{
  console.log({
    numbers,
    result: numbers.map(Math.abs)
  });
}
console.groupEnd();
console.log();

console.group('9. Pakelti visas masyvo reikšmes laipsniu \'index\'');
console.log('---');
{
  console.log({numbersDoubled: numbers.map((a,i) => a ** i)
  });
}
console.log('---');
console.groupEnd();
console.log();

console.group('10. Atrinkti tik natūralių skaičių masyvą');
console.log('---');
{
  console.log(numbers.filter(x => x % 1 === 0 && x > 0))
}
console.log('---');
console.groupEnd();
console.log();

console.group('11. Suapvalinti visas masyvo reikšmes iki sveikų skaičių');
console.log('---');
{
  console.log(numbers.map(Math.round))
}
console.log('---');
console.groupEnd()

console.group('12. Atrinkti kas antrą elementą');
console.log('---');
{
console.log(numbers.filter((x, i) => i % 2 === 0))
}
console.log('---');
console.groupEnd();

console.group('13. Atrinkti kas penktą elementą');
console.log('---');
{
  console.log(numbers.filter((x, i) => i % 5 === 0))

}
console.log('---');
console.groupEnd();


console.group('14. Sukurti funkciją, kuri ima masyvą ir atspausdina kiekvieną jo reikšmę atskirai: [0] => 64. (nieko negrąžina)');
console.log('---');
{
 numbers.forEach((x,i) => console.log( `${x} => ${i}`));
}
console.log('---');
console.groupEnd();

console.group('15. Sukurti funkciją, kuri ima masyvą ir grąžina visų elementų sumą');
console.log('---');
{
  console.log({
    numbers,
    sum: numbers.reduce((x, i) => x + i)});
}
console.log('---');
console.groupEnd()

console.group('16. Sukurti funkciją, kuri ima masyvą ir grąžina visų elementų vidurkį');
console.log('---');
{
  console.log({
    numbers,
    sum: numbers.reduce((x, i) => x + i / numbers.length, 0)
  });
}

console.log('---');
console.groupEnd()

console.group('17. Sukurti funkciją, kuri ima masyvą ir grąžina didžiausią skaičių masyve.');
console.log('---');
{
  console.log({max: Math.max(...numbers)
  });

}
console.log('---');
console.groupEnd()

console.group('18. Sukurti funkciją, kuri ima masyvą ir grąžina mažiausią skaičių masyve.');
console.log('---');
{
  console.log({min: Math.min(...numbers)
  });

}
console.log('---');
console.groupEnd();
