var diff = prompt("difficulty: 100 - insane, 200 - very hard, 500 - hard, 750 - medium, 1000 - easy, 2000 - ultra easy, 3000 - too easy, 5000 - not posieble to fail");

function object(x, y) {
	this.x = x;
	this.y = y;
}
var player_cord = new object(100, 100);
var player_model = $("#player");
var hp = 100;

var enemy_cord = new object(200, 100);
var enemy_model = $("#enemy");

var portal = new object(140, 300);
var portal2 = new object(600, 440);

var glitch = new object(440, 100);
var glitch2 = new object(480, 100);
var player_glitched = false

var ufo = new object(400, 500);
var shot = new object(0, 0);
var dx = ufo.x + 14;
var dy = ufo.y + 13;

var trap = new object(0, 0);
var trap2 = new object(0, 0);
var trap3 = new object(0, 0);

var wall = new object(200, 200);

var mine = new object(0, 0);

var traps = 3;

// player_cord.x     player_cord.y   enemy_cord.x   enemy_cord.y   bullet_cord.x   bullet_cord.y
function check() {
	if ( player_cord.x == enemy_cord.x && player_cord.y == enemy_cord.y ) {
		$(function() {
			$("#player").attr("src", "explosion.png");
			$("#player").toggleClass("boom");
			$("#player").animate({width: "50px", height: "50px"}, 1000);
		});
	} else if ( player_cord.x <= enemy_cord.x + 50 && player_cord.x >= enemy_cord.x && player_cord.y <= enemy_cord.y + 50 && player_cord.y >= enemy_cord.y ) {
		$(function() {
			$("#player").attr("src", "explosion.png");
			$("#player").toggleClass("boom");
			$("#player").animate({width: "50px", height: "50px"}, 1000);
		});
	}
}
function pup() {
	$(function() {
		$("#player").animate({top: "-=20px"}, 200);
	});
	player_cord.y = player_cord.y - 20;
	check();
}

function pdown() {
	$(function() {
		$("#player").animate({top: "+=20px"}, 200);
	});
	player_cord.y = player_cord.y + 20;
	check();
}

function pleft() {
	$(function() {
		$("#player").animate({left: "-=20px"}, 200);
	});
	player_cord.x = player_cord.x - 20;
	check();
}

function pright() {
	$(function() {
		$("#player").animate({left: "+=20px"}, 200);
	});
	player_cord.x = player_cord.x + 20;
	check();
}

function eright() {
	$(function() {
		$("#enemy").animate({left: "+=20px"}, diff);
	});
	enemy_cord.x = enemy_cord.x + 20;
	check();
}

function eleft() {
	$(function() {
		$("#enemy").animate({left: "-=20px"}, diff);
	});
	enemy_cord.x = enemy_cord.x - 20;
	check();
}

function eup() {
	$(function() {
		$("#enemy").animate({top: "-=20px"}, diff);
	});
	enemy_cord.y = enemy_cord.y - 20;
	check();
}

function edown() {
	$(function() {
		$("#enemy").animate({top: "+=20px"}, diff);
	});
	enemy_cord.y = enemy_cord.y + 20;
	check();
}

function emove() { // NOT USABLE, REPLACED BY AI()
	var move = Math.floor((Math.random() * 10) + 1);
		if ( move >= 0 && move <= 2 ) {
			eright();
		} else if ( move > 2 && move <= 4 ) {
			eleft();
		} else if ( move > 4 && move <= 6 ) {
			eup();
		}else if ( move > 6 && move <= 9 ) {
			edown();
		} else if ( move > 9 ) {
			eSetTrap();
		}
}

function settrap() {
	if ( traps == 3 ) {
		$(function() {
			$("#trap").toggleClass("absolute");
			$("#trap").animate({top: player_cord.y, left: player_cord.x}, 100);
		});
		trap.x = player_cord.x;
		trap.y = player_cord.y;
		traps --;
	} else if ( traps == 2 ) {
		$(function() {
			$("#trap2").toggleClass("absolute");
			$("#trap2").animate({top: player_cord.y, left: player_cord.x}, 100);
		});
		trap2.x = player_cord.x;
		trap2.y = player_cord.y;
		traps --;
	} else if ( traps == 1 ) {
		$(function() {
			$("#trap3").toggleClass("absolute");
			$("#trap3").animate({top: player_cord.y, left: player_cord.x}, 100);
		});
		trap3.x = player_cord.x;
		trap3.y = player_cord.y;
		traps --;
	}
}

