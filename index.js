
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
const numbers = [2, 5, 100, 4]

const sortedNumbers = numbers.sort((a, b) => {
  return a - b;
});

console.log(sortedNumbers)
