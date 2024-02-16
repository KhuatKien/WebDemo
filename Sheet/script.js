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

//----------------ChangeProduct---------------
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

//-----------------------Dropdown------------------
const dropdown = document.querySelector(".dropdown");
const select = dropdown.querySelector(".select");
const caret = dropdown.querySelector(".caret");
const menu = dropdown.querySelector(".menu");
const options = dropdown.querySelectorAll(".menu li");
const selected = dropdown.querySelector(".selected");

select.addEventListener('click', () =>{
    select.classList.toggle('select-clicked');
    caret.classList.toggle('caret-rotate');
    menu.classList.toggle('menu-open');
});

options.forEach(option =>{
    option.addEventListener('click', () =>{
        selected.innerText = option.innerText;
        select.classList.remove('select-clicked');
        caret.classList.remove('caret-rotate');
        menu.classList.remove('menu-open');
        options.forEach(option =>{
            option.classList.remove('active');
        });
        option.classList.add('active');
    });
});

// -------------HeaderFixed---------------------
window.onscroll = function() {myFunction()};

var menus = document.getElementById("menu");
var sticky = menus.offsetTop;

function myFunction() {
    if (window.pageYOffset > sticky) {
      menus.classList.add("sticky");
    }else{
        
      menus.classList.remove("sticky");
    }
}