

// function App() {

  
//   const expression =function(a,b){
//     return a * b
//   }
//   let multiple = (expression(4,5) * 3).toString()

//   function argument(){
//     return arguments.length;
//   }

// const parameters = (a=10,b=5,c=20)=>{
 
//   return a*b*c
// }


// const PersonName = {
//   firstname:'samuel okechukwu',
//   lastname:'okolie',
//   fullname:function(){
//     return this.firstname+ " " + this.lastname
//   }
// }
// const funct = (a,b)=>{
//     a+b
// }

// const person ={
//   name:'man',
//   age:24
// }
// person.address = 'ikorodu,lagos'
// console.log(person)

// //object constructor
// function Person (firstname, lastname,age) {
//   this.firstname = firstname
//   this.lastname = lastname
//   this.age = age
//   this.description = ''
//   this.address = '23,kolawole street, ikorodu'
//   this.fullname = function(){
//     return this.firstname + " " + this.lastname
//   }
// }
// const person1 = new Person('laide','kolawole',32)
// console.log(person1)

// let {firstname,lastname,age} = person1
// console.log(firstname,lastname,age)

// Person.prototype.eyecolor = 'hazel-blue'
// Person.prototype.newDescription = function(){
//   return (this.firstname + " " + this.lastname + " has " + this.eyecolor + " eyes " )
// }

//   return (
//     <>
//       <p>{expression(10,3)}</p>
//       <p>{multiple + multiple}</p>
//       <p>{argument(1,2,3,4,5,6)}</p>
//       <p>{parameters()}</p>
//       <p>Fullname:{PersonName.fullname()}</p>
//       <p>{funct(2,5)}</p>
//       <p>{person.address}</p>
//       <p>{Object.values(person)}</p>
//       <p>{(person1.address).toUpperCase()}</p>
//       <p>{person1.fullname()}</p>
//       <p>{age}</p>
//       <p>{firstname}</p>
//       <p>{lastname}</p>
//       <p>{person1.newDescription()}</p>

    
//     </>
//   )
// }

// export default App
import React from 'react'

