document.addEventListener("DOMContentLoaded", function (event) {
    var button = document.getElementById('buttonMenu');

    button.onclick = function () {
        var menu = document.getElementById('menuMobile');
        if (menu.style.display === 'none') {
            menu.style.display = 'flex'
        }
        else {
            menu.style.display = 'none' 
        }
    }

});