
/**object orietend programming */

var customer = {
	checking: 0,
	savings: 0,
	deposit: function (amount) {
		customer.checking += amount;
	},
	tranfer: function (amount) {
		customer.checking -= amount;
		customer.savings += amount;
	}

};

customer.deposit(1000);
customer.tranfer(200);

console.log('Checking:' + customer.checking);
console.log('Savings:' + customer.savings);

const bodyElement = document.getElementById("parent");
const paragraph = document.getElementById("child");
bodyElement.removeChild(paragraph);

function sayHello() {
	document.getElementById("prompt").innerHTML = "BAD GUY DOINGS";
}


function submit() {
	const surname = document.getElementById("street").value;

	document.getElementById("prompt").innerHTML = surname + " is your street!";
}

var counter = 3;

function upvote() {

	counter = counter + 1;
	document.getElementById("votes").innerHTML = counter + " votes"
}


function downvote() {

	counter = counter - 1;
	document.getElementById("votes").innerHTML = counter + " votes"
}

const calculateAge = () => {
	let d1 = document.getElementById("date").value;
	let m1 = document.getElementById("month").value;
	let y1 = document.getElementById("year").value;

	let date = new Date();
	let d2 = date.getDate();
	let m2 = 1 + date.getMonth();
	let y2 = date.getFullYear();
	let month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

	if (d1 > d2) {
		d2 = d2 + month[m2 - 1]
		m2 = m2 - 1;
	}

	if (m1 > m2) {
		m2 = m2 + 12;
		y2 = y2 - 1;
	}
	let d = d2 - d1;
	let m = m2 - m1;
	let y = y2 - y1;


	document.getElementById("displayAge").innerText = 'Your Age is ${y} Years, ${m} Months and ${d} Days';
}

const person = {
	name: "Zodiac Hasbro",
	age: 56
};

const greeting = `Hello, my name is ${person.name}!
I am ${person.age} years old.`;

alert(greeting);