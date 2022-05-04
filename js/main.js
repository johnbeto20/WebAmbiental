document.addEventListener("mousemove", parallax);
const elem0 = document.getElementById("element-0");
const elem = document.getElementById("element-1");
const elem2 = document.getElementById("element-2");
const elem3 = document.getElementById("element-3");
const elem4 = document.getElementById("element-4");
const elem5 = document.getElementById("element-5");
const elem6 = document.getElementById("element-6");
const elem7 = document.getElementById("element-7");
const elem8 = document.getElementById("element-8");
const btnBackToHome = document.getElementById("backToHome");
const page1 = document.getElementById("page-1");
const page2 = document.getElementById("page-2");
const page4 = document.getElementById("page-4");
const menu = document.getElementById("menu");

btnBackToHome.addEventListener("click", topFunction)

const detectorElement = document.getElementById("detectorElement");

function parallax(e) {
    let _w = window.innerWidth / 2;
    let _h = window.innerHeight / 2;
    let _mouseX = e.clientX;
    let _mouseY = e.clientY;
    let _depth = `${50 - (_mouseX - _w) * 0.1}px, ${50 - (_mouseY - _h) * 0.1}px`;
    let _depth2 = `${50 - (_mouseX - _w) * 0.01}px, ${50 - (_mouseY - _h) * 0.01
        }px`;
    let _depth3 = `${50 - (_mouseX - _w) * 0.05}px, ${50 - (_mouseY - _h) * 0.05
        }px`;
    let x = `${_depth}`;
    elem.style.transform = "translate(" + x + ")";
    let x_min = `${_depth2}`;
    let x_medium = `${_depth3}`;
    elem0.style.transform = "translate(" + x_medium + ")";
    elem2.style.transform = "translate(" + x_min + ")";
    elem3.style.transform = "translate(" + x_min + ")";
    elem4.style.transform = "translate(" + x_medium + ")";
    elem5.style.transform = "translate(" + x_medium + ")";
    elem6.style.transform = "translate(" + x_min + ")";
    elem7.style.transform = "translate(" + x_min + ")";
    elem8.style.transform = "translate(" + x_min + ")";
    //pages
    page2.style.backgroundPosition = x_min;
    page4.style.backgroundPosition = x_min;
}

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > page1.offsetHeight - 40 || document.documentElement.scrollTop > page1.offsetHeight - 40) {
        btnBackToHome.style.display = "block";
    } else {
        btnBackToHome.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

Number.prototype.format = function (n) {
    var r = new RegExp('\\d(?=(\\d{3})+' + (n > 0 ? '\\.' : '$') + ')', 'g');
    return this.toFixed(Math.max(0, Math.floor(n))).replace(r, '$&.');
};

function increment() {
    $(this).prop('counter', 0).animate({
        counter: $(this).text()
    }, {
        duration: 3000,
        easing: 'easeOutExpo',
        step: function (step) {
            $(this).text('' + step.format());
        }
    });
}

function increment2() {
    $(this).prop('counter', 0).animate({
        counter: $(this).text()
    }, {
        duration: 6000,
        easing: 'easeOutExpo',
        step: function (step) {
            $(this).text('' + step.format());
        }
    });
}

$('.count').waypoint(function (direction) {
    $(this.element).each(increment);
    this.destroy()
}, {
    offset: '100%'
})

$('.count_2').waypoint(function (direction) {
    $(this.element).each(increment2);
    this.destroy()
}, {
    offset: '100%'
})

//menu
const items = menu.querySelectorAll('li');

for (var i = 0; i < items.length; i++) {
    items[i].addEventListener("click", function () {
        for (var i = 0; i < items.length; i++) {
            items[i].classList.remove("active");
        }
        console.log("hola");
        this.classList.add("active");
    });
}
