$(document).ready(function(){
    $(".dropdown").mouseover(function(){
        $(".dropdown-menu").show()
    })
    $(".dropdown").mouseout(function(){
        $(".dropdown-menu").hide()
    })
})
var swiper = new Swiper('.swiper', {
    slidesPerView: 2,
    direction: getDirection(),
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    on: {
        resize: function () {
            swiper.changeDirection(getDirection());
        },
    },
});

function getDirection() {
    var windowWidth = window.innerWidth;
    var direction = window.innerWidth = 'horizontal';

    return direction;
}

// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 200) {
    document.getElementById("navbar").style.background = "rgba(255, 255, 255, 0.856)";
    document.getElementById("logo-2").style.display = "block"
    document.getElementById("logo-1").style.display = "none"
    document.getElementById("nav").style.color = "#000"
    document.getElementById("nav1").style.color = "#000"
    document.getElementById("nav2").style.color = "#000"
    document.getElementById("nav3").style.color = "#000"
    document.getElementById("nav4").style.color = "#000"
    document.getElementById("nav5").style.color = "#000"
    document.getElementById("line-3").style.background = "#000"
    document.getElementById("line-2").style.background = "#000"
    document.getElementById("line-1").style.background = "#000"
   

  } else {
    document.getElementById("navbar").style.background = "transparent";
    document.getElementById("logo-2").style.display = "none"
    document.getElementById("logo-1").style.display = "block"
    document.getElementById("nav").style.color = "#fff"
    document.getElementById("nav1").style.color = "#fff"
    document.getElementById("nav2").style.color = "#fff"
    document.getElementById("nav3").style.color = "#fff"
    document.getElementById("nav4").style.color = "#fff"
    document.getElementById("nav5").style.color = "#fff"
    document.getElementById("line-3").style.background = "#fff"
    document.getElementById("line-2").style.background = "#fff"
    document.getElementById("line-1").style.background = "#fff"
  }
}
$(document).ready(function(){
    $("#nav").mouseover(function(){
        $("#nav").css({"border-bottom":"2px solid #000"})
    })
    $("#nav1").mouseover(function(){
        $("#nav1").css({"border-bottom":"2px solid #000"})
    })
    $("#nav2").mouseover(function(){
        $("#nav2").css({"border-bottom":"2px solid #000"})
    })
    $("#nav3").mouseover(function(){
        $("#nav3").css({"border-bottom":"2px solid #000"})
    })
    $("#nav4").mouseover(function(){
        $("#nav4").css({"border-bottom":"2px solid #000"})
    })
    $("#nav").mouseout(function(){
        $("#nav").css({"border-bottom":"none"})
    })
    $("#nav1").mouseout(function(){
        $("#nav1").css({"border-bottom":"none"})
    })
    $("#nav2").mouseout(function(){
        $("#nav2").css({"border-bottom":"none"})
    })
    $("#nav3").mouseout(function(){
        $("#nav3").css({"border-bottom":"none"})
    })
    $("#nav4").mouseout(function(){
        $("#nav4").css({"border-bottom":"none"})
    })
    $("#hamburger").click(function(){
        $(".nav-res").slideToggle()
    })
})
