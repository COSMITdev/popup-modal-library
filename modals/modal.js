$("html").bind("mouseleave touchend", function () {
  $("#modalFade").show();
});

$(".close").on('click',function(){
  $("#modalFade").hide();
});

$('html').click(function (e) {
  if (e.target.id != 'modalBox') {
    $("#modalFade").hide();
  }
});
