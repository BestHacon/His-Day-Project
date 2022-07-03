var moves, x, pe,xm,can=0,a=0,inter=3500;
$(function () {
    function showtext(text, time, id) {//text是跳出的文字，time是跳出的间隔，id是需要设定文字跳动的标签id
        var num = text.length, i=1;
        function show() {
            var shower = text.substr(0, i);//每次都截一段，每次截的长度+1
            document.getElementById(id).innerHTML = shower;//输入到id里面
            i++;
            if (i-1 >= num)
                clearInterval(done);//当超过输入的文字字数的时候就会停止循环
        }
        var done = setInterval(show, time);//循环进行函数
   // showtext("你今天吃了吗", 500, "cp"); 这个为使用格式。填入的值同上。需要注意，这个函数要放在window.onload内部或者用jq处理
}
    $("#choice").hide();
    $("#talking").show();
    showtext("你今天要坐飞机回家了。前面安检很快速，应该不久就能进去了。", 30, "talking");
    setTimeout(function () { if(a==0)$("#talking").hide(); }, inter);
    $("*").keydown(function (move) {
        moves = move.keyCode || move.which;
        if (moves == 37) {
            $("*").animate({ left: '+=2000px' }, 10000);
            $("#talking").stop(true);
            $("#choice1").stop(true);
            $("#choice2").stop(true);
            $("#musicopen").stop(true);
            $("#musicclose").stop(true);
        }
        if (moves == 39) {
            $("*").animate({ left: '-=2000px' }, 10000);
            $("#talking").stop(true);
            $("#choice1").stop(true);
            $("#choice2").stop(true);
            $("#musicopen").stop(true);
            $("#musicclose").stop(true);
        }
    });
    $("*").keyup(function (move) {
        moves = move.keyCode || move.which;
        if (moves == 37) {
            $("*").stop(true);
        }
        if (moves == 39) {
            $("*").stop(true);
        }
    });
    function say() {
        $("#othertalking").text("怎么这么慢呢！？");
        setTimeout(function () { $("#othertalking").text("我快迟到了！！！！") }, 4000);
        setTimeout(function () { $("#othertalking").text("前面到底在堵什么？！？！！") }, 8000);
        setTimeout(function () { $("#othertalking").text("怎么这条队伍没有动过？！！") }, 12000);
        setTimeout(function () { $("#othertalking").text("快来不及了！？！") }, 16000);
        setTimeout(say, 20000);

    }
    say();
    $("#people02").click(function () {
        a = 1;
        $("#people02").off();
        $("#talking").show();
        showtext("她的行李好像散落一地，正在手忙脚乱地收拾。", 30, "talking");
        setTimeout(function () { showtext("要不要帮她呢？帮完她重新排队还来得及。", 30, "talking");},inter);
        setTimeout(function () { showtext("但毕竟旁边还有很多人，他们可能会帮她", 30, "talking"); },inter*2);
        setTimeout(function () {$("#choice").toggle(); $("#talking").hide(); }, inter*3);
        setTimeout(function () {
            if (can == 0) {
                $("#choice").children().off();
                $("#talking").show();
                $("#choice").hide();
                showtext("你无法抉择要不要帮助她，既想帮她又怕做错什么。", 30, "talking");
                setTimeout(function () { showtext("最终，还是附近的人出手帮助，让她快速收拾完并通过安检。", 30, "talking"); }, inter);
                sessionStorage.setItem("points", parseFloat(sessionStorage.getItem("points")) - 1);
                console.log(sessionStorage.getItem("points"));
                setTimeout(function () { self.location = 'SCENE2-2Talking.html';  }, inter*2+1000);
            }
        }, 27000);
    });
    $("#choice1").click(function () {
        can = 1;
        $("#choice").hide();
        $("#talking").show();
        showtext("她需要帮助，而且因为收拾还阻碍了后面的人。", 30, "talking");
        setTimeout(function () { showtext("于情于理，你都需要去帮助她。", 30, "talking"); }, inter);
        setTimeout(function () { showtext("你过去帮着她收拾。她抬头看了看你，但她并没有说什么。", 30, "talking"); }, inter*2);
        setTimeout(function () { showtext("收拾完后，她突然发现缺了她的充电宝——原本为了方便收拾她放在旁边了。", 30, "talking");}, inter*3);
        setTimeout(function () { showtext("充电宝不能托运，她必须从行李箱中拿出来。", 30, "talking");}, inter*4);
        setTimeout(function () { showtext("隐约想起来你好像放进去了一个充电宝，但是衣服太多不好再次翻找。", 30, "talking");  }, inter*5);
        setTimeout(function () { showtext("她只好先脱离队伍，重新打开行李箱再次翻找起来。", 30, "talking"); }, inter*6);
        setTimeout(function () { showtext("花了很长时间，你们差点赶不上飞机。", 30, "talking"); }, inter * 7);
        sessionStorage.setItem("points", parseFloat(sessionStorage.getItem("points")) + 1);
        console.log(sessionStorage.getItem("points"));
        setTimeout(function () { self.location = 'SCENE2-2Talking.html';  }, inter*8+1000);
    });
    $("#choice2").click(function () {
        can = 1;
        $("#choice").hide();
        $("#talking").show();
        showtext("会有其他人帮他的。你距离这么远过去太尴尬了", 30, "talking");
        setTimeout(function () { showtext("她旁边还有很多人，他们也会帮他的。", 30, "talking");},inter);
        setTimeout(function () { showtext("如果帮了什么倒忙，反而会更加堵塞，甚至还会受到责骂。", 30, "talking"); },inter*2);
        setTimeout(function () { showtext("况且这与你无关，堵塞是她的错，疏通也不是你的责任。", 30, "talking"); }, inter * 3);
        sessionStorage.setItem("points", parseFloat(sessionStorage.getItem("points")) - 1);
        console.log(sessionStorage.getItem("points"));
        setTimeout(function () { self.location = 'SCENE2-2Talking.html';  }, inter*4+1000);
    });
    $("#people01").mouseenter(function () {
        $("#talking1").show();
    });
    $("#people01").mouseleave(function () {
        $("#talking1").hide();
    });
    $("#people02").mouseenter(function () {
        $("#talking2").show();
    });
    $("#people02").mouseleave(function () {
        $("#talking2").hide();
    });
    $("#checkcomputer").mouseenter(function () {
        $("#talking3").show();
    });
    $("#checkcomputer").mouseleave(function () {
        $("#talking3").hide();
    });
    $("#othertalking").mouseenter(function () {
        $("#talking4").show();
    });
    $("#othertalking").mouseleave(function () {
        $("#talking4").hide();
    });
    $("#talking1").hide();
    $("#talking2").hide();
    $("#talking3").hide();
    $("#talking4").hide();
    $("#talking5").hide();
    $("#othertalking").mouseenter(function () {
        $("#arrow").show();
    });
    $("#othertalking").mouseleave(function () {
        $("#arrow").hide();
    });
    $("#arrow").hide();
    var ti = 0,to=0;
    $("#computer").click(function () {
        if (to == 0) {
            to = 1;
            //console.log(to);
            $("#talking5").text("前面还有二个人");
            $("#computer").click(function () {
                if (ti == 0) {
                    $("#talking5").text("前面还有一个人");
                    $("#computer").click(function () {
                        if (ti == 0) {
                            ti = 1;
                            a = 1;
                            //console.log(ti);
                            $("#talking").show();
                            $("#talking5").text("你已经在最前面了");
                            showtext("你已经排到了最前面，准备通过检测登机了。虽然听到了背后传来的吵闹声，但是也和你没有什么关系了。", 30, "talking");
                            //正常结局判断减1
                            sessionStorage.setItem("points", parseFloat(sessionStorage.getItem("points")) - 1);
                            //隐藏结局判断加1
                            sessionStorage.setItem("secretScene", parseFloat(sessionStorage.getItem("secretScene")) + 1);
                            console.log(sessionStorage.getItem("points"));
                            setTimeout(function () { self.location = 'SCENE2-2Talking.html'; },inter+1000);
                        }
                    })}
            });
        }});
    $("#computer").mouseenter(function () {
        $("#talking5").show();
    });
    $("#computer").mouseleave(function () {
        $("#talking5").hide();
    });
});
