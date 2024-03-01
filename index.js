// class Odom {
//   constructor(name, surname, adress, age) {
//     this.name = name;
//     this.surname = surname;
//     this.adress = adress;
//     this.age = age;
//     this.fullName = function () {
//       return `${this.name} ${this.surname}`;
//     };
//   }
// }

// class Odom_ikki extends Odom {
//   constructor(name, surname, adress, age, nameCar) {
//     super(name, surname, adress, age);
//     this.nameCar = nameCar;
//   }
// }

// class Odom_uch extends Odom {
//   constructor(name, surname, adress, age, nameCar) {
//     super(name, surname, adress, age);
//     this.nameCar = nameCar;
//   }
// }

// var Farrukh = new Odom("Farrukh", "Asqaraliyev", "Tashkent", "19");
// var Umar = new Odom_ikki("Umar", "Saidmuradov", "Toraqorgon", "18", "Jentra");
// var Shaxboz = new Odom_uch(
//   "Shaxbozbek",
//   "Joramirzayev",
//   "Namangan",
//   "18",
//   "Nexia 1"
// );
// console.log(Farrukh);
// console.log(Umar);
// console.log(Shaxboz.fullName());
// console.log(Shaxboz);

//DRY -> don't repeat yourself
//KISS -> keep it super simple

// meros nima ? ------------->>>>>> Bu biror bir class orqali uning ichidagi kodlardan
// foydalanib yana boshqa classlar barpo etish yani yaratish bitta kodni qayta qayta
// yozmasdan shunchaki general classdan olib boshqa
// new classga qowiw bu Meros olish hisoblanadi va yana biz new classga qoshimcha malumotlar ham qoshsak boladi !!!

// console.log("learning sync and async");
// console.log("Baribir Nexia 2 legenda");
