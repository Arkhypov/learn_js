/**
 * Created with JetBrains WebStorm.
 * User: R_O_Y
 * Date: 16.03.14
 * Time: 11:10
 * To change this template use File | Settings | File Templates.
 */

/*                                                                  //count rabbits=))))
function count_rabbits() {
    for(var i=1; i<=3; i++) {
        alert("Кролик номер "+i)
    }
}

count_rabbits();
 */

                                                                    //this loop count every fifth number!
/*for (var i = 5; i < 51; i+=5) {
 console.log(i);
 }*/

                                                                    // interesting print of array

/*var cities = ["Melbourne", "Amman", "Helsinki", "NYC", 6];

for (var i = 0; i < cities.length; i++) {
    console.log("I would like to visit " + cities[i]);
}*/

                                                                    //decrement
/*for (var i = 10; i <= 10; i--) {
    if(i==-1){
        break;}
    console.log(i);
}*/



/*
function output_name(){
var admin;
var name = "Вася";

admin=name;

alert(name);
}
output_name();
*/
                                        //realization of asking age
/*
var name=prompt('What is your name?', '');

alert('Hello '+name+'.How are you?');
*/

                                        // realization of if, else
                                        // number one
/*
var name = prompt('What is the native name of javascript','');

if (name=='EcmaScript')
    alert('This is true');

else
alert('This is false');
*/

                                      //number two
/*
var name = prompt('Please input the number','');

if (name > 0) {
    alert(1);
}
else if (name < 0) {
    alert(-1);
}
else {
    alert(1);
}
*/

                                    //number tree
/*
var name = prompt('Please input the number','');

if (name > 0) {
    alert(1);
}
else if (name < 0) {
    alert(-1);
}
else {
    alert(1);
}
*/

/*                                   //admin pass
var access = prompt('Who is there?','');

if (access=='admin'){
        var pass = prompt('password?','');

        if (pass=='darkBlade'){
            alert('Welcome to hell my God!');
        }
        else if (pass == null){
            alert('The enter is canceled');}
        else {
            alert('password is wrong');
        }
}
else if (access == null){
        alert('the enter is canceled');
    }
    else {
        alert('i don`t know you!');


}
*/

/*                                        //№1 using trevar operator
var a=prompt('input a','');
var b=prompt('input b','');
((a+b)<4) ? alert('low'):alert('many');
*/
                                        //№2 using trevar operator

 /*
var login = prompt('Who are you?','');

var input =(login == 'Vasa')  ? alert('Hello!'): input =(login == 'Director') ? alert('Hi!') : input =(login=='') ? alert('No login') : alert('');
*/

//№3 simple task
/*
var vkCreator=confirm('Is Durov creator Vkontacte site?');
if(vkCreator===true){
    alert('you are Vkontacter!');
}
else alert('You will be banned in Vkontacte soon!');
*/

/*
var age=prompt('Input age pliz','');

alert(!(age>=14)&&(age<=90));
*/
                                                    //examples of cycle for, while
/*
for (var i = 0; i < 3; i++) {
    alert("number " + i + "!");
}
*/

/*
var i=0;
while (i<3){
i++;
alert("number" + i + "!" );}
*/
                                                  //greate realization of while
/*
var num;

do {
    num = prompt("Введите число больше 100?", 0);
} while(num <= 100 && num != null);
*/
                                                 //i am still don`t understand the meaning of this code
/*
nextPrime:
    for(var i=2; i<10; i++) {

        for(var j=2; j<i; j++) {
            if ( i % j == 0) continue nextPrime;
        }

        alert(i);  // простое
    }
*/
                                    //the transformation from switch/case type of coding to if/else type of coding
/*
switch (browser) {
    case 'IE':
        alert('О, да у вас IE!');
        break;

    case 'Chrome':
    case 'Firefox':
    case 'Safari':
    case 'Opera':
        alert('Да, и эти браузеры мы поддерживаем');
        break;

    default:
        alert('Мы надеемся, что и в вашем браузере все ок!');
}

if(browser=='IE'){
  alert('Oh, you have IE!');
}
    else if ((browser==Chrome)|| (browser==Firefox)|| (browser==Safari)|| (browser==Opera)){
    alert('We use this browsers');
}
  else {
    alert('We hope, that in your browser all is ok');
}
*/
                                    // transformation from if/else to switch/case
