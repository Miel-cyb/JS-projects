// //concatenation and template string(``)
// let Fname ="Mary";
// let Lname ="Shays";
// console.log('I am ' + Fname + ' ' + Lname);
// console.log(`Her name is ${Fname} ${Lname}`);

// const website = 'youtube'
// const url = 'https://www.' + website + '.com'
// console.log(url);

// //Implicit type Conversion
// let number ='10';
// let age =23;
// console.log(parseInt(number)+age); /*converting the value of number to an integer 
// and adding it to sum*/


// //ARRAYS
// let items = ['Foil','Boxes','Sardines'];
// console.log(items[2]);


// //FUNCTIONS
// function hello(name){
//     console.log('Hello There ' + name);
// }
// function sum(num1,num2){
//     console.log(num1+num2);
//     console.log(num1);
// }
// sum(1,3)
// hello('Abigail');

// //2
// const wallHeight = 80;
// function calculate(value){
//     const newValue = value*2.54;
//    return newValue;
// }

// const width = calculate(100);
// const height = calculate(wallHeight);
// const dimensions = [width,height];
// console.log(dimensions);

// //OBJECTS
// const person = {
// F_name: 'John',
// L_name: 'Peters',
// Siblings:['anna','Carl','James'],
// age:40,
// greeting:function(){
//     console.log('Hello people!');
// },
// married:true
// }

// console.log(person.F_name);
// person.L_name = 'Saints';
// console.log( person.F_name + " " + person.L_name);

// /* != and == checks only the value
// !== and === checks both value and datatype*/

// //SWITCH
// let dice = 1
// for(i=0; i<=5; i++){
//     switch(dice){
//         case 1:
//             console.log('You got a one');
//             dice++
//             break;
            
//       case 2:
//         console.log("You got a two"); 
//             dice++  
//         break;
//       case 3:
//         console.log('You got a three');
//             dice++
//         break;
//       case 4:
//         console.log('You got a four');
//             dice++
//         break;
//      case 5:
//         console.log('You got a five');
//             dice++
//         break;   
//         default:
//             console.log('You got a six');
//     }
// }

// //LOOPS
// let amount = 10;
// while(amount > 0){
// console.log('I have ' + amount + ' dollars so i can spend more');    
// amount--;
// }
  
// //STRING METHODS
// let text = " I am happy "
// console.log(text.length);
// console.log(text.toUpperCase());
// console.log(text.charAt(1));
// console.log(text);
// console.log(text.trim());
// console.log(text.trim().length);
// //slice(0,5) -means start from index of 0 and end at index(4)
// console.log(text.slice(0,5)); 
// console.log(text.slice(-1));

// //ARRAY METHODS
// let names = ['Peter','John','May','Kyle','Lisa'];
// console.log(names.length);
// console.log(names[names.length-1]);

// // Concat
// const Lastnames =['Mays','Shay','Ronny'];
// const allnames = names.concat(Lastnames);
// console.log(allnames);
// //Reverse
// console.log(allnames.reverse());

// //unshift --adds element to the beginning of the array
// allnames.unshift('anna'); //adding name anna to the array
// allnames.unshift('Frank');
// console.log(allnames);
// //Shift --removes first element from the array
// allnames.shift()
// console.log(allnames);
// //Push--adds element to the ending of the array
// allnames.push('Mary');
// console.log(allnames);
// //Pop--removes element from the ending of the array
// allnames.pop();
// console.log(allnames);
// //Splice (2,1) -start from index(2) and delete one item
// console.log(allnames.splice(2,1));
// console.log(allnames);

//  //ARRAYS AND FOR LOOP
//  const id = ['anna','susan','mike'];
//  const surname = 'shakeandbake';
//  const newArray =[];
//  for(let i =0; i<id.length; i++){
//     console.log(id[i]);
//     console.log(`${id[i]} ${surname}`);
//     newArray.push(`${id[i]} ${surname}`)
//  }
//  console.log(newArray);


//  //FUNCTIONS AND LOOPS
//  const gas = [20,40,100,30];
//  const food =[10,40,50];
// let total;
//  function calculate(arr){
//     for(let i =0; i<arr.length; i++){
//         total +=arr[i];
//     }
//     return total;
//  }
//  const gasTotal = calculate(gas);
//  const foodTotal = calculate(food);
//  console.log(gasTotal);
//  console.log(foodTotal);


//CALLBACK FUNCTIONS - passed to another function as argument and executed in that function
// function morning(name){
//     return `Good morning ${name}`;
// }
// function afternoon(name){
//     return `Good morning ${name.repeat(3)}`;
// }

// function greet(name,cb){
//     const myName = 'John';
//     console.log(`${cb(name)} my name is ${myName}`);
// }
// greet('bob',morning);
// greet('brian',afternoon);

// //FOR EACH - does not return new array
// const people =[ {name:'peter',age:20, position:'developer', id:1,salary:400},
// {name:'susan',age:24, position:'designer', id:2,salary:200},
// {name:'bob',age:30, position:'the boss', id:3,salary:300}
// ];

// function showPerson(person){
//     console.log(person.position);
// };
//  people.forEach(showPerson);

//  //MAP -RETURNS A NEW ARRAY, does not change size of original array
//  const ages = people.map(function(person){
//     return person.age
//  });
// const newPerson = people.map(function(person){
//     return {  
//     Firstname:person.name,
//     age:person.age+20
// }
// })
// console.log(ages);
// console.log(newPerson);

// //FILTER -returns a new array and can manipulate the size of the new array
//  const young = people.filter(function(person){
//     return person.age <= 25;
// });

// //FIND - returns single instance (i.e object) and first match if no match is undefined
// const person =people.find(function(person){
//     return person.age === 20;
// });
// console.log(person);

// //REDUCE - iterats,reduces to a single value(number,array,object)
// const total =people.reduce(function(acc,currItem){
//  console.log(`total ${acc}`);
//  console.log(`current salary ${currItem.salary}`);
//  acc+=currItem.salary;
//  return acc; //always return the accumulator(acc)
// },0)  // 0 defines the type of data to be returned i.e a number
 

// //MATH
// const result =20.9000;
// console.log(Math.ceil(result));
// console.log(Math.sqrt(result));
// console.log(Math.floor(Math.random() * 10 + 1));

// //DATE
// const months =[
// 'January',
// 'February',
// 'March',
// 'April',
// 'May',
// 'June',
// 'July',
// "August",
// 'September',
// 'November',
// 'December'
// ];
// const day =['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
// const date = new Date();
// console.log(date);
// const month =date.getMonth();
// console.log(months[month]);
// console.log(day[date.getDay()]);
// console.log(date.getFullYear());