window.onload = function () {
    setTimeout("move1()", 1000);
    setTimeout("move2()", 2000);
    setTimeout("move3()", 3000);
    setTimeout("move4()", 3500);
    setTimeout("move5()", 4000);
    setTimeout("move6()", 5000);
    setTimeout("move7()", 6000);
    setTimeout("door1()", 7000);
    setTimeout("door2()", 8000);
    setTimeout("door3()", 9000);
    setTimeout("turn()",12000);
}

function move1() {
    var people1 = document.querySelector('#people1');
    var people2 = document.querySelector('#people2');
    var people3 = document.querySelector('#people3');
    var people01 = document.querySelector('#people01');
    people01.style.transition = 'all 0s';
    people1.style.transition = 'all 0s';
    people2.style.transition = 'all 0s';
    people01.style.transform = "translateX(50px) scale(1.3)";
    people1.style = "display:none;";
    people2.style = "display:block;";
    people3.style = "display:none;";
    show("~~商业站到了！,下车的乘客请注意!", ".text");
}

function move2() {
    var people1 = document.querySelector('#people1');
    var people2 = document.querySelector('#people2');
    var people3 = document.querySelector('#people3');
    var people01 = document.querySelector('#people01');
    people01.style.transition = 'all 0s';
    people2.style.transition = 'all 0s';
    people01.style.transform = "translateX(100px) scale(1.3)";
    people1.style = "display:block;";
    people2.style = "display:none;";
    people3.style = "display:none;";
}

function move3() {
    var people1 = document.querySelector('#people1');
    var people2 = document.querySelector('#people2');
    var people3 = document.querySelector('#people3');
    var people01 = document.querySelector('#people01');
    people01.style.transition = 'all 0s';
    people1.style.transition = 'all 0s';
    people2.style.transition = 'all 0s';
    people01.style.transform = "translateX(150px) scale(1.3)";
    people1.style = "display:none;";
    people2.style = "display:block;";
    people3.style = "display:none;";
}
function move4() {
    var people1 = document.querySelector('#people1');
    var people2 = document.querySelector('#people2');
    var people3 = document.querySelector('#people3');
    var people01 = document.querySelector('#people01');
    people01.style.transition = 'all 0s';
    people1.style.transition = 'all 0s';
    people2.style.transition = 'all 0s';
    people01.style.transform = "translateX(150px) scale(1.3)";
    people1.style = "display:none;";
    people2.style = "display:block;";
    people3.style = "display:none;";
    show("在公交车上,你正准备下车。", ".text");
}
function move5() {
    var people1 = document.querySelector('#people1');
    var people2 = document.querySelector('#people2');
    var people3 = document.querySelector('#people3');
    var people01 = document.querySelector('#people01');
    people01.style.transition = 'all 0s';
    people1.style.transition = 'all 0s';
    people2.style.transition = 'all 0s';
    people01.style.transform = "translateX(200px) scale(1.3)";
    people1.style = "display:none;";
    people2.style = "display:none;";
    people3.style = "display:block;";
}
function move6() {
    var people1 = document.querySelector('#people1');
    var people2 = document.querySelector('#people2');
    var people3 = document.querySelector('#people3');
    var people01 = document.querySelector('#people01');
    people01.style.transition = 'all 0s';
    people1.style.transition = 'all 0s';
    people2.style.transition = 'all 0s';
    people01.style.transform = "translateX(250px) scale(1.3)";
    people1.style = "display:block;";
    people2.style = "display:none;";
    people3.style = "display:none;";
}
function move7() {
    var people1 = document.querySelector('#people1');
    var people2 = document.querySelector('#people2');
    var people3 = document.querySelector('#people3');
    var people01 = document.querySelector('#people01');
    people01.style.transition = 'all 0s';
    people1.style.transition = 'all 0s';
    people2.style.transition = 'all 0s';
    people01.style.transform = "translateX(295px) scale(1.3)";
    people1.style = "display:none;";
    people2.style = "display:block;";
    people3.style = "display:none;";
    var door_auto1 =document.querySelector('.door_auto1');
    var door_auto2 =document.querySelector('.door_auto2');
    var door_auto3 =document.querySelector('.door_auto3');
    door_auto1.style = "display:none;";
    door_auto2.style = "display:none;";
    door_auto3.style = "display:none;";
}
function door1() {
    var door_top0 =document.querySelector('.door_top0');
    var door_top1 =document.querySelector('.door_top1');
    var door_top2 =document.querySelector('.door_top2');
    var door_top3 =document.querySelector('.door_top3');
    var window1 = document.querySelector('.door_window1');
    var window2 = document.querySelector('.door_window2');
    window1.style.transform = "translateX(-30px)";
    window2.style.transform = "translateX(30px)";
    door_top0.style = "display:none;";
    door_top1.style = "display:block;";
    door_top2.style = "display:none;";
    door_top3.style = "display:none;";
}
function door2() {
    var door_top0 =document.querySelector('.door_top0');
    var door_top1 =document.querySelector('.door_top1');
    var door_top2 =document.querySelector('.door_top2');
    var door_top3 =document.querySelector('.door_top3');
    var window1 = document.querySelector('.door_window1');
    var window2 = document.querySelector('.door_window2');
    window1.style.transform = "translateX(-50px)";
    window2.style.transform = "translateX(40px)";
    door_top0.style = "display:none;";
    door_top1.style = "display:none;";
    door_top2.style = "display:block;";
    door_top3.style = "display:none;";
}
function door3() {
    var door_top0 =document.querySelector('.door_top0');
    var door_top1 =document.querySelector('.door_top1');
    var door_top2 =document.querySelector('.door_top2');
    var door_top3 =document.querySelector('.door_top3');
    var window1 = document.querySelector('.door_window1');
    var window2 = document.querySelector('.door_window2');
    window1.style= "display:none;";
    window2.style = "display:none;";
    door_top0.style = "display:none;";
    door_top1.style = "display:none;";
    door_top2.style = "display:none;";
    door_top3.style = "display:block;";
}
//跳转页面
function turn() {
    self.location = "result3_2.html";
}
//逐字打字显现字幕
var done;
var inter = 10000;
function show(text, Class) {
    //清除间隙执行，直接开始执行新的内容，以防函数反复调用出现的错误
    clearInterval(done);
    var i = 0;
    var num = text.length;
    var wordInter = 50;
    var perInter = parseInt(inter / num) / 4;
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