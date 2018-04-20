let slider = document.getElementById("time-slider");
     	let sliderOutput = document.getElementById("time");
     	sliderOutput.value = slider.value;

     	slider.oninput = function() {
		    sliderOutput.value = this.value;
		    (document.getElementsByClassName("amount"))[0].innerHTML = sliderOutput.value;
		} 

		  $("#generator-button").click(function(){
		        // Animation für das erscheinen des Loaders und danach der Klausur
		        $('#loader-box').fadeIn(400).delay( 1500 ).fadeOut( 400 );
		        $('.test-uti').delay(2300).fadeIn('fast');
		  })


// Creating Database
function Card(id, front, back, time, topic){
	this.id = id;
	this.front = front;
	this.back = back;
	this.time = time;
	this.topic = topic;
}

let cards = [
	new Card(
		0,
		"Unterscheiden Sie Chromosomen, Chromatiden und DNA-Doppelstrang.",
		"Ein Chromosom in der Interphase besteht aus einer Chromatide, die aus einem DNA-Doppelstrang mit den dazugehörigen Proteinen (Histonen) aufgebaut ist. In der Metaphase der Mitose wurde die DNA bereits repliziert, und so erscheint das klassische Bild mit zwei Chromatiden, die am Centromer zusammenhängen.",
		5,
		"eukaryotischeChromosome"),
	new Card(
		1,
		"Erläutern Sie die Funktion und Bedeutung der Telomerase.",
		"Die Telomerase ist eine Reverse Transkriptase, die am Telomer zunächst kurze RNA-Moleküle (Pentamere, Hexamere oder Heptamere) anfügt und daran den Gegenstrang synthetisiert. Die Telomerase verhindert somit, dass die Enden der Chromosomen bei jeder Zellteilung verkürzt werden; sie ist in Einzellern aktiv sowie in höheren Eukaryoten in den Zellen der Keimbahn, in (embryonalen und adulten) Stammzellen, in Zellen des Immunsystems und in Krebszellen.",
		10,
		"eukaryotischeChromosome"),
	new Card(
		2,
		"Worin besteht die Bedeutung der Meiose im Vergleich zur Mitose?",
		"Die Mitose verteilt die verdoppelten Chromosomen bei einer regulären Zellteilung die Zellen befinden sich danach wieder im diploiden Zustand. Bei der Differenzierung der Keimzellen erfolgt in den beiden meiotischen Teilungen eine Reduktion auf eine haploide Keimzelle, sodass erst bei der Befruchtung erneut eine diploide Zelle entsteht. Die erste meiotische Teilung dient der Trennung der Chromosomen und die zweite der Trennung der Chromatiden. In der ersten meiotischen Teilung erfolgt außerdem ein Austausch von DNA-Fragmenten (Rekombination) zwischen den homologen (ursprünglich väterlichen und mütterlichen) Chromatiden, sodass die entstehenden Keimzellen eine individuelle Allelkombination enthalten. Zusammen erhöhen beide Mechanismen (Meiose und Rekombination) die genetische Vielfalt erheblich.",
		7,
		"eukaryotischeChromosome"),
	new Card(
		3,
		"Was sind Riesenchromosomen?",
		"Riesenchromosomen (in den Speicheldrüsen vieler Insekten) bestehen aus einer großen Anzahl exakt gepaarter Chromatiden, die durch wiederholte Replikation der chromosomalen DNA ohne darauffolgende Zell- und Kernteilungen entstehen (Endoreplikation). Die Riesenchromosomen weisen eine hohe Transkriptionsaktivität auf; die Expression der Gene auf diesen Chromosomen wird durch den hohen Polytäniegrad deutlich erhöht. Die große Zahl der gepaarten Chromatiden ermöglicht außerdem die Beobachtung von strukturellen Unterschieden in den Chromosomen ohne weitere Färbetechniken.",
		10,
		"eukaryotischeChromosome"),
	new Card(
		4,
		"Warum wird das menschliche Y-Chromosom nicht aussterben?",
		"Das menschliche Y-Chromosom ist gegenüber dem X-Chromosom degeneriert und enthält im Wesentlichen nur noch Gene, die für die Ausprägung des männlichen Phänotyps und für die männliche Fertilität wichtig sind. Allerdings enthält das Y-Chromosom viele Palindrome und repetitive Elemente, die häufige intrachromosomale Rekombinationen ermöglichen. Dadurch erscheint das Y-Chromosom durchaus als ein dynamisches Chromosom.",
		8,
		"eukaryotischeChromosome"),
	new Card(
		5,
		"Was verstehen wir heute unter Epigenetik?",
		"Epigenetik bezeichnet stabile Veränderungen in der Regulation der Genexpression, die während der Entwicklung, Zelldifferenzierung und Zellproliferation entstehen und über Zellteilungen hinweg festgeschrieben und aufrechterhalten werden, ohne dass dabei die DNA-Sequenz verändert wird. Epigenetische Markierungen sind Methylierung der DNA sowie Methylierung, Acetylierung und Phosphorylierung der Histone. Außerdem zählen wir die Wirkung verschiedener nicht-codierender RNA-Moleküle dazu.",
		12,
		"epigenetik")
];

