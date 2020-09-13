$(document).ready(function() {
	$('#mySubmit').click(function() {
		var email = $('#myEmail').val();
		var text = $('#myText').val();
		var delay = $('#myList').val();
		
		if (email == '') {
			$('#submitError').html('<span style="color: red;">Please complete the form.</span>');
			$('#submitError').show();
		}
		if (text == '') {
			$('#submitError').html('<span style="color: red;">Please complete the form.</span>');
			$('#submitError').show();
		}
		if (text != '' && email != '') {
			$('#submitError').hide();
		}
	});
});