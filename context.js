function eat() {
  console.log(`${this.name} eats fish food`);
}

class Fish {
  constructor(name) {
    this.name = name;
  }

  swim() {
    console.log(`${this.name} swimming in the water`);
  }
}

const nemo = new Fish('Nemo');

/********************************* Scenario 1 *********************************/
// eat(); // ?
/*
The eat() will execute and will print 'this.name' to the console however i belive its worng.
'this' in this context is refering to the global object and the global object hase no variable
named 'name' or any functions or methods named 'name'. So it it will return 'undefined'.
*/

/********************************* Scenario 2 *********************************/
// nemo.eat = eat;
// nemo.eat(); // ?

/*
In the context of nemo, there is no varible called 'eat' nor method and function called 'eat'
'nemo.eat' will result in a reference error.
'nemo.eat()' is undefined

Im wrong.
'eat' is a function. When we reference 'nemo.eat' its undefined.
However, when we do nemo.eat = eat;, we are creating a method called eat and
setting to the function eat function on the global scope.

So 'eat()' will be called in the context of nemo.
*/

/********************************* Scenario 3 *********************************/
// nemo.eat = eat;
// eat(); // ?
/*
'nemo.eat' will result in a reference error.
eat() will result in the first problem above.

Im wrong

The 'nemo.eat = eat' is valid.
*/

/********************************* Scenario 4 *********************************/
// nemo.swim(); // ?
/*
This is valid
*/

/********************************* Scenario 5 *********************************/
// const swim = nemo.swim;
// swim(); // ?

// swim is not in the context of the global scope. So 'this' refers to the global object.
