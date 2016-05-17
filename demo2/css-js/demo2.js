$(document).ready(function () {

/*Döljer element när sidan laddas*/
	
	$(".link").hide();
	
	$(".instructions").hide();
	
	
/*Animationer vid musingång*/
	
	$("#frame1").mouseenter(function () {
		/*$("#frame1").animate({
			height: "150px",
			width: "150px",
			top: "-25px",
			left: "-25px"
		}, 500);*/
		
		$("#wrapper1").animate({
			width: "100px",
			height: "100px",
			top: "-25px",
			left: "-25px"
		}, 500);
		$("#centre1").fadeOut(500);
		$("#link1a").fadeIn(1000);
		$("#link1b").fadeIn(1000);
		$("#instructions1").fadeIn(250);
	});
	
	$("#frame2").mouseenter(function () {
		/*$("#frame2").animate({
			height: "150px",
			width: "150px",
			top: "-25px",
			left: "-25px"
		}, 500);*/
		
		$("#wrapper2").animate({
			width: "100px",
			height: "100px",
			top: "-25px",
			left: "-25px"
		}, 500);
		$("#centre2").fadeOut(500);
		$("#link2").fadeIn(1000);
		$("#instructions2").fadeIn(250);
	});

	$("#frame3").mouseenter(function () {
		/*$("#frame3").animate({
			height: "150px",
			width: "150px",
			top: "-25px",
			left: "-25px"
		}, 500);*/
		
		$("#wrapper3").animate({
			width: "100px",
			height: "100px",
			top: "-25px",
			left: "-25px"
		}, 500);
		$("#centre3").fadeOut(500);
		$("#link3").fadeIn(1000);
		$("#instructions3").fadeIn(250);
	});
	
/*Animationer vid musutgång*/
	
	$("#frame1").mouseleave(function () {
		/*$("#frame1").animate({
			height: "100px",
			width: "100px",
			top: "0px",
			left: "0px"
		});*/
		
		$("#wrapper1").animate({
			width: "35px",
			height: "35px",
			top: "0px",
			left: "0px"
		}, 500);
		$("#centre1").fadeIn(500);
		$("#link1a").fadeOut(250);
		$("#link1b").fadeOut(250);
		$("#instructions1").fadeOut(250);
	});
	
	$("#frame2").mouseleave(function () {
		/*$("#frame2").animate({
			height: "100px",
			width: "100px",
			top: "0px",
			left: "0px"
		});*/
		
		$("#wrapper2").animate({
			width: "35px",
			height: "35px",
			top: "0px",
			left: "0px"
		}, 500);
		$("#centre2").fadeIn(500);
		$("#link2").fadeOut(250);
		$("#instructions2").fadeOut(250);
	});
	
	$("#frame3").mouseleave(function () {
		/*$("#frame3").animate({
			height: "100px",
			width: "100px",
			top: "0px",
			left: "0px"
		});*/
		
		$("#wrapper3").animate({
			width: "35px",
			height: "35px",
			top: "0px",
			left: "0px"
		}, 500);
		$("#centre3").fadeIn(500);
		$("#link3").fadeOut(250);
		$("#instructions3").fadeOut(250);
	});
	
	/*Byter bakgrund i dialogfönstret*/
	
	$("#snowwhite").click(function () {
		$("body").css({"background-image": "url(css-js/snowbg.png)"});
	});
	
	$("#toad").click(function () {
		$("body").css({"background-image": "url(css-js/toadbg.png)", "background-repeat": "no-repeat"});
	});
    
	$("#rosered").click(function () {
		$("body").css({"background-image": "url(css-js/rosebg.png)"});
	});
	
});