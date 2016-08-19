window.onload = function (argument) {
	// body...

	var btnAdd = document.querySelector('#wrapper div.web_add a');
	var aBtnEdit = document.querySelectorAll('#wrapper div.web_show ul li span.edit');
	var oUl = document.querySelector('#wrapper div.web_show ul');
	var oWebName = document.getElementById('web_name');
	var oWebURL = document.getElementById('web_url');
	var oWebShow = document.querySelector('#wrapper div.web_show');
	//全局变量,用来存储正在被编辑的li中的a标签
	var oEditingAnchor = null;
	EventUtil.addEvent(btnAdd,'click',addWeb);
	EventUtil.addEvent(oWebShow,'click',webShowHandler);

	function addWeb(){
		if(this.text == '添加'){
			var newItem = document.createElement('li');
			newItem.innerHTML = '<a href="'+inputEscaping(oWebURL.value)+'" title="">'+inputEscaping(oWebName.value)+'</a>'+
			'<span class="edit"></span>'+
			'<span class="delete"></span>';
			oUl.appendChild(newItem);
		}
		else if(this.text == '修改'){
			oEditingAnchor.href = oWebURL.value;
			oEditingAnchor.text = oWebName.value;
			oWebName.value = '';
			oWebURL.value = '';
			oWebName.focus();
			oEditingAnchor.parentNode.style.backgroundColor = '#fff';
			this.text ='添加';

		}


	}
	function webShowHandler(event){
		var tar = event.target;
		if(tar.className.trim() == 'edit'){
			var anchor = tar.previousElementSibling;
			var href = anchor.href;
			var text = anchor.text;
			// console.log('edit '+value);
			oWebName.value =  text;
			oWebURL.value = href;
			btnAdd.text = '修改';

			if(oEditingAnchor){
				
				oEditingAnchor.parentNode.backgroundColor = '#fff';
			}
			oEditingAnchor = anchor;
			oEditingAnchor.parentNode.style.backgroundColor = "#E7F6CD";
			oWebName.focus();

		}
		else if(tar.className.trim() == 'delete'){
			tar.parentNode.parentNode.removeChild(tar.parentNode);
		}
	}



}
//input输入进来的内容进行转义,防止注入攻击
function inputEscaping(str){
	return str.replace(/</g, '&lt').replace(/>/g, '&gt');
}

EventUtil = {
	'addEvent':function(elem,event,handler){
		if(elem.addEventListener){
			elem.addEventListener(event,handler,false);
		}
		else{
			elem['on'+event] = handler;
		}
	}, 
};