/*
var a = +prompt('a?', '');

if (a == 0) {
    alert(0);
}
if (a == 1) {
    alert(1);
}

if (a == 2 ||  a == 3) {
    alert('2,3');
}

var a= +prompt('a?','');

switch (a){
    case 0:
        alert('0');
        break;
    case 1:
        alert('1');
        break;
    case 2:
        alert('2');
        break;
    case 3:
    case 4:
        alert('2,3');
        break;
}
*/
                                                    //change function that is below to function with using (условие) ? _____:_______
/*
function checkAge(age) {
    if (age > 18) {
        return true;
    } else {
        return confirm('Родители разрешили?');
    }
}
 */

/*
function check(age){
    var age=prompt('Please input age','');
    age > 18 ? true : confirm('Are Parents give access?')
}
check();
*/

/*
function check(age){
   var age=prompt('Please input age','');
    return (age > 18) || confirm('Are Parents give access?');

}
check();
*/
                                                      //find minimum number between two numbers
/*
function ReturnMin(n1,n2){

if (n1<n2){
        return n1;
}
    else
    return n2;
}

var n1=prompt('Please input the number','');
var n2=prompt('Please input another number','');
alert('Minimum number is '+ReturnMin(n1,n2)+' !');
*/


                                                        //realization of SQR
/*
function Pow(x,n){
    var result=x;
    for (var i=1; i<n;i++){
        result*=x;
    }
    return result;
}
    var x=prompt('Please input number','');
    var n=prompt('Please input topmast','');

    if (n>0){
       alert('Your answer '+Pow(x,n)+' number '+x+' in topmast '+n);
    }
    else{
       alert('Your input is incorrect');
    }
*/
                                                        //security is ready for action!!!!!

//============================================================
/*
var a=prompt('please input password','');
function Input(){
    a=prompt('input password again','');
    return a;
}
while (a!=='qwerty'){
    alert('password is in correct, input password again');
    Input(a);

}
/*
else

    alert('password is correct');
}
*/
//=============================================================

                                    // the same result of different functions
/*
function sumToo(n){
    var result=0;
    for (var i=1; i<=n; i++){
    result +=i;
}
    return result;
}
alert( sumToo(100));


function sumTo(n){
    return (n>1)? n + sumTo(n-1):n;
}
    alert( sumTo(10000));

function summTo(n){
  var a1=1;
    s=(2*(a1)+(n-1))*n / 2;
    return s;
}

alert( summTo(100));
*/

                                  //factorial
/*
function fuctor(n){
   return (n>1) ? n* fuctor(n-1) : n;
}
 alert(fuctor(5));
*/

                                 //fibonacci row
/*
function fib(n){
  return n<=1 ? n:fib(n-1)+fib(n-2);
}

alert(fib(3));
alert(fib(7));
//alert(fib(77));

function fibb(n) {
    var a = 1, b = 1;
    for (var i = 3; i <= n; i++) {
    var c = a + b;
        a = b;
        b = c;
    }
    return b;
}

alert(fibb(3));
alert(fibb(7));
alert(fibb(77));
    */
                                            //searching for 'xxx' or 'viagra' in the text
/*
function checkSpam(){
    var str = prompt('Please input the message', '');
    str = str.toLowerCase();
    if ( ~str.indexOf('viagra') || ~str.indexOf ('xxx'))
   return alert('You are spammer!');
}
    checkSpam();
/*

                                            //function that check length of message and if length of massage more than maxlength it shows maxlength
                                            // very usefull function!!!
/*
var str = prompt('Please input massage with length less than 5','');
function checkMaxlength(str,maxlength){
    if (str.length>maxlength){
    return    str.substr(0,maxlength) + '...';
    }

    return str;
        }
 alert(checkMaxlength(str,5));
*/

