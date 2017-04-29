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
    })
	.setClassToggle("#BlockGroup1", "zap")
	.addIndicators({name: "2 - add BlockGroup1"})
	.addTo(controller);
	
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
    }).setTween(TweenMax.to("#Line2", 0.5, {autoAlpha: 0, display: "none"})).addIndicators({name: "10 - Make Line2 Disappear"}).addTo(controller);
	
	new ScrollMagic.Scene({
        triggerElement: "#block", offset: 1200, duration: 200
    }).setTween(TweenMax.to("#Hub", 0.5, {autoAlpha: 1, display: "block"})).addIndicators({name: "11 - Make Hub Appear"}).addTo(controller);
	
	new ScrollMagic.Scene({
        triggerElement: "#block", offset: 1300
    }).setTween(TweenMax.to("#LineGroup1", 0.5, {autoAlpha: 1, display: "block"})).addIndicators({name: "12 - Make LineGroup1 Appear"}).addTo(controller);
	
	
    var producerScene = new ScrollMagic.Scene({
        triggerElement: "#block", offset: 1500
    })
	.setClassToggle("#BlockGroup2", "zap")
	.addIndicators({name: "13 - add a Block"})
	.addTo(controller);
	
	new ScrollMagic.Scene({
        triggerElement: "#block", offset: 1600
    }).setTween(TweenMax.to("#LineGroup1", 0.5, {autoAlpha: 0, display: "none"})).addIndicators({name: "14 - Make LineGroup1 Disappear"}).addTo(controller);
	
	var producerScene = new ScrollMagic.Scene({
        triggerElement: "#block", offset: 1700
    })
	.setClassToggle("#Hub", "moveRight")
	.addIndicators({name: "15 - TranslateX on hub"})
	.addTo(controller);
	
	new ScrollMagic.Scene({
        triggerElement: "#block", offset: 1800
    }).setTween(TweenMax.to("#LineGroup2", 0.5, {autoAlpha: 1, display: "block"})).addIndicators({name: "16 - Make LineGroup2 Appear"}).addTo(controller);
	
	new ScrollMagic.Scene({
        triggerElement: "#block", offset: 1900
    })
	.setClassToggle("#BlockGroup3", "zap")
	.addIndicators({name: "17 - Add BlockGroup3"})
	.addTo(controller);
	
	new ScrollMagic.Scene({
        triggerElement: "#block", offset: 2000
    }).setTween(TweenMax.to("#Actors", 0.5, {autoAlpha: 0, display: "none"})).addIndicators({name: "18 - Make All Actors Disappear"}).addTo(controller);
	
	new ScrollMagic.Scene({
        triggerElement: "#block", offset: 2000
    }).setTween(TweenMax.to("#Clock", 0.5, {autoAlpha: 1, display: "block"})).addIndicators({name: "19 - Make Clock Appear"}).addTo(controller);
	
	new ScrollMagic.Scene({
        triggerElement: "#block", offset: 2100, duration: 300
    })
	.setClassToggle("#MinuteArm", "spinningFast")
	.addIndicators({name: "20 - Spin MinuteArm"})
	.addTo(controller);
	new ScrollMagic.Scene({
        triggerElement: "#block", offset: 2100, duration: 300
    })
	.setClassToggle("#HourArm", "spinningSlow")
	.addIndicators({name: "21 - Spin HourArm"})
	.addTo(controller);
	
	new ScrollMagic.Scene({
        triggerElement: "#block", offset: 2250, duration: 400
    }).setTween(TweenMax.to("#AllBlocks", 2.0, {y: -550})).addIndicators({name: "22 - Make All Blocks move up"}).addTo(controller);
	
	new ScrollMagic.Scene({
        triggerElement: "#block", offset: 2500
    }).setTween(TweenMax.to("#Clock", 0.5, {autoAlpha: 0, display: "none"})).addIndicators({name: "23 - Make Clock Disappear"}).addTo(controller);
	
	new ScrollMagic.Scene({
        triggerElement: "#block", offset: 2500
    }).setTween(TweenMax.to("#Actors", 0.5, {autoAlpha: 1, display: "block"})).addIndicators({name: "24 - Make Producer Appear"}).addTo(controller);
	
	new ScrollMagic.Scene({
        triggerElement: "#block", offset: 2500
    }).setTween(TweenMax.to("#Hub", 0.5, {autoAlpha: 1, display: "block"})).addIndicators({name: "25 - Make All Actors Appear Again"}).addTo(controller);
	
	new ScrollMagic.Scene({
        triggerElement: "#block", offset: 2500
    }).setTween(TweenMax.to("#Line7", 0.5, {autoAlpha: 0, display: "none"})).addIndicators({name: "26 - Make Line7 disappear"}).addTo(controller);
	new ScrollMagic.Scene({
        triggerElement: "#block", offset: 2500
    }).setTween(TweenMax.to("#Line8", 0.5, {autoAlpha: 0, display: "none"})).addIndicators({name: "27 - Make Line8 disappear"}).addTo(controller);
	
	new ScrollMagic.Scene({
        triggerElement: "#block", offset: 2700
    }).setTween(TweenMax.to("#Line6", 0.5, {autoAlpha: 0, display: "none"})).addIndicators({name: "28 - Make Line6 disappear"}).addTo(controller);
	new ScrollMagic.Scene({
        triggerElement: "#block", offset: 2700
    }).setTween(TweenMax.to("#Line9", 0.5, {autoAlpha: 1, display: "block"})).addIndicators({name: "29 - Make Line9 appear"}).addTo(controller);
	
	new ScrollMagic.Scene({
        triggerElement: "#block", offset: 2900
    })
	.setClassToggle("#BlockGroup4", "zap")
	.addIndicators({name: "30 - Add BlockGroup4"})
	.addTo(controller);
	
	new ScrollMagic.Scene({
        triggerElement: "#block", offset: 3100
    }).setTween(TweenMax.to("#Line9", 0.5, {autoAlpha: 0, display: "none"})).addIndicators({name: "31 - Make Line9 disappear"}).addTo(controller);
	new ScrollMagic.Scene({
        triggerElement: "#block", offset: 3100
    }).setTween(TweenMax.to("#Line6", 0.5, {autoAlpha: 1, display: "block"})).addIndicators({name: "32 - Make Line6 appear"}).addTo(controller);
	new ScrollMagic.Scene({
        triggerElement: "#block", offset: 3100
    }).setTween(TweenMax.to("#Line7", 0.5, {autoAlpha: 1, display: "block"})).addIndicators({name: "32 - Make Line7 appear"}).addTo(controller);
	new ScrollMagic.Scene({
        triggerElement: "#block", offset: 3100
    })
	.setClassToggle("#Star", "zap")
	.addIndicators({name: "33 - Add Star"})
	.addTo(controller);
	
	new ScrollMagic.Scene({
        triggerElement: "#block", offset: 3400
    }).setTween(TweenMax.to("#Line8", 0.5, {autoAlpha: 1, display: "block"})).addIndicators({name: "34 - Make Line8 appear"}).addTo(controller);
	new ScrollMagic.Scene({
        triggerElement: "#block", offset: 3400
    }).setTween(TweenMax.to("#Line6", 0.5, {autoAlpha: 0, display: "none"})).addIndicators({name: "35 - Make Line6 disappear"}).addTo(controller);
	new ScrollMagic.Scene({
        triggerElement: "#block", offset: 3400
    }).setTween(TweenMax.to("#Line7", 0.5, {autoAlpha: 0, display: "none"})).addIndicators({name: "36 - Make Line7 disappear"}).addTo(controller);
	new ScrollMagic.Scene({
        triggerElement: "#block", offset: 3400
    })
	.setClassToggle("#BlockGroup5", "zap")
	.addIndicators({name: "37 - Add BlockGroup5"})
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