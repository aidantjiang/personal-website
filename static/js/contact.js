$(document).ready(function() {
    console.log("starting star creation");
    var res = '',
        width = parseInt($(window).width()),
        height = parseInt($(window).height());
    var sRes = '';
    for (var i = 0;i < 100;i++) {
      res += '<div class="star" ' +
          'style="top: ' + Math.random() * height +
          'px;left: ' + Math.random() * width + 'px"></div>';
    }
    $('#stars').html(res);
    console.log("ending star creation");
});

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------

const contactForm = document.querySelector('.feedback-body');
let email = document.getElementById('contactmethod');
let message = document.getElementById('message');

let popupSuccess = document.getElementById('popup-success');
let popupFailure = document.getElementById('popup-failure');
let submit = document.getElementById('submit');

contactForm.addEventListener('submit', (e)=> {
    e.preventDefault();
    console.log("submit clicked");

    submit.innerHTML='LOADING';
    submit.classList.add('loading');

    let formData = {
        contactmethod: contactmethod.value,
        message: message.value,
    }
    console.log(formData);

    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/');
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.onload = () => {
        console.log(xhr.responseText);
        submit.innerHTML='SEND';
        submit.classList.remove('loading');
        if(xhr.responseText == 'success') {
            popupSuccess.style.display = "block";
            console.log("adding shake");
            popupSuccess.classList.add('shake');
            setTimeout(() => {
                console.log("disabling shake");
                popupSuccess.classList.remove('shake');
            }, 500);
            contactmethod.value = '';
            message.value= '';
        } else {
            popupFailure.style.display = "block";
            console.log("adding shake");
            popupFailure.classList.add('shake');
            setTimeout(() => {
                console.log("disabling shake");
                popupFailure.classList.remove('shake');
            }, 500);
        }
    }

    xhr.send(JSON.stringify(formData));
})

//close button for success/failure popups

let close = document.getElementsByClassName('close');

const funcClose = (trigger, num) => {
    trigger.addEventListener('click', () => {
        setTimeout(() => {
            console.log("hiding popup");
            console.log(trigger.classList[2]);
            if (trigger.classList[2] = "failure")
                popupSuccess.style.display = "none";
            else
                popupFailure.style.display = "none";
        }, 20);
    });
}

for (var i = 0; i < close.length; i++) {
    funcClose(close[i]);
}

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//draggable start

//edited w3 schools js: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_draggable
// Make the DIV element draggable:
let form = document.getElementsByClassName('form');
console.log("form");
console.log(form);
console.log("");
for (var i = 0; i < form.length; i++) {
    dragElement(form[i], i);
}

function dragElement(elmnt, num) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    let formheader = document.getElementById(elmnt.classList[1] + "-header-" + `${num}`);
    console.log("formheader");
    console.log(formheader);
    console.log("");
    if (formheader) 
        formheader.onmousedown = dragMouseDown;
    else
        elmnt.onmousedown = dragMouseDown;

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    console.log(`dragging ${elmnt}`)
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}