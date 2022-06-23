console.log('hello world');

let dog = {
	name: "mop",
	numLegs: 4
}
console.log(dog);


let fun = {
	draw() {
		console.log(`my name is ${this.name}`)
	},
	__proto__: dog
}
fun.draw();
fun.name = "mops";
for (let prop in fun) {
	if (fun.hasOwnProperty(prop))
		console.log(prop + ":" + fun[prop]);
}
for (let prop in dog) {
	if (dog.hasOwnProperty(prop))
		console.log(prop + ":" + dog[prop]);
}


class Book {
	constructor(author, title, pages) {
		this.author = author;
		this.title = title;
		this.pages = pages;
	}
	get titleBook() {return console.log(`about and pages: ${this.title}, ${this.pages}`)}
	set titleBook(pr) {this.pages = pr;}
}
let Book1 = new Book("Ivan", "Ivan Durak", 123);
console.log(Book1.titleBook);
Book1.titleBook = 321;
console.log(Book1.titleBook);

let userInfo = {
	name: "Ivan",
	age: 30,
	//adress: {
		//sstreet: "luh",
	//}
}
console.log(userInfo)

userInfo.name = "max"
console.log(userInfo)

userInfo.hair = "yes"
console.log(userInfo)

let user = {};
user.name = "John";
user["surname"] = "Smith";
user.name = "Pete";
delete user.name;


let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
  name: "Ivan"
}


 function  sumsalary(obj) {
 	let sum = 0;
 	for ( let prop in obj){
 		sum += obj[prop];
 	}
 	return sum;
 }

console.log(sumsalary(salaries));


function multiplyNumeric(obj) {
	for (let prop in obj){
		if (typeof obj[prop] === 'number'){
			obj[prop] *= 2;
		}
	}
}
multiplyNumeric(salaries);
console.log(salaries);
console.log(9999999999999999);
let guestList = `Guests:
 * John
 * Pete
 * Mary
`;
console.log(guestList);
let str = "i-ag-hx-xx";

function ucFirst(str) {
	return str[0].toUpperCase() + str.slice(1);

}

console.log(ucFirst(str));

function checkSpam(str) {
	str.toLowerCase();
	if (str.indexOf("viagra") != -1 || str.indexOf("XXX") != -1) {
		return true;
	}
	return false;
}
console.log(checkSpam(str));

function truncate(str, maxlength) {
	if (str.length > maxlength) {
		return str.slice(0,maxlength - 1) + "...";
	}
	return str;
}
console.log(truncate(str, 5))


let styles = ["Jazz", "Blues"];
console.log(styles);
styles.push("Rock-n-Roll");
console.log(styles);
console.log(styles.shift());
styles.unshift("Rap", "Reggae");
console.log(styles);


function sumInput() {
	let arr = [];
	while(true) {
		let num = prompt("Number?");
		if(num === "" || num === null || !isFinite(num)) break;
		arr.push(+num);
	}
	let sum = 0;
	for(let prop of arr){
		sum += prop;
	}
	return sum;
}

//console.log(sumInput())


let arr = [7, -2, 3, 4, 5, 6, -3, 2];

function getMaxSubSum(arr) {
	let maxSum = 0;
	let num;
	for(let i = 0; i < arr.length; i++){
		let num = 0;
	for(let j = i; j < arr.length; j++){
		num += arr[j];
		maxSum = Math.max(maxSum, num);
	}
}
return maxSum;
}

console.log(getMaxSubSum(arr));

//удаляет все тире, каждое слово после тире становится заглавным.



function camelize(str) {
  return str
    .split('-')
    .map(
      (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join('');
}

console.log(camelize(str));

//Напишите функцию filterRange(arr, a, b), которая получает массив arr, ищет элементы со значениями больше или равно aи меньше или равно bи возвращает результат в виде массива.

console.log(arr);

function filterRange(arr, a, b) {
	return result = arr.filter(arr => arr >= a && arr <= b)

}

console.log(filterRange(arr, 2, 5))


//Напишите функцию filterRangeInPlace(arr, a, b), которая получает массив arrи удаляет из него все значения, кроме тех, которые находятся между aи b. Тест такой: a ≤ arr[i] ≤ b.

function filterRangeInPlace(arr, a, b) {
	for (let i = 0; i < arr.length; i++){
		if(arr[i] < a || arr[i] > b){
			arr.splice(i, 1);
			i--;
		}
	}
}
//filterRangeInPlace(arr, 1, 4)
//console.log(arr)

// Сортировать по убыванию

function sort(arr) {
	arr.sort((a, b) => b - a)
}
sort(arr)
console.log(arr)


//Мы хотели бы иметь отсортированную копию, но оставить ее arrбез изменений.

let arr1 = ["HTML", "JavaScript", "CSS"];

function copySorted(arr1) {
	return arr1.slice().sort()
}
let copy = copySorted(arr1);
console.log(copy)
console.log(arr1)


//Напишите функцию sortByAge(users), которая получает массив объектов со ageсвойством и сортирует их по age.

function sortByAge(arrname) {
  arrname.sort((a, b) => a.age - b.age);
}

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 45 };

let arrname = [ pete, john, mary ];

sortByAge(arrname);
console.log(arrname);

function getAverageAge(arrname) {
	return arrname.reduce((sum, user) => sum + user.age, 0) / arrname.length;
}
console.log(getAverageAge(arrname))