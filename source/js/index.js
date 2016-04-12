/**
 * Created by wuquan on 2016/4/9.
 */
//Í¼Æ¬ÂÖ²¥
$(window).ready(function(){
        var img=$(".banner_img img");
        var li=$(".banner_icon li");
        var i=0;
        function lunbo() {
            if(i<4){

                $("#banner_img").empty();
                $('#banner_img').append('<img src="images/banner'+i+'.jpg" alt=""/>');
                $(li[i]).addClass("icon_active");
                $(li[i]).siblings().removeClass();
                i++;

            }else{$("#banner_img").empty();
                $('#banner_img').append('<img src="images/banner0.jpg" alt=""/>');
                $(li[0]).addClass("icon_active");
                $(li[0]).siblings().removeClass();
                i=1;
            }
        }
        var t=setInterval(lunbo,1500);
        $(".banner_icon li").on("mouseover",function(){
             clearInterval(t);
           i= $(this).index();
            $("#banner_img").empty();
            $('#banner_img').append('<img src="images/banner'+i+'.jpg" alt=""/>');
            $(li[i]).addClass("icon_active");
            $(li[i]).siblings().removeClass();
            i++;
     });
        $(".banner_icon li").on("mouseout",function(){
            t=setInterval(lunbo,1500);
        });
    $("#banner_img").on("mouseover",function() {
        clearInterval(t);
    });
        $("#banner_img").on("mouseout",function() {
            t=setInterval(lunbo,1500);
        });

    }
);