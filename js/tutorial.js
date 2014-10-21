/**
 * Created with JetBrains WebStorm.
 * User: R_O_Y
 * Date: 13.02.14
 * Time: 1:03
 * To change this template use File | Settings | File Templates.
 */
// 1)show form with this content

//alert('Hello World');

                                                                // 2)Here i perform a functionality of text edit  & nice realization of document.write
/*
 if (confirm('push here?')){
    document.write('he said "YES!" ');
}
else {
    document.write('he said "NO!" ');
}
*/

                                                                //3)Here i perform  operator IF, output to console

/**
var
    answer = prompt('push here?');

 if (answer){
     document.write(answer);
 }

else {
     console.log('he hadn`t click');
 }
 */

                                                                  //4)Here i perform items(attributes), and simple operations
/**
var a = 40;
var b = 10;
var c;
//a+b:
 a+=b;  //в а будет лежать значение 50

//console.log(a);   //                      50
   // a=a++;  //  prefics form of return at first return then increase        50
//a=++a;        //  suffics form of return at first increase  then return        51
// console.log(a);      //                     51
//alert(a+=b);
//a+b:      a+=b  в а будет лежать значение 50
*/

                                                                   //5) realization of 'if'  'else'
/**
if (true){
    console.log('this is true')
} //execute

else

if(15===17){
    console.log('this is true')
}   //un execute
else

if(15 && (12<5)){
    console.log('this is true#1')
} //un execute

else if(15 == 10){
    console.log('this is true#2')
} //un execute
else if(15===15){
    console.log('this is true#3')
}
*/

                                                                    // 6)realization of switch case:
/*
switch (Обробатываемая переменная){
    case    значение  ;
        //код
        break;
}
*/
                                        // example
/**
switch (navigator.language) {
    case 'ru':
        document.write('You may be speak russia?');
        break;
    case 'en':
        document.write('may be enghlish?');
        break;
    case 'de':
        document.write('you may be speae deutch?');
        break;
    default:
        document.write('you speake on unknown language!')
        break;
              }
*/

                                                                        //7) Унарные операции:

// /* условие*/  ?  /*значение 1 */ : /*значение 2 */;

/*
var result = (5>4) ? document.write('true'): document.write('not true');
console.log(result);
(25>14) ? console.log('true') : null;
**/

                                                                        //8) Циклы:

// for(var i=0; //условие ; операция) {
// тело цикла
   // }
                                                                        // table of squres

/**
for (var i=0; i<10; i+=3){
    document.write(i+ ' * ' + i + ' = ' + i * i + '<br>');   // 3*3=9
}
*/


                                                                        //very nice realization how to stop loop!        what the loop???????
/**
var i =0;
for ( ; ; )    {
    if (i==1||i==2){
        i++;
        continue;
    }
    document.write(i + '<br>');
    i++;
    if (i==5)
    break;
}
*/


                                                                                    // циклы do, while
/**
var i=0;
while(i<10){
    document.write(i+ '*' + i + '=' + i*i + '<br>');        // 3*3=9
        i++;
}
*/

/**
do{
    document.write(i+ '*' + i + '=' + i*i + '<br>');
    i++;
} while(i<10);
*/


//                                                                                  9) functions
/*
function funct_name(//arguments){
     //body funct
}
*/

// hello function

/*
function hello() {
    var name = prompt("What is your name?");
    if (name)
        alert ('Hello' + name + '!');
    else
        alert('hello!');
}
hello();
*/

/*
var name= prompt("What is your name?");
var name_2= 'Vasa';

function hello(nameToSayHello) {
    if (nameToSayHello)
        alert ('Hello' + nameToSayHello + '!');
    else
        alert('hello!');
}
hello(name);
hello(name_2);
hello('real power!');
*/

/*
function hello(nameToSayHello) {
    nameToSayHello = typeof nameToSayHello == 'undefined' ? 'Denis' : nameToSayHello;

    if (nameToSayHello)
        alert ('Hello' + nameToSayHello + '!');
    else
        alert('hello!');
}
hello();
*/
                                                            //function connection
