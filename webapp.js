// JavaScript Document

window.onload = function() {
	// load the cookies
	
	// print the first scene
	updateScene("start");
};

function updateScene(s) {
	 switch(s) {
	 	case "start":
			document.getElementById("storyline").innerHTML = "<p>The year is 2753.</p><p>Harold: Is anyone out there? Hello?...</p><p>Base: Who is this?</p><p>Harold: My name is Captain Harold.</p><p>Base: Captain Harold! We thought you died when the Falcon exploded!</p><p>Harold: I was the only survivor. I am on an unknown planet with limited resources and my ship is in ruins.</p><p>Base: Ok, we will try to get to you. Do you still have your locator we gave you?</p>";
			// change btn1
			document.getElementById("btn1").innerHTML = "Yes";
			document.getElementById("btn1").addEventListener("click", function() {
				updateScene("s1");
			});
			// change btn2
			document.getElementById("btn2").innerHTML = "No";
			document.getElementById("btn2").addEventListener("click", function() {
				updateScene("s3");
			});
			break;
		case "s1":
			document.getElementById("storyline").innerHTML = "<p>Base: Ok, try to keep it on.</p><p>Harold: Ok</p><p>Base: Wow, it appears you are on the planet...";
			//change btn1
			document.getElementById("btn1").innerHTML = "Ermina 3";
			document.getElementById("btn1").addEventListener("click", function() {
				updateScene("s2");
			});
			//change btn2
			document.getElementById("btn2").innerHTML = "Sirona";
			document.getElementById("btn2").addEventListener("click", function() {
				updateScene("s5");
			});
			break;
		case"s2":
			document.getElementById("storyline").innerHTML ="<p>Planet Ermina 3<p>Harold: How many light years is that from Earth?</p><p>Base: About seven light years away. This means it will take us apporximately a week to get to your location.</p><p>Harold: Ok, I think I had enough supplies to survive, but I do need some Isotope Base 23 becasue my supply of it is running out.</p><p>Base: What would happen if you didn't have it?</p><p>Harold: Isotope base 23 is the thing that keeps me living. Base: On your planet, it is referred to as food</p><p>Harold: Should I go find some more food or should I start making a shelter?</p>";
			//change btn1
			 document.getElementById("btn1").innerHTML = " Food";
			document.getElementById("btn1").addEventListener("click", function() {
				updateScene("s4");
			});
			//change btn2
			document.getElementById("btn2").innerHTML = "Shelter";
			document.getElementById("btn2").addEventListener("click", function() {
				updateScene("s5");
			});
			break;
		case"s3":
			document.getElementById("storyline").innerHTML ="<p>Base: How many moons are there on that planet? How long is each day?</p><p>Harold: There are about seven moons and it takes about 37 hours to get through one day. The planet has no living beings except for some scattered plants.</p><p>Base: How's your food supply?</p><p>Harold: I am surviving only only on a few berries and mangoes right now, but I am starting to lose my supply of it.</p><p>Harold: I'll get more food or I'll go creater a shelter</p>";
			//change btn1
			document.getElementById("btn1").innerHTML = "Food";
			document.getElementById("btn1").addEventListener("click", function() {
				updateScene("s4");
			});
			//change btn2
			document.getElementById("btn2").innerHTML = "Shelter";
			document.getElementById("btn2").addEventListener("click", function() {
				updateScene("s5");
			});
			break;
		case"s4":
			document.getElementById("storyline").innerHTML ="<p>Base: Apparently, that planet has an abundace of nagoes, burp causing berries, and fart causing oranges</p><p>Harold: Ok, got it.</p><p>Base: We should be able to get there in about five Earth days.<p>Harold: After I find more food, I will build a shelter.</p>";
			//change btn1
			document.getElementById("btn1").innerHTML = "Food";
			document.getElementById("btn1").addEventListener("click", function() {
				updateScene("s4");
			});
			//change btn2
			document.getElementById("btn2").innerHTML = "Shelter";
			document.getElementById("btn2").addEventListener("click", function() {
				updateScene("s5");
			});
			break;
		case"s5":
			document.getElementById("storyline").innerHTML ="<p>Harold: I'll go cut some wood and prepare for the night. At night, the weather goes down to about -4 degrees Fahrenheit.</p><p>Base: That planet has a lot of Isotope Base 189 which is an extremely good insulator.</p><p>Harold: Got it</p><p>Base: Now you should go to sleep or you could stay awake and look out for more stuff during the night.</p>"; 
			//change btn1
			document.getElementById("btn1").innerHTML = "Stay Awake";
			document.getElementById("btn1").addEventListener("click", function() {
				updateScene("s7");
			});
			//change btn2
			document.getElementById("btn2").innerHTML = "Sleep";
			document.getElementById("btn2").addEventListener("click", function() {
				updateScene("s6");
			});
			break;
		case"s6":
			document.getElementById("storyline").innerHTML="<p>Harold: Ok now it is the morning currently unaware of the time.</p><p>Base: I guess we know that it is the morning and that you got to start doing something.</p><p>Harold:Alright I guess so... I'm going to go hunt for some meat now that I know that I have a steady flow of fruits.</p><p>Base: All right, do you want to fish or hunt on land?</p>";
			//change btn1
			document.getElementById("btn1").innerHTML = "Fish";
			document.getElementById("btn1").addEventListener("click", function() {
				updateScene("s8");
			});
			//change btn2
			document.getElementById("btn2").innerHTML = "Hunt";
			document.getElementById("btn2").addEventListener("click", function() {
				updateScene("s9");
			});
			break;
		case"s7":
			document.getElementById("storyline").innerHTML="<p>You are staying awake</p><p>Harold: Good thing I started up a fire so that I wouldnt't be cold...</p><p>Alright, now if you are awake, you should at least go hunting with darkness at your advantage</p><p>Harold:Alright, should I go fish or hunt on land?</p>";
			//change btn1
			document.getElementById("btn1").innerHTML = "Fish ";
			document.getElementById("btn1").addEventListener("click", function() {
				updateScene("s8");
			});
			//change btn2
			document.getElementById("btn2").innerHTML = "Hunt";
			document.getElementById("btn2").addEventListener("click", function() {
				updateScene("s9");
			});
			break;
		case "s8":
		    document.getElementById("storyline").innerHTML="<p>If fishing</p> <p>Harold:Alright Im going to go fishing</p><p>Harold: Casting out the pole and hoping that I catch something at all</p><p>Base:Im picking up on something that is pulling on your pole!</p><p>Harold: My gosh! Already! ok Im reeling it in now. It seems like its some kind of a big one.... wait now it looks like a mountian and whooooooooooa... pzzzzzzz</p><p>Base: Come in Harold! are you there? I repeat ARE YOU THERE?</p><p>Does he return?</p>"; 
			
			document.getElementById("btn1").innerHTML = "He dead bro";
			document.getElementById("btn1").addEventListener("click", function() {
				updateScene("s11");
			});
			//change btn2
			document.getElementById("btn2").innerHTML = "Continue?";
			document.getElementById("btn2").addEventListener("click", function() {
				updateScene("s10");
			});
			break;
		case"s9":
		      document.getElementById("storyline").innerHTML="<p>If Hunting</p> <p>Harold: Ok, I made a decent spear out of the poles and sharp ends I found in the lefovers of the ship and are heading for what looks like the woods...</p><p>Base: Alright, you are now in an uncharted area that has unknown dangers</p><p> Harold: Alright, I'll take the risk cause I need food. Going into the woods. Oh! I found a small chicken looking thing.... running away from me and I'm chasing it... HOLY SMOKES THERE IS A HUGE BEAST WITH GLOWING EYES</p><p>Continue?</p>";
			  
			  document.getElementById("btn1").innerHTML = "He dead bro";
			document.getElementById("btn1").addEventListener("click", function() {
				updateScene("s11");
			});
			//change btn2
			document.getElementById("btn2").innerHTML = "Continue?";
			document.getElementById("btn2").addEventListener("click", function() {
				updateScene("s12");
			});
			  break;
	   case"s10":
	          document.getElementById("storyline").innerHTML="<p>If continue for fish</p><p> Base: I repeat, are you there? Repeat ANSWER ME HAROLD</p> <p> zzzzzzz.... yea I'm back... seems like this giant fish thing was a mythical whale... it took me to a underwater world.</p> <p> Base: What are the statistics? What is the population and what species? <p> Harold: This is a place with about a 1000 in population number... with what seems like dogs that have astronaut helmets.</p><p>Base: Alright, try to get out of there as soon as you can cause we dont know if they are hostile</p> <p> Harold:I don't think I have a choice... I'm what it seems deep enough to not even see the surface.</p> <p> Base: This is a huge mess, we first have to get you back and now you gotta get out of there.</p> " ;
			  document.getElementById("btn1").innerHTML = "Start exploring";
			document.getElementById("btn1").addEventListener("click", function() {
				updateScene("s14");
			});
			//change btn2
			document.getElementById("btn2").innerHTML = "Immediatly trys to escape";
			document.getElementById("btn2").addEventListener("click", function() {
				updateScene("s13");
			});
			  
			  break;
			  
	case"s11" :
	       document.getElementById("storyline").innerHTML="U dead bro...Thanks for playing!";
		   break;
		   
   case"s12":
         document.getElementById("storyline").innerHTML="<p>Base: GET YOUR BUTT OUT OF THERE!</p><p>Harold: I AM GETTING MY BUTT out of the forest but it seems like the bear is slowing down at any rate!</p><p> Base:Alright, do you know the species of this animal </p><p>Harold: From what I see, it is a species of Smoke Eyes known for their bright eyes in the night and a huge appetite for humans.</p><p>";
		 
		   document.getElementById("btn1").innerHTML = "Give up and die";
			document.getElementById("btn1").addEventListener("click", function() {
				updateScene("s11");
			});
			//change btn2
			document.getElementById("btn2").innerHTML = "Keep Running ";
			document.getElementById("btn2").addEventListener("click", function() {
				updateScene("s17");
			});
		 break;
	case"s13":
	     document.getElementById("storyline").innerHTML="<p>Base: That's a bad idea though if you want to try.... can't stop you</p> <p> Harold: I got to do this or I will stayi n this place forever..</p><p>Base: Alright, it seems like you should be getting to the back of this city in order to exit the bubble that is protecting this dogpolis.</p><p> Harold: Alright, where am I getting my suit?</p><p> Base: YOu should be able to get a suit by sabotaging it from one of the dogs.</p> <p> Harold:Alright, I'm heading over to a schnauzer....</p>";
		  
		  document.getElementById("btn1").innerHTML = "Sabotage";
			document.getElementById("btn1").addEventListener("click", function() {
				updateScene("s15");
			});
			//change btn2
			document.getElementById("btn2").innerHTML = "Change of mind";
			document.getElementById("btn2").addEventListener("click", function() {
				updateScene("s16");
			});
			break;
	case"s14":
	     document.getElementById("storyline").innerHTML="<p>Harold: It seems like it's some kind of Hig-tech city with extremely smart telepathic dogs...</p><p>Base: This is an uncharted species! This is something we have never seen before... animals with superior smarts than humankind</p><p> I'm going into thier conviencinece store</p><p> Base:what do you see?</p><p. Harold: I see beef-jerky, a   bone-a-licious juice, and I see some stuff called underwater lighters</p>  ";
	}
 }