
$( function() {
	// Zeit Slider
    $( "#slider" ).slider({
        min: 10,
        max: 180,
              slide: function( event, ui ) {
        $( "#amount" ).val( ui.value + " min" );
        $(".amount").html(ui.value + " min");
      }
    });
  } );

  $("#generator-button").click(function(){
        // Animation für das erscheinen des Loaders und danach der Klausur
        $('#loader-box').fadeIn(400).delay( 1500 ).fadeOut( 400 );
        $('.test-uti').delay(2300).fadeIn('fast');
  })

var eukaryotischeChromosomeFragen = [
	"Erläutern Sie die besonders hohe Stabilität des Fibroinmoleküls anhand der molekularen Struktur des Fibroin-Gens.",
	"Erläutern Sie die Besonderheiten des Titin-Gens.",
	"Zeigen Sie am Beispiel der Globin-Gene den Vorteil der vergleichenden DNA-Sequenzanalyse für evolutionäre Zusammenhänge.",
	"Nennen Sie die wichtigsten Bestandteile eines eukaryotischen Promotors.",
	"Beschreiben Sie den Mechanismus des »Glucose-Fühlers« (glucose sensing) für die Regulation der Insulin-Genexpression."
];

var eukaryotischeChromosomeAntworten = [
	"Ein Chromosom in der Interphase besteht aus einer Chromatide, die aus einem DNA-Doppelstrang mit den dazugehörigen Proteinen (Histonen) aufgebaut ist. In der Metaphase der Mitose wurde die DNA bereits repliziert, und so erscheint das klassische Bild mit zwei Chromatiden, die am Centromer zusammenhängen.",
	"Die Telomerase ist eine Reverse Transkriptase, die am Telomer zunächst kurze RNA-Moleküle (Pentamere, Hexamere oder Heptamere) anfügt und daran den Gegenstrang synthetisiert. Die Telomerase verhindert somit, dass die Enden der Chromosomen bei jeder Zellteilung verkürzt werden; sie ist in Einzellern aktiv sowie in höheren Eukaryoten in den Zellen der Keimbahn, in (embryonalen und adulten) Stammzellen, in Zellen des Immunsystems und in Krebszellen.",
	"Die Mitose verteilt die verdoppelten Chromosomen bei einer regulären Zellteilung einfach auf die jeweiligen Tochterzellen; die Zellen befinden sich danach wieder im diploiden Zustand. Bei der Differenzierung der Keimzellen erfolgt in den beiden meiotischen Teilungen eine Reduktion auf eine haploide Keimzelle, sodass erst bei der Befruchtung erneut eine diploide Zelle entsteht. Die erste meiotische Teilung dient der Trennung der Chromosomen und die zweite der Trennung der Chromatiden. In der ersten meiotischen Teilung erfolgt außerdem ein Austausch von DNA-Fragmenten (Rekombination) zwischen den homologen (ursprünglich väterlichen und mütterlichen) Chromatiden, sodass die entstehenden Keimzellen eine individuelle Allelkombination enthalten. Zusammen erhöhen beide Mechanismen (Meiose und Rekombination) die genetische Vielfalt erheblich.",
	"Riesenchromosomen (in den Speicheldrüsen vieler Insekten) bestehen aus einer großen Anzahl exakt gepaarter Chromatiden, die durch wiederholte Replikation der chromosomalen DNA ohne darauffolgende Zell- und Kernteilungen entstehen (Endoreplikation). Die Riesenchromosomen weisen eine hohe Transkriptionsaktivität auf; die Expression der Gene auf diesen Chromosomen wird durch den hohen Polytäniegrad deutlich erhöht. Die große Zahl der gepaarten Chromatiden ermöglicht außerdem die Beobachtung von strukturellen Unterschieden in den Chromosomen ohne weitere Färbetechniken.",
	"Das menschliche Y-Chromosom ist gegenüber dem X-Chromosom degeneriert und enthält im Wesentlichen nur noch Gene, die für die Ausprägung des männlichen Phänotyps und für die männliche Fertilität wichtig sind. Allerdings enthält das Y-Chromosom viele Palindrome und repetitive Elemente, die häufige intrachromosomale Rekombinationen ermöglichen. Dadurch erscheint das Y-Chromosom durchaus als ein dynamisches Chromosom."
];

