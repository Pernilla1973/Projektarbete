$(document).ready(function () {

/*Döljer element när sidan laddas*/
	$(".link").hide();
	
	$(".instructions").hide();
	
	
/*Animationer vid musingång*/
	
	$("#wrapper1").mouseenter(function () {
		$("#wrapper1").animate({
			width: "100px",
			height: "100px",
			top: "-25px",
			left: "-25px",
			marginBottom: "0px"
		}, 500);
		$("#centre1").fadeOut(500);
		$("#link1a").fadeIn(1000);
		$("#link1b").fadeIn(1000);
		$("#instructions1").fadeIn(250);
	});
	
	$("#wrapper2").mouseenter(function () {
		$("#wrapper2").animate({
			width: "100px",
			height: "100px",
			top: "-25px",
			left: "-25px",
			marginBottom: "0px"
		}, 500);
		$("#centre2").fadeOut(500);
		$("#link2").fadeIn(1000);
		$("#instructions2").fadeIn(250);
	});

	$("#wrapper3").mouseenter(function () {
		$("#wrapper3").animate({
			width: "100px",
			height: "100px",
			top: "-25px",
			left: "-25px",
			marginBottom: "0px"
		}, 500);
		$("#centre3").fadeOut(500);
		$("#link3").fadeIn(1000);
		$("#instructions3").fadeIn(250);
	});
	
/*Animationer vid musutgång*/
	
	$("#wrapper1").mouseleave(function () {
		$("#wrapper1").animate({
			width: "35px",
			height: "35px",
			top: "0px",
			left: "0px",
			marginBottom: "65px"
		}, 500);
		$("#centre1").fadeIn(500);
		$("#link1a").fadeOut(250);
		$("#link1b").fadeOut(250);
		$("#instructions1").fadeOut(250);
	});
	
	$("#wrapper2").mouseleave(function () {
		$("#wrapper2").animate({
			width: "35px",
			height: "35px",
			top: "0px",
			left: "0px",
			marginBottom: "65px"
		}, 500);
		$("#centre2").fadeIn(500);
		$("#link2").fadeOut(250);
		$("#instructions2").fadeOut(250);
	});
	
	$("#wrapper3").mouseleave(function () {
		$("#wrapper3").animate({
			width: "35px",
			height: "35px",
			top: "0px",
			left: "0px",
			marginBottom: "65px"
		}, 500);
		$("#centre3").fadeIn(500);
		$("#link3").fadeOut(250);
		$("#instructions3").fadeOut(250);
	});
	
	$("#snowwhite").click(function () {
		$("body").css({"background-image": "url(snowbg.png)", "background-size": "cover"});
	});
	
	$("#toad").click(function () {
		$("body").css({"background-image": "url(toadbg.png)", "background-size": "cover"});
	});
    
	$("#rosered").click(function () {
		$("body").css({"background-image": "url(rosebg.png)", "background-size": "cover"});
	});
	
});