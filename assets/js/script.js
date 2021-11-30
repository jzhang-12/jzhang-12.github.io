function displayFood(foodID) {
    let homeElem = document.getElementById("home");
    homeElem.style.display = "none";
    //let loadElem = document.getElementById("load");
    //loadElem.style.animation = "loading";
    let foodElem = document.getElementById(foodID);
    foodElem.style.display = "block";
    //homeElem.style.display = "none";

}

function hideFood(foodID) {
    document.getElementById(foodID).style.display = "none";
    document.getElementById("home").style.display = "block";
}

let i1 = document.getElementById("i1");
i1.onclick = function() {
    displayFood("food1");
};

let i2 = document.getElementById("i2");
i2.onclick = function() {
    displayFood("food2");
};

let i3 = document.getElementById("i3");
i3.onclick = function() {
    displayFood("food3");
};

let i4 = document.getElementById("i4");
i4.onclick = function() {
    displayFood("food4");
};

let i5 = document.getElementById("i5");
i5.onclick = function() {
    displayFood("food5");
};

let backButton1 = document.getElementById("back1");
backButton1.onclick = function() {
    hideFood("food1");
}

let backButton2 = document.getElementById("back2");
backButton2.onclick = function() {
    hideFood("food2");
}

let backButton3 = document.getElementById("back3");
backButton3.onclick = function() {
    hideFood("food3");
}

let backButton4 = document.getElementById("back4");
backButton4.onclick = function() {
    hideFood("food4");
}

let backButton5 = document.getElementById("back5");
backButton5.onclick = function() {
    hideFood("food5");
}