/*                                            //the same function, but some comfortable for using     :)
function checkMaxlength(maxlength) {
    var str = prompt('Please input massage with length less than 5','');
    if (str.length > maxlength) {
        alert(str.substr(0, maxlength) + '...');
        return str.substr(0, maxlength) + '...';
    }
    alert(str);
    return str;
}
checkMaxlength(5);
/*
                                            //calculation  summary of two numbers

/*
var sum;
function convert(sum){
    var str1 = +prompt('please input number1','');
    var str2 = +prompt('please input number2','');
   return sum = str1+str2;
}

alert('Their sum= ' + convert(sum));
*/
/*
var num = prompt('please input the number','');
function getDemical(){
   return num= num - Math.floor(num);
}
 alert(getDemical(num).toFixed(4));
*/


                                        // return the random number between our input number
/*
var min = +prompt('please input the min','');
var max = +prompt('please input the max','');
var result = (min - 0.5 + Math.random()*(max - min + 1));
    result = Math.round(result);

alert( result );
/*
                                            //example of object
/*
var user = {};
user.name = "Вася";
user.surname = "Петров";
user.name = "Сергей";
delete user.name;


var user = {
    name:  "Таня",
    age: 25,
    size: {
        top: 90,
        middle: 60,
        bottom: 90
    }
} ;

alert( user.name ); // "Таня"

alert( user.size.top );
 */


                                                    //very important function && Objects
/*
var menu={
    width:200,
    height: 300,
    title : "My menu"
};

function multiplyNumeric(obj){
     for (var key in obj) {
        if (isNumeric(obj[key])){
            obj[key]*=2;
        }
}
    return obj;
}

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

multiplyNumeric(menu);

alert('menu.width= ' + menu.width + 'menu.height= ' + menu.height + 'menu.title=  ' + menu.title);
*/

                                                       //massives
//1)
/*
var goods=["laptop","phone","network_cable","table"];
alert(goods[goods.length-1]);

 goods[goods.length] = 'computer';
alert(goods);
*/

//2)
/*
var styles = ["Jass","Bluz"];
style.push("Roken-n-Roll");
style[style.length-2]='Clasic';
alert(style.shift());
style.unshift("Rap","Reggi");
*/

                                                                                        //random output from massive


/*
var arr=["Java&Selenium","Java&Selenium", "Java&Selenium", "Java&Selenium","Java&Selenium", "Javascript","Javascript", "Javascript", "Javascript", "Javascript"];

var rand = Math.floor( Math.random() * (arr.length) );
setTimeout('alert(arr[rand])', 10000);
*/





                                                                                                                            //this function don`t work!!!!
/*
var arr = [];
var sum = 0;
while (true){
    var ask = +prompt('please input the massive');
    if (!ask) break; //NaN, null, cancel
    arr.push(ask);
}

for(i=0; i<arr.length; i++){
    sum+=arr[i];
}

alert(sum);
*/

                                                                                                //output array value

/**
var arr = ["test",2,1.5,false];

function find(arr,value){
    for (i=0;i<arr.length;i++){
    if(arr[i]=== value)
    return i;
}
    return -1;
}
*/

//2)

/**
function find(arr,value){
    if(arr.indexOf(value)){
        return arr.indexOf(value);
    }
    for(var i=0; i<arr.length; i++) {
        if (arr[i] === value) return i;
    }

    return -1;
}

var arr = ["a", -1, 2, "b"];

var index = find(arr, 2);

alert(index);
*/
                                                                        //filter of massive  //still difficult


/*
var arr = [5, 4, 3, 8, 0];

function filterRange(arr,a,b){
    var result = [];
    for(var i=0; i<arr.length; i++){
        if (a<=arr[i] && arr[i]<=b){
            result.push(arr[i]);
        }
    }
    return result;
}
var filtered = filterRange(arr,1,4);

 alert(filtered);
*/

