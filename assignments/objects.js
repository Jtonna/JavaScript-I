// Let's get some practice writing a few objects for a new group of interns at a small business.

// ==== Challenge 1: Writing Objects ==== 
// HR needs some information on the new interns put into a database.  Given an id, email, first name, and gender. Create an object for each person in the company list:

// 1,mmelloy0@psu.edu,Mitzi,F
// 2,kdiben1@tinypic.com,Kennan,M
// 3,kmummery2@wikimedia.org,Keven,M
// 4,gmartinson3@illinois.edu,Gannie,M
// 5,adaine5@samsung.com,Antonietta,F

// Example format of an intern object: 1,examples@you.edu,Example,F
const example = {
  "id": 0,
  "name": "Example",
  "email": "examples@you.edu",
  "gender": "F"
}

// Write your intern objects here:
const Atk = "Apache Attack Helicoper";
const sexM = "Male";
const sexF = "Female";

// 1,mmelloy0@psu.edu,Mitzi,F
const mitziObj = {
  "id": 0,
  "name": "Mitzi",
  "email": "mmelloy0@psu.edu",
  "gender": sexF
}
// 2,kdiben1@tinypic.com,Kennan,M
const kennanObj = {
  "id": 1,
  "name": "Kennan",
  "email": "kdiben1@tinypic.com",
  "gender": sexM,
  speak: function(){
    console.log("Hello my name is " + this.name)
  }
}
// 3,kmummery2@wikimedia.org,Keven,M
const kevenObj = {
  "id": 2,
  "name": "Kevan",
  "email": "ekmummery2@wikimedia.org",
  "gender": sexM
}
// 4,gmartinson3@illinois.edu,Gannie,M
const gannieObj = {
  "id": 3,
  "name": "Gannie",
  "email": "gmartinson3@illinois.edu",
  "gender": sexM
}
// 5,adaine5@samsung.com,Antonietta,F
const antoniettaObj = {
  "id": 4,
  "name": "Example",
  "email": "examples@you.edu",
  "gender": sexF,
  multiplyNums: function(a,b){
    return a*b;
  }
}
// me 
const jacobObj = {
  "id": 5,
  "name": "Jacob",
  "email": "Jtonna@bphsf.org",
  "gender": Atk
}

// ==== Challenge 2: Reading Object Data ==== 
// Once your objects are created, log out the following requests from HR into the console:

// Mitzi's name
console.log(mitziObj.name);

// Kennan's ID
console.log(kennanObj.id);

// Keven's email
console.log(kevenObj.email);

// Gannie's name
console.log(gannieObj.name);

// Antonietta's Gender
console.log(antoniettaObj.gender);

// Jacob
console.log("It appears that", jacobObj.name, "identifies as a", jacobObj.gender, "you can read more about this here: https://bit.ly/2RAzAEw")

// ==== Challenge 3: Object Methods ==== 
// Give Kennan the ability to say "Hello, my name is Kennan!" Use the console.log provided as a hint.
// console.log(kennan.speak());
console.log(kennanObj.speak());

// Antonietta loves math, give her the ability to multiply two numbers together and return the product. Use the console.log provided as a hint.
//console.log(antonietta.multiplyNums(3,4));
console.log(antoniettaObj.multiplyNums(3,4));
console.log(antoniettaObj.multiplyNums(1.046666666666667,3))

// === Great work! === Head over to the the arrays.js file or take a look at the stretch challenge

// ==== Stretch Challenge: Nested Objects and the this keyword ==== 

// 1. Create a parent object with properties for name and age.  Make the name Susan and the age 70.
// 2. Nest a child object in the parent object with name and age as well.  The name will be George and the age will be 50.
// 3. Nest a grandchild object in the child object with properties for name and age.  The name will be Sam and the age will be 30
// 4. Give each of the objects the ability to speak their names using the this keyword.

const parent = {}

// Log the parent object's name

// Log the child's age

// Log the name and age of the grandchild

// Have the parent speak

// Have the child speak

// Have the grandchild speak
