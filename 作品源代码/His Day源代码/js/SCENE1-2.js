var mv = document.getElementById("mvpeople");
//轮播时间间隔
var inter=3500;
var tipdiv;
//右边特色窗口人的移动
var clickboy = 1;    //是否点击女孩
function rightPeo(){
    for (var i = 1; i <= 5; i++){
        (function(i){
            setTimeout(function timer(){
                var newPeo="#people2"+String(i);
                // console.log(i);
                //最前面的人向右边
                setInterval(function(){
                    $(newPeo).css("left",parseFloat($(newPeo).css("left"))+5+"px");
                },20);
                //整体向前
                for (var j = 1; j <= 100; j++){
                    (function(j){
                        setTimeout(function timer2(){
                            for(var k=i+1;k<=5;k++){
                                var leftMovePeo="#people2"+String(k);
                                $(leftMovePeo).css("left",parseFloat($(leftMovePeo).css("left"))+0.3+"px");
                                $(leftMovePeo).css("top",parseFloat($(leftMovePeo).css("top"))-0.5+"px");
                            }
                        }, j * 20); 
                    })(j); 
                }
            }, i * 7000); 
        })(i); 
    }
    $("#toptalking").toggle();
    setTimeout(function(){
    setTimeout(function () { show("饭堂里，你正在窗口前排队打饭","toptalking") }, 0*inter);
    setTimeout(function () { show("前面还有一位同学，马上就要到你了","toptalking") }, 1*inter);
    //操作提示
    },800);
    setTimeout(function () {
        if(clickboy) $("#tip").css("display", "block");
    }, 2*inter+800);
}


var mark2=0;
var mark;
function movePeo() {
    //轮回设计，使鼠标可以控制主角，可也脱离主角
    mark2^=1;
    if(mark2){  
        mark=0;
    }
    document.onmousemove = function(e) {
        if(mark){
            return;
        }
        var e = e || window.event;
        // 用于获取鼠标针对页面可视区的横纵坐标
        //console.log(e.clientX, e.clientY);
        mv.style.left = e.clientX - 43 + "px";
        mv.style.top = e.clientY - 66 + "px";
    }
    $("#mvpeople").one("click",function(){
        $("#mvpeople").css("left","450px");
        $("#mvpeople").css("top","350px");
        mark=1;
        return;
    });
}

$("#aimpeople").one("click",function start(){
    clickboy=0;
    $("#tip").css("display", "none");
    $("#talking").toggle();
    $("#toptalking").toggle();
    setTimeout(function () { show("他已经站在窗口前一段时间了，焦急地在衣服口袋里翻找着","talking") }, 0*inter);
    setTimeout(function () { show("也许是手机不知道落下在哪儿了吧，你这样想道","talking") }, 1*inter);
    setTimeout(function () { show("眼看着你前方的人迟迟没有刷饭钱，但他的饭已经打好了","talking") }, 2*inter);
    setTimeout(function () { show("他一脸尴尬，感到很无助","talking") }, 3*inter);
    setTimeout(function () { show("于是你想，要不要先替他刷卡好呢？","talking") }, 4*inter);
    setTimeout(function () { show("是否帮助他?","talking") }, 5*inter);
    setTimeout(function () { 
        $(".but").toggle(); 
        $("#talking").toggle();
        $("#talking").text("");
    }, 6*inter);
});
function buthelp(){
    $("#talking").toggle();
    $(".but").toggle(); 
    setTimeout(function () { show("你拿出手机，打开支付二维码","talking") }, 0*inter);
    setTimeout(function () { show("走上前去对这名同学说：来，你帮你刷卡吧","talking") }, 1*inter);
    setTimeout(function () { show("滴！支付失败！","talking") }, 2*inter);
    setTimeout(function () { show("刷卡机尖锐的提示音尖锐又刺耳，原来你卡里的余额也不足了","talking") }, 3*inter);
    setTimeout(function () { show("这时，你感觉到自己非常尴尬","talking") }, 4*inter);
    setTimeout(function () { show("你身后的人群中出现了一两声笑声","talking") }, 5*inter);
    setTimeout(function () { show("有位女孩子走上前去帮他刷了卡","talking") }, 6*inter);
    setTimeout(function () { show("你连忙让开位置，退到队伍后面","talking") }, 7*inter);
    setTimeout(function () { show("直到充值完毕才上前排队打饭","talking") }, 8*inter);
    //加分
    sessionStorage.setItem("points", parseFloat(sessionStorage.getItem("points"))+1);
    console.log(sessionStorage.getItem("points"));
    // $("body").css(animation,"openScene 3s ease 0s 1;");
    setTimeout(function () { self.location = 'SCENE2-1.html'; }, 10 * inter);
}

function butnohelp(){
    $("#talking").toggle();
    $(".but").toggle(); 
    setTimeout(function () { show("你后面的一位女孩子走上前帮他刷了卡","talking") }, 0*inter);
    setTimeout(function () { show("那位同学说了句谢谢，他俩搭上了话，有说有笑的离开了","talking") }, 1*inter);
    setTimeout(function () { show("你愣了愣，现在，轮到你打饭了","talking") }, 2*inter);
    setTimeout(function () { show("你默默地刷卡，吃饭，随后离开了饭堂","talking") }, 3*inter);
    //扣分
    sessionStorage.setItem("points", parseFloat(sessionStorage.getItem("points"))-1);
    console.log(sessionStorage.getItem("points"));
    setTimeout(function () { self.location = 'SCENE2-1.html'; }, 5 * inter);
}


//逐字打字显现字幕
var done;
function show(text,id) {
    //清除间隙执行，直接开始执行新的内容，以防函数反复调用出现的错误
    clearInterval(done);
    var i=1;
    var num = text.length;
    var wordInter=30;
    var perInter=parseInt(inter/num)/3;
    if(wordInter>perInter){
        wordInter=perInter;
    }
    done=setInterval(function(){
        var shower = text.substr(0,i);
        // $("#talking1").css("innerHTML",shower);
        document.getElementById(id).innerHTML = shower;
        i++;
        if(i - 1 >= num){
            clearInterval(done);
        }
    },wordInter);
}

//逐字打字显现字幕
var done1;
function show(text,id) {
    //清除间隙执行，直接开始执行新的内容，以防函数反复调用出现的错误
    clearInterval(done1);
    var i=1;
    var num = text.length;
    var wordInter=30;
    var perInter=parseInt(inter/num)/3;
    if(wordInter>perInter){
        wordInter=perInter;
    }
    done1=setInterval(function(){
        var shower = text.substr(0,i);
        // $("#talking1").css("innerHTML",shower);
        document.getElementById(id).innerHTML = shower;
        i++;
        if(i - 1 >= num){
            clearInterval(done1);
        }
    },wordInter);
}

//人物旁白
$("#waiter2").mouseenter(function () {
    $("#caption1").css("display","block");
    show("咋没有人来我这个窗口?","caption1");
});

$("#waiter2").mouseleave(function () {
    $("#caption1").css("display","none");
});


