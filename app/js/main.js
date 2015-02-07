$(document).ready(function  () {
	
	//acordeon

	$('.acordion-trigger').on('click', function  (e) {
		e.preventDefault();

		var $this = $(this),
			item = $this.closest('.acordion-item'),
			list = $this.closest('.acordion-list'),
			items = list.find('.acordion-item'),
			content = item.find('.acordion-inner'),
			otherContent = list.find('.acordion-inner'),
			otherLink = list.find('.acordion-trigger'),
			duration = 300;

			if(!item.hasClass('active')){
				items.removeClass('active');
				otherLink.removeClass('active');
				item.addClass('active');

				otherContent.stop(true, true).slideUp(duration);
				content.stop(true, true).slideDown(duration);
				$this.addClass('active');
			} else {
				content.stop(true, true).slideUp(duration);
				item.removeClass('active');
				$this.removeClass('active');
			}
	});

	// view-change

	$('#showblock').on('change', function(){
		var $this = $(this),
			list = $('.b-products__body'),
			view = $this.val(),
			gridVisible=$('.grid-visible');

		if (view === 'cell'){
			list.addClass('b-products__body--vertical');
			gridVisible.css('display', 'block');
		}

		if(view === 'lines'){
			list.removeClass('b-products__body--vertical');
			gridVisible.css('display', 'none');
		}
	});
});