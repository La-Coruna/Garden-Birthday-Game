const mission=[
    //easy mission
    {
        content:"묵찌빠",
        imgSrc:"https://cdn.crowdpic.net/detail-thumb/thumb_d_4ABE250623ED062CF7DBB6CFB93E364E.jpg",
        detail:"N번 기회 중 이긴 만큼 1 point!"
    },
    {
        content:"팔씨름",
        imgSrc:"https://cdn.crowdpic.net/detail-thumb/thumb_d_4ABE250623ED062CF7DBB6CFB93E364E.jpg",
        detail:"두 손가락 vs (N+2)손가락</br>(6 point)"
    },
    {
        content:"물병 세우기",
        imgSrc:"http://img.danawa.com/prod_img/500000/903/904/img/904903_1.jpg",
        detail:"N초 물 받고 물병 세우기</br>(N번의 기회, 6point)"
    },
    {
        content:"같은 그림 찾기",
        imgSrc:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkcjyBldL5JztZ91lAmxXELDho4FYznekLrg&usqp=CAU",
        detail:"<a href='http://www.game24.co.kr/game.php?gamecode=memory'>N*3의 기회 중 맞춘 개수만큼 1 point</a>"
    },
    {
        content:"의학 용어 맞추기",
        imgSrc:"./img/영어.png",
        detail:"의학 용어의 약자를 듣고 무슨 약자인지 맞추기</br>(N개의 단어, 매 성공시 2 point)"
    },
    {
        content:"초성 게임",
        imgSrc:"./img/초성.png",
        detail:"해당 초성의 단어 N개 떠올리기</br>*부분 점수 없음*</br>(N point)"},
    {
        content:"쿠키런 그림자 퀴즈",
        imgSrc:"./img/바다요정.png",
        detail:"쿠키의 그림자를 보고</br>무슨 쿠키인지 맞추기"
    },
    {
        content:"야찌",
        imgSrc:"http://img2.tmon.kr/cdn3/deals/2021/03/17/2319939950/front_2dcec_zvfp5.jpg",
        detail:"이기면 차액만큼 point</br>(최대 N*4 point)"
    },
    //hard mission
    {
        content:"빼빼로",
        imgSrc:"http://img.danawa.com/prod_img/500000/749/465/img/15465749_1.jpg",
        detail:"더 짧은 빼빼로가 남은 사람이 승리</br>선후공 번갈아서 2회 진행</br>승리 시 1회당 2N point"},
    {
        content:"Towel Challenge",
        imgSrc:"http://img.danawa.com/prod_img/500000/908/097/img/6097908_1.jpg",
        detail:"((6-N)*5)분안에 Towel Challenge 성공하기 성공시 (N*3)point"
    },
    {
        content:"사탕맛 맞추기",
        imgSrc:"http://img.danawa.com/prod_img/500000/450/718/img/13718450_1.jpg?",
        detail:"키스로 사탕 맛 맞추기</br>(N회 가능, 1회 성공시 4point)"
    },
    {
        content:"악마의 게임",
        imgSrc:"./img/악마.png",
        detail:"이 게임은 실패시 벌칙이 동반됩니다.</br>벌칙은 모두 이행해야 하며</br>불이행 시 모든point가 삭감되고</br>모든 상품이 반납됩니다."
    }
];

const easyMissionNum=8;
var HBDPoint=0;
var HBDCrystal=0;
var HBDShop0=10;
var HBDShop1=10;
var HBDShop2=10;
var HBDShop3=10;
var HBDShop4=6;
var HBDShop5=5;

const diceImg=document.getElementById("diceImg");
const diceValue=document.getElementById("diceValue");
const pointValue=document.getElementById("pointValue");
const crystalValue=document.getElementById("crystalValue");

const shopBtn=document.getElementById("shopBtn");
const shop=document.getElementById("shop");
const shop0Value=document.getElementById("shop0Value");
const shop1Value=document.getElementById("shop1Value");
const shop2Value=document.getElementById("shop2Value");
const shop3Value=document.getElementById("shop3Value");
const shop4Value=document.getElementById("shop4Value");
const shop5Value=document.getElementById("shop5Value");
const shopValues=[
    shop0Value,
    shop1Value,
    shop2Value,
    shop3Value,
    shop4Value,
    shop5Value
];
//
const shop0Img=document.getElementById("shop0Img");
const shop1Img=document.getElementById("shop1Img");
const shop2Img=document.getElementById("shop2Img");
const shop3Img=document.getElementById("shop3Img");
const shop4Img=document.getElementById("shop4Img");
const shop5Img=document.getElementById("shop5Img");
const shopImgs=[
    shop0Img,
    shop1Img,
    shop2Img,
    shop3Img,
    shop4Img,
    shop5Img
];


const hideShopBtn=document.getElementById("hideShopBtn");

const wrapper = document.getElementById("wrapper");
const missionViewer=document.getElementById("missionViewer");
const missionViewerText1=document.getElementById("missionViewerText1");
const missionViewerText2=document.getElementById("missionViewerText2");
const inputPointValue=document.getElementById("inputPointValue");
const inputPointBtn=document.getElementById("inputPointBtn");
const inputCrystalValue=document.getElementById("inputCrystalValue");
const inputCrystalBtn=document.getElementById("inputCrystalBtn");
const hideMissionViewerBtn = document.getElementById("hideMissionViewerBtn");

const missionViewer11 = document.getElementById("missionViewer11");
const hideMissionViewer11Btn = document.getElementById("hideMissionViewer11Btn");

var dice_a = 1;
var dice_b = 6
function roll(){
    const rand_1_6 = Math.floor(Math.random() * dice_b) + dice_a;
    diceValue.innerText=rand_1_6;
}

