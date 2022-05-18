const mission=[
    //easy mission
    {content:"묵찌빠",imgSrc:"https://cdn.crowdpic.net/detail-thumb/thumb_d_4ABE250623ED062CF7DBB6CFB93E364E.jpg",detail:"aaaa"},
    {content:"팔씨름",imgSrc:"./a.png",detail:"bbbb"},
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

const wrapper = document.getElementById("wrapper");
const missionViewer=document.getElementById("missionViewer");
const missionViewerText=document.getElementById("missionViewerText")
const hideMissionViewerBtn = document.getElementById("hideMissionViewerBtn");
hideMissionViewerBtn.addEventListener("click",hideMissionViewer);

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
    const missionDetail = mission[missionID].detail;

    missionViewerText.innerText=missionDetail;
    
    missionViewer.style.display="block";

    return;
}
function hideMissionViewer(){
    missionViewer.style.display="none";
    //missionViewer.Child(missionViewer.childNodes[1]);
    //plz find by ID and remove
}

function resetCookie(){
    for(i=0; i<mission.length;i++){
        localStorage.setItem("HBDMission"+i,"0");
    }
    return;
}

function init(){
    insertMission();
}

init();