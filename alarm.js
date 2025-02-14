let sett=()=>{
   let inptime=document.querySelector("#currenttime").value //16:46
    let Show1=document.querySelector("#show")
    let music1=document.querySelector("#music")
 
     let inn= setInterval(()=>{
        let time = new Date();
        let currenttime1=`${time.getHours().toString().padStart(2,"0")}:${time.getMinutes().toString().padStart(2,"0")}` //16:47
        if(currenttime1==inptime)
        {
            Show1.innerHTML="alaram is ringing..."
            music1.play()
        }
        else
        {
             Show1.innerHTML="alaram is set..."
        }
    },1000)
    setTimeout(()=>{
     clearInterval(inn)  
     music1.pause() 
     },6000)
}
// padstar:- minimum get 2 values(parameter) if they not get 2 value then put 0////16:1 change 16:34