/*
function square(digitToSquare) {
   return digitToSquare * digitToSquare;
    }
function cube (digitToCube) {
    return square(digitToCube) * digitToCube;
 }
  var sqr=square(15);
//alert(cube(5));

function hello(nameToSayHello) {
    nameToSayHello = typeof nameToSayHello == 'undefined' ? 'Denis' : nameToSayHello;

    if (nameToSayHello) {
        if(nameToSayHello == 'Vasya')
        return;
        alert ('Hello' + nameToSayHello + '!');
    }
    else
        alert('hello!');
}
hello();
hello('Vasya');
hello();
*/

                                                                    //10)конструктор
/*
function Cat(){
 this.name = 'Script';
 this.color = 'black';
 this.height = 30; // cm
 this.Wieght = 5; //kg
 this.hungry = true;
}
// create object
var cat_1 = new Cat();

console.log(cat_1.name);
console.log(cat_1.color);
console.log(cat_1.height);
console.log(cat_1.Weight);
console.log(cat_1.hungry);
*/



/*
 //стачитеские свойства
 Cat.DEFAULT_NAME = 'Script';
 Cat.DEFAULT_COLOR = 'black';
 Cat.DEFAULT_HEIGHT = '30';
 Cat.DEFAULT_WEIGHT = '7';
 Cat.DEFAULT_HUNGRY = 'true';
 //constructor
function Cat(nameToSet, colorToSet, heightToSet, weightToSet, hungryToSet){
    this.name   = typeof nameToSet == 'undefined' ? Cat.DEFAULT_NAME : nameToSet;
    this.color  = typeof colorToSet == 'undefined' ? Cat.DEFAULT_COLOR : colorToSet;
    this.height = typeof heightToSet == 'undefined' ? Cat.DEFAULT_HEIGHT : heightToSet;
    this.weight = typeof weightToSet == 'undefined' ? Cat.DEFAULT_WEIGHT : weightToSet;
    this.hungry = typeof hungryToSet == 'undefined' ? Cat.DEFAULT_HUNGRY : hungryToSet;
}

Cat.prototype.rename = function (newName) {
    this.name = newName;
    return true;
}

Cat.prototype.feeding = function() {

    if (this.hungry){
        this.hungry =  false;
        return true;
    }
    else{
        alert('cat isn`t hungry!');
        return false;
    }
}
                                                                    // create object





var cat_1 = new Cat();

console.log('first cat');
console.log(cat_1.color);
console.log(cat_1.height);
console.log(cat_1.weight);
console.log(cat_1.hungry);
/*
var cat_2 = new Cat('Vasa', 'white', 35, 7, false);
console.log('second cat');
console.log(cat_2.color);
console.log(cat_2.height);
console.log(cat_2.weight);
console.log(cat_2.hungry);
    */
//console.log('matrosskin');
//console.log('first cat');
///console.log(cat_1.name);
   // cat_1.feeding();
    //cat_1.feeding();

                                                                        //array
/*
//var arr= new Array ();
//var arr= new Array(5);
var arr= new Array('one','two','tree');
//var arr=[];
var arr=['one','two','tree'];

//push - add element to the end of array
arr.push('four');
//pop - delete the last element of array

//arr.pop();

//unshift  - create new element at beginning of array

arr.unshift('zero');
//console.log(arr);

//shift  - delete  element at beginning of array

//arr.shift();
//console.log(arr);

//sort in alphabet

//arr.sort();
//document.write(arr);

//arr.reverse(); //sort in against from alphabet

var arr2 = arr.slice(1,3);   // cut array
console.log(arr2);
*/
                                                                                //date in javascript theory
/*
var date_1 = new Date();
var date_2 = new Date(86400000*5);      //86 400 000
var date_3 = new Date('01/19/2009');              // MM/DD/YYYY
var date_4 = new Date(2009,00,19);                //YYYY,MM,DD,hh,mm,ss,ms

//console.log(date_1);
//console.log(date_2);
//console.log(date_3);
//console.log(date_4);

//metodth parse

//console.log(Date.parse('01 19 2008(comments(comment))'));

//console.log(Date.parse('Jan 19 2008(comments(comment))'));

//console.log(Date.parse('Jan 19 2008 13:25:33'));
*/



