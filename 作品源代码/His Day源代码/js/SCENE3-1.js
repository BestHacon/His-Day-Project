window.onload = function () {
    var people = document.querySelector('#people');
    var leftFoot = document.querySelector('.leftFoot');
    var rightFoot = document.querySelector('.rightFoot');
    var older = document.querySelector('#older');
    var button1 = document.querySelector('.help');
    var button2 = document.querySelector('.nohelp');
    document.getElementById("people").addEventListener("transitionend", myFunction);

    function myFunction() {
        leftFoot.style.animation = 'pause';
        rightFoot.style.animation = 'pause';
    }
    button1.onclick = function () {
        people.style = "transition: all 10s";
        older.style.transform = "translateX(-670px) rotateY(180deg) scale(0.8)";
        people.style.transform = "translateX(-680px) scale(1.2)";
        leftFoot.style.animation = 'Foot .8s linear .2s infinite alternate';
        rightFoot.style.animation = 'Foot .8s linear 0s infinite alternate';
        button1.style = "display: none";
        button2.style = "display: none";
        show("你决定帮助老人过马路(心想:每日一善!助人为乐!)", ".text");
        sessionStorage.setItem("points", parseFloat(sessionStorage.getItem("points")) + 1);
        setTimeout("showAppreciate()", 0.8 * inter);
        setTimeout("showtext7()", 1.2 * inter);
        setTimeout("showtext8()", 2 * inter);
        setTimeout("showtext9()", 2.6 * inter);
        setTimeout("showtext10()", 4 * inter);
        setTimeout("showtext11()", 5 * inter);
        setTimeout("showtext12()", 6 * inter);
        setTimeout("showtext13()", 7 * inter);
        setTimeout("showtext14()", 8 * inter);
    }
    button2.onclick = function () {
        people.style = "transition: all 10s";
        people.style.transform = "translate(800px,-1680px) scale(1.2)";
        leftFoot.style.animation = 'Foot .8s linear .2s infinite alternate';
        rightFoot.style.animation = 'Foot .8s linear 0s infinite alternate';
        button1.style = "display: none";
        button2.style = "display: none";
        setTimeout("car()", 1000);
        setTimeout("car2()", 2000);
        setTimeout("turn()", 3000 + 1.5 * inter);
        show("算了吧!我还有点急事!(你对自己这样说)", ".text");
        sessionStorage.setItem("points", parseFloat(sessionStorage.getItem("points")) - 1);
    }
}
var inter = 3500;

setTimeout("showtext1()", 0.3 * inter);

function showtext1() {
    show("咦？今天的交通信号灯怎么发生故障了?(你心想)", ".text");
}

setTimeout("showtext2()", 1 * inter);

function showtext2() {
    show("由于红绿灯发生故障", ".text");
}

setTimeout("showtext3()", 2 * inter);

function showtext3() {
    show("车辆来来往往，行人难以通行！", ".text");
}

setTimeout("showtext4()", 3 * inter);

function showtext4() {
    show("你看到了路旁的老人准备过马路。", ".text");
}

setTimeout("showtext5()", 4 * inter);

function showtext5() {
    show("老人迟疑了很久，也没有车辆让行！", ".text");
}

setTimeout("showtext6()", 5 * inter);

function showtext6() {
    show("你是否去扶老人过马路呢？", ".text");
}

setTimeout("showbutton()", 5.6 * inter);

function showbutton() {
    var button1 = document.querySelector('.help');
    var button2 = document.querySelector('.nohelp');
    button1.style = "display: block";
    button2.style = "display: block";
}

function showAppreciate() {
    var appreciate = document.querySelector('.appreciate');
    appreciate.style = 'display: block';
}

function showtext7() {
    setTimeout("car()", 1500);
    setTimeout("car2()", 2500);
    setTimeout("turn()", 8.3* inter);
    show("原来老人想要到商店买点生活用品!", ".text");
}

function showtext8() {
    show("你提出要帮助老人购置物品。", ".text");
}

function showtext9() {
    var appreciate = document.querySelector('.appreciate');
    appreciate.style = 'display: none';
    older.style.transform = "translateX(-700px) translateY(-200px) rotateY(180deg) scale(0.8)";
    people.style.transform = "translateX(-700px) translateY(-200px) scale(1.2)";
    show("老人听了非常高兴!", ".text");
    var leftFoot = document.querySelector('.leftFoot');
    var rightFoot = document.querySelector('.rightFoot');
    leftFoot.style.animation = 'Foot .8s linear .2s infinite alternate';
    rightFoot.style.animation = 'Foot .8s linear 0s infinite alternate';
}

function showtext10() {
    show("随后,你帮老人把生活用品搬回了家。", ".text");
    older.style = "display: none";
    people.style = "display: none";
}

function showtext11() {
    show("老人对你连连道谢。", ".text");
}

function showtext12() {
    show("并对邻居夸奖今天遇到的这位好心的年轻人。", ".text");
}

function showtext13() {
    show("你惊奇的发现邻居居然是你的校长。", ".text");
}

function showtext14() {
    show("校长对你笑着点了点头。", ".text");
}

//车辆移动
function car() {
    var x = 0;
    var y = -550;
    var Car = -600;
    var car = document.querySelector('.car');
    car.style.transition = "all 6s";
    car.style.transform = 'translate(' + Car + 'px,' + (y - Car) + 'px)';
}

function car2() {
    var x = 0;
    var y = -550;
    var Car = -600;
    var car = document.querySelector('.car2');
    car.style.transition = "all 6s";
    car.style.transform = 'translate(' + Car + 'px,' + (y - Car) + 'px)';
}
//跳转页面
function turn() {
    
    //cnt1为正常结局判断
    var cnt1=1;
    cnt1 = parseFloat(sessionStorage.getItem("points"));
    // cnt1=1;
    //cnt2为隐藏结局判断
    var cnt2=0;
    cnt2 = parseFloat(sessionStorage.getItem("secretScene"));
    // cnt2=2;
    console.log(sessionStorage.getItem("points"));
    console.log("secretScene:" + cnt2);
    if (cnt2 >= 2) {
        self.location = "Result2.html";
    } else {
        if (cnt1 > 0) {
            self.location = "Result1.html";
        } else if (cnt1 <= 0) {
            self.location = "Result3.html";
        }
    }

}
//逐字打字显现字幕
var done;
var inter2 = 10000;

function show(text, Class) {
    //清除间隙执行，直接开始执行新的内容，以防函数反复调用出现的错误
    clearInterval(done);
    var i = 0;
    var num = text.length;
    var wordInter = 30;
    var perInter = parseInt(inter2 / num) / 3;
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