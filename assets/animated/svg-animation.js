// Our code goes here

$(window).load(function() {
    var $e = $("#e")
    $e.replaceWith($($e[0].contentDocument.documentElement).clone());

    function pathPrepare ($el) {
        var lineLength = $el[0].getTotalLength();
        $el.css("stroke-dasharray", lineLength);
        $el.css("stroke-dashoffset", -1*lineLength);
    }

    function calcLength ($el) {
        return $el[0].getTotalLength()
    }
	var $line1 = $("#Line1"); var $line2 = $("#Line2");
	pathPrepare($line1); //pathPrepare($line2);

    var controller = new ScrollMagic.Controller();
	
	var tween = TweenMax.to($line1, 0.5, {strokeDashoffset: 0, strokeDasharray: "4,2,4,2,4,2", drawSVG: '100%', ease:Linear.easeNone})
	new ScrollMagic.Scene({
        triggerElement: "#block", offset: 400
    }).setTween(tween).addIndicators({name: "1 - Draw Line 1"}).addTo(controller);
		
	new ScrollMagic.Scene({
        triggerElement: "#block", offset: 500
    }).setTween(TweenMax.to("#BlockGroup1", 0.5, {autoAlpha: 1, display: "block"})).addIndicators({name: "2 - Make BlockGroup1 Appear"}).addTo(controller);
	
	new ScrollMagic.Scene({
        triggerElement: "#block", offset: 600
    }).setTween(TweenMax.to($line1, 0.5, {autoAlpha: 0, display: "none"})).addIndicators({name: "3 - Make Line 1 Disappear"}).addTo(controller);
	new ScrollMagic.Scene({
        triggerElement: "#block", offset: 600
    }).setTween(TweenMax.to("#Investor", 0.5, {autoAlpha: 1, display: "block"})).addIndicators({name: "4 - Make Line 1 Disappear"}).addTo(controller);
	
	new ScrollMagic.Scene({
        triggerElement: "#block", offset: 700
    }).setTween(TweenMax.to($line2, 0.5, {autoAlpha: 1, display: "block"})).addIndicators({name: "5 - Make Line 2 Appear"}).addTo(controller);
	
	new ScrollMagic.Scene({
        triggerElement: "#block", offset: 700
    }).setTween(TweenMax.to("#LetterOfEngagement", 0.5, {autoAlpha: 1, display: "block"})).addIndicators({name: "6 - Make LetterOfEngagement Appear"}).addTo(controller);
	
	new ScrollMagic.Scene({
        triggerElement: "#block", offset: 800
    }).setTween(TweenMax.to("#LetterOfEngagement", 0.5, {autoAlpha: 0, display: "none"})).addIndicators({name: "7 - Make LetterOfEngagement Disappear"}).addTo(controller);
	
	new ScrollMagic.Scene({
        triggerElement: "#block", offset: 800
    }).setTween(TweenMax.to("#NegotiateTerms", 0.5, {autoAlpha: 1, display: "block"})).addIndicators({name: "8 - Make NegotiateTerms Appear"}).addTo(controller);
	
	new ScrollMagic.Scene({
        triggerElement: "#block", offset: 1200
    }).setTween(TweenMax.to("#NegotiateTerms", 0.5, {autoAlpha: 0, display: "none"})).addIndicators({name: "9 - Make NegotiateTerms Disappear"}).addTo(controller);
	
	new ScrollMagic.Scene({
        triggerElement: "#block", offset: 1200, duration: 200
    }).setTween(TweenMax.to("#Line3", 0.5, {autoAlpha: 1, display: "block"})).addIndicators({name: "10 - Make Line3 Appear"}).addTo(controller);
	
	new ScrollMagic.Scene({
        triggerElement: "#block", offset: 1200, duration: 300
    }).setTween(TweenMax.to("#Hub", 0.5, {autoAlpha: 1.5, display: "block"})).addIndicators({name: "11 - Make Hub Appear"}).addTo(controller);

    var producerScene = new ScrollMagic.Scene({
        triggerElement: "#block", offset: 1500
    })
	.setClassToggle("#BlockGroup2", "zap")
	.addIndicators({name: "3 - add a class"})
	.addTo(controller);

    // var producerSceneDelete = new ScrollMagic.Scene({
    // 	triggerElement: "#block", offset: 1000
    // })
    // .setClassToggle("#Group2", "out")
    // .addIndicators({name: "2 - add a class"}) // add indicators (requires plugin)
    // .addTo(controller);

    var containerScene = new ScrollMagic.Scene({
        triggerElement: '#step1',
        offset: "400"
    })
    .setPin('#block')
    .addIndicators()
    .addTo(controller);
});