function eSetTrap() {
	$(function() {
		$("#mine").animate({top: enemy_cord.y, left: enemy_cord.x, width: "50px", height: "50px"}, 100);
		$("#mine").attr("src", "mine.png");
	});
	mine.x = enemy_cord.x;
	mine.y = enemy_cord.y;
}
function echecktrap() {
	if ( player_cord.x == mine.x && player_cord.y == mine.y ) {
		$(function() {
			$("#player").attr("src", "explosion.png");
			$("#player").toggleClass("boom");
			$("#player").animate({width: "50px", height: "50px"}, 1000);
			$("#mine").attr("src", "explosion.png");
			$("#mine").animate({width: "100px", height: "100px"}, 2000);
		});
	} else if ( player_cord.x <= mine.x + 50 && player_cord.x >= mine.x && player_cord.y <= mine.y + 50 && player_cord.y >= mine.y ) {
		$(function() {
			$("#player").attr("src", "explosion.png");
			$("#player").toggleClass("boom");
			$("#player").animate({width: "50px", height: "50px"}, 1000);
			$("#mine").attr("src", "explosion.png");
			$("#mine").animate({width: "100px", height: "100px"}, 2000);
		});
	}
}

function checktrap() {
	if ( enemy_cord.x == trap.x && enemy_cord.y == trap.y ) {
		$(function() {
			$("#enemy").attr("src", "explosion.png");
			$("#enemy").toggleClass("boom");
			$("#enemy").animate({width: "100px", height: "100px"}, 2000);
		});
	} else if ( enemy_cord.x <= trap.x + 20 && enemy_cord.x >= trap.x && enemy_cord.y <= trap.y + 20 && enemy_cord.y >= trap.y ) {
		$(function() {
			$("#enemy").attr("src", "explosion.png");
			$("#enemy").toggleClass("boom");
			$("#enemy").animate({width: "100px", height: "100px"}, 2000);
		});
	}
	if ( enemy_cord.x == trap2.x && enemy_cord.y == trap2.y ) {
		$(function() {
			$("#enemy").attr("src", "explosion.png");
			$("#enemy").toggleClass("boom");
			$("#enemy").animate({width: "100px", height: "100px"}, 2000);
		});
	} else if ( enemy_cord.x <= trap2.x + 20 && enemy_cord.x >= trap2.x && enemy_cord.y <= trap2.y + 20 && enemy_cord.y >= trap2.y ) {
		$(function() {
			$("#enemy").attr("src", "explosion.png");
			$("#enemy").toggleClass("boom");
			$("#enemy").animate({width: "100px", height: "100px"}, 2000);
		});
	}
	if ( enemy_cord.x == trap3.x && enemy_cord.y == trap3.y ) {
		$(function() {
			$("#enemy").attr("src", "explosion.png");
			$("#enemy").toggleClass("boom");
			$("#enemy").animate({width: "100px", height: "100px"}, 2000);
		});
	} else if ( enemy_cord.x <= trap3.x + 20 && enemy_cord.x >= trap3.x && enemy_cord.y <= trap3.y + 20 && enemy_cord.y >= trap3.y ) {
		$(function() {
			$("#enemy").attr("src", "explosion.png");
			$("#enemy").toggleClass("boom");
			$("#enemy").animate({width: "100px", height: "100px"}, 2000);
		});
	}
}

