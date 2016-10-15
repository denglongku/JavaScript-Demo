// JavaScript Document

//简单运动封装


function opacity(obj,speed,target){
   
   var iCur = 0;
   clearInterval(timer);
   var timer = setInterval(function(){
	   
	    iCur = Math.round(css(obj,'opacity')*100);
	 // obj.offsetLeft < target?speed:-speed;
	   
	  if(iCur == target){
		  clearInterval(timer);
	  }else{
		  obj.style.opacity = (iCur + speed)/100;
		  obj.style.opacity = 'alpha(opacity='+(iCur + speed)+')';
	  }
   },30);
	
}

//谷歌浏览器获取的opacity为小数
function css(obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	}else{
		return getComputedStyle(obj,false)[attr];
	}
}