$(function(){
	var  ind = window.localStorage.getItem("depId");
	request(ind+1);
	window.localStorage.removeItem("depId");
})

function request(id){
	$.ajax({
		type:"post",
		data:{DeptId:id},
		url:"http://www.yanketong.com:90/api/Patient/GetSymptoms",
		async:true,
		success:function(data){
			var row = data.value;
			$.each(row, function(index,item) {
                 addLi(index,item);
			});
		},
		error:function(e){
			alert("获取数据失败")
		}
	});
}
function addLi(index,item){
	console.log(item.name);
	var ul = $("#deaseList ul");
	var li = $("<li>").appendTo(ul);
//	var div = $("<div>").appendTo(li);
	$("<p>").text(item.name).appendTo(li);
	$("#deaseList ul").listview("refresh");
}
