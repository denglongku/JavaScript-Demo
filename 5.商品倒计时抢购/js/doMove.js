// JavaScript Document

//doMove函数（上下左右运动）
function doMove(obj,attr,dir,target,endFn){
	dir = parseInt(getStyle(obj,attr))<target?dir:-dir; //判断dir的方向，这样传入的dir参数不需要考虑正负
    clearInterval(timer);
	var timer = setInterval(function(){
	    var speed = parseInt(getStyle(obj,attr))+dir;
		if(speed >target&&dir >0 || speed <target&&dir <0){speed = target;};
		
		obj.style[attr] = speed + 'px';	
		
		if(speed == target){
		   clearInterval(timer);
		   endFn&&endFn(); //回调函数判断	
		}
	},30);
}