function missionOpen(e) {
    
    const missionItem=e.target.parentElement;
    const missionID=missionItem.id.slice(7);

    missionItem.removeChild(missionItem.childNodes[0]);

    const missionContent=document.createElement("div");
    missionContent.id="MSinner"+missionID;
    missionContent.classList+=" inner";
    missionContent.innerText=mission[missionID].content;
    missionItem.appendChild(missionContent);

    missionItem.classList+=" open";
    if(missionID==11){
        missionItem.addEventListener("click",(i)=>{showMissionViewer11(i.target);});
    } else{
        missionItem.addEventListener("click",(i)=>{showMissionViewer(i.target);});
    }
    

    localStorage.setItem("HBDMission"+missionID,1);
    return;
}

function submitPoint(){
    HBDPoint+=Number(inputPointValue.value);
    pointValue.innerText=HBDPoint;
    localStorage.setItem("HBDPoint",HBDPoint)
    return;
}
function submitCrystal(crystal){
    HBDCrystal+=Number(inputCrystalValue.value);
    crystalValue.innerText=HBDCrystal;
    localStorage.setItem("HBDCrystal",HBDCrystal)
    return;
}

function insertMission(){

    for(i=0; i<mission.length; i++){
        const missionItem = document.createElement("div");
        missionItem.classList+=(i<easyMissionNum)?"item easy":"item hard";
        missionItem.id="mission"+i;
        if(localStorage.getItem("HBDMission"+i)==1){
            //if mission is open
            const missionContent=document.createElement("div");
            missionContent.classList+=" inner";
            missionContent.innerText=mission[i].content;
            missionItem.appendChild(missionContent);

            missionItem.classList+=" open";

            if(i==11){
                missionItem.addEventListener("click",(e)=>{showMissionViewer11(e.target.parentElement);});
            } else{
                missionItem.addEventListener("click",(e)=>{showMissionViewer(e.target.parentElement);});
            }
        } else{
            //if mission is not open
            const img= document.createElement("img");
            img.src=mission[i].imgSrc;
            img.classList+=" inner";
            missionItem.appendChild(img);
            missionItem.addEventListener("click",(e)=>{
                missionOpen(e);
            })
        }
        wrapper.appendChild(missionItem);
    }
};

function showMissionViewer(target){
    const missionItem = target;
    const missionID=missionItem.id.slice(7);

    missionViewerText1.innerText=mission[missionID].content;
    missionViewerText2.innerHTML=mission[missionID].detail;
    
    missionViewer.style.display="block";

    return;
}

function showMissionViewer11(target){

    
    missionViewer11.style.display="block";

    return;
}

function hideMissionViewer11(){
    missionViewer11.style.display="none";
    return;
}

function hideMissionViewer(){
    missionViewer.style.display="none";
}

function showShop(){
    shop.style.display="block";


    return;
}
function hideShop(){
    shop.style.display="none";
    
}

function buyShopItem(e){
    //TODO 작성해야함 개같이 작성했네
    ID=e.target.id[4];
    console.log(shopItemId);
    if(ID==4){
        if(dice_a <5) dice_a += 1;
    }
}

function buy(price){
    if(HBDPoint >= Number(price)){
        HBDPoint-=price;
        return true;
    }
    return false;
}

function shopBtnEvent(){
    const shopWrapper = document.getElementById("shopWrapper");
    const shopItems = shopWrapper.getElementsByClassName("shopItem");
    for(i=0;i<shopItems.length;i++){
        shopItems[i].children[1].addEventListener("click",(e)=>{buyShopItem(e)});
    }
    
}

function resetCookie(){
    for(i=0; i<mission.length;i++){
        localStorage.setItem("HBDMission"+i,"0");
    }
    return;
}


function init(){
    if(localStorage.getItem("HBDPoint")!=null){
        HBDPoint = Number(localStorage.getItem("HBDPoint"));
        pointValue.innerText=HBDPoint;
    }

    if(localStorage.getItem("HBDCrystal")!=null){
        HBDCrystal = Number(localStorage.getItem("HBDCrystal"));
        crystalValue.innerText=HBDCrystal;
    }
    if(localStorage.getItem("HBDShop0")!=null){
        HBDShop0 = Number(localStorage.getItem("HBDShop0"));
        HBDShop0Value.innerText=HBDShop0;
    }
    if(localStorage.getItem("HBDShop1")!=null){
        HBDShop1 = Number(localStorage.getItem("HBDShop1"));
        HBDShop1Value.innerText=HBDShop1;
    }
    if(localStorage.getItem("HBDShop2")!=null){
        HBDShop2 = Number(localStorage.getItem("HBDShop2"));
        HBDShop2Value.innerText=HBDShop2;
    }
    if(localStorage.getItem("HBDShop3")!=null){
        HBDShop3 = Number(localStorage.getItem("HBDShop3"));
        HBDShop3Value.innerText=HBDShop3;
    }
    if(localStorage.getItem("HBDShop4")!=null){
        HBDShop4 = Number(localStorage.getItem("HBDShop4"));
        HBDShop4Value.innerText=HBDShop4;
    }
    if(localStorage.getItem("HBDShop5")!=null){
        HBDShop5 = Number(localStorage.getItem("HBDShop5"));
        HBDShop5Value.innerText=HBDShop5;
    }

    shopBtn.addEventListener("click",showShop);
    hideShopBtn.addEventListener("click",hideShop);
    inputPointBtn.addEventListener("click",submitPoint);
    inputCrystalBtn.addEventListener("click",submitCrystal);
    hideMissionViewerBtn.addEventListener("click",hideMissionViewer);
    hideMissionViewer11Btn.addEventListener("click",hideMissionViewer11);
    diceImg.addEventListener("click",roll);
    shopBtnEvent();
    insertMission();
}

init();