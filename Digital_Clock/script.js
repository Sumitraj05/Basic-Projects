currentTime = setInterval(() => {
    let date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    let a = document.getElementById("hr");
    a.innerHTML = (a < 10 ? "0" : "") + hour;

    let b = document.getElementById("min")
    b.innerHTML = (b < 10 ? "0" : "") + min;

    let c = document.getElementById("sec")
    c.innerHTML = (c < 10 ? "0" : "") + sec;
}, 1000);