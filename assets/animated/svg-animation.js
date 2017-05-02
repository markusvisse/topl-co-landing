// Our code goes here

$(window).load(function() {
    var $e = $("#e")
    $e.replaceWith($($e[0].contentDocument.documentElement));

    function pathPrepare ($el) {
        var lineLength = $el[0].getTotalLength();
        $el.css("stroke-dasharray", lineLength);
        $el.css("stroke-dashoffset", -1*lineLength);
    }

    function calcLength ($el) {
        return $el[0].getTotalLength()
    }
	//var $line1 = $("#Line1"); var $line2 = $("#Line2");
	//pathPrepare($line1); //pathPrepare($line2);

    var controller = new ScrollMagic.Controller();


    /* Step 1: Request for Investment */
    var showProducer = TweenMax.to("#Producer", 1, {autoAlpha: 1});
    var zoomToBroadcast = TweenMax.to("#scene", 0.01, {attr:{ viewBox: "103.167 0 339.302 336.125" }});
    var hideEverything = TweenMax.to("#ProposalLineGroup > *", 0.01, {autoAlpha:0});
    var showProposalGroup = TweenMax.to("#ProposalLineGroup", 0.01, {autoAlpha:1});
    var showProducerBroadcastCircle = TweenMax.to("#ProposalLineGroup > .circle", 0.1, {autoAlpha:1});
    var drawProducerBroadcastLine = TweenMax.fromTo("#ProposalLineGroup > line", 0.75, {autoAlpha:0, scaleX:0}, {autoAlpha:1, scaleX:1});
    var broadcast = TweenMax.staggerTo("#ProposalLineGroup > .broadcast", 0.25, {autoAlpha:1}, 0.15);
    var showProposal = TweenMax.to("#InvestmentProposal", 0.5, {autoAlpha:1});
    var showBroadcastCaption = TweenMax.to(".investmentProposalLine", 0.25, {autoAlpha:1});

    var step1timeline = new TimelineMax();

    step1timeline
        .add(zoomToBroadcast)
        .add(showProducer)
        .add(hideEverything)
        .add(showProposalGroup)
        .add(showProducerBroadcastCircle)
        .add(drawProducerBroadcastLine)
        .add(broadcast)
        .add(showProposal)
        .add(showBroadcastCaption);

	new ScrollMagic.Scene({
        triggerElement: "#step1",
        offset: 200,
        reverse: false
    })
    .setTween(step1timeline)                                                            // Display broadcast to block
    //.addIndicators({name: "Step 1: Request for Investment"})
    .addTo(controller);


	/* Step 2: Contract Negotiation */
	var hideProducerBroadcast = TweenMax.to(".investmentProposalLine", 0.5, {autoAlpha: 0});
	var zoomOutToInvestor = TweenMax.to("#scene", 0.5, {attr:{ viewBox: "103.167 -50 339.302 536.125" }});
    var showInvestor = TweenMax.to("#Investor", 0.25, {autoAlpha: 1});
    var showLaser = TweenMax.fromTo("#Laser", 1, {x: 100, scaleX:-0.2, scaleY:0, y: 250}, {x:0, y:0, scaleX:1, scaleY: 1, opacity: 1});
    var moveLaserUp = TweenMax.to("#Laser", 0.5, {y: -200});
    var moveLaserDown = TweenMax.to("#Laser", 0.5, {y: 0});
    var retractLaser = TweenMax.to("#Laser", 1, {x: 100, scaleX:-0.2, scaleY:0, y: 250, opacity: 0});
    var showInvestorSigning = TweenMax.to(".investorSigningLine", 0.25, {autoAlpha: 1});
    var showInvestorSig = TweenMax.to("#InvestorSig", 0.5, {autoAlpha: 0.7});
    var sendInvestorSig = TweenMax.to("#InvestorSig", 1, {x: -150, y: -90});
    var showProducerSig = TweenMax.to("#ProducerSig", 0.5, {autoAlpha: 0.7});
    var sendBothSigs = TweenMax.to(".offContractSig", 0.8, {x: 100, autoAlpha: 0, ease: Power2.easeOut});
    var showSigsOnProposal = TweenMax.to(".contractSig", 0.25, {autoAlpha: 1});

    var step2timeline = new TimelineMax();

    step2timeline
        .add(hideProducerBroadcast)
        .add(zoomOutToInvestor)
        .add(showInvestor)
        .add(showLaser)
        .add(moveLaserUp)
        .add(moveLaserDown)
        .add(retractLaser)
        .add(showInvestorSigning)
        .add(showInvestorSig)
        .add(sendInvestorSig)
        .add(showProducerSig)
        .add(sendBothSigs)
        .add(showSigsOnProposal);

    new ScrollMagic.Scene({
        triggerElement: "#step2",
        offset: 100,
        reverse: false
    })
    .setTween(step2timeline)
    //.addIndicators({name: "Step 2: Contract Negotiation"})
    .addTo(controller);

    /* Step 3: Signing & Submission */
    var step3timeline = new TimelineMax();
    var hideInvestorSigning = TweenMax.to(".investorSigningLine", 0.25, {autoAlpha: 0});
    var showHub = TweenMax.to("#Hub", 0.5, {autoAlpha: 1, display: "block"});
    var showHubSig = TweenMax.to("#HubSig", 0.5, {autoAlpha: 1});
    var sendHubSig = TweenMax.to("#HubSig", 0.75, {autoAlpha: 0, x: 80, y: -20});
    var showHubSigOnProposal = TweenMax.to("#HubSig_contract", 0.25, {autoAlpha: 1});

    step3timeline
        .add(hideInvestorSigning)
        .add(showHub)
        .add(showHubSig)
        .add(sendHubSig)
        .add(showHubSigOnProposal);

    new ScrollMagic.Scene({
        triggerElement: "#step3",
        offset: 100,
        reverse: false
    })
    .setTween(step3timeline)
	//.addIndicators({name: "Step 3: Signing & Submission"})
	.addTo(controller);


    /* Step 4: Fund Transfer & Disbursement */
    var step4timeline = new TimelineMax();

    var zoomInOnInvestor = TweenMax.to("#scene", 0.5, { attr: { viewBox: "180 150 290 340" } });
    var showInvestorCoin = TweenMax.to("#ToplCoin_i", 0.25, {autoAlpha: 1});
    var showSafe = TweenMax.to("#SafeBox", 0.25, {autoAlpha: 1});
    var moveInvestorCoinIntoSafe = TweenMax.to("#ToplCoin_i", 0.5, {y: -80, autoAlpha: 0});
    var resetView = TweenMax.to("#scene", 0.5, {attr:{ viewBox: "103.167 -50 339.302 536.125" }});
    // "approved"?

    step4timeline
        .add(zoomInOnInvestor)
        .add(showInvestorCoin)
        .add(showSafe)
        .add(moveInvestorCoinIntoSafe)
        .add(resetView);


    new ScrollMagic.Scene({
        triggerElement: "#step4",
        offset: 100,
        reverse: false
    })
    .setTween(step4timeline)
	//.addIndicators({name: "Step 4: Fund Transfer & Disbursement"})
	.addTo(controller);


    /* Step 5: Commodity Delivery */
    var zoomInToProducer = TweenMax.to("#scene", 0.5, {attr:{ viewBox: "53.167 100 339.302 336.125" }});

    new ScrollMagic.Scene({
        triggerElement: "#step5",
        offset:100,
        reverse: true
    })
    .setTween(zoomInToProducer)
    .addTo(controller);

    var step5timeline = new TimelineMax({repeat: -1});

    var showGoods = TweenMax.to("#box", 0.25, {autoAlpha: 1});
    var showReceiptOfGoods = TweenMax.to("#box", 1.5, {x:110, y: 65});
    var hideGoods = TweenMax.to("#box", 0.25, {autoAlpha: 0});

    step5timeline
        .add(showGoods)
        .add(showReceiptOfGoods)
        .add(hideGoods);

    new ScrollMagic.Scene({
        triggerElement: "#step5",
        offset: 100,
        reverse: false
    })
    .setTween(step5timeline)
    //.addIndicators({name: "Step 5: Commodity Delivery"})
    .addTo(controller);


    /* Step 6: Contract Fulfillment & Payment */
    var step6timeline = new TimelineMax();

    var zoomOutAll = TweenMax.to("#scene", 0.5, {attr:{ viewBox: "103.167 -50 339.302 536.125" }});
    var showCoins = TweenMax.to(".coin", 0.5, {autoAlpha: 1});
    var moveInvestorCoin = TweenMax.to("#ToplCoin_i", 0.5, {y:0});
    var hideSafe = TweenMax.to("#SafeBox", 0.25, {autoAlpha: 0});
    var showReputationGain = TweenMax.to(".reputationGain", 1, {autoAlpha:1});
    var showReputationCaption = TweenMax.to(".reputationCaption", 0.5, {autoAlpha:1});
    var moveReputationGain = TweenMax.to(".reputationGain", 1, {autoAlpha: 0.85, y: -10, repeat: -1, yoyo: true});

    step6timeline
        .add(zoomOutAll)
        .add(hideGoods)
        .add(showCoins)
        .add(moveInvestorCoin)
        .add(hideSafe)
        .add(showReputationGain)
        .add(showReputationCaption)
        .add(moveReputationGain);

    new ScrollMagic.Scene({
        triggerElement: "#step6",
        offset: 100,
        reverse: false
    })
    .setTween(step6timeline)
    .on("enter", function(){
        step5timeline.pause();
    })
    //.addIndicators({name: "Step 6: Contract Fulfillment & Payment"})
    .addTo(controller);

    var containerScene = new ScrollMagic.Scene({
        triggerElement: '#step1',
        offset: "400"
    })
    .setPin('#block')
    //.addIndicators({name: "Pin Starts"})
    .addTo(controller);
});