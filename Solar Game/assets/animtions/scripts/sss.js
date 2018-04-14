$(function(){
    $("<img src = ships/sss/sss-8.png id = ship></img>").appendTo("div");
});
function animate() {
    $(function(){
        $("#ship").attr("src","ships/sss/sss-8.png");
    });
    setTimeout(function(){
        $(function(){
            $("#ship").attr("src","ships/sss/sss-7.png");
        });
        setTimeout(function(){
            $(function(){
                $("#ship").attr("src","ships/sss/sss-6.png");
            });
            setTimeout(function(){
                $(function(){
                    $("#ship").attr("src","ships/sss/sss-4.png");
                    $("#ship").animate({height: "+=100px"},1);
                });
                setTimeout(function(){
                    $(function(){
                        $("#ship").attr("src","ships/sss/sss-3.png");
                    });
                    setTimeout(function(){
                        $(function(){
                            $("#ship").attr("src","ships/sss/sss-2.png");
                        });
                        setTimeout(function(){
                            $(function(){
                                $("#ship").attr("src","ships/sss/sss-1.png");
                            });
                            setTimeout(function(){
                                $(function(){
                                    $("#ship").animate({height: "-=100px"},1);
                                });
                            },999);
                            setTimeout(animate, 1000);
                        },100);
                    },100);
                },100);
            },100);
        },100);
    },100);















}