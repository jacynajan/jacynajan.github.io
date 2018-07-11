window.onscroll = function () {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("main-nav").style.backgroundColor = 'rgba(14, 216, 214, 0.6)';
    } else {
        document.getElementById("main-nav").style.backgroundColor = 'transparent';
    }
}