/*-----------------------------------------------------------------------------------------------------------------
THIS SECTION LOADS DATA FROM FLICKR API! DO NOT TOUCH IT'S FRAGILE
-----------------------------------------------------------------------------------------------------------------*/
 
let xhr = new XMLHttpRequest();
let data = [];
 
xhr.addEventListener("load", () => {
    console.log("received data from flickr successfully");
});
//open request
xhr.open('GET', '/photos');
//send request
xhr.send();
 
xhr.onload = () => {
    console.log(`Loaded: ${xhr.status} ${xhr.response}`);
    data = JSON.parse(xhr.response);
 
    //inserting elements
    console.log("starting image creation");
    var res = '';
   
    for (let i = 0; i < data.length; i++) {
        res += `<img class="image" data-index="${i}" data-status="inactive" src="${data[i]}" />`;
    }
    $('#mouse-image-hovereffect').html(res);
    console.log("ending img creation");
};
 
xhr.onerror = () => { // only triggers if the request couldn't be made at all
    console.log(`Network Error`);
};

/*-----------------------------------------------------------------------------------------------------------------
declaring all things being js'ed with
-----------------------------------------------------------------------------------------------------------------*/
 
const images = document.getElementsByClassName("image");
const backPage = document.getElementById("back-page");
const buttons = document.getElementsByTagName("button");
const frontPage = document.getElementById("front-page");
const upArrow = document.getElementById("up-arrow");
const downArrow = document.getElementById("down-arrow");
 
/*-----------------------------------------------------------------------------------------------------------------
#front-page
-----------------------------------------------------------------------------------------------------------------*/
 
/*-----------------------------------------------------------------------------------------------------------------
#transition
-----------------------------------------------------------------------------------------------------------------*/
let flag = true;
 
const resetImages = () => {
    for (let i = 0; i < images.length; i++) {
        images[i].dataset.status = "inactive";
    }
}
 
for (const button of buttons) {
  button.addEventListener('click', () => {
    var id = button.getAttribute("id");
 
    var layerClass = "." + id+ "-layer";
    var layers = document.querySelectorAll(layerClass);
    for (const layer of layers) {
    layer.classList.toggle("active");
    }
 
    window.setTimeout(() => {
        frontPage.dataset.status = flag ? "active" : "inactive";
        backPage.dataset.status = flag ? "inactive" : "active";
        upArrow.dataset.status = flag ? "active" : "inactive";
        downArrow.dataset.status = flag ? "inactive" : "active";
        resetImages();
    }, 400)
   
    flag = !flag;
  });
}
 
/*-----------------------------------------------------------------------------------------------------------------
#back-page
-----------------------------------------------------------------------------------------------------------------*/
 
//image moving (thanks Hyperplexed)
//refactored by me
 
let globalIndex = 0,
    last = {x: 0, y: 0};
 
const activate = (image, x, y) => {
    image.style.left = `${x}px`
    image.style.top = `${y}px`
 
    image.dataset.status = "active";
 
    last = { x, y };
}
 
const distanceFromLast = (x, y) => {
    return Math.hypot(x - last.x, y - last.y);
}
 
const trail = (e) => {
    if (distanceFromLast(e.clientX, e.clientY) > 150) {
        const lead = images[globalIndex % images.length],
            tail = images[(globalIndex - 5) % images.length];
 
        activate(lead, e.clientX, e.clientY);
 
        if (tail)
            tail.dataset.status = "inactive";
 
        globalIndex++;  
    }
}
 
window.onmousemove = (e) => {
    !flag ? trail(e) : () => {};
}
