window.onload = function (){
	var oBtn = document.getElementById('wrapper').lastElementChild;
	var aAchor = document.querySelectorAll('#wrapper ol li a');
	var oCommentsList = document.querySelector('#wrapper ol');
	var oTextarea = document.querySelector('#wrapper textarea');
	oTextarea.focus();
	
	unitTest();
	initComment();

	

	EventUtil.addHandler(oBtn,'click',btnClick);
	var aDelAnchor = document.querySelectorAll('#wrapper ol li');
	for(var i=0; i<aDelAnchor.length; i++){
		EventUtil.addHandler(aDelAnchor[i],'click',delCommet);
	}


	function btnClick(){
		var newComment = document.createElement('li');
		if(oTextarea.value){
			var now = new Date();
			newComment.innerHTML ='<span class = "time">'+getDateStr(now)+"</span>"+ oTextarea.value+'<a href="javascript:;">点击删除本条评论</a>';
			oCommentsList.appendChild(newComment);
			EventUtil.addHandler(newComment,'click',delCommet);
			// oTextarea.value = '';

		}


	}
	function delCommet(){
		EventUtil.removeHandler(this,'click',delCommet)
		this.parentNode.removeChild(this);


	}
	function initComment(){
	var htmlStr = ''
	for(var i=0;i<10;i++){
		htmlStr +='<li><span class="time">'+
		getDateStr(getRandomDate())+
		'</span>'+
		getRandomStr()+
		'<a href="javascript:;">点击删除本条评论</a></li>';
		
	}
	oCommentsList.innerHTML = htmlStr;
}

};
function unitTest(){
	for(var i=0;i<99;i++){
		console.log(getRandomStr());
	}
}
function getDateStr(date){
	return date.getFullYear()+'-'+
		   (date.getMonth()+1)+'-'+
		   date.getDate()+' '+
		   date.getHours()+':'+
		   date.getMinutes()+':'+
		   date.getSeconds();
}


EventUtil = {
	'addHandler':function(elem,eventType,handler){
		if(elem.addEventListener){
			elem.addEventListener(eventType,handler,false);
		}
		else{
			elem['on'+eventType.toLowerCase()] = handler;
		}

	},
	'removeHandler':function(elem,eventType,handler){
		if(elem.removeEventListener){
			elem.removeEventListener(eventType,handler,false);
		}
		else{
			elem['on'+eventType.toLowerCase()] = null;
		}		
	}
};
function getRandomDate(){
	var now = new Date();
	return new Date(now.getTime()+1000*randBetween(-864000,864000));

}
function getRandomStr(){
	var pool = "小院闲窗春己深,重帘未卷影沈沈,倚楼无语理瑶琴,远岫出山催薄暮,细风吹雨弄轻阴,梨花欲谢恐难禁,淡荡春光寒食天,玉炉沈水袅残烟,梦回山枕隐花钿,海燕未来人斗草,江梅已过柳生绵,黄昏疏雨湿秋千,髻子伤春慵更梳,晚风庭院落梅初,淡云来往月疏疏,玉鸭薰炉闲瑞脑,朱樱斗帐掩流苏,通犀还解辟寒无".split(',');
	var arr = [];
	for(var i=0;i<randBetween(1,10);i++){
		arr.push( pool[randBetween(0,pool.length-1)]);
	}
	return arr.join('，')+'。';
}
function randBetween(start,end){
	return start+parseInt(Math.random()*(end-start));
}
//定义一个
function Comment(time,content){
	this.time = time? time:getRandomDate();
	this.content = content? content:getRandomStr();

	this.prototype.toHtmlStr = function(){
		return '<li><span class="time">'+
				getDateStr(this.time)+
				'</span>'+
				this.content+
				'<a href="javascript:;">点击删除本条评论</a></li>';
	};
}

