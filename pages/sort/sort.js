window.onload = function (){
	unit_test();

};
function unit_test(){
	var nums = gen_random_nums(10);
	// init_nums_graph(nums);
	// console.log(nums);
	console.log(bubble_sort(nums))
}


function gen_random_nums(n,min,max){
	if(!n){
		n = 30;
	}
	if (!min)
	{
		min = 0;
	}
	if(!max){
		max = 99;
	}
	var nums = [];
	for(var i=0; i<n; i++){
		nums.push(min + parseInt(Math.random()*(max-min)));
	}
	return nums;
}

function bubble_sort(nums){
	var max = nums.length;
	var temp = null;
	for(var i=0;i<max-1;i++)
	{
		for(var j=0;j<max-i-1;j++)
		{
			if(nums[j] > nums[j+1]){
				temp = nums[j];
				nums[j] = nums[j+1];
				nums[j+1] = temp;
				// cnt++;
			}
				// console.log(nums);
		}
	}
	return nums;
}

function bubble_sort2(nums){
	var max = nums.length;
	var temp = null;
	for(var i=0;i<max-1;i++)
	{
		var swap_cnt = 0;
		for(var j=0;j<max-i-1;j++)
		{
			if(nums[j] > nums[j+1]){
				temp = nums[j];
				nums[j] = nums[j+1];
				nums[j+1] = temp;
				swap_cnt++;
			}
			// console.log(nums);
		}
		if(swap_cnt == 0)
		{
			return nums;
		}
	}
	return nums;
}


function show_arr_status(nums){
	console.log(nums);
	// var oLis =document.querySelectorAll('#wrapper ul li.bar');
	// for(var j=0;j<oLis.length;j++){
	// 	oLis[j].style.width = nums[j]*4+'px';
	// 	oLis[j].innerHTML = nums[j];
	// }
 
}

function init_nums_graph(nums){
	var oUl = document.querySelector('#wrapper ul');
	var inner = '';
	for(var i=0; i<nums.length; i++){
		inner += "<li class='bar'></li>";
	}
	oUl.innerHTML = inner;
	show_arr_status(nums);
}


