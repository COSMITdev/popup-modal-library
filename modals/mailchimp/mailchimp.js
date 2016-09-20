$("html").bind("mouseleave touchend", function () {
  $("#mailchimpModal").show();
});

$(".close").on('click',function(){
   $("#mailchimpModal").hide();
});
