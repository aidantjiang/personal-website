history.scrollRestoration = "manual";

window.onbeforeunload = () => {
    console.log("scrolling to top");
    window.scrollTo(0, 0);
}