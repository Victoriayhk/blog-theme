function clickImg2Link(i) {
	$('.p' + i).click(function() {
		var link = $('#link').find('.p' + i).find('h1').find('a').attr('href');
		if (link) {
			window.location.href = link;
		}
	});
}

$(window).ready(function() {
	for (var i = 1; i <= 7; i++) {
		clickImg2Link(i);
	}
});