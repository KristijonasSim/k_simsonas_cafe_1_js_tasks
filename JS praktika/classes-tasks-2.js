

console.groupCollapsed('1. - https://edabit.com/challenge/ZngT4zDckDugt2JGY');
{
  class Player {
    constructor(name, age, height, weight) {
      this.name = name;
      this.age = age;
      this.height = height;
      this.weight = weight;
    }
    
    getAge() {
      return `${this.name} is age ${this.age}`
    }
  
    getHeight() {
      return `${this.name} is ${this.height}cm`
    }
      
    getWeight() {
      return `${this.name} weighs ${this.weight}kg`
    }
  }		

   const p1 = new Player("David Jones", 25, 175, 75)
   console.log(p1.getAge());
   console.log(p1.getHeight());
   console.log(p1.getWeight());

}

console.groupEnd();

console.groupCollapsed('2. - https://edabit.com/challenge/yxKoCKemzacK6PECM');
{
  class Calculator {
    add(param1, param2) {
      return param1 + param2;
    }
    subtract(param1, param2) {
      return param1 - param2;
    }
    multiply(param1, param2) {
      return param1 * param2;
    }
    divide(param1, param2) {
      return param1 / param2;
    }
  }


  const arg1 = 10;
  const arg2 = 5;

  const calc = new Calculator();
  console.log(calc.add(arg1, arg2));
  console.log(calc.subtract(arg1, arg2));
  console.log(calc.multiply(arg1, arg2));
  console.log(calc.divide(arg1, arg2));




}
console.groupEnd();

console.groupCollapsed('3. - https://edabit.com/challenge/kGLhgwGaLJsCMS7wS');
{
 class Employee{
   constructor(firstname, lastname){
     this.firstname = firstname[0].toUpperCase() + firstname.slice(1).toLowerCase();

     this.lastname = lastname[0].toUpperCase() + lastname.slice(1).toLowerCase();
   }
   get fullname() {
     return `${this.firstname} ${this.lastname}`
   }

   get email(){
     return `${this.firstname.toLowerCase()}.${this.lastname.toLowerCase()}@company.com`;
   }
 }

 const emp1 = new Employee("joHn", "Smith");
 console.log(emp1.fullname);

 const emp2 = new Employee("Mary",  "Sue")
 console.log(emp2.email);

 const emp3 = new Employee("Antony", "Walker")
 console.log(emp3.firstname);

}
console.groupEnd();

console.groupCollapsed('4. - https://edabit.com/challenge/iwdZiFucR5wkQsFHu');
{
 class Person {
   constructor(name, age){
     this.name = name;
     this.age = age;
   }
   compareAge(other){
     if(this.age === other.age){
       return `${this.name } is the same age as me.`
     } else if(this.age < other.age){
       return `${this.name} is older than me.`
     }else {
       return `${this.name} is younger than me.`
     }
   }
 }

 const  p1 = new Person("Samuel", 24)
 const  p2 = new Person("Joel", 36)
 const  p3 = new Person("Lily", 24)

 console.log(p1.compareAge(p2));
 console.log(p2.compareAge(p1));
 console.log(p3.compareAge(p2));

}
console.groupEnd();

console.groupCollapsed('5. - https://edabit.com/challenge/Hgb38yhWGwJCMHbRQ');
{
  class Rectangle {
    constructor(sideA, sideB) {
      this.sideA = sideA
      this.sideB = sideB
    }
    getArea(){return this.sideA*this.sideB}
    getPerimeter(){return (this.sideA + this.sideB) *2}
  }
  
  
  class Circle {
    constructor(r){
      this.r = r;
    }

    getArea(){
      return Math.PI * this.r ** 2}
    getPerimeter(){
      return 2 * Math.PI * this.r
  }
}
     let circy = new Circle(11);
     console.log(circy.getArea())

     circy = new Circle(4.44);
     console.log(circy.getPerimeter())


}
console.groupEnd();

console.groupCollapsed('6. - https://edabit.com/challenge/qNMtrtizgssAQqP2b');
{
    class Name{
      constructor(fname, lname){
        this.fname = fname[0].toUpperCase() + fname.slice(1).toLowerCase();
        this.lname = lname[0].toUpperCase() + lname.slice(1).toLowerCase();
        this.fullname = `${this.fname} ${this.lname}`
        this.initials = `${this.fname[0].toUpperCase()}.${this.lname[0].toUpperCase()}`
      }
    }

    const a1 = new Name("john", "SMITH")
    console.log(a1.fname)
    console.log(a1.lname)
    console.log(a1.fullname)
    console.log(a1.initials)

}
console.groupEnd();

console.groupCollapsed('7. - https://edabit.com/challenge/HKmJFmZZCX53ff4ke');
{
  function sweetestIcecream(arr) {
    const flavors = {
      Plain: 0,
      Vanilla: 5,
      ChocolateChip: 5,
      Strawberry:	10,
      Chocolate: 10
    }

    return arr.map(item => flavors[item.flavor] + item.numSprinkles).sort((x, y) => x > y ? -1 : 1)[0]
  }

      class IceCream {
        constructor(flavor, numSprinkles) {
          this.flavor = flavor;
          this.numSprinkles = numSprinkles;
        }
      }
      ice1 = new IceCream("Chocolate", 13)
      ice2 = new IceCream("Vanilla", 0)
      ice3 = new IceCream("Strawberry", 7)
      ice4 = new IceCream("Plain", 18)
      ice5 = new IceCream("ChocolateChip", 3)


      console.log([ice1, ice2, ice3, ice4, ice5])
      console.log([ice1, ice2])
 }
     

console.groupEnd();

console.groupCollapsed('8. - https://edabit.com/challenge/9zwdrfW99zmdRhibi');
{
    class OneThreeNines{
      constructor(num){
        this.num = num;
      }

      get ones(){
        return Math.floor(this.num / 1)
      }

      get thress(){
        return Math.floor(this.num / 3)
      }

      get nines(){
        return Math.floor(this.num / 9)
      }
    }

    const n1 = new OneThreeNines(5)
    console.log(n1.ones);
    console.log(n1.thress);
    console.log(n1.nines);

}
console.groupEnd();

console.groupCollapsed('9. - https://edabit.com/challenge/7PA4jhWqDYJT4ixLp');
{
    class User{
      static userCount = 0
      constructor(usarname){
        this.usarname = usarname;
        User.userCount += 1
      }
    }

    const u1 = new User("johnsmith10")
    const u2 = new User("johnsmith10")
    const u3 = new User("johnsmith10")
    const u4 = new User("johnsmith10")

    console.log(u1,u2,u3,u4)
    console.log(User.userCount)


}
console.groupEnd();

console.groupCollapsed('10. - https://edabit.com/challenge/s5Sz2ovKsvtGxNGgn');
{
      class Book {
        constructor (title, author){
          this.title = title;
          this.author = author;
        }
        getTitle(){
          return `Title: ` + this.title;
        }
        getAuthor(){
          return `Author: ` + this.author;
        }
      }

      const PP = new Book (`Pride and Prejudice`,  `Jane Austen`)
      const H = new Book (`Hamlet`,  `William Shakespeare`)
      const WP = new Book (`War and Peace`,  `Leo Tolstoy `)

      console.log(PP.author)

}
console.groupEnd();