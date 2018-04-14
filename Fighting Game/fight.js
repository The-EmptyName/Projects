var hp1 = 100;
var hp2 = 100;
var atk = 0;
var e_atk = 0;
var ini = 0;
var e_ini = 0;
var fort = 0;
var e_fort = 0;
var points = 40;
var e_class = "";
var selected = "";
var e_selected = "";
var action = "";
var e_action = "";
var damage = 0;
var e_damage = 0;
var aim = 0;
var e_aim = 0;
var arm_cr = 0, leg_cr = 0, head_cr = 0, body_cr = 0, e_arm_cr = 0, e_leg_cr = 0, e_head_cr = 0, e_body_cr = 0;
var turn = new Array("","","","");

function refresh_stats(){
    $(function(){
        $("#atk_n").text(atk);
        $("#for_n").text(fort);
        $("#ini_n").text(ini);
    });
}

refresh_stats();

function atkadd(x){
    if ( x == "+" && points > 0 ) {
        atk ++;
        points --;
    } else if ( x == "-" && atk > 0 ) {
        atk --;
        points ++;
    }
    refresh_stats();
}
function foradd(x){
    if ( x == "+" && points > 0 ) {
        fort ++;
        points --;
    } else if ( x == "-" && fort > 0 ) {
        fort --;
        points ++;
    }
    refresh_stats();
}
function iniadd(x){
    if ( x == "+" && points > 0 ) {
        ini ++;
        points --;
    } else if ( x == "-" && ini > 0 ) {
        ini --;
        points ++;
    }
    refresh_stats();
}
function confirmation() {
    refresh_stats();
    $(function(){
        $("#skillz").toggleClass("hide");
    });
       hp1 = hp1 + fort;
    $(function(){
        $("#hp_bar_1").attr("max",hp1);
        $("#hp_bar_1").attr("value",hp1);
    });
    ai_stats();
}

function check() {
    if ( hp1 <= 0 ) {
        $(function(){
            $("#knight_1").animate({width: "0px", height: "0px"},1);
            $("#sword_1").animate({top: "+=150px"}, 1000);
        });
    }
    if ( hp2 <= 0 ) {
        $(function(){
            $("#knight_2").animate({width: "0px", height: "0px"},1);
            $("#sword_2").animate({top: "+=150px"}, 1000);
        });
    }
}

function ai_stats() {
    i = Math.floor(Math.random()*10);
    if ( i <= 3 ) {
        e_class = "warrior";
    } else if ( i > 3 && i <= 6 ) {
        e_class = "tank";
    } else if ( i > 6 && i <= 9 ) {
        e_class = "balanced"
    } else if ( i >= 10 ) {
        e_class = "you are dead";
    }
    setTimeout(
        function() {
            if ( e_class == "warrior" ) {
                e_atk = 30;
                e_ini = 10;
                e_fort = 0;
            } else if ( e_class == "tank" ) {
                e_atk = 0;
                e_fort = 35;
                e_ini = 5;
            } else if ( e_class == "balanced" ) {
                e_atk = 15;
                e_ini = 10;
                e_fort = 15;
            } else if ( e_class == "you are dead" ) {
                e_atk = 30;
                e_fort = 30;
                e_ini = 41;
            }
            setTimeout(
                function() {
                         hp2 = hp2 + e_fort;
                  $(function(){
                         $("#hp_bar_2").attr("max",hp2);
                         $("#hp_bar_2").attr("value",hp2);
                    });   
                }, 10
            )
        }, 100
    )
    console.log(e_class + " " + i);
}

