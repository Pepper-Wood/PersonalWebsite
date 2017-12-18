// ---------------------------------------------------
$(document).ready(function() {
	$("#characterContainer").css("width",$("#character").css("width") + "px");
	var bandanas = $(".bandana");

	var bandanas_picker = new ImageSwitcher(bandanas);
	$("#bandanaButtonNext").click(function() {
		bandanas_picker.Next();
	});
	$("#bandanaButtonPrev").click(function() {
		bandanas_picker.Prev();
	});
	$(".specificBandanaButton").click(function() {
		bandanas_picker.Change($(this).attr("id").replace("Button",""));
	});
});

// ---------------------------------------------------
function ImageSwitcher(choices, i) {
	i = 0;
	this.Next = function() {
		hide_current_image();
		show_next_image();
	}

	this.Prev = function() {
		hide_current_image();
		show_prev_image();
	}

	this.Change = function(imgID) {
		console.log(imgID);
		hide_current_image();
		change_to_specific(imgID);
	}

	var hide_current_image = function() {
		$(".specificBandanaButton").removeClass("active");
		if(choices){
			choices[i].style.visibility = "hidden";
		}
	}
	var show_prev_image = function() {
		i -= 1;
		console.log(i);
		if(choices){
			if(i == -1) {
				i = choices.length-1;
			}
			$("#" + choices[i].id + "Button").addClass("active");
			choices[i].style.visibility = "visible";
		}
	}
	var show_next_image = function() {
		i += 1;
		console.log(i);
		if(choices){
			if(i == (choices.length)) {
				i = 0;
			}
			$("#" + choices[i].id + "Button").addClass("active");
			choices[i].style.visibility = "visible";
		}
	}
	var change_to_specific = function(imgID) {
		i = 0;
		var done = false;
		while ((i<choices.length) && (done == false)) {
			console.log(i);
			console.log(choices.length);
			if (choices[i].id == imgID) {
				choices[i].style.visibility = "visible";
				$("#" + choices[i].id + "Button").addClass("active");
				done = true;
			} else {
				i += 1;
			}
		}
	}
}
