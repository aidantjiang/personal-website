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