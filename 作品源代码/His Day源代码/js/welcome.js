//document.getElementsByClassName("word").style.fontSize="2000%";
// document.getElementById("wordh").style.animation="w 1s ease 4s infinite";
var objh=document.getElementById("wordh");
var obji=document.getElementById("wordi");
var objs=document.getElementById("words");
var objd=document.getElementById("wordd");
var obja=document.getElementById("worda");
var objy=document.getElementById("wordy");
var mvMark = 1;

//文字闪烁控件
var tinkle;
function tinkleWord(){
	setTimeout(function () { objh.style.animation="w 0.5s linear 0s infinite"; }, 0);
	setTimeout(function () { obji.style.animation="w 0.5s linear 0s infinite"; }, 200);
	setTimeout(function () { objh.style.animation=""; }, 500);
	setTimeout(function () { objs.style.animation="w 0.5s linear 0s infinite"; }, 400);
	setTimeout(function () { obji.style.animation=""; }, 700);
	setTimeout(function () { objd.style.animation="w 0.5s linear 0s infinite"; }, 600);
	setTimeout(function () { objs.style.animation=""; }, 900);
	setTimeout(function () { obja.style.animation="w 0.5s linear 0s infinite"; }, 800);
	setTimeout(function () { objd.style.animation=""; }, 1100);
	setTimeout(function () { objy.style.animation="w 0.5s linear 0s infinite"; }, 1000);
	setTimeout(function () { obja.style.animation=""; }, 1300);
	setTimeout(function () { objy.style.animation=""; }, 1500);
}
window.onload=function(){
	setTimeout(function(){
		tinkle=setInterval("tinkleWord()",1600);
	},500);
	//操作提示控件
    setTimeout(function () {
        $("#tip").css("display", "block");
    }, 8000);
}

function movePeo() {
	//实现人物随鼠标移动的功能
	if (mvMark) {
		mvMark = 0;
		$("#startGameText").css("cursor","pointer");
		var mv = document.getElementById("mvpeople");
		mv.style.zIndex=2;
		document.onmousemove = function(e) {
			
			$("#tip").css("display", "none");
			var e = e || window.event;
			// 用于获取鼠标针对页面可视区的横纵坐标
			//console.log(e.clientX, e.clientY);
			mv.style.left = e.clientX - 43 + "px";
			mv.style.top = e.clientY - 66 + "px";
		}
		//定义幕布的初始值
		$(document).ready(function() {

			var settings = {

				width: 750,
				height : 750,
				autoResize : false,
				autoResizeMinWidth : null,
				autoResizeMaxWidth : null,
				autoResizeMinHeight : null,
				autoResizeMaxHeight : null,
				addMouseControls : true,
				addTouchControls : true,
				hideContextMenu : true,
				starCount : 6666,
				starBgCount : 2222,
				starBgColor : { r:255, g : 255, b : 255 },
				starBgColorRangeMin : 10,
				starBgColorRangeMax : 40,
				starColor : { r:255, g : 255, b : 255 },
				starColorRangeMin : 10,
				starColorRangeMax : 100,
				starfieldBackgroundColor : { r:0, g : 0, b : 0 },
				starDirection : 1,
				starSpeed : 20,
				starSpeedMax : 200,
				starSpeedAnimationDuration : 2,
				starFov : 300,
				starFovMin : 200,
				starFovAnimationDuration : 2,
				starRotationPermission : true,
				starRotationDirection : 1,
				starRotationSpeed : 0.0,
				starRotationSpeedMax : 1.0,
				starRotationAnimationDuration : 2,
				starWarpLineLength : 2.0,
				starWarpTunnelDiameter : 100,
				starFollowMouseSensitivity : 0.025,
				starFollowMouseXAxis : true,
				starFollowMouseYAxis : true

			};
			var warpdrive = new WarpDrive(document.getElementById('holder'));
		});
	}

}
//开始“strat”由小变大
function start() {
	var startMark = document.getElementById("startGameText");
	//startMark.style.fontSize=500+"%";
	if (!mvMark) {
		var i = 0;
		var timer = null;
		timer = setInterval(function() {
			if (i == 64) {
				clearInterval(timer);
				
				self.location='SCENE1-1.html';
				// location.reload();
				// self.opener.location.reload();
			}
			startMark.style.fontSize = i + 30 + 'px';
			i += 8;
		}, 100);
	}
}

