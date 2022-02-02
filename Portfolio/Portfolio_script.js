/*Функция портфолио*/
var fActive = '';
	function filterColor(color){
		if(fActive != color){
			$('.gallery div').filter('.'+color).slideDown();
			$('.gallery div').filter(':not(.'+color+')').slideUp();
			fActive = color;
		}
	}
 
$('.f-animation').click(function(){ filterColor('animation'); });
$('.f-photography').click(function(){ filterColor('photography'); });
$('.f-web').click(function(){ filterColor('web'); });
$('.f-print').click(function(){ filterColor('print'); });
	 
$('.f-all').click(function(){
	$('div').slideDown();
	fActive = 'all';
});

