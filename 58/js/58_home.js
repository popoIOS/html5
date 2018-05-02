  var n = 0;
  $(function(){
    	    	//http://www.yanketong.com:90/api/Hospital/GetMenuDept
//  	    	http://www.yanketong.com:90/api/Hospital/GetNews
    	   requestList();
    	   requestScImg();
    	   $(".ui-block-b").on("click",pageChange);
 })

  function showFirst(){
	$("#content_img li:not(:first-child)").hide();
	$("#content_sign li:first-child").css("background-color","red");
	$("#content_sign li").click(function(){
		var index = $(this).text();
		n = index;
		$("#content_img li").fadeOut(500);
		$("#content_img li").eq(index).fadeIn(500)
		$("#content_sign li").css("background-color","darkgray");
		$("#content_sign li").eq(index).css("background-color","red");
	})
	var t = setInterval("showimge()",2000);
}

  function showimge(){
  	n = n >= 3 ? 0 : ++n;
  	$("#content_sign li").eq(n).trigger("click")
  }

  function requestScImg(){
  	$.ajax({
  		type:"post",
  		data:{ShufflingId:4},
  		url:"http://www.yanketong.com:90/api/Patient/GetSiteShuffling",
  		async:true,
  		success:function(data){
  			var row = data.value;
  			$.each(row, function(index,item) {
  				var address = "http://www.yanketong.com:90"+item.address;
				var liimg = $("<li>").appendTo("#content_img ul");
				$("<img>").attr("src",address).appendTo(liimg);
				$("<li>").text(index).appendTo("#content_sign ul");
  			});
  			 showFirst();
  		},
  		error:function(e){
  			alert("获取轮播图失败")
  		}
  	});
  }
  function requestList(){
  	 $.ajax({
    	    	   	type:"post",
    	    	   	url:"http://www.yanketong.com:90/api/Hospital/GetNews",
    	    	   	data:{rows:3},
    	    	   	async:true,
    	    	   	success:function(data){
    	    	   		var row = data.value.rows;
    	    	   		$.each(row, function(index,item) {
    	    	   			var li = $("<li>").appendTo($("#listcell ul"))
    	    	   			$("<img>").attr("src",item.picFileName).appendTo(li);
    	    	   			$("<p>").text(item.newsTitle).appendTo(li);
    	    	   			$("#listcell ul").listview("refresh");
    	    	   		});
    	    	   	},
    	    	   	error:function(e,XMLHttpRequest){
    	    	   		alert("网络请求失败")
    	    	   	},
    	    	   });
  }
  function pageChange(){
//	if(window.localStorage){
//		sessionStorage.setItem("id","6");
//	}
//	 $.mobile.loadPage("58_section.html",{
//     transition:"slidefade",
//     reloadPage:false
//   })
var ind = $(this).index();
window.localStorage.setItem("depId",ind);
window.location.href="58_section.html";

  }
