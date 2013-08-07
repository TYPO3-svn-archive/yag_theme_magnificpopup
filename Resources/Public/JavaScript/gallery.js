jQuery(document).ready(function($) {
	$('.tx-yag-theme-magnificpopup-imagecontainer').each(function() {
		$(this).magnificPopup({
			delegate: '.magnificpopup',
			type: 'image',
			tLoading: 'Loading image #%curr%...',
			mainClass: 'mfp-img-mobile',
			gallery: {
				enabled: true,
				navigateByImgClick: true,
				preload: [1,2] // Will preload 0 - before current, and 1 after the current image
			},
			image: {
				tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
				titleSrc: 'title'
			}
		});
	});
});