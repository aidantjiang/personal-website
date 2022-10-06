const width = screen.width;
const height = screen.height;

let links = document.getElementsByClassName("link");
console.log(links[0]);
for (let i = 0; i < links.length; i++) {
    console.log(`delaying link ${i}`)
    window.setTimeout(function() {
        location.href = document.getElementById("social").getElementsByTagName("a")[i].href;
    }, 2000);
}