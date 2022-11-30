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

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const headerText = [
    "C4G 2022 Summer Internship", 
    "Harvard CS50 Course",
    "Up-A-Creek-Robotics",
    "Personal Website",
    "Tutoring App",
    "AP CSA"
];
const bodyText = [
    "5-week Colorado School of Mines Summer Program that allows students to create and direct their own projects. Teaches technical skills, collaborative work, and communication. <br><br> During my summer at this internship, my group decided to make a static website that educates on deforestation. Written with HTML, CSS, and JavaScript, my main role in the project was to create an interactive map of the world using D3.js, a data visualizing JavaScript package. <br><br> A link to our code can be found below.",
    "Taken during quarantine, Harvard's Online CS50 Course provides valuable experience in every area of computer science. Covering (although lightly) C, Python, Algorithms, Big O Notation, Flask, and essential skills that every developer needs, CS50 provides a great baseline.",
    "",
    "",
    "",
    ""
];

const linkText = [
    {

    },
    {

    },
    {

    },
    {
        link: "https://github.com/aidantjiang/personal-website",
        
    },
    {

    },
    {

    },
];


function allAreTruthy(arr) {
    return arr.every(element => element);
}

const logos = document.getElementsByClassName("logo");

console.log(logos);

const flags = [true, true, true, true, true, true];

window.addEventListener("load", () => {
    const infobox = document.getElementById("info-wrapper");
    const infoheader = document.getElementById("info-header");
    const infobody = document.getElementById("info-body")
    let switchNum;

    for (let i = 0; i < logos.length; i++) {
        logos[i].addEventListener("click", ()=> {
            logos[i].style.boxShadow = "0rem 0.2rem 0 rgba(29, 30, 28, 0.26)";
            logos[i].style.transform = flags[i] ? "translate(0%, 25%)" : "translate(0%, 0%)";
            if(allAreTruthy(flags)) {
                switchNum = i;
            }
            flags[i] = !flags[i];

            infoheader.innerHTML = headerText[switchNum];
            infobody.innerHTML = bodyText[switchNum];

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
        infobox.style.left = "-80%";
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