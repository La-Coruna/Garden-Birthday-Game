const mission=[
    //easy mission
    {
        content:"묵찌빠",
        imgSrc:"https://cdn.crowdpic.net/detail-thumb/thumb_d_4ABE250623ED062CF7DBB6CFB93E364E.jpg",
        detail:"묵찌빠를 해서 이긴 만큼 1 point!"
    },
    {
        content:"팔씨름",
        imgSrc:"https://cdn.crowdpic.net/detail-thumb/thumb_d_4ABE250623ED062CF7DBB6CFB93E364E.jpg",
        detail:"bbbb"
    },
    {content:"물병 세우기",imgSrc:"./a.png",detail:"avccsdf"},
    {content:"트럼프 짝지기",imgSrc:"./a.png",detail:"asccdf"},
    {content:"의학용어 맞추기",imgSrc:"./a.png",detail:"asededf"},
    {content:"초성 게임",imgSrc:"./a.png",detail:"awqwsdf"},
    {content:"쿠키런 그림자 퀴즈",imgSrc:"./a.png",detail:"awwsdf"},
    {content:"포켓몬",imgSrc:"./a.png",detail:"asssdf"},
    //hard mission
    {content:"빼빼로",imgSrc:"./a.png",detail:"avasdvsdf"},
    {content:"Towel Challange",imgSrc:"./a.png",detail:"acssdf"},
    {content:"사탕맛 맞추기",imgSrc:"./a.png",detail:"asadf"},
    {content:"악마의 퀴즈",imgSrc:"./a.png",detail:"asadf"}
];

const easyMissionNum=8;
var HBDPoint=0;
var HBDCrystal=0;
var HBDShop0=10;
var HBDShop1=10;
var HBDShop2=10;

const diceImg=document.getElementById("diceImg");
const diceValue=document.getElementById("diceValue");
const pointValue=document.getElementById("pointValue");
const crystalValue=document.getElementById("crystalValue");

const shopBtn=document.getElementById("shopBtn");
const shop=document.getElementById("shop");
const shop0Value=document.getElementById("shop0Value");
const shop1Value=document.getElementById("shop1Value");
const shop2Value=document.getElementById("shop2Value");
const hideShopBtn=document.getElementById("hideShopBtn");

const wrapper = document.getElementById("wrapper");
const missionViewer=document.getElementById("missionViewer");
const missionViewerText1=document.getElementById("missionViewerText1");
const missionViewerText2=document.getElementById("missionViewerText2");
const inputPointValue=document.getElementById("inputPointValue");
const inputPointBtn=document.getElementById("inputPointBtn");
const hideMissionViewerBtn = document.getElementById("hideMissionViewerBtn");

function roll(){
    const rand_1_6 = Math.floor(Math.random() * 6) + 1;
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
    missionItem.addEventListener("click",(i)=>{showMissionViewer(i.target);});

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
    HBDCrystal+=Number(crystal);
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

            missionItem.addEventListener("click",(e)=>{showMissionViewer(e.target.parentElement)});
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
    missionViewerText2.innerText=mission[missionID].detail;
    
    missionViewer.style.display="block";

    return;
}
function hideMissionViewer(){
    missionViewer.style.display="none";
    //missionViewer.Child(missionViewer.childNodes[1]);
    //plz find by ID and remove
}

function showShop(){
    shop.style.display="block";


    return;
}
function hideShop(){
    shop.style.display="none";
    
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

    shopBtn.addEventListener("click",showShop);
    hideShopBtn.addEventListener("click",hideShop);
    inputPointBtn.addEventListener("click",submitPoint);
    hideMissionViewerBtn.addEventListener("click",hideMissionViewer);
    diceImg.addEventListener("click",roll);
    insertMission();
}

init();