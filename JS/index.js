let a;
let time;
setInterval(() => {
    a = new Date();
    let hrs = a.getHours();
    let mins = a.getMinutes();
    let secs = a.getSeconds();
    let s = -90+(secs*6);
    let m = -90+(mins*6);
    let h = -90+((hrs%12)*30);
    // console.log(hrs + " " + mins + " " + secs);
    document.getElementById("clock-sec").style.transform = "rotate(" + s + "deg)";
    document.getElementById("clock-min").style.transform = "rotate(" + m + "deg)";
    document.getElementById("clock-hr").style.transform = "rotate(" + h + "deg)";
}, 1000);