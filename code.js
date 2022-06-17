const displayImage = document.getElementById("displayImage");
const showImage = document.getElementById("showImage");
const theTitle = document.getElementById("pageHeader");
const theNumber = document.getElementById("number");
const countNumber = document.getElementById("count");
// const img = document.getElementsByClassName("Image");

// images = [
//     {img: "img/bg3.jpeg"},
//     {img: "img/bg1.jpeg"},
//     {img: "img/bg5.jpeg"},
// ]

theTitle.style.opacity = 0;

function changeSlide(){

    //TRY SET-TIMEOUT


    if(theTitle.innerHTML === "modern livingrooms"){
        theTitle.innerHTML = "kitchen & diningroom";
        displayImage.src = "./img/bg3.jpeg";
        showImage.src = "./img/bg1.jpeg";
        theNumber.innerHTML = "02";
        countNumber.innerHTML = "02";


    }else if(theTitle.innerHTML === "kitchen & diningroom" || "modern livingrooms" &&  theTitle.innerHTML != "modern soloroom" ){
        theTitle.innerHTML = "modern soloroom";
        displayImage.src = "./img/bg1.jpeg";
        showImage.src = "./img/bg5.jpeg";
        theNumber.innerHTML = "03";
        countNumber.innerHTML = "03";

    }else {
        theTitle.innerHTML = "modern livingrooms";
        displayImage.src = "./img/bg5.jpeg";
        showImage.src = "./img/bg3.jpeg"
        theNumber.innerHTML = "01";
        countNumber.innerHTML = "01";
    }
}



