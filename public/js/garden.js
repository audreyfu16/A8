function changeDay(){
    var image = document.getElementById("weekImg");
    image.style.display = "none";
    var image = document.getElementById("monthImg");
    image.style.display = "none";
    var image = document.getElementById("dayImg");
    image.style.display = "block";
}

function changeWeek(){
    var image = document.getElementById("weekImg");
    image.style.display = "block";
    var image = document.getElementById("monthImg");
    image.style.display = "none";
    var image = document.getElementById("dayImg");
    image.style.display = "none";
}

function changeMonth(){
    var image = document.getElementById("weekImg");
    image.style.display = "none";
    var image = document.getElementById("monthImg");
    image.style.display = "block";
    var image = document.getElementById("dayImg");
    image.style.display = "none";
}