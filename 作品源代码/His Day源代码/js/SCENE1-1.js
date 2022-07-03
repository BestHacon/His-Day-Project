var triRan = 500;//触发框大小
var balSpeed = 70;//气球逼近速度，越小越快
var mvMark = 1;
var mvMark2 = 1;
var mvballon = 1;
var inter = 3500;  //轮播时间间隔
var markHelp = 0;
var clickgirl = 1;    //是否点击女孩
var track = 1;
var ifTick=1;       //是否绑定气球
var mv = document.getElementById("mvpeople");
var objmv2 = document.getElementById("mvpeople2");
var objbgMain = document.getElementById("bgMain");
var objgirl = document.getElementById("girl");
var objgirl2 = document.getElementById("girl2");
var objcap1 = document.getElementById("caption1");
var objcap2 = document.getElementById("caption2");
var objBal = document.getElementById("ballon");
var objPlant = document.getElementsByClassName("plant");
var objFoot = document.getElementsByClassName("foot");
var objcloud = document.getElementById("cloud");
var cnt=0;

//气球🎈初始位置
objBal.style.left = document.documentElement.clientWidth + "px";
objBal.style.top = (document.documentElement.clientHeight / 10) + "px";


function getStyle(obj, attr) {
    if (typeof getComputedStyle)
        return getComputedStyle(obj, null)[attr];
    else return obj.currentStyle[attr];
}

// 创建div, className是其类名
function creatediv(className, top) {
    top^=1;
    var div = document.createElement('div');
    div.innerHTML = objcloud.innerHTML;
    div.style.zIndex = objcloud.style.zIndex;
    div.style.position = "absolute";
    div.style.cursor="default";
    var i = Math.floor(Math.random() * 100);
    div.style.left = i + "%";
    div.className = "childCloud";
    if (top) {
        //底部生成云
        div.style.top = parseFloat($("#con").css("top"))*-1 + 800 + "px";
        // div.style.bottom = $("#con").css("bottom");
    }
    else {
        div.style.bottom = $("#con").css("top");
    }

    return div;
}

// 创造一个<div class="row">并且有四个子节点<div class="cell">
function createrow(sspeed, top) {
    if(sspeed==-100){
        aa=5;
    }
    else{
        aa=20;
    }
    if(cnt%aa==0){
    var objcon = document.getElementById("con");
    var row = creatediv('row', top); //创建div className=row
    objcon.appendChild(row); // 添加row为con的子节点
    
    }
    cnt++;
    $("#con").css("top", parseFloat($("#con").css("top")) + sspeed + "px");
}

var speed = 0;
//下落距离控件
{
    var objAl = document.getElementById('altitude');
    //自由下落
    var perDrop = setInterval("drop()", 40);
    // setInterval('alert("欢迎来到CodePlayer");', 5000);//测试
    //按键加速上升下落
    document.onkeydown = function (event) {
        var ekey = event || window.event || arguments.callee.caller.arguments[0];
        if (ekey && ekey.keyCode == 38) { // 按 UP 
            speed = 50;
            objAl.innerHTML = parseFloat(objAl.innerHTML) + 20;
            createrow(20, 1);
        }
        if (ekey && ekey.keyCode == 40) { // 按 Down
            speed = -100;
            objAl.innerHTML = parseFloat(objAl.innerHTML) - 100;
            createrow(-100, 0);
        }
        speed = 0;
    };
    //没气球下落距离
    function perMS_noBal() {
        objAl.innerHTML = parseFloat(objAl.innerHTML) - 3;
        if (!speed) {
            speed = -30;
        }
        createrow(-10, 0);
    }
    //有气球上升距离
    function perMS_isBal() {
        objAl.innerHTML = parseFloat(objAl.innerHTML) + 3;
        if (!speed) {
            speed = 30;
        }
        createrow(10, 1);
    }
    function drop() {
        var inHtml = parseFloat(objAl.innerHTML);
        if (mvballon) {
            //没气球
            perMS_noBal();
        }
        else {
            perMS_isBal()
            //有气球

        }
        speed = 0;
        //落地清除
        if (-100 <= inHtml && inHtml <= 100) {
            clearInterval(perDrop);
            objAl.style.display = "none";
            objBal.style.display = "none";
            mv.style.display = "none";
            document.getElementById("altitudeDiv").style.display = "none";
            //场景淡入出现
            objbgMain.style.display = "block";
            objbgMain.style.animation="openScene 2s ease 0s 1";
            objgirl.style.display = "block";
            objgirl.style.animation="openScene 2s ease 0s 1";
            objcap1.style.display = "block";
            objcap1.style.animation="openScene 2s ease 0s 1";
            objcap2.style.display = "block";
            objcap2.style.animation="openScene 2s ease 0s 1";
            objmv2.style.display = "block";
            objmv2.style.animation="openScene 2s ease 0s 1";
            for (var i = 0; i <= 5; i++) {
                objPlant[i].style.display = "block";
                objPlant[i].style.animation="openScene 2s ease 0s 1";
            }
            for (var i = 0; i <= 3; i++) {
                objFoot[i].style.display = "block";
                objFoot[i].style.animation="openScene 2s ease 0s 1";
            }
            setInterval(function(){
                objFoot[0].style.animation="walk 2.3s linear 1.15s infinite";
                objFoot[1].style.animation="walk 2.3s linear 0s infinite";
                objFoot[2].style.animation="walk 2.3s linear 1.15s infinite";
                objFoot[3].style.animation="walk 2.3s linear 0s infinite";
            },1000);
            $("#con").css("display","none");
            mvballon = 0;
            //按下键提示
            $("#tip2_1").css("display", "none");
            $("#tip2_2").css("display", "none");
            plot1();

        }
    }
}

