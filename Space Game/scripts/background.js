function load() {
        var x = document.getElementById("_game")
        var n = x.getAttribute("val");
        $(function(){
            if( n == "true" || n == true ) {
                console.log("Game started.")
                $(".menu_1").remove();
                $(".menu_2").remove();
                $(".menu_3").remove();
                $("#_load").attr("val","true");
                $(".screen").attr("src", "assets/t_o1.jpg");
            }
        });
}
function values_background() {
    var _game = document.getElementById("_game").getAttribute("val");
    var _load = document.getElementById("_load").getAttribute("val");
    if ( _game == "true" || _game == true ) {
        clearInterval(inter_background);
        load();
    }
}
var inter_background = setInterval(values_background,100);