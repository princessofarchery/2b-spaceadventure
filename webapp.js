// JavaScript Document

window.onload = function() {
	// load the cookies
	
	// print the first scene
	updateScene("start");
}

function updateScene(s) {
	 switch(s) {
	 	case "start":
			document.getElementById("storyline").innerHTML = "<p>The year is 2753.</p><p>Harold: Is anyone out there? Hello?...</p><p>Base: Who is this?</p><p>Harold: My name is Captain Harold.</p><p>Base: Captain Harold! We thought you died when the Falcon exploded!</p><p>Harold: I was the only survivor. I am on an unknown planet with limited resources and my ship is in ruins.</p><p>Base: Ok, we will try to get to you. Do you still have your locator we gave you?</p>";
			break;
		case "s1":
			document.getElementById("storyline").innerHTML = " <p>If player chooses yes</p><p>Base:Ok, try to keep it on.</p> <p>Harold:Ok</p><p>Base: Wow, it appears you are in the planet...";
			break;
			case"s2":
			document.getElementById("storyline").innerHTML ="<p>Planet:Ermina 3 <p>Harold: How many light years is that from Earth?</p><p>About seven light years away. This means it will take us apporximately  a week to get to your location.</p><p>Ok, I think I had enough supplies to survive, but I do need some isotope base 23 becasue my supply of it is running out.</p><p>Base: What would happen if you didn't have it?</p><p>HaroldIsotope base 23 is the thing that keeps me living. In your plabnet, it is referred to as food</p>";
			break;
			case"s3":
			document.getElementById("storyline").innerHTML ="<p> If you choose no </p> <p>Base: How many moons are there on that planet? How long is each day?</p><p>Harold: There are about 7 moons and it takes about 37 hours to get through the day. The planet has no living beings except for plants.</p><p>Base:How's your food supply</p><p>Harold:I am surviving only only on a few berries and mangoes right now, but I am starting to lose my supply of it.</p> <p>Harold:I'll get more food or I'll go creater a shelter</p>";
			break;
			case"s4":
			document.getElementById("storyline").innerHTML ="<p> If you get more food:</p> <p>Base:Apparently, that planet has an abudnace of nagoes, berries, and fart causing oranges</p><p>Harold:Ok got it.</p><p>Base: We should be able to get there in about 5 earth days. <p>Harold:After I find more food, I will build a shelter.</p>";
			break;
			case"s5":
			document.getElementById("storyline").innerHTML ="<p>You build a shelter</p> <p>Harold: I'll go cut some wood and prepare for the night. At night, the winters go down to -4 degrees Fahrenheit.</p><p>Base: That planet has a lot of isotope base 189 which is an extremely good insulator.</p> <p>Harold: Got it</p>"; 
			break;
	 }
 }