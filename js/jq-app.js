/**
 * Created by seanchain on 3/30/15.
 */
$().ready(function () {
    $("#qc").click(function(){
        var count = $("#quotecount").attr("value");
        count = parseInt(count) + 1;
        if(count % 5 == 0){
            $("#quote-content").text("“You have to accept whatever comes, and the only important thing is that you meet it with the best you have to give.”");
            $("#quote-author").text("– Eleanor Roosevelt");
        }
        else if (count % 5 == 1){
            $("#quote-content").text("“There is only one success: to be able to spend your life in your own way.”");
            $("#quote-author").text("– Christopher Morley");
        }
        else if (count % 5 == 2){
            $("#quote-content").text("“Make each day your masterpiece.”");
            $("#quote-author").text("– John Wooden");
        }
        else if (count % 5 == 3){
            $("#quote-content").text("“The only place success comes before work is in the dictionary.”");
            $("#quote-author").text("– Vince Lombardi");
        }
        else if (count % 5 == 4){
            $("#quote-content").text("“Talk is cheap, show me the code”");
            $("#quote-author").text("– Linus Torvalds");
        }
        count = count.toString();
        $("#quotecount").attr("value", count);
    });

    $("#cc").click(function(){
        var count = $("#count").attr("value");
        count = parseInt(count) + 1;
        if(count % 5 == 0){
            $("#main-content").attr("style", "background-color:RGBA(70, 36, 36, 1);");
            $("#main-content1").attr("style", "background-color:RGBA(70, 36, 36, 1);");
            $("#main-content2").attr("style", "background-color:RGBA(70, 36, 36, 1);");
            $("#main-content3").attr("style", "background-color:RGBA(70, 36, 36, 1);");
            $("#qi").attr("style", "background-color:RGBA(29, 14, 14, 1);");
            $("#ci").attr("style", "background-color:RGBA(29, 14, 14, 1);");
            $("#excessive-content").attr("style", "background-color:RGBA(59, 30, 30, 1)");
            $("#lnk-content").attr("style", "background-color:RGBA(59, 30, 30, 1)");
        }
        else if (count % 5 == 1){
            $("#main-content").attr("style", "background-color:RGBA(78, 78, 57, 1);");
            $("#main-content1").attr("style", "background-color:RGBA(78, 78, 57, 1);");
            $("#main-content2").attr("style", "background-color:RGBA(78, 78, 57, 1);");
            $("#main-content3").attr("style", "background-color:RGBA(78, 78, 57, 1);");
            $("#qi").attr("style", "background-color:RGBA(32, 32, 23, 1);");
            $("#ci").attr("style", "background-color:RGBA(32, 32, 23, 1);");
            $("#excessive-content").attr("style", "background-color:RGBA(66, 66, 48, 1)");
            $("#lnk-content").attr("style", "background-color:RGBA(66, 66, 48, 1)");
        }
        else if (count % 5 == 2){
            $("#main-content").attr("style", "background-color:RGBA(58, 42, 80, 1)");
            $("#main-content1").attr("style", "background-color:RGBA(58, 42, 80, 1)");
            $("#main-content2").attr("style", "background-color:RGBA(58, 42, 80, 1)");
            $("#main-content3").attr("style", "background-color:RGBA(58, 42, 80, 1)");
            $("#qi").attr("style", "background-color:RGBA(24, 17, 33, 1);");
            $("#ci").attr("style", "background-color:RGBA(24, 17, 33, 1);");
            $("#excessive-content").attr("style", "background-color:RGBA(49, 35, 68, 1);");
            $("#lnk-content").attr("style", "background-color:RGBA(49, 35, 68, 1);");
        }
        else if (count % 5 == 3){
            $("#main-content").attr("style", "background-color:RGBA(88, 69, 85, 1);");
            $("#main-content1").attr("style", "background-color:RGBA(88, 69, 85, 1);");
            $("#main-content2").attr("style", "background-color:RGBA(88, 69, 85, 1);");
            $("#main-content3").attr("style", "background-color:RGBA(88, 69, 85, 1);");
            $("#qi").attr("style", "background-color:RGBA(36, 28, 35, 1);");
            $("#ci").attr("style", "background-color:RGBA(36, 28, 35, 1);");
            $("#excessive-content").attr("style", "background-color:RGBA(74, 58, 72, 1)");
            $("#lnk-content").attr("style", "background-color:RGBA(74, 58, 72, 1)");
        }
        else if (count % 5 == 4){
            $("#main-content").attr("style", "background-color:RGBA(55, 85, 73, 1);");
            $("#main-content1").attr("style", "background-color:RGBA(55, 85, 73, 1);");
            $("#main-content2").attr("style", "background-color:RGBA(55, 85, 73, 1);");
            $("#main-content3").attr("style", "background-color:RGBA(55, 85, 73, 1);");
            $("#qi").attr("style", "background-color:RGBA(22, 35, 30, 1);");
            $("#ci").attr("style", "background-color:RGBA(22, 35, 30, 1);");
            $("#excessive-content").attr("style", "background-color:RGBA(46, 72, 62, 1);");
            $("#lnk-content").attr("style", "background-color:RGBA(46, 72, 62, 1);");
        }
        count = count.toString();
        $("#count").attr("value", count);
    });

    $(".cur-per").focus(function(){
       $(this).css("background-color", "RGBA(177, 173, 177, 0.3)");
    });


    $(".cur-per").blur(function () {
        var $element = $(this);
        if ($element.text() == "") {
            $element.empty();
        }
        $(this).css("background-color", "white");
    });

    $('div').on('focus', ".prev-per", function () {
        var idname = $(this).attr("id");
        idname = idname.split('-')[2];
        var visibleid = "#prev-btn-" + idname;
        console.log(visibleid);
        $(this).css("background-color", "RGBA(177, 173, 177, 0.3)");
        $(visibleid).attr('style', 'visibility:"visible"');
    });

    $('div').on('blur', ".prev-per", function () {
        $('.del-btn').attr('style','visibility:hidden');
        var $element = $(this);
        if ($element.text() == "") {
            $element.empty();
        }
        $(this).css("background-color", "white");
    });

    $('div').on('focus', ".link-cell-content", function () {
        var idname = $(this).attr("id");
        idname = idname.split('-')[3];
        var visibleid = "#lnk-del-btn-" + idname;
        console.log(visibleid);
        $(visibleid).attr('style', 'visibility:"visible"');
    });

    $('div').on('focus', ".link-cell-link", function () {
        var idname = $(this).attr("id");
        idname = idname.split('-')[3];
        var visibleid = "#lnk-del-btn-" + idname;
        console.log(visibleid);
        $(visibleid).attr('style', 'visibility:"visible"');
    });

    $('div').on('blur', ".link-cell-content", function () {
        $('.lnk-del-btn').attr('style','visibility:hidden');
        var $element = $(this);
        if ($element.text() == "") {
            $element.empty();
        }
    });

    $('div').on('blur', ".link-cell-link", function () {
        $('.lnk-del-btn').attr('style','visibility:hidden');
        var $element = $(this);
        if ($element.text() == "") {
            $element.empty();
        }
    });

    $('div').on('click', '.lnk-del-btn', function (){
        var idname = $(this).attr("id");
        idname = idname.split('-')[3];
        var del_sec = "#lnk-cell-id-" + idname;
        console.log(del_sec);
        $(del_sec).remove();
    });

    $('div').on('click', '.del-btn', function (){
        var idname = $(this).attr("id");
        idname = idname.split('-')[2];
        var del_sec = "#prev-section-" + idname;
        $(del_sec).remove();
    });

    $("#locate-input").on("keydown",function(e){
        var key = e.keyCode || e.charCode;
        if(key == 13){
            $(this).blur();
        }
    });

    $("#locate-input").on("blur", function(){
        var city = $("#locate-input").text();
        var des = "http://open.mapquestapi.com/staticmap/v4/getplacemap?key=Fmjtd%7Cluu82q6a25%2C7g%3Do5-94t29z&location=" + city + "&size=950,600&type=map&zoom=13&imagetype=jpeg&showicon=red_1-1";
        $("#locate-img").attr("src", des);
    });

});
