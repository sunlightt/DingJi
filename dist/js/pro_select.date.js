

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


//获取一个月的总天数
function getCountDays() {
        var curDate = new Date();
        /* 获取当前月份 */
        var curMonth = curDate.getMonth();
       /*  生成实际的月份: 由于curMonth会比实际月份小1, 故需加1 */
       curDate.setMonth(curMonth + 1);
       /* 将日期设置为0, 这里为什么要这样设置, 我不知道原因, 这是从网上学来的 */
       curDate.setDate(0);
       /* 返回当月的天数 */
       console.log(curDate.getDate());
       return curDate.getDate();
}
      // 返回31



//生成日期
get_date();
function get_date(){
	
    var date=null;
    //总天数
    var day_num=getCountDays();
    max_current_index=getCountDays();
    
    var curDate = new Date();
    /* 获取当前年 */
    var curyear = curDate.getFullYear();
    /* 获取当前月份 */
    var curMonth = curDate.getMonth()+1;
    /* 获取当前日期 */
    var curday = curDate.getDate();
    
    for(var i=0;i<day_num;i++){
        let week=getMyDay(new Date(curyear+'-'+curMonth+'-'+(i+1)));
    	date+='<li><strong>'+curMonth+'月'+(i+1)+'日</strong><em>'+week+'</em></li>';
    }
    $('.date_msg .date_list').append(date);
    $('.date_msg .date_list').css({'width':100*day_num});
}

//getMyDay(new Date("2018-2-2"));
//getMyDay(date)
function getMyDay(date){
	var week;
	var curDate = new Date();
	if(date.getDay()==0) week="星期日"
	if(date.getDay()==1) week="星期一"
	if(date.getDay()==2) week="星期二"
	if(date.getDay()==3) week="星期三"
	if(date.getDay()==4) week="星期四"
	if(date.getDay()==5) week="星期五"
	if(date.getDay()==6) week="星期六"
	if(date.getDate()==curDate.getDate()) week="今天"
	return week;
}


//手指滑动
var current_index=0;
var max_current_index=getCountDays();
touch_slide({
	obj:'.date_msg .date_list',
	distance:100,
	current_index:0
});
function touch_slide(options){
	
	var obj=options.obj;
//	var dir=options.dir;
	var distance=options.distance;
	var current_index=options.current_index;
	
	var start_x=0 , start_y=0;
	var end_x=0 , end_y=0;
	var current_index=current_index;
	
	if(!current_index){
		current_index=0;
	}
	$(obj).get(0).addEventListener('touchstart',function(ev){
		var ev=ev || window.event;
		var touch=ev.touches[0];
		start_x=touch.pageX;
		start_y=touch.pageY;
	},false);
	$(obj).get(0).addEventListener('touchmove',function(ev){
		var ev=ev || window.event;
		var touch=ev.touches[0];
		end_x=touch.pageX;
		end_y=touch.pageY;
	},false);
	
	$(obj).get(0).addEventListener('touchend',function(ev){
		if(Math.abs(end_x-start_x)>50){
			if(end_x-start_x>0){
				if(current_index==0){
					$(obj).css("transform","translate(-"+(0)+"px,0)");
				}else{
					current_index--;
					$(obj).css("transform","translate(-"+(distance*current_index)+"px,0)");
				}
			}else{
				console.log(current_index==max_current_index);
				if(current_index==max_current_index){
					$(obj).css("transform","translate(-"+(distance*current_index)+"px,0)");
				}else{
					current_index++;
					var scroll=-current_index*distance;
					$(obj).css("transform","translate(-"+(distance*current_index)+"px,0)");
				}
			}
		}
		console.log(current_index,distance );
	},false);
	
}
