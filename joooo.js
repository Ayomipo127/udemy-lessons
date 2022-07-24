
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

function showAttribute() {
	const el = document.querySelector("img");
	el.src = "./images/IMG_20210514_115225_701.jpg";
}

function changeQuestionType() {
	const el = document.querySelector("input");
	el.type = "checkbox";
}