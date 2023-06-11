/*
    CIT 281 Project 1
    Name: Colette Lajoie
*/

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednseday', 'Thursday', "Friday", 'Saturday'];
let d = new Date();
let day = days[d.getDay()];
console.log(day);

//----------------------------------------------------------------------------------------------------


let randomnumber1 = Math.floor(Math.random() * (25 - 5 + 1)) + 5;  //gives random number between 5 and 25


let theString = "";        //empty string

for (let i = 0; i < randomnumber1; i++) 
{     //loops as many times as the randomnumber1 variable and puts the random letter in the string

  theString += String.fromCharCode(Math.floor(Math.random() * (122 - 97 + 1)) + 97); 
}                  

/*Useing the String.fromCharCode method. 97 through 122 are ASCII codes for lowercase
letters a-z and we're finding a random number between them */                                                  


console.log(theString);

