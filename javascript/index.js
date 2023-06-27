// even fire by button to fetch the data by button id
let startButton = document.getElementById('start');
let stopButton = document.getElementById('stop');
let resetButton = document.getElementById('reset');

// set the all digit zero
let hour = 00;
let minute = 00;
let second = 00;
let count = 00;

// start timer function
startButton.addEventListener('click', function () {
	timer = true;
	stopWatch();
});
function stopWatch() {
	if (timer) {
		count++;

		if (count == 100) {
			second++;
			count = 0;
		}

		if (second == 60) {
			minute++;
			second = 0;
		}

		if (minute == 60) {
			hour++;
			minute = 0;
			second = 0;
		}

		let hrString = hour;
		let minString = minute;
		let secString = second;
		let countString = count;

		if (hour < 10) {
			hrString = "0" + hrString;
		}

		if (minute < 10) {
			minString = "0" + minString;
		}

		if (second < 10) {
			secString = "0" + secString;
		}

		if (count < 10) {
			countString = "0" + countString;
		}

		document.getElementById('Hr').innerHTML = hrString;
		document.getElementById('Min').innerHTML = minString;
		document.getElementById('Sec').innerHTML = secString;
		document.getElementById('NanoSec').innerHTML = countString;
		setTimeout(stopWatch, 10);
	}
}

// stop the timer
stopButton.addEventListener('click', function () {
	timer = false;
});

// reset the timer
resetButton.addEventListener('click', function () {
	timer = false;
	hour = 0;
	minute = 0;
	second = 0;
	count = 0;
	document.getElementById('Hr').innerHTML = "00";
	document.getElementById('Min').innerHTML = "00";
	document.getElementById('Sec').innerHTML = "00";
	document.getElementById('NanoSec').innerHTML = "00";
});
