
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

var mutationenFragen = [
	"Was sind »springende Gene«?",
	"Erläutern Sie kurz die Bedeutung der Retroviren für die menschliche Gesundheit.",
	"Was verstehen wir unter »Kerndualismus«?",
	"Wie können Hefen diploide Zellen bilden?",
	"Worauf beruht die Spezifität von Antikörpern?"
];
var mutationenAntworten = [
	"»Springende Gene« sind DNA-Elemente, die ihre Position im Genom verändern können; sie kommen bei den meisten Prokaryoten und allen Eukaryoten vor. Sie besitzen in der Regel flankierende repetitive Elemente und benötigen Enzyme zum Ausschneiden aus der bisherigen Position und zum Integrieren an der neuen Position.",
	"Retroviren sind Viren, die ihre Erbinformation in Form von RNA enthalten. Diese RNA wird durch die Reverse Transkriptase in DNA umgeschrieben; diese kann so als »Provirus« in das Genom integrieren und dort für lange Zeit verbleiben. Die flankierenden Regionen (LTR) enthalten häufig starke Promotoren, sodass die Gene des Retrovirus in vielen Geweben exprimiert werden können. Häufig führen Retroviren zu Krebserkrankungen; Infektionen mit HIV verursachen AIDS.",
	"Ciliaten verfügen für den Wechsel zwischen einem generativen und einem vegetativen Zustand der Zelle über zwei Zellkerne. Einer der beiden Zellkerne steht im Dienst generativer, also sexueller Prozesse, während der andere Zellkern für die vegetativen Funktionen der Zelle verantwortlich ist. Die Kontinuität der genetischen Konstitution ist dadurch garantiert, dass der vegetative Kern aus dem generativen durch eine Kernteilung entsteht, der jedoch keine Zellteilung folgt.",
	"Hefen sind als haploide oder diploide Zellen lebensfähig. Haploide Zellen können sich in ihrem Paarungstyp unterscheiden; Zellen unterschiedlicher Paarungstypen können fusionieren und diploide Zellen bilden. Der Paarungstyp (engl. mating type) wird durch die genetische Konstitution des MAT-Locus definiert.",
	"Antikörper bestehen aus zwei leichten und zwei schweren Proteinketten. Diese untergliedern sich in einen konstanten und einen variablen Abschnitt. Der variable Bereich vermittelt die Erkennung des Antigens. Die funktionellen Gene für Antikörper werden während der Differenzierung von Lymphocyten im Knochenmark durch komplexe intrachromosomale Rekombinationsereignisse aus Teilstücken zusammengesetzt. Durch Kombination unterschiedlicher Teilstücke vermag jeder Lymphocytein für ihn spezifisches Immunglobulin-Gen zusammenzustellen."
];

var entwicklungsgenetikFragen = [
	"Beschreiben Sie die Rolle des Florigens sowie die Einflüsse von Licht und Temperatur auf die Blühinduktion bei Pflanzen.",
	"Erläutern Sie die Bedeutung des Begriffs »homöotische Mutation« jeweils an einem Beispiel aus dem Pflanzen- und Tierreich.",
    "Welche besondere Eigenschaft des Fadenwurms Caenorhabditis elegans führte zu der Formulierung des Konzepts der Apoptose?",
    "Erläutern Sie das Wirkungsprinzip von Morpholinos beim Zebrafisch. Warum können sie in diesem Organismus besonders gut engesetzt werden?",
    "Begründen Sie, warum wir heute nicht mehr von einer getrennten Evolution von Facetten- und Linsenaugen sprechen können."
];
var entwicklungsgenetikAntworten = [
	"Verschiedene Umweltreize (Vernalisierung, Licht, Wärme) zusammen mit autonomen Signalwegen führen in den Blättern zur Aktivierung des Florigens (FT; FLOWERINGLOCUS T), das als »Ferntransporter« dieses Signal in das Meristem weitergibt, wo sich dann unter dem Einfluss von Gibberellinen und anderen Faktoren die Blüte entwickeln kann.",
	"Homöotische Mutationen bewirken eine Umwandlung von einem Körpersegment in ein anderes. Bei Pflanzen führt eine Verschiebung im Expressionsmuster der A-, B- und C-Genfunktionen der MADS-Box-Transkriptionsfaktoren (homöotische Mutation) zu einem völlig anderen Muster der Blütenorgane. Bei Drosophila bewirken homöotische Mutationen Veränderungen im grundlegenden segmentierten Körperbau (z. B. Umwandlung einer Antenne in ein Bein oder doppelter Thorax mit zweitem Flügelpaar).",
	"C. elegans verfügt über eine genau definierte Anzahl von Zellen: Von den 1090 somatischen Zellen des Zwitters sterben 131 in einer reproduzierbaren Art und Weise während der Entwicklung zum adulten Wurm ab. Man hat dieses Phänomen als »programmierten Zelltod« bezeichnet (Apoptose).",
	"Morpholinos sind kurze antisense-Oligonukleotide, wobei die Vernetzung der Basen über einen Morpholinring und Phosphoamid-Gruppen erfolgt (Stabilität gegenüber RNasen; 7 Technikbox 31). Durch in-vivo-Injektion in frühe Zebrafisch-Embryonen werden die entsprechenden Gene inhibiert, und die morphologischen Konsequenzen können gut beobachtet werden. Man kann in relativ kurzer Zeit viele Embryonen injizieren und erhält damit auch statistisch gut abgesicherte Ergebnisse; durch die Injektion in eine Seite des Embryos kann die andere Seite als Kontrolle verwendet werden.",
	"Aufgrund der unterschiedlichen Morphologie des Facettenauges bei Drosophila und des Linsenauges bei Säugern war man lange davon ausgegangen, dass sich hier unterschiedliche evolutionäre Konzepte entwickelt haben. Sequenzuntersuchungen wichtiger Kontrollgene der Augenentwicklungzeigten jedoch große Homologien der entsprechenden Gene. Die ektopische Expression des Pax6-Gens der Maus in Drosophila führt zu einer Entwicklung von Ommatidien und entspricht damit der Wirkung des homologen eyeless-Gens von Drosophila. Das Experiment beweist damit die grundlegende Konservierung der genetischen Kontrollelemente in der Augenentwicklung zwischen Drosophila und Säugetieren."
];

