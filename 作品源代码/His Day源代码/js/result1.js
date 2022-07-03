window.onload = function () {
    var people = document.querySelector('#people');
    var leftFoot = document.querySelector('.leftFoot');
    var rightFoot = document.querySelector('.rightFoot');
    document.onclick = function (event) {
        if ((event.clientX / 10 === people.offsetLeft / 10) && event.clientY / 10 === people.offsetTop / 10) {
            people.style.animation = 'pause';
        }
        var x = event.clientX - 228;
        var y = event.clientY - 500;
        // console.log(x + ',' + y);
        people.style.transform = 'translate(' + x + 'px ,' + y + 'px ) scale(1.2)';
        people.className = 'people';
        people.style.transition = 'all 3s';
        leftFoot.style.animation = 'Foot .8s linear .2s infinite alternate';
        rightFoot.style.animation = 'Foot .8s linear 0s infinite alternate';
        // console.log(people.offsetLeft + '  ' + people.offsetTop);
    }
    document.getElementById("people").addEventListener("transitionend", myFunction);

    function myFunction() {
        leftFoot.style.animation = 'pause';
        rightFoot.style.animation = 'pause';
    }
    var button = document.querySelector('#button');
    var awarder = document.querySelector('#awarder');
    var award = document.querySelector('#award');
    button.onclick = function () {
        button.style.display = 'none';
        awarder.style.display = 'none';
        window.event.cancelBubble = true;
    }
    var flag = 0;
    award.onclick = function () {
        if (flag == 0) {
            button.style.display = 'none';
            awarder.style.display = 'block';
            window.event.cancelBubble = true;
            flag=1;
        }
        else {
            button.style.display = 'none';
            awarder.style.display = 'none';
            window.event.cancelBubble = true;
            flag=0;
        }
    }
    var leifeng = document.querySelector('.help');
    var example = document.querySelector('#example');
    example.onmouseover = function() {
        leifeng.style.display = 'block';
    }
    example.onmouseout = function() {
        leifeng.style.display = 'none';
    }
    var beHelped1 = document.querySelector('#beHelped1');
    var appreciate1 = document.querySelector('#appreciate1');
    var beHelped2 = document.querySelector('#beHelped2');
    var appreciate2 = document.querySelector('#appreciate2');
    var beHelped3 = document.querySelector('#beHelped3');
    var appreciate3 = document.querySelector('#appreciate3');
    beHelped1.onmouseover = function() {
        appreciate1.style.display = 'block';
    }
    beHelped1.onmouseout = function() {
        appreciate1.style.display = 'none';
    }
    beHelped2.onmouseover = function () {
        appreciate2.style.display = 'block';
    }
    beHelped2.onmouseout = function() {
        appreciate2.style.display = 'none';
    }
    beHelped3.onmouseover = function() {
        appreciate3.style.display = 'block';
    }
    beHelped3.onmouseout = function() {
        appreciate3.style.display = 'none';
    }
}
var inter=3500;

setTimeout("showText1()", 0.3*inter);
function showText1() {
    show("由于你积极向需要帮助的人伸出援助之手!", ".text");
}

setTimeout("showText2()", 1*inter);
function showText2() {
    show("大家深表感激!", ".text");
}

setTimeout("showText3()", 2*inter);
function showText3() {
    show("校长听说了你众多助人为乐的事迹", ".text");
}

setTimeout("showText4()", 3*inter);
function showText4() {
    show("在校运会上对你帮助他人的善行进行了表彰!", ".text");
}

setTimeout("showText5()", 4*inter);
function showText5() {
    show("希望同学们学习你的乐于助人的精神!", ".text");
}

setTimeout("showText6()", 5*inter);
function showText6() {
    show("原来自己一直以来都在做正确的事情!", ".text");
}

setTimeout("showText7()", 6*inter);
function showText7() {
    show("你的脸上露出了灿烂的笑容!", ".text");
}

setTimeout("showText8()", 7*inter);
function showText8() {
   var holder = document.querySelector('#holder');
   holder.style ='display:block;';
}

setTimeout("showText9()", 8*inter);
function showText9() {
   var body = document.body;
   body.style.transition="all 5s";
   body.style.transform ="translateY(50%) scale(0)";
   SetPostion();
}

setTimeout("showText10()", 8*inter);
function showText10() {
    var clouds1 = document.querySelector(".clouds1");
    clouds1.style = "display: none"; 
    var clouds2 = document.querySelector(".clouds2");
    clouds2.style = "display: none"; 
}

function SetPostion(){
    var wheight = $(window).height();
    var bodyheight = $(document.body).height();    
   if(wheight > bodyheight){           
         var h = (wheight -bodyheight)/2;
        $(document.body).css('margin-top',h+'px')
     }
}
//跳转页面
setTimeout("turn()",10*inter);
function turn() {
    //通过标签控制刷新框架外的主页面
    // refresh=1;
    // sessionStorage.setItem("mark", 1);
    self.location = 'Endshow.html';
    sessionStorage.setItem("end1", parseFloat(sessionStorage.getItem("end1")) + 1);
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