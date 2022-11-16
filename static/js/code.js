history.scrollRestoration = "manual";

window.onbeforeunload = () => {
    console.log("scrolling to top");
    window.scrollTo(0, 0);
}

const logos = document.getElementsByClassName("logo");

console.log(logos);

const flags = [true, true, true, true, true, true];

window.addEventListener("load", () => {
    for (let i = 0; i < logos.length; i++) {
        logos[i].addEventListener("click", ()=> {
            logos[i].style.boxShadow = "0rem 0.2rem 0 rgba(29, 30, 28, 0.26)";
            logos[i].style.transform = flags[i] ? "translate(0%, 25%)" : "translate(0%, 0%)";
            flags[i] = !flags[i];
            window.setTimeout(() => {
                logos[i].style.boxShadow = "0rem 0.6rem 0 rgba(29, 30, 28, 0.26)";
            }, 200);
        })
    }
})