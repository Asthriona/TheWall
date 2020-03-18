var oldTime = new Date('2019/07/22 06:42:00');
var timer = setInterval(function () {
  var nowTime = new Date();
  var longTime = nowTime - oldTime;
  var days = parseInt(longTime / 1000 / 60 / 60 / 24, 10);
  var hours = parseInt(longTime / 1000 / 60 / 60 % 24, 10);
  var minutes = parseInt(longTime / 1000 / 60 % 60, 10);
  var seconds = parseInt(longTime / 1000 % 60, 10);
  $('.uptime').html(longTime = days + " Days " + hours + " Hours " + minutes + " Minutes and " + seconds + " seconds");
}, 1000);