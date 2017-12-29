	var timeStart;
	var timeEnd;
	var wordsCount;

	// count time/ stop time when button is clicked
	$("#btnStart").click(function() {
		timeStart = new Date();
		$("#wpmText").show();
		$("#btnStop").show();
		//TODO: add random generate text from array in "wpmText" div
	});

	$("#btnStop").click(function() {
		if (!timeEnd) {
			timeEnd = new Date();
		};
		var finalTime = ((timeEnd - timeStart) / 1000) / 60; // find time difference and convert it to seconds and seconds to minutes
		var finalScore = (wordsCount / finalTime);
		finalScore = finalScore.toFixed(0);
		alert("you're score is " + finalScore + " words per minute");
		
	});

	$('#wpmText').load("sample.txt", function() {
		// alert("Load was performed.");
		wordsCount = document.getElementById("wpmText").innerHTML.split(" ").length; });