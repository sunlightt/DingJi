
//tab 切换
tab_item();
function tab_item(){
	$('.order_list ul').hide();
	$('.order_list ul').eq(0).show();
	$('.tab li').each(function(i,item){
		$(this).on('click',function(){
			$(this).addClass('active').siblings().removeClass('active');
			$('.order_list ul').hide();
			$('.order_list ul').eq(i).show();
			
		});
	});
}