function abs(x) {
    if (x < 0) {
        return -x;
    }
    else if (x >= 0) {
        return x;
    }
}

function movePeo() {
    if (mvMark) {
        mvMark = 0;

        document.onmousemove = function (e) {
            var e = e || window.event;
            // 用于获取鼠标针对页面可视区的横纵坐标
            //console.log(e.clientX, e.clientY);
            mv.style.left = e.clientX - 43 + "px";
            mv.style.top = e.clientY - 66 + "px";
            if (!mvballon) {
                objBal.style.left = parseFloat(mv.style.left) + 48 + "px";
                objBal.style.top = parseFloat(mv.style.top) - 114 + "px";
            }
            var x = e.clientX;
            var y = e.clientY;
            var windowHeigh = (document.documentElement.clientHeight - triRan) / 2;
            var windowWidth = (document.documentElement.clientWidth - triRan) / 2;
            if (x >= windowWidth && x <= windowWidth + triRan && y >= windowHeigh && y <= windowHeigh + triRan && mvballon) {
                objBal.style.display = "block";
            }

        }
    }
    //气球脱离
    {
        mvballon = 1;
        // clearInterval(tinkle);
        $("#tip2_1").css("display", "none");
        $("#tip2_2").css("display", "none");
        ifTick=0;
        setTimeout(function(){
            ifTick=1;
        },2000);
    }
}

//气球靠近控件
var tinkle = setInterval(function peoBal() {
    if (mvballon && objBal.style.display == "block") {
        var balx = ((parseFloat(objBal.style.top) - (parseFloat(mv.style.top) - 130)) / balSpeed);
        var baly = ((parseFloat(objBal.style.left) - (parseFloat(mv.style.left) + 20)) / balSpeed);
        objBal.style.top = (parseFloat(objBal.style.top) - balx) + "px";
        objBal.style.left = (parseFloat(objBal.style.left) - baly) + "px";
        //判断气球位置，在适当位置绑定
        if ((abs(parseFloat(mv.style.left) - parseFloat(objBal.style.left) + 50) <= balSpeed / 5)
            && (abs(parseFloat(mv.style.top) - parseFloat(objBal.style.top) - 120) <= balSpeed / 5)
            &&ifTick) {
            mvballon = 0;
            // clearInterval(tinkle);
            setTimeout(function () {
                $("#tip2_1").css("display", "block");
                $("#tip2_2").css("display", "block");
            }, 2000);
        }
    }
}, 30);



