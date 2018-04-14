/*
$(function() {
	$("<img src = assets/player_stand.png class = entity id = player height = 40 width = 40></img>").appendTo("body");
});
eval("name" + number + "=some value");
eval("var wall" + GID + " = new wall_pos(gx, gy);");
var randomnumber = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
Math.floor((Math.random() * 10) + 1);
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
function object_pos(x, y) {
	this.x = x;
	this.y = y;
}
var level = prompt("Select level.");

if ( level == 1 ) {
	generate = 10;
} else if ( level == "test" ) {
	generate = prompt("TEST");
} else {
	document.write("ERROR 666 - WRONG LEVEL CODE");
}

var ai_speed = 1000;
var generating_speed = 500; //////////////////////////////////////////////////////////////////////////////////////////////////////////////

var generate;
var ID = 0;
var ID2 = 0;
var ID3 = 0;
var ID4 = 0;
var LID = "";
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
var lamps = 0;
var lampy = 0;
var lampx = 0;
var lpx = 0;
var lpy = 0;

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
		//eval("var wall" + ID + " = new wall_pos(x, y, true, true);");
	$(function() {
		$(DI).animate({top: y, left: x}, generating_speed);////////////////////////////////////////////////////////////////
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
		//eval("var wall" + 20 + ID2 + " = new wall_pos(x2, y2, true, true);");
	$(function() {
		$(DI2).animate({top: y2, left: x2}, generating_speed);//////////////////////////////////////////////////////////////
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

var generate2 = generate * generating_speed; ////////////////////////////////////////////GENERATE2
	
function locate_bottom() {
		var DI3 = "#wall30" + ID3;
		//eval("var wall" + 30 + ID3 + " = new wall_pos(x3, y3, true, true);");
	$(function() {
		$(DI3).animate({top: y2-40, left: x3}, generating_speed);//////////////////////////////////////
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
		//eval("var wall" + 40 + ID2 + " = new wall_pos(x4, y4, true, true);");
	$(function() {
		$(DI4).animate({top: y4, left: x-40}, generating_speed);/////////////////////////////////////////////
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
		//eval("var tile" + m + GID + " = new tile_pos(gx, gy, true);");
	$(function() {
		$(GDI).animate({top: gy, left: gx}, generate / 3 );///////////////////////////////////////////////////GROUND<><>
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
		$("<img src = assets/lamp_proc.png class = entity id = enemy width = 40 height = 40></img>").appendTo("body");
		$("#enemy").animate({top: generate * 40 - 80, left: generate * 40 - 80}, 1000);
	});
}, generate * generating_speed * 2 );/////////////////////////////////////////////////////////////////////////////////////////<><<>><>><><><><>2xGENERATE
//////////////////////////////////////////MOVING///////////////////////////////////
							var player = new entity_pos(2, 2);
							var enemy = new entity_pos( generate - 1, generate - 1 );
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
function generate_random_lamp() {
	lamps ++;
	lampx = Math.floor((Math.random() * generate - 2) + 1);
	lampy = Math.floor((Math.random() * generate - 2) + 1);
	eval("var lamp" + lamps + " = new object_pos(lampx, lampy);")
	while ( lampx <= 0 || lampx == generate || lampy <= 0 || lampy == generate ) {
		lampx = Math.floor((Math.random() * generate - 2) + 1);
		lampy = Math.floor((Math.random() * generate - 2) + 1);
	}
	setTimeout(function() {
		LID = "#lamp" + lamps
		$(function() {
			$("<img src = assets/lamp_dark.png class = object id = lamp" + lamps + " width = 20  height = 20></img>").appendTo("body");
			$(LID).animate({top: lampy * 40 + 10, left: lampx * 40 + 10}, 1000);
		});
	}, 1000);
}

function light_lamp_1() {
		lpx = ( lamp1.x - 10 ) / 40;
		lpy = ( lamp1.y - 10 ) / 40;
	$(function() {
		$("#lamp1").attr("src", "assets/lamp_proc.png");
	});
	if ( lpx > 3 && lpx < generate - 3 && lpy > 3 && lpy < generate - 3 ) {
		var ly = lpx * 100 - 100;
		var to_light1 = $("#tile" + ly + lpx).attr("src", "assets/tiles_light.png");
	}
}
	
function e_right() {
		enemy.x += 1;
	if ( enemy.x == 1 || enemy.y == 1 || enemy.x == generate || enemy.y == generate ) {
		enemy.x -= 1;
	} else {
		$(function() {
			$("#enemy").animate({left: "+=40px"}, ai_speed);
		});
	}
}
	
function e_left() {
		enemy.x -= 1;
	if ( enemy.x == 1 || enemy.y == 1 || enemy.x == generate || enemy.y == generate ) {
		enemy.x += 1;
	} else {
		$(function() {
			$("#enemy").animate({left: "-=40px"}, ai_speed);
		});
	}
}

function e_up() {
		enemy.y -= 1;
	if ( enemy.x == 1 || enemy.y == 1 || enemy.x == generate || enemy.y == generate ) {
		enemy.y += 1;
	} else {
		$(function() {
			$("#enemy").animate({top: "-=40px"}, ai_speed);
		});
	}
}

function e_down() {
		enemy.y += 1;
	if ( enemy.x == 1 || enemy.y == 1 || enemy.x == generate || enemy.y == generate ) {
		enemy.y -= 1;
	} else {
		$(function() {
			$("#enemy").animate({top: "+=40px"}, ai_speed);
		});
	}
}
	
function AI() {
				var move = Math.floor((Math.random() * 10) + 1);
				var special_action = Math.floor((Math.random() * 10) + 1);
if ( player_dead == true ) {
	$(function() {
		$("#enemy").animate({top: "-80px", left: "-80px"});
	});
}
	if ( player.x > enemy.x && player.y > enemy.y ) {
		if ( move <= 5 ) {
			e_down();
		} else if ( move > 5 ) {
			e_right();
		}
	} else if ( player.x < enemy.x && player.y < enemy.y ) {
		if ( move <= 5 ) {
			e_up();
		} else if ( move > 5 ) {
			e_left();
		}
	} else if ( player.x > enemy.x && player.y < enemy.y ) {
		if ( move <= 5 ) {
			e_right();
		} else if ( move > 5 ) {
			e_up();
		}
	} else if ( player.x < enemy.x && player.y > enemy.y ) {
		if ( move <= 5 ) {
			e_left();
		} else if ( move > 5 ) {
			e_down();
		}
	} else if ( player.x == enemy.x && player.y > enemy.y ) {
		e_down();
	} else if ( player.x == enemy.x && player.y < enemy.y ) {
		e_up();
	} else if ( player.x > enemy.x && player.y == enemy.y ) {
		e_right();
	} else if ( player.x < enemy.x && player.y == enemy.y ) {
		e_left();
	}
	if ( special_action == 6 ) {
		var action = Math.floor((Math.random() * 10) + 1);
		if ( action == 6 ) {
			//enemy_lazer_of_doom();
		}
	}
	if ( player.x == enemy.x && player.y == enemy.y ) {
		$(function() {
			$("#player").attr("src", "assets/ghost.png");
		});
		player_dead = true;
	}
}

function start_AI() {
	var inter_AI = setInterval(AI, ai_speed)
}
	
var player_dead = false;
var lazer_x;
var lazer_y;
function enemy_lazer_of_doom() {
		lazer_x = enemy.x;
		lazer_y = enemy.y;
	$(function() {
		$("<img src = assets/image.jpg class = text id = lazer_base width = 40 height = 40></img").appendTo("body");
		$("#lazer_base").animate({top: enemy.y * 40 - 40, left: enemy.x * 40 - 40}, 1);
		$("<img src = assets/bullet.png class = text id = lazer width = 15 height = 10></img>").appendTo("body");
		$("#lazer").animate({top: enemy.y * 40 - 40, left: enemy.x * 40 - 40}, 1);
		setTimeout( function() {
			$("#lazer").animate({top: player.y * 40 - 20, left: player.x * 40 - 20}, 1000);
		}, 1000);
	});
}
	
setTimeout( start_AI, generate * generating_speed * 2 );
var inter = setInterval(function() { generate_ground() }, 250);//////////////////////////////////////////////////GROUND<><>
var inter2 = setInterval(generate_top, generating_speed);//////////////////////////////////////////////////////////////////////////////
var inter3 = setInterval(generate_left, generating_speed);/////////////////////////////////////////////////////////////////////////////
setTimeout(gen_res, generate2 + 100);
setTimeout(inter_clear, generate2 + 100);
function gen_res() {
	var inter4 = setInterval(generate_bottom, generating_speed);///////////////////////////////////////////////////////////////////////
	var inter5 = setInterval(generate_right, generating_speed);////////////////////////////////////////////////////////////////////////
	setTimeout(function() {
		clearInterval(inter4);
		clearInterval(inter5);
	}, generate * generating_speed + 100);///////////////////////////////////////////////////////////////////////////////////////////////////
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
    } else if ( code === 39 ) { //right key
		right();
	} else if ( code === 37 ) { //left key
		left();
	} else if ( code === 32 ) { //space key
		if ( player_dead == true ) {
			$(function() { $("<p id = boo width = 40 height = 40 style = \"color:white\" class = text>BOO<p>").appendTo("body"); $("#boo").animate({top: player.y * 40 - 80, left: player.x * 40 - 37}, 1); });
			setTimeout( function() { $(function() { $("#boo").remove(); }); }, 1000);
		} else {
			settrap();
		}
	} else if ( code === 87 ) { //w key
		e_up();
	} else if ( code === 83 ) { //s key
		e_down();
	} else if ( code === 65 ) { //a key
		e_left();
	} else if ( code === 68 ) { //d key
		e_right();
	} else if ( code === 70 ) { //f key
		eSetTrap();
	}
}