/*function add(){
   *//* var a=document.getElementById("txt");
    if (a!=0){*//*
    for (var i=0; i<100 ; i++){
    var x=document.getElementById("com").innerHTML+="<p>something there"
    }
}*/

                                                                                                    /*here starts examples from codeacademy.com*/



                                    /*function that show current date and give you advice when you click on button*/
                                    /*function that show current day according to your date in the system, excellent example with  switch statement*/
                                    /*here will be a block from my Android app*/
   function advice(){
   var x="";
   var hr = new Date().getHours();
   var min = new Date().getMinutes();
   var sec = new Date().getSeconds();
    if (hr<11){
        x= "Good morning guy" + hr + ":" + min + ":" + sec;
    }  else if (hr>11 && hr<16){
        x= "Good midday guy" + hr + ":" + min + ":" + sec;
    }
        else if (hr>=16){
        x= "Good evening guy" + hr + ":" + min + ":" + sec;
    }
    document.getElementById('dem').innerHTML = x;
}

function day(){
    var x="";
    var day = new Date().getDay();
    switch (day){
        case 0:
            x="Today is Sunday";
            break;
        case 1:
            x="Today is Monday";
            break;
        case 2:
            x="Today is Tuesday";
            break;
        case 3:
            x="This is Wednesday";
            break;
        case 4:
            x="Today is Thursday";
            break;
        case 5:
            x="Today is Friday";
            break;
        case 6:
            x="Today is Friday";
            break;
    }
    document.getElementById('day').innerHTML=x;
}
                                                                    //function that output numbers from 0 to 10 except 3
function num(){
    var x="";
    for (var i=0; i<10; i++){
        if (i==3){
            continue;
        }
        x+= "number=" +i + "<br>";

    }
    document.getElementById('num').innerHTML=x;
}
                                                                    //function that output heads of html
function heading(){
      var x="";
    for (var i=1;i<=6;i++){
        if(i==3)
        continue;
        x+= "<h" + i + ">" + "head" + i + "</h" + i + ">";
    }
    document.getElementById('head').innerHTML=x;
}

                                                                      //declare please substr(3,6)
                                                                     //excellent presentation of game from codeacademy


var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();
if (computerChoice < 0.34) {
    computerChoice = "rock";
} else if(computerChoice <= 0.67) {
    computerChoice = "paper";
} else {
    computerChoice = "scissors";
} console.log("Computer: " + computerChoice);
if (userChoice==="scissors" ^ userChoice==="rock" ^ userChoice==="paper"){
function compare(choice1,choice2){
    if(choice1===choice2){

        return console.log("The result is a tie!");
    } else if(choice1==="rock"){
        if (choice2==="scissors")
            return console.log("rock wins");
        else
            return console.log("paper wins");
    } else if(choice1==="paper"){
        if (choice2==="scissors")
            return console.log("scissors wins");
        else
            return "paper wins";
    }
    else if(choice1==="scissors"){
        if (choice2==="rock"){
            return console.log("rock win");
        }
        else{
            return console.log("scissors wins");
        }
        }
}
}
else{ console.log("wrong choice, please choose something listed higher")
}
compare(userChoice,computerChoice);



/*                          exception
What if a user makes an inappropriate choice like 'dog'? How can we extend the function to handle that?  - done!
In this version, if both players make the same choice, the game returns a tie. What if the game didn't end there but instead asked both players for new choices?
*/


                                                                                      // search text through massive, by key word, important!
/*
var text="Eugene Yevgen Oksai, Olesya, Yevgen";
myName="Yevgen";
hits=[];
for (i=0;i<=text.length;i++){

    if (text[i]==='Y'){
        var str ="";
        for(j=i; j< (i+ myName.length);j++){
            str+=text[j];
            };
        hits.push(str);
    }

}
console.log(hits);

if (hits!=0){
    console.log(hits);}
else console.log("Your name wasn`t found");
*/

                                                                                    //the same realization of previous function
/*
var text = "Eugene Yevgen Oksai, Olesya, Yevgen",
    	      myName = /Yevgen/g;
	      alert(text.match(myName));
*/
                                                                                  //very nice loop that made me stack=)