//                                                                            //strings in javascript
/*
var str_1 = 'Some TExt';
var str_2 = String ('some mORE text');

//symbols that pointing on same position

//console.log(str_1.charAt(0));

//position of entering in under lines

//console.log(str_1.indexOf('text', 6));

//the part of source string

console.log(str_1.substr(2, 5));
console.log(str_1.substring(-7, 2));
console.log(str_1.slice(2, 7));  //індикатор розбиения - тут указывается интервал розбиения
console.log(str_1.slice(2, -2));

console.log(str_2.split(''));
console.log(str_2.split('e'));

var temp_str = str_2.split('e');
console.log(temp_str);
console.log(temp_str.join('e'));    //function "join"

console.log(str_1.toUpperCase());  //higher register
console.log(str_1.toLowerCase());  //lower register
 */

                                                                        //math in javascript
/*
// module
console.log(Math.abs(-2.45));

//округление (round)
console.log(Math.round(2.465));
console.log(Math.round(2.665));

console.log(Math.floor(2.465));
console.log(Math.ceil(2.665));

//comparing

console.log(Math.min(1,2,3,4,5));
console.log(Math.max(1,2,3,4,5));

//randomization [0,1]

function getRandom(min,max) {
    return Math.round(Math.random() * (max-min)+min);
}

for (var i= 0; i<5; i++) {
    console.log(getRandom(0,10))
}

//constants
console.log(Math.E);
console.log(Math.PI);
console.log(Math.SQRT2);

//возведение в степень

console.log(Math.exp(2));
console.log(Math.pow(2.71565,2));
console.log(Math.sqrt(16));
console.log(Math.pow(16,0.5));

//string to number

var digit = 16;
var numStr = '16str';

console.log(typeof digit);
console.log(typeof digit.toString());
console.log(parseInt(numStr,10));

console.log(parseInt('9',10)); //counting system
console.log(parseInt('1001',2));

console.log(parseFloat('2.45'));
console.log(parseFloat('245e-2'));
console.log(parseFloat('2.45qwe'));
*/
                                                                                            //time alert in javascript

//setTimeout('alert("Ready!")',4000);                                                       //example of timer

//setTimeout('teat()',4000);
/**
function teat(){
    alert('window of our function')
}
*/
//var id =setTimeout(function(){
  //  teat();
//    alert('another function');
//},6000);

//setTimeout(function (){
  //  teat()
 //   alert('another')
//},4000);

//setTimeout(function(){
//   alert('there are no more windows');
//   clearTimeout(id);
//}, 2000);


/**
function teat(){
    alert('window of our function')
}

var id = setInterval(teat,1000);

setTimeout(function(){
    alert('there are no any windows');
    clearInterval(id);      //stop show this windows
},10000);
*/
                                                                                //types of development in javascript
/*
development            support elements                  description
onblur              a,area,button,input,              Потеря текущим элементом фокуса,
                    label,select,textarea             т.е.переход к другому елементу
======================================================================================
onFocus             a,area,button,input,              получение элементом фокуса
                    label,select,textarea
======================================================================================
OnChange            INPUT, SELECT, TEXTAREA           Потеря текущим элементом фокуса,
                                                      т.е.переход к другому елементу
======================================================================================
onClick                     -                         Одинарный клик
======================================================================================
onDblClick                  -                         Двойной клик
======================================================================================
onError             IMG, WINDOW                       Возникновения ошибки выполнения сценария
======================================================================================
onKeyDown                   -                         Нажата клавиша на клавиатуре
======================================================================================
onKeyPress                  -                         Нажата и отпущена клавиша на клавиатуре
======================================================================================
onKeyUp                     -                         Отпущена клавиша на клавиатуре
======================================================================================
onLoad                      Body                      Закончена загрузка документа
======================================================================================
onUnload                    Body                      Попытка закрытия окна браузера
======================================================================================
onMouseDown                 -                         Нажата кнопка мыши в пределах текущего документа
======================================================================================
onMouseMove                 -                         Перемещение курсора мыши в пределах текущего документа
======================================================================================
onMouseOut                  -                         Курсор мыши выведен за пределы текущего элемента
======================================================================================
onMouseOver                 -                         Курсор мыши наведен на текущий елемент
======================================================================================
onMouseUp                   -                         Отпущена кнопка мыши в пределах текущего елемента
======================================================================================
onSubmit                    FORM                         Отправка данных  формы
======================================================================================
onReset                     FORM                         Отправка данных  формы
======================================================================================
onBlur                      a,area,button,input,                         Отправка данных  формы
                                                              */





