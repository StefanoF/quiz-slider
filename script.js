$(function() {

	$('#content-list').children('li#1').attr('class','actual');
	$('#progress-bar-list').children('li#1').attr('class','actualNumber');

	var actualHeight = $('.actual').height();

	$('#progress-bar-list li').click(function(){
		var firstLi=$('#content-list').children('li#1');
		var nextLi=$('#content-list').children('li#'+$(this).attr('id'));
		var nextId=$('#content-list').children('li#'+$(this).attr('id')).attr('id');
		var altezza = -(nextId-1)*actualHeight;
		var totalComplete = $('.completed').length;

		if($(this).attr('id')==$('.actual').attr('id') || $(this).attr('id')>totalComplete+1){
			return
		}

		firstLi.stop(true, false).animate({
			marginTop: altezza			
		}, 500);

		changeClass($('.actualNumber'), $(this), $('.actual'), nextLi);
	});

	$('.submit').click(function(){
		var firstLi=$('#content-list').children('li#1');
		var nextId=parseInt($(this).parents('li').prop('id'))+1;
		var altezza = -(nextId-1)*actualHeight;
		var totalLi=$('#content-list').children('li').nextAll().length+1;

		if($('.actual').attr('id')==totalLi){
			$('.actualNumber').addClass('completed');
			return
		}
		
		firstLi.stop(true, false).animate({
			marginTop: altezza			
		}, 500);

		$('.actualNumber').addClass('completed');

		changeClass($('.actualNumber'), $('#progress-bar-list').children('li#'+nextId), $('.actual'), $('#content-list').children('li#'+nextId));
	});

});

function changeClass(classNumber, thisNumber, classLi, nextLi){
	classNumber.removeClass('actualNumber');
	thisNumber.addClass('actualNumber');

	classLi.removeClass('actual');
	nextLi.addClass('actual');
}