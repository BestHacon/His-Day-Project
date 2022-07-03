var objsec=document.getElementById("sec");
var objFrame=document.getElementById("Frame");
var cnt=0;
window.onload = function()
{

    //加载框架
    setTimeout(function(){
        objFrame.src="html/Welcome.html ";
    },parseFloat(objsec.innerHTML)*1000);
    var inter=setInterval(function(){
    if(parseFloat(objsec.innerHTML)>0){
        objsec.innerHTML=parseFloat(objsec.innerHTML)-1;
    }
    else{
        clearInterval(inter);
        $("#tip_tittle").css("display","none");
        $("#tip").css("display","none");
        $("#Frame").css("display","block");
        $(".music").css("display","block");
    }
    },1000);
    //储存玩家得分
    sessionStorage.setItem("points",0);
    sessionStorage.setItem("secretScene",0);
    sessionStorage.setItem("end1",0);
    sessionStorage.setItem("end2",0);
    sessionStorage.setItem("end3",0);
    // setInterval(function(){
    //     var a=sessionStorage.getItem("mark");
    //     if(parseInt(sessionStorage.getItem("mark"))){
    //         //通过标签控制刷新框架外的主页面
    //         location.reload();
    //     }
    // },100);
}

//播放按钮旋转动画
function playAround(){
    $("#musicBut").css("animation","w 4s linear 0s infinite");
}

function playStady(){
    $("#musicBut").css("animation","");
}


