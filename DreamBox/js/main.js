$(document).ready(function () {
    
    $('.menu a').testPlug();
    $('.headerBut').testPlug();
    $('.photoContainer').testPlug();
    
    $(".widget").click(widget);
    
    function widget(){
        if( !$(this).parent().hasClass("active") ){
            $(".widgetCont").stop();
            $(".active").stop();
            
            $(this).children(".arrow").css("transform"," -webkit-transform: rotate(360deg)");
            $(this).children(".arrow").css("transform","rotate(360deg)");
            
            $(".active .arrow").css("transform"," -webkit-transform: rotate(180deg)");
            $(".active .arrow").css("transform","rotate(180deg)");
            
            $(".active").animate({
                "height" : "62px" 
            },200, function(){
                $(".active").css("height","62px");  
            });
            $(".active").removeClass("active");

            $(this).parent().animate({
               "height" : "243px" 
            },200, function(){
                $(this).parent().css("height","243px");  
            });
            $(this).parent().addClass("active");
        }else{
            $(".active").stop();
            
            $(".active .arrow").css("transform"," -webkit-transform: rotate(180deg)");
            $(".active .arrow").css("transform","rotate(180deg)");

            $(".active").animate({
                "height" : "62px" 
            },200, function(){
                $(".active").css("height","62px");  
            });
            $(".active").removeClass("active");
        }
    }
    
    $(".photoItem").click(photoScale);
    $(".blur").click(photoClose);
    var scaled = false;
    function photoScale(){
        if(!scaled){
            var path = $(this).find(".ph").attr("src");
            $(".blur").find("img").attr("src",path);
            $(".blur").css("display","block");
            $(".blur").animate({
                opacity:1
            },500);
            scaled = true;
        }
    }
    function photoClose(){
        if(scaled){
            $(".blur").animate({
                opacity:0
            },500);
            setTimeout(function(){$(".blur").css("display","none")},500);
            scaled = false;
        }
    }
});