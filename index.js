

//ITERATION METHODS

//* forEach - O(n)
// Just execute a function for each element in the array.

const names = ['Luis', 'Jose', 'John', 'Aaron'];

names.forEach(item => {
  console.log(item);
});
//*print all user names





//*ACCESSOR METHODS

//* indexOf()Method
//Return the first index of the element that exist in the array [return the index of the element in the array], IF DOSEN'T EXIST RETURN -1.

//const names = ['Luis', 'Jose', 'Aaron'];

////console.log(names.indexOf('Aaron'));
//console.log(names.indexOf('Black Karen Batshit Crazy'))









//*Slice()Method
//**  Return a copy of a sub array between two inex, start and end. NOTE: if you modify the original array, the value will be modified in the copy array.

//const users = [
  //{name: 'Luis', age:15},
  //{name: 'Jose', age: 18},
  //{name: 'Aaron', age: 40}  
//]
//const adults = users.slice(1, users.length);
//console.log(adults)


//** Concat()Method. - O(n)

//const names1 = ["Luis", "Jose"];
//const names2 = ["John", "Aaron"];
//const newArray = names1.concat(names2,["Michelle"]);

//console.log(newArray)


//*Complex Sorting
//const users = [
  //{names: 'Luis', age:25},
  //{names: 'Jose', age:20},
  //{names: 'Aaron', age:40}
//];

//const compareFuc = (item1,item2) => {
  //return item1.age - item2.age

//};
//console.log(users.sort(compareFuc))



//const names = ['Luis','Jose','John','Aaron'];
//console.log(names.sort())//['Aaron', 'John', 'Jose', 'Luis']




//const spiceGirls = [
  //{ name: 'ginger', age: 37 },
  //{ name:'scary', age: 30 },
  //{ name: 'baby', age: 19 },
  //{ name: 'posh', age: 20 },

  //]

//const comparator = (a, b) => {
 // return a.name.length - b.name.length;

//}
//console.log(spiceGirls.sort(comparator))


//*Find the UTF charcodeAT for each substring character and print the charCodeAt no. AND the corresponding letter.
//const letters = ['b', 'P', 'c', 'a'];

//letters.forEach((letter) => {
  
 // console.log(letter,'',letter.charCodeAt(0))
//})
//        ##
//FIND the charCodeAt number AND print array number with corresponding UTF code num.--

//const numbers = [2, 5, 100, 4];

// const sortedNumbers = numbers.sort();

// console.log(sortedNumbers)

//numbers.forEach((number) => {

 // console.log(number, String(number).charCodeAt(0))
//})
//         ##

//Sort the below number array to make the 100 be last.
//Hint: Use Comparator Function which does 3-way comparison, >, <, or = to
//*Comparator Function helps to sort numbers correctly, sort properties on object correctly, etc.

//const sorted.numbers = numbers.sort(() => {
//const numbers = [2, 5, 100, 4]

//const sortedNumbers = numbers.sort((a, b) => {
//if(a < b) {
//  return -1 // smallest value or a
//}else if(a > b){
  //return 1 // largest value or b
//}else{
//  return 0
//}
//});

//console.log(sortedNumbers)

//Now Reverse it to Descending order where 2 is last

//const numbers = [2, 5, 100, 4]
//const sortedNumbers = numbers.sort((a, b) => {
  //if(a > b) {
    //return -1 //or a or highest number
  //}else if(a < b){
    //return 1 //or b or highest number
  //}else{
   // return 0

 // }
//});

//console.log(sortedNumbers)
//         ##

//Now let's use leaner code to get same ascending sort order results.

//How this works: "return a - b" is pointing to first two numbers and returning the smallest value of the pair til it reaches null.

//Rule: if value is postive or negative-- e.g. 100 - 4 = value  IF value is a positive number value that means (a > b)and you have to swap them so that b (the least value) comes befor a (the largest value) in the sort.
//if the value is negative as in 2 - 5 = -3 that means (a < b) so return a
//But what about 5 - 100 = -95, if value is negative, that means a < b so return a.
//

//* 2 - 5 = -3 ;  100 - 4 = 96
//* returns 2    returns -4
//* 5 - 100 returns 5 ; 100 returns 100
//const numbers = [2, 5, 100, 4]

//const sortedNumbers = numbers.sort((a, b) => {
//  return a - b;
//});

//console.log(sortedNumbers)

//Now do Descending Order. RULE if Value is Positive a > b. IF Value is negative a < b

//const numbers = [2, 5, 100, 4]
//const sortedNumbers = numbers.sort((a, b) => {
//  return b - a
//})

//console.log(sortedNumbers)

