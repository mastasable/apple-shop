$(document).ready(function  () {
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
});