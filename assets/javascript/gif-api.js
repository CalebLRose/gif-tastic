$(document).ready(function(){

	var q = "";
	var btnArray = ["boomerang","astros","synthesizer","cats"];
	var x = 0;

	for (var i=0;i<btnArray.length;i++){
		$("#premade-buttons").append("<button id= btn-"+x+">"+btnArray[i]+"</button>");
		$("button").addClass("my-btns");
		x++;
	};

	function search(){
		var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=aRKmO1b2giWVbaCzp30YdQ88s3NzPtnX&q="+q+"&limit=5&offset=0&rating=PG&lang=en"
		
		$.ajax({
			url: queryURL,
			method: "GET"
		})
		.done(function(response){
			console.log(response);
		})
	};

	search();

})