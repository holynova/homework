window.onload = function (){
	// unit_test();
	var oBox = document.getElementById('box');
	var nums = gen_random_nums(10);
	// bubble_sort(nums);
	// bubble_sort2(nums);
	console.log(nums);
	// console.log('result = '+insert_sort(nums));	
	console.log('result = '+select_sort(nums));	

	// show_process(oBox,a_sort_process);

};
//二维全局数组,用来存储排序的每个过程
var a_sort_process = [];

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
	a_sort_process = [];
	a_sort_process.push(nums.slice());
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
				// var temp = nums;
				a_sort_process.push(nums.slice());
				// console.log(nums);
				// cnt++;
			}
				// console.log(nums);
		}
	}
	return nums;
}

function bubble_sort2(nums){
	a_sort_process = [];
	a_sort_process.push(nums.slice());
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
				a_sort_process.push(nums.slice());
				// console.log(nums);
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
//插入排序
function insert_sort (nums) {
	for(var i=1; i<nums.length; i++){
		for(var j=0; j<=i-1; j++){
			if(nums[i] <= nums[j]){
				var temp = nums[i];
				for(var cnt=i;cnt>=j;cnt--){
					nums[cnt] = nums[cnt-1];
				}
				nums[j] = temp;
				console.log(nums);
				break;
			}
		}
	}
	return nums;
}
function select_sort (nums){
	for(var i=0;i<nums.length;i++){
		//从i到nums.length找最小值
		var min = nums[i];
		var min_index = i;
		for(var j=i+1;j<nums.length;j++){
			if(nums[j]<min){
				min = nums[j];
				min_index = j;
			}
		}
		for(var cnt=min_index;cnt>=i+1;cnt--){
			nums[cnt] = nums[cnt-1];
		}
		nums[i] = min;
		console.log(nums);
	}
	return nums;
}
function quick_sort(nums){
	
}



function show_arr_status(nums){
	console.log(nums);
	var oLis =document.querySelectorAll('#wrapper ul li.bar');
	for(var j=0;j<oLis.length;j++){
		oLis[j].style.width = nums[j]*4+'px';
		oLis[j].innerHTML = nums[j];
	}
 
}

function show_process(parent_elem,arr_process){
	arr_process = a_sort_process;
	var html_str = '<ul>';
	for(var i=0; i<arr_process.length; i++){
		// var nums = arr_process[i];
		var li_str = '<li><span>'+i+'</span>';

		for(j=0;j<arr_process[i].length; j++){
			li_str +="<span>"+arr_process[i][j]+'</span>';
		}
		li_str += '</li>';
		html_str += li_str;

	}
	html_str +='</ul>';
	parent_elem.innerHTML = html_str;
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


