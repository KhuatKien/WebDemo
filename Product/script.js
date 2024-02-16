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

//------------------OnMouseOver----------------
var listImg = document.querySelectorAll(".product>.product-left>.other-src>img");
console.log(listImg);
var main= document.querySelector(".product>.product-left>.main-src>img")
var msrc = main.src;

for (var i = 0; i < listImg.length; i++) {
    listImg[i].onmouseover = function() {
        var mainsrc = document.querySelector(".product>.product-left>.main-src>img")
        mainsrc.src = this.src;
    }
    listImg[i].onmouseout = function() {
        var mainsrc = document.querySelector(".product>.product-left>.main-src>img")
        mainsrc.src = msrc;
    }
}

//-------------------SlickSlider--------------
$('.multiple-items').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa-solid fa-angle-left fa-xl' aria-hidden='true'></i></button>",
    nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa-solid fa-angle-right fa-xl' aria-hidden='true'></i></button>"
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