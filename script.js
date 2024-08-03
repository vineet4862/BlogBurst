document.addEventListener("DOMContentLoaded", function() {
    let menuList = document.getElementById('menuList');
    let menuIcon = document.querySelector('.menu-icon');
    menuList.style.maxHeight = "0rem";

    menuIcon.addEventListener('click', function() {
      if (menuList.style.maxHeight === "0rem") {
        menuList.style.maxHeight = "20rem"; // or whatever height you want
      } else {
        menuList.style.maxHeight = "0rem";
      }
    });
  });