/*var count=0;
var loop = function(count){
    while(count<3){
        //count++;
        console.log("I'm looping!");
        count++;
        //Your code goes here!
    }
};
loop(count);*/
                                                                                //interesting realisation of choice using case
/*var lunch = prompt("What do you want for lunch?","Type your lunch choice here");

switch(lunch){
    case 'sandwich':
        console.log("Sure thing! One sandwich, coming up.");
        break;
    case 'soup':
        console.log("Got it! Tomato's my favorite.");
        break;
    case 'salad':
        console.log("Sounds good! How about a caesar salad?");
        break;
    case 'pie':
        console.log("Pie's not a meal!");
        break;
    default:
        console.log("Huh! I'm not sure what " + lunch + " is. How does a sandwich sound?");
}*/

                                                                                        //nice instance of using "this"

/*var phonebookEntry = {};

phonebookEntry.name = 'Oxnard Montalvo';
phonebookEntry.number = '(555) 555-5555';
phonebookEntry.phone = function() {
    console.log('Calling ' + this.name + ' at ' + this.number + '...');
};

phonebookEntry.phone();*/


                                                                                    //contact list
                                                                                    //make changes with the address
/*var friends = new Object();
friends.vitaiy = new Object();
friends.vitaiy.firstName="Vitaliy";
friends.vitaiy.lastName="Egorov";
friends.vitaiy.number=3477775684;
friends.vitaiy.address=["NY, Brooklyn"];
friends.valentin = new Object();
friends.valentin.firstName="Valentin";
friends.valentin.lastName="Truskavetskiy";
friends.valentin.number=3476584586;
friends.valentin.address= ["NY, Brooklyn"];
friends.bill = new Object();
friends.bill.firstName="Bill";
friends.bill.lastName="Gates";
friends.bill.number=3476954586;
friends.bill.address= ["CA, Silicon Valey"];
friends.steve = new Object();
friends.steve.firstName="Steve";
friends.steve.lastName="Jobs";
friends.steve.number= 344565458;
friends.steve.address= ["CA, Silicon Valey"];
var list = function(friends){
    for(var key in friends){
        console.log(key);
    }
};
var search = function(name){
    for(var key in friends){
        if (friends[key].firstName === name){
            console.log(friends[key]);
            return friends[key];
        } } };
list(friends);
search("Steve");*/


                                                              //realisation of this and constructor for further objects
/*function Person(name,age) {
    this.name = name;
    this.age = age;
}

var bob = new Person("Bob Smith", 30);
var susan = new Person("Susan Jordan", 25);

var george = new Person("George Washington",275);*/


                                                             //realization of constructor`s same value
/*function Person(name,age) {
    this.name = name;
    this.age = age;
    this.species = "Homo Sapiens";
}

var sally = new Person("Sally Bowles", 39);
var holden = new Person("Holden Caulfield", 16);
console.log("sally's species is " + sally.species + " and she is " + sally.age);
console.log("holden's species is " + holden.species + " and he is " + holden.age);*/


                                                            //you can use functions in constructor:
/*function Rectangle(height, width) {
    this.height = height;
    this.width = width;
    this.calcArea = function() {
        return this.height * this.width;
    }
    this.calcPerimeter = function() {
        return (this.height + this.width)*2;
    };
    // put our perimeter function here!

}

var rex = new Rectangle(7,3);
var area = rex.calcArea();
var perimeter = rex.calcPerimeter();*/

                                                          //one more example of using object and default method
/*function Rabbit(adjective) {
 this.adjective = adjective;
 this.describeMyself = function() {
 console.log("I am a " + this.adjective + " rabbit");
 };
 }
 var rabbit1= new Rabbit("fluffy");
 rabbit1.describeMyself();
 var rabbit2= new Rabbit("happy");
 rabbit2.describeMyself();
 var rabbit3= new Rabbit("sleepy");
 rabbit3.describeMyself();*/


                                                          //arrays in Objects
