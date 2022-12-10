const timer = document.getElementById('timer_div');

const startbtn = document.getElementById('start');

const stopbtn = document.getElementById('stop');

var min = 0;
var sec = 0;
var stoptime = true;


function startTime() {
  startbtn.style.display="none";
  stopbtn.style.display="block";
	if (stoptime == true) {
		stoptime = false;
	}
}

function stopTimer() {
  startbtn.style.display="block";
  stopbtn.style.display="none";
	if (stoptime == false) {
		stoptime = true;
	}
}

setInterval(function() {
	if (stoptime == false) {
		sec = parseInt(sec);
		min = parseInt(min);
		sec=sec+1;
		if (sec == 60 || sec == 0) {
			min=min+1;
			sec=0;
		}
		if (sec<10) {
			sec='0'+sec;
		}
		if (min<10 || min == 0) {
			min='0'+min;
		}
		timer.innerHTML = min + ':' + sec;
	}
},1000);

function reset() {
	timer.innerHTML = "00:00";
		sec = 0;
		min = 0;
  stopTimer()
}