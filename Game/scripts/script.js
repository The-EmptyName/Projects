////////////////////////////////INTERVALS////////////////////////////////////////////////////////
loop_lamp1();
setInterval(loop_lamp1, 7000);





///////////////////////////////////////////////BINDINGS/////////////////////////////////////////
window.onkeydown = function (e) {
    var code = e.keyCode ? e.keyCode : e.which;
    if (code === 38) { //up key
        jump();
    } else if (code === 40) { //down key
        down();
    } else if ( code === 39 ) {
		right();
	} else if ( code === 37 ) {
		left();
	} else if ( code === 32 ) {
		settrap();
	} else if ( code === 87 ) {
		eup();
	} else if ( code === 83 ) {
		edown();
	} else if ( code === 65 ) {
		eleft();
	} else if ( code === 68 ) {
		eright();
	} else if ( code === 70 ) {
		eSetTrap();
	}
}
///////////////////////////////////////T-turning,U-lit,d-dark///////////////////////
function help() {
	console.log("T - light_d / U - light / d - dark >> lamp >> num");
}
function ulamp1() {
	$(function() {
		$("#lamp1").attr("src", "assets/lamp_light.png");
		$("#tile1").attr("src", "assets/tiles_light.png");
		$("#tile2").attr("src", "assets/tiles_light.png");
		$("#tile3").attr("src", "assets/tiles_light.png");
		$("#tile9").attr("src", "assets/tiles_light.png");
		$("#tile17").attr("src", "assets/tiles_light.png");
		$("#tile10").attr("src", "assets/tiles_light.png");
		$("#tile4").attr("src", "assets/tiles_light_d.png");
		$("#tile11").attr("src", "assets/tiles_light_d.png");
		$("#tile18").attr("src", "assets/tiles_light_d.png");
		$("#tile25").attr("src", "assets/tiles_light_d.png");
		$("#wall2").attr("src", "assets/wall_light_down.png");
		$("#wall3").attr("src", "assets/wall_light_down.png");
		$("#wall4").attr("src", "assets/wall_light_down.png");
		$("#wall12").attr("src", "assets/wall_light_right.png");
		$("#wall13").attr("src", "assets/wall_light_right.png");
		$("#wall14").attr("src", "assets/wall_light_right.png");
	});
}
function dlamp1() {
	$(function() {
		$("#lamp1").attr("src", "assets/lamp_dark.png");
		$("#tile1").attr("src", "assets/tiles_dark.png");
		$("#tile2").attr("src", "assets/tiles_dark.png");
		$("#tile3").attr("src", "assets/tiles_dark.png");
		$("#tile9").attr("src", "assets/tiles_dark.png");
		$("#tile17").attr("src", "assets/tiles_dark.png");
		$("#tile10").attr("src", "assets/tiles_dark.png");
		$("#tile4").attr("src", "assets/tiles_dark.png");
		$("#tile11").attr("src", "assets/tiles_dark.png");
		$("#tile18").attr("src", "assets/tiles_dark.png");
		$("#tile25").attr("src", "assets/tiles_dark.png");
		$("#wall2").attr("src", "assets/wall_dark.png");
		$("#wall3").attr("src", "assets/wall_dark.png");
		$("#wall4").attr("src", "assets/wall_dark.png");
		$("#wall12").attr("src", "assets/wall_dark.png");
		$("#wall13").attr("src", "assets/wall_dark.png");
		$("#wall14").attr("src", "assets/wall_dark.png");
	});
}
function tlamp1() {
	dlamp1();
	$(function() {
		$("#lamp1").attr("src", "assets/lamp_proc.png");
		$("#tile1").attr("src", "assets/tiles_light_d.png");
	});
}
function loop_lamp1() {
	setTimeout(tlamp1, 0);
	setTimeout(dlamp1, 500);
	setTimeout(tlamp1, 1000);
	setTimeout(dlamp1, 1500);
	setTimeout(ulamp1, 2000);
	setTimeout(tlamp1, 5000);
	setTimeout(dlamp1, 6000);
}





































































































