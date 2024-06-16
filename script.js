
const hr = document.getElementById("hr1");
const min = document.getElementById("min1");
const sec = document.getElementById("sec1");
const ms = document.getElementById("ms1");

setInterval(()=>{
    let day = new Date();
    let hh = day.getHours();
    let mm = day.getMinutes();
    let ss = day.getSeconds();
    let mss = day.getMilliseconds();

    hr.innerText = hh;
    min.innerText = mm;
    sec.innerText = ss;
    ms.innerText = mss;

    
},1);