var peoSpeed = 0.23;
var left = 0;
// markHelp = 1;
function plot1() {
    $("#talking").toggle();
    setTimeout(function () {
        // $("#talking").text("这天早上清新凉爽，你正在校道上散步");
        show("开学日这天早晨，阳光灿烂，空气清新，你正在校园的小径上散步","talking");
    }, 1000);
    //操作提示控件,如果已经按了任务就不需再提示
    setTimeout(function () {
        if(clickgirl){
            $("#tip").css("display", "block");
        }
    }, 11000);
    //人物移动控件
    var plot1mv = setInterval(function () {

        if (markHelp) {
            if (track) {
                
                track = 0;
                //left的优先级高，会破坏后面right的赋值，因此这里用right，left保持initial(默认)。
                $("#girl2").css("right", parseFloat($("#girl").css("right")) + "px");
                $("#girl2").css("bottom", parseFloat($("#girl").css("bottom")) + "px");
                $("#girl").css("display", "none");
                $("#girl2").css("display", "block");
                $("#mvpeople3").css("right", parseFloat($("#girl2").css("right")) + 130 + "px");
                $("#mvpeople3").css("bottom", parseFloat($("#girl2").css("bottom")) + "px");
                $("#mvpeople2").css("display", "none");
                $("#mvpeople3").css("display", "block");
            }
        }
        else {
            if (parseFloat($("#mvpeople2").css("left")) > 1400) {
                left = 1;
            }
            else if (parseFloat($("#mvpeople2").css("left")) < 100) {
                left = 0;
            }
            if (left) {
                $("#mvpeople2").css("left", parseFloat($("#mvpeople2").css("left")) - peoSpeed * 2 + "px");
            }
            else {
                $("#mvpeople2").css("left", parseFloat($("#mvpeople2").css("left")) + peoSpeed * 2 + "px");
            }
            //脚与身体绑定
            bodyFoot1("#mvpeople2","#foot1","#foot2");
        }
        if (markHelp) {
            if (parseFloat($("#girl2").css("right")) < 1100) {
                $("#girl2").css("right", parseFloat($("#girl2").css("right")) + peoSpeed + "px");

            }
            else {
                if (parseFloat($("#girl2").css("bottom")) < 400) {
                    $("#girl2").css("bottom", parseFloat($("#girl2").css("bottom")) + peoSpeed + "px");
                }
            }
            $("#mvpeople3").css("right", parseFloat($("#girl2").css("right")) - 120 + "px");
            $("#mvpeople3").css("bottom", parseFloat($("#girl2").css("bottom")) + "px");
            bodyFoot2("#mvpeople3","#foot1","#foot2");
            bodyFoot2("#girl2","#foot3","#foot4");
        }
        else {
            if (parseFloat($("#girl").css("right")) < 1100) {
                $("#girl").css("right", parseFloat($("#girl").css("right")) + peoSpeed + "px");
                $("#tip").css("right", parseFloat($("#girl").css("right")) + peoSpeed +15+ "px");
                $("#tip").css("bottom", parseFloat($("#girl").css("bottom")) - 80 + "px");
            }
            else {
                if (parseFloat($("#girl").css("bottom")) < 400) {
                    $("#girl").css("bottom", parseFloat($("#girl").css("bottom")) + peoSpeed + "px");
                    $("#tip").css("bottom", parseFloat($("#girl").css("bottom")) - 80 + "px");
                }
            }
            bodyFoot2("#girl","#foot3","#foot4");
        }
        
    }, 20);

    //点击女孩触发剧情
    $("#girl").one("click", function () {
        if (clickgirl) {
            clickgirl=0;
            $("#tip").css("display", "none");
            // setTimeout(function () { $("#talking").text("一位女同学吃力地搬着两个大箱子走向宿舍"); }, 0 * inter);
            // setTimeout(function () { $("#talking").text("她喘着大气，步履艰辛从你旁边经过"); }, 1 * inter);
            // setTimeout(function () { $("#talking").text("你脑海中浮现出帮助她的念头"); }, 2 * inter);
            setTimeout(function () { show("这时，你看到一位女同学正搬着两个大箱子，摇摇晃晃地走向宿舍","talking") }, 0*inter);
            setTimeout(function () { show("只见她大汗淋漓，气喘吁吁地从你身旁缓缓经过","talking") }, 1*inter);
            setTimeout(function () { show("你脑海中浮现出一个念头：要不要帮助她呢？","talking") }, 2*inter);

            setTimeout(function () {
                $(".but").toggle();
                $("#talking").toggle();
                $("#talking").text("");
            }, 4*inter);
        }
    });
}

