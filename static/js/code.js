$(".loader-wrapper").ready(() => {
    console.log("starting");
    $(".loader-wrapper").delay(Math.floor(Math.random() * 1500) + 1000).fadeOut(800, () => {
      $(".loader").removeClass("loader");
      $(".loader-inner").removeClass("loader-inner");
      $(".lock-scroll").removeClass("lock-scroll");
      console.log("done removing classes");
      $(".box-background").addClass("box-transition");
    });
  })

history.scrollRestoration = "manual";

window.onbeforeunload = () => {
    console.log("scrolling to top");
    window.scrollTo(0, 0);
}

const logos = document.getElementsByClassName("logo");

console.log(logos);

const flags = [true, true, true, true, true, true];

window.addEventListener("load", () => {
    const infobox = document.getElementById("info-wrapper");

    for (let i = 0; i < logos.length; i++) {
        logos[i].addEventListener("click", ()=> {
            logos[i].style.boxShadow = "0rem 0.2rem 0 rgba(29, 30, 28, 0.26)";
            logos[i].style.transform = flags[i] ? "translate(0%, 25%)" : "translate(0%, 0%)";
            flags[i] = !flags[i];
            window.setTimeout(() => {

                logos[i].style.boxShadow = "0rem 0.6rem 0 rgba(29, 30, 28, 0.26)";
                if (!flags[i]) {
                    infobox.style.left = "0";
                }
            }, 200);
        })
    }
    
    const close = document.getElementById("info-close");

    close.addEventListener("click", ()=> {
        infobox.style.left = "-50%";
        for (let i = 0; i < logos.length; i++) {
                if (flags[i] != true) {
                logos[i].style.boxShadow = "0rem 0.2rem 0 rgba(29, 30, 28, 0.26)";
                logos[i].style.transform = flags[i] ? "translate(0%, 25%)" : "translate(0%, 0%)";
                flags[i] = !flags[i];
                window.setTimeout(() => {
                    logos[i].style.boxShadow = "0rem 0.6rem 0 rgba(29, 30, 28, 0.26)";
                }, 200);
            }
        }
    })
})