// JavaScript Document

window.onload = function() {
	// load the cookies
	
	// print the first scene
	updateScene("start");
};

function new_message(msg){
	document.getElementById("storyline").innerHTML += "<p>" + msg + "</p>";
}

function updateScene(s) {
  switch(s) {
    case"start":
		new_message("The year is 2753.");
		setTimeout(function(){
			new_message("Harold: Is anyone out there? Hello?...");
			setTimeout(function(){
				new_message("Base: Who is this?");
				setTimeout(function(){
					new_message("Harold: My name is Captain Harold.");
					setTimeout(function(){
						new_message("Base: Captain Harold! We thought you died when the Falcon exploded!");
						setTimeout(function(){
							new_message("Harold: I was the only survivor. I am on an unknown planet with limited resources and my ship is in ruins.");
							setTimeout(function(){
								new_message("Base: Ok, we will try to get to you. Do you still have your locator we gave you?");
							}, 1000);
						}, 1000);
					}, 1000);
				}, 1000);
			}, 1000);
		}, 1000);
			// change btn1
			document.getElementById("btn1").innerHTML ="Yes";
			document.getElementById("btn1").setAttribute("onclick", "updateScene('s1')");
			// change btn2
			document.getElementById("btn2").innerHTML ="No";
			document.getElementById("btn2").setAttribute("onclick", "updateScene('s3')");
			break;
	case"s1":
		new_message("Base: Ok, try to keep it on.");
		setTimeout(function(){
			new_message("Harold: Got it.");
			setTimeout(function(){
				new_message("Base: Wow, it appears you are on the planet...");
			}, 1000);
		}, 1000);
			//change btn1
			document.getElementById("btn1").innerHTML ="Ermina 3";
			document.getElementById("btn1").setAttribute("onclick", "updateScene('s2')");
			//change btn2
			document.getElementById("btn2").innerHTML ="Sirona";
			document.getElementById("btn2").setAttribute("onclick", "updateScene('s5')");			
			break;
	case"s2":
		new_message("Harold: How many light years is that from Earth?");
		setTimeout(function(){
			new_message("Base: About seven light years away. This means it will take us apporximately a week to get to your location.");
			setTimeout(function(){
				new_message("Harold: Ok, I think I had enough supplies to survive, but I do need some Isotope Base 23 because my supply of it is running out.");
				setTimeout(function(){
					new_message("Base: What would happen if you didn't have it?");
					setTimeout(function(){
						new_message("Harold: Isotope Base 23 is the thing that keeps me alive.");
						setTimeout(function(){
							new_message("Base: On your planet, it is referred to as food.");
							setTimeout(function(){
								new_message("Harold: Should I go find some more food or should I start making a shelter?");
							}, 1000);
						}, 1000);
					}, 1000);
				}, 1000);
			}, 1000);
		}, 1000);
			//change btn1
			document.getElementById("btn1").innerHTML ="Food";
			document.getElementById("btn1").setAttribute("onclick", "updateScene('s4')");
			//change btn2
			document.getElementById("btn2").innerHTML ="Shelter";
			document.getElementById("btn2").setAttribute("onclick", "updateScene('s5')");
			break;
	case"s3":
		new_message("Base: How many moons are there on that planet? How long is each day?");
		setTimeout(function(){
			new_message("Harold: There are about seven moons and it takes about 37 hours to get through one day. The planet has no living beings except for some scattered plants.");
			setTimeout(function(){
				new_message("Base: How's your food supply?");
				setTimeout(function(){
					new_message("Harold: I am surviving only only on a few berries and mangoes right now, but I am starting to lose my supply of it.");
					setTimeout(function(){
						new_message("Harold: I'll get more food or I'll go creater a shelter.");
					}, 1000);
				}, 1000);
			}, 1000);
		}, 1000);
			//change btn1
			document.getElementById("btn1").innerHTML ="Food";
			document.getElementById("btn1").setAttribute("onclick", "updateScene('s4')");
			//change btn2
			document.getElementById("btn2").innerHTML ="Shelter";
			document.getElementById("btn2").setAttribute("onclick", "updateScene('s5')");
			break;
	case"s4":
		new_message("Base: Apparently, that planet has an abundace of nagoes, burp causing berries, and fart causing oranges.");
		setTimeout(function(){
			new_message("Harold: Ok.");
			setTimeout(function(){
				new_message("Base: We should be able to get there in about five Earth days.");
				setTimeout(function(){
					new_message("Harold: Got it, I'm going to go to sleep, or go to find some wood.");
				}, 1000);
			}, 1000);
		}, 1000);
			//change btn1
			document.getElementById("btn1").innerHTML ="Sleep";
			document.getElementById("btn1").setAttribute("onclick", "updateScene('s6')");
			//change btn2
			document.getElementById("btn2").innerHTML ="Find wood";
			document.getElementById("btn2").setAttribute("onclick", "updateScene('s5')");
			break;
	case"s5":
		new_message("Harold: I've got some wood and I'm going to prepare it for the night. At night, the weather goes down to about -4 degrees Fahrenheit.");
		setTimeout(function(){
			new_message("Base: That planet has a lot of Isotope Base 189 which is an extremely good insulator.");
			setTimeout(function(){
				new_message("Harold: Got it");
				setTimeout(function(){
					new_message("Base: Now you should rest or you could stay awake and look for some more stuff during the night.");
				}, 1000);
			}, 1000);
		}, 1000);
			//change btn1
			document.getElementById("btn1").innerHTML ="Rest";
			document.getElementById("btn1").setAttribute("onclick", "updateScene('s7')");
			//change btn2
			document.getElementById("btn2").innerHTML ="Sleep";
			document.getElementById("btn2").setAttribute("onclick", "updateScene('s6')");
			break;
	case"s6":
		new_message("Harold: Ok now it is the morning currently unaware of the time.");
		setTimeout(function(){
			new_message("Base: I guess we know that it is the morning and that you got to start doing something.");
			setTimeout(function(){
				new_message("Harold: Alright, I guess so... I'm going to go hunt for some meat now that I know that I have a steady flow of fruits.");
				setTimeout(function(){
					new_message("Base: All right, you can also fish, what do you want to do?");
				}, 1000);
			}, 1000);
		}, 1000);
			//change btn1
			document.getElementById("btn1").innerHTML ="Fish";
			document.getElementById("btn1").setAttribute("onclick", "updateScene('s8')");
			//change btn2
			document.getElementById("btn2").innerHTML ="Hunt";
			document.getElementById("btn2").setAttribute("onclick", "updateScene('s9')");
			break;
	case"s7":
		new_message("Harold: Good thing I started up a fire so that I wouldnt't be cold...");
		setTimeout(function(){
			new_message("Base: Alright, now if you are awake, you should at least go hunting with darkness at your advantage.");
			setTimeout(function(){
				new_message("Harold: Alright, should I go fish or hunt on land?");
			}, 1000);
		}, 1000);
			//change btn1
			document.getElementById("btn1").innerHTML ="Fish ";
			document.getElementById("btn1").setAttribute("onclick", "updateScene('s8')");			
			//change btn2
			document.getElementById("btn2").innerHTML ="Hunt";
			document.getElementById("btn2").setAttribute("onclick", "updateScene('s9')");
			break;
	case"s8":
		new_message("Harold: Alright, I'm going to go fishing.");
		setTimeout(function(){
			new_message("Harold: I'm casting out the pole and hoping that I can catch something.");
			setTimeout(function(){
				new_message("Base: I'm picking up on something that is pulling on your pole!");
				setTimeout(function(){
					new_message("Harold: My gosh! Already! Ok, I'm reeling it in now. It seems like its some kind of a big one.... wait now it looks like a mountian and whooooooooooa... pzzzzzzz");
					setTimeout(function(){
						new_message("Base: Come in Harold! Are you there? I repeat, ARE YOU THERE?");
					}, 1000);
				}, 1000);
			}, 1000);
		}, 1000);
			//change btn1
			document.getElementById("btn1").innerHTML ="No reply";
			document.getElementById("btn1").setAttribute("onclick", "updateScene('s11')");
			//change btn2
			document.getElementById("btn2").innerHTML ="zzzzzzz....";
			document.getElementById("btn2").setAttribute("onclick", "updateScene('s10')");
			break;
	case"s9":
		new_message("Harold: Ok, I made a decent spear out of the poles and sharp ends I found in the lefovers of the ship and are heading for what looks like the woods...");
		setTimeout(function(){
			new_message("Base: Alright, you are now in an uncharted area that has unknown dangers.");
			setTimeout(function(){
				new_message("Harold: Alright, I'll take the risk cause I need food. Going into the woods. Oh! I found a small chicken looking thing running away from me.");
				setTimeout(function(){
					new_message("Harold: I'm going to chase it... HOLY SMOKES THERE IS A HUGE BEAST WITH GLOWING EYES RUNNING AT ME!");
				}, 1000);
			}, 1000);
		}, 1000);
			//change btn1
			document.getElementById("btn1").innerHTML ="He dead bro";
			document.getElementById("btn1").setAttribute("onclick", "updateScene('s11')");
			//change btn2
			document.getElementById("btn2").innerHTML ="Continue?";
			document.getElementById("btn2").setAttribute("onclick", "updateScene('s12')");
			break;
	case"s10":
		new_message("Harold: zzzzzzz.... yea I'm back... seems like this lake took me to an underwater world.");
		setTimeout(function(){
			new_message("Base: What are the statistics? What is the population and what species?");
			setTimeout(function(){
				new_message("Harold: This is a place with about a 1000 in population number... with what seems like dogs that have astronaut helmets.");
				setTimeout(function(){
					new_message("Base: Alright, try to get out of there as soon as you can cause we don't know if they are hostile.");
					setTimeout(function(){
						new_message("Harold: I don't think I have a choice... I'm what it seems deep enough to not even see the surface.");
						setTimeout(function(){
							new_message("Base: This is a huge mess, we first have to get you back and now you gotta get out of there.");
						}, 1000);
					}, 1000);
				}, 1000);
			}, 1000);
		}, 1000);
			//change btn1
			document.getElementById("btn1").innerHTML ="Start exploring";
			document.getElementById("btn1").setAttribute("onclick", "updateScene('s14')");
			//change btn2
			document.getElementById("btn2").innerHTML ="Immediatly try to escape";
			document.getElementById("btn2").setAttribute("onclick", "updateScene('s13')");			  
			break;
	case"s11":
		new_message("U dead bro...Thanks for playing!");
			//change btn1
			document.getElementById("btn1").innerHTML ="Play Again?";
			document.getElementById("btn1").setAttribute("onclick", "updateScene('start')");	
			//change btn2
			document.getElementById("btn2").innerHTML ="Play Again?";
			document.getElementById("btn2").setAttribute("onclick", "updateScene('start')");	
		    break;
   case"s12":
  		new_message("Base: GET YOUR BUTT OUT OF THERE!");
		setTimeout(function(){
			new_message("Harold: I AM GETTING MY BUTT OUT OF THE FOREST BUT IT SEEMS LIKE THE BEAR ISN'T SLOWING DOWN AT ANY RATE!");
			setTimeout(function(){
				new_message("Base: Alright, do you know the species of this animal?");
				setTimeout(function(){
					new_message("Harold: From what I see, it is a species of Smoke Eyes known for their bright eyes in the night and a huge appetite for humans.");
				}, 1000);
			}, 1000);
		}, 1000);
		    //change btn1
		    document.getElementById("btn1").innerHTML ="Play dead";
			document.getElementById("btn1").setAttribute("onclick", "updateScene('s11')");
    		//change btn2
			document.getElementById("btn2").innerHTML ="Run";
			document.getElementById("btn2").setAttribute("onclick", "updateScene('s17')");
		    break;
	case"s13":
		new_message("Base: That's a bad idea though if you want to try it.... I can't stop you.");
		setTimeout(function(){
			new_message("Harold: I got to do this or I will stay in this place forever...");
			setTimeout(function(){
				new_message("Base: Alright, it seems like you should be getting to the back of this city in order to exit the bubble that is protecting this dogpolis.");
				setTimeout(function(){
					new_message("Harold: Alright, where am I getting my suit?");
					setTimeout(function(){
						new_message("Base: You should be able to get a suit by sabotaging it from one of the dogs.");
						setTimeout(function(){
							new_message("Harold: Alright, I'm heading over to a schnauzer....");
						}, 1000);
					}, 1000);
				}, 1000);
			}, 1000);
		}, 1000);
		    //change btn1
		    document.getElementById("btn1").innerHTML ="Sabotage";
			document.getElementById("btn1").setAttribute("onclick", "updateScene('s15')");
			//change btn2
			document.getElementById("btn2").innerHTML ="Change of mind";
			document.getElementById("btn2").setAttribute("onclick", "updateScene('s16')");
			break;
	case"s14":
		new_message("Harold: It seems like it's some kind of high-tech city with extremely smart telepathic dogs...");
		setTimeout(function(){
			new_message("Base: This is an uncharted species! This is something we have never seen before... These are animals that are smarter than the human kind.");
			setTimeout(function(){
				new_message("Harold: I'm going into their convienience store.");
				setTimeout(function(){
					new_message("Base: What do you see?");
					setTimeout(function(){
						new_message("Harold: I see beef-jerky, a bone-a-licious juice, and I see some stuff called underwater lighter.");
						setTimeout(function(){
							new_message("Base: Alright, use your galaxtational credit card and buy yourself some food and bone-a-licious juice.");
							setTimeout(function(){
								new_message("Harold: Alright.... wait why are all the dogs surrounding me?");
							}, 1000);
						}, 1000);
					}, 1000);
				}, 1000);
			}, 1000);
		}, 1000);
		    //change btn1
		    document.getElementById("btn1").innerHTML ="Foreign intruder";
			document.getElementById("btn1").setAttribute("onclick", "updateScene('s15')");
			//change btn2
			document.getElementById("btn2").innerHTML ="Celebrates arrival";
			document.getElementById("btn2").setAttribute("onclick", "updateScene('s16')");
			break;
	case"s15":
		new_message("Harold: Alright, I'm hitting and running away from the dogs because they became extremely hostile towards me... and quite frankly want to execute me.");
		setTimeout(function(){
			new_message("Harold: I'm putting on my suit, on my way to the end of the bubble.");
			setTimeout(function(){
				new_message("Harold: Oh jeez, I'm sprinting to a huge gaping hole and here goes nothing.... AHHHHHHHHH.... ZZZZZZZZZZZ.");
			}, 1000);
		}, 1000);
			//change btn1
			document.getElementById("btn1").innerHTML ="Start swimming";
			document.getElementById("btn1").setAttribute("onclick", "updateScene('s18')");	
			//change btn2
			document.getElementById("btn2").innerHTML ="Get's caught";
			document.getElementById("btn2").setAttribute("onclick", "updateScene('s11')");
			break;
	case"s16":
	        document.getElementById("storyline").innerHTML="<p>Harold: Gabe the dog god is welcoming me.</p><p>Base: Alright, say that you are from the Falcon and that you come in peace.</p><p>Harold: They say that they are from an alternate universe and that they are the smartest species in this counter part universe that they arrived in.</p><p>Harold: They say that they will provide us hospitality if we do not agree to attack them.</p><p>Base: Ok, do you want to stay there or do you want to still try and get out?";
			//change btn1
			document.getElementById("btn1").innerHTML ="Stay forever";
			document.getElementById("btn1").setAttribute("onclick", "updateScene('s11')");
			//change btn2
			document.getElementById("btn2").innerHTML ="Still get out";
			document.getElementById("btn2").setAttribute("onclick", "updateScene('s15')");
			break;
	case"s17":
	        document.getElementById("storyline").innerHTML="Harold: Shoot, the creature isn't slowing down, what should I do?</p><p>Base: Try to find a tree to climb, or water to swim in.</p><p> Harold: I see both, which one should I go to?</p>";
			//change btn1
			document.getElementById("btn1").innerHTML ="Dive in water";
			document.getElementById("btn1").setAttribute("onclick", "updateScene('s10')");
			//change btn2
			document.getElementById("btn2").innerHTML ="Climb up tree";
			document.getElementById("btn2").setAttribute("onclick", "updateScene('s22')");
			break;
	case"s18": 
	        document.getElementById("storyline").innerHTML="<p>Harold: The dogs are following me to the surface even though I am swimming as fast as I can!</p><p>Base: We are arriving and we have your pinpoint position.</p><p>Harold: About time that you are coming because I am about to die.</p><p>Base: Problem is though that we can't get too close to the ground because the planet has too much of a montainous landscape.</p>";
		    //change btn1
		    document.getElementById("btn1").innerHTML ="Meet at surface of water";
		    document.getElementById("btn1").setAttribute("onclick", "updateScene('s21')");
			//change btn2
			document.getElementById("btn2").innerHTML ="Go on a hill";
			document.getElementById("btn2").setAttribute("onclick", "updateScene('s21')");
		    break;
   case"s21":
	       document.getElementById("storyline").innerHTML="<p>Harold: THE DOGS ARE STILL FOLLOWING ME!!! Where are you going to meet me?</p><p>Base: We will meet you near the second hill facing the third sun.</p><p>Harold: They're still gaining on me, you guys may need to meet me on the way to the hill.</p><p>Base: It's a risk, but a risk we're willing to take.</p><p>Harold: I don't know if I can make it.</p><p>Base: We see you, just run a little bit faster.</p><p>Harold: DROP THE LADDER NOW!!!</p><p>Base: Yes sir.</p><p>Harold: The dogs are about six feet away. I'm climbing the ladder now! PULL ME UP!!!</p>";
		   //change btn1
		    document.getElementById("btn1").innerHTML ="Dogs catch him";
		    document.getElementById("btn1").setAttribute("onclick", "updateScene('s11')");
			//change btn2
			document.getElementById("btn2").innerHTML ="Mission Completed ";
			document.getElementById("btn2").setAttribute("onclick", "updateScene('s23')");
		    break;
	case"s22":
	        document.getElementById("storyline").innerHTML="<p>Harold: Alright, I climbed up a tree and the creature seems like it can't reach me from up here...</p><p>Base: Actually, we are coming near your planet, just give us a few minutes and we will be there to take you home sir.</p><p>Harold: THE CREATURE IS DESTROYING THE TREE, HURRY UP!!!</p><p>Base: I'm going as fast as I can.</p>";
			//change btn1
		    document.getElementById("btn1").innerHTML ="Get's brutally eaten";
		    document.getElementById("btn1").setAttribute("onclick", "updateScene('s11')");
			//change btn2
			document.getElementById("btn2").innerHTML ="Base comes";
			document.getElementById("btn2").setAttribute("onclick", "updateScene('s24')");
		    break;
	case"s23":
	        document.getElementById("storyline").innerHTML ="<p>Creators: Congratulations, you have landed back on Earth in the year 2753 alive. You have shown your bravery in the wilderness, your survival skills, and enduring the unknown for two days.</p><p>Thank you for playing Space Adventure!</p>";
			//change btn1
		    document.getElementById("btn1").innerHTML ="Play Again?";
			document.getElementById("btn1").setAttribute("onclick", "updateScene('start')");	
			//change btn2
			document.getElementById("btn2").innerHTML ="Play Again?";
			document.getElementById("btn2").setAttribute("onclick", "updateScene('start')");	
		    break;
	case"s24":
	        document.getElementById("storyline").innerHTML="<p>Base: Alright, we are sweeping in. Grab the ladder that we sent down.</p><p>Harold: Oh geez, the creature ripped the tree and I'm jumping... I GOT IT!</p><p>Base: Alright, I'm taking you home now.</p>";
		    //change btn1
		    document.getElementById("btn1").innerHTML ="Mission Completed";
		    document.getElementById("btn1").setAttribute("onclick", "updateScene('s23')");
		    //change btn2
		    document.getElementById("btn2").innerHTML ="Let go of ladder for some random reason";
		    document.getElementById("btn2").setAttribute("onclick", "updateScene('s11')");
		    break; 
	}
 }