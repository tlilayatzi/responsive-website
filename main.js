(function(window){
  /*
    1.When user scrolls past the height of the hero,
    2. add a class of fixed header
    3. if the user scrolls up the header should disappear
  */

  var header = document.querySelector(".header"),
      feature = document.querySelector(".feature"),
      topOfNav = feature.offsetTop;

      function fixedNav() {
        if(window.scrollY >= topOfNav) {
          document.body.style.paddingTop = header.offsetHeight + "px";
          header.classList.add("header--fixed");
        } else {
          document.body.style.paddingTop = 0 + "px";
          header.classList.remove("header--fixed");
        }

        console.log(topOfNav, window.scrollY);
      }

      window.addEventListener("scroll", fixedNav);
}(window));
