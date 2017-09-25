var CollectorSMG = {
		name: "Collector SMG",
		type: "Submachine Gun",
		imageUrl: "http://img2.wikia.nocookie.net/__cb20121009204046/masseffect/images/6/68/ME3_Collector_SMG.png",
		accuracy: {
				positiveModifier: 2,
				negativeModifier: -1,
				minimumRange: 8,
				maximumRange: 25,
		},
		damageRange: {
				min: 1,
				max: 10,
				modifier: 2
		}
}
var M5Phalanx = {
		name: "M5-Phalanx",
		type: "Heavy Pistol",
		immageUrl: "http://img1.wikia.nocookie.net/__cb20120317185535/masseffect/images/a/ae/ME3_Phalanx_Heavy_Pistol.png",
		accuracy: {
				minimumRange: 0,
				maximumRange: 15,
				positiveModifier: 1,
				negativeModifier: 0
		},
		damageRange: {
				min: 1,
				max: 6,
				modifier: 3
		}
}
var M15Vindicator = {
		name: "M15 Vindicator Battle Rifle",
		type: "Battle Rifle",
		accuracy: {
				minimumRange: 10,
				maximumRange: 40,
				positiveModifier: 2,
				negativeModifier: 1
		},
		damageRange: {
				min: 1,
				max: 10,
				modifier: 1
		}
}
var M13Raptor = {
		name: "M-13 Raptor",
		type: "Sniper Rifle",
		imageUrl: "http://img1.wikia.nocookie.net/__cb20120317191426/masseffect/images/7/70/ME3_Raptor_Sniper_Rifle.png",
		accuracy: {
				minimumRange: 40,
				maximumRange: 150,
				positiveModifier: 4,
				negativeModifier: -2
		},
		damageRange: {
				min: 3,
				max: 12,
				modifier: 3
		}
}
var Phaeston = {
		name: "Phaeston",
		type: "Assault Rifle",
		imageUrl: "http://img3.wikia.nocookie.net/__cb20120317182349/masseffect/images/1/11/ME3_Phaeston_Assault_Rifle.png",
		accuracy: {
				minimumRange: 5,
				maximumRange: 50,
				positiveModifier: 1,
				negativeModifier: 0
		},
		damageRange: {
				min: 1,
				max: 8,
				modifier: 1
		}
}

