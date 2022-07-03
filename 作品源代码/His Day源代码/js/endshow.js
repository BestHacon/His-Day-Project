$(function () {
	var tim = 0,end1=0,end2=0,end3=0;
	//读取标记
	var end1Mark,end2Mark,end3Mark;
	{
		end1Mark=parseFloat(sessionStorage.getItem("end1"));
		end2Mark=parseFloat(sessionStorage.getItem("end2"));
		end3Mark=parseFloat(sessionStorage.getItem("end3"));
		if(end1Mark){
			end1=1;
		}
		if(end2Mark){
			end2=1;
		}
		if(end3Mark){
			end3=1;
		}
	}
    var obj1 = document.getElementById("end1");
    var obj2 = document.getElementById("end2");
    var obj3 = document.getElementById("end3");
     function bor(){
		if(end1) setTimeout(function () { obj1.style.animation = "w 1s linear 0s infinite"; }, 0);
		if(end2) setTimeout(function () { obj2.style.animation = "w 1s linear 0s infinite"; }, 200);//0.5s延迟消失,0.2s进入下一个
		setTimeout(function () { obj1.style.animation = ""; }, 1000);
		if(end3) setTimeout(function () { obj3.style.animation = "w 1s linear 0s infinite"; }, 400);
		setTimeout(function () { obj2.style.animation = ""; }, 1200);
		setTimeout(function () { obj3.style.animation = ""; }, 1400);
	};
	tinkle = setInterval(bor, 1500);
	if (end1 == 1) {
		tim++;
    }
	if (end2 == 1) {
		tim++;
	}
	if (end3 == 1) {
		tim++;
	}
	$("#tim").html("已达成结局"+tim+"/3");
	$("#end1no").show();
	$("#end2no").show();
	$("#end3no").show();
	if (end1 == 1) {
		$("#end1no").hide();
	}
	if (end2 == 1) {
		$("#end2no").hide();
	}
	if (end3 == 1) {
		$("#end3no").hide();
	}
});

//跳转函数
function jump(){
	//把秘密结局标签和分数标签清零
	sessionStorage.setItem("secretScene",0);
	sessionStorage.setItem("points", 0);
	self.location="Welcome.html";
}