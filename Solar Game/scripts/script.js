function makeSolarSystem() {
    $(function(){
        $("<img src = assets/stars/yellow/yellow-1.png class = sun></img>").appendTo("body");
        $("<img src = assets/planets/hot-rock/lava-"+mercury.level+".png class = mercury onclick = show(\"mercury\") onmouseenter = info(\"mercury\") onmouseleave = info_cancel()></img>").appendTo("body");
        $("<img src = assets/planets/rock/rock-"+venus.level+".png class = venus onclick = show(\"venus\") onmouseenter = info(\"venus\") onmouseleave = info_cancel()></img>").appendTo("body");
        $("<img src = assets/planets/terran/terran-"+earth.level+".png class = earth onclick = show(\"earth\") onmouseenter = info(\"earth\") onmouseleave = info_cancel()></img>").appendTo("body");
        $("<img src = assets/planets/mars/mars-"+mars.level+".png class = mars onclick = show(\"mars\") onmouseenter = info(\"mars\") onmouseleave = info_cancel()></img>").appendTo("body");
        $("<img src = assets/planets/gas-jupiter/jupiter-"+jupiter.level+".png class = jupiter onclick = show(\"jupiter\") onmouseenter = info(\"jupiter\") onmouseleave = info_cancel()></img>").appendTo("body");
        $("<img src = assets/planets/gas-saturn/saturn-"+saturn.level+".png class = saturn onclick = show(\"saturn\") onmouseenter = info(\"saturn\") onmouseleave = info_cancel()></img>").appendTo("body");
        $("<img src = assets/planets/gas-uranus/uranus-"+uranus.level+".png class = uranus onclick = show(\"uranus\") onmouseenter = info(\"uranus\") onmouseleave = info_cancel()></img>").appendTo("body");
        $("<img src = assets/planets/gas-neptune/neptune-"+neptune.level+".png class = neptune onclick = show(\"neptune\") onmouseenter = info(\"neptune\") onmouseleave = info_cancel()></img>").appendTo("body")
    });
}
makeSolarSystem();

function planet(x, y, colonized, population, resources, max, rate, level, ships, eships, sss, upcost, production) {
    this.x = x;
    this.y = y;
    this.colonized = colonized;
    this.pop = population;
    this.res = resources;
    this.max = max;
    this.rate = rate;
    this.level = level;
    this.ships = ships;
    this.eships = eships;
    this.sss = sss;
    this.upcost = upcost;
    this.prod = production;
}

var mercury = new planet(200, 300, false, 0, 0, 0, 0, 1, 0, 0, false, 10, true);
var venus = new planet(290, 295, false, 0, 0, 0, 0, 1, 0, 10, false, 10, true);
var earth = new planet(385, 285, true, 0.5, 10, 100, 1, 1, 10, 0, false, 10, true);
var mars = new planet(490, 298, false, 0, 0, 0, 0, 1, 0, 50, false, 10, true);
var jupiter = new planet(650, 250+100, false, 0, 0, 0, 0, 1, 0, 150, false, 10, true);
var saturn = new planet(980, 235+100, false, 0, 0, 0, 0, 1, 0, 0, false, 10, true);
var uranus = new planet(1250, 290, false, 0, 0, 0, 0, 1, 0, 80, false, 10, true);
var neptune = new planet(1400, 282.5, false, 0, 0, 0, 0, 1, 0, 0, false, 10, true);

function refresh() {
    if(mercury.res < mercury.max && mercury.prod ){mercury.res += mercury.rate;}
    if(venus.res < venus.max && venus.prod ){venus.res += venus.rate;}
    if(earth.res < earth.max && earth.prod ){earth.res += earth.rate;}
    if(mars.res < mars.max && mars.prod ){mars.res += mars.rate;}
    if(jupiter.res < jupiter.max && jupiter.prod ){jupiter.res += jupiter.rate;}
    if(saturn.res < saturn.max && sautrn.prod ){saturn.res += saturn.rate;}
    if(uranus.res < uranus.max && uranus.prod ){uranus.res += uranus.rate;}
    if(neptune.res < neptune.max && neptune.prod ){neptune.re += neptune.rate;}
}
var time = 5000;

function fast() {
    time = 10;
    clearInterval(inter_refresh);
    inter_refresh = setInterval(refresh, time);
}

var inter_refresh = setInterval(refresh, time);

