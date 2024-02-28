class Odom {
  constructor(name, surname, adress, age) {
    this.name = name;
    this.surname = surname;
    this.adress = adress;
    this.age = age;
  }
}

class Odom_ikki extends Odom {
  constructor(name, surname, adress, age, nameCar) {
    super(name, surname, adress, age);
    this.nameCar = nameCar;
  }
}

var Farrukh = new Odom("Farrukh", "Asqaraliyev", "Tashkent", "19");
var Umar = new Odom_ikki("Umar", "Saidmuradov", "Toraqorgon", "18", "Jentra");
// console.log(Farrukh);
console.log(Umar);

//DRY -> don't repeat yourself
//KISS -> keep it super simple
