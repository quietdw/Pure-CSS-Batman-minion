var cssSource = `
/*
*   大家好，今天我用纯CSS给大家画一个
*   可爱的小黄人
*   首先，画他的两个耳朵
*/
.leftEar{
    top: -40px;
    left: calc(50% - 75px);
    border:80px solid transparent;
    border-left: 40px solid #231F20;
}
.rightEar{
    top: -40px;
    left: calc(50% - 45px);
    border:80px solid transparent;
    border-right: 40px solid #231F20;
}
/*
*   代码的颜色太单调了
*   代码上个色吧
*/
.token.comment{
    color: slategray;
}
.token.selector{
    color: #690;
}
.token.punctuation{
    color: #999;
}
.token.property{
    color: #095;
}
.token.function{
    color: #DD4A68;
}
.token atrule,.token.atrule{
    color: #07a;
}
/*
*   画小黄人的头部
*/
.head{
    width: 150px;
    height: 130px;
    left: calc(50% - 75px);
    background: #231F20;
    border-radius: 50%/50%;
}
/*
*   画小黄人的脸
*/
.face{
    width: 150px;
    height: 70px;
    background: rgb(246,201,84);
    top:98px;
}
.face::before{
    content: '';
    position: absolute;
    border:75px solid transparent;
    border-top: 30px solid #231F20;
}
/*
*   画小黄人的下巴
*/
.face::after{
    content: '';
    position: absolute;
    bottom: 0px;
    top:100%;
    border:75px solid transparent;
    border-top: 20px solid rgb(246,201,84);
}
/*
*   画小黄人的眼睛
*/
.eye {
    left: calc(50% - 38px);
    background:rgb(187,187,187);
    width: 76px;
    height: 76px;
    border-radius: 50%;
    top:40px;
}
.eye::after{
    content: '';
    position: absolute;
    left: calc(50% - 28px);
    top: calc(50% - 28px);
    background: #fff;
    width: 56px;
    height: 56px;
    border-radius: 50%;
}
/*
*   画小黄人的瞳孔
*/
.pupil{
    width: 36px;
    height: 36px;
    left: calc(50% - 18px);
    z-index: 1;
    background:rgb(87,112,169);
    border-radius: 50%;
    top: calc(50% - 18px);
}
.pupil::before{
    content: '';
    position: absolute;
    left: calc(50% - 8px);
    background:#231F20;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    top: calc(50% - 8px);
}
/*
*   画小黄人的嘴巴
*/
.mouth {
    width: 72px;
    height: 30px;
    left: calc(50% - 36px);
    background: #1F2020;
    top: 134px;
    border-bottom-right-radius:50%;
    border-bottom-left-radius:50%;
    overflow: hidden;
}
/*
*   画小黄人的牙齿
*/
.teeth1,.teeth2,.teeth3,.teeth4{
    z-index: 1;
    left: 0;
    width: 18px;
    height: 16px;
    background: #fff;
    border-bottom-right-radius:40%;
    border-bottom-left-radius:40%;
}
.teeth2{left: 18px;}
.teeth3{left: 36px}
.teeth4{left: 54px}
/*
*   画小黄人的舌头
*/
.tongue{
    left: calc(50% - 17px);
    background: rgb(190,28,53);
    width: 34px;
    height: 20px;
    top:20px;
    border-radius: 50%;
}
/*
*   画小黄人的身体
*/
.body{
    left: calc(50% - 90px);
    background: #231F20;
    width: 180px;
    height: 150px;
    top: 154px;
    border-radius: 25%;
}
/*
*   画小黄人衣服上的蝙蝠
*/
.bat{
    left: calc(50% - 50px);
    background: rgb(249,242,0);
    width: 100px;
    height: 50px;
    top: calc(50% - 25px);
    border-radius: 50%;
    background: rgb(249,242,0);
}
.bat .t1,.bat .t3{
    left: calc(50% - 21px);
    background: #231F20;
    width: 14px;
    height: 40px;
    top:-25px;
    border-radius: 50%/25%;
}
.bat .t2{
    left: calc(50% - 7px);
    border: 7px solid transparent;
    border-top:7px solid #231f20;
}
.bat .t3{
    left: calc(50% + 7px);
}
.bat .b01,.bat .b02{
    left: calc(50% - 20px);
    background: #231F20;
    width: 10px;
    height: 36px;
    bottom:-22px;
    transform: rotate(-35deg);
    border-radius: 50%/25%;
}
.bat .b02{
    left: calc(50% + 10px);
    transform: rotate(35deg);
}
.bat .b11,.bat .b12{
    left: calc(50% - 13px);
    background: #231F20;
    width: 10px;
    height: 20px;
    bottom:-8px;
    transform: rotate(-35deg);
    border-radius: 50%/25%;
}
.bat .b12{
    left: calc(50% + 3px);
    transform: rotate(35deg);
}
/*
*   画小黄人的腰带
*/
.belt{
    background: rgb(249,242,0);
    width: 180px;
    height: 20px;
    bottom: 12px;
    border-bottom-right-radius:10px;
    border-bottom-left-radius:10px;
}
.buckle{
    left: calc(50% - 16px);
    background: rgb(249,242,0);
    width: 32px;
    height: 32px;
    border-radius: 50%;
    top:calc(50% - 16px);
}
.buckle::before{
    content: '';
    position: absolute;
    left: calc(50% - 11px);
    background: rgb(34,34,34);
    height: 22px;
    width: 22px;
    border-radius: 50%;
    top:calc(50% - 11px);
}
.buckle::after{
    content: '';
    position: absolute;
    left: calc(50% - 5px);
    background: rgb(249,242,0);
    width: 10px;
    height: 10px;
    border-radius: 50%;
    top:calc(50% - 5px);
}
/*
*   画小黄人的装备
*/
.box1,.box2,.box3,.box4{
    left: calc(50% - 64px);
    background: rgb(249,242,0);
    box-shadow: 0 0 2px rgba(0, 0, 0, .3);
    width: 20px;
    height: 32px;
    top: calc(50% - 16px);
}
.box2{left: calc(50% - 39px);}
.box3{left: calc(50% + 44px);}
.box4{left: calc(50% + 19px);}
/*
*   画小黄人的脚
*/
.leftFoot,.rightFoot{
    left: calc(50% - 32px);
    background: #231F20;
    width: 20px;
    height: 32px;
    top: 304px;
}
.leftFoot:after,.rightFoot:after{
    content: '';
    position: absolute;
    background: #231F20;
    width: 48px;
    height: 18px;
    border-radius: 20%/50%;
    bottom: 0;
    right: 0;
}
.rightFoot{
    left: calc(50% + 12px);
}
.rightFoot:after{
    left: 0;
}
/*
*   画小黄人的手臂
*/
.leftArm,.rightArm{
    left: calc(50% - 108px);
    background: #231F20;
    width: 10px;
    height: 120px;
    transform: rotate(15deg);
    border-radius: 50%/5%;
    top: 176px;
}
.leftArm::before,.rightArm::before{
    content: '';
    position: absolute;
    background: #231F20;
    width: 26px;
    height: 22px;
    border-radius: 8px 13px / 13px;
    bottom: -13px;
}
.leftArm::after,.rightArm::after{
    content: '';
    position: absolute;
    background: #231F20;
    height: 40px;
    width: 15px;
    border-radius: 50%/40%;
    transform: rotate(-15deg);
    left: 4px;
    top: 10px;
}
.leftArm .triangle{
    border: 9px solid transparent;
    border-right: 14px solid #231F20;
    transform: rotate(10deg);
    bottom:13px;
    left: -20px;
}
.leftArm .triangle::before,.leftArm .triangle::after{
    content: '';
    position: absolute;
    border: 9px solid transparent;
    border-right: 14px solid #231F20;
    bottom:9px;
    left: -9px;
}
.leftArm .triangle::after{
    bottom:27px;
}
.rightArm{
    left: calc(50% + 98px);
    transform: rotate(-15deg);
}
.rightArm::before{
    border-radius: 13px/13px 8px;
    right: 0;
}
.rightArm::after{
    top: 10px;
    left: -9px;
    transform: rotate(15deg);
}
.rightArm .triangle{
    border: 9px solid transparent;
    border-left: 14px solid #231F20;
    bottom:13px;
    left: 7px;
    transform: rotate(-10deg)
}
.rightArm .triangle::before,.rightArm .triangle::after{
    content: '';
    position: absolute;
    border: 9px solid transparent;
    border-left: 14px solid #231F20;
    bottom:8px;
    left: -14px;
}
.rightArm .triangle::after{
    bottom:25px;
}
/*
*   画小黄人的斗篷
*/
.cape{
    left: calc(50% - 99px);
    background: rgb(50,50,50);
    width: 198px;
    height: 140px;
    top: 200px;
}
.cape::after{
    content: '';
    position: absolute;
    background: rgb(50,50,50);
    height: 150px;
    width: 198px;
    border-radius: 50%;
    top: -69px;
    overflow: hidden;
}
.cape .c1,.cape .c2,.cape .c3,.cape .c4,.cape .c5,.cape .c6,.cape .c7,.cape .c8,.cape .c9{
    background: #fff;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    left: 0;
    bottom: -11px;
}
.cape .c2{left: 22px;}
.cape .c3{left: 44px}
.cape .c4{left: 66px}
.cape .c5{left: 88px}
.cape .c6{left: 110px}
.cape .c7{left: 132px}
.cape .c8{left: 154px}
.cape .c9{left: 176px}
.cape .shadow1,.cape .shadow2,.cape .shadow3,.cape .shadow4,.cape .shadow5,.cape .shadow6,.cape .shadow7,.cape .shadow8{
    width: 24px;
    height: 120px;
    bottom: 2px;
    box-shadow: 5px 0px 7px rgba(0, 0, 0, .5);
}
.cape .shadow2{left: 24px;}
.cape .shadow3{left: 47px;}
.cape .shadow4{left: 74px;}
.cape .shadow5{left: 93px;}
.cape .shadow6{left: 115px;}
.cape .shadow7{left: 140px;}
.cape .shadow8{left: 160px;}
/*
*   OK，画完了
*   好吧，其实我画的是蝙蝠侠＞﹏＜
*   希望你们喜欢
*
*   作者：姜
*/
`
var speed = 0
var n = 0
var codeContainer = document.querySelector('.code>pre')

var timer = setTimeout(function run(){
    let code = cssSource.slice(0,n)
    result = Prism.highlight(code, Prism.languages.css, 'css')
    minonStyle.innerHTML = code
    codeContainer.innerHTML = result
    codeContainer.scrollTop = 10000
    n +=1
    if(n>=cssSource.length){
        window.clearTimeout(timer)
    }else{
        timer = setTimeout(run,speed)
    }
},speed)

skip.onclick = function(){
    window.clearTimeout(timer)
    result = Prism.highlight(cssSource, Prism.languages.css, 'css')
    minonStyle.innerHTML = cssSource
    codeContainer.innerHTML = result
    codeContainer.scrollTop = 10000
}