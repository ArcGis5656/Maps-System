// function openNav() {
//   document.getElementById("mySidenav").style.width = "250px";
// }

//sane hegit
var theMax = 0;
$(".same-height div").each(function () {
  if ($(this).height() > theMax) {
    theMax = $(this).height();
  }
});
$(".same-height div").height(theMax);

function openLab($id) {
  document.getElementById($id).style.display = "block";
  document.getElementById("labButton").style.display = "block";
}
function closeLab($id) {
  document.getElementById($id).style.display = "none";
  document.getElementById("labButton").style.display = "block";
}

// function openLab() {
//   document.getElementById("$id").style.width = "250px";
// }

$(document).ready(function () {
  $("#sidebarCollapse").on("click", function () {
    $("#sidebar").toggleClass("active");
  });
});
