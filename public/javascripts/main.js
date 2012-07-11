// Zack Tillotson
// Change all of the card links to just load into the same page

$(document).ready(function() {

	$('#presentation').css("display", "none");
	i = 1;
	$('div.card').each(function() {
		if(i == 1) {
			$(this).click(function(e) {
				$('#presentation').css("display", "block");
				$('#presentation').load("/challenges/" + $(this).attr('id'));
				$('div.card').remove();
			});
			$(this).text("Show");
		} else {
			$(this).css("display", "none");
		}
		i++;
	});	

});
