load_pg();
load_AI();
game();

function load_pg() {
    function make_grid(){
        if ( x <= 3 && y <= 3 && loaded == false ) {
            $(function(){
                $("<div id = grid"+x+""+y+" class = grid></div>").appendTo("body");
                $("#grid"+x+""+y).animate({top: y * 100, left: x * 100},1);
                x ++;
            });
        } else if ( x >= 3 && y < 3 && loaded == false ) {
            y ++;
            x = 1;
        } else if ( x >=3 && y >= 3 && loaded == false ) {
            loaded = true;
            clearInterval(inter1);
        }
    }
    var x = 1, y = 1, loaded = false;
    var inter1 = setInterval(make_grid, 10);
}
function load_AI() {
    var circle = "circle", cross = "cross";
    var start = Math.floor( Math.random() * 2 + 1 );
    var symbols = new Array(NaN, circle);
    var pos = Math.floor( Math.random() * 2 + 1 );
    symbols.splice(pos, 0, cross);
    function AI(start, symbol) {
        this.starting = start;
        this.symbol = symbol;
    }
    ai_1 = new AI(false, symbols[1]);
    ai_2 = new AI(false, symbols[2]);
    eval("ai_"+start+".starting = true;");
    return ai_1, ai_2;
}

var empty = [[0,1,2],[0,1,2],[0,1,2]];
var ai_1, ai_2;
var board;
var put;

function game() {
    board = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ]; // board[y][x];
    function put(symbol, x, y) {
        var value;
        if ( symbol == "cross" ) {
            value = 1;
        } else if ( symbol == "circle" ) {
            value = 2;
        }
        board[y][x] = value;
        setTimeout(refresh_pg,10);
    }
    //return put("cross", 1, 1), put("circle", 2, 1)
    function refresh_pg() {
        var x = 0, y = 0;
        $(function(){
        for ( var i = 0; i < 3; i ++ ) {
            for ( var n = 0; n < 3; n ++ ) {
                if ( board[y][x] == 1 ) {
                    //$(function(){
                        $("<img src = ./assets/cross.png class = image></img>").appendTo("body").animate({top: (y + 1) * 100, left: (x + 1) * 100},0);
                        x ++;
                    //});
                } else if ( board[y][x] == 2 ) {
                    //$(function(){
                        $("<img src = ./assets/circle.png class = image></img>").appendTo("body").animate({top: (y + 1) * 100, left: (x + 1) * 100},0);
                        x ++;
                    //});
                } else {
                    x ++;
                }
            }
            y ++;
            x = 0;
        }
        //setTimeout(check, 100);
    });
    }
     function check() {
        if ( board[0][0] === board[1][0] === board[2][0] === 1 || board[0][1] === board[1][1] === board[2][1] === 1 || board[0][2] === board[1][2] === board[2][2] === 1 || board[0][0] === board[0][1] === board[0][2] === 1 || board[1][0] === board[1][1] === board[1][2] === 1 || board[2][0] === board[2][1] === board[2][2] === 1 || board[0][0] === board[1][1] === board[2][2] === 1 || board[2][0] === board[1][1] === board[0][2] === 1 ) {
            alert("cross wins"); ///
        } else if ( board[0][0] === board[1][0] === board[2][0] === 2 || board[0][1] === board[1][1] === board[2][1] === 2 || board[0][2] === board[1][2] === board[2][2] === 2 || board[0][0] === board[0][1] === board[0][2] === 2 || board[1][0] === board[1][1] === board[1][2] === 2 || board[2][0] === board[2][1] === board[2][2] === 2 || board[0][0] === board[1][1] === board[2][2] === 2 || board[2][0] === board[1][1] === board[0][2] === 2 ) {
            alert("circle wins"); ///
        }
    }
    function AI(n) {
        var ai_n = "ai_" + n;
        if ( eval(ai_n).symbol == "cross" ) { var opp = 2, slt = 1; } else if ( ai_n.symbol == "circle" ) { var opp = 1, slt = 2; }
        if ( board[0][0] == board[2][0] == board[0][2] == board[2][2] == board[1][1] == 0 ) {
            var rng = Math.floor( Math.random() * 3 );
            if( rng == 0 ) { var x = 0, y = 0; } else if ( rng == 1 ) { var x = 2, y = 0; } else if ( rng == 2 ) { var x = 0, y = 2; } else if ( rng == 3 ) { var x = 2, y = 2; }
            put(eval(ai_n).symbol, x, y);
        } else if ( ( board[0][0] == slt || board[2][0] == slt || board[0][2] == slt || board[2][2] == slt ) && board[1][1] == 0 ) {
            if ( board[0][0] == slt && board[2][0] == 0 ) {
                var x = 2, y = 0;
            } else if ( board[0][0] == slt && board[0][2] == 0 ) {
                var x = 0, y = 2;
            } else if ( board[2][0] == slt && board[0][0] == 0 ) {
                var x = 0, y = 0;
            } else if ( board[2][0] == slt && board[2][2] == 0 ) {
                var x = 2, y = 2;
            } else if ( board[0][2] == slt && board[0][0] == 0 ) {
                var x = 0, y = 0;
            } else if ( board[0][2] == slt && board[2][2] == 0 ) {
                var x = 2, y = 2;
            } else if ( board[2][2] == slt && board[2][0] == 0 ) {
                var x = 2, y = 0;
            } else if ( board[2][2] == slt && board[0][2] == 0 ) {
                var x = 0, y = 2;
            }
            put(eval(ai_n).symbol, x, y);
        } else if ( board[0][0] == board[0][2] ) { put(eval(ai_n).symbol, , y); }
    }
    AI(1);
}
window.onkeydown = function (e) {
    var code = e.keyCode ? e.keyCode : e.which;
    if (code === 38) {
        console.log(board[0]);
        console.log(board[1]);
        console.log(board[2]);
    }
}