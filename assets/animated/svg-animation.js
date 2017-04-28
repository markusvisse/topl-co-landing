// Our code goes here

$(window).load(function() {
    var $e = $("#e")
    $e.replaceWith($($e[0].contentDocument.documentElement).clone());

    function pathPrepare ($el) {
        var lineLength = $el[0].getTotalLength();
        $el.css("stroke-dasharray", lineLength);
        $el.css("stroke-dashoffset", lineLength);
    }

    function calcLength ($el) {
        return $el[0].getTotalLength()
    }
    //var $Group2 = $("path#_x3C_Group1_x3E_")

    // pathPrepare($Group2)
    $.fn.getPath = function () {
        if (this.length != 1) throw 'Requires one element.';

        var path, node = this;
        while (node.length) {
            var realNode = node[0], name = realNode.localName;
            if (!name) break;
            name = name.toLowerCase();

            var parent = node.parent();

            var siblings = parent.children(name);
            if (siblings.length > 1) {
                name += ':eq(' + siblings.index(realNode) + ')';
            }

            path = name + (path ? '>' + path : '');
            node = parent;
        }

        return path;
    };
    var controller = new ScrollMagic.Controller();
    var agreementScene = new ScrollMagic.Scene({
        triggerElement: "#block", offset: 500
    })
        .setClassToggle("#lower0", "zap")
        .addIndicators({name: "1 - add a class"}) // add indicators (requires plugin)
        .addTo(controller);

    var producerScene = new ScrollMagic.Scene({
        triggerElement: "#block", offset: 500
    })
        .setClassToggle("#Group2", "zap1")
        .addIndicators({name: "2 - add a class"}) // add indicators (requires plugin)
        .addTo(controller);

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