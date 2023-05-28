document.addEventListener('DOMContentLoaded', function () {
    var usernameDgd = document.querySelector('.username.dgd');
    var usernameGd = document.querySelector('.username.gd');

    setInterval(function () {
        var dgdTop = parseInt(getComputedStyle(usernameDgd).top);
        var gdTop = parseInt(getComputedStyle(usernameGd).top);

        if (window.innerWidth > 640) {
            usernameDgd.style.top = (dgdTop === 0 ? '-60px' : '0');
            usernameGd.style.top = (gdTop === 0 ? '-60px' : '0');
        } else {
            usernameDgd.style.top = (dgdTop === 0 ? '-100%' : '0');
            usernameGd.style.top = (gdTop === 0 ? '-100%' : '0');
        }

    }, 3000);
});