var moves, x, pe,xm,can=0,inter=3500;
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
    $("#choice").hide();
    function walk() {
        $('#left01').animate({
            lineHeight: '9px', bottom: '+=8.77px',
        }, 1500,"linear");
        setTimeout(function () {
            $('#left01').animate({
                lineHeight: '14px', bottom: '+=8.77px',
            }, 1500, "linear");
        }, 1500);
        $('#right01').animate({
            lineHeight: '14px', bottom: '+=8.77px',
        }, 1500, "linear");
        setTimeout(function () {
            $('#right01').animate({
                lineHeight: '9px', bottom: '+=8.77px',
            }, 1500, "linear");
        }, 1500);
        $('#right02').animate({
            lineHeight: '9px', bottom: '+=8.77px',
        }, 1500, "linear");
        setTimeout(function () {
            $('#right02').animate({
                lineHeight: '14px', bottom: '+=8.77px',
            }, 1500, "linear");
        }, 1500);
        $('#left02').animate({
            lineHeight: '14px', bottom: '+=8.77px',
        }, 1500, "linear");
        setTimeout(function () {
            $('#left02').animate({
                lineHeight: '9px', bottom: '+=8.77px',
            }, 1500, "linear");
        }, 1500);
        setTimeout(walk, 3000);
    }
    walk();
        $('#body01').animate({
            bottom:'1000px',
        }, 160000, "linear");
    $('#body02').animate({
        bottom: '1000px',
    }, 160000, "linear");
    var pre = 2;
    if(parseFloat(sessionStorage.getItem("points"))>=1){
        pre=1;
    }
    if (pre == 1) {
        showtext("看起来你有点闷闷不乐？", 30,"talking");
        setTimeout(function () { showtext("他是你值得信赖的最好的朋友。也许可以把遇到的事告诉他？", 30, "talking"); },inter);
        setTimeout(function () { showtext("我总感觉我不适合帮助别人。", 30, "talking"); }, inter*2);
        setTimeout(function () { showtext("每次帮忙，我都会帮倒忙，甚至让自己吃亏。", 30, "talking"); }, inter*3);
        setTimeout(function () { showtext("你告诉了他之前发生的事情。", 30, "talking"); }, inter*4);
        setTimeout(function () { showtext("你觉得帮助他们是件坏事？", 30, "talking"); }, inter*5);
        setTimeout(function () { showtext("你愣了一下，随后点了点头。", 30, "talking"); }, inter*6);
        setTimeout(function () { showtext("他笑了几声，拍了拍你的肩膀。", 30, "talking"); }, inter*7);
        setTimeout(function () { showtext("与其说帮倒忙，其实只不过是碰巧你倒霉吧。", 30, "talking"); }, inter*8);
        setTimeout(function () { showtext("没人会单纯的责怪善良，只有可能是你对善良动摇了。", 30, "talking"); }, inter*9);
        setTimeout(function () { showtext("将帮助与帮倒忙是两码事。帮助别人的想法本身没错，会不会倒忙是另外一回事。", 30, "talking"); }, inter*10);
        setTimeout(function () { showtext("帮倒忙可能只是运气差或者不够仔细。但是这些是和帮忙没有必要关系的！", 30, "talking"); }, inter*11);
        setTimeout(function () { showtext("没有人会否定积极帮助别人的热情。但行好事，莫问前程。", 30, "talking"); }, inter*12);
        setTimeout(function () { showtext("你沉默了良久。", 30, "talking"); }, inter*13);
        setTimeout(function () { self.location = 'SCENE2-3.html'; }, inter*14+1000);
    }
    else if (pre == 2) {
        showtext("看起来你有点闷闷不乐？",30, "talking");
        setTimeout(function () { showtext("他是你值得信赖的最好的朋友。也许你可以把遇到的事告诉他？", 30, "talking"); },inter);
        setTimeout(function () { showtext("我总感觉我不适合帮助别人。", 30, "talking");  },inter*2);
        setTimeout(function () { showtext("我老是犹豫要不要帮助别人，结果总是错过了时机，最终只能默默走开。", 30, "talking");  },inter*3);
        setTimeout(function () { showtext("但过后我总是很懊悔。", 30, "talking"); },inter*4);
        setTimeout(function () { showtext("你告诉了他之前发生的事情。", 30, "talking"); },inter*5);
        setTimeout(function () { showtext("他沉默了一会。", 30, "talking");},inter*6);
        setTimeout(function () { showtext("你觉得帮助他们是件坏事？", 30, "talking");},inter*7);
        setTimeout(function () { showtext("你愣了一下，随后点了点头。", 30, "talking"); },inter*8);
        setTimeout(function () { showtext("他笑了几声,拍了拍你的肩膀。", 30, "talking");},inter*9);
        setTimeout(function () { showtext("你虽然犹豫了，但是起码还是有去帮助别人的想法啊",30, "talking");},inter*10);
        setTimeout(function () { showtext("事实上，很多人甚至都不会犹豫，直接低头走开了。",30, "talking"); },inter*11);
        setTimeout(function () { showtext("没有人责怪你，更没有必要因此谴责自己，这不是你的错。", 30, "talking"); }, inter * 12);
        setTimeout(function () { showtext("只要下次想帮忙的时候让你的行动代替思考就行了。", 30, "talking"); }, inter * 13);
        setTimeout(function () { showtext("没有人会否定笨拙的想要帮助别人的你的。但行好事，莫问前程。", 30, "talking");},inter*14);
        setTimeout(function () { showtext("你沉默了良久。", 30, "talking"); },inter*15);
        setTimeout(function () { self.location = 'SCENE2-3.html';},inter*16+1000);
    }
    $("#sun").animate({ left: '-=300px' }, 60000, "linear");
});
