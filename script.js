$(document).ready(function () {
  var table = $("#mortgage").DataTable({ order: [[3, "desc"]] });
  $("#mortgage").removeClass("no-footer");
  $("#mortgage").removeClass("dataTable");
  $("#mortgage_length,#mortgage_filter").css("display", "none");
  $("#mortgage_previous").text("<");
  $("#mortgage_next").text(">");
  $("#mortgage_previous").on("click", function () {
    $("#mortgage_previous").text("<");
    $("#mortgage_next").text(">");
  });
  $("#mortgage_next").on("click", function () {
    $("#mortgage_previous").text("<");
    $("#mortgage_next").text(">");
  });
});