var garrus = {
		name: "Garrus Vakarian",
		race: "Turian",
		gender: "Male",
		class: "Sniper",
		level: 1,
		experience: 0,
		backgroundStyle: 'transparent url("http://www.goodwp.com/large/201311/30382.jpg") no-repeat center/cover',
		characterBackground: "Garrus grew up on the Turian homeworld of Palaven. After doing his mandatory service in the Turian Military, Garrus joined Citadel Security(C-Sec) and was assigned to the Saren Arterius case in 2183 and helped Shepard defeat Saren and prevent the first Reaper invasion. He joined the crew on the Normandy until it was destroyed by Collectors. He was unable to return to the red-tape of C-Sec and started a mercenary group on Omega, operating under the codename \"Archangel\". After stopping the Collectors with Commander Shepard, Garrus went back to the Turian military to attempt to convince them to prepare for the Reaper invasion. Though the inevitable invasion hit Palaven hard, Garrus's efforts helped ensure the survival of the Turian race. He once again joined up with the SR2-Normandy to help defeat the Reapers once and for all.",
		attributes: {
				accuracy: 6,
				communication: 2,
				constitution: 4,
				dexterity: 2,
				fighting: 3,
				intelligence: 4,
				perception: 4,
				strength: 2,
				willpower: 4
		},
		weapons: {
				primary: M13Raptor,
				secondary: Phaeston,
				melee: {
						name: "Omni-blade",
						type: "Melee",
						imageUrl: "http://static.giantbomb.com/uploads/original/13/137161/2105863-z_88b3453a.jpg",
						accuracy: {
								minimumRange: 0,
								maximumRange: 1,
								positiveModifier: 1,
								negativeModifier: -20
						},
						damageRange: {
								min: 1,
								max: 6,
								modifier: 2
						}
				}
		},
		skills:[
			{name: "Take aim", description:"Combat rolls get +1 this turn" },
			{
				name: "Penetrating shot", description:"Attacks that hit penetrate up to 4 meters behind the target this turn"
			}
		]
};
var liara = {
		name: "Liara T'Soni",
		race: "Asari",
		gender: "Female",
		class: "Adept",
		level: 1,
		experience: 0,
		backgroundStyle: 'transparent url("http://www.wallpapermay.com/thumbnails/detail/20130203/blue%20mass%20effect%20asari%20mass%20effect%202%20mass%20effect%203%20liara%20mass%20effect%20liara%20tsoni%20aura%201680x1050%20w_www.wallpapermay.com_69.jpg") no-repeat center top/cover',
		characterBackground: "Liara T'Soni is the daughter of Asari matriarchs Benezia and Aethyta.  She was born in 2077 on Thessia and was raised there by Benezia.  Liara became enamored by the Protheans, dedicating over 50 years of her life to studying them.  After being rescued from a Geth attack in 2183, she joined Commander Shepard's mission to defeat Saren and the indoctrinated Benezia.  She was unable to undo Sovereign's indoctrination of Benezia, resulting in her mother's death on Noveria.  She was able to use her vast knowledge of the Protheans to help lead Shepard and the Normandy to Ilos and the Conduit, resulting in the defeat of Saren.  Liara stuck with the Commander until the destruction of the SR1 Normandy by the Collectors.  She temporarily teamed up with Cerberus to recover the Commander's body before the Shadow Broker could.  After being resurrected, Commander Shepard helped Liara defeat the Shadow Broker and take his place.  Liara's position as the Shadow Broker was able to greatly help the Alliance gain intel on Cerberus and the Reapers during the Reaper invasion of 2186, as well as help obtain large amounts of raw material to build the Crucible.  She assisted Commander Shepard once again with the defense of Thessia and the assault on the Reapers on Earth, helping to defeat the Reapers once and for all.",
		attributes: {
				accuracy: 1,
				communication: 3,
				constitution: 2,
				dexterity: 3,
				fighting: 2,
				intelligence: 6,
				perception: 4,
				strength: 1,
				willpower: 4
		},
		weapons: {
				primary: CollectorSMG,
				secondary: M5Phalanx,
				melee: {
						name: "Biotic punch",
						type: "Melee",
						imageUrl: "http://img1.wikia.nocookie.net/__cb20130422190551/masseffect/images/thumb/9/94/ME3_combat_-_shepard_shotgun_paunch.png/310px-ME3_combat_-_shepard_shotgun_paunch.webp",
						accuracy: {
								minimumRange: 0,
								maximumRange: 1,
								positiveModifier: 2,
								negativeModifier: -20
						},
						damageRange: {
								min: 1,
								max: 8,
								modifier: 3
						}
				}
		},
	skills: [
		{name: "Singularity", description:"Prevent 1-3 enemies within 5 meters of each other from taking action next turn"},
		{
			name: "Pull" , description: "Bring an enemy 10 meters closer to you"
		}
	]
}

function getWeaponDamage(character, weapon, range, target) {
		if (weapon.type == "Melee" && range > 1) {
				return 0;
		} else {
				//All attacks will use a 3d6 method
				var roll1 = rollDie(1, 6);
				var roll2 = rollDie(1, 6);
				var roll3 = rollDie(1, 6);
				if (roll1 + roll2 + roll3 + getAccuracyModifier(weapon, range) + character.attributes.accuracy >= target) {
						if (roll1 == roll2 || roll2 == roll3 || roll1 == roll3) {
								//stunted
								return {
										damage: (rollDie(weapon.damageRange.min, weapon.damageRange.max) + weapon.damageRange.modifier),
										stuntPoints: roll3
								}
						} else {
								return {
										damage: (rollDie(weapon.damageRange.min, weapon.damageRange.max) + weapon.damageRange.modifier),
										stuntPoints: 0
								}
						}
				} else {
						return 0;
				}
		}
}

function rollDie(min, max) {
		return Math.floor((Math.random() * max) + min);
}

function getAccuracyModifier(weapon, range) {
		if (weapon.accuracy.minimumRange <= range && weapon.accuracy.maximumRange >= range) {
				return weapon.accuracy.positiveModifier;
		} else {
				return weapon.accuracy.negativeModifier;
		}
}

function getRangeString(weapon) {
		var ret = "";
		if (weapon.type != "Melee") {
				ret += "+" + weapon.accuracy.positiveModifier + " to accuracy rolls between " + weapon.accuracy.minimumRange + " and " + weapon.accuracy.maximumRange + " meters";
				if (weapon.accuracy.negativeModifier > 0) {
						ret += " and +" + weapon.accuracy.negativeModifier + " to all others.";
				} else if (weapon.accuracy.negativeModifier < 0) {
						ret += " and " + weapon.accuracy.negativeModifier + " to all others.";
				} else {
						ret += ".";
				}
		} else {
				ret = "+" + weapon.accuracy.positiveModifier + " to accuracy rolls in melee range. Cannot hit targets outside melee range.";
		}

		return ret;
}

