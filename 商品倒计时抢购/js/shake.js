// JavaScript Document

//shake抖动函数封装

//解决抖动函数未执行结束又再次运行的问题：
//①用全局变量标识函数执行状态：（shaking = false）
var shaking = false;
function shake(obj,attr,endFn){
	if(shaking == true){return;}
	shaking = true;
	
    var pos = parseInt(getStyle(obj,attr));
	var arr = [];
	var num = 0;
	
	//构造数组arr[20,-20,18,-18...,0]
	for(var i=20;i>0;i-=2){arr.push(i,-i);};
	arr.push(0);
	
	clearInterval(obj.shake);
	obj.shake = setInterval(function(){
	   obj.style[attr] = pos + arr[num] + 'px';
	   num++;
	   if(num===arr.length){
		   clearInterval(obj.shake);
		   endFn&&endFn();
		   shaking = false;
		   };	
	},50);
}

//②用销毁函数然后再回复函数的方法组织函数运行
/*function shake(obj,attr,endFn){
	var backup = shake; //备份
	shake = null; //销毁
	
    var pos = parseInt(getStyle(obj,attr));
	var arr = [];
	var num = 0;
	
	//构造数组arr[20,-20,18,-18...,0]
	for(var i=20;i>0;i-=2){arr.push(i,-i);};
	arr.push(0);
	
	clearInterval(obj.shake);
	obj.shake = setInterval(function(){
	   obj.style[attr] = pos + arr[num] + 'px';
	   num++;
	   if(num===arr.length){
		   clearInterval(obj.shake);
		   endFn&&endFn();
		   shake = backup; //抖动结束之后恢复
		   };	
	},50);
}*/