//////////////////////////////////////////////INTERVALS//////////////////////////////////////////
setInterval(checktrap, diff);
setInterval(echecktrap, 1000);
setInterval(AI, diff);
setInterval(ufoshoot, 7000);
setInterval(checkshot, 100);
setInterval(checkhp, 100);
setInterval(wormhole, 100);
setInterval(glitched, 100);
setInterval(after_glitch, 5000);
/////////////////////////////////////////////////AI//////////////////////////////////////////////
function AI() {
				var move = Math.floor((Math.random() * 10) + 1);
	if ( player_cord.x > enemy_cord.x && player_cord.y > enemy_cord.y ) {
		if ( move <= 5 ) {
			edown();
		} else if ( move > 5 ) {
			eright();
		}
	} else if ( player_cord.x < enemy_cord.x && player_cord.y < enemy_cord.y ) {
		if ( move <= 5 ) {
			eup();
		} else if ( move > 5 ) {
			eleft();
		}
	} else if ( player_cord.x > enemy_cord.x && player_cord.y < enemy_cord.y ) {
		if ( move <= 5 ) {
			eright();
		} else if ( move > 5 ) {
			eup();
		}
	} else if ( player_cord.x < enemy_cord.x && player_cord.y > enemy_cord.y ) {
		if ( move <= 5 ) {
			eleft();
		} else if ( move > 5 ) {
			edown();
		}
	} else if ( player_cord.x == enemy_cord.x && player_cord.y > enemy_cord.y ) {
		edown();
	} else if ( player_cord.x == enemy_cord.x && player_cord.y < enemy_cord.y ) {
		eup();
	} else if ( player_cord.x > enemy_cord.x && player_cord.y == enemy_cord.y ) {
		eright();
	} else if ( player_cord.x < enemy_cord.x && player_cord.y == enemy_cord.y ) {
		eleft();
	}
	if ( move == 0 || move == 10 ) {
		eSetTrap();
	}
}

