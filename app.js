function setDate(){
    const now=new Date();
    const seconds=now.getSeconds();
    const secondegrees= (seconds/60)*360+90;
    //console.log(seconds)
    const secondhand= document.querySelector(".second-hand");
    secondhand.style.transform= `rotate(${secondegrees}deg)`;

    const minutes=now.getMinutes();
    //console.log(minutes)
    const minutedegrees=(minutes/60)*360+90 ;
    const minutehand=document.querySelector(".minute-hand");
    minutehand.style.transform=`rotate(${minutedegrees}deg)`;

    const hours=now.getHours();
    console.log(hours)
    const hourdegrees= (hours/12)*360 +90;
    const hourhand=document.querySelector(".hour-hand");
    hourhand.style.transform=`rotate(${hourdegrees}deg)`;    


}
setInterval(setDate, 1000);  // setinterval will call the set date function after every 1000ms or 1s