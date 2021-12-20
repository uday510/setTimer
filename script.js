console.log("Welcome to the count down timer.");
document.getElementById("reset").onclick = function() {
            document.getElementById("seconds").innerText = "NA";
            document.getElementById("minutes").innerText = "NA";
            document.getElementById("hours").innerText = "NA";
            document.getElementById("days").innerText = "NA";
}
document.getElementById("submit").onclick = function () {
    let target = document.getElementById("datetime").value; 
    let intervalID = setInterval(function () {

    let current = new Date();
    let diff = new Date(target).getTime() - current.getTime();  

    document.getElementById("days").innerText = Math.floor(diff / (1000 * 60 * 60 * 24));
    document.getElementById("hours").innerText = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    document.getElementById("minutes").innerText = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    document.getElementById("seconds").innerText = Math.floor((diff % (1000 * 60)) / (1000));
        if (diff < 0) {
            clearInterval(intervalID);
            document.getElementById("seconds").innerText = "NA";
            document.getElementById("minutes").innerText = "NA";
            document.getElementById("hours").innerText = "NA";
            document.getElementById("days").innerText = "NA";
            document.getElementById("h1").innerText = "TIME OUT !!!";
        }
    }, 1000);
 };
