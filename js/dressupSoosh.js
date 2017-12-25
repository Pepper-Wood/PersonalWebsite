var imageLayersHtml;
var tabsHtml = "<ul class='tabs'>";
var buttonsHtml = "";

var commonbullet = "<img class='dABullet' src='https://e.deviantart.net/emoticons/b/bulletblue.gif'> ";
var uncommonbullet = "<img class='dABullet' src='https://e.deviantart.net/emoticons/b/bulletpurple.gif'> ";
var rarebullet = "<img class='dABullet' src='https://e.deviantart.net/emoticons/b/bulletpink.gif'> ";
var exclusivebullet = "<img class='dABullet' src='https://e.deviantart.net/emoticons/b/bulletred.gif'> ";

var sooshTraits = ["","",""];

var base = "008";
var bandanas = [["Classic","common","035"],
			["Uptie","common","036"],
			["Cowbow","common","037"],
			["Headband","common","038"],
			["Sling","uncommon","022"],
			["Winter Scarf","uncommon","023"],
			["Single Ear","uncommon","024"],
			["Mask","uncommon","027"],
			["Single Paw","uncommon","033"],
			["Shawl","uncommon","029"],
			["Poncho","rare","028"],
			["Toga","rare","030"],
			["Cape","rare","031"],
			["Gown","rare","032"],
			["Traveler's","rare","019"],
			["Tail","rare","021"],
			["Hair","rare","034"],
			["Accessory","rare","039"],
			["Hood","exclusive","020"],
			["Hair-Uptie Hybrid","exclusive","025"],
			["Elegant","exclusive","026"]];
var ears = [["Perky","common","009"],
			["Floppy","common","010"],
			["Folded","common","011"],
			["Fluffy Perky","uncommon","012"],
			["Fluffy Floppy","uncommon","013"],
			["Fluffy Folded","uncommon","014"],
			["Side","uncommon","015"],
			["Fluffy Side","rare","016"],
			["Lynx","rare","017"],
			["Ursa","exclusive","018"]];
var tails = [["Fur","common","001"],
			["Whispy","common","002"],
			["Short Fur","common","003"],
			["Medium Fur","common","004"],
			["Long Fur","uncommon","005"],
			["Extra Long Fur","rare","006"],
			["Majestic Fur","exclusive","007"]];
// Generate all the individual image layers and their buttons
imageLayersHtml = "<img id='character' src='soosh/sooshImg/" + base + ".png'>";
imageAndButtonsHtmlMaker(bandanas,"bandana");
imageAndButtonsHtmlMaker(ears,"ear");
imageAndButtonsHtmlMaker(tails,"tail");
tabsHtml += "</ul>";
$("#characterContainer").html(imageLayersHtml);
$("#characterContainerButtonsSection").html(tabsHtml + buttonsHtml);

// ---------------------------------------------------
function imageAndButtonsHtmlMaker(sooshPart, sooshPartName) {
	tabsHtml += "<li class='tab col s3'><a href='#" + sooshPartName + "'>" + sooshPartName + "</a></li>";
	buttonsHtml += "<div id='" + sooshPartName + "'>";
	buttonsHtml += "<p><button class='btn btn-default' id='" + sooshPartName + "ButtonPrev' type='button'>" + sooshPartName + " Prev</button><button class='btn btn-default' id='" + sooshPartName + "ButtonNext' type='button'>" + sooshPartName + " Next</button></p><p>";
	for (i=0; i<sooshPart.length; i++) {
		imageLayersHtml += "<img id='" + sooshPartName + i + "' class='" + sooshPartName + "' src='soosh/sooshImg/" + sooshPart[i][2] + ".png'>";
		buttonsHtml += "<button class='btn " + sooshPart[i][1] + "btn specific" + sooshPartName + "Button' id='" + sooshPartName + i + "Button' type='button'>" + sooshPart[i][0] + "</button>";
	}
	buttonsHtml += "</p></div>";
}