window.onkeydown = function (e) {
    var code = e.keyCode ? e.keyCode : e.which;
    if (code === 38) { //up key
        pup();
    } else if (code === 40) { //down key
        pdown();
    } else if ( code === 39 ) {
		pright();
	} else if ( code === 37 ) {
		pleft();
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
};

function ufoshoot() {
	$(function() {
			var aim = Math.floor((Math.random() * 10) + 1);
			var top;
			var left;
		if ( aim == 0 ) {
			top = player_cord.y + 40;
			left = player_cord.x + 40;
			$("#bullet").animate({top: top, left: left}, 5000);
			setTimeout(function() {
				shot.x = left;
				shot.y = top;
				}, 5000);
			setTimeout(function() {
				$("#bullet").animate({top: dy, left: dx}, 1);
				$("#bullet").attr("src", "bullet.png");
				shot.x = dx;
				shot.y = dy;
			}, 6000);
			setTimeout(function() {
				$("#bullet").attr("src",  "explosion.png");
			}, 4500);
		} else if ( aim > 0 && aim <= 3 ) {
			top = player_cord.y - 20;
			left = player_cord.x + 20;
			$("#bullet").animate({top: top, left: left}, 5000);
			setTimeout(function() {
				shot.x = left;
				shot.y = top;
				}, 5000);
			setTimeout(function() {
				$("#bullet").animate({top: dy, left: dx}, 1);
				$("#bullet").attr("src", "bullet.png");
				shot.x = dx;
				shot.y = dy;
			}, 6000);
			setTimeout(function() {
				$("#bullet").attr("src",  "explosion.png");
			}, 4500);
		} else if ( aim > 3 && aim <= 6 ) {
			top = player_cord.y;
			left = player_cord.x + 40;
			$("#bullet").animate({top: top, left: left}, 5000);
			setTimeout(function() {
				shot.x = left;
				shot.y = top;
				}, 5000);
			setTimeout(function() {
				$("#bullet").animate({top: dy, left: dx}, 1);
				$("#bullet").attr("src", "bullet.png");
				shot.x = dx;
				shot.y = dy;
			}, 6000);
			setTimeout(function() {
				$("#bullet").attr("src",  "explosion.png");
			}, 4500);
		} else if ( aim > 6 && aim <= 9 ) {
			top = player_cord.y + 40;
			left = player_cord.x;
			$("#bullet").animate({top: top, left: left}, 5000);
			setTimeout(function() {
				shot.x = left;
				shot.y = top;
				}, 5000);
			setTimeout(function() {
				$("#bullet").animate({top: dy, left: dx}, 1);
				$("#bullet").attr("src", "bullet.png");
				shot.x = dx;
				shot.y = dy;
			}, 6000);
			setTimeout(function() {
				$("#bullet").attr("src",  "explosion.png");
			}, 4500);
		} else if ( aim == 10 ) {
			top = player_cord.x;
			left = player_cord.y;
			$("#bullet").animate({top: top, left: left}, 5000);
			setTimeout(function() {
				shot.x = left;
				shot.y = top;
				}, 5000);
			setTimeout(function() {
				$("#bullet").animate({top: dy, left: dx}, 1);
				$("#bullet").attr("src", "bullet.png");
				shot.x = dx;
				shot.y = dy;
			}, 6000);
			setTimeout(function() {
				$("#bullet").attr("src",  "explosion.png");
			}, 4500);
		}
	});
}

function checkshot() {
	if ( shot.x == player_cord.x && shot.y == player_cord.y ) {
		hp = hp - 10;
	} else if ( shot.x == player_cord.x && shot.y == player_cord.y + 20 ) {
		hp = hp - 8;
	}
}

function checkhp() {
	$(function() {
	$("#hp").attr("value", hp);
		if ( hp <= 0 ) {
			$("#player").attr("src", "explosion.png");
			$("#player").toggleClass("boom");
			$("#player").animate({width: "50px", height: "50px"}, 1000);
		}
	});
}

function wormhole() {
	if ( player_cord.x == portal.x && player_cord.y == portal.y ) {
		$(function() {
			$("#player").animate({top: portal2.y + 60, left: portal2.x + 60}, 500);
			$("#portal").animate({width: "20px", height: "100px"}, 500);
			$("#portal").attr("src", "wormhole2.png");
			setTimeout(function() {
				$("#portal").animate({width: "40px", height: "40px"}, 500);
				$("#portal").attr("src", "wormhole.png");
			}, 500);
		});
			player_cord.x = portal2.x + 60;
			player_cord.y = portal2.y + 60;
	} else if ( player_cord.x == portal2.x && player_cord.y == portal2.y ) {
		$(function() {
			$("#player").animate({top: portal.y + 60, left: portal.x + 60}, 500);
			$("#portal2").animate({width: "20px", height: "100px"}, 500);
			$("#portal2").attr("src", "wormhole2.png");
			setTimeout(function() {
				$("#portal2").animate({width: "40px", height: "40px"}, 500);
				$("#portal2").attr("src", "wormhole.png");
			}, 500);
		});
		player_cord.x = portal.x + 60;
		player_cord.y = portal.y + 60;
	} else if ( player_cord.x <= portal.x + 20 && player_cord.x >= portal.x && player_cord.y <= portal.y + 20 && player_cord.y >= portal.y ) {
		$(function() {
			$("#player").animate({top: portal2.y + 60, left: portal2.x + 60}, 500);
			$("#portal").animate({width: "20px", height: "100px"}, 500);
			$("#portal").attr("src", "wormhole2.png");
			setTimeout(function() {
				$("#portal").animate({width: "40px", height: "40px"}, 500);
				$("#portal").attr("src", "wormhole.png");
			}, 500);
		});
			player_cord.x = portal2.x + 60;
			player_cord.y = portal2.y + 60;
	} else if ( player_cord.x <= portal2.x + 20 && player_cord.x >= portal2.x && player_cord.y <= portal2.y + 20 && player_cord.y >= portal2.y ) {
		$(function() {
			$("#player").animate({top: portal.y + 60, left: portal.x + 60}, 500);
			$("#portal2").animate({width: "20px", height: "100px"}, 500);
			$("#portal2").attr("src", "wormhole2.png");
			setTimeout(function() {
				$("#portal2").animate({width: "40px", height: "40px"}, 500);
				$("#portal2").attr("src", "wormhole.png");
			}, 500);
		});
		player_cord.x = portal.x + 60;
		player_cord.y = portal.y + 60;
	}
}

function glitched() {
	if ( player_cord.x == glitch.x && player_cord.y == glitch.y ) {
		$("#player").attr("src", "player_glitch.png");
		player_glitched = true;
	} else if ( player_cord.x <= glitch.x + 20 && player_cord.x >= glitch.x && player_cord.y <= glitch.y + 20 && player_cord.y >= glitch.y ) {
		$("#player").attr("src", "player_glitch.png");
		player_glitched = true;
	} else if ( player_cord.x == glitch2.x && player_cord.y == glitch2.y ) {
		$("#player").attr("src", "player_glitch.png");
		player_glitched = true;
	} else if ( player_cord.x <= glitch2.x + 20 && player_cord.x >= glitch2.x && player_cord.y <= glitch2.y + 20 && player_cord.y >= glitch2.y ) {
		$("#player").attr("src", "player_glitch.png");
		player_glitched = true;
	}
	if ( player_glitched == true ) {
		hp --;
	}
}
function glitching() {
	$(function() {
setTimeout(function() {
	//$("#glitch").animate({width: "100px", height: "50px"}, 100);
	$("#glitch").attr("src", "glitch2.png");
	setTimeout(function() {
		//$("#glitch").animate({width: "40px", height: "40px"}, 100);
		$("#glitch").attr("src", "glitch3.png");
		setTimeout(function() {
			//$("#glitch").animate({width: "50px", height: "100px"}, 100);
			$("#glitch").attr("src", "glitch4.png");
			setTimeout(function() {
				//$("#glitch").animate({width: "40px", height: "40px"}, 100);
				$("#glitch").attr("src", "glitch5.png");
				setTimeout(function() {
					//$("#glitch").animate({width: "20px", height: "50px"}, 100);
					$("#glitch").attr("src", "glitch1.png");
					setTimeout(stop_glitch, 100);
				}, 100);
			}, 100);
		}, 100);
	}, 100);
}, 100);
	});
}
function stop_glitch() {
	$(function() {
		$("#glitch").animate({width: "40px", height: "40px"}, 100);
		$("#glitch").attr("src", "glitch3.png");
	});
	setTimeout(glitching, 100);
}

setTimeout(glitching, 100);
setTimeout(glitching2, 100);

function glitching2() {
	$(function() {
setTimeout(function() {
	//$("#glitch").animate({width: "100px", height: "50px"}, 100);
	$("#glitch2").attr("src", "glitch3.png");
	setTimeout(function() {
		//$("#glitch").animate({width: "40px", height: "40px"}, 100);
		$("#glitch2").attr("src", "glitch4.png");
		setTimeout(function() {
			//$("#glitch").animate({width: "50px", height: "100px"}, 100);
			$("#glitch2").attr("src", "glitch5.png");
			setTimeout(function() {
				//$("#glitch").animate({width: "40px", height: "40px"}, 100);
				$("#glitch2").attr("src", "glitch1.png");
				setTimeout(function() {
					//$("#glitch").animate({width: "20px", height: "50px"}, 100);
					$("#glitch2").attr("src", "glitch2.png");
					setTimeout(stop_glitch2, 100);
				}, 100);
			}, 100);
		}, 100);
	}, 100);
}, 100);
	});
}

function stop_glitch2() {
	$(function() {
		$("#glitch2").animate({width: "40px", height: "40px"}, 100);
		$("#glitch2").attr("src", "glitch4.png");
	});
	setTimeout(glitching2, 100);
}

function after_glitch() {
	if ( player_glitched == true ) {
		$(function() {
			$("#portal").animate({width: "100px", height: "5px"}, 1);
			$("body").toggleClass("glitched_body");
			$("#trap").attr("src", "ufo.png");
			$("#trap2").attr("src", "wormhole.png");
			$("#trap3").attr("src", "mine.png");
			$("#enemy").attr("src", "wormhole2.png");
			$("#portal2").attr("src", "spikes.png");
			$("#ufo").attr("src", "player.png");
		});
	}
}
















/*function left() {
	this.x += 20;
	$(function() {
		$(this.model).animate({left: "+=20px"}, 2000);
	});
}*/





























































