function info(z) {
    $(function(){
        var name = z, level = z + ".level", pop = z + ".pop", res = z + ".res", max = z + ".max", rate = z + ".rate", x = z + ".x", y = z + ".y";
        $("<div id = info class = info1><p class = info2>Planet: "+name+"</br>Level: "+eval(level)+"</br>Population: "+eval(pop)+"bln</br>Resources: "+eval(res)+"/"+eval(max)+"</br>Production rate: "+eval(rate)+"</p></div>").appendTo("body");
        $("#info").animate({left: eval(x) + 50, top: eval(y) + 100},1);
    });
}
function info_cancel() {
    $(function(){
        $("#info").remove();
    });
}
function show(z) {
    info_cancel();
    var f, name = z, level = z + ".level", pop = z + ".pop", res = z + ".res", max = z + ".max", rate = z + ".rate", x = z + ".x", y = z + ".y", col = z + ".colonized", sss = z + ".sss", upc = z + ".upcost";

    if ( z == "mercury" ){
        f = "<img src = assets/planets/hot-rock/lava-"+mercury.level+".png class = planet_close onclick = back()></img>";
        g = "Mercury";
    } else if ( z == "venus" ) {
        if ( venus.level > 1 ) {
            f = "<img src = assets/planets/rock/rock-"+venus.level+".png class = planet_closer onclick = back()></img>";
        } else {
            f = "<img src = assets/planets/rock/rock-"+venus.level+".png class = planet_close onclick = back()></img>";
        }
        g = "Venus";
    } else if ( z == "earth" ) {
        f = "<img src = assets/planets/terran/terran-"+earth.level+".png class = planet_close onclick = back()></img>";
        g = "Earth";
    } else if ( z == "mars" ) {
        f = "<img src = assets/planets/mars/mars-"+mars.level+".png class = planet_close onclick = back()></img>";
        g = "Mars";
    } else if ( z == "jupiter" ) {
        f = "<img src = assets/planets/gas-jupiter/jupiter-"+jupiter.level+".png class = planet_close onclick = back()></img>";
        g = "Jupiter";
    } else if ( z == "saturn" ) {
        f = "<img src = assets/planets/gas-saturn/saturn-"+saturn.level+".png class = planet_close onclick = back()></img>";
        g = "Saturn";
    } else if ( z == "uranus" ) {
        f = "<img src = assets/planets/gas-uranus/uranus-"+uranus.level+".png class = planet_closer onclick = back()></img>";
        g = "Uranus";
    } else if ( z == "neptune" ) {
        f = "<img src = assets/planets/gas-neptune/neptune-"+neptune.level+".png class = planet_close onclick = back()></img>";
        g = "Neptune";
    }

    $(function(){
        $(".sun").remove();
        $(".mercury").remove();
        $(".venus").remove();
        $(".earth").remove();
        $(".mars").remove();
        $(".jupiter").remove();
        $(".saturn").remove();
        $(".uranus").remove();
        $(".neptune").remove();
        $(f).appendTo("body");
        $("<div id = ic class = info_close></div>").appendTo("body");
        $("<h1 align = middle>"+g+"</h1>").appendTo("#ic");
        if( eval(col) == false && eval(sss) == false ) {
            $("<button align = middle class = colonize_button_off>Colonize</button></br><p align = middle>No Space Station Ships (sss) around the planet.</p>").appendTo("#ic");
        } else if ( eval(col) == false && eval(sss) == true ) {
            $("<button align = middle class = colonize_button onclick = colonize(\""+name+"\")>Colonize</button>").appendTo("#ic");
        } else if ( eval(col) == true ) {
            $("<p align = middle>Level: "+eval(level)+"</p></br>").appendTo("#ic");
            $("<p id = ppp align = middle>Population: "+eval(pop)+"bln</br>Resources: "+eval(res)+"/"+eval(max)+"<!--button onclick = rfrsh()>refresh</button--></br>Production rate: "+eval(rate)+"</p>").appendTo("#ic");
            $("<button style = \"margin:auto; display:block;\" onclick = upgrade(\""+name+"\")>Upgrade ("+eval(upc)+")</button>").appendTo("#ic");
        }
    });
}
/*function rfrsh() {
    $(function(){
        $("#ppp").remove();
        setTimeout(function(){$("<p id = ppp>Population: "+eval(pop)+"bln</br>Resources: "+eval(res)+"/"+eval(max)+"<button onclick = rfrsh()>refresh</button></br>Production rate: "+eval(rate)+"</p>").appendTo("#ic");},100);
    });
}*/
function back() {
    $(function(){
        $(".planet_close").remove();
        $(".planet_closer").remove();
        $(".info_close").remove();
        makeSolarSystem();
    });
}

