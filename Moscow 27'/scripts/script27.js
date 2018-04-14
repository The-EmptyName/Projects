setTimeout(start, 100);
function start() {
    $(function(){
        $("#back").attr("src", "assets/cover.png");
        $("#down").text("Moscow 27 is copyrighted by EmptySoft studios and is definitely not a Hong Kong 97 rip off");
        setTimeout(function(){
            $("#back").attr("src", "assets/soviets.jpg");
            $("#down").text("It's year 2027. An army of 144.3 million fucking ugly soviets is marching onto US ground.");
        },3000);
        setTimeout(function(){
            $("#back").attr("src", "assets/obama-s.jpg");
            $("#down").text("United States' only hope is in Donald Trump's relative, Bob.");
        },9000);
        setTimeout(function(){
            $("#back").attr("src", "assets/obama-r.jpg");
            $("#down").text("Bob is a killer machine and is going to wipe out all 144.3 million soviet communists.");
        },15000);
        setTimeout(function(){
            $("#back").attr("src", "assets/putin.png");
            $("#down").text("Meanwhile in Russia there is a project to convert Vladeemeer Pooteen into a powerfull weapon of destruction.");
        },21000);
        setTimeout(function(){
            $("#back").toggleClass("hidden");
            $("#down").toggleClass("hidden");
            $("#scene").toggleClass("playground");
            document.getElementById("scene").style.backgroundImage = "url('" + BGSrc + "')";
            $("<img src = assets/obama.png id = player class = player></img>").appendTo("#scene");
            $("<img src = assets/lenin.png id = lenin class = hidden></img>").appendTo("#scene");
            $("<img src = assets/stalin.png id = stalin class = hidden></img>").appendTo("#scene");
            $("<img src = assets/medvedev.png id = medvedev class = hidden></img>").appendTo("#scene");
            $("<img src = assets/car.png id = car class = hidden></img>").appendTo("#scene");
            $("<img src = assets/putin-h.png id = putin class = hidden></img>").appendTo("#scene");
            $("<img src = assets/bullet.png id = bullet class = hidden></img>").appendTo("#scene");
            setTimeout(leninAppear, 1000);
            setTimeout(stalinAppear, 2000);
            setTimeout(medvedevAppear, 3000);
            setTimeout(carAppear, 15000);
        },27000);
    });
}
var interLenin = setInterval(leninMove, 100);
var interStalin = setInterval(stalinMove, 100);
var intermedvedev = setInterval(medvedevMove, 100);
var interCar = setInterval(carMove, 100);
var soviets = 144300000;
var killed = 0;
var background = Math.floor( Math.random() * 10 + 1 );
var BGSrc;
if ( background < 3 ) {
    BGSrc = "assets/backgrounds/back-4.jpg";
} else if ( background >= 3 && background < 7 ) {
    BGSrc = "assets/backgrounds/back-2.jpg";
} else if ( background >= 7 && background < 9 ) {
    BGSrc = "assets/backgrounds/back-3.jpg";
} else {
    BGSrc = "assets/backgrounds/back-1.png";
}

function entity( x, y ) {
    this.x = x;
    this.y = y;
}
var player = new entity( 25, 25 );
var putin = new entity( 999, 0 );
var medvedev = new entity( 999, 0 );
var lenin = new entity( 999, 0 );
var stalin = new entity( 999, 0 );
var car = new entity( 0, 0 );
var bullet = new entity( NaN, NaN );

function up() {
    player.y --;
    if ( player.y <= 0 ) {
        player.y ++;
    } else {
        $(function(){
            $("#player").animate({top: "-=20px"}, 10);
        });
    }
}

function down() {
    player.y ++;
    if ( player.y >= 25 ) {
        player.y --;
    } else {
        $(function(){
            $("#player").animate({top: "+=20px"}, 10);
        });
    }
}

function right() {
    player.x ++;
    if ( player.x >= 40 ) {
        player.x --;
    } else {
        $(function(){
            $("#player").animate({left: "+=20px"}, 10);
        });
    }
}

function left() {
    player.x --;
    if ( player.x <= 0 ) {
        player.x ++;
    } else {
        $(function(){
            $("#player").animate({left: "-=20px"}, 10);
        });
    }
}
var bullets = 1;
function shoot() {
    if ( bullets > 0 ) {
        $(function(){
            bullet.x = player.x + 6;
            bullet.y = player.y;
            $("#bullet").animate({top: player.y * 20, left: player.x * 20 + 120},1);
            $("#bullet").toggleClass("bullet");
            bullets --;
        });
    }
}

