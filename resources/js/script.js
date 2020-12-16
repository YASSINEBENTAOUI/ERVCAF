$(document).on('click', '.dropdown', function (e) {
    e.stopPropagation();
});
/////////////////////////////////////////
$(document).ready(function () {
    setTimeout(function () {
        $(".loader_bg").hide();
    }, 500);
});
/////////////////////////////////////////
$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        center:true,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        margin:5,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });
});
///////////////////////////////////
var main_color = '#94c11f';
var light_color = '#999999';
var bg_color = '#222222';
var nav = document.querySelector('nav');
var large_display = document.querySelector('.large-display');
var collapse = document.querySelector('nav .collapse');
var nav_link = document.querySelectorAll('nav .nav-link');
var nav_ul = document.querySelector('nav ul:last-child');
var nav_avtive = document.querySelector('nav .active:hover');
var arrow = document.querySelector('.arrow');
document.onscroll = function(){
    let windowsY = window.scrollY;
    let windows_width = window.screen.width;
    if((windowsY > 300) && (windows_width > 1200)){
        nav.classList.add('sticky-top');
        nav.style.backgroundColor = '#fff';
        nav.classList.add('p-2');
        nav.classList.add('justify-content-between');
        nav.classList.add('shadow-sm');
        large_display.classList.remove('d-none');
        collapse.style.backgroundColor = '#fff';
        collapse.classList.remove('justify-content-between');
        collapse.classList.add('justify-content-end');
        for(var i=0;i<nav_link.length;i++){
            nav_link[i].classList.remove('p-4');
            nav_link[i].classList.add('p-3');
            nav_link[i].style.color = light_color;
        }
        nav_ul.classList.remove('ul-2');
    }
    else{
        nav.classList.remove('sticky-top');
        nav.style.backgroundColor = 'unset';
        nav.classList.remove('p-2');
        nav.classList.remove('shadow-sm');
        large_display.classList.add('d-none');
        collapse.style.backgroundColor = bg_color;
        collapse.classList.add('justify-content-between');
        collapse.classList.remove('justify-content-end');
        for(var i=0;i<nav_link.length;i++){
            nav_link[i].classList.add('p-4');
            nav_link[i].classList.remove('p-3');
            nav_link[i].style.color = '#fff';
        };
        nav_ul.classList.add('ul-2');
    }
    if(windowsY > 300){
        arrow.classList.add('d-block');
    }
    else{
        arrow.classList.remove('d-block');
    }
}
////////////////////////////////////
function openTab(blockNumbre, elmnt) {
    // Hide all elements with class="tabcontent" by default */
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    // Remove the background color of all tablinks/buttons
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }
    // Show the specific tab content
    document.getElementById(blockNumbre).style.display = "block";

    // Add the specific color to the button used to open the tab content
    elmnt.style.backgroundColor = '#f7f7f7';
}
