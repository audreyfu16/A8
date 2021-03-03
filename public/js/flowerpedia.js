'use strict'

$(document).ready(function() {
    initializePage();
})

function initializePage(){
    $(".flower").click(flowerClick);
}

function flowerClick(e) {
    e.preventDefault();
    var containingFlower = $(this).closest(".flower");
    var rarity = $(containingFlower).find(".flower");
    if(rarity.length == 0){
        $(containingFlower).append("<div class='flower'><p>★★★</p></div>");
    } else {
        rarity.toggle();
    }
}