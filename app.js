'use strict'

const burger_menu = document.querySelector('.burger_menu')

burger_menu.addEventListener('click', function() {
    this.classList.toggle("menu-expanded");
})