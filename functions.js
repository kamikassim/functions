console.log("Array Fun");

// Positive Numebrs: 

var array = [-4, -3, -1, 2, 3, 6]; 
var newArray = array.filter(function(element) {
    return element > 0; 
} ); 

console.log(newArray);

// Even Numbers

var even = [1, 2, 3, 4, 5, 6];
var newEven = even.filter(function(number) {
    return number % 2 === 0; 
});

console.log(newEven); 

// Square the Numbers
var square = [1, 2, 3, 4, 5];
var newSquare = square.map(function(element){
    return element ** 2;
});

console.log(newSquare);

// Cities 1
var cities = [
    { name: 'Los Angeles', temperature: 60.0},
    { name: 'Atlanta', temperature: 52.0 },
    { name: 'Detroit', temperature: 48.0 },
    { name: 'New York', temperature: 80.0 }
  ];

var newCities = cities.filter(function(element){
    return element.temperature < 70.0;
}); 

console.log(newCities);

// Cities 2
var cities2 = [
    { name: 'Los Angeles', temperature: 60.0},
    { name: 'Atlanta', temperature: 52.0 },
    { name: 'Detroit', temperature: 48.0 },
    { name: 'New York', temperature: 80.0 }
]; 

var newCities2 = cities2.map(function(onlyName){
    return onlyName['name']; 
});

console.log(newCities2);

// Good Job
var people = [
    'Dom',
    'Lyn',
    'Kirk',
    'Autumn',
    'Trista',
    'Jesslyn',
    'Kevin',
    'John',
    'Eli',
    'Juan',
    'Robert',
    'Keyur',
    'Jason',
    'Che',
    'Ben'
  ];

  var goodJobPeople = people.forEach(function(element){
    console.log("Good job, " + element + "!");
  });

  // ABC order

  var abcOrder = people.sort(function(a, b){
    if (a < b) return -1 
    else if (a > b) return 1 
    return 0;
  });

  console.log(abcOrder);

  // Length Sort

  var lengthSort = people.sort(function(a, b){
    return a.length - b.length;   
  });

  console.log(lengthSort);

  // Sort by Sum

  var arr = [
    [1, 3, 4],
    [2, 4, 6, 8],
    [3, 6]
  ];

  var sumSort = arr.sort(function (a,b) { 
    return a.reduce(function(c,d){return c+d})  - b.reduce(function (e,f) {return e+f});
   })
   console.log(sumSort);
   
   // Call Three Times

   function call3Times(fun) {
     fun();
     fun();
     fun();
   };
   
   call3Times(function(){
       console.log('Hello, world!');
   })
   
   // N Times

   function callNTimes(num, fun){
       for(var i = 0; i< num; i++){
           fun();
       }
   }
   callNTimes(5, function(){
       console.log('Hello, world!');
   });
   
   // Sum of Array via Reduce

var sumArr = array.reduce(function(a,b){
    return a+b;
});

console.log(sumArr);

// Acronym

var acro = people.reduce(function(a,b){
    return (a+b[0]) ;
}, "");

console.log(acro);