function bulletFly() {
    if ( bullet.y > 0 ) {
        bullet.y --;
        $("#bullet").animate({top: "-=20"},1);
        leninDead();
        stalinDead();
        medvedevDead();
    } else if ( bullet.y <= 0 ) {
        bulletBack();
    }
    if (( bullet.x >= car.x && bullet.x <= car.x + 20 ) && (bullet.y >= car.y && bullet.y <= car.y + 8 )) {
        bulletBack();
    }
    if (( bullet.x >= putin.x && bullet.x <= putin.x + 13 ) && (bullet.y >= putin.y && bullet.y <= putin.y + 13 )) {
        bulletBack();
        putinHp --;
        putinDead();
    }
}

function bulletBack() {
    $(function(){
        $("#bullet").toggleClass("bullet");
    });
    bullet.x = NaN;
    bullet.y = NaN;
    bullets ++;
}
var interVar = setInterval(bulletFly, 10);

/*function playerDead() {
    clearAll();
    document.getElementById("scene").style.backgroundImage = "url('assets/dead-s.jpg')";
}*/
/////////////////////////////////////////////////////////LENIN
var leninAlive;
function leninMove() {
    if ( lenin.y < 30 ) {
        lenin.y ++;
        $(function(){
            $("#lenin").animate({top: lenin.y * 20}, 100);
        });
    } else if ( lenin.y >= 30 ) {
        leninBack();
    }
    if (( player.x >= lenin.x && player.x <= lenin.x + 5 ) && (player.y >= lenin.y && player.y <= lenin.y + 13 ) && leninAlive) {
       // playerDead();
    }
}
var mmm;
function leninBack() {
    $(function(){
        $("#lenin").toggleClass("lenin");
    });
    lenin.x = NaN;
    lenin.y = NaN;
    leninAppear();
}
function leninAppear() {
    leninAlive = true;
    var a_pear = Math.floor( Math.random() * 40 + 1 );
    lenin.y = -5;
    lenin.x = a_pear;
    $(function(){
        $("#lenin").toggleClass("lenin");
        $("#lenin").animate({top: lenin.y * 20, left: lenin.x * 20},1);
    });
}
function leninDead(){
    if (( bullet.x >= lenin.x && bullet.x <= lenin.x + 5 ) && (bullet.y >= lenin.y && bullet.y <= lenin.y + 13 ) && leninAlive) {
        clearInterval(interLenin);
        soviets --;
        killed ++;
        putinAppear();
        leninAlive = false;
        $(function(){
            $("#lenin").attr("src","assets/explosion.jpg");
            $("#lenin").toggleClass("explosion");
            setTimeout(function(){
                $("#lenin").attr("src","assets/dead.jpg");
                $("#lenin").toggleClass("explosion");
                $("#lenin").toggleClass("body");
                setTimeout(function(){
                    $("#lenin").attr("src","assets/lenin.png");
                    $("#lenin").toggleClass("body");
                    leninBack();
                    interLenin = setInterval(leninMove, 100);
                    //mmm = interLenin;
                },1000);
            },1000);
        });
    }
}
/////////////////////////////////////////////////////////STALIN
var stalinAlive;
function stalinMove() {
    if ( stalin.y < 30 ) {
        stalin.y ++;
        $(function(){
            $("#stalin").animate({top: stalin.y * 20}, 100);
        });
    } else if ( stalin.y >= 30 ) {
        stalinBack();
    }
    if (( player.x >= stalin.x && player.x <= stalin.x + 5 ) && (player.y >= stalin.y && player.y <= stalin.y + 13 ) && stalinAlive) {
       // playerDead();
    }
}
var mmm;
function stalinBack() {
    $(function(){
        $("#stalin").toggleClass("stalin");
    });
    stalin.x = NaN;
    stalin.y = NaN;
    stalinAppear();
}
function stalinAppear() {
    stalinAlive = true;
    var a_pear = Math.floor( Math.random() * 40 + 1 );
    stalin.y = -5;
    stalin.x = a_pear;
    $(function(){
        $("#stalin").toggleClass("stalin");
        $("#stalin").animate({top: stalin.y * 20, left: stalin.x * 20},1);
    });
}
function stalinDead(){
    if (( bullet.x >= stalin.x && bullet.x <= stalin.x + 5 ) && (bullet.y >= stalin.y && bullet.y <= stalin.y + 13 ) && stalinAlive) {
        clearInterval(interStalin);
        soviets --;
        killed ++;
        putinAppear();
        stalinAlive = false;
        $(function(){
            $("#stalin").attr("src","assets/explosion.jpg");
            $("#stalin").toggleClass("explosion");
            setTimeout(function(){
                $("#stalin").attr("src","assets/dead.jpg");
                $("#stalin").toggleClass("explosion");
                $("#stalin").toggleClass("body");
                setTimeout(function(){
                    $("#stalin").attr("src","assets/stalin.png");
                    $("#stalin").toggleClass("body");
                    stalinBack();
                    interStalin = setInterval(stalinMove, 100);
                    //mmm = interLenin;
                },1000);
            },1000);
        });
    }
}
//////////////////////////////////////////////////////////////MEDVEDEV
var medvedevAlive;
function medvedevMove() {
    if ( medvedev.y < 30 ) {
        medvedev.y ++;
        $(function(){
            $("#medvedev").animate({top: medvedev.y * 20}, 100);
        });
    } else if ( medvedev.y >= 30 ) {
        medvedevBack();
    }
    if (( player.x >= medvedev.x && player.x <= medvedev.x + 5 ) && (player.y >= medvedev.y && player.y <= medvedev.y + 13 ) && medvedevAlive) {
       // playerDead();
    }
}
var mmm;
function medvedevBack() {
    $(function(){
        $("#medvedev").toggleClass("medvedev");
    });
    medvedev.x = NaN;
    medvedev.y = NaN;
    medvedevAppear();
}
function medvedevAppear() {
    medvedevAlive = true;
    var a_pear = Math.floor( Math.random() * 40 + 1 );
    medvedev.y = -5;
    medvedev.x = a_pear;
    $(function(){
        $("#medvedev").toggleClass("medvedev");
        $("#medvedev").animate({top: medvedev.y * 20, left: medvedev.x * 20},1);
    });
}
function medvedevDead(){
    if (( bullet.x >= medvedev.x && bullet.x <= medvedev.x + 5 ) && (bullet.y >= medvedev.y && bullet.y <= medvedev.y + 13 ) && medvedevAlive) {
        clearInterval(intermedvedev);
        soviets --;
        killed ++;
        putinAppear();
        medvedevAlive = false;
        $(function(){
            $("#medvedev").attr("src","assets/explosion.jpg");
            $("#medvedev").toggleClass("explosion");
            setTimeout(function(){
                $("#medvedev").attr("src","assets/dead.jpg");
                $("#medvedev").toggleClass("explosion");
                $("#medvedev").toggleClass("body");
                setTimeout(function(){
                    $("#medvedev").attr("src","assets/medvedev.png");
                    $("#medvedev").toggleClass("body");
                    medvedevBack();
                    intermedvedev = setInterval(medvedevMove, 100);
                    //mmm = interLenin;
                },1000);
            },1000);
        });
    }
}
///////////////////////////////////////////////CAR
function carMove() {
    if ( car.x >= -5 ) {
        car.x --;
        $(function(){
            $("#car").animate({left: car.x * 20}, 100);
        });
    } else if ( car.x <= -6 ) {
        carBack();
    }
    if (( player.x >= car.x && player.x <= car.x + 5 ) && (player.y >= car.y && player.y <= car.y + 13 )) {
       // playerDead();
    }
}
var mmm;
function carBack() {
    $(function(){
        $("#car").toggleClass("car");
    });
    car.x = NaN;
    car.y = NaN;
    setTimeout(carAppear, 15000);
}
function carAppear() {
    var a_pear = Math.floor( Math.random() * 30 + 5 );
    car.x = 45;
    car.y = a_pear;
    $(function(){
        $("#car").toggleClass("car");
        $("#car").animate({top: car.y * 20, left: car.x * 20},1);
    });
}
///////////////////////////////////////////////////////////POOTEEN
var putinHp = 10;
var interPutin = setInterval(putinAI, 1000000);
clearInterval(interPutin);
function putinAppear() {
    if ( killed % 20 == 0 ) {
        setTimeout(clearAll, 2500);
        putinHp = 10;
        putin.x = 25;
        putin.y = -5;
        $(function(){
            $("#audio").remove();
            $(music_c).appendTo("body");
            $("#putin").toggleClass("putin");
            $("#putin").animate({top: putin.y * 20, left: putin.x * 20},1);
            setTimeout(function(){
                putin.y = 1;
                $("#putin").animate({top: putin.y * 20}, 2000);
                setTimeout(function(){
                    interPutin = setInterval(putinAI, 100);
                },2500);
            },10)
        })
    }
}
var Pright = true;
var Pleft = false;
var interPutin2;
function putinAI() {
    if ( putin.x != player.x && putin.x < 40 && Pright ) {
        putin.x ++;
        $(function(){
            $("#putin").animate({left: putin.x * 20},100);
        });
    } else if ( putin.x != player.x && putin.x >= 40 && Pright ) {
        Pright = false;
        Pleft = true;
    } else if ( putin.x != player.x && putin.x > 1 && Pleft ) {
        putin.x --;
        $(function(){
            $("#putin").animate({left: putin.x * 20},100);
        });
    } else if ( putin.x != player.x && putin.x <= 1 && Pleft ) {
        Pleft = false;
        Pright = true;
    } else if ( putin.x == player.x ) {
        clearInterval(interPutin);
        var intr = false;
        var interPutin2 = setInterval(function(){
            if ( putin.y < 30 ) {
                putin.y ++;
                $(function(){
                    $("#putin").animate({top: putin.y * 20},75);
                });
            } else if ( putin.y >= 30 && intr == false ) {
                clearInterval(interPutin2);
                putin.y = 1;
                $(function(){
                    $("#putin").animate({top: putin.y * 20},75);
                });
                intr = true;
                setTimeout(function(){
                    interPutin = setInterval(putinAI, 100);
                    if ( Pleft ) {
                        right();
                    } else if ( Pright ) {
                        left();
                    } 
                },2027);
            }
        },75);
    }
}
function putinDead() {
    if ( putinHp <= 0 ) {
        clearInterval(interPutin);
        clearInterval(interPutin2);
        putin.x = NaN;
        putin.y = NaN;
        $(function(){
            $("#putin").animate({top: "-=450px"},2000);
            setTimeout(function(){
                $("#putin").toggleClass("putin");
                $("#audio").remove();
                $(music_b).appendTo("body");
                setAll();
            },2027);
        });
    }
}