function select(x) {
    selected = x;
    turnp[1] = x;
}
function act(x) {
    action = x;
    turn[0] = x;
}
function end() {
    setTimeout(check_health,7000);
    if ( action == "defend" && (selected != "top" && selected != "bottom") ) {
        error(1);
    } else if ( action != "defend" && ( selected == "top" || selected == "bottom" ) ) {
        error(1);
    } else if ( action == "" || selected == "" ) {
        error(2);
    } else if ( ( action == "attack" && action == e_action ) && selected == e_selected ) {
        attacking(selected,0,10);
        e_attacking(e_selected,0,10);
////////////////////////////////////////////////////////////////////////////
    } else if ( action == "attack" ) {
        damage = Math.floor( Math.random() * 10 ) - body_cr + atk / 5;
        aim = Math.floor( Math.random() * 10 );
        if ( selected == "head" ) {
            $(function(){$("#knight_1").animate({left: "+=300px"},1000); $("#sword_1").animate({left: "+=300px"},1000);});
            attacking("head",damage,aim);
        } else if ( selected == "body" ) {
            $(function(){$("#knight_1").animate({left: "+=300px"},1000); $("#sword_1").animate({left: "+=300px"},1000);});
            attacking("body",damage,aim);
        } else if ( selected == "arm" ) {
            $(function(){$("#knight_1").animate({left: "+=300px"},1000); $("#sword_1").animate({left: "+=300px"},1000);});
            attacking("arm",damage,aim);
        } else if ( selected == "leg" ) {
            $(function(){$("#knight_1").animate({left: "+=300px"},1000); $("#sword_1").animate({left: "+=300px"},1000);});
            attacking("leg",damage,aim);
        } 
    } else if ( action == "defend") {
        $(function(){$("#knight_1").animate({left: "+=300px"},1000); $("#sword_1").animate({left: "+=300px"},1000);});
        if ( selected == "top" ) {
            defending("top");
        } else if ( selected == "bottom" ) {
            defending("bottom");
        }
    } else if ( action == "heal" ) {
        $(function(){$("#knight_1").animate({left: "+=300px"},1000); $("#sword_1").animate({left: "+=300px"},1000);});
        treat(selected);
    }
}
function error(x) {
    if ( x == 1 ) {
        alert("Wrong combination. Shield -> shield parts (bottom, top), heal/attack -> body parts");
    } else if ( x == 2 ) {
        alert("You must select both action type (bottom) and type (right) / the turn has ended");
    } else if ( x == 3 ) { 
        alert("You can't use shield with your hands crippled!");
    }
}
function attacking(destination,damage,aim) {
    if ( head_cr == 1 ) {aim --} else if ( head_cr == 2 ) { aim -= 2 } else if ( head_cr > 2 ) { aim -= 3 }
    if ( destination == "head" && aim > -1 ) {
        setTimeout(function(){$(function(){$("#sword_1").toggleClass("aim_head"); $("#sword_1").animate({top: "-=70px", left: "-=20px"},1) });},1000);
        setTimeout(function(){$(function(){$("#sword_1").animate({top: "-=50px", left: "+=50px"},100); $("#hp_bar_2").attr("value",hp2-damage*2)});},2000)
        setTimeout(function(){$(function(){$("#sword_1").animate({top: "+=50px", left: "-=50px"},600)});},3000);
        setTimeout(function(){$(function(){$("#sword_1").toggleClass("aim_head"); $("#sword_1").animate({top: "+=70px", left: "+=20px"},1) });},4000);
        setTimeout(function(){$(function(){$("#knight_1").animate({left: "-=300px"},1000); $("#sword_1").animate({left: "-=300px"},1000);});},5000);///////////
        if ( aim > 8 ) { e_head_cr ++ }
    } else if ( destination == "body" && aim > -1 ) {
        setTimeout(function(){$(function(){$("#sword_1").toggleClass("aim_body"); $("#sword_1").animate({top: "-=30px", left: "-=20px"},1) });},1000);
        setTimeout(function(){$(function(){$("#sword_1").animate({top: "-=20px", left: "+=50px"},100); $("#hp_bar_2").attr("value",hp2-damage)});},2000);
        setTimeout(function(){$(function(){$("#sword_1").animate({top: "+=20px", left: "-=50px"},600)});},3000);
        setTimeout(function(){$(function(){$("#sword_1").toggleClass("aim_body"); $("#sword_1").animate({top: "+=30px", left: "+=20px"},1) });},4000);
        setTimeout(function(){$(function(){$("#knight_1").animate({left: "-=300px"},1000); $("#sword_1").animate({left: "-=300px"},1000);});},5000);////////
        if ( aim > 8 ) { e_body_cr ++ }
    } else if ( destination == "arm" && aim > -1 ) {
        setTimeout(function(){$(function(){$("#sword_1").toggleClass("aim_arm"); $("#sword_1").animate({top: "-=10px", left: "-=20px"},1) });},1000);
        setTimeout(function(){$(function(){$("#sword_1").animate({top: "-=10px", left: "+=50px"},100); $("#hp_bar_2").attr("value",hp2-damage/2)});},2000);
        setTimeout(function(){$(function(){$("#sword_1").animate({top: "+=10px", left: "-=50px"},600)});},3000);
        setTimeout(function(){$(function(){$("#sword_1").toggleClass("aim_arm"); $("#sword_1").animate({top: "+=10px", left: "+=20px"},1) });},4000);
        setTimeout(function(){$(function(){$("#knight_1").animate({left: "-=300px"},1000); $("#sword_1").animate({left: "-=300px"},1000);});},5000);///////////
        if ( aim > 8 ) { e_arm_cr ++ } 
    } else if ( destination == "leg" && aim > -1 ) {
        setTimeout(function(){$(function(){$("#sword_1").toggleClass("aim_leg"); $("#sword_1").animate({top: "+=30px", left: "-=20px"},1) });},1000);
        setTimeout(function(){$(function(){$("#sword_1").animate({top: "+=20px", left: "+=50px"},100); $("#hp_bar_2").attr("value",hp2-damage/2)});},2000)
        setTimeout(function(){$(function(){$("#sword_1").animate({top: "-=20px", left: "-=50px"},600)});},3000);
        setTimeout(function(){$(function(){$("#sword_1").toggleClass("aim_leg"); $("#sword_1").animate({top: "-=30px", left: "+=20px"},1) });},4000);
        setTimeout(function(){$(function(){$("#knight_1").animate({left: "-=300px"},1000); $("#sword_1").animate({left: "-=300px"},1000);});},5000);///////////
        if ( aim > 8 ) { e_leg_cr ++ }
    }
}
function defending(destination) {
    if ( arm_cr > 0 ) { error(3) } else if ( destination == "top" ) {
        $("#sword_1").attr("src","shield_2.png");
        $("#sword_1").animate({width: "200px", height: "200px", top: "-=150px", left: "-=50px"},1);
        $("#sword_1").toggleClass("sword_1");
        setTimeout(function(){$(function(){$("#sword_1").attr("src","sword.png"); $("#sword_1").toggleClass("sword_1"); $("#sword_1").animate({top: "+=150px", left: "+=50px", width: "200px", height: "50px"},1);});},6000);
    } else if ( destination == "bottom" ) {
        $("#sword_1").attr("src","shield_2.png");
        $("#sword_1").animate({width: "200px", height: "200px", top: "-=50px", left: "-=50px"},1);
        $("#sword_1").toggleClass("sword_1");
        setTimeout(function(){$(function(){$("#sword_1").attr("src","sword.png"); $("#sword_1").toggleClass("sword_1"); $("#sword_1").animate({top: "+=50px", left: "+=50px", width: "200px", height: "50px"},1);});},6000)
        setTimeout(function(){$(function(){$("#knight_1").animate({left: "-=300px"},1000); $("#sword_1").animate({left: "-=300px"},1000);});},5000);///////////
    }
}
$(function(){$("#head").toggleClass("green"); $("#body").toggleClass("green"); $("#arm1").toggleClass("green"); $("#leg1").toggleClass("green"); $("#leg2").toggleClass("green"); $("#arm2").toggleClass("green");});
function treat(bpart) {
    var to_treat = bpart + "_cr = 0;";
    eval(to_treat);
    setTimeout(function(){$(function(){$("#sword_1").attr("src","potion.png"); $("#sword_1").toggleClass("aim_head");});
    $(function(){$("#sword_1").animate({width: "50px", height: "50px"},1)});},1000);
    setTimeout(function(){$(function(){$("#sword_1").animate({top: "-=170px", left: "+=10px"},1000)});},1000);
    setTimeout(function(){$(function(){$("#sword_1").toggleClass("random_class_name"); $("#sword_1").animate({top: "-=40px"},100)});},3000);
    setTimeout(function(){$(function(){$("#sword_1").toggleClass("random_class_name"); $("#sword_1").animate({top: "+=210px", left: "-=10px"},1000);});},4000);
    setTimeout(function(){$(function(){$("#sword_1").attr("src", "sword.png"); $("#sword_1").toggleClass("aim_head"); $("#sword_1").animate({width: "200px", height: "50px"},1)});},5000);
    setTimeout(function(){$(function(){$("#knight_1").animate({left: "-=300px"},1000); $("#sword_1").animate({left: "-=300px"},1000);});},5000);///////////
}
function check_health() {
    $(function(){
    if ( head_cr == 1 ) {
        $("#head").addClass("yellow");
    } else if ( head_cr == 2 ) {
        $("#head").addClass("orange");
        $("#head").removeClass("yellow");
    } else if ( head_cr > 2 ) {
        $("#head").addClass("red");
        $("#head").removeClass("orange");
    } else {$("#head").removeClass("orange"); $("#head").removeClass("red"); $("#head").removeClass("yellow");}
    if ( body_cr == 1 ) {
        $("#body").addlass("yellow");
    } else if ( body_cr == 2 ) {
        $("#body").addClass("orange");
        $("#body").removeClass("yellow");
    } else if ( body_cr > 2 ) {
        $("#body").addClass("red");
        $("#body").removeClass("orange");
    } else {$("#body").removeClass("orange"); $("#body").removeClass("red"); $("#body").removeClass("yellow");}
    if ( arm_cr == 1 ) {
        $("#arm1").addClass("yellow");
        $("#arm2").addClass("yellow");
    } else if ( arm_cr == 2 ) {
        $("#arm1").addClass("orange");
        $("#arm2").addClass("orange");
        $("#arm1").removeClass("yellow");
        $("#arm2").removeClass("yellow");
    } else if ( arm_cr > 2 ) {
        $("#arm1").addClass("red");
        $("#arm2").addClass("red");
        $("#arm1").removeClass("orange");
        $("#arm2").removeClass("orange");
    } else {$("#arm1").removeClass("orange"); $("#arm1").removeClass("red"); $("#arm1").removeClass("yellow"); $("#arm2").removeClass("orange"); $("#arm2").removeClass("red"); $("#arm2").removeClass("yellow");}
     if ( leg_cr == 1 ) {
        $("#leg1").addClass("yellow");
        $("#leg2").addClass("yellow");
    } else if ( leg_cr == 2 ) {
        $("#leg1").addClass("orange");
        $("#leg2").addClass("orange");
        $("#leg1").removeClass("yellow");
        $("#leg2").removeClass("yellow");
    } else if ( leg_cr > 2 ) {
        $("#leg1").addClass("red");
        $("#leg2").addClass("red");
        $("#leg1").removeClass("orange");
        $("#leg2").removeClass("orange");
    } else {$("#leg1").removeClass("orange"); $("#leg1").removeClass("red"); $("#leg1").removeClass("yellow"); $("#leg2").removeClass("orange"); $("#leg2").removeClass("red"); $("#leg2").removeClass("yellow");}
    });
}
function e_attacking(destination,damage,aim) {
    $(function(){$("#knight_2").animate({left: "-=300px"},1000); $("#sword_2").animate({left: "-=300px"},1000)});
    if ( e_head_cr == 1 ) { aim --} else if ( head_cr == 2 ) { aim -= 2 } else if ( e_head_cr > 2 ) { aim -= 3 }
    if ( destination == "head" && aim > -1 ) {
        hp1 = hp1 - damage * 2;
        setTimeout(function(){$(function(){$("#sword_2").toggleClass("e_aim_head"); $("#sword_2").animate({top: "-=70px", left: "+=20px"},1) });},1000);
        setTimeout(function(){$(function(){$("#sword_2").animate({top: "-=50px", left: "-=50px"},100); $("#hp_bar_1").attr("value",hp1);});},2000)
        setTimeout(function(){$(function(){$("#sword_2").animate({top: "+=50px", left: "+=50px"},600)});},3000);
        setTimeout(function(){$(function(){$("#sword_2").toggleClass("e_aim_head"); $("#sword_2").animate({top: "+=70px", left: "-=20px"},1) });},4000);
        setTimeout(function(){$(function(){$("#knight_2").animate({left: "+=300px"},1000); $("#sword_2").animate({left: "+=300px"},1000);});},5000);///////////
        if ( aim > -1 ) { head_cr ++ }
    } else if ( destination == "body" && aim > -1 ) {
        hp1 = hp1 - damage;
        setTimeout(function(){$(function(){$("#sword_2").toggleClass("e_aim_body"); $("#sword_2").animate({top: "-=30px", left: "+=20px"},1) });},1000);
        setTimeout(function(){$(function(){$("#sword_2").animate({top: "-=20px", left: "-=50px"},100); $("#hp_bar_1").attr("value",hp1)});},2000);
        setTimeout(function(){$(function(){$("#sword_2").animate({top: "+=20px", left: "+=50px"},600)});},3000);
        setTimeout(function(){$(function(){$("#sword_2").toggleClass("e_aim_body"); $("#sword_2").animate({top: "+=30px", left: "-=20px"},1) });},4000);
        setTimeout(function(){$(function(){$("#knight_2").animate({left: "+=300px"},1000); $("#sword_2").animate({left: "+=300px"},1000);});},5000);////////
        if ( aim > -1 ) { body_cr ++ }
    } else if ( destination == "arm" && aim > -1 ) {
        hp1 = hp1 - damage / 2;
        setTimeout(function(){$(function(){$("#sword_2").toggleClass("e_aim_arm"); $("#sword_2").animate({top: "-=10px", left: "+=20px"},1) });},1000);
        setTimeout(function(){$(function(){$("#sword_2").animate({top: "-=10px", left: "-=50px"},100); $("#hp_bar_1").attr("value",hp1)});},2000);
        setTimeout(function(){$(function(){$("#sword_2").animate({top: "+=10px", left: "+=50px"},600)});},3000);
        setTimeout(function(){$(function(){$("#sword_2").toggleClass("e_aim_arm"); $("#sword_2").animate({top: "+=10px", left: "-=20px"},1) });},4000);
        setTimeout(function(){$(function(){$("#knight_2").animate({left: "+=300px"},1000); $("#sword_2").animate({left: "+=300px"},1000);});},5000);///////////
        if ( aim > -1 ) { arm_cr ++ } 
    } else if ( destination == "leg" && aim > -1 ) {
        hp1 = hp1 - damage / 2;
        setTimeout(function(){$(function(){$("#sword_2").toggleClass("e_aim_leg"); $("#sword_2").animate({top: "+=30px", left: "+=20px"},1) });},1000);
        setTimeout(function(){$(function(){$("#sword_2").animate({top: "+=20px", left: "-=50px"},100); $("#hp_bar_1").attr("value",hp1)});},2000)
        setTimeout(function(){$(function(){$("#sword_2").animate({top: "-=20px", left: "+=50px"},600)});},3000);
        setTimeout(function(){$(function(){$("#sword_2").toggleClass("e_aim_leg"); $("#sword_2").animate({top: "-=30px", left: "-=20px"},1) });},4000);
        setTimeout(function(){$(function(){$("#knight_2").animate({left: "+=300px"},1000); $("#sword_2").animate({left: "+=300px"},1000);});},5000);///////////
        if ( aim > -1 ) { leg_cr ++ }
    }
}
function e_defending(destination) {
    $(function(){$("#knight_2").animate({left: "-=300px"},1000); $("#sword_2").animate({left: "-=300px"},1000)});
    if ( e_arm_cr > 0 ) { error(3) } else if ( destination == "top" ) {
        $("#sword_2").attr("src","shield_2.png");
        $("#sword_2").animate({width: "200px", height: "200px", top: "-=150px", left: "+=50px"},1);
        $("#sword_2").toggleClass("sword_1");
        setTimeout(function(){$(function(){$("#sword_2").attr("src","sword.png"); $("#sword_2").toggleClass("sword_1"); $("#sword_2").animate({top: "+=150px", left: "-=50px", width: "200px", height: "50px"},1);});},6000);
        setTimeout(function(){$(function(){$("#knight_2").animate({left: "+=300px"},1000); $("#sword_2").animate({left: "+=300px"},1000);});},5000);///////////
    } else if ( destination == "bottom" ) {
        $("#sword_2").attr("src","shield_2.png");
        $("#sword_2").animate({width: "200px", height: "200px", top: "-=50px", left: "+=50px"},1);
        $("#sword_2").toggleClass("sword_1");
        setTimeout(function(){$(function(){$("#sword_2").attr("src","sword.png"); $("#sword_2").toggleClass("sword_1"); $("#sword_2").animate({top: "+=50px", left: "-=50px", width: "200px", height: "50px"},1);});},6000)
        setTimeout(function(){$(function(){$("#knight_2").animate({left: "+=300px"},1000); $("#sword_2").animate({left: "+=300px"},1000);});},5000);///////////
    }
}
function e_treat(bpart) {
    $(function(){$("#knight_2").animate({left: "-=300px"},1000); $("#sword_2").animate({left: "-=300px"},1000)});
    var to_treat = "e_" + bpart + "_cr = 0;";
    eval(to_treat);
    setTimeout(function(){$(function(){$("#sword_2").attr("src","potion.png"); $("#sword_2").toggleClass("e_aim_head");});
    $(function(){$("#sword_2").animate({width: "50px", height: "50px", left: "+=130px"},1)});},1000);
    setTimeout(function(){$(function(){$("#sword_2").animate({top: "-=170px", left: "+=10px"},1000)});},1000);
    setTimeout(function(){$(function(){$("#sword_2").toggleClass("e_aim_head"); $("#sword_2").toggleClass("e_random_class_name"); $("#sword_2").animate({top: "-=40px"},100)});},3000);
    setTimeout(function(){$(function(){$("#sword_2").toggleClass("e_random_class_name"); $("#sword_2").animate({top: "+=210px", left: "-=140px"},1000);});},4000);
    setTimeout(function(){$(function(){$("#sword_2").attr("src", "sword.png"); $("#sword_2").animate({width: "200px", height: "50px"},1)});},5000);
    setTimeout(function(){$(function(){$("#knight_2").animate({left: "+=300px"},1000); $("#sword_2").animate({left: "+=300px"},1000);});},5000);///////////
}
function warrior_ai() {
    damage = Math.floor( Math.random() * 10 ) - e_body_cr + e_atk / 5;
    aim = Math.floor( Math.random() * 10 ) - e_head_cr;
    choice = Math.floor(Math.random()*10);
    if ( e_head_cr > 0 ) { e_treat("head"); } else if ( e_body_cr > 1 ) { e_treat("body"); } else if ( e_leg_cr > 2 ) { e_treat("leg"); } else if ( e_arm_cr > 2 ) { e_treat("arm"); } else if ( choice > 2 && choice <= 4 ) { e_attacking("head", damage, aim); } else if ( choice > 4 && choice <= 6 ) { e_attacking("body", damage, aim); } else if ( choice > 6 && choice <= 8 ) { e_attacking("arm", damage, aim); } else if ( choice > 8 && ini >= e_ini ) { e_attacking("leg", damage, aim); } else if ( choice > 8 && ini < e_ini ) { e_attacking("head", damage, aim); } else if ( choice == 2 && e_arm_cr < 1 ) { e_defending("top"); } else if ( choice <= 1 && e_arm_cr < 1 ) { e_defending("bottom"); } else { e_attacking("head", damage, aim); }
}



//setTimeout(function(){$(function(){$("#knight_1").animate({left: "-=300px"},1000); $("#sword_1").animate({left: "-=300px"},1000);});},5000);///////////
//setTimeout(function(){$(function(){   });},1000);