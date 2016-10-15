// JavaScript Document

//缓冲运动
function startMove(obj,json,fn){
   clearInterval(obj.timer);//定时器加在obj上，避免不同物体互相干扰
   var iCur = 0;
   var speed = 0;
   
   obj.timer = setInterval(function(){
	   //定时器每动一下，就要把所有要运动的属性都推进1次
	   for(var attr in json){
		    //应该在所有属性均到达后，目标再停止定时器
			var target = json[attr];
			var btn = true; 
			  
			if(attr == 'opacity'){//透明度
				iCur = Math.round(css(obj,'opacity')*100);
			}else{//其他属性
				 iCur = parseInt(css(obj,attr));  
			}
			
			speed = (target - iCur)*0.2;
			speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
			   
			if(iCur != target){
				btn = false; 
				if(attr == 'opacity'){
				  obj.style.opacity = (iCur + speed)/100;
				  obj.style.opacity = 'alpha(opacity='+(iCur + speed)+')';
				}else{
				  obj.style[attr] = iCur + speed +'px';
				}
			} 
	  }
	  //在for in循环外面，判断各个属性是否到达目标点
	  if(btn){
	       clearInterval(obj.timer);
		   fn&&fn.call(obj); //改变函数内部this指向，仍指向上次运动结束的物体
	  }
	   
   },30);
}

function css(obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	}else{
		return getComputedStyle(obj,false)[attr];
	}
}  