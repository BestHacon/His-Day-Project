var moves, x, pe,xm,can=0,a=0,b=0,inter=3500,c=0,d=0,e=0,f=0;//self-location能够跳转网页(通过更改url)
$(function () {
        function showtext(text, time, id) {//text是跳出的文字，time是跳出的间隔，id是需要设定文字跳动的标签id
            var num = text.length, i = 1;
            function show() {
                var shower = text.substr(0, i);//每次都截一段，每次截的长度+1
                document.getElementById(id).innerHTML = shower;//输入到id里面
                i++;
                if (i - 1 >= num)
                    clearInterval(done);//当超过输入的文字字数的时候就会停止循环
            }
            var done = setInterval(show, time);//循环进行函数
        }
        // showtext("你今天吃了吗", 500, "cp"); 这个为使用格式。填入的值同上。需要注意，这个函数要放在window.onload内部或者用jq处理
    $("#talking").show();
    showtext("雨下得很大，你正快步走在回家的路上。(家在右边，可以通过方向键进行移动)", 30,"talking");
    setTimeout(function () { if(a==0)$("#talking").hide(); }, inter);
    $("body").keydown(function (move) {
        if (f == 1) return;
        moves = move.keyCode || move.which;
        if (moves == 37) {
            $("#people01").animate({ left: '-=2000px' }, 10000);
            $("#umbrella1").animate({ left: '-=2000px' }, 10000);
        }
        if (moves == 38) {
            $("#people01").animate({ bottom: '+=2000px' }, 10000);
            $("#umbrella1").animate({ bottom: '+=2000px' }, 10000);
        }
        if (moves == 39) {
            $("#people01").animate({ left: '+=2000px' }, 10000);
            $("#umbrella1").animate({ left: '+=2000px' }, 10000);
        }
        if (moves == 40) {
            $("#people01").animate({ bottom: '-=2000px' }, 10000);
            $("#umbrella1").animate({ bottom: '-=2000px' }, 10000);
        }
    });
    $("body").keyup(function (move) {
        moves = move.keyCode || move.which;
        if (moves == 37) {
            $("#people01").stop(true);
            $("#umbrella1").stop(true);
        }
        if (moves == 38) {
            $("#people01").stop(true);
            $("#umbrella1").stop(true);
        }
        if (moves == 39) {
            $("#people01").stop(true);
            $("#umbrella1").stop(true);
        }
        if (moves == 40) {
            $("#people01").stop(true);
            $("#umbrella1").stop(true);
        }
        pe = document.getElementById("people01");
        if (parseFloat(window.getComputedStyle(pe, null).getPropertyValue("left")) >= 1240&&e==0) {//如果需要防止一直按着右键的bug，那就设定时间循环执行
            a = 1;
            b = 1;
            c = 1;
            if (d == 0) {
                $("#talking").show();
                showtext("为了避免淋雨，你直接跑回了家。", 30, "talking");
                setTimeout(function () {
                    //隐藏结局判断减1
                    sessionStorage.setItem("points", parseFloat(sessionStorage.getItem("points")) - 1);
                    console.log(sessionStorage.getItem("points"));
                    //隐藏结局判断加1
                    sessionStorage.setItem("secretScene", parseFloat(sessionStorage.getItem("secretScene")) + 1);
                    self.location = 'SCENE3-1.html';
                }, inter+1000);
                d = 1;
            }
            }
    });
    $(".people").mouseenter(function () {//这个不知道如果鼠标移动到名字的隐藏位置会不会影响。这个是显示名字
        $(".people").children(".peoplename").show();
    });
    $(".people").mouseleave(function () {//这个是隐藏名字
        $(".people").children(".peoplename").hide();
    });
    function raining() {
        $('.rain').animate({
            right: '2000px',
            top: '800px'
        }, 2500);
        setTimeout(function () { $('.rain').css("right", "-500px") }, 2550);
        setTimeout(function () { $('.rain').css("top", "-900px") }, 2550);
        setTimeout(raining, 2550);
    }
    raining();
    $('#people1').hide();
    $('#people2').hide();
    $('#people3').hide();
    function chancingpeople() {
        setTimeout(function () { $('#people1').toggle(); }, 1);//有空可以换成promise
        setTimeout(function () { $('#people1').toggle(); }, 1000);
        setTimeout(function () { $('#people2').toggle(); }, 1000);
        setTimeout(function () { $('#people2').toggle(); }, 2000);
        setTimeout(function () { $('#people3').toggle(); }, 2000);
        setTimeout(function () { $('#people3').toggle(); }, 3000);
        setTimeout(chancingpeople, 3001);
    }
    chancingpeople();
    $("#choice").hide();
    $("#people04").one("click", function () {//可以考虑改one
        if (c == 1)
            return;
        a = 1;
        b = 1;
        e = 1;
        $("#talking").show();
        showtext("看样子他在寻找着什么？而且还没有带雨伞。", 30, "talking");
        setTimeout(function () { showtext("或许你应该过去帮他遮一下雨？但是雨太大了，你去帮忙的话可能会被淋湿。", 30, "talking"); }, inter);
        setTimeout(function () { showtext("况且不确定他是不是故意在那淋雨。", 30, "talking"); }, inter * 2);
        setTimeout(function () { showtext("这年头挺多这种夸张表演的短视频的。要是如此你过去就成搞笑素材了。", 30, "talking"); }, inter*3);
        setTimeout(function () { $("#choice").show(); $("#talking").hide(); }, inter*4);
        setTimeout(function () {
            if (can == 0) {
                $("#choice").children().off();
                $("#talking").show();
                $("#choice").hide();
                showtext("你还是不敢上前，只能远远的看着他被大雨包裹。", 30, "talking");
                setTimeout(function () { showtext("是太犹豫、太胆小了。", 30, "talking"); }, inter);
                sessionStorage.setItem("points", parseFloat(sessionStorage.getItem("points")) - 1);
                console.log(sessionStorage.getItem("points"));
                setTimeout(function () { self.location = 'SCENE3-1.html';}, inter*2+1500);
            }
        },inter*7);
        $("#windor").off();
    });
    //选项
    $("#choice1").click(function () {
        can = 1;
        f = 1;
        $("#choice").hide();
        $("#talking").show();
        $("#people01").animate({ left: '920px',bottom: '340px'  }, 1000);
        $("#umbrella1").animate({ left: '970px',bottom: '190px'}, 1000);
        showtext("被淋湿一点也不是很要紧吧？", 30, "talking");
        setTimeout(function () { showtext("你走了过去，让雨伞恰好遮挡住他。", 30, "talking");}, inter);
        setTimeout(function () { showtext("他显然有些惊讶，随后连声感谢，并恳求你帮他一起找到他丢失的钥匙。", 30, "talking");}, inter*2);
        setTimeout(function () { showtext("很快，你就在一个不起眼的水坑中找到了钥匙。", 30, "talking");}, inter*3);
        setTimeout(function () { showtext("他连声道谢，用力低下了头", 30, "talking");}, inter*4);
        setTimeout(function () { showtext("你突然觉得淋到的雨好像都变暖了", 30, "talking"); }, inter * 5);
        sessionStorage.setItem("points", parseFloat(sessionStorage.getItem("points")) + 1);
        console.log(sessionStorage.getItem("points"));
        setTimeout(function () { self.location = 'SCENE3-1.html';}, inter*6+1500);
    });
    $("#choice2").click(function () {
        can = 1;
        $("#choice").hide();
        $("#talking").show();
        showtext("帮了他对你没有任何好处反而可能出事，算了吧。", 30, "talking");
        setTimeout(function () { showtext("你自认为这是一个聪明的选择。", 30, "talking");},inter);
        setTimeout(function () { showtext("你没有必要去牺牲自己的利益，去做一件不知道是否正确的事。", 30, "talking");}, inter*2);
        setTimeout(function () { showtext("你快步走开，衣服基本上没有被淋到。", 30, "talking"); }, inter*3);
        setTimeout(function () { showtext("或许这才是正确的？", 30, "talking"); $("#talking").text("") }, inter * 4);
        //正常结局判断减1
        sessionStorage.setItem("points", parseFloat(sessionStorage.getItem("points")) - 1);
        console.log(sessionStorage.getItem("points"));
        setTimeout(function () { self.location = 'SCENE3-1.html';}, inter*5+1500);
    });
    $("#windor").click(function () {
        a = 1;
        $("#talking").show();
        showtext("现在还不是很饿，也没有什么需要买的东西。还是先回家吧", 30, "talking"); 
        setTimeout(function () {if(b==0) $('#talking').hide(); }, inter*3);
    });
    $(".building").mouseenter(function () {
        $("#talking1").show();
    });
    $(".building").mouseleave(function () {
        $("#talking1").hide();
    });
    $("#people02").mouseenter(function () {
       $("#talking2").show();
    });
    $("#people02").mouseleave(function () {
        $("#talking2").hide();
    });
    $("#people04").mouseenter(function () {
        $("#talking3").show();
    });
    $("#people04").mouseleave(function () {
        $("#talking3").hide();
    });
    $("#talking1").hide();
    $("#talking2").hide();
    $("#talking3").hide();
});
