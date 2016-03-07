// $(document).ready(function(){
//     $('login').fadeIn('slow');
//     });

$(document).on('click', '.wantstofly',function(){
	
	$(this).addClass('bounce');
	$(this).one('animationend', function (event) {
		$(this).removeClass('bounce');
	});
	
});




