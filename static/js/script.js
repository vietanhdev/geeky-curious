// Preloader js
window.addEventListener('load', function() {
  'use strict';
  let all = document.getElementsByClassName('preloader');
  for (var i = 0; i < all.length; i++) {
    all[i].style.display = 'none';
  }
});

// on ready state
window.addEventListener('load', function() {
  'use strict';

  let toggleSearchBtns = document.getElementsByClassName("toggle-search");
  for (var i = 0; i < toggleSearchBtns.length; i++) {
    toggleSearchBtns[i].addEventListener('click', function() {
      let targetId = this.dataset.target;
      if (targetId) {
        let searchBar = document.querySelector(targetId);
        searchBar.classList.toggle('open');
      }
    }, false);
  }


  // Collapse course menu on small screen
  if  (screen.width < 600 && document.getElementById("course-sidebar")) {
    document.getElementById("course-sidebar").classList.remove('show');
  }
});