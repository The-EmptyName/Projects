/*
$(function() {
	$("<img src = assets/player_stand.png class = entity id = player height = 40 width = 40></img>").appendTo("body");
});
eval("name" + number + "=some value");
eval("var wall" + GID + " = new wall_pos(gx, gy);");
*/

function wall_pos(x, y) {
	this.x = x;
	this.y = y;
}

function tile_pos(x, y, dark, solid) {
	this.x = x;
	this.y = y;
	this.dark = dark;
}

function entity_pos(x, y) {
	this.x = x;
	this.y = y;
}

var generate = prompt("How many tiles to generate?");
var ID = 0;
var ID2 = 0;
var ID3 = 0;
var ID4 = 0;
var x = 0;
var x2 = 0;
var x3 = 0;
var x4 = 0;
var y = 0;
var y2 = 0;
var y3 = 0;
var y4 = 0;
var GID = 0;
var gy = 40;
var gx = 40;
var m = 100;
var rows = 1;
var selected;

function addx() {
	x += 40;
}
function addx2() {
	x2 += 40;
}
function addx3() {
	x3 += 40;
}
function addx4() {
	x4 += 40;
}

function addy() {
	y += 40;
}
function addy2() {
	y2 += 40;
}
function addy3() {
	y3 += 40;
}
function addy4() {
	y4 += 40;
}
function addgy() {
	gy += 40;
}
function addgx() {
	gx += 40;
}
function locate_top() {
		var DI = "#wall" + ID;
		eval("var wall" + ID + " = new wall_pos(x, y, true, true);");
	$(function() {
		$(DI).animate({top: y, left: x}, 500);
		addx();
	});
}
	
function generate_top() {
	if ( ID < generate ) {
		$(function() {
			$("<img src = assets/wall_dark.png class = wall id = wall"+ID+"></img>").appendTo("body");
		});
		setTimeout(locate_top, 100);
		ID ++;
	}
}

function locate_left() {
		var DI2 = "#wall20" + ID2;
		eval("var wall" + 20 + ID2 + " = new wall_pos(x2, y2, true, true);");
	$(function() {
		$(DI2).animate({top: y2, left: x2}, 500);
		addy2();
	});
}

function generate_left() {
	if ( ID2 < generate ) {
		$(function() {
			$("<img src = assets/wall_dark.png class = wall id = wall"+20+ID2+"></img>").appendTo("body");
		});
		setTimeout(locate_left, 100);
		ID2 ++;
	}
}

var generate2 = generate * 500; ////////////////////////////////////////////GENERATE2
	
function locate_bottom() {
		var DI3 = "#wall30" + ID3;
		eval("var wall" + 30 + ID3 + " = new wall_pos(x3, y3, true, true);");
	$(function() {
		$(DI3).animate({top: y2-40, left: x3}, 500);
		addx3();
	});
}

function generate_bottom() {
	if ( ID3 < generate ) {
		$(function() {
			$("<img src = assets/wall_dark.png class = wall id = wall30"+ID3+"></img>").appendTo("body");
		});
		setTimeout(locate_bottom, 100);
		ID3 ++;
	}
}
	
function locate_right() {
		var DI4 = "#wall40" + ID4;
		eval("var wall" + 40 + ID2 + " = new wall_pos(x4, y4, true, true);");
	$(function() {
		$(DI4).animate({top: y4, left: x-40}, 500);
		addy4();
	});
}

function generate_right() {
	if ( ID4 < generate ) {
		$(function() {
			$("<img src = assets/wall_dark.png class = wall id = wall40"+ID4+"></img>").appendTo("body");
		});
		setTimeout(locate_right, 100);
		ID4 ++;
	}
}
	
function locate_tiles() {
		var GDI = "#tile" + m + GID;
		eval("var tile" + m + GID + " = new tile_pos(gx, gy, true);");
	$(function() {
		$(GDI).animate({top: gy, left: gx}, 250);
		addgx();
	});
}
function generate_ground() {
	if ( GID < generate - 2 ) {
		$(function() {
			$("<img src = assets/tiles_dark.png class = tiles id = tile"+m+GID+"></img>").appendTo("body");
		});
		setTimeout(locate_tiles, 100);
		GID ++;
	} else if ( GID >= generate - 2 && rows < generate - 2 ) {
		addgy();
		gx = 40;
		GID = 0;
		m += 100;
		rows ++;
	} else if ( GID >= generate - 2 && rows >= generate - 2 ) {
		clearInterval(inter);
	}
}
setTimeout( function() {
	$(function() {
		$("<img src = assets/player_stand.png class = entity id = player width = 40 height = 40></img>").appendTo("body");
		$("#player").animate({top: "40px", left: "40px"}, 1000);
	});
}, generate * 500);
//////////////////////////////////////////MOVING///////////////////////////////////
							var player = new entity_pos(2, 2);
function right() {
		player.x += 1;
	if ( player.x == 1 || player.y == 1 || player.x == generate || player.y == generate ) {
		player.x -= 1;
	} else {
		$(function() {
			$("#player").animate({left: "+=40px"}, 250);
		});
	}
}
function left() {
		player.x -= 1;
	if ( player.x == 1 || player.y == 1 || player.x == generate || player.y == generate ) {
		player.x += 1;
	} else {
		$(function() {
			$("#player").animate({left: "-=40px"}, 250);
		});
	}
}
function up() {
		player.y -= 1;
	if ( player.x == 1 || player.y == 1 || player.x == generate || player.y == generate ) {
		player.y += 1;
	} else {
		$(function() {
			$("#player").animate({top: "-=40px"}, 250);
		});
	}
}
function down() {
		player.y += 1;
	if ( player.x == 1 || player.y == 1 || player.x == generate || player.y == generate ) {
		player.y -= 1;
	} else {
		$(function() {
			$("#player").animate({top: "+=40px"}, 250);
		});
	}
}
	
	
	
	
var inter = setInterval(function() { generate_ground() }, 250);
var inter2 = setInterval(generate_top, 500);
var inter3 = setInterval(generate_left, 500);
setTimeout(gen_res, generate2 + 100);
setTimeout(inter_clear, generate2);
function gen_res() {
	var inter4 = setInterval(generate_bottom, 500);
	var inter5 = setInterval(generate_right, 500);
	setTimeout(function() {
		clearInterval(inter4);
		clearInterval(inter5);
	}, generate * 500);
}
function inter_clear() {
	clearInterval(inter2);
	clearInterval(inter3);
}
/*
 *	var cord_x = 0;
 *	var cord_y = 0;
 *
 *
 *
 *" style = \"top: "+cord_y+"px; left: "+cord_x+"px;\"
 */











window.onkeydown = function (e) {
    var code = e.keyCode ? e.keyCode : e.which;
    if (code === 38) { //up key
        up();
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











