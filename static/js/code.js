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
    "A local  team based in Longmont, Colorado, Team 1619 (Up-A-Creek Robotics) is a FIRST Robotics team that competes at a world class level. Completely student-directed, Team 1619 is a closely community of high school student who fabricate, design, and code an robot made of pure steel. <br><br> I'm personally a app development subteam lead. I direct the part of the organizaiton that creates a fullstack app in React Native (Typescript) designed to scout other teams at conpetitions.",
    "Coded in raw HTML, CSS (SCSS), and JavaScript, I hand-coded this entire website. Although some effects have been refactored from an internet source, every main feature of this website is made with blood, sweat, and tears.",
    "An in-progress community project to advance my high school (Niwot High School) and their tutoring program, me and team of three other high schoolers and currently working to create an app for Niwot High School's tutoring program.",
    "I got a 5 when I took this AP class last year. This is really more of a placeholder than an achievement."
];

const linkText = [
    {
        link: "https://cstart.mines.edu/c4g/",
        title: "// mines internship"
    },
    {
        link: "https://pll.harvard.edu/course/cs50-introduction-computer-science?delta=0",
        title: "// cs50"
    },
    {
        link: "https://www.team1619.org/",
        title: "// up-a-creek robotics"
    },
    {
        link: "https://github.com/aidantjiang/personal-website",
        title: "// personal website code"
    },
    {
        link: "",
        title: "// no code available"
    },
    {
        link: "https://apstudents.collegeboard.org/courses/ap-computer-science-a",
        title: "// ap csa"
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
    const infobody = document.getElementById("info-body");
    const infolink = document.getElementById("info-link");
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
            infolink.innerHTML = linkText[switchNum].title;
            infolink.href = linkText[switchNum].link;

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