function upgrade(z) {
    var f, name = z, level = z + ".level", pop = z + ".pop", res = z + ".res", max = z + ".max", rate = z + ".rate", x = z + ".x", y = z + ".y", col = z + ".colonized", sss = z + ".sss", upc = z + ".upcost";
    if ( eval(res) >= eval(upc) ) {
        if ( name == "mercury" || name == "saturn" || name == "neptune" ) {
            alert("Upgrading Mercury, Saturn and Neptune coming soon. Sorry...")
        } else if ( name == "venus" ) {
            if ( eval(level) == 1 && eval(name).sss == true ) {
                eval(name).res -= eval(name).upcost;
                eval(name).sss = false;
                eval(name).level ++;
                eval(name).pop += 1;
                eval(name).upcost += 40;
                eval(name).max += 20;
                eval(name).rate += 2;
            } else if ( eval(level) == 2 ) {
                eval(name).res -= eval(name).upcost;
                eval(name).level ++;
                eval(name).pop += 2;
                eval(name).upcost += 50;
                eval(name).max += 20;
                eval(name).rate += 2;
            } else if ( eval(level) == 3 && eval(name).sss == true ) {
                eval(name).res -= eval(name).upcost;
                eval(name).sss = false;
                eval(name).level ++;
                eval(name).pop *= 2;
                eval(name).upcost = "Maxed out";
                eval(name).max += 60;
                eval(name).rate += 3;
            } else if ( eval(level) == 3 && eval(sss) == false ) {
                alert("sss needed");
            }
        } else if ( name == "earth" ) {
            if ( eval(level) == 1 ) {
                eval(name).res -= eval(name).upcost;
                eval(name).level ++;
                eval(name).pop *= 2;
                eval(name).upcost += 40;
                eval(name).rate += 2;
            } else if ( eval(level) == 2 ) {
                eval(name).res -= eval(name).upcost;
                eval(name).level ++;
                eval(name).pop += 1;
                eval(name).upcost += 50;
                eval(name).max += 20;
                eval(name).rate += 2;
            } else if ( eval(level) == 3 ) {
                eval(name).res -= eval(name).upcost;
                eval(name).level ++;
                eval(name).pop += 1;
                eval(name).upcost += 20;
                eval(name).rate += 2;
            } else if ( eval(level) == 4 ) {
                eval(name).res -= eval(name).upcost;
                eval(name).level ++;
                eval(name).pop += 1;
                eval(name).upcost += 80;
                eval(name).max += 80;
                eval(name).rate += 1;
            } else if ( eval(level) == 5 ) {
                eval(name).res -= eval(name).upcost;
                eval(name).level ++;
                eval(name).pop += 2;
                eval(name).upcost += 20;
                eval(name).max += 80;
                eval(name).rate += 1;
            } else if ( eval(level) == 5 ) {
                eval(name).res -= eval(name).upcost;
                eval(name).level ++;
                eval(name).pop += 1;
                eval(name).upcost += 80;
                eval(name).max += 100;
                eval(name).rate += 1;
            } else if ( eval(level) == 6 ) {
                eval(name).res -= eval(name).upcost;
                eval(name).level ++;
                eval(name).pop += 3;
                eval(name).upcost = "Maxed out";
                eval(name).max += 100;
                eval(name).rate += 4;
            }
        } else if ( name == "mars" ) {
            if ( eval(level) == 1 && eval(sss) == true ) {
                eval(name).res -= eval(name).upcost;
                eval(name).sss = false;
                eval(name).level += 1;
                eval(name).pop += 0.5;
                eval(name).upcost += 80;
                eval(name).rate += 2;
            } else if ( eval(name).level == 2 ) {
                eval(name).res -= eval(name).upcost;
                eval(name).level ++;
                eval(name).pop += 1;
                eval(name).upcost += 50;
                eval(name).max += 50;
                eval(name).rate += 1;
            } else if ( eval(name).level == 3 ) {
                eval(name).res -= eval(name).upcost;
                eval(name).level ++;
                eval(name).pop += 1;
                eval(name).upcost += 50;
                eval(name).max += 50;
                eval(name).rate += 2;
            } else if ( eval(name).level == 4 ) {
                eval(name).res -= eval(name).upcost;
                eval(name).level ++;
                eval(name).pop += 1;
                eval(name).upcost += 20;
                eval(name).max += 50;
                eval(name).rate += 1;
            } else if ( eval(name).level == 5 ) {
                eval(name).res -= eval(name).upcost;
                eval(name).level ++;
                eval(name).pop += 1;
                eval(name).upcost = "Maxed out";
                eval(name).max += 100;
                eval(name).rate += 3;
            }
        } else if ( name == "uranus" ) {
            if ( eval(name).level == 1 && eval(name).sss ) {
                eval(name).res -= eval(name).upcost;
                eval(name).sss = false;
                eval(name).level ++;
                eval(name).pop += 1;
                eval(name).upcost += 40;
                eval(name).rate += 1;
            } else if ( eval(name).level == 2 ) {
                eval(name).res -= eval(name).upcost;
                eval(name).level ++;
                eval(name).pop += 1;
                eval(name).upcost += 50;
                eval(name).max += 30;
                eval(name).rate += 2;
            } else if ( eval(name).level == 3 ) {
                eval(name).res -= eval(name).upcost;
                eval(name).level ++;
                eval(name).upcost = "Maxed out";
                eval(name).max += 40;
                eval(name).rate += 4;
            }
        } else if ( name = "jupiter" ) {
            if ( eval(name).level == 1 && eval(name).sss ) {
                eval(name).res -= eval(name).upcost;
                eval(name).sss = false;
                eval(name).level ++;
                eval(name).pop += 1;
                eval(name).upcost += 40;
                eval(name).max += 20;
                eval(name).rate += 2;
            } else if ( eval(name).level == 2 ) {
                eval(name).res -= eval(name).upcost;
                eval(name).level ++;
                eval(name).pop += 1;
                eval(name).upcost += 50;
                eval(name).max += 30;
                eval(name).rate += 2;
            } else if ( eval(name).level == 3 ) {
                eval(name).res -= eval(name).upcost;
                eval(name).level ++;
                eval(name).pop += 1;
                eval(name).upcost += 50;
                eval(name).max += 40;
                eval(name).rate += 2;
            } else if ( eval(name).level == 4 ) {
                eval(name).res -= eval(name).upcost;
                eval(name).level ++;
                eval(name).pop += 1;
                eval(name).upcost += 50;
                eval(name).max += 40;
                eval(name).rate += 2;
            } else if ( eval(name).level == 5 ) {
                eval(name).res -= eval(name).upcost;
                eval(name).level ++;
                eval(name).pop += 1;
                eval(name).upcost = "Maxed out";
                eval(name).max += 100;
                eval(name).rate += 4;
            }
        }
    }
}
function colonize(name) {
    if ( eval(name).colonized == false && eval(name).sss ) {
        eval(name).colonized = true;
        eval(name).pop = 0.5;
        eval(name).rate = 1;
        eval(name).max = 100;
        eval(name).res = 5;
    }
}