var klassischeGenetikFragen = [
	"Wo liegt der Unterschied zwischen der genetischen Fitness und der Fitness aus dem Fitnessstudio?",
	"Warum ist die effektive Populationsgröße kleiner als die tatsächliche Größe einer Population?",
	"Erläutern Sie das Prinzip einer Haplotyp-Analyse.",
	"Nennen Sie verschiedene Mechanismen, die zu sympatrischer Artbildung beitragen können.",
	"Erläutern Sie, warum Mutationen in kleinen Populationen oft eine größere Wirkung entfalten als in großen Populationen."
];
var klassischeGenetikAntworten = [
	"Die genetische Fitness beschreibt den relativen Fortpflanzungserfolg eines Genotyps innerhalb einer Population; der Besuch eines Fitnessstudios wirkt sich dagegen auf den Phänotyp aus, der natürlich auch zu einem Fortpflanzungserfolg führen kann.",
	"Zur Fortpflanzung tragen nur die Mitglieder einer Population bei, die sich im fortpflanzungsfähigen Alter befinden, also beispielsweise keine Kinder und Greise. Bei Zuchtpopulationen (z. B. Hunde, Rinder) ist außerdem oft das Geschlechterverhältnis nicht ausgeglichen – ein Rüde oder Bulle ist oft für die Befruchtung vieler weiblicher Tiere verantwortlich. Auch dadurch sinkt die effektive Populationsgröße (bei einem Bullen, der 400 Kühe besamt, ergibt sich eine effektive Populationsgröße von 4).",
	"Ein Haplotyp (Abkürzung aus »haploider Genotyp«) ist eine Kombination von gekoppelten Allelen eines Chromosoms, die gemeinsam vererbt werden. Wir können verschiedene Haplotypen bei einer Kopplungsanalyse auf ihre jeweiligen Rekombinationspunkte untersuchen und dabei das kritische Intervall einer unbekannten Mutation bestimmen. Entsprechend kann man auch in populationsgenetischen Untersuchungen bestimmte Eigenschaften von Pflanzen, Tieren oder Menschen mit bestimmten Haplotypen assoziieren.",
	"Bei überlappenden (sympatrischen) Populationen müssen geeignete Isolationsmechanismen vorliegen, damit sich neue Arten entwickeln können. Dazu gehören die Inkompatibilität von Gameten (durch Punktmutationen oder auch durch eine veränderte Chromosomenverteilung) und Unterschiede im Paarungsverhalten einschließlich Rhythmusverschiebungen (Blütezeit, Paarungsfähigkeit) sowie Merkmale der Partnerwahl.",
	"In kleinen Populationen ist die freie Partnerwahl oft eingeschränkt, sodass es sehr häufig zu Inzucht kommt. Dadurch steigt die Homozygotie an diesem Locus, und es steigt auch die Wahrscheinlichkeit, dass sich rezessive Mutationen schnell phänotypisch manifestieren. Dies führt zu dem bekannten Phänomen der Gründermutation, das uns im 7 Kap. 13 über »Humangenetik« häufig begegnen wird. Umgekehrt herrscht in großen Populationen die Möglichkeit der freien Partnerwahl, sodass die Ausbreitung und Fixierung eines neuen Allels langsamer erfolgt."
];

  
  function generateTest() {
  	var eukaryotischeChromosomeCheckbox = document.querySelector('input[value="eukaryotische-chromosome"]');
  	var epigenetikCheckbox = document.querySelector('input[value="epigenetik"]');
  	var klassischeGenetikCheckbox = document.querySelector('input[value="klassischeGenetik"]');
  	var mutationenCheckbox = document.querySelector('input[value="mutationen"]');
  	var entwicklungsgenetikCheckbox = document.querySelector('input[value="entwicklungsgenetik"]');
  	var testInhalt = "";
  	if(eukaryotischeChromosomeCheckbox.checked) {
  		for(var i = 0; i < eukaryotischeChromosomeFragen.length -1; i++){
  			testInhalt += "<li>" + "<h5>" + eukaryotischeChromosomeFragen[i] + "</h5>" + "</li>";
  		}
  	}
  	if(epigenetikCheckbox.checked) {
  		for(var i = 0; i < epigenetikFragen.length -1; i++){
  			testInhalt += "<li>" + "<h5>" + epigenetikFragen[i] + "</h5>" + "</li>";
  		}
  	}
  	if(klassischeGenetikCheckbox.checked) {
  		for(var i = 0; i < klassischeGenetikFragen.length -1; i++){
  			testInhalt += "<li>" + "<h5>" + klassischeGenetikFragen[i] + "</h5>" + "</li>";
  		}
  	}
  	if(mutationenCheckbox.checked) {
  		for(var i = 0; i < mutationenFragen.length -1; i++){
  			testInhalt += "<li>" + "<h5>" + mutationenFragen[i] + "</h5>" + "</li>";
  		}
  	}
  	if(entwicklungsgenetikCheckbox.checked) {
  		for(var i = 0; i < entwicklungsgenetikFragen.length -1; i++){
  			testInhalt += "<li>" + "<h5>" + entwicklungsgenetikFragen[i] + "</h5>" + "</li>";
  		}
  	}
  	document.getElementById("test-fragen").innerHTML = testInhalt;


  	// var testInhalt = "";
  	// eukaryotischeChromosomeFragen.forEach(function(frage){
  	// 	testInhalt += "<li>" + "<h5>" + frage + "</h5>" + "</li>";
  	// 	document.getElementById("test-fragen").innerHTML = testInhalt;
  	// });
  }

  function answerTest() {
  	var eukaryotischeChromosomeCheckbox = document.querySelector('input[value="eukaryotische-chromosome"]');
  	var epigenetikCheckbox = document.querySelector('input[value="epigenetik"]');
  	var klassischeGenetikCheckbox = document.querySelector('input[value="klassischeGenetik"]');
  	var mutationenCheckbox = document.querySelector('input[value="mutationen"]');
  	var entwicklungsgenetikCheckbox = document.querySelector('input[value="entwicklungsgenetik"]');
  	var testInhalt = "";
  	if(eukaryotischeChromosomeCheckbox.checked) {
  		if(eukaryotischeChromosomeFragen.length != eukaryotischeChromosomeAntworten.length) throw "Achtung: Es gibt zu wenige Antworten zu eukaryotische Chromosome!"
  		for(var i = 0; i < eukaryotischeChromosomeFragen.length -1; i++){
  			testInhalt += "<li>" + "<h5>" + eukaryotischeChromosomeFragen[i] + "</h5>" + "<p>" + eukaryotischeChromosomeAntworten[i] + "</p>" + "</li>";
  		}
  	}
  	if(epigenetikCheckbox.checked) {
  		for(var i = 0; i < epigenetikFragen.length -1; i++){
  			testInhalt += "<li>" + "<h5>" + epigenetikFragen[i] + "</h5>" + "<p>" + epigenetikAntworten[i] + "</p>" + "</li>";
  		}
  	}
  	if(klassischeGenetikCheckbox.checked) {
  		for(var i = 0; i < klassischeGenetikFragen.length -1; i++){
  			testInhalt += "<li>" + "<h5>" + klassischeGenetikFragen[i] + "</h5>" + "<p>" + klassischeGenetikAntworten[i] + "</p>" + "</li>";
  		}
  	}
  	if(mutationenCheckbox.checked) {
  		for(var i = 0; i < mutationenFragen.length -1; i++){
  			testInhalt += "<li>" + "<h5>" + mutationenFragen[i] + "</h5>" + "<p>" + mutationenAntworten[i] + "</p>" + "</li>";
  		}
  	}
  	if(entwicklungsgenetikCheckbox.checked) {
  		for(var i = 0; i < entwicklungsgenetikFragen.length -1; i++){
  			testInhalt += "<li>" + "<h5>" + entwicklungsgenetikFragen[i] + "</h5>" + "<p>" + entwicklungsgenetikAntworten[i] + "</p>" + "</li>";
  		}
  	}
  	document.getElementById("test-fragen").innerHTML = testInhalt;
  }