$("html").bind("mouseleave touchend", function () {
  $("#modalFade").show();
});

$('html').click(function (e) {
  if (e.target.id == 'modalFade' || e.target.id == 'closeModal') {
    $("#modalFade").hide();
  }
});
