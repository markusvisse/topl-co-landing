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
	var $line1 = $("#Line1");
	pathPrepare($line1);

    var controller = new ScrollMagic.Controller();
	
	var tween = TweenMax.to($line1, 0.5, {strokeDashoffset: 0, strokeDasharray: "4,2,4,2,4,2", drawSVG: '100%', ease:Linear.easeNone})
	new ScrollMagic.Scene({
        triggerElement: "#block", offset: 400
    }).setTween(tween).addIndicators({name: "1 - Draw Line 1"}).addTo(controller);
		
    new ScrollMagic.Scene({
        triggerElement: "#block", offset: 500
    }).setClassToggle("#BlockGroup1", "appear").addIndicators({name: "2 - Make BlockGroup1 Appear"}).addTo(controller);
	
	var tween1 = TweenMax.to($line1, 0.5, {autoAlpha: 0})
	new ScrollMagic.Scene({
        triggerElement: "#block", offset: 600
    }).setTween(tween1).addIndicators({name: "3 - Make Line 1 Disappear"}).addTo(controller);

    var producerScene = new ScrollMagic.Scene({
        triggerElement: "#block", offset: 1000
    })
	.setClassToggle("#Group3", "zap1")
	.addIndicators({name: "3 - add a class"}) // add indicators (requires plugin)
	.addTo(controller);

    var producerScene = new ScrollMagic.Scene({
        triggerElement: "#block", offset: 1500
    })
	.setClassToggle("#Group4", "zap1")
	.addIndicators({name: "4 - add a class"}) // add indicators (requires plugin)
	.addTo(controller);

    var agreementScene = new ScrollMagic.Scene({
        triggerElement: "#block", offset: 1500
    })
    .setClassToggle("#upper0", "zap")
    .addIndicators({name: "5 - Remove Upper Zero"}) // add indicators (requires plugin)
    .addTo(controller);
    // var producerSceneDelete = new ScrollMagic.Scene({
    // 	triggerElement: "#block", offset: 1000
    // })
    // .setClassToggle("#Group2", "out")
    // .addIndicators({name: "2 - add a class"}) // add indicators (requires plugin)
    // .addTo(controller);

    var containerScene = new ScrollMagic.Scene({
        triggerElement: '#startAnimation',
        offset: "400"
    })
    .setPin('#block')
    .addIndicators()
    .addTo(controller);
});