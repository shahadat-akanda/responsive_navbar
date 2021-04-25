// nav js
const body = document.querySelector("body");
const navbar = document.querySelector(".navbar");
const menuBtn = document.querySelector(".menu_btn");
const cancelBtn = document.querySelector(".cancel_btn");
menuBtn.onclick = () => {
    navbar.classList.add("show");
    menuBtn.classList.add("hide");
}
cancelBtn.onclick = () => {
    navbar.classList.remove("show");
    menuBtn.classList.remove("hide");
}
window.onscroll = () => {
    this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
}

// smooth scrolling js
$(document).ready(function () {
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        var target = this.hash;
        var $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - 65
        }, 900, 'swing', function () {

        });
    });
});

// active manu
$(window).scroll(function () {
    var scrollDistance = $(window).scrollTop();

    // Assign active class to nav links while scolling
    $('.smooth').each(function (i) {
        if ($(this).position().top -65 <= scrollDistance) {
            $('.menu_list li a.active').removeClass('active');
            $('.menu_list li a').eq(i).addClass('active');
        }
    });
}).scroll();