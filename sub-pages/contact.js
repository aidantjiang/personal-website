$(document).ready(function() {
    console.log("starting star creation");
    var res = '',
        width = parseInt($(window).width()),
        height = parseInt($(window).height());
  
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

contactForm.addEventListener('submit', (e)=> {
    e.preventDefault();
    console.log("submit clicked");

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
        if(xhr.responseText == 'success') {
            alert('email sent');
            contactmethod.value = '';
            message.value= '';
        } else {
            alert('something went wrong :(')
        }
    }

    xhr.send(JSON.stringify(formData));
})