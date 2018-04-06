

function cars(type,color){
  var numberOfCars=20;
  return "there are"+" "+numberOfCars+" "+type+" "+color;

}
var typeOfCars=cars("mercedes","red");
console.log(typeOfCars);

//question 1
function add(num1,num2,num3){
  let sum= num1+num2+num3;
  return sum;
}
add(1,2,3);//calling a function add
let sumOfNumbers=add(1,2,3);//declaring sumOfNumbers to catch the data
console.log(sumOfNumbers);

//function named colorCar that receives a color, and prints out, "a red car
function colorCar(color){
  return "a"+" "+color+" "+"car";
}
let car=colorCar("red");
console.log(car);

//object and a function that takes the object as a parameter and prints out all of its names and values.
let person={ name:"jacky",
            age:40,
            weight:70,
            height:60,
            hairType:"brown"
};
 function person2(){
   return person;
 }
 let object=person2();
 console.log(object);

 //function named vehicleType that receives a color, and a code, 1 for car, 2 for motorbike.
 function vehicleTypes(color,code){
if (code===1){
  console.log("a"+" "+color+" "+"car");
}
if (code===2) {
  console.log("a"+" "+color+" "+"motorbike")
} else {
  console.log("incorrect")
}
 }
 vehicleTypes("blue",2);
 
 //question 5:
 console.log((3==3) ? "true" : "false");//use ternary operator, its syntax is condition ? result1 : result2;
 //question 6:
 function vehicle(color,code,age){
   if(code===1&&age===5){
     console.log("a"+" "+color+" "+"used"+" "+"car");
   }
   else{
     console.log("invalid value");
   }
 }
 vehicle("blue",1,5);

 //list of vehicles:
var  listOfVehicles = ["car","scooter","motorbike", "caravan", "bike"];
console.log(listOfVehicles);

// get the third element from above:
var motorbike = listOfVehicles[2];
console.log("The Third Element: " + motorbike);

 //question 9:
 function vehicle(color,code,age){
  if(code===3&&age===1){
    console.log("a"+" "+color+" "+"new"+" "+"caravan");
  }
  else{
    console.log("invalid value");
  }
}
vehicle("green",3,1);

//question 10:
function vehicleAdvertisment(){
  var text = [];
var i;
for (i = 0; i <listOfVehicles.length; i++) {
    text.push(listOfVehicles[i]);
console.log(text);

}
console.log("Amazing Joe's Garage, we service"+" "+text[0] +", "+ text[1]+", "+ text[2]+", "+text[3]+" "+ "and" +" "+text[4]+".")
};
vehicleAdvertisment();

//question 11:
listOfVehicles.unshift("toyota");
console.log(listOfVehicles);
//question 12:
let newObject={};

//question 13:
let human1={ name:"jacky",
age:"40",
weight:70,
height:60,
hairType:"brown"
};
let human2={ 
name:"jacky",
age:40,
weight:"70",
height:60,
hairType:"brown"
};
//a function that takes two objects as parameters and compares them.
function human(individual1,individual2){ 
  for (let key in individual1) {
    if (individual1[key] == individual2[key]){
      return true;
  }
  else {
    return false;
  }
    console.log(individual1[key]);
  }
  }
  

let p=human(human1,human2)
console.log(p);

function human(individual1,individual2){ 
  for (let key in individual1) {
    for(let key2 in individual2){
      if (individual1[key] === individual2[key2]){
        return true;
    }
    else {
      return false;
    }
    }
    
  
    console.log(individual1[key]);
  }
  }
  
let h=human(human1,human2)
console.log(p);
//question 14  a function that takes another function as an argument and runs it:
function foo(func) {
return bart();
}

function bart() {
  console.log('Hello, I am bar!');
}

foo(bart);

function star(moon){
return light();
}
function light(){
  console.log('its day time');
}
star(light);

//code to test two arrays for equality using == and ==.
var x = [1, 2, 3];
var y = [1, 2, 3];
var z = y;
if (JSON.stringify(x) == JSON.stringify(y)) {
  console.log('They are equal!');
}
else{
  console.log('they are not equal');
}
/*
for(let i=0;i<x.length;i++){ 
  console.log(x[i]);//to check if the loop is running.
}
for(let i=0;i<y.length;i++){
  console.log(x[i]==y[i]);
}
*/

//code to test two arrays for equality using == and ===.
var x = [1, 2, 3];
var y = [1, "2", 3];
var z = y;
/*
for(let i=0;i<x.length;i++){ 
  for(let i=0;i<y.length;i++){
    console.log(x[i]===y[i]);
  }
}*/
if (JSON.stringify(x) === JSON.stringify(y)) {
  console.log('They are equal!');
}
else{
  console.log('they are not equal');
}


var o1 = { foo: 'bar' };
var o2 = { foo: 'bar' };
var o3 = o2;

console.log('o2.foo = "foo";');
o2.foo = "foo";
console.log('o3.foo;');
console.log(o3.foo);
o3.foo="foobar";
console.log('o3.foo="foobar"');
console.log(o2.foo);

console.log('Does the order that you assign (`o3 = o2` or `o2 = o3`) matter? {Jim Cramer: ???}');
console.log("Yes, only during the initial assignment.  The variable on the right will always be assigned to the left variable. After the initial assignment, the position will not matter anymore.");
console.log("In the example above, the value of o2 variable was assigned to o3. The o1 variable is pointing to a different object so it will not affect the value of o2 or o3.");


//question17.following code returns:
let bar = 42; 
function checkType(){
return typeof typeof bar;
}
let result=checkType();
console.log(result);
//it returns a string indicating the type of unevaluated operand(an operand is an expression representing the object or primitive whose typesis to be returned