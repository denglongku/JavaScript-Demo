// JavaScript Document


//getStyle函数封装（这两个函数等价）
/*function getStyle(obj,attr){
   	if(obj.currentStyle){
	   return obj.currentStyle[attr];	
	}else{
	   return getComputedStyle(obj)[attr];	
	}
}*/

//getStyle函数封装（这两个函数等价）
function getStyle(obj,attr){
   return obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj)[attr];
}