/*
function Person (name, age) {
    this.name = name;
    this.age = age;
}


var family = new Array();
family[0] = new Person("alice", 40);
family[1] = new Person("bob", 42);
family[2] = new Person("michelle", 8);
family[3] = new Person("timmy", 6);
*/

                                                        //one more example with using arrays
/*
function Person(name, age){
    this.name=name;
    this.age=age
}

var family= new Array();
family[0]= new Person("alice", 40);
family[1]= new Person("bob", 42);
family[2]= new Person("michelle", 8);
family[3]= new Person("timmy", 6);

for (var i=0; i<family.length;i++){
    console.log(family[i]);
}
*/

                                                        //operations between objects
/*
function Person (name, age) {
    this.name = name;
    this.age = age;
}

var ageDifference = function(person1, person2) {
    return person1.age - person2.age;
}

var alice = new Person("Alice", 30);
var billy = new Person("Billy", 25);

var diff = ageDifference(alice,billy);
console.log(diff);
*/


                                                                        //contacts with using array
/*var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-7777",
    email: "bob.jones@example.com"
};

var mary=new Object();
mary["firstName"] = "Johnson";
mary["lastName"] = "Mary";
mary["phoneNumber"] = "(650) 888 - 8888";
mary["email"] = "mary.johnson@example.com";

var contacts=[bob, mary];
console.log(contacts[1].phoneNumber);*/


                                                                        //phone book ready for work

                                                //the description of our Objects
/*var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-7777",
    email: "bob.jones@example.com"
};

var mary = {
    firstName: "Mary",
    lastName: "Johnson",
    phoneNumber: "(650) 888-8888",
    email: "mary.johnson@example.com"
};
                                                //our Objects in the Array
var contacts = [bob, mary];

function printPerson(person) {
    console.log(person.firstName + " " + person.lastName);
}
                                                             //print our phone book
function list() {
    var contactsLength = contacts.length;
    for (var i = 0; i < contactsLength; i++) {
        printPerson(contacts[i]);
    }
}
                                                            //search in phone book by lastName
var search = function(lastName){
    for(var i=0;i<contacts.length;i++){
        if(lastName===contacts[i].lastName){
            printPerson(contacts[i]);
        }
    }
};
search("Jones");
                                                          //adding new contact in our book
var add = function(firstName, lastName, phoneNumber, email){
    var contact= new Object();
    contact.firstName=firstName;
    contact.lastName=lastName;
    contact.phoneNumber=phoneNumber;
    contact.email=email;
    contacts.push(contact);
}
add("Arkhypov","Eugene","(347) 777-3854", "y.arkhypov@gmail.com");
list();*/

                                                        // just interesting function in the object
/*var james = {
    job: "programmer",
    married: false,
    speak: function(speak) {
        if (speak==="great"){
            console.log("Hello, I am feeling great");}
        else if (speak==="just okay"){
            console.log("Hello, I am feeling just okay");
        }
    }
};

james.speak("great");
james.speak("just okay");*/

                                                                                              //property for the object
/*
var james = {
    job: "programmer",
    married: false
};
var aProperty = "job";
console.log(james[aProperty]);
*/


                                                                                     //define the type of the variables
/*
var anObj = { job: "I'm an object!" };
var aNumber = 42;
var aString = "I'm a string!";

console.log(typeof anObj); // should print "object"
console.log(typeof aNumber); // should print "number"
console.log(typeof aString); // should print "string"
*/

                                                                                    //this block show you realization of hasOwnProperty
/*

var myObj = {
    name:"Vasa",
    surname:"Petrovich"
};

console.log( myObj.hasOwnProperty('name') ); // should print true
console.log( myObj.hasOwnProperty('nickname') ); // should print false
*/

                                                                                    //printed out properties of object
/*
var nyc = {
    fullName: "New York City",
    mayor: "Bill de Blasio",
    population: 8000000,
    boroughs: 5
};
for(var key in nyc){
    console.log(key);
}*/


                                                                           //printed out value of properties of object
/*var nyc = {
    fullName: "New York City",
    mayor: "Bill de Blasio",
    population: 8000000,
    boroughs: 5
};
for(var key in nyc){
    console.log(nyc[key]);
}*/



                                                                            //realization of working Objects class:
