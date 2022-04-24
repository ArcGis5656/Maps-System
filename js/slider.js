function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

window.addEventListener('click', function(e){   
  if (!document.getElementById('mySidenav').contains(e.target) && !document.getElementById('myMenu').contains(e.target)){
    // Clicked in box
   document.getElementById("mySidenav").style.width = "0px";  
  } else{
   
 // document.getElementById("mySidenav").style.width = "0px";
  }
});
//sane hegit
var theMax=0;
$('.same-height div').each(
  function(){
    if($(this).height() > theMax){
      theMax=$(this).height();
    }
  }
);
$('.same-height div').height(theMax);
function openMod() {
  document.getElementById("mymodal").style.width = "250px";
}


function openmod() {
  document.getElementById("mySidemod").style.width = "250px";
}

function openLab(){
   document.getElementById('lab').style.display='block';
   document.getElementById('labButton').style.display='none';
}
// function openLab() {
//   document.getElementById("$id").style.width = "250px";
// }

$(document).ready(function () {

  $('#sidebarCollapse').on('click', function () {
      $('#sidebar').toggleClass('active');
  });
  
  });


