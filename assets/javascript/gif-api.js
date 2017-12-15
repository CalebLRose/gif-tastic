$(document).ready(function(){

	var q = "";
	var btnArray = ["boomerang","astros","synthesizer","cats"];
	var btn;
	var offset;
	// var x = 0;

	function addBtn(){
		var myBtn = $("<button>"+btn+"</button>");
		myBtn.addClass("my-btns");
		$("#premade-buttons").append(myBtn);
	}
	
	for (i=0;i<btnArray.length;i++){
		btn = btnArray[i];
		addBtn();
		// var myBtn = $("<button id=btn-"+i+">"+btnArray[i]+"</button>");
		// console.log(btnArray[i]);
		// myBtn.addClass("my-btns");
		// $("#premade-buttons").append(myBtn);
	};

	function search(){
		var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=aRKmO1b2giWVbaCzp30YdQ88s3NzPtnX&q="+q+"&limit=6&offset="+offset+"&rating=PG-13&lang=en"
		
		$.ajax({
			url: queryURL,
			method: "GET"
		})
		.done(function(response){
			console.log(response);
			var results = response.data;
			for (j=0;j<results.length;j++){
				var gifsDiv = $("<div class='item'>");
				var rating = results[j].rating;
				var p = $("<p>").text("Rating: "+rating);
				var gifImage = $("<img>");
				gifImage.addClass("sources");
				gifImage.attr("src", results[j].images.fixed_width_still.url);
				gifImage.attr("data-state", "still");
				gifImage.attr("data-still", results[j].images.fixed_width_still.url);
				gifImage.attr("data-play", results[j].images.fixed_width.url);
				gifsDiv.prepend(p);
				gifsDiv.prepend(gifImage);
				$("#gifs").prepend(gifsDiv);

			};
			
		})
	};

	$("#premade-buttons").on("click","button.my-btns",function(){
		offset = Math.floor(Math.random()*100);
		console.log("randomize: "+offset);
		q = $(this).text();
		console.log(q);
		$(".item").remove()
		search();
	});

		$("#new-gif").on("click",function(event){
		event.preventDefault();
		var input = $("input").val().trim();
		console.log(input);
		btn = input;
		addBtn();
	});	

		$(document).on("click","img.sources",function(){
		var $img = $(this);
		console.log(this);
		var state = $img.attr("data-state");
		var pause = $img.attr("data-still");
        var move = $img.attr("data-play");
        if (state === "still"){
          $img.attr("src",move);
          $img.attr("data-state", "play");
          console.log("start: "+state);
        } else {
          $img.attr("src", pause);
          $img.attr("data-state", "still");
          console.log("stop: "+state);
        };
	});

})