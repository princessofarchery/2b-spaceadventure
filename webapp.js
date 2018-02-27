// JavaScript Document

window.onload = function() {
	// load the cookies
	if( getCookie("scene") == "") {
		// print the first scene
		updateScene("start");
	} 
else{updateScene(getCookie("scene"));
}
};

 

function updateScene(s) {
	 switch(s) {
	 	case "start":
			document.getElementById("storyline").innerHTML ="<p>The year is 2753.</p><p>Harold: Is anyone out there? Hello?...</p><p>Base: Who is this?</p><p>Harold: My name is Captain Harold.</p><p>Base: Captain Harold! We thought you died when the Falcon exploded!</p><p>Harold: I was the only survivor. I am on an unknown planet with limited resources and my ship is in ruins.</p><p>Base: Ok, we will try to get to you. Do you still have your locator we gave you?</p>";
			// change btn1
			document.getElementById("btn1").innerHTML = "Yes";
			document.getElementById("btn1").setAttribute("onclick", "updateScene('s1')");
			// change btn2
			document.getElementById("btn2").innerHTML = "No";
			document.getElementById("btn2").setAttribute("onclick", "updateScene('s3')");
			break;
		case"s1":
			document.getElementById("storyline").innerHTML ="<p>Base: Ok, try to keep it on.</p><p>Harold: Ok</p><p>Base: Wow, it appears you are on the planet...";
			//change btn1
			document.getElementById("btn1").innerHTML ="Ermina 3";
			document.getElementById("btn1").setAttribute("onclick", "updateScene('s2')");
			//change btn2
			document.getElementById("btn2").innerHTML ="Sirona";
			document.getElementById("btn2").setAttribute("onclick", "updateScene('s5')");	
			 //function to reset the story
			document.getElementById("Reset").innerHTML=" Reset";
			document.getElementById("Reset").setAttribute("onclick","updateScene('start')");
			 	break;
		case"s2":
			document.getElementById("storyline").innerHTML ="<p>Harold: How many light years is that from Earth?</p><p>Base: About seven light years away. This means it will take us apporximately a week to get to your location.</p><p>Harold: Ok, I think I had enough supplies to survive, but I do need some Isotope Base 23 becasue my supply of it is running out.</p><p>Base: What would happen if you didn't have it?</p><p>Harold: Isotope Base 23 is the thing that keeps me living. Base: On your planet, it is referred to as food</p><p>Harold: Should I go find some more food or should I start making a shelter?</p>";
			//change btn1
			document.getElementById("btn1").innerHTML ="Food";
			document.getElementById("btn1").setAttribute("onclick", "updateScene('s4')");
			//change btn2
			document.getElementById("btn2").innerHTML ="Shelter";
			document.getElementById("btn2").setAttribute("onclick", "updateScene('s5')");
			   //function to reset the story
			document.getElementById("Reset").innerHTML=" Reset";
			document.getElementById("Reset").setAttribute("onclick","updateScene('start')");
			 	break;
		case"s3":
			document.getElementById("storyline").innerHTML ="<p>Base: How many moons are there on that planet? How long is each day?</p><p>Harold: There are about seven moons and it takes about 37 hours to get through one day. The planet has no living beings except for some scattered plants.</p><p>Base: How's your food supply?</p><p>Harold: I am surviving only only on a few berries and mangoes right now, but I am starting to lose my supply of it.</p><p>Harold: I'll get more food or I'll go creater a shelter</p>";
			//change btn1
			document.getElementById("btn1").innerHTML ="Food";
			document.getElementById("btn1").setAttribute("onclick", "updateScene('s4')");
			//change btn2
			document.getElementById("btn2").innerHTML ="Shelter";
			document.getElementById("btn2").setAttribute("onclick", "updateScene('s5')");
		 //function to reset the story
			document.getElementById("Reset").innerHTML=" Reset";
			document.getElementById("Reset").setAttribute("onclick","updateScene('start')");
			 	
			break;
		case"s4":
			document.getElementById("storyline").innerHTML ="<p>Base: Apparently, that planet has an abundace of nagoes, burp causing berries, and fart causing oranges</p><p>Harold: Ok, got it.</p><p>Base: We should be able to get there in about five Earth days.<p>Harold: I'm going to go to sleep, or go to find some wood.</p>";
			//change btn1
			document.getElementById("btn1").innerHTML ="Sleep";
			document.getElementById("btn1").setAttribute("onclick", "updateScene('s6')");
			//change btn2
			document.getElementById("btn2").innerHTML ="Find wood";
			document.getElementById("btn2").setAttribute("onclick", "updateScene('s5')");
			 //function to reset the story
			document.getElementById("Reset").innerHTML=" Reset";
			document.getElementById("Reset").setAttribute("onclick","updateScene('start')");
			 	
			
			break;
		case"s5":
			document.getElementById("storyline").innerHTML ="<p>Harold: I've got some wood and I'm going to prepare it for the night. At night, the weather goes down to about -4 degrees Fahrenheit.</p><p>Base: That planet has a lot of Isotope Base 189 which is an extremely good insulator.</p><p>Harold: Got it</p><p>Base: Now you should go to sleep or you could stay awake and look out for more stuff during the night.</p>"; 
			//change btn1
			document.getElementById("btn1").innerHTML ="Stay Awake";
			document.getElementById("btn1").setAttribute("onclick", "updateScene('s7')");
			//change btn2
			document.getElementById("btn2").innerHTML ="Sleep";
			document.getElementById("btn2").setAttribute("onclick", "updateScene('s6')");
		 //function to reset the story
			document.getElementById("Reset").innerHTML=" Reset";
			document.getElementById("Reset").setAttribute("onclick","updateScene('start')");
			 	
			 
			break;
		case"s6":
			document.getElementById("storyline").innerHTML ="<p>Harold: Ok now it is the morning currently unaware of the time.</p><p>Base: I guess we know that it is the morning and that you got to start doing something.</p><p>Harold: Alright, I guess so... I'm going to go hunt for some meat now that I know that I have a steady flow of fruits.</p><p>Base: All right, do you want to fish or hunt on land?</p>";
			//change btn1
			document.getElementById("btn1").innerHTML ="Fish";
			document.getElementById("btn1").setAttribute("onclick", "updateScene('s8')");
			//change btn2
			document.getElementById("btn2").innerHTML ="Hunt";
			document.getElementById("btn2").setAttribute("onclick", "updateScene('s9')");
			 //function to reset the story
			document.getElementById("Reset").innerHTML=" Reset";
			document.getElementById("Reset").setAttribute("onclick","updateScene('start')");
			 	
			 
			break;
		case"s7":
			document.getElementById("storyline").innerHTML="<p>Harold: Good thing I started up a fire so that I wouldnt't be cold...</p><p>Base: Alright, now if you are awake, you should at least go hunting with darkness at your advantage</p><p>Harold: Alright, should I go fish or hunt on land?</p>";
			//change btn1
			document.getElementById("btn1").innerHTML ="Fish ";
			document.getElementById("btn1").setAttribute("onclick", "updateScene('s8')");			
			//change btn2
			document.getElementById("btn2").innerHTML ="Hunt";
			document.getElementById("btn2").setAttribute("onclick", "updateScene('s9')");
			//function to reset the story
			document.getElementById("Reset").innerHTML=" Reset";
			document.getElementById("Reset").setAttribute("onclick","updateScene('start')");
			 	
			 break;
		case "s8":
		    document.getElementById("storyline").innerHTML="<p>Harold: Alright Im going to go fishing</p><p>Harold: Casting out the pole and hoping that I catch something at all</p><p>Base: I'm picking up on something that is pulling on your pole!</p><p>Harold: My gosh! Already! ok Im reeling it in now. It seems like its some kind of a big one.... wait now it looks like a mountian and whooooooooooa... pzzzzzzz</p><p>Base: Come in Harold! are you there? I repeat ARE YOU THERE?</p><p>Does he return?</p>"; 
			document.getElementById("btn1").innerHTML ="He dead bro";
			document.getElementById("btn1").setAttribute("onclick", "updateScene('s11')");
			//change btn2
			document.getElementById("btn2").innerHTML ="Continue?";
			document.getElementById("btn2").setAttribute("onclick", "updateScene('s10')");
			//function to reset the story
			document.getElementById("Reset").innerHTML=" Reset";
			document.getElementById("Reset").setAttribute("onclick","updateScene('start')");
			 	
			 break;
		case"s9":
		      document.getElementById("storyline").innerHTML="<p>Harold: Ok, I made a decent spear out of the poles and sharp ends I found in the lefovers of the ship and are heading for what looks like the woods...</p><p>Base: Alright, you are now in an uncharted area that has unknown dangers</p><p>Harold: Alright, I'll take the risk cause I need food. Going into the woods. Oh! I found a small chicken looking thing.... running away from me and I'm chasing it... HOLY SMOKES THERE IS A HUGE BEAST WITH GLOWING EYES</p><p>Continue?</p>";
			document.getElementById("btn1").innerHTML ="He dead bro";
			document.getElementById("btn1").setAttribute("onclick", "updateScene('s11')");
			//change btn2
			document.getElementById("btn2").innerHTML ="Continue?";
			document.getElementById("btn2").setAttribute("onclick", "updateScene('s12')");
			//function to reset the story
			document.getElementById("Reset").innerHTML=" Reset";
			document.getElementById("Reset").setAttribute("onclick","updateScene('start')");
			 	
			break;
	   case"s10":
	          document.getElementById("storyline").innerHTML="<p>Base: I repeat, are you there? Repeat! ANSWER ME HAROLD!</p><p>zzzzzzz.... yea I'm back... seems like this lake took me to an underwater world.</p><p>Base: What are the statistics? What is the population and what species?<p>Harold: This is a place with about a 1000 in population number... with what seems like dogs that have astronaut helmets.</p><p>Base: Alright, try to get out of there as soon as you can cause we dont know if they are hostile.</p><p>Harold: I don't think I have a choice... I'm what it seems deep enough to not even see the surface.</p><p>Base: This is a huge mess, we first have to get you back and now you gotta get out of there.</p>" ;
			document.getElementById("btn1").innerHTML ="Start exploring";
			document.getElementById("btn1").setAttribute("onclick", "updateScene('s14')");
			//change btn2
			document.getElementById("btn2").innerHTML ="Immediatly trys to escape";
			document.getElementById("btn2").setAttribute("onclick", "updateScene('s13')");	
			//function to reset the story
			document.getElementById("Reset").innerHTML=" Reset";
			document.getElementById("Reset").setAttribute("onclick","updateScene('start')");
			 	
			break;
	case"s11" :
	        document.getElementById("storyline").innerHTML="<p>U dead bro...Thanks for playing!</p>";
			document.getElementById("btn1").innerHTML ="Play Again?";
			document.getElementById("btn1").setAttribute("onclick", "updateScene('start')");	
			//change btn2
			document.getElementById("btn2").innerHTML ="Play Again?";
			document.getElementById("btn2").setAttribute("onclick", "updateScene('start')");
			 //function to reset the story
			document.getElementById("Reset").innerHTML=" Reset";
			document.getElementById("Reset").setAttribute("onclick","updateScene('start')");
			 	
		    break;
   case"s12":
         document.getElementById("storyline").innerHTML="<p>Base: GET YOUR BUTT OUT OF THERE!</p><p>Harold: I AM GETTING MY BUTT out of the forest but it seems like the bear isn't slowing down at any rate!</p><p>Base:Alright, do you know the species of this animal?</p><p>Harold: From what I see, it is a species of Smoke Eyes known for their bright eyes in the night and a huge appetite for humans.</p><p>";
		    document.getElementById("btn1").innerHTML ="Play dead";
			document.getElementById("btn1").setAttribute("onclick", "updateScene('s11')");
    		//change btn2
			document.getElementById("btn2").innerHTML = "Run";
			document.getElementById("btn2").setAttribute("onclick", "updateScene('s17')");
		 //function to reset the story
			document.getElementById("Reset").innerHTML=" Reset";
			document.getElementById("Reset").setAttribute("onclick","updateScene('start')");
			 	
		 
		    break;
	case"s13":
	     document.getElementById("storyline").innerHTML="<p>Base: That's a bad idea though if you want to try.... can't stop you</p><p>Harold: I got to do this or I will stayi n this place forever...</p><p>Base: Alright, it seems like you should be getting to the back of this city in order to exit the bubble that is protecting this dogpolis.</p><p>Harold: Alright, where am I getting my suit?</p><p> Base: You should be able to get a suit by sabotaging it from one of the dogs.</p><p>Harold: Alright, I'm heading over to a schnauzer....</p>";
		    document.getElementById("btn1").innerHTML ="Sabotage";
			document.getElementById("btn1").setAttribute("onclick", "updateScene('s15')");
			//change btn2
			document.getElementById("btn2").innerHTML ="Change of mind";
			document.getElementById("btn2").setAttribute("onclick", "updateScene('s16')");
			  //function to reset the story
			document.getElementById("Reset").innerHTML=" Reset";
			document.getElementById("Reset").setAttribute("onclick","updateScene('start')");
			 break;
	case"s14":
	     document.getElementById("storyline").innerHTML="<p>Harold: It seems like it's some kind of high-tech city with extremely smart telepathic dogs...</p><p>Base: This is an uncharted species! This is something we have never seen before... animals with superior smarts than human kind</p><p>Harold: I'm going into thier convienience store</p><p>Base: What do you see?</p><p>Harold: I see beef-jerky, a bone-a-licious juice, and I see some stuff called underwater lighter</p><p>Base: Alright, use your galaxtational credit card and buy yourself some food and bone-a-licious juice.</p><p>Harold: Alright.... wait why are all the dogs surrounding me... wait why are the po-po poodles coming along...</p>";
		    document.getElementById("btn1").innerHTML = "Foreign intruder";
			document.getElementById("btn1").setAttribute("onclick", "updateScene('s15')");
			//change btn2
			document.getElementById("btn2").innerHTML ="Celebrates arrival";
			document.getElementById("btn2").setAttribute("onclick", "updateScene('s16')");
			 //function to reset the story
			document.getElementById("Reset").innerHTML=" Reset";
			document.getElementById("Reset").setAttribute("onclick","updateScene('start')");
			 	break;
	case"s15":
			   document.getElementById("storyline").innerHTML="<p>Harold: Alright, I'm hitting and running away from the dogs because they became extremely hostile towards me... quite frankly want to execute me</p><p>Harold: I'm putting on my suit, on my way to the end of the bubble</p><p>Harold: Oh jeez I'm sprinting to a huge gaping hole and here goes nothing.... AHHHHHHHHH...ZZZZZZZZZZZ</p>";
			document.getElementById("btn1").innerHTML = "Start swimming";
			document.getElementById("btn1").setAttribute("onclick", "updateScene('s18')");	
			//change btn2
			document.getElementById("btn2").innerHTML = "Get's caught";
			document.getElementById("btn2").setAttribute("onclick", "updateScene('s11')");
			 //function to reset the story
			document.getElementById("Reset").innerHTML=" Reset";
			document.getElementById("Reset").setAttribute("onclick","updateScene('start')");
			 	
			break;
	case"s16":
	        document.getElementById("storyline").innerHTML="<p>Harold: Gabe the dog god is welcoming me.</p><p>Base: Alright, say that you are from the Falcon and that you come in peace.</p><p>Harold: They say that they are from an alternate universe and that they are the smartest species in this counter part universe that they arrived in.</p><p>Harold: They say that they will provide us hospitality if we do not agree to attack them.</p><p>Base: Ok, do you want to stay there or do you want to still try and get out?";
			document.getElementById("btn1").innerHTML = "Stay forever";
			document.getElementById("btn1").setAttribute("onclick", "updateScene('s11')");
			//change btn2
			document.getElementById("btn2").innerHTML = "Still get out";
			document.getElementById("btn2").setAttribute("onclick", "updateScene('s15')");
		 //function to reset the story
			document.getElementById("Reset").innerHTML=" Reset";
			document.getElementById("Reset").setAttribute("onclick","updateScene('start')");
			 	
			 
			break;
	case"s17":
	        document.getElementById("storyline").innerHTML="Harold: Shoot, the creature isn't slowing down, what should I do?</p><p>Base: Try to find a tree to climb, or water to swim in.</p><p> Harold: I see both, which one should I go to?</p>";
			document.getElementById("btn1").innerHTML = "Dive in water";
			document.getElementById("btn1").setAttribute("onclick", "updateScene('s10')");
			//change btn2
			document.getElementById("btn2").innerHTML = "Climb up tree";
			document.getElementById("btn2").setAttribute("onclick", "updateScene('s22')");
		 //function to reset the story
			document.getElementById("Reset").innerHTML=" Reset";
			document.getElementById("Reset").setAttribute("onclick","updateScene('start')");
			 	
			break;
	case"s18": 
	       document.getElementById("storyline").innerHTML="<p>Harold: The dogs are following me to the surface even though I am swimming as fast as I can!</p><p>Base: We are arriving and we have your pinpoint position.</p><p>Harold: About time that you are coming because I am about to die.</p><p>Base: Problem is though that we can't get too close to the ground because the planet has too much of a montainous landscape.</p>";
		    document.getElementById("btn1").innerHTML = "Meet at surface of water";
		    document.getElementById("btn1").setAttribute("onclick", "updateScene('s21')");
			//change btn2
			document.getElementById("btn2").innerHTML = "Go on a hill";
			document.getElementById("btn2").setAttribute("onclick", "updateScene('s21')");
		  //function to reset the story
			document.getElementById("Reset").innerHTML=" Reset";
			document.getElementById("Reset").setAttribute("onclick","updateScene('start')");
			 	
		    break;
   case"s21":
	       document.getElementById("storyline").innerHTML="<p>Harold: THE DOGS ARE STILL FOLLOWING ME!!! Where are you going to meet me?</p><p>Base: We will meet you near the second hill facing the third sun.</p><p>Harold: They're still gaining on me, you guys may need to meet me on the way to the hill.</p><p>Base: It's a risk, but a risk we're willing to take.</p><p>Harold: I don't know if I can make it.</p><p>Base: We see you, just run a little bit faster.</p><p>Harold: DROP THE LADDER NOW!!!</p><p>Base: Yes sir.</p><p>Harold: The dogs are about six feet away. I'm climbing the ladder now! PULL ME UP!!!</p>";
		    document.getElementById("btn1").innerHTML = "Dogs catch him";
		    document.getElementById("btn1").setAttribute("onclick", "updateScene('s11')");
			//change btn2
			document.getElementById("btn2").innerHTML = "Mission Completed ";
			document.getElementById("btn2").setAttribute("onclick", "updateScene('s23')");
			  //function to reset the story
			document.getElementById("Reset").innerHTML=" Reset";
			document.getElementById("Reset").setAttribute("onclick","updateScene('start')");
			 	
		    break;
	case"s22":
	      document.getElementById("storyline").innerHTML="<p>Harold: Alright, I climbed up a tree and the creature seems like it can't reach me from up here...</p><p>Base: Actually, we are coming near your planet, just give us a few minutes and we will be there to take you home sir.</p><p>Harold: THE CREATURE IS DESTROYING THE TREE, HURRY UP!!!</p><p>Base: I'm going as fast as I can.</p>";
		    document.getElementById("btn1").innerHTML = "Get's brutally eaten";
		    document.getElementById("btn1").setAttribute("onclick", "updateScene('s11')");
			//change btn2
			document.getElementById("btn2").innerHTML = "Base comes";
			document.getElementById("btn2").setAttribute("onclick", "updateScene('s24')");
			   //function to reset the story
			document.getElementById("Reset").innerHTML=" Reset";
			document.getElementById("Reset").setAttribute("onclick","updateScene('start')");
			 	
			 	
		    break;
	case"s23":
	      document.getElementById("storyline").innerHTML ="<p>Creators: Congratulations, you have landed back on Earth in the year 2753 alive. You have shown your bravery in the wilderness, your survival skills, and enduring the unknown for two days.</p><p>Thank you for playing Space Adventure!</p>";
		    document.getElementById("btn1").innerHTML ="Play Again?";
			document.getElementById("btn1").setAttribute("onclick", "updateScene('start')");	
			//change btn2
			document.getElementById("btn2").innerHTML ="Play Again?";
			document.getElementById("btn2").setAttribute("onclick", "updateScene('start')");
			  //function to reset the story
			document.getElementById("Reset").innerHTML="reset";
			document.getElementById("Reset").setAttribute("onclick","updateScene('start')");
			 	
		    break;
			 
	case"s24":
	      document.getElementById("storyline").innerHTML="<p>Base: Alright, we are sweeping in. Grab the ladder that we sent down.</p><p>Harold: Oh geez, the creature ripped the tree and I'm jumping... I GOT IT!</p><p>Base: Alright, I'm taking you home now.</p>";
		  document.getElementById("btn1").innerHTML = "Mission Completed";
		  document.getElementById("btn1").setAttribute("onclick", "updateScene('s23')");
		  //change btn2
		  document.getElementById("btn2").innerHTML = "Let's go of ladder for some random reason";
		  document.getElementById("btn2").setAttribute("onclick", "updateScene('s11')");
		    //function to reset the story
			document.getElementById("Reset").innerHTML=" Reset";
			document.getElementById("Reset").setAttribute("onclick","updateScene('start')");
			 	
		  break; 
	}
	save_cookies("scene", s);
}
 
 // save cookie scene
 function save_cookies(key, value) {
	 var exdays = 300;
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = key + "=" + value + ";" + expires;
 }
 
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}