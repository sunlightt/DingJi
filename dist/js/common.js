
//设置根字节大小
document.documentElement.style.fontSize=document.documentElement.clientWidth*2/7.5+'px';

window.onresize=function(){
    document.documentElement.style.fontSize=document.documentElement.clientWidth*2/7.5+'px';
}

create_uuid();
function create_uuid(){
	
	if(!window.localStorage.getItem('uuid')){
		
	    var date=new Date();
	    
	    var time_str=date.getTime().toString();
	    
	    var uuid=time_str+create_math_random().toString();
	    
        window.localStorage.setItem('uuid',uuid);		
	}
	
	
}

//随机创建三位数
function create_math_random(){
	var rand = "";
	for(var i = 0; i < 3; i++){
	    var r = Math.floor(Math.random() * 10);
	    rand += r;
	}
	return rand;
}
