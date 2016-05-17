$(document).ready(function () {
	
/*Animation vid musingång*/
	
	
	
	$(".frame").mouseenter(function () {
		$(".frame").animate({
			height: "150px",
			width: "150px",
			top: "-25px",
			left: "-25px",
		});
		$(".wrapper").animate({
				height: "100px",
				width: "100px",
				/*top: "-25px",
				left: "-25px",
				left: "-25px",
				marginBottom: "0px"*/
				});
		$(".centre").fadeOut(500);
	});
	
/*Animation vid musutgång*/
	
	$(".frame").mouseleave(function () {
		$(".frame").animate({
			height: "100px",
			width: "100px",
			top: "0px",
			left: "0px",
		});
		$(".wrapper").animate({
			height: "35px",
			width: "35px",
			/*top: "25px",
			left: "25px",
			left: "0px",
			marginBottom: "65px"*/
				});
		$(".centre").fadeIn(500);
		/*$("#link2").hide();*/
	});
    
});
