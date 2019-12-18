'use strict';
let map = document.querySelector('#map'),
	clickCounter = 0,
	clickX = 0,
	clickY = 0,
	result = document.querySelector('#temperature');

//hide treasure
let treasureX = Math.random() * map.offsetWidth,
	treasureY = Math.random() * map.offsetHeight;


//create listener for map
map.addEventListener('click', userEvent);
function userEvent(event) {
	//change counter
	clickCounter++;


	//get click coordinats
	getDistance();
	function getDistance() {
		clickX = event.offsetX;
		clickY = event.offsetY;

		//get difference click with treasure
		let distanceX = clickX - treasureX;
		let distanceY = clickY - treasureY;

		let distance = Math.sqrt(Math.pow(distanceX, 2) + Math.pow(distanceY, 2));
		let mapHypo = Math.sqrt(Math.pow(map.offsetWidth, 2) + Math.pow(map.offsetHeight, 2));
		distance = distance / mapHypo * 100;
		return distance;
	};


	//Show result
	showResult();
	function showResult() {
		if (getDistance() <= 1) {
			alert(`You find the treasure!!! On the ${clickCounter}nd try!`);
		} else if (getDistance() <= 2) {
			result.innerHTML = 'Very Hot!!!';
		} else if (getDistance() <= 4) {
			result.innerHTML = 'Hot!!!';
		} else if (getDistance() <= 8) {
			result.innerHTML = 'Middle rared';
		} else if (getDistance() <= 16) {
			result.innerHTML = 'Cold';
		} else if (getDistance() <= 32) {
			result.innerHTML = 'Snowy';
		} else if (getDistance() <= 64) {
			result.innerHTML = 'Winter Is Coming';
		} else {
			result.innerHTML = 'Winter Is Here';
		};
	};
};


