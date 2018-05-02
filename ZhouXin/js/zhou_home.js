$(function(){
//	var aa = getStrFromNet("12")
//	console.log(aa)
	
	$("#adddoctor").on("click",clickAddDoctor);
    $("body").on("click",".ui-block-d",clickdoctor)
})
function clickAddDoctor(){
	var fir = $("#adddoctor");
	var div = $("<div>").addClass("ui-block-d");
	fir.before(div);
	var imgs = $("<div>").addClass("img").appendTo(div)
	$("<img>").attr("src","img/pdimg1.png").appendTo(imgs);
	$("<h3>").text("新加的").addClass("#doctor_my h3").appendTo(div);
	$("<p>").text("主治医生").addClass("#doctor_my p").appendTo(div);
//	$("#doctor_my").trigger("creat");
}
function clickdoctor(){
	$(this).remove();
}
