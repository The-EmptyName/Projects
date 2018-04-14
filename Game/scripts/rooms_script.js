/*function room( width, height ) {
	this.width = width;
	this.height = height;
}
var room_width = Math.floor((Math.random() * 10) + 4);
var room_height = Math.floor((Math.random() * 10) + 4);
var generate_speed = 500;

function generate_room(type) {
	if ( type == "monster_room" ) {
		generate_monster_room();
	} else if ( type == "empty_room" ) {
		generate_empty_room();
	} else {
		document.write(" ERROR ");
	}
}

var room_id = 1;
var tile_id = 0;
var wall_id = 0;
var rows = room_height - 2;
var row = 1;
var tile_str;

function generate_empty_room() {
	$(function() {
		$("<body id = room" + room_id + " width = " + room_width *  40 + " height = " + room_height * 40 + " class = room></body>").appendTo("body");
	});
	//var inter_room = setInterval( generate_empty_room_interior, generate_speed );
}

function generate_empty_room_interior() {
	if ( tile_id < room_width - 2 ) {
		$(function() {
			$("<img src = assets/tiles_dark.png class = tiles id = tile" + room_id + row * 10 + tile_id + " width = 40 height = 40></img>").appendTo("room" + room_id);
		});
		setTimeout(locate_tiles, 100);
		tile_id ++;
	} else if ( tile_id >= room_width - 2 && row < rows ) {
		tile_id = 0;
		row ++;
	} else if ( tile_id >= room_height - 2 && row >= rows ) {
	//	clearInterval(inter_room);
	}
}
function locate_tiles() {
		tile_str = "#tile" + room_id + row * 10 + tile_id;
		//eval("var tile" + m + GID + " = new tile_pos(gx, gy, true);");
	$(function() {
		$("#tile1101").animate({top: row * 40, left: id * 40 + 40}, generate_speed / 2 );
	});
}
*/


















































































