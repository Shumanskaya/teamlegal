document.addEventListener("DOMContentLoaded", function (event) {
    var button = document.getElementById('buttonMenu');

    button.onclick = function () {
        var menu = document.getElementById('menuMobile');
        if (menu.style.display === 'none') {
            menu.style.display = 'flex';
        }
        else {
            menu.style.display = 'none';
        }
    }

    $('.header-top-menu__item_link').click(function (e) {
        var href = $(this).attr('href');
        var posHref = $(href).position();
        e.preventDefault()
        $('body').animate({
            scrollTop: posHref.top
        }, 1000);
        if ($('#menuMobile').css('display', 'flex') && $(window).width() < 1024) {
            $('#menuMobile').css('display', 'none')
        }
    })


    $(window).scroll(function () {
        if ($(window).scrollTop() > 500) {
            $('.legal-scroll').fadeIn()
        }
        else {
            $('.legal-scroll').fadeOut()
        }
    })

    $('.legal-scroll').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1000)
    })

});