'use strict';
$(document).ready(function () {
	$("#kwadrat").css({
		"background-color": "red"
		, "width": "200px"
		, "height": "200px"
	});
	$("#klik").click(function () {
		$("#kwadrat").animate({
			"margin-left": "100px"
			, "width": "100px"
			, "height": "100px"
		}, 3000, function () {
			$("#kwadrat").animate({
				"background-color": "blue"
			}, 5000, function () {
				$("#kwadrat").append("<h2>Gratulacje, animacja zakończona</h2>");
			});
		});
	});
});