//脚与身体绑定函数mvpeople2
function bodyFoot1(bodyId,footId1,footId2){
    var lefttmp=parseFloat($(bodyId).css("left"));
    var toptmp =parseFloat($(bodyId).css("top"));
    $(footId1).css("left",lefttmp+29+"px");//16
    $(footId1).css("top",toptmp+65+"px");
    $(footId2).css("left",lefttmp+29+"px");//42
    $(footId2).css("top",toptmp+65+"px");
}
//girl1、girl2
function bodyFoot2(bodyId,footId1,footId2){
    var lefttmp=parseFloat($(bodyId).css("left"));
    var toptmp =parseFloat($(bodyId).css("top"));
    $(footId1).css("left",lefttmp+79+"px");//66
    $(footId1).css("top",toptmp+65+"px");
    $(footId2).css("left",lefttmp+79+"px");//92
    $(footId2).css("top",toptmp+65+"px");
}
//mvpeople3
function bodyFoot3(bodyId,footId1,footId2){
    var lefttmp=parseFloat($(bodyId).css("left"));
    var toptmp =parseFloat($(bodyId).css("top"));
    $(footId1).css("left",lefttmp+29+"px");//16
    $(footId1).css("top",toptmp+65+"px");
    $(footId2).css("left",lefttmp+29+"px");//42
    $(footId2).css("top",toptmp+65+"px");
}



function buthelp() {
    $("#talking").toggle();
    $(".but").toggle();
    setTimeout(function () { show("你径直走向前去，对她说：同学你好，需要帮忙吗？","talking") }, 0*inter);
    setTimeout(function () { show("女孩缓缓抬头，对你露出了灿烂的微笑，点了点头","talking") }, 1*inter);
    setTimeout(function () { show("于是，你从她手中接过来一个大箱子","talking") }, 2*inter);
    setTimeout(function () { markHelp = 1; }, 2 * inter);
    setTimeout(function () { show("同她一起搬往宿舍区","talking") }, 3*inter);
    setTimeout(function () { show("！！！","talking") }, 4*inter);
    setTimeout(function () { show("箱子真的太大了，它挡住了你的视线","talking") }, 5*inter);
    setTimeout(function () { show("你被路上的缓冲带给绊倒了","talking") }, 6*inter);
    setTimeout(function () { show("你连忙从地上爬起来，跑向前去，捡起箱子","talking") }, 7*inter);
    setTimeout(function () { show("却发现箱子上多了几道划痕","talking") }, 8*inter);
    setTimeout(function () { show("只见女孩皱了皱眉头，却也没有说什么","talking") }, 9*inter);
    setTimeout(function () { show("你把箱子搬到她宿舍门口","talking") }, 10*inter);
    setTimeout(function () { show("她面无表情的向你说了声谢谢后便再也没有说什么","talking") }, 11*inter);
    setTimeout(function () { show("于是你默默离开了","talking") }, 11*inter);
    //加分
    sessionStorage.setItem("points", parseFloat(sessionStorage.getItem("points"))+1);
    console.log(sessionStorage.getItem("points"));
    setTimeout(function () { self.location = 'SCENE1-2.html'; }, 14 * inter);
}

function butnohelp() {
    $("#talking").toggle();
    $(".but").toggle();
    setTimeout(function () { show("你想，自己与她素不相识，还是不要多管闲事了吧","talking") }, 0*inter);
    setTimeout(function () { show("以免被认识的人看到产生误会，万一把人家的东西摔坏了多尴尬","talking") }, 1*inter);
    setTimeout(function () { show("于是，你便离开了","talking") }, 2*inter);
    //扣分
    sessionStorage.setItem("points", parseFloat(sessionStorage.getItem("points"))-1);
    console.log(sessionStorage.getItem("points"));
    setTimeout(function () { self.location = 'SCENE1-2.html'; }, 4 * inter);
}


//逐字打字显现字幕
var done;
function show(text,id) {
    //清除间隙执行，直接开始执行新的内容，以防函数反复调用出现的错误
    clearInterval(done);
    var i=0;
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
function show1(text,id) {
    //清除间隙执行，直接开始执行新的内容，以防函数反复调用出现的错误
    clearInterval(done1);
    var i=0;
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

//旁白
$("#leave").mouseenter(function () {
    $("#caption_tree").css("display","block");
    show1("风掠过树梢，沙沙作响","caption_tree");
});

$("#leave").mouseleave(function () {
    $("#caption_tree").css("display","none");
});