const App = () => {

//   const firstname: string = 'samuel'
//   const array1:readonly string[]= ['ready ','steady ','gooooo ']

// const Tuple:[string,number,boolean] = ['woman  ',35,true]
// Tuple.push(' man')
// enum CardinalDirections {
//   North=102,
//   East=202,
//   South='hello world',
//   West=404
// }
// let currentDirection = CardinalDirections.South;

// console.log(currentDirection);


// interface Identity {
// name: string;
// age:number;
// ismarried?:boolean
// }
// const newPerson1 : Identity ={
//   name:'samuel okolie',
//   age:30

// }
// console.log(newPerson1)

// interface StudentIdentity{
//   name:string
//   class:string,
//   ClassTeacherName:string,
//   // favoriteSentence:function():void{
//   //   `my name is ${name} i am in ${class}`
//   // }
// }

// const student1: StudentIdentity = {
//   name:'folashade ajibola',
//   class:'primary 1',
//   ClassTeacherName:'Mrs. Agobola'
// }
// console.log(student1.name)

// type Car ={
//   make:string,
//   model?:string|number,
//   year:number
// }
// const car1: Car = {
//   make:'mercedes benz',
//   model:23,
//   year:1980
// }
// const car2: Car ={
//   make:'Nissan',
//   year:1990
// }
// console.log(car1, car2)


// function Gerald():void{
//   console.log(`Hello, i am Gerald`)
// }
// Gerald()

// function Greetings(name:string){
//   return `Hello there, my name is ${(name)}`
// }
// console.log(Greetings('hello world'))


// class Person {
//   private name: string;
//   sex?:string;
//   issingle?:boolean

//   public constructor(name: string,sex?:string, issingle?:boolean){
//     this.name = name;
//     this.sex = '" I am not willing to say"';
//     this.issingle = false;
//   }
//   public PersonIntroduction():string{
//     return `I am ${this.name}, regarding my sex, ${this.sex} and i am  ${this.issingle ?'married': 'single'} `
//   }
// }


// const NewPerson2 = new Person()
// NewPerson2.name ='samuel okolie'
// console.log(NewPerson2.PersonIntroduction('samuel okolie'))



function add(a:number, b:number):number{
  return a+b;
}
// console.log(add(10,39))

function joinWords(...words:string[]):string{
  return words.join(' ')
}
// console.log(joinWords('hello','','world,','','God','','is',' ','good'))

interface Person {
  name: string;
  age?:number
}
const person:Person ={
  name:'samuel okolie',
  age: 32
}
console.log(person)

function greet(name:string, greeting?:string):string{
  if(greeting){
    return `${greeting},${name}`;
  }return `Hello, ${name}`
}
console.log(greet('okolie samuel'))
console.log(greet('samuel bright','great to see you'))

interface Hobbies{
  id?:number;
  username:string;
  hobbies: string[]
}
const hobbies:Hobbies = {
  id:12345,
  username:'samuel bright',
  hobbies:['basketball','snooker','archery']
}
// console.log(hobbies.hobbies)
// console.log(hobbies)

interface Book{
  title:string;
  author:string;
}
const books: Book[] = [
 {
    title:'The Great gatsby',
    author:'F.Scott Fitzgerald'
  },
  {
    title:'to kill a mocking bird',
    author:'harper lee'
  }
]

class Car{
  public owner:string; 

   constructor(make:string, model:string, year:number){
    this.make = make;
    this.model = model;
    this.year = year;
  }

   getDetails():string|number{
    return `${this.make} ${this.model} ${this.year}`
  }
}
const car1 = new Car('volk-wagen','beetle', 1979)
// console.log(car1.getDetails())


type CallBackFunction = ()=>void
function executeCallback(callback: CallBackFunction){
  callback()
}
// executeCallback(()=>console.log('hello world'))



type CallBackWithNoParameters = ()=> number

function nonDynamicFunction(callback:CallBackWithNoParameters):number{
  return callback()
}
const callBack1 = ():number =>{
  return 5* 10
}

// console.log(nonDynamicFunction(callBack1))


type CallBackWithType = (a:number,b:number)=> number

function multiplication(a:number, b:number ,callback:CallBackWithType ):number{
  if (a > b){
    return (parseInt('22'))
  }
  return callback(a,b)
}

//creating the callback function
const addition =(x:number,y:number):number=> x + y

console.log(multiplication(5,4,addition))





interface ObjectAxis{
  x:number;
  y:number;
}

type CreatePoint = ()=>ObjectAxis

function createPoint(x:number,y:number){
  return {X:x,Y:y}
}

console.log(createPoint(10,20))


const numbers:number[] = [1,2,3,4,5]
const doublednumbers:number[] = numbers.map(num =>num * 2)

console.log('this is the array',numbers)
console.log('this is another array', doublednumbers)

//function with union type
function printId(id:string|number){
  console.log(`the id is :${id }`)
}

printId('1234')
printId(2345)

class Account{
  private balance:number;

   constructor(initialBalance:number){
    this.balance = initialBalance
  }


  deposit(amount:number):void{
    this.balance += amount
  }

  getBalance():number{
    return Math.ceil(this.balance)
  }
}

const account1 = new Account()
account1.balance = 20.55
account1.deposit(300.23)
account1.deposit(500)
account1.deposit(234)
console.log(account1)
console.log(account1.getBalance())






function getFirstElement<ElementType>(array:ElementType[]){
  return array[0]
}

const number = [4,5,6]
const firstNumber = getFirstElement([1,2,3])
console.log(getFirstElement(number))
console.log(firstNumber)


const firstWord = getFirstElement(['abc','def','ghi','jkl'])
const word = ['lmn','nop','qrs']
console.log(word,getFirstElement(word))
console.log(firstWord)




























  return (
    <div>
      {/* <p>Firstname: {firstname}</p>
      <p>{array1}</p>
      <p>{Tuple}</p>
      <p>{currentDirection}</p> */}


    </div>
  )
}

export default App
