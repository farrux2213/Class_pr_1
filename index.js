class Odom {
  constructor(name, surname, adress, age) {
    this.name = name;
    this.surname = surname;
    this.adress = adress;
    this.age = age;
  }
}

var Farrukh = new Odom("Farrukh", "Asqaraliyev", "Tashkent", "19");

console.log(Farrukh);

//DRY -> don't repeat yourself
//KISS -> keep it super simple
