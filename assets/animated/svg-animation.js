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
    var connectProducerToBlock = TweenMax.to($line1, 0.5, {strokeDashoffset: 0, strokeDasharray: "4,2,4,2,4,2", drawSVG: '100%', ease:Linear.easeNone, immediateRender: false});
    var showProducer = TweenMax.to("#Producer", 1, {className: 'animated visible fadeIn', immediateRender: false});
    var showBlockGroup1 = TweenMax.to("#BlockGroup1", 1, {className: 'animated rollIn', immediateRender: false});

    var step1timeline = new TimelineMax();

    step1timeline
        .add(showProducer)
        .add(connectProducerToBlock)
        .add(showBlockGroup1);

	new ScrollMagic.Scene({
        triggerElement: "#step1",
        offset: 200
    })
    .setTween(step1timeline)                                                            // Display broadcast to block
    .addIndicators({name: "Step 1: Request for Investment"})
    .addTo(controller);


	/* Step 2: Contract Negotiation */
	var step2timeline = new TimelineMax();
    var eraseBlockLine = TweenMax.to($line1, 0.1, {autoAlpha: 0, display: "none"});
    var showInvestor = TweenMax.to("#Investor", 0.1, {autoAlpha: 1, display: "block"});
    var connectToInvestor = TweenMax.to($line2, 0.1, {autoAlpha: 1, display: "block"});
    var showLetterOfEngagement = TweenMax.to("#LetterOfEngagement", 1, {autoAlpha: 1, display: "block"}); // TODO apply some sort of duration to this
    var hideLetterOfEngagement = TweenMax.to("#LetterOfEngagement", 0.5, {autoAlpha: 0, display: "none"});
    var showNegotiationBlock = TweenMax.to("#NegotiateTerms", 1, {autoAlpha: 1, display: "block"});

    step2timeline
        .add(eraseBlockLine)
        .add(showInvestor)
        .add(connectToInvestor)
        .add(showLetterOfEngagement)
        .add(hideLetterOfEngagement)
        .add(showNegotiationBlock);


    new ScrollMagic.Scene({
        triggerElement: "#step2",
        offset: 100
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
    var showBlockGroup2 = TweenMax.to("#BlockGroup2", 0.5, {className: 'zap', immediateRender: false});

    step3timeline
        .add(hideNegotiateBlock)
        .add(hideLineToInvestor)
        .add(showHub)
        .add(showLineGroup1)
        .add(showBlockGroup2);

    new ScrollMagic.Scene({
        triggerElement: "#step3",
        offset: 100
    })
    .setTween(step3timeline)
	.addIndicators({name: "Step 3: Signing & Submission"})
	.addTo(controller);


    /* Step 4: Fund Transfer & Disbursement */
    var step4timeline = new TimelineMax();

    var hideLineGroup1 = TweenMax.to("#LineGroup1", 0.5, {autoAlpha: 0, display: "none"});
    var showLineGroup2 = TweenMax.to("#LineGroup2", 0.5, {autoAlpha: 1, display: "block"});
    var moveHubRight = TweenMax.to("#Hub", 0.5, {className: 'moveRight', immediateRender: false});
    var showBlockGroup3 = TweenMax.to("#BlockGroup3", 0.5, {className: 'zap', immediateRender: false});

    step4timeline
        .add(hideLineGroup1)
        .add(showLineGroup2)
        .add(moveHubRight)
        .add(showBlockGroup3);

    new ScrollMagic.Scene({
        triggerElement: "#step4",
        offset: 100
    })
    .setTween(step4timeline)
	.addIndicators({name: "Step 4: Fund Transfer & Disbursement"})
	.addTo(controller);


    /* Step 5: Commodity Delivery */

    var step5timeline = new TimelineMax();

    var makeClockAppear = TweenMax.to("#Clock", 2, {autoAlpha: 1, display: "block"});
    var moveBlocksUp = TweenMax.to("#AllBlocks", 1.0, {y: -200});
    var hideClock = TweenMax.to("#Clock", 0.1, {autoAlpha: 0, display: "none"});
    var showActors = TweenMax.to("#Actors", 0.1, {autoAlpha: 1, display: "block"});
    showHub = TweenMax.to("#Hub", 0.1, {autoAlpha: 1, display: "block"});
    var hideLineGroup2 = TweenMax.to("#LineGroup2", 0.1, {autoAlpha: 0, display: "none"});
    var showLine9 = TweenMax.to("#Line9", 0.1, {autoAlpha: 1, display: "block"});
    var showReceiptOfGoods = TweenMax.to("#BlockGroup4", 0.1, {className: 'zap', immediateRender: false});

    step5timeline
        .add(makeClockAppear)
        .add(moveBlocksUp)
        .add(hideClock)
        .add(showActors)
        .add(showHub)
        .add(hideLineGroup2)
        .add(showLine9)
        .add(showReceiptOfGoods);

    new ScrollMagic.Scene({
        triggerElement: "#step5",
        offset: 100
    })
    .setTween(step5timeline)
    .addIndicators({name: "Step 5: Commodity Delivery"})
    .addTo(controller);


    /* Step 6: Contract Fulfillment & Payment */
    var step6timeline = new TimelineMax();

    var showStar = TweenMax.to("#Star", 0.1, {className: 'zap'});
    var hideLine9 = TweenMax.to("#Line9", 0.1, {autoAlpha: 0, display: "none", immediateRender: false});
    //showlinegroup2
    var showContractFulfilled = TweenMax.to("#BlockGroup5", 0.1, {className: 'zap', immediateRender: false});

    step6timeline
        .add(showContractFulfilled)
        .add(hideLine9)
        .add(showLineGroup2)
        .add(showStar);

    new ScrollMagic.Scene({
        triggerElement: "#step6",
        offset: 100
    })
    .setTween(step6timeline)
    .addIndicators({name: "Step 6: Contract Fulfillment & Payment"})
    .addTo(controller);

    var containerScene = new ScrollMagic.Scene({
        triggerElement: '#step1',
        offset: "400"
    })
    .setPin('#block')
    .addIndicators()
    .addTo(controller);
});