/*
function Dog (breed) {
    this.breed = breed;
}

// here we make buddy and teach him how to bark
var buddy = new Dog("Golden Retriever");
buddy.bark = function() {
    console.log("Woof");
};
buddy.bark();

// here we make snoopy
var snoopy = new Dog("Beagle");
// we need you to teach snoopy how to bark here
snoopy.bark = function(){
    console.log("Wooff");
}
// this causes an error, because snoopy doesn't know how to bark!
snoopy.bark();*/



                                                                                                //Objects...
/*
function Person(name,age) {
    this.name = name;
    this.age = age;
}
// a function that prints the name of any given person
var printPersonName = function (p) {
    console.log(p.name);
};

var bob = new Person("Bob Smith", 30);
var me= new Person('Eugene', 45);
printPersonName(me);
//printPersonName(bob);

// make a person called me with your name and age
// then use printPersonName to print your name
*/



/*
function Dog (breed) {
    this.breed = breed;
};

// here we make buddy and teach him how to bark
var buddy = new Dog("golden Retriever");
Dog.prototype.bark = function() {                               //this method give ability for all properties use it
    console.log("Woof");
};
buddy.bark();

// here we make snoopy
var snoopy = new Dog("Beagle");
/// this time it works!
snoopy.bark();
*/



/*
function Animal(name,numLegs){
    this.name=name;
    this.numLegs=numLegs;
    this.sayName= function(name){                                //example of defining properties inside of the class
     return console.log("Hi my name is " + this.name);
     }

}

Animal.prototype.sayName= function(name){                        //example of defining properties outside of the class
    return console.log("Hi my name is " + this.name);
}
*/


/*
function Animal(name, numLegs) {
    this.name = name;
    this.numLegs = numLegs;
}
Animal.prototype.sayName = function() {
    console.log("Hi my name is " + this.name);
};

// define a Penguin class
function Penguin(name){
    this.name=name;
    this.numLegs=2;
}
// set its prototype to be a new instance of Animal
Penguin.prototype = new Animal();                               //inheritance in javascript
*/


/*
function Animal(name, numLegs) {                                  //live example of inheritance
    this.name = name;
    this.numLegs = numLegs;
}
Animal.prototype.sayName = function() {
    console.log("Hi my name is " + this.name);
};

// define a Penguin class
function Penguin(name){
    this.name=name;
    this.numLegs=2;
}
// set its prototype to be a new instance of Animal
Penguin.prototype = new Animal();
var penguin = new Penguin("Vasa");
penguin.sayName();
*/

                                                                                    //inheritance in original classes
/*
function Animal(name, numLegs) {
    this.name = name;
    this.numLegs = numLegs;
    this.isAlive = true;
}
function Penguin(name) {
    this.name = name;
    this.numLegs = 2;
}
function Emperor(name) {
    this.name = name;
    this.saying = "Waddle waddle";
}

// set up the prototype chain
Penguin.prototype = new Animal();
Emperor.prototype = new Penguin();

var myEmperor = new Emperor("Jules");

console.log(myEmperor.saying); // should print "Waddle waddle"
console.log(myEmperor.numLegs); // should print 2
console.log(myEmperor.isAlive); // should print true
*/

                                                                 //create a method to take private property from Object
/*
function Person(first,last,age) {
    this.firstname = first;
    this.lastname = last;
    this.age = age;
    var bankBalance = 7500;


    this.getBalance = function() {
        return bankBalance;
        // your code should return the bankBalance
    };
}

var john = new Person('John','Smith',30);
console.log(john.bankBalance);
// create a new variable myBalance that calls getBalance()
var myBalance = john.getBalance();
console.log(myBalance);
*/


/*
function Person(first,last,age) {                                       //return private method through public function
    this.firstname = first;
    this.lastname = last;
    this.age = age;
    var bankBalance = 7500;

    var returnBalance = function() {
        return bankBalance;
    };
    this.askTeller = function(){
        return returnBalance;
    };
    // create the new function here
}

var john = new Person('John','Smith',30);
console.log(john.returnBalance);
var myBalanceMethod = john.askTeller();
var myBalance = myBalanceMethod();
console.log(myBalance);
*/


