

// انتظر حدوث حدث التمرير
window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');

    // إذا كان المتصفح قد تمرر إلى أسفل بمقدار أكثر من 20 بكسل، قم بتغيير الفئة
    if (window.scrollY > 20) {
        navbar.classList.add('scroll');
    } else {
        navbar.classList.remove('scroll');
    }
});