var epigenetikFragen = [
	"Was verstehen wir heute unter Epigenetik?",
	"Was verstehen wir unter »passiver Demethylierung« von DNA?",
	"Erläutern Sie kurz die Bedeutung des Enzyms Dicer.",
	"Wieso ist die X-Inaktivierung bei Säugern ein besonderes Beispiel für die Wirkung langer, nicht-codierender RNA?",
	"Was bedeutet »genetische Prägung«?"	
];
var epigenetikAntworten = [
	"Epigenetik bezeichnet stabile Veränderungen in der Regulation der Genexpression, die während der Entwicklung, Zelldifferenzierung und Zellproliferation entstehen und über Zellteilungen hinweg festgeschrieben und aufrechterhalten werden, ohne dass dabei die DNA-Sequenz verändert wird. Epigenetische Markierungen sind Methylierung der DNA sowie Methylierung, Acetylierung und Phosphorylierung der Histone. Außerdem zählen wir die Wirkung verschiedener nicht-codierender RNA-Moleküle dazu.",
	"Bei der Replikation der DNA wird deren Methylierung auf den neuen Strang nicht »automatisch« weitergegeben, sondern bedarf der Wirkung von Enzymen (DNA-Methylasen). Bleibt diese aus, bleibt der neue Strang unmethyliert. Nach mehreren Replikationsrunden sind nur noch die beiden ursprünglichen DNA-Stränge methyliert und die überwiegende Mehrzahl der DNA ist unmethyliert. Deswegen sind auch PCR-Produkte nicht methyliert.",
	"Das Enzym Dicer ist eine dsRNA-spezifische Nuklease der RNase-III-Familie; sie enthält ein dsRNA-bindendes Motiv und am N-Terminus eine DExH/DEAH-RNA-Helikase/ATPase-Domäne sowie ein Motiv, das als »PAZ«-Domäne bezeichnet wird (PAZ: Piwi-Argonaute-Zwille – das sind verwandte Proteine aus Drosophila). RNase III produziert aus langer dsRNA Sequenz-unabhängig einheitlich kleine RNA-Fragmente, wovon die Bezeichnung Dicer abgeleitet wurde (aus dem Amerikanischen: Würfelschneidemaschine). Dicer-Enzyme spielen owohl bei der Herstellung der kleinen interferierenden RNA (siRNA) als auch bei der Herstellung der wirksamen Formen der Mikro-RNA (miRNA) eine wichtige Rolle, da sie aus den Vorläuferformen die jeweils aktiven Formen herausschneiden.",
	"Die Inaktivierung des X-Chromosoms geht vom X-Inaktivierungszentrum aus und beruht im Wesentlichen auf der Expression des Xist-Transkripts, das für kein Protein codiert. Als Ergebnis der Xist-Bedeckung wird die Transkription der Gene des X-Chromosoms abgeschaltet. Ähnliche Phänomene finden wir bei Genen, die genetisch geprägt sind, aber auch bei einzelnen Genen, die – abhängig vom Differenzierungsgrad der jeweiligen Zellen – dauerhaft stillgelegt werden.",
	"In manchen Bereichen des Genoms von Keimzellen sind Gruppen von Genen geschlechtsspezifisch ausgeschaltet; diese »genetische Prägung« (engl. imprinting) wird in Körperzellen im Prinzip aufrechterhalten und kann während der Entwicklung und Differenzierung modifiziert werden. Imprinting beruht im Wesentlichen auf der Methylierung von DNA als Erkennungsmechanismus für Geninaktivierung und wird durch weitere Mechanismen ergänzt (Expression von Gegenstrang-Transkripten, Chromatinstrukturen, Silencer). Die genetische Prägung eines chromosomalen Abschnitts wird oft von einem Prägungszentrum gesteuert (imprinting center). In Keimzellen wird die genetische Prägung in der frühen Phase ihrer Entwicklung gelöscht und in den späteren Phasen geschlechtsspezifisch neu programmiert."
];


  
  function generateTest() {
  	var testInhalt = "";
  	eukaryotischeChromosomeFragen.forEach(function(frage){
  		testInhalt += "<li>" + "<h5>" + frage + "</h5>" + "</li>";
  		document.getElementById("test-fragen").innerHTML = testInhalt;
  	});
  }

  function answerTest() {
  	var testInhalt = "";

  	for(var i = 0; i < eukaryotischeChromosomeFragen.length -1; i++){
  		testInhalt += "<li>" + "<h5>" + eukaryotischeChromosomeFragen[i] + "</h5>" + "<p>" + eukaryotischeChromosomeAntworten[i] + "</p>" + "</li>";
  	}
  	document.getElementById("test-fragen").innerHTML = testInhalt;

  	// 	klassischeGenetikFragen.forEach(function(frage){
  	// 	testInhalt += "<li>" + frage + "</li>";
  	// 	document.getElementById("test-fragen").innerHTML = testInhalt;
  	// });
  }