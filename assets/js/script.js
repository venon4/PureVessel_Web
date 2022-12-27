function onLoad() {
	//Title animation
	var title = document.title,
		animSeq = ["/", "$", "\\", "|", "$"],
		animIndex = 0,
		titleIndex = 0;
	function doInverseSpinZeroPitch() {
		var loadTitle = title.substring(0, titleIndex);
		if (titleIndex > title.length) {
			animIndex = 0;
			titleIndex = 0
		}
		if (animIndex > 3) {
			titleIndex++;
			animIndex = 0
		}
		document.title = loadTitle + animSeq[animIndex];
		animIndex++
	}
	window.setInterval(doInverseSpinZeroPitch, 100);

	//Disable right click and ctrl+u, ctrl+c, ctrl+i ctrl+v, ctrl+s, F12
	document.addEventListener("contextmenu", function (e) {
		e.preventDefault();
	}, false);
	document.addEventListener("keydown", function (e) {
		if (e.ctrlKey && (e.keyCode === 85 || e.keyCode === 73 || e.keyCode === 67 || e.keyCode === 86 || e.keyCode === 83 || e.keyCode === 123)) {
			e.preventDefault();
		}
	}, false);

	//Local time
	var newDate = new Date();
	newDate.setDate(newDate.getDate());

	setInterval(function () {
		//Get the local time
		var date = new Date();
		var hours = date.getHours();
		var minutes = date.getMinutes();
		var seconds = date.getSeconds();

		//Convert to 12 hour time
		var ampm = hours >= 12 ? 'PM' : 'AM';
		hours = hours % 12;
		hours = hours ? hours : 12; // the hour '0' should be '12'
		hours = hours < 10 ? hours : hours;
		minutes = minutes < 10 ? '0'+minutes : minutes;
		seconds = seconds < 10 ? '0'+seconds : seconds;
		var strTime = hours + ':' + minutes + ':' + seconds + ' ' + ampm;

		document.querySelector('.time').innerHTML = strTime;
		document.querySelector('.time').setAttribute('data-time', strTime);

	}, 1000);
};

function toggleMute() {
	let video = document.getElementById("myVideo")
	let icon = document.getElementById("iconVolume");

	if (video.muted) {
		video.muted = false;

		icon.classList.remove("bxs-volume-mute");
		icon.classList.add("bxs-volume-full");
	} else {
		video.muted = true;

		icon.classList.remove("bxs-volume-full");
		icon.classList.add("bxs-volume-mute");
	}
}