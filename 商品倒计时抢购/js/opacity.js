// JavaScript Document


//opacity函数 （透明度变化）



function opacity(obj,speed,alpha,target,endFn){
	 clearInterval(timer);
	 var timer = setInterval(function(){
		
		/* if(target>alpha){
		    speed = speed;	
			  
		}else{
			speed = -speed;
			
		}*/
		
		/*target>alpha?speed:-speed;*/
		
		
		if(alpha <= target){
			clearInterval(timer);
			endFn&&endFn(); //回调函数判断
		}else{
		    alpha = alpha + speed;
			obj.style.filter = 'alpha(opacity='+alpha+')';
			obj.style.opacity = alpha/100;
			document.title = alpha;	
		}
	},80) 
	}
  