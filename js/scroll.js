window.onscroll = function () {
  myFunction();
};
/*
var startSideNav = document.getElementById("sticky-start");
var endSideNav = document.getElementById("sticky-end");*/
var sideNav = document.getElementById("side-nav-menu");

var addSticky = sideNav.offsetTop;

function myFunction() {
  if (window.pageYOffset >= addSticky) {
    sideNav.className.add("sticky-menu");
  } else {
    sideNav.className.remove("sticky-menu");
  }
}
