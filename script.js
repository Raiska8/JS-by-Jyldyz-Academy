/*console.log('Raiska'); // vyvesti imya
console.log('Raiska'  + ' ' + 'Kulova'); // vyvesti imia i FIO
console.log(100 + 100); // vyvesti chisla
console.log('100' + '100'); // sdes on prosto string stoka= kankatinatsia
document.write('100 + 100=' + (100+100) + '<br>'); // dobavili resultat vyrajenia



//peremennye
let userName= "Raiska";
//userName = "Raiska"; 
document.write(userName + '<br>');

userName = "Aizhan";
document.write(userName + '<br>');



//const - ne meniaetsia srazu pishem znachenie, hranit nuzhno ne izmeniaemye dannye
const pi = 3.14;
document.write(pi + '<br>');

let number1 = 10;
let number2 = 15;
let result = number1 + number2;

document.write(result + '<br>');

console.log(result);*/



//functsia PROMT
//let userName = prompt('What is your name?', 'Name');
//document.write('<h1>Hello, ' + userName + '</h1>');

//DZ 1
//let userName = 'Raiska';
//userName = 'Raiska';

//let userSurname = 'Kulova';
//userSurname = 'Kulova';

//let userEmail = 'kulova@gmail.com';
//userEmail = 'kulova@gmail.com';

//document.write(userName + '<br>' + userSurname + '<br>' + userEmail);


//DZ2
let userName = prompt ('What is your name?');
let userSurname = prompt ('What is your Surname?');
let userCity = prompt ('What is your City?');
let userAge = prompt ('What is your Age?');
document.write('<h1> Welcome to JS World  ' + userName + '</h1>' + '<br>' + '<h1> Your details: </h1>' + '<br>' + '<h1> Your Surname:' + userSurname + '</h1>'  +  '<h1>Your city: ' + userCity + '</h1>' + '<br>' +  '<h1> Your Age: ' + userAge + '</h1>');


//Tipy dannyh - sting - stochki
let myString1 = 'eto stroka'; // 1 variant odinarnaia kovychka
let myString2 = "eto toje"; // dvoinaia kovychke
let myString3 = "He said: I'm a doctor"; // v dvoinoi kovychke doljno byt odinarnaia kovychka
let myString4 = 'He said: "I\'m a doctor \\"'; // v etom sluchae ispolzuem escape  \ obratnyi slash znak ekranirovania \\ vyvodit i slash
let myString5 = `He said: "I'm a doctor \"`;//obratnaia kovychka universalny znak, 
let myString6 = `Result: "5 + 5"`;  //vyvoditsia stroka
let myString7 = `Result: ${5 + 5}`; // vyvoditsia summa


let userName = prompt('What is your name?');

document.write("Hello " + userName); // 1 variant
document.write(`Hello, ${userName}`); //2 variant

let userName = "Raiska";
console.log(userName.length); // svoistvo dlina
console.log(userName[2]); //dostup k simvolam po indeksam 
console.log(userName[-2]); //dostup k simvolam po indeksam 




//strokovye metody
let userName = prompt("Your name?");
//userName.toUpperCase() // vsegda pishetia s kovychkami
let userNameUpper = userName.toUpperCase(); // verhniy registr
document.write(userNameUpper);
document.write(userName.toLocaleLowerCase()); //nijniy registr

//metod trim 
let userName = "     raiska    ";
console.log(userName.trim); //udalit probely s nachala i kontsa

//metod repeat prinimaet kakoi-to argument
console.log(userName.repeat(4));// repeat doljen poluchit argument v vide chisla i v skopkah doljno byt zifry

//metod concat konkatinatsia = prikleivanie imeet neskolko parametrov
console.log(userName.concat("Hello ", " again"));


//metod include = bulevoe znachenie true / false
let myString = "To be or not to be,  that is the question";
console.log(myString.includes('to be')); // vsegda imeet argument. proveriaet soderjit li predlojenie takoe slovo/ true 

//metody index
let myString = "William";
console.log(myString.indexOf("W")); //sdez uznaem index bukvy cherez console
console.log(myString.lastIndexOf("l")); // nahodit poslednuu bukvu v stroke ili predlojenii

//metod substring
let myString = "William";
console.log(myString.substring(0, 3)); 

//metod replace
let myString = "Hello William";
console.log(myString.replace("William" , "John")); 

//metod slice vozvrashaet kusok s teksta
let myString = "Hello William";
console.log(myString.slice(0, 4)); 




