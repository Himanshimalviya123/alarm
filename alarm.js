const date=document.querySelector("#date");
const selectmenu=document.querySelector("#select");
const stopalarm=document.querySelector("#stop-alarm");
const alarmlist=document.querySelector("#AlarmList");
// const audio= new audio("");
let counter=0;
const arr=[];
//function to displaytime
function displaytime(){
    const now=new Date();
    let hours= now.getHours();
    let minutes=now.getMinutes();
    let seconds=now.getSeconds();
    let period="am";
    if(hours>=12)
    {
        period="pm";
        hours=hours===12 ? 12:hours-12;

    }
    else
    {
        hours=hours===0 ? 12 : hours;
    }
    date.innerHTML=`${hours<10?"0":""} ${hours}:${
        minutes<10?"0":""
    } ${minutes}:${seconds<10 ?"0":""}${seconds}${period}`;
    arr.foreach((element)=>{
        if(element == date.textcontent)
            alert("ring...");
        stopalarm.style.visibility="visible";
        Audio.loop=true;
        Audio.play();
    });

//function to update displaytime function each second
function updatetime(){
    displaytime();
    window.setInterval("displaytime()",1000 );

}
//invoking function updatetime
updatetime();
//set alarm section
//loop for giving option values so that user will able to select hour
for(let i=12;i>0;i--)
{
    i=i<10?"0"+i:i;
    let option=`<option value="${i}">${i}</option>`;
    selectmenu[0].firstElementChild.insertAdjacentHTML("afterend",option);

}
//loop for giving option differnt values so that user ill able to select minutes
for(let i=59;i>=0;i--)
    {
        i=i<10?"0"+i:i;
        let option=`<option value="${i}">${i}</option>`;
        selectmenu[1].firstElementChild.insertAdjacentHTML("afterend",option);
    
    }
    //loop for am/pm period
    for(let i=2;i>0;i--)
    {
        let ampm=i==1?"am":"pm";
        let option=`<option value="${ampm}">${ampm}</option>`;
        selectmenu[3].firstElementChild.insertAdjacentHTML("afterend",option);
    
    }
//event listener
}