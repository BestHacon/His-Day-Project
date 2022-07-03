var inter=3500;

setTimeout("showText1()", 0.4*inter);
function showText1() {
    show("咔~ 咔~ 咔~~", ".text");
}

setTimeout("showText2()", 1*inter);
function showText2() {
    show("在上学途中,你的自行车出现了故障。", ".text");
}

setTimeout("showText3()", 2*inter);
function showText3() {
    show("于是你下车尝试修理。", ".text");
}

setTimeout("showText4()", 3*inter);
function showText4() {
    show("可是你对自行车的故障无从下手", ".text");
}

setTimeout("showText5()", 4*inter);
function showText5() {
    show("你马上就要迟到了……", ".text");
}

setTimeout("showText6()", 5*inter);
function showText6() {
    show("这时,突然一辆小汽车从旁边经过", ".text");
}

setTimeout("showText7()", 6*inter);
function showText7() {
    show("你跟司机说明了你自己的情况", ".text");
}

setTimeout("showText8()", 7*inter);
function showText8() {
    show("司机得知情况后表示愿意让你搭他的车前往学校……", ".text");
}

setTimeout("showText9()", 8*inter);
function showText9() {
    var help_car = document.querySelector('.help_car');
    help_car.style = "display: block;"
    show("与此同时,马路对面修理店的老板走了过来", ".text");
}

setTimeout("showText10()", 9*inter);
function showText10() {
    show("问你发生了什么事。", ".text");
}

setTimeout("showText11()", 10*inter);
function showText11() {
    show("得知情况后,维修店老板让你把自行车先放在他店里", ".text");
}

setTimeout("showText12()", 11*inter);
function showText12() {
    show("让你放学后来取回,可以顺便帮你修理……", ".text");
}

setTimeout("showText13()", 12*inter);
function showText13() {
    show("此时,你回想起……", ".text");
}

setTimeout("showText21()", 13*inter);
function showText21() {
    show("自己以往在他人需要帮助时却没有伸出援助之手。", ".text");
}

setTimeout("showText14()", 14*inter);
function showText14() {
    show("今日却意外得到了他人的帮助。", ".text");
}

setTimeout("showText15()", 15*inter);
function showText15() {
    var help_repair = document.querySelector('.help_repair');
    help_repair.style = "display: block;";
    show("一股难以言说的愧疚感涌现在你心头,你突然意识到", ".text");
}

setTimeout("showText16()", 16*inter);
function showText16() {
    var help_repair = document.querySelector('.help_repair');
    help_repair.style = "display: block;";
    show("他人的帮助总能在关键时刻发挥作用。", ".text");
}

setTimeout("showText17()", 17*inter);
function showText17() {
    var people = document.querySelector('#people');
    var leftFoot = document.querySelector('.leftFoot');
    var rightFoot = document.querySelector('.rightFoot');
    people.style.transform = 'translate(-220px,-45px) scale(1)';
    people.style.transition = 'all 3s';
    leftFoot.style.animation = 'Foot .8s linear .2s infinite alternate';
    rightFoot.style.animation = 'Foot .8s linear 0s infinite alternate';
    show("上车前你向司机和维修店老板表达了谢意。", ".text");
}

setTimeout("showText18()", 18*inter);
function showText18() {
    var people = document.querySelector('#people');
    people.style = "display: none;";
    var tempHelp = document.querySelector('.tempHelp');
    var glass = document.querySelector('.glass');
    glass.style.transition="all 3.2s"
    tempHelp.style.transform ="translateX(-200px)";
    glass.style.transform = "translateX(-200px) rotateY(-150deg) scale(0.5)";
    show("就在刚刚踏上车后,你发现旁边有人需要帮忙找眼镜", ".text");
}

setTimeout("showglass()", 18.6*inter);
function showglass() {
    var glass = document.querySelector('.glass');
    glass.style.transition ="all 2s"
    glass.style.transform = "translateX(-360px) translateY(120px) rotateY(10deg)  scale(0.5)"; 
}

setTimeout("showText19()", 19*inter);
function showText19() {
    var glass = document.querySelector('.glass');
    glass.style.transform = "translateX(-350px) translateY(120px) rotateY(10deg) rotateZ(-30deg) scale(0.5)";
    show("你往车外望去,此时你还没有关上车门", ".text");
}

setTimeout("showText20()", 20*inter);
function showText20() {
    show("内心一直在动摇,你……", ".text");
}

setTimeout("showStar()", 21*inter);
function showStar() {
   var holder = document.querySelector('#holder');
   holder.style ='display:block;';
}

setTimeout("showBody()", 22*inter);
function showBody() {
    var body = document.body;
    body.style.transition="all 3s";
    body.style.transform ="translateX(-200px) scale(0)";
 }

//跳转页面
 setTimeout("turn()",23*inter);
function turn() {
    //通过标签控制刷新框架外的主页面
    // refresh=1;
    self.location = 'Endshow.html';
    sessionStorage.setItem("end2", parseFloat(sessionStorage.getItem("end2")) + 1);
}

//逐字打字显现字幕
var done;
var inter = 10000;
function show(text, Class) {
    //清除间隙执行，直接开始执行新的内容，以防函数反复调用出现的错误
    clearInterval(done);
    var i = 0;
    var num = text.length;
    var wordInter = 30;
    var perInter = parseInt(inter / num) / 3;
    if (wordInter > perInter) {
        wordInter = perInter;
    }
    done = setInterval(function () {
        var shower = text.substr(0, i);
        document.querySelector(Class).innerHTML = shower;
        i++;
        if (i - 1 >= num) {
            clearInterval(done);
        }
    }, wordInter);
}