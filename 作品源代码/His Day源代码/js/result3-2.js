window.onload = function () {
    var inter = 3500;
    setTimeout("showtext1()", 0.35*inter);
    setTimeout("showtext2()", 1*inter);
    setTimeout("showtext3()", 2*inter);
    setTimeout("showtext4()", 3*inter);
    setTimeout("showtext5()", 4*inter);
    setTimeout("showtext6()", 5*inter);
    setTimeout("showtext7()", 6*inter);
    setTimeout("showtext8()", 7*inter);
    setTimeout("showtext9()", 8*inter);
    setTimeout("showtext10()",9*inter);
    setTimeout("showtext11()",10*inter);
    setTimeout("showtext12()", 11*inter);
    setTimeout("showtext13()", 12*inter);
    setTimeout("showtext14()", 13*inter);
    setTimeout("showtext15()", 14.5*inter);
    setTimeout("showtext16()", 16*inter);
    setTimeout("showtext17()", 17*inter);
    setTimeout("showtext18()", 18*inter);
    setTimeout("turn()",19*inter);
}
function showtext1() {
    show("就在下车时,由于你没有留意面前的台阶", ".text");
}
function showtext2() {
    show("你踩空后身体失去平衡。", ".text");
}
function showtext3() {
    show("你狠狠地摔倒在地,膝盖撞到了石头上。", ".text");
}
function showtext4() {
    show("但是乘客们似乎都在忙着自己的事", ".text");
}
function showtext5() {
    show("没有人注意到你的窘境", ".text");
}
function showtext6() {
    show("你忍受着摔倒带来的剧痛", ".text");
}
function showtext7() {
    show("心里居然在想:如果有个人能来帮我一下就好了。", ".text");
}
function showtext8() {
    show("可是，事与愿违,周围的人仅仅只是撇了你一眼。", ".text");
}
function showtext9() {
    show("但之前没有帮助过别人的你,也只能默默接受这个现实……", ".text");
}
function showtext10() {
    show("随后,正当你准备独自挣扎站了起来时", ".text");
}
function showtext11() {
    show("你发现腿部已经失去了知觉。", ".text");
}
function showtext12() {
    var people1 = document.querySelector('#people1');
    var people2 = document.querySelector('#people2');
    var people3 = document.querySelector('#people3');
    var people01 = document.querySelector('#people01');
    var red = document.querySelector('.Rred');
    var green = document.querySelector('.Rgreen');
    red.style = "background-color: rgb(103, 25, 25);";
    green.style ="background-color: rgb(29, 221, 86);";
    people01.style.transition = 'all 0s';
    people1.style.transition = 'all 0s';
    people2.style.transition = 'all 0s';
    people01.style.transform = "translateY(20px) scale(0.5)";
    people1.style = "display:none;";
    people2.style = "display:block;";
    people3.style = "display:none;";
    setInterval("car()",1000);
    show("你只能拖着身子缓缓靠到附近的椅子旁", ".text");
}
function showtext13() {
    show("并自己打电话叫了救护车。", ".text");
}
function showtext14() {
    var people1 = document.querySelector('#people1');
    var people2 = document.querySelector('#people2');
    var people3 = document.querySelector('#people3');
    var people01 = document.querySelector('#people01');
    people01.style.transition = 'all 0s';
    people2.style.transition = 'all 0s';
    people01.style.transform = "translateX(-10px) scale(0.5)";
    people1.style = "display:none;";
    people2.style = "display:none;";
    people3.style = "display:block;";
    show("不知为何,自己以往没有帮助他人时的场景突然 全部涌现在脑海里。", ".text");
}
function showtext15() {
    show("你颓然地靠在椅子旁,似乎在思索着些什么", ".text");
    var people1 = document.querySelector('#people1');
    var people2 = document.querySelector('#people2');
    var people3 = document.querySelector('#people3');
    var people01 = document.querySelector('#people01');
    people01.style.transition = 'all 0s';
    people1.style.transition = 'all 0s';
    people2.style.transition = 'all 0s';
    people01.style.transform = "translateX(-30px) scale(0.5)";
    people1.style = "display:block;";
    people2.style = "display:none;";
    people3.style = "display:none;";
}

function showtext16() {
    show("摇了摇头,陷入沉思……", ".text");
    var people1 = document.querySelector('#people1');
    var people2 = document.querySelector('#people2');
    var people3 = document.querySelector('#people3');
    var people01 = document.querySelector('#people01');
    people01.style.transition = 'all 0s';
    people1.style.transition = 'all 0s';
    people2.style.transition = 'all 0s';
    people01.style.transform = "translateX(-30px) scale(0.5)";
    people1.style = "display:block;";
    people2.style = "display:none;";
    people3.style = "display:none;";
}
function showtext17() {
   var holder = document.querySelector('#holder');
   holder.style ='display:block;';
}

function showtext18() {
    var body = document.body;
    body.style.transition="all 3s";
    body.style.transform ="translateY(-230px) scale(0)";
 }
 //跳转页面
 
function turn() {
    //通过标签控制刷新框架外的主页面
    
    self.location = 'Endshow.html';
    sessionStorage.setItem("end3", parseFloat(sessionStorage.getItem("end3")) + 1);
    // refresh=1;
}
//车辆移动
function car() {
    var y=-550;
    var Car = -600;
    var car =document.querySelector('.car');
    car.style.transition="all 6s";
    car.style.transform ='translate('+Car+'px,'+(y-Car)+'px)';
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