// Import stylesheets
import './style.css';

/** 

//Örnek 1 (function yazımı ve zorunlu parametre örneği)

function requiredArg(){
  throw new ("sayi parametresi dolu olmalı!");
}

function topla(sayi1=requiredArg(), sayi2=requiredArg()){
  return sayi1 + sayi2;
}

let sonuc = topla(12,24);
console.log(sonuc);

sonuc = topla(24);
console.log(sonuc);

*/

/** 

//Örnek 2 (rest parameters)
//... => spread
//args[] dizi ile içine ulaşabiliyoruz.

function topla(sayi1=0, ...args){
  let toplam = 0;
  for(const a of args){
    // örneğin args içine farklı bir tip gönderdin.
    if(typeof a == 'number'){
      toplam += a
    }
  }
  return toplam;
}

let sonuc = topla(12,24,36,58,'asdasd');
console.log(sonuc);

*/

/**
// Örnek 3 (filtreli parametre)

function topla(...args){
  return args.filter(function(e){
    return typeof e === 'number'
  })
  .reduce(function(prev,curr){
    return prev + curr; // sonuc = sonuc + suanki
  })
}

let sonuc = topla(12,24,36,48, 'java', {"asd" : 123});
console.log(sonuc);
 */

// Örnek 4 (for of - arrays string, map, set)

/**
let sayilar = [12,24,36,48];
for(let number of sayilar){
  console.log(number);
}
 */

/**

// Örnek 5 (array içerisindekilerle nasıl oynayacağız.)

let diziler = [12,24,36,48];
const sayi = diziler[0];

function getSayilar(){
  return [10,20,30]
}

let dizi = getSayilar();
let s1 = dizi[0];
let[x,y,z] = getSayilar();
console.log(x,y,z);
let[x1,...args] = getSayilar();

 */

//Örnek 6 (object kullanımı)
// Obje tanımı yapılırken key ve value şeklinde olurç

/**
let person = {
  "name" : "JavaScript-TypeScript",
  surname : "Developer"
};

const constName = person.name;
const constSurname = person.surname;

let {name, surname} = person;
console.log(name);
console.log(surname);

let personel = {
  adi : 'Gökhan',
  soyadi : 'Günay',
  adres : {
    il : 'İstanbul',
    ilçe : 'Pendik'
  }
}

console.log(personel?.adres?.il?); // ? işareti varmı varsa patlatma die kontrol eder.
 */

/**

// önek 6 (içeriye import la değer almak)

import { message } from './message.js';
console.log(message);
 */

/**

// örnek 7 (class tanımı)

class Personal{

  constructor(name){
    this.name = name;
  }

  getName(){
    return this.name;
  }

  static topla(sayi1, sayi2){
    return sayi1 + sayi2
  }
}

let javaScript = new Personal('java script');
//let javaScript2 = new Personal.topla(12,36);
let name2 = javaScript.getName();
console.log(name2);
//console.log(javaScript2);


class Animal{
  constructor(type){
    this.type = type;
  }

  yurume(){
    console.log("Animal Yürüdü");
  }
}

class Bird extends Animal{
  constructor(type){
    super(type);
  }

  uc(){
    console.log("Bird Uc");
  }
}

let bird = new Bird("Kuş");
bird.uc();
bird.yurume();

 */

// Örnek 8
// Arrow fonksiyonlar

/**

function topla (s1,s2){
  return s1+s2;
}

let sonuc2 = (x,y) => {
  return x+y;
} 

let sonuc = topla(1,2);
sonuc = sonuc2(1,2);







let numbers = [10,20,30,40]

numbers.sort(function(a,b){
  return b-a;
});

console.log(numbers);

numbers.sort((a,b) => b-a);

console.log(numbers);

 */

// Örnek 9 (Map)
/**

let userRoles = new Map();

let personel1 = { name: 'John' },
  personel2 = { name: 'Peter' };

console.log(typeof userRoles);
console.log(userRoles instanceof Map);

userRoles.set(personel1, 'ADMIN').set(personel2, 'USER');

let userRole = new Map([
  [personel1, 'ADMIN'],
  [personel2, 'USER'],
]);

let user1 = userRoles.get(personel1);
console.log(user1);

let isHas = userRoles.has(personel2);
console.log(isHas);

for (const user2 of userRoles.keys()) {
  console.log(user2);
}

userRoles.forEach((role, user) => console.log(`${user.name} : ${role}`));

 */



// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;
