//Time to look a little bit  deeper why that prototypes are handies.
//Prototypes
//Es5 function constructor for Programming books

function Programming_Book(name, genre, pages, id) {
   
    this.name = name;
    this.genre = genre;
    this.pages = pages;
    this.id = id;
    this.displayInfo = function() { return `"Name: ${this.name}  Genre: ${this.genre} + Pages: ${this.pages};` }
 }
 //Object instances for Programming_Book

 var Book1 = new Programming_Book("Web Designing Guide", "General Knowledge", 156, 3156); // has its own displayInfo() method
 var Book2 = new Programming_Book("JS Skills", "General Knowledge", 500, 1052); // has its own displayInfo() method

 //Using Object.getOwnPropertyNames() method which simply takes an object and shows all its OWN properties.
 console.log(Object.getOwnPropertyNames(Book1)) //Console log all the properties of Book1
 console.log(Object.getOwnPropertyNames(Book2)) //Console log all the properties of Book2


 //Although the code runs perfectly fine, there is a slight problem in it.
 //Each time we create a new instance of the constructor Programming_Book() we create a new method displayInfo for the new object created. 
 //What this means is that if we have 100 object instances of Programming_Book(), for each of them we have one seperate displayInfo() method stored seperately in memory. 
 //Thus we have 100 functions stored which are all exactly the same!
 //We must think  efficient  ways to save the memory ,not over usage.

 //Using Object.getOwnPropertyNames() method which simply takes an object and shows all its OWN properties.

 //Es6 Class Constructor rather than function constructor {syntactic sugar is the poke :)}

class Food_Book {

   constructor(name, genre, pages, id){

      this.name = name;
      this.genre = genre;
      this.pages = pages;
      this.id = id;

   }
   
 } 
 
 // Same constructor with removed method and written as Class.
 
 
 
 // Prototypes are just an objects guys!! Keep that in mind..

 Food_Book.prototype.displayInfo = function() { return "Name: " + this.name + " Genre: " + this.genre + " Pages: " + this.pages; }

 // displayInfo() method now stored on the prototype object,and not in every instance of Food_Book() seperatly. 

 var book1 = new Food_Book("Food Recipie's Guide", "General Knowledge", 356, 4156); 
 var book2 = new Food_Book("Italian Cuisine", "General Knowledge", 400, 1158); 

 //Did you get it? See where book1 protype belongs.
 console.log(Object.getPrototypeOf(book1))

 //And to test this we can simple compare them using the code below.

 console.log(Food_Book.prototype === Object.getPrototypeOf(book1))


//And yes they do! This justifies the fact that Book.prototype is the prototype of book1. Go on and try this with book2!

//And let's even clarify further that Book.prototype is not the prototype of the function Book.

<<<<<<< HEAD
Food_Book.prototype === Object.getPrototypeOf(book1); // false
=======
Food_Book.prototype === Object.getPrototypeOf(book1); // true
>>>>>>> 5a270c6f0829a267b09c531f131dc7abd544c6af

//To add properties to the prototype of book1 (and all other instances of Book) 
//we can  use Object.getPrototypeOf(book1) and define stuff on it like so:


Object.getPrototypeOf(book1).displayInfo = function() { return "Name: " + this.name + " Genre: " + this.genre + " Pages: " + this.pages; }
// Object.getPrototypeOf(book1) returns book1's prototype and then we just simply define a method on the returned object


//Take a look here https://www.digitalocean.com/community/tutorials/understanding-prototypes-and-inheritance-in-javascript