function clearAll() {
    clearInterval(interLenin);
    clearInterval(interStalin);
    clearInterval(intermedvedev);
    clearInterval(interCar);
    leninBack();
    stalinBack();
    medvedevBack();
    carBack();
    $("#stalin").animate({top: "1500px", left: "1500px"},1);
    $("#lenin").animate({top: "1500px", left: "1500px"},1);
    $("#medvedev").animate({top: "1500px", left: "1500px"},1);
    $("#car").animate({top: "1500px", left: "-1500px"},1);
    stalin.x = NaN, stalin.y = NaN, lenin.x = NaN, lenin.y = NaN, medvedev.x = NaN, medvedev.y = NaN, car.x = NaN, car.y = NaN;
}
function setAll() {
    interLenin = setInterval(leninMove, 100);
    interStalin = setInterval(stalinMove, 100);
    intermedvedev = setInterval(medvedevMove, 100);
    interCar = setInterval(carMove, 100);
    setTimeout(leninAppear, 1000);
    setTimeout(stalinAppear, 2000);
    setTimeout(medvedevAppear, 3000);
    setTimeout(carAppear, 15000);
    $("#stalin").toggleClass("stalin");
    $("#lenin").toggleClass("lenin");
    $("#medvedev").toggleClass("medvedev");
    $("#car").toggleClass("car");
}

var music_b = "<audio id = audio autoplay loop controls hidden><source id = music src=\"music/back.wav\"></audio>";
var music_c = "<audio id = audio autoplay loop controls hidden><source id = music src=\"music/back-c.wav\"></audio>";

window.onkeydown = function (e) {
    var code = e.keyCode ? e.keyCode : e.which;
    if (code === 38) {                          //up key
        up();
    } else if (code === 40) {                   //down key
        down();
    } else if ( code === 39 ) {                 //right key
		right();
	} else if ( code === 37 ) {                 //left key
		left();
    } else if ( code === 87 ) {                 //w key
        up();
    } else if ( code === 83 ) {                 //s key
        down();
    } else if ( code === 68 ) {                 //d key
        right();
    } else if ( code === 65 ) {                 //a key
        left();
    } else if ( code === 32 ) {                 //space key
        shoot();
    }
}