/*                                                                                                //condition in Object
function Person(first,last,age) {
    this.firstname = first;
    this.lastname = last;
    this.age = age;
    var bankBalance = 7500;

    this.askTeller = function(pass) {
        if (pass == 1234) return bankBalance;
        else return "Wrong password.";
    };
}

var john = new Person('John','Smith',30);
var myBalance= john.askTeller(1234);
console.log(myBalance);
*/



/*                                                               //print out hello in different languages
var languages = {
    english: "Hello!",
    french: "Bonjour!",
    notALanguage: 4,
    spanish: "Hola!"
};

for (var key in languages){
    if(typeof languages[key] === "string"){
        console.log(languages[key]);
    }
    else{
        //console.log(languages[key])

        console.log("this is number")}
}
*/


/*                                                                       //external add method of the print in the object
function Dog (breed) {
    this.breed = breed;
};

Dog.prototype.sayHello = function() {
    console.log("Hello this is a "+ this.breed + " dog");
};
// add the sayHello method to the Dog class
// so all dogs now can say hello


var yourDog = new Dog("golden retriever");
yourDog.sayHello();

var myDog = new Dog("dachshund");
myDog.sayHello();
*/

/*
var cashRegister = {                                    //this code calculate difference between goods and transaction
    total:0,
    lastTransactionAmount:0,
    add: function(itemCost) {
        this.lastTransactionAmount = itemCost;
        this.total +=  itemCost;
    },
    scan: function(item,quantity) {
        switch (item) {
            case "eggs": this.add(0.98 * quantity); break;
            case "milk": this.add(1.23 * quantity); break;
            case "magazine": this.add(4.99 * quantity); break;
            case "chocolate": this.add(0.45 * quantity); break;
        }
        return true;
    },

    voidLastTransaction: function(){
        this.total-=this.lastTransactionAmount;
    }



};

cashRegister.scan('eggs',1);
cashRegister.scan('milk',1);
cashRegister.scan('magazine',1);
cashRegister.scan('chocolate',4);

//Void the last transaction and then add 3 instead
cashRegister.voidLastTransaction();
cashRegister.scan('chocolate',3);

//Show the total bill
console.log('Your bill is '+cashRegister.total);
*/

/*
function StaffMember(name,discountPercent){                                         //full cash_register with discount
    this.name = name;
    this.discountPercent = discountPercent;
}

var sally = new StaffMember("Sally",5);
var bob = new StaffMember("Bob",10);

// Create yourself again as 'me' with a staff discount of 20%
var me = new StaffMember("Eugene",20);


var cashRegister = {
    total:0,
    lastTransactionAmount: 0,
    add: function(itemCost){
        this.total += (itemCost || 0);
        this.lastTransactionAmount = itemCost;
    },
    scan: function(item,quantity){
        switch (item){
            case "eggs": this.add(0.98 * quantity); break;
            case "milk": this.add(1.23 * quantity); break;
            case "magazine": this.add(4.99 * quantity); break;
            case "chocolate": this.add(0.45 * quantity); break;
        }
        return true;
    },
    voidLastTransaction : function(){
        this.total -= this.lastTransactionAmount;
        this.lastTransactionAmount = 0;
    },
    // Create a new method applyStaffDiscount here
    applyStaffDiscount : function(employee){
        this.total-=this.total*(employee.discountPercent/100);
    }

};

cashRegister.scan('eggs',1);
cashRegister.scan('milk',1);
cashRegister.scan('magazine',3);
// Apply your staff discount by passing the 'me' object
// to applyStaffDiscount
cashRegister.applyStaffDiscount(me);


// Show the total bill
console.log('Your bill is '+cashRegister.total.toFixed(2));
*/

                                                                                                    /*here ends examples from codeacademy.com*/

                                                                                                    /*jquery will be in another file*/







