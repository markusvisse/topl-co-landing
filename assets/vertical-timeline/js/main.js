jQuery(document).ready(function($){
	var timelineBlocks = $('.cd-timeline-block'),
		offset = 0.8;

	//hide timeline blocks which are outside the viewport
	hideBlocks(timelineBlocks, offset);

	//on scolling, show/animate timeline blocks when enter the viewport
	$(window).on('scroll', function(){
		(!window.requestAnimationFrame) 
			? setTimeout(function(){ showBlocks(timelineBlocks, offset); }, 100)
			: window.requestAnimationFrame(function(){ showBlocks(timelineBlocks, offset); });
	});

	function hideBlocks(blocks, offset) {
		blocks.each(function(){
			( $(this).offset().top > $(window).scrollTop()+$(window).height()*offset ) && $(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
		});
	}

	function showBlocks(blocks, offset) {
		blocks.each(function(){
			( $(this).offset().top <= $(window).scrollTop()+$(window).height()*offset && $(this).find('.cd-timeline-img').hasClass('is-hidden') ) && $(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
		});
	}

	$('.getMoreInfo').click(function() {

		var that = this;

        $('#mainDescription').fadeOut(function() {

        	$(this).html('');
            var $description = $('#' + that.id + 'Description');
            var $miniProfile = $description.prev();

            //put them up top
			if(window.innerWidth > 767) {
                $('#mainDescription').html($description.clone()[0].outerHTML + $miniProfile.clone()[0].outerHTML).fadeIn();
            } else {

				var $newMiniProfile = $miniProfile.clone();
				var $newDescription = $description.clone();

                $newMiniProfile[0].className = 'col-xs-12';
                $newDescription[0].className = 'col-xs-12 description';

                $('#mainDescription').html($newMiniProfile[0].outerHTML + $newDescription[0].outerHTML).fadeIn();
            }
            $('#mainDescription .description').toggleClass('show');

            $('.miniProfile').show();

            $('#mainDescription .getMoreInfo').text('Less About ' + that.id);
            $('#mainDescription .getMoreInfo').click(function(){
            	$('#mainDescription').fadeOut(function(){
            		$(this).html('');
				});
                $('.miniProfile').show();
			});

            //make these go away
            $miniProfile.fadeToggle();
		});



		/*
		var text = $(this).text();

		if(text.indexOf('More') !== -1) {
            $('#mainDescription ' +).text('Less About ' + this.id);
        } else {
            $(this).text('More About ' + this.id);
        }*/
	})
});