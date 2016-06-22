// setup your IIFE (Immediately Invoked Function Expression)
(function () {
"use strict";
// define an array of HTML elements 
     var paragraphElements = []; 
      
     paragraphElements[0] = document.getElementById("IntroParagraph"); 
     paragraphElements[1] = document.getElementById("Folegandros"); 
     paragraphElements[2] = document.getElementById("Alonissos"); 
    paragraphElements[3] = document.getElementById("Spetses"); 
     paragraphElements[4] = document.getElementById("Amorgos");
     paragraphElements[5] = document.getElementById("Syros");
      paragraphElements[6] = document.getElementById("Milos");
      paragraphElements[7] = document.getElementById("Hydra");
      paragraphElements[8] = document.getElementById("Ithaca");
        paragraphElements[8] = document.getElementById("Gavdos");
     // define your paragraphs array; 
     var paragraphs = []; 
 
 
     // Create a reference to the send button; 
     var sendButton = document.getElementById("sendButton"); 
     sendButton.addEventListener("click",function(event) { 
         event.preventDefault 
     }); 
      
     // data for my pages 
     paragraphs[0] = "Now is the time to travel to Greece. The country may be going through an economic crisis, but many travellers say that it hasn't impacted the experience of visiting. Plus, there may be some great deals.<br> Greece has 1,400 islands, though only 230 of them are inhabited. 

                    And while everyone knows about Santorini and Mykonos, there are gorgeous lesser-known islands in Greece, too."; 
     paragraphs[1] = " ————————
Folegandros is almost a Greek cliché, full of beautiful whitewashed houses with bright blue doors lining cobblestoned streets on steep cliffs. Rugged and remote, without chain hotels or package tours — not even a bank or ATM — and accessible only by ferry, the volcanic island boasts solitude in spades, secluded beaches, and incredible sunsets. "; 
     paragraphs[2] = "————————
Off the mainland, this island, whose surrounding waters are a designated marine park full of seals and dolphins, is a nature lover's dream. The spectacular spot's crystal clear waters and beautiful beaches are perfect for diving, and its lush flora and dense forests ideal for hikes. Since the rich landscape is chock full of indigenous herbs, it's also known for its traditional medicine, and home of the International Academy of Homeopathy.
"; 
     paragraphs[3]="————————
        This bohemian paradise is more Côte d'Azur than Grecian island. Spetses was hot in the '60s, when it hosted Marilyn Monroe and Elizabeth Taylor, and remains a swanky summer retreat for Athens' glitterati to this day, full of fancy hotels, mansions and yachts, and stylish boutiques. Aside from a handful of locally-owned cabs, the four-mile-long island has banned cars in town, giving it a refreshingly 19th-century vibe, with horse-drawn carriages being a common sight." 
    // second way to define an array 
     //var paragraphs = new Array(); 
      
     // check to see if paragraph one exists 
     for (var index = 0; index < paragraphElements.length; index++) { 
         if(paragraphElements[index]) { 
          paragraphElements[index].textContent = paragraphs[index]; 
         } 
     } 
      





})();