/// Shuffle function ////
"use strict";

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
//////////////////////////////////
let questions;
let answers;


function chooseTopics(topicsArray){
	// All cards get selected which contain a topic in the parameter array
	// The selected cards get radnomly shuffled
	// The function returns an array of cards
	selectedTopicsCards = [];
	for(let i=0; i < cards.length; i++){
		for(let j=0; j < topicsArray.length; j++){

			if(cards[i].topic == topicsArray[j]){
				selectedTopicsCards.push(cards[i]);
			}
		}
	}
	shuffle(selectedTopicsCards);

	return selectedTopicsCards;
}

// function chooseTopic(topic){
// 	// All cards get searched for a defined topic 
// 	// The selected cards get radnomly shuffled
// 	// The function returns an array of randomly selected cards
// 	let selectedCards = [];
// 	for(let i=0; i < cards.length; i++){
// 		if(cards[i].topic == topic){
// 			selectedCards.push(cards[i]);
// 		}
// 	}
// 	shuffle(selectedCards);
	
// 	return selectedCards;
// }

function chooseTime(cardDeck, time){
	// cardDeck == array, time in min == number
	// returns an array of cards, which sum doesn't exceed the time limit
	let timeSelectedCards = [];

	for(let i=0; i < cardDeck.length; i++){
		if(time > 0){
			time -= cardDeck[i].time;
			timeSelectedCards.push(cardDeck[i])
		}	
	}
	return timeSelectedCards;
}

function showTest(){

	// use createTest before
	// creates a list
	// list items are questions
	let testInhalt = "";
	for(let i=0; i < questions.length; i++){
		testInhalt += "<li>" + "<h5>" + questions[i] + "</h5>" + "</li>";
	}
	document.getElementById("test-fragen").innerHTML = testInhalt;
}

function createTest(){
	let topics = [];
	// Fills questions and anwers arrays with cards
	// cards are selected by topic and their sum of time (duration to answer a card) can't exceed the time parameter
	let eukaryotischeChromosomeCheckbox = document.querySelector('input[value="eukaryotische-chromosome"]');
  	let epigenetikCheckbox = document.querySelector('input[value="epigenetik"]');
  	let klassischeGenetikCheckbox = document.querySelector('input[value="klassischeGenetik"]');
  	let mutationenCheckbox = document.querySelector('input[value="mutationen"]');
  	let entwicklungsgenetikCheckbox = document.querySelector('input[value="entwicklungsgenetik"]');
  	let testInhalt = "";

  	if (eukaryotischeChromosomeCheckbox.checked) {
  		topics.push("eukaryotischeChromosome");
  	}
  	if (epigenetikCheckbox.checked) {
  		topics.push("epigenetik");
  	}
  	if (klassischeGenetikCheckbox.checked) {
  		topics.push("klassischeGenetik");
  	}
  	if (mutationenCheckbox.checked) {
  		topics.push("mutationen");
  	}
  	if (entwicklungsgenetikCheckbox.checked) {
  		topics.push("entwicklungsgenetik");
  	}



	let time = sliderOutput.value;
	time = parseInt(time);
	if(typeof topics[0] === "string" && typeof time === "number" ){
		questions = [];
		answers = [];

		testCards = chooseTime(chooseTopics(topics),time);
		for(let i=0; i < testCards.length; i++){
			questions.push(testCards[i].front);
			answers.push(testCards[i].back);
		}
		if(questions.length < 1) throw "Keine Karten";

		showTest();

	} else throw "Eingabe nicht korrekt";
}



	
	

	