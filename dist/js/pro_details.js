

//选择时间
select_time();
function select_time(){
	
	var select_time_onoff=true;
	$('.replay').on('click',function(){
		
		if(select_time_onoff){
			
			$('.mark').addClass('mark_show');
			$('.replay').css({'zIndex':60});
			
		}else{
			
			$('.mark').removeClass('mark_show');
		}
//		select_time_onoff!=select_time_onoff;
	});
	
}

//关闭时间选择
close_select_time();
function close_select_time(){
	
	$('.select_time .close_btn').on('click',function(){
		
		$('.mark').removeClass('mark_show');
		$('.replay').css({'zIndex':100});
	});
	
	$('.select_time .confirm_btn').on('click',function(){
		
		$('.mark').removeClass('mark_show');
		$('.replay').css({'zIndex':100});
	});
	
}
