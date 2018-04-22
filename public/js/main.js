(function(window){
  /*
    1.When user scrolls past the height of the hero,
    2. add a class of fixed header
    3. if the user scrolls up the header should disappear
  */

  var feature = document.querySelector(".feature"),
      header = document.querySelector(".header");
      fixedNav = feature.offsetTop;

  function fixedHeader() {
    if(window.scrollY >= fixedNav) {
        header.classList.add("header--fixed");
      console.log("scrolling works");
    } else {
      header.classList.remove("header--fixed");
    }
  }

  window.addEventListener("scroll", fixedHeader);

}(window));
