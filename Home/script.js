//---------------GoToTop---------------------
$(document).ready(function () {
    $(".gotopbtn").hide();

    $(window).scroll(function () {
        if ($(this).scrollTop() >= 200)
            $(".gotopbtn").show("slow");
        else
            $(".gotopbtn").hide("slow");
    });
    $(".gotopbtn").click(function () {
        $("html,body").animate({ scrollTop: 0, }, 1000);
    });
});

// -------------HeaderFixed---------------------
window.onscroll = function() {myFunction()};

var menu = document.getElementById("menu");
var sticky = menu.offsetTop;

function myFunction() {
    if (window.pageYOffset > sticky) {
      menu.classList.add("sticky");
    }else{
        
      menu.classList.remove("sticky");
    }
}

// ---------------Slider-Top--------------------
let num = 0;
const imgNumber = document.querySelectorAll(".slider-content-left-top img");
const arrow_left = document.querySelector(".fa-chevron-left");
const arrow_right = document.querySelector(".fa-chevron-right");
const li_chirld_top = document.querySelectorAll(".slider-content-left-top a")

li_chirld_top.forEach((element, index) => {
    const img = element.querySelector('img');
    img.style.transform = `translateX(${index * 100}%)`;
});

arrow_left.addEventListener("click", function(){
    num--;
    if(num < 0)
    {
        num = imgNumber.length - 1;
    }
    slideRight();
});

arrow_right.addEventListener("click", function(){
    num++;
    if(num > imgNumber.length - 1)
    {
        num = 0;
    }
    slideRight();
});

// ---------------Slider-Bottom--------------------
const li_chirld_bottom = document.querySelectorAll(".slider-content-left-bottom li")

li_chirld_bottom.forEach((element, index) => {
    element.style.transform = `translateX(${index * 100}%)`;
    element.addEventListener("click", function() {
        removeActive();
        document.querySelector(".slider-content-left-top").style.right = index * 100 + "%";
        element.classList.add("active");
        num = index;
    });
});

function removeActive(){
    let liactive = document.querySelector(".active");
    liactive.classList.remove("active");
}

function slideRight(){
    removeActive();
    document.querySelector(".slider-content-left-top").style.right = num * 100 + "%";
    li_chirld_bottom[num].classList.add("active");
}

// ---------------------SlideMove------------------
function autoMove(){
    num++;
    if(num > imgNumber.length - 1)
    {
        num = 0;
    }
    slideRight();
}

setInterval(autoMove,5000);

//-----------------------FlashSaleSlide---------------
$('.multiple-items').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa-solid fa-angle-left fa-xl' aria-hidden='true'></i></button>",
    nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa-solid fa-angle-right fa-xl' aria-hidden='true'></i></button>"
});

//--------------------------BestSaler-----------------------
const sheet = document.querySelector('.sheet-button');
const pillow = document.querySelector('.pillow-button');
const blanket = document.querySelector('.blanket-button');
const mat = document.querySelector('.mat-button');
const accessory = document.querySelector('.accessory-button');

sheet.addEventListener('click', function() {
    removeProductButton();
    removeShow();
    sheet.classList.add('product-button');
    document.querySelector('.sheet').classList.add('show');
});

pillow.addEventListener('click', function() {
    removeProductButton();
    removeShow();
    pillow.classList.add('product-button');
    document.querySelector('.pillow').classList.add('show');
});

blanket.addEventListener('click', function() {
    removeProductButton();
    removeShow();
    blanket.classList.add('product-button');
    document.querySelector('.blanket').classList.add('show');
});

mat.addEventListener('click', function() {
    removeProductButton();
    removeShow();
    mat.classList.add('product-button');
    document.querySelector('.mat').classList.add('show');
});

accessory.addEventListener('click', function() {
    removeProductButton();
    removeShow();
    accessory.classList.add('product-button');
    document.querySelector('.accessory').classList.add('show');
});

function removeProductButton(){
    let productButton = document.querySelector(".product-button");
    productButton.classList.remove("product-button");
}

function removeShow(){
    let show = document.querySelector(".show");
    show.classList.remove("show");
}