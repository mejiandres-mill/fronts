$(document).ready(function() {
    
	var number = Math.floor(Math.random() * 3) + 1 ;
	if(number == 1)
	{
		$('#PAG-2').addClass('hidden');
		$('#PAG-3').addClass('hidden');
	}
	if(number == 2)
	{
		$('#PAG-1').addClass('hidden');
		$('#PAG-3').addClass('hidden');
	}
	if(number == 3)
	{
		$('#PAG-1').addClass('hidden');
		$('#PAG-2').addClass('hidden');
	}	
	
	$('#slider-3').scroll(function(){ alert('me scrolleó!')});
});

$(document).ready(function() {
    
	var number = Math.floor(Math.random() * 3) + 1 ;

	if(number == 1)
	{
		$('#PAG-4').addClass('hidden');
		$('#PAG-5').addClass('hidden');
	}
	if(number == 2)
	{
		$('#PAG-5').addClass('hidden');
		$('#PAG-6').addClass('hidden');
	}
	if(number == 3)
	{
		$('#PAG-4').addClass('hidden');
		$('#PAG-6').addClass('hidden');
	}

	$('#slider-3').scroll(function(){ alert('me scrolleó!')});
});
