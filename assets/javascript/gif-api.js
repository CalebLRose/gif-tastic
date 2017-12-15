$(document).ready(function(){

	var q = "";
	var btnArray = ["boomerang","astros","synthesizer","cats"];
	var btn;
	// var x = 0;

	function addBtn(){
		var myBtn = $("<button>"+btn+"</button>");
		myBtn.addClass("my-btns");
		$("#premade-buttons").append(myBtn);
	}
	
	for (var i=0;i<btnArray.length;i++){
		btn = btnArray[i];
		addBtn();
		// var myBtn = $("<button id=btn-"+i+">"+btnArray[i]+"</button>");
		// console.log(btnArray[i]);
		// myBtn.addClass("my-btns");
		// $("#premade-buttons").append(myBtn);
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

	$("#new-gif").on("click",function(event){
		event.preventDefault();
		var input = $("input").val().trim();
		console.log(input);
		btn = input;
		addBtn();
	});

	search();

})