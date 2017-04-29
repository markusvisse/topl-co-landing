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


    /* Step 1: Request for Investment */
    var connectProducerToBlock = TweenMax.to($line1, 0.1, {strokeDashoffset: 0, strokeDasharray: "4,2,4,2,4,2", drawSVG: '100%', ease:Linear.easeNone, immediateRender: false});
    var showProducer = TweenMax.to("#Producer", 0.5, {className: 'visible', immediateRender: false});
    var showBlockGroup1 = TweenMax.to("#BlockGroup1", 0.5, {className: 'zap', immediateRender: false});

    var step1timeline = new TimelineMax();

    step1timeline
        .add(connectProducerToBlock)
        .add(showProducer)
        .add(showBlockGroup1);

	new ScrollMagic.Scene({
        triggerElement: "#step1", offset: 300
    })
    .setTween(step1timeline)                                                            // Display broadcast to block
    .addIndicators({name: "Step 1: Request for Investment"})
    .addTo(controller);


	/* Step 2: Contract Negotiation */
	var step2timeline = new TimelineMax();
    var eraseBlockLine = TweenMax.to($line1, 0.5, {autoAlpha: 0, display: "none"});
    var showInvestor = TweenMax.to("#Investor", 0.5, {autoAlpha: 1, display: "block"});
    var connectToInvestor = TweenMax.to($line2, 0.5, {autoAlpha: 1, display: "block"});
    var showLetterOfEngagement = TweenMax.to("#LetterOfEngagement", 0.5, {autoAlpha: 1, display: "block"}); // TODO apply some sort of duration to this
    var hideLetterOfEngagement = TweenMax.to("#LetterOfEngagement", 0.5, {autoAlpha: 0, display: "none"});
    var showNegotiationBlock = TweenMax.to("#NegotiateTerms", 0.5, {autoAlpha: 1, display: "block"});

    step2timeline
        .add(eraseBlockLine)
        .add(showInvestor)
        .add(connectToInvestor)
        .add(showLetterOfEngagement)
        .add(hideLetterOfEngagement)
        .add(showNegotiationBlock);


    new ScrollMagic.Scene({
        triggerElement: "#step2", offset: 300
    })
    .setTween(step2timeline)
    .addIndicators({name: "Step 2: Contract Negotiation"})
    .addTo(controller);

    /* Step 3: Signing & Submission */
    var step3timeline = new TimelineMax();
    var hideNegotiateBlock = TweenMax.to("#NegotiateTerms", 0.5, {autoAlpha: 0, display: "none"});
    var hideLineToInvestor = TweenMax.to("#Line2", 0.5, {autoAlpha: 0, display: "none"});
    var showHub = TweenMax.to("#Hub", 0.5, {autoAlpha: 1, display: "block"});
    var showLineGroup1 = TweenMax.to(".lineGroup1", 0.5, {autoAlpha: 1, display: "block"});
    var showBlockGroup2 = TweenMax.to("#BlockGroup2", 0.5, {className: 'zap'});

    step3timeline
        .add(hideNegotiateBlock)
        .add(hideLineToInvestor)
        .add(showHub)
        .add(showLineGroup1)
        .add(showBlockGroup2);

    new ScrollMagic.Scene({
        triggerElement: "#step3", offset: 300
    })
    .setTween(step3timeline)
	.addIndicators({name: "Step 3: Signing & Submission"})
	.addTo(controller);


    /* Step 4: Fund Transfer & Disbursement */
    var step4timeline = new TimelineMax();

    var hideLineGroup1 = TweenMax.to(".lineGroup1", 0.5, {autoAlpha: 0, display: "none"});
    var showLineGroup2 = TweenMax.to(".lineGroup2", 0.5, {autoAlpha: 1, display: "block"});
    var moveHubRight = TweenMax.to("#Hub", 0.5, {className: 'moveRight'});
    var showBlockGroup3 = TweenMax.to("#BlockGroup3", 0.5, {className: 'zap'});
    var hideAllActors = TweenMax.to("#Actors", 0.5, {autoAlpha: 0, display: "none"});

    step4timeline
        .add(hideLineGroup1)
        .add(showLineGroup2)
        .add(moveHubRight)
        .add(showBlockGroup3)
        .add(hideAllActors);

    new ScrollMagic.Scene({
        triggerElement: "#step4", offset: 300
    })
    .setTween(step4timeline)
	.addIndicators({name: "Step 4: Fund Transfer & Disbursement"})
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