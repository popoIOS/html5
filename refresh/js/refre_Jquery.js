var statY,endY,isloading = 0;
$(function(){
	requestmanger();
	$("#refresh_header").hide();
	$("#refresh_footer").hide();

    $('#listul').on("touchstart",startTouchFunc);
	$('#listul').on("touchmove",endTouchFunc);
})
function showLoadong(){
	$.mobile.loading("show",{
      	text:"加载中...",
		textVisible:true,
		theme:"a",
      	html:""
	})
}
function hideLoading(){
	$.mobile.loading("hide");
}
function requestmanger(e){
	showLoadong();
	$.ajax({
		type:"post",
		data:{
			loginId:"15980859163",
			password:"111111"
		},
		url:"http://www.yanketong.com:90/api/Patient/PatientLogin",
		async:true,
		success:function(data){
			hideLoading();
			if(e){
				isloading = false;
				e.slideUp();
			}
			var co = data.code;
			if(co == -10000){
				console.log("SSSS")
			}else{
				$.each(data.value,function(index,value){
				     console.log(index+"_____________"+value);
				     var li =  $("<li>").addClass("li").appendTo($("#listul"));
				     $("<a>").text(index+"----"+value).appendTo(li);
			    })
				 $("#listul").listview("refresh");
				 $("#listul").trigger("create");
			}
			
		},
		error:function(error){
			if(e){
				e.slideUp();
				isloading = false;
			}
			hideLoading();
			console.log(error+"___");
		}
	});
}
function startTouchFunc(e){
	var t = e.originalEvent.targetTouches[0];
	starY = t.pageY;
}
function endTouchFunc(e){
	var t = e.originalEvent.targetTouches[0];
	endY = t.pageY;
	if ((endY - starY) > 50){
		pullDown($("#refresh_header"))
	}else if((endY - starY) < -50){
		pullUp($('#refresh_footer'));
	}
}
function pullDown(e){
	if ($(document).scrollTop() != 0){
		return;
	}
	if (isloading == false){
		isloading = true;
		e.slideDown(0,function(){
			requestmanger(e);
		});
		$("#listul li").remove();
	}
}
function pullUp(e){
	var  he = $(document).height();
	var sche = $(document).scrollTop();
	console.log(he+"sadasdas"+sche);
	if ((sche - he) <= 0){
		if(isloading == false){
		    isloading = true;
	        e.slideDown(0,function(){
	          	requestmanger(e)
	        });
	        
	    }
	}
	
}
