$(function(){
	$(".extend").on("click",clickConten);
})

function clickConten(){
	var pare = $(this).parent();
	var id = pare.attr("id");
	if (id == "doctor_skill") {
		var obj = $("#doctor_skill_content");
		showOrHiden(obj)
	} else{
		var obj = $("#doctor_relation_content");
		showOrHiden(obj)
	}
}
function showOrHiden(e){
	var hei = e.css("height");
	if(hei == "40px"){
		var h = e.height();
		var hh = e.css('height','auto').height()+"px";
		e.height(h).animate({"height":hh})
	}else{
		e.animate({"height":"40px"});
	}
}
