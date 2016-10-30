$(document).ready(function(){
	$('#language').change(function(){
		$('#languageimg').find('img:first').attr('src', $('#language option:selected').attr('data-path'));
	});
});