// ---------------------------------------------------
$(document).ready(function() {
	$("#sooshSize").val($("img").css("width"));
	$("#characterContainer").css("width",$("#character").css("width") + "px");

	var bandanas_picker = new ImageSwitcher($(".bandana"),"bandana",0);
	var ears_picker = new ImageSwitcher($(".ear"),"ear",1);
	var tails_picker = new ImageSwitcher($(".tail"),"tail",2);

	// preset with defaults
	bandanas_picker.Change("bandana0");
	ears_picker.Change("ear0");
	tails_picker.Change("tail0");

	$("#bandanaButtonNext").click(function() {
		bandanas_picker.Next();
	});
	$("#bandanaButtonPrev").click(function() {
		bandanas_picker.Prev();
	});
	$(".specificbandanaButton").click(function() {
		bandanas_picker.Change($(this).attr("id").replace("Button",""));
	});

	$("#earButtonNext").click(function() {
		ears_picker.Next();
	});
	$("#earButtonPrev").click(function() {
		ears_picker.Prev();
	});
	$(".specificearButton").click(function() {
		ears_picker.Change($(this).attr("id").replace("Button",""));
	});

	$("#tailButtonNext").click(function() {
		tails_picker.Next();
	});
	$("#tailButtonPrev").click(function() {
		tails_picker.Prev();
	});
	$(".specifictailButton").click(function() {
		tails_picker.Change($(this).attr("id").replace("Button",""));
	});
	$("#openMenu").click(function() {
		$("#characterContainerButtons").css("right","0");
	})
	$("#closeMenu").click(function() {
		$("#characterContainerButtons").css("right","-50%");
	});
});

// ---------------------------------------------------
function ImageSwitcher(choices, groupName, groupIndex) {
	i = 0;
	this.Next = function() {
		hide_current_image();
		show_next_image();
		setSooshTraits();
	}

	this.Prev = function() {
		hide_current_image();
		show_prev_image();
		setSooshTraits();
	}

	this.Change = function(imgID) {
		hide_current_image();
		change_to_specific(imgID);
		setSooshTraits();
	}

	var hide_current_image = function() {
		$(".specific" + groupName + "Button").removeClass("active");
		for (j=0; j<choices.length; j++) {
			choices[j].style.visibility = "hidden";
		}
	}
	var show_prev_image = function() {
		i -= 1;
		if (choices) {
			if (i == -1) {
				i = choices.length-1;
			}
			sooshTraits[groupIndex] = choices[i].id;
			$("#" + choices[i].id + "Button").addClass("active");
			choices[i].style.visibility = "visible";
		}
	}
	var show_next_image = function() {
		i += 1;
		if (choices) {
			if (i == (choices.length)) {
				i = 0;
			}
			sooshTraits[groupIndex] = choices[i].id;
			$("#" + choices[i].id + "Button").addClass("active");
			choices[i].style.visibility = "visible";
		}
	}
	var change_to_specific = function(imgID) {
		i = 0;
		var done = false;
		while ((i<choices.length) && (done == false)) {
			if (choices[i].id == imgID) {
				sooshTraits[groupIndex] = choices[i].id;
				choices[i].style.visibility = "visible";
				$("#" + choices[i].id + "Button").addClass("active");
				done = true;
			} else {
				i += 1;
			}
		}
	}
}

// ---------------------------------------------------
$(document).on('input', '#sooshSize', function() {
    $("img").css("width",$(this).val() + "px");
});

// ---------------------------------------------------
function setSooshTraits() {
	var sooshTraitsHtml = "";
	var currentTrait = [];
	var currentTraitName;
	for (s=0; s<sooshTraits.length; s++) {
		if (sooshTraits[s] != "") {
			if (s == 0) {
				currentTrait = bandanas[sooshTraits[s].replace("bandana","")];
				currentTraitName = " Bandana";
			} else if (s == 1) {
				currentTrait = ears[sooshTraits[s].replace("ear","")];
				currentTraitName = " Ears";
			} else if (s == 2) {
				currentTrait = tails[sooshTraits[s].replace("tail","")];
				currentTraitName = " Tail";
			}
			if (currentTrait[1] == "common") {
				sooshTraitsHtml += commonbullet;
			} else if (currentTrait[1] == "uncommon") {
				sooshTraitsHtml += uncommonbullet;
			} else if (currentTrait[1] == "rare") {
				sooshTraitsHtml += rarebullet;
			} else if (currentTrait[1] == "exclusive") {
				sooshTraitsHtml += exclusivebullet;
			}
			sooshTraitsHtml += currentTrait[0] + currentTraitName + "<br>";
		}
	}
	$("#sooshTraits").html(sooshTraitsHtml);
}