window.onkeydown = function (e) {
    var code = e.keyCode ? e.keyCode : e.which;
    if (code === 38) {
        fast();
    }
}

var time_out;

function make_sss(name) {
    eval(name).prod = false;
    var time_out = setTimeout(function(){
        eval(name).prod = true;
        eval(name).sss = true;
        $(function(){
            $("<iframe class = animation_sss src = assets/animtions/sss.html onclick = destination()></iframe>").appendTo("body");
            $(".animation_sss").animate({top: "200px", left: "500px"},1);
            $("<button id = skip onclick = destination() style = \"position: absolute; left: 700px; top: 530px; cursor: pointer\">Select destination</button>").appendTo("body");
        });
    }, time * 6 );
}

function destination() {
    $(function(){
        $(".animation_sss").remove();
        $("#skip").remove();
        $("<div class = dest><p class = destp onclick = destin(\"mercury\")>Mercury</p><p class = destp onclick = destin(\"venus\")>Venus</p><p class = destp onclick = destin(\"earth\")>Earth</p><p class = destp onclick = destin(\"mars\")>Mars</p><p class = destp onclick = destin(\"jupiter\")>Jupiter</p><p class = destp onclick = destin(\"saturn\")>Saturn</p><p class = destp onclick = destin(\"uranus\")>Uranus</p><p class = destp onclick = destin(\"neptune\")>Neptune</p>").appendTo("body");
    });
}

function destin(name) {///////////////////////////
    eval(name).sss = true;
    $(function(){$(".dest").remove()});
}

function transport(name) {
    if ( eval(name).res >= 50 ) {
        eval(name).res -= 50;
        $(function(){
            $("<div class = dest><p class = destp onclick = transfer(\"mercury\")>Mercury</p><p class = destp onclick = transfer(\"venus\")>Venus</p><p class = destp onclick = transfer(\"earth\")>Earth</p><p class = destp onclick = transfer(\"mars\")>Mars</p><p class = destp onclick = transfer(\"jupiter\")>Jupiter</p><p class = destp onclick = transfer(\"saturn\")>Saturn</p><p class = destp onclick = transfer(\"uranus\")>Uranus</p><p class = destp onclick = transfer(\"neptune\")>Neptune</p>").appendTo("body");
        });
    }
}

function transfer(name) {
    setTimeout(function(){
        eval(name).res += 50;
        $(function(){$(".dest").remove()});
    },10000);
}


/*              NOTES:
 * ADD MAKING SSS//
 * BALANCE MAKING SSS//
 * ADD BUTONS
 * ADD COLONIZING//
 * ADD FOOD
 * POPULATION * 10 PER MINUTE
 * MAKE IT WORK IN FAST MODE
 * FINISH UPGRADES//
 * TEST UPGRADES//
 * BALANCE UPGRADES
 * BALANCE FOOD
 * ADD MERCURY, SATURN, NEPTUN
 * ADD SENDING CARGO//
 * 50 FOR EACH CARGO//
 * 10 SECONDS TO ARRIVE
 * ...
 * PROFIT
 */