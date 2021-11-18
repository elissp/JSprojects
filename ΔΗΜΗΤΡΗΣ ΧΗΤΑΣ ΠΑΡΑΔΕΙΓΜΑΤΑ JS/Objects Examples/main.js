

// *A JavaScript object is a collection of named values


// *The value of 'this', when used in an object, is the object itself.






//console.log() is a method pointhing to the console on your webrowser.
//press f12 to open the console,select console on and see the logs.

// Object Literal

const Person = {

  firstName: 'Fanis',
  lastName: 'Kassimis',
  email: 'faniskasimis@outlook.com',
    
}

 console.log(Person.firstName) // Fanis

//It is good practice to name constructor functions with an upper-case first letter.

//Object Constructor - Object Blueprint.
//In a constructor function 'this' keyword does not have a value, it is substitute and is replaced with new Object. 

function Cars(brand,age,model){
  
  this.brand= brand;
  this.age = age ;
  this.model= model;
 
} 


//Create a new instance of Cars Object, using the new keyword.

const Volkswagen = new Cars('Volkswagen','2001','Golf')
console.log(Volkswagen)

const Fiat = new Cars('Fiat','2008','Panda')
console.log(Fiat)

const Audi = new Cars('Auidi','2004','TT') //new instance of Car Object
console.log(Audi)

const Toyota =  new Cars('Toyota','2000','Corola')
console.log(Toyota)


//Javascript is zero based language,the first value is 0 

const myArray = ['Dimitris','Kwstas','Panagiotis']
console.log(myArray[0]) //Dimitris

console.log(myArray[2]) //Panagiotis


// *All JavaScript values, except primitives, are objects.

//PRIMITIVE VALUES

//string
//number
//boolean
//null
//undefined
//bigint
//symbol

//In JS Primitive values are immutable (they are hardcoded and therefore cannot be changed).

//Document Object Model is reffering to the HTML/XML structure and respects the Tree Hierarchy.
//Take a look here https://javascript.info/dom-nodes

//The documentElement property returns the documentElement of the document, as an Element object <html>.




//DOM Selection and Appending to UI with template literals (*ES6 modules)
document.getElementById('root').innerHTML= 
`
<style>

.person-tab {
  display:flex;
  justify-content:center;
  flex-direction:column;
}
.person-preferences {
  
  color:blue;

}
</style>

<div class='person-tab'>

  <h1>Customer Catatalog</h1>
  <label>Firstname : ${Person.firstName} </label>
  <br>
  <label>Lastname : ${Person.lastName} </label>
  <br>
  <label>Email : ${Person.email} </label>

</div>

<div class='person-preferences'>
  
  <h1>Customer Preferences</h1>

  <p>Our curstomer  likes two type of cars, the first one is ${Toyota.brand} ${Toyota.model} age of ${Fiat.age}
  and the second one is ${Toyota.brand} ${Toyota.model} age of ${Volkswagen.age}.
  </p>

  <button type='submit' id='btn'>Get customer card</button>
</div>

` 


//Events,use the addEventListener method which takes two params.
//First, the event we are looking for.
//Second, a callback function which returns our results/statements 


const button = document.getElementById('btn').addEventListener('click', function() {
  alert('Hello PeopleCert')
})