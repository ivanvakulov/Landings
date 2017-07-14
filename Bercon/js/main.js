$(document).ready(function () {
    
    $('.menu-items .menu a').testPlug();
    
    
    //Widget FAQ
    $(".widget").click(widget);
    
    function widget(){
        if( !$(this).parent().hasClass("active") ){
            $(".widgetCont").stop();
            $(".active").stop();
            
            $(this).children(".arrow").css("transform"," -webkit-transform: rotate(180deg)");
            $(this).children(".arrow").css("transform","rotate(180deg)");
            
            $(".active .arrow").css("transform"," -webkit-transform: rotate(0)");
            $(".active .arrow").css("transform","rotate(0)");
            
            $(".active").animate({
                "height" : "70px" 
            },200, function(){
                $(".active").css("height","70px");  
            });
            $(".active").removeClass("active");

            var h = Number($(".widgetInfo").height()) + 70;
            
            $(this).parent().animate({
               "height" : h 
            },200, function(){
                $(this).css("height", h);  
            });
            $(this).parent().addClass("active");
        }else{
            $(".active").stop();
            
            $(".active .arrow").css("transform"," -webkit-transform: rotate(0)");
            $(".active .arrow").css("transform","rotate(0)");

            $(".active").animate({
                "height" : "70px" 
            },200, function(){
                $(".active").css("height","70px");  
            });
            $(".active").removeClass("active");
        }
    }
    
    //Slider partners
    $("#left").click(prev);
    $("#right").click(next);
    
    var w = Number($('.slides>li').width());
    if( $(window).width() <= '600' ){
        w+=5;
    }else if( $(window).width() <= '830' ){
        w+=10;
    }else if( $(window).width() <= '1280' ){
        w+=30;
    }else{
        w+=50;
    }
    
    $('.slides>li:last-child').prependTo('.slides');
    $('.slides').css('margin-left', -w);
    
    function next(){
        $('.slides').stop();
        $('.slides').animate({
            'margin-left': (-2 * w)
        }, 600, function(){
            $('.slides>li:first-child').appendTo('.slides');
            $('.slides').css('margin-left', -w);
        });
    }

    function prev(){
        $('.slides').stop();
        $('.slides').animate({
            'margin-left': "0"
        }, 600, function(){
            $('.slides>li:last-child').prependTo('.slides');
            $('.slides').css('margin-left', -w);
        });
    }    
    
    //Mob menu
    $(".mob img").click(open);
    $(".close").click(close);
    if( $(window).width() <= '1280' ){
        $(".mob .menu-items>.menu>li>a").click(close);
    }
    function open(){
        $(".menu-container").animate({
            "height" : "100vh"
        },500);
    }
    
    function close(){
        $(".menu-container").animate({
            "height" : "0"
        },500);
    }
    
    //Draggable button
    $(function() {

        $('.drag-button').draggable({
            axis: "x",
            containment: "parent",
            drag:  function() {
                
                var w = $('.drag-button').css("left");
                $('.green').css("width",w);
                
                var from = $('.green').width();
                $("#from").text( ( from/100 ).toFixed(2) );
                $("#to").text( ( from/100*1.25 ).toFixed(2) );
                $("#from-usd").text( ( from/100*2526.8 ).toFixed(2) );
                $("#to-usd").text( ( from/100*1.25*2526.8 ).toFixed(2) );
            },
            stop: function() {
                var w = $('.drag-button').css("left");
                $('.green').css("width",w);
            }
        });
        

    });
    
    google.charts.load('current', {packages: ['corechart', 'line']});
    google.charts.setOnLoadCallback(drawLineColors);

    function drawLineColors() {
        var data = new google.visualization.DataTable();
        data.addColumn('number', 'X');
        data.addColumn('number', '1');
        data.addColumn('number', '2');
        data.addColumn('number', '3');

        data.addRows([
            [0, 0, 0, 0],    [1, 1000, 3300, 5670],   [2, 7563, 9643, 11789],  [3,13635,15534,17634],
            [4, 19985, 21234, 23536],    [5, 25254, 27265, 29231],   [6, 31235, 33235, 35523],  [7,37235,39636,41463],[8, 43341, 45556, 47156],    [9, 49653, 51555, 53623],   [10, 55903, 57123, 59521],  [11,61234,63345,65214],
            [12, 67125, 69634, 71789],    [13, 73124, 75920, 77103],   [14, 79193, 81234, 79903],  [15,77569,75214,73235]
        ]);

        var options = {
            height: 360,
            chartArea: {
                width: "80%",
                height: "90%"
            },
            colors: ['#ff4200', '#19c1ff', '#ff9600'],
            vAxis: {
                format:'#,### USD',
                gridlines: {
                    count: 18,
                    color: "#dcdcdc"
                },
                ticks: [0,42500,85000],
                minorGridlines:{
                    count:8,
                    color: "#dcdcdc"
                },
                textStyle:{
                    color:"#dcdcdc",
                    fontSize:14
                },
                baselineColor:"#dcdcdc"
            },
            hAxis: {
                format:'#',
                gridlines: {
                    count: 15
                },
                textPosition:"none",
                baselineColor:"#dcdcdc"
            },
            legend:{
                position: "none"
            },
            lineWidth:4
        };

        var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
        chart.draw(data, options);
    }
    $(window).resize(function(){
        drawLineColors();
    }); 
});