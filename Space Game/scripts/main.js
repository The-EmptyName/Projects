$(function(){
    on = false;
    $("<div class = left></div>").appendTo("body");
    $("<div class = down></div>").appendTo("body");
    $("<div class = right></div>").appendTo("body");
    $("<div class = up></div>").appendTo("body");
    $("<div class = filter></div>").appendTo("body");
    $("<img src = assets/t_o1.jpg class = screen></img>").appendTo("body");
    $("<value id = '_game' val = false/>").appendTo("body");
    $("<value id = '_load' val = false/>").appendTo("body");
});
function turn_on() {
    if ( on == false ) {
        $(function(){
            $(".filter").remove();
            $("#switch_2").animate({left: "+=50px"},100);
            t_o_animation();
            on = true;
        });
    } else if ( on == true ) {
        //turn_off();
    }
}
function turn_off() {
    $(function(){
        $("#switch_2").animate({left: "-=50px"},100);
        $("<div class = filter></div>").appendTo("body");
        $(".screen").attr("src", "assets/t_o1.jpg");
        $(".strt").remove();
        $(".menu_1").remove();
        $(".menu_2").remove();
        $(".menu_3").remove();
        $("#_load").attr("val","false");
        $("#_game").attr("val","false");
        on = false;
    });
}
function t_o_animation() {
    $(function(){
        $(".screen").attr("src", "assets/t_o1.jpg");
        setTimeout(function(){
            $(".screen").attr("src", "assets/t_o2.jpg");
            setTimeout(function(){
                $(".screen").attr("src", "assets/t_o3.jpg");
                setTimeout(function(){
                    $(".screen").attr("src", "assets/t_o4.jpg");
                    setTimeout(function(){
                        $(".screen").attr("src", "assets/t_o5.jpg");
                        setTimeout(function(){
                            $(".screen").attr("src", "assets/t_o6.jpg");
                            setTimeout(function(){
                                $(".screen").attr("src", "assets/t_o7.jpg");
                                setTimeout(function(){
                                    $(".screen").attr("src", "assets/t_o8.jpg");
                                    setTimeout(function(){
                                        $(".screen").attr("src", "assets/t_o9.jpg");
                                        setTimeout(function(){
                                            $(".screen").attr("src", "assets/t_o10.jpg");
                                            setTimeout(function(){
                                                $(".screen").attr("src", "assets/t_o11.jpg");
                                                setTimeout(function(){
                                                    $(".screen").attr("src", "assets/t_o12.jpg");
                                                    $("<img src = assets/t_o12.1.jpg class = strt></img>").appendTo("body");
                                                    started = false;
                                                    inter = setInterval(function(){
                                                        $(".strt").toggleClass("hidden");
                                                    },1000)
                                                },3000);
                                            },100);
                                        },100);
                                    },100);
                                },100);
                            },100);
                        },100);
                    },100);
                },100);
            },100);
        },100);
    });
}
function start() {
    clearInterval(inter);
    started = true;
    $(function(){
        $(".strt").remove();
        $("<p class = menu_1>1 player</p>").appendTo("body");
        $("<p class = menu_2>2 players</p>").appendTo("body");
        $("<img class = menu_3 src = assets/pointer.png></img>").appendTo("body");
        var menu = 1;
        inter = setInterval(function(){
            window.onkeydown = function (e) {
                var code = e.keyCode ? e.keyCode : e.which;
                if ( code === 40 ) {
                    if ( menu == 1 ) {
                        menu ++;
                        $(".menu_3").animate({top: "+=50px"},0);
                    }
                } else  if ( code === 38 ) {
                    if ( menu == 2 ) {
                        menu --;
                        $(".menu_3").animate({top: "-=50px"},0);
                    }
                }
            }
            if ( button == "select" ) {
                clearInterval(inter);
                $("#_game").attr("val","true");
                console.log("Game: true");
            }
        },1);
    });
}
show_controller();
function show_controller() {
    $(function(){
        $("<div class = controller></div>").appendTo("body");
        $("<img src = assets/joystick_1.png class = joy_1></img>").appendTo("body");
        $("<img src = assets/joystick_2.png class = joy_2></img>").appendTo("body");
        $("<img src = assets/button.png class = a></img>").appendTo("body");
        $("<img src = assets/button.png class = b></img>").appendTo("body");
        $("<img src = assets/button_2.png class = start></img>").appendTo("body");
        $("<img src = assets/button_2.png class = select></img>").appendTo("body");
        $("<p class = desc style = \"left: 1090px; top: 310px;\">SELECT</p>").appendTo("body");
        $("<p class = desc style = \"left: 1215px; top: 310px;\">START</p>").appendTo("body");
        $("<p class = desc style = \"left: 1250px; top: 535px;\">B</p>").appendTo("body");
        $("<p class = desc style = \"left: 1350px; top: 535px;\">A</p>").appendTo("body");
        $("<div id = a onclick = click_button('a')></div>").appendTo("body");
        $("<div id = b onclick = click_button('b')></div>").appendTo("body");
        $("<div id = select onclick = click_button('select')></div>").appendTo("body");
        $("<div id = start onclick = click_button('start')></div>").appendTo("body");
        $("<div id = switch_1></div>").appendTo("body");
        $("<div id = switch_2 onclick = turn_on()></div>").appendTo("body");
    });
}
function click_button(x) {
    button = x;
    if ( !started && button == "start" ) {
        start();
    }
    console.log(button);
    setTimeout(function(){
        button = "";
    },5);
}
function move(x) {
    var y = document.getElementById("_load")
    var n = y.getAttribute("val");
    if ( n == "true" || n == true ) {
        if ( x == "up" ) {
            $(function(){
                $(".joy_1").animate({top: "-=30px"},10);
                //up();
                joy_back();
                click_button("up")
            });
        } else if ( x == "down" ) {
            $(function(){
                $(".joy_1").animate({top: "+=30px"},10);
                //down();
                click_button("down")
                joy_back();
            });
        } else if ( x == "left" ) {
            $(function(){
                $(".joy_1").animate({left: "-=30px"},10);
                //left();
                joy_back();
                click_button("left")
            });
        } else if ( x == "right" ) {
            $(function(){
                $(".joy_1").animate({left: "+=30px"},10);
                //right();
                joy_back();
                click_button("right")
            });
        }
    }
}
function joy_back() {
    setTimeout(function(){
        $(function(){
            $(".joy_1").animate({top: "450px", left: "1000px"},10)
        });
    },11);
}
function movement() {
    if ( button == "up" ) {
        $(function(){
            player.y -= 5;
            $("#player").animate({top: "-=5px"},1);
            console.log("moved");
        });
    } else if ( button == "down" ) {
        $(function(){
            player.y += 5;
            $("#player").animate({top: "+=5px"},1);
            console.log("moved");
        });
    } else if ( button == "left" ) {
        $(function(){
            player.x -= 5;
            $("#player").animate({left: "-=5px"},1);
            console.log("moved");
        });
    } else if ( button == "right" ) {
        $(function(){
            player.x += 5;
            $("#player").animate({left: "+=5px"},1);
            console.log("moved");
        });
    }
}
function game_controll() {
    window.onkeydown = function (e) {
        var code = e.keyCode ? e.keyCode : e.which;
        if (code === 35) { // End
            turn_on();
        } else if ( code === 38 ) { // up
            move("up");
        } else if ( code === 40 ) { // down
            move("down");
        } else if ( code === 37 ) { // left
            move("left");
        } else if ( code === 39 ) { // right
            move("right");
        } else if ( code = 45 ) { // Insert
            prepare_game();
            setInterval(movement, 1);
        }
    }
}
function prepare_game() {
    $(function(){
        $("<img id = 'player' src = 'assets/fighter.png'/>").appendTo("body");
    });
}
function values_main() {
    var _game = document.getElementById("_game").getAttribute("val");
    var _load = document.getElementById("_load").getAttribute("val");
    if ( _load == "true" || _load == true ) {
        game_controll();
    }
}
function game_object(x,y) {
    this.x = x;
    this.y = y;
}
var player = new game_object(400,550);
var inter_main = setInterval(values_main,1000)
var button;

