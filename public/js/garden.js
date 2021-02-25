function changeDay(){
    var image = document.getElementById("weekImg");
    image.style.display = "none";
    var image = document.getElementById("monthImg");
    image.style.display = "none";
    var image = document.getElementById("dayImg");
    image.style.display = "block";

    var text = document.getElementById("weekText");
    text.style.display = "none";
    var text = document.getElementById("monthText");
    text.style.display = "none";
    var text = document.getElementById("dayText");
    text.style.display = "block";
    changeActive();
}

function changeWeek(){
    var image = document.getElementById("weekImg");
    image.style.display = "block";
    var image = document.getElementById("monthImg");
    image.style.display = "none";
    var image = document.getElementById("dayImg");
    image.style.display = "none";

    var text = document.getElementById("weekText");
    text.style.display = "block";
    var text = document.getElementById("monthText");
    text.style.display = "none";
    var text = document.getElementById("dayText");
    text.style.display = "none";
    changeActive();
}

function changeMonth(){
    var image = document.getElementById("weekImg");
    image.style.display = "none";
    var image = document.getElementById("monthImg");
    image.style.display = "block";
    var image = document.getElementById("dayImg");
    image.style.display = "none";

    var text = document.getElementById("weekText");
    text.style.display = "none";
    var text = document.getElementById("monthText");
    text.style.display = "block";
    var text = document.getElementById("dayText");
    text.style.display = "none";
    changeActive();
}

function changeActive(){
    var btnContainer = document.getElementById("switch");
    var btns = btnContainer.getElementsByClassName("gTime");

    for(var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function() {
            var current = document.getElementsByClassName("active");
            current[0].className = current[0].className.replace("active", "");
            this.className += " active";
        });
    }
}