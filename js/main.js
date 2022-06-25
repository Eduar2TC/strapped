document.addEventListener("DOMContentLoaded", function (event) {
    var typed = new Typed('.aside-tex', {
        strings: ['<span class="aside-text-style text-primary">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</span>', '<span class="aside-text-style">Nam sint saepe repellat officiis eum vel.</span>'],
        loop: true,
        typeSpeed: 40,
        backSpeed: 30,
    });
    
});
//Toggle css sizes icons
window.addEventListener('resize', function () {
    const bx = document.querySelectorAll('.bx');
    if (window.innerWidth < 700) {

        bx.forEach(f => {
            f.classList.remove('bx-md');
            f.classList.add('bx-sm');
        });

    }
    else {
        bx.forEach(f => {
            f.classList.remove('bx-sm');
            f.classList.add('bx-md');
        });
    }
});


/*Collapses */
window.onload = function(){
    /*Headers*/
    const flushheading1 = document.getElementById('flush-headingOne');
    const headerOffset = flushheading1.offsetHeight;
    /*Bodys */
    const flushCollapse1 = document.getElementById('flush-collapseOne');
    const flushCollapse2 = document.getElementById('flush-collapseTwo');
    const flushCollapse3 = document.getElementById('flush-collapseThree');
    const flushCollapse4 = document.getElementById('flush-collapseFour');
    const flushCollapse5 = document.getElementById('flush-collapseFive');
    const flushCollapse6 = document.getElementById('flush-collapseSix');
    const flushCollapse7 = document.getElementById('flush-collapseSeven');
    const flushCollapse8 = document.getElementById('flush-collapseEight');
    const flushCollapse9 = document.getElementById('flush-collapseNine');

    const flushes = [
        flushCollapse1,
        flushCollapse2,
        flushCollapse3,
        flushCollapse4,
        flushCollapse5,
        flushCollapse6,
        flushCollapse7,
        flushCollapse8,
        flushCollapse9
    ];
    
    let collapses = [];
    const box = document.querySelectorAll('.services .box');
    for( let i = 0; i < flushes.length; i++){
        collapses[i] = new bootstrap.Collapse(flushes[i], {
            toggle: false
        });
        box[i].addEventListener('click', function(e) {
            const h5 = box[i].querySelector('h5');
            let bx = document.querySelectorAll('.box-active');
            let h5Active = document.querySelectorAll('.h5-active');
                bx.forEach(function (item) {
                    item.classList.remove("box-active");
                });
                h5Active.forEach(function (item) {
                    item.classList.remove("h5-active");
                });
            box[i].classList.add('box-active');
            h5.classList.add('h5-active');
            collapses[i].toggle();
            flushes[i].scrollIntoView({
                block: 'center',
                behavior: "smooth" 
            });
        });
    }

};