function getDamageString(weapon) {
		return weapon.damageRange.min + "-" + weapon.damageRange.max + " + " + weapon.damageRange.modifier
}
$(document).ready(function() {
		loadCharacter($('.mdl-navigation__link.active').data('character'));

});

function loadCharacter(characterName) {
		var character = garrus;
		$('.mdl-navigation__link[data-character="' + characterName + '"]').addClass('active');
		$('.mdl-navigation__link[data-character!="' + characterName + '"]').removeClass('active');
		switch (characterName) {
				case 'garrus':
						character = garrus;
						break;
				case 'liara':
						character = liara;
						break;
		}
		$('.character-bio-card .mdl-card__title').css('background', character.backgroundStyle);
		$('.character-bio-card .mdl-card__title-text').html(character.name);
		$('#character-race').html(character.race);
		$('#character-gender').html(character.gender);
		$('#character-class').html(character.class);
		$('#character-level').html(character.level);
		$('#character-experience').html(character.experience);
		$('.mdl-card.character-background .mdl-card__supporting-text p').html(character.characterBackground);
		$('td[data-attribute="Accuracy"]').html(character.attributes.accuracy);
		$('td[data-attribute="Communication"]').html(character.attributes.communication);
		$('td[data-attribute="Constitution"]').html(character.attributes.constitution);
		$('td[data-attribute="Dexterity"]').html(character.attributes.dexterity);
		$('td[data-attribute="Fighting"]').html(character.attributes.fighting);
		$('td[data-attribute="Intelligence"]').html(character.attributes.intelligence);
		$('td[data-attribute="Perception"]').html(character.attributes.perception);
		$('td[data-attribute="Strength"]').html(character.attributes.strength);
		$('td[data-attribute="Willpower"]').html(character.attributes.willpower);

	var skillsHtml = "";
	for(var i = 0; i< character.skills.length; i++){
		skillsHtml += "<li class='collection-item'><div class='collapsible-header'>" + character.skills[i].name + "</div><div class='collapsible-body'>" + character.skills[i].description + "</div></li>";
	}
	$('#skills-panel ul.collection').html(skillsHtml);

		$('.primary-weapon .weapon-name').html(character.weapons.primary.name);
		$('.primary-weapon .weapon-type').html(character.weapons.primary.type);
		$('.primary-weapon .weapon-range').html(getRangeString(character.weapons.primary));
		$('.primary-weapon .weapon-damage').html(getDamageString(character.weapons.primary));
		$('.primary-weapon .weapon-image').prop('src', character.weapons.primary.imageUrl);
		$('.secondary-weapon .weapon-name').html(character.weapons.secondary.name);
		$('.secondary-weapon .weapon-type').html(character.weapons.secondary.type);
		$('.secondary-weapon .weapon-range').html(getRangeString(character.weapons.secondary));
		$('.secondary-weapon .weapon-damage').html(getDamageString(character.weapons.secondary));
		$('.secondary-weapon .weapon-image').prop('src', character.weapons.secondary.imageUrl);
		$('.melee-weapon .weapon-name').html(character.weapons.melee.name);
		$('.melee-weapon .weapon-type').html(character.weapons.melee.type);
		$('.melee-weapon .weapon-range').html(getRangeString(character.weapons.melee));
		$('.melee-weapon .weapon-damage').html(getDamageString(character.weapons.melee));
		$('.melee-weapon .weapon-image').prop('src', character.weapons.melee.imageUrl);
	$('.collapsible.collapsible-accordion .collapsible-body').hide();
	$('.collapsible.collapsible-accordion li.active .collapsible-body').show();
	$('ul.collapsible li').each(function(){
		$(this).click(function(){
			accordion(this);
		});
	});
}
$('.mdl-navigation__link').each(function() {
		$(this).click(function() {
				loadCharacter($(this).data('character'));
			return false;
		});
});


function accordion(sender){
	var visible = !$(sender).hasClass('active');	$(sender).parent('.collapsible').children().removeClass('active');
	if(visible){
		$(sender).addClass('active');
	}
$(sender).parent('.collapsible').find('.collapsible-body').hide();
	if($(sender).hasClass('active')){
		$(sender).children('.collapsible-body').show();
	}
}
