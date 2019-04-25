let activeColor = document.getElementsByClassName("sidebar__nav-item_active");
let navItemArrow = document.getElementsByClassName("nav-item__arrow");
let sideBarNav = document.getElementById("sidebar__nav");
let sideBarNavItem = document.getElementsByClassName("sidebar__nav-item");
let personContainer = document.getElementsByClassName("person__container");
let activePersonSlide = document.getElementsByClassName("person__active-slide");


navItemArrow[1].style.display = "inline-block";
personContainer[1].style.display = "flex";

sideBarNav.addEventListener("click", function (e) {

    activePersonSlide = document.getElementsByClassName("person__active-slide");
    activeColor = document.getElementsByClassName("sidebar__nav-item_active");

    if (e.target.classList.contains("sidebar__nav-item")) {

        for (let i = 0; i < activeColor.length; i++) {
            activeColor[i].classList.remove("sidebar__nav-item_active");
        }

        for (let d = 0; d < activePersonSlide.length; d++) {
            activePersonSlide[d].classList.remove("person__active-slide");
        }

        for (let l = 0; l < navItemArrow.length; l++) {
            navItemArrow[l].style.display = "none";
        }

        for (let k = 0; k < personContainer.length; k++) {
            personContainer[k].style.display = "none";
        }

        e.target.classList.add("sidebar__nav-item_active");
        e.target.firstChild.style.display = "inline-block";

        for (let i = 0; i < sideBarNavItem.length; i++) {
            if (sideBarNavItem[i].classList.contains("sidebar__nav-item_active")) {
                personContainer[i].style.display = "flex";
                personContainer[i].classList.add("person__active-slide");
                return true;
            }
        }
    }
});

$('.arrow-next, .next').click(function() {
    let personName = $('.person-desc__name');
    let currentSlide = $('.person__active-slide');
    let nextSlide = currentSlide.next();
    let firstSlideText = $(personName).first().text();
    let lastSlideText = $(personName).last().text();
    let currentDot = $('.active-dot');
    let nextDot= currentDot.next();

    if(nextSlide.length == 0 ) {
        nextSlide = $('.person__container').first();
    }

    if(nextDot.length == 0){
        nextDot = $('.dot').first()
    }

    currentSlide.fadeOut(0).removeClass('person__active-slide');
    nextSlide.fadeIn(0).addClass('person__active-slide');

    let activeSlide = $('.person__active-slide');
    console.log($(activeSlide).next().length);

    if($(activeSlide).prev().length === 0){
        $('.prev-name').text(lastSlideText);
    }
    if($(activeSlide).next().length === 0){
        $('.next-name').text(firstSlideText);
    }

    let prevName = $(activeSlide).prev().find(personName).text();
    let nextName = $(activeSlide).next().find(personName).text();

    $('.prev-name').text(prevName);
    $('.next-name').text(nextName);

    currentDot.removeClass('active-dot');
    nextDot.addClass('active-dot')
});
$('.arrow-prev, .previous').click(function(){
    let personName = $('.person-desc__name');
    let currentSlide = $('.person__active-slide');
    let prevSlide = currentSlide.prev();
    let firstSlideText = $(personName).first().text();
    let lastSlideText = $(personName).last().text();
    let currentDot= $('.active-dot');
    let prevDot= currentDot.prev();

    if(prevSlide.length == 0){
        prevSlide = $('.person__container').last();
    }

    if(prevDot.length==0){
        prevDot = $('.dot').last();
    }

    currentSlide.fadeOut(0).removeClass('person__active-slide');
    prevSlide.fadeIn(0).addClass('person__active-slide');

    let activeSlide = $('.person__active-slide');
    console.log($(activeSlide).prev().length);
    if($(activeSlide).prev().prev().length == 0){
        $('.prev-name').text(lastSlideText);
    }
    if($(activeSlide).next().next().length == 0){
        $('.next-name').text(firstSlideText);
    }
    let prevName = $(activeSlide).prev().find(personName).text();
    let nextName = $(activeSlide).next().find(personName).text();

    $('.prev-name').text(prevName);
    $('.next-name').text(nextName);

    currentDot.removeClass('active-dot');
    prevDot.addClass('active-dot')
});

$('.dot').click(function () {
    let currentSlide = $('.person__active-slide');
    let currentDot= $('.active-dot');
    let index = $('.dot').index(this);

    currentSlide.fadeOut(0).removeClass('person__active-slide');
    currentDot.removeClass('active-dot');

    $(this).addClass('active-dot');
    let nextSlide = $('.person__container').eq(index);
    nextSlide.fadeIn(0).addClass('person__active-slide')

});


    if ($(window).width() < 481) {
        $(".person-photo").attr("src", "../../img/about-us/TeamKlimenko410px.png");
    }

