// ---------------------------------------------------
$(document).ready(function(){
	var pants = $(".pant");
	var shirts = $(".shirt");

	var shirt_picker = new ImageSwitcher(shirts);
	document.getElementById("shirt_button").onclick = function() { shirt_picker.Next(); };

	var pants_picker = new ImageSwitcher(pants);
	document.getElementById("pant_button").onclick = function() {pants_picker.Next(); };
});

// ---------------------------------------------------
function ImageSwitcher(choices, i) {
	i = 0;

	this.Next = function() {
		hide_current_image();
		show_next_image();
	}

	var hide_current_image = function() {
		if(choices){
			choices[i].style.visibility = "hidden";
			i += 1;
		}
	}
	var show_next_image = function() {
		if(choices){
			if(i == (choices.length)) {
				i = 0;
			}
			choices[i].style.visibility = "visible";
		}
	}
}

// ---------------------------------------------------
$("#shirt_button").click(function(){
	$("#shirt-menu").css("visibility", "visible");
});
