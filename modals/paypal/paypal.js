$("html").bind("mouseleave touchend", function () {
  $("#paypalModal").show();
});

$(".close").on('click',function(){
  $("#paypalModal").hide();
});
