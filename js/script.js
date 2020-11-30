let sliderImages = document.querySelectorAll('.slide'),
    slideContainer = document.querySelector('.slider'),
    current = 0;
let timer = 4000;

//establecer posicion primer slide
function reset() {
    for (let i = 0; i < sliderImages.length; i++) {
        sliderImages[i].style.display = 'none';

    }
}
//detener autoslide eventos
var slideLoop = setInterval(function () {
    autoSlide();
}, timer);
slideContainer.addEventListener('mouseenter', function () {
    clearInterval(slideLoop);
});
slideContainer.addEventListener('mouseleave', function () {
    slideLoop = setInterval(function () {
        autoSlide();
    }, timer);
});


//slider automatico
function autoSlide() {
    reset();
    current++;
    if (current > sliderImages.length) {
        current = 1;
    }
    sliderImages[current - 1].style.display = 'block';

}

autoSlide();


//menu

let navMenu = document.querySelector('.nav-menu');
let navBtn = document.querySelector('.nav-button');
let itemsNav = document.querySelector('.nav-menu a');

$(navBtn).click(function () {
    $(this).toggleClass('show-menu');
    $('.lines').toggleClass('close');
    $(navMenu).toggleClass('show-menu');
});
//smooth scroll  anchors id
$('.nav-menu a').click(function (e) {
    if (this.hash !== '') {
        e.preventDefault();
        const hash = this.hash;
        $('html, body').animate({
            scrollTop: $(hash).offset().top - 100
        }, 800);
        $('.lines').toggleClass('close');
        $(navMenu).toggleClass('show-menu');
        $(navBtn).toggleClass('show-menu');
    }


});
$('.btn-cta').click(function () {
    $('html, body').animate({
        scrollTop: $('#oferta').offset().top - 100
    }, 800);
});
//esconder menu si se hace click fuera
$(navMenu).click(function (out) {

    if (!$('.nav-menu a').is(out.target) && $('.nav-menu a').has(out.target).length === 0) {
        $('.lines').toggleClass('close');
        $(navMenu).toggleClass('show-menu');
        $(navBtn).toggleClass('show-menu');
    }
});







//booking
const form = document.querySelector(".form");
var bookingForm = document.querySelector('.booking-form-popup-wrapper');
var btnCloseForm = document.getElementById('btn-cancel');

function dPopup() {
    bookingForm.style.display = "block";
}
btnCloseForm.addEventListener('click', () => {
    bookingForm.style.display = "none";
    window.location.reload(true);
    document.querySelector(".form").reset();
});

function error(elemId, message) {
    document.getElementById(elemId).innerHTML = message;
}

function validate() {

    let name = form.name.value;
    let people = form.people.value;
    let night = form.night.value;
    let city = form.pais.value;




    let nameErr, peopleErr, nightErr, cityErr;
    nameErr = peopleErr = nightErr = cityErr = true;

    if (name == "") {
        form.name.classList.add('failed');
        document.querySelector('#nameErr').classList.add('show');
        error('nameErr', 'Please enter your name ');
    } else {
        var namePattern = /^[a-z]{3,10}$/i;
        if (namePattern.test(name) === false) {
            form.name.classList.add('failed');
            document.querySelector('#nameErr').classList.add('show');
            error('nameErr', 'Please enter a valid name ');
        } else {
            nameErr = false;
        }


    }

    if (people == "") {
        form.people.classList.add('failed');
        document.querySelector('#peopleErr').classList.add('show');
        error('peopleErr', 'Please enter a valid number ');
    } else {
        var peoplePattern = /^[1-9]$/;
        if (peoplePattern.test(people) === false) {
            form.people.classList.add('failed');
            document.querySelector('#peopleErr').classList.add('show');
            error('peopleErr', 'Please enter a valid number ');
        } else {
            peopleErr = false;
            form.people.classList.add('success');
        }

    }

    if (night == "") {
        form.night.classList.add('failed');
        document.querySelector('#nightErr').classList.add('show');
        error('nightErr', 'Please enter a valid number');
    }
    else {
        var nightPattern = /^[1-9]$/;
        if (nightPattern.test(night) === false) {
            form.night.classList.add('failed');
            document.querySelector('#nightErr').classList.add('show');
            error('nightErr', 'Please enter a valid number');
        } else {
            nightErr = false;
        }
    }

    if (city == "Select") {
        form.pais.classList.add('failed');
        document.querySelector('#cityErr').classList.add('show');
        error('cityErr', 'Please select a city');
    } else {
        cityErr = false;

    }



    if (nameErr || peopleErr || nightErr || cityErr == true) {
        return false;
    } else {
        var bookingCard = document.querySelector('.booking');
        var noches = document.querySelector('.noches');
        var clientName = document.querySelector('.booking-name');
        var ofertaFinal = document.querySelector('.precio-final');
        var hotel = document.querySelector('.booking-hotel');
        var precioFinal;
        var estadia;

        if (city == "Lisboa") {
            city = 120;
            var nocheLisboa = 80;
            estadia = night * nocheLisboa;
            precioFinal = estadia + city;
            document.getElementById('book-img').classList.remove('booking-img-4');
            document.getElementById('book-img').classList.remove('booking-img-2');
            document.getElementById('book-img').classList.remove('booking-img-3');
            document.getElementById('book-img').classList.add('booking-img-1');
            document.querySelector('.booking-title-span').innerHTML = `lisboa portugal`;
            document.querySelector('.booking-title-span').classList.remove('booking-title-span-4');
            document.querySelector('.booking-title-span').classList.remove('booking-title-span-3');
            document.querySelector('.booking-title-span').classList.remove('booking-title-span-2');
            document.querySelector('.booking-title-span').classList.add('booking-title-span-1');
            document.querySelector('.booking-card-side-back').classList.remove('booking-card-side-back-2');
            document.querySelector('.booking-card-side-back').classList.remove('booking-card-side-back-3');
            document.querySelector('.booking-card-side-back').classList.remove('booking-card-side-back-4');
            document.querySelector('.booking-card-side-back').classList.add('booking-card-side-back-1');
            document.querySelector('.booking-offer-percentage').innerHTML = '80%';
            clientName.innerHTML = `${name} te vas de vacaciones a...`;
            hotel.innerHTML = `Hotel Lisboa &#9733;&#9733;`;
            noches.innerHTML = `${night} noches, ${people} personas por sólo ${estadia}€`;
            ofertaFinal.innerHTML = `Precio final de ${precioFinal}€`;
            bookingCard.style.display = 'block';
            $("html, body").animate(
                {
                    scrollTop: $(bookingCard).offset().top - 50
                },
                800
            );
        }
        if (city == "Madrid") {
            city = 60;
            var nocheMadrid = 120;
            estadia = night * nocheMadrid;
            precioFinal = estadia + city;
            document.getElementById('book-img').classList.remove('booking-img-1');
            document.getElementById('book-img').classList.remove('booking-img-4');
            document.getElementById('book-img').classList.remove('booking-img-3');
            document.getElementById('book-img').classList.add('booking-img-2');
            document.querySelector('.booking-title-span').innerHTML = `madrid españa`;
            document.querySelector('.booking-title-span').classList.remove('booking-title-span-1');
            document.querySelector('.booking-title-span').classList.remove('booking-title-span-3');
            document.querySelector('.booking-title-span').classList.remove('booking-title-span-4');
            document.querySelector('.booking-title-span').classList.add('booking-title-span-2');
            document.querySelector('.booking-card-side-back').classList.remove('booking-card-side-back-4');
            document.querySelector('.booking-card-side-back').classList.remove('booking-card-side-back-3');
            document.querySelector('.booking-card-side-back').classList.remove('booking-card-side-back-1');
            document.querySelector('.booking-card-side-back').classList.add('booking-card-side-back-2');
            document.querySelector('.booking-offer-percentage').innerHTML = '60%';
            clientName.innerHTML = `${name} te vas de vacaciones a...`;
            hotel.innerHTML = `Hotel Madroño &#9733;&#9733;&#9733;&#9733;`;
            noches.innerHTML = `${night} noches, ${people} personas por sólo ${estadia}€`;
            ofertaFinal.innerHTML = `Precio final de ${precioFinal}€`;
            bookingCard.style.display = 'block';
            $("html, body").animate(
                {
                    scrollTop: $(bookingCard).offset().top - 50
                },
                800
            );
        }
        if (city == "Nueva York") {
            city = 1500;
            var nocheNy = 200;
            estadia = night * nocheNy;
            precioFinal = estadia + city;
            document.getElementById('book-img').classList.remove('booking-img-1');
            document.getElementById('book-img').classList.remove('booking-img-2');
            document.getElementById('book-img').classList.remove('booking-img-4');
            document.getElementById('book-img').classList.add('booking-img-3');
            document.querySelector('.booking-title-span').innerHTML = `nueva york usa`;
            document.querySelector('.booking-title-span').classList.remove('booking-title-span-4');
            document.querySelector('.booking-title-span').classList.remove('booking-title-span-1');
            document.querySelector('.booking-title-span').classList.remove('booking-title-span-2');
            document.querySelector('.booking-title-span').classList.add('booking-title-span-3');
            document.querySelector('.booking-card-side-back').classList.remove('booking-card-side-back-2');
            document.querySelector('.booking-card-side-back').classList.remove('booking-card-side-back-4');
            document.querySelector('.booking-card-side-back').classList.remove('booking-card-side-back-1');
            document.querySelector('.booking-card-side-back').classList.add('booking-card-side-back-3');
            document.querySelector('.booking-offer-percentage').innerHTML = '40%';
            clientName.innerHTML = `${name} te vas de vacaciones a...`;
            hotel.innerHTML = `Hotel YMCA &#9733;&#9733;&#9733;`;
            noches.innerHTML = `${night} noches, ${people} personas por sólo ${estadia}€`;
            ofertaFinal.innerHTML = `Precio final de ${precioFinal}€`;
            bookingCard.style.display = 'block';
            $("html, body").animate(
                {
                    scrollTop: $(bookingCard).offset().top - 50
                },
                800
            );
        }
        if (city == "Santiago de Chile") {
            city = 1200;
            var nocheStgo = 250;
            estadia = night * nocheStgo;
            precioFinal = estadia + city;
            document.getElementById('book-img').classList.remove('booking-img-1');
            document.getElementById('book-img').classList.remove('booking-img-2');
            document.getElementById('book-img').classList.remove('booking-img-3');
            document.getElementById('book-img').classList.add('booking-img-4');
            document.querySelector('.booking-title-span').innerHTML = `santiago chile`;
            document.querySelector('.booking-title-span').classList.remove('booking-title-span-1');
            document.querySelector('.booking-title-span').classList.remove('booking-title-span-3');
            document.querySelector('.booking-title-span').classList.remove('booking-title-span-2');
            document.querySelector('.booking-title-span').classList.add('booking-title-span-4');
            document.querySelector('.booking-card-side-back').classList.remove('booking-card-side-back-2');
            document.querySelector('.booking-card-side-back').classList.remove('booking-card-side-back-3');
            document.querySelector('.booking-card-side-back').classList.remove('booking-card-side-back-1');
            document.querySelector('.booking-card-side-back').classList.add('booking-card-side-back-4');
            document.querySelector('.booking-offer-percentage').innerHTML = '50%';
            clientName.innerHTML = `${name} te vas de vacaciones a...`;
            hotel.innerHTML = `Hotel Metrópolis &#9733;&#9733;&#9733;&#9733;`;
            noches.innerHTML = `${night} noches, ${people} personas por sólo ${estadia}€`;
            ofertaFinal.innerHTML = `Precio final de ${precioFinal}€`;
            bookingCard.style.display = 'block';
            $("html, body").animate(
                {
                    scrollTop: $(bookingCard).offset().top - 50
                },
                800
            );
        }
        bookingForm.style.display = "none";
        document.querySelector(".form").reset();

        //close booking card
        var closeBooking = document.querySelector('.btn-white-close');
        closeBooking.addEventListener('click', () => {
            bookingCard.style.display = 'none';
        });

    }

}


form.name.addEventListener('keyup', e => {
    var namePattern = /^[a-z]{3,10}$/i;
    if (namePattern.test(e.target.value)) {
        form.name.classList.add('success');
        form.name.classList.remove('failed');
        document.querySelector('#nameErr').classList.remove('show');

        error('nameErr', '');
    } else {
        form.name.classList.add('failed');
        document.querySelector('#nameErr').classList.add('show');
        error('nameErr', 'Name must contain only letters & not exceed 10 characters ');
    }
});
form.people.addEventListener('keyup', e => {
    var peoplePattern = /^[1-9]$/;
    if (peoplePattern.test(e.target.value)) {
        form.people.classList.add('success');
        form.people.classList.remove('failed');
        document.querySelector('#peopleErr').classList.remove('show');

        error('peopleErr', '');
    } else {
        form.people.classList.add('failed');
        document.querySelector('#peopleErr').classList.add('show');
        error('peopleErr', 'Must be numbers only ');
    }
});
form.night.addEventListener('keyup', e => {
    var nightPattern = /^[1-9]$/;
    if (nightPattern.test(e.target.value)) {
        form.night.classList.add('success');
        form.night.classList.remove('failed');
        document.querySelector('#nightErr').classList.remove('show');

        error('nightErr', '');
    }
    else {
        form.night.classList.add('failed');
        document.querySelector('#nightErr').classList.add('show');
        error('nightErr', 'Must be numbers only');
    }


});

form.pais.addEventListener('change', e => {
    let city = form.pais.value;
    if (city !== "Select") {
        form.pais.classList.add('success');
        form.pais.classList.remove('failed');
        document.querySelector('#cityErr').classList.remove('show');

        error('cityErr', '');
    }
    else {
        form.pais.classList.add('failed');
        document.querySelector('#cityErr').classList.add('show');
        error('cityErr', 'Please select a destination');
    }


});

//gallery
$('.button').click(function () {
    var value = $(this).attr('data-filter');
    if (value == 'all') {
        $('.filter').show(1000);
    } else {
        $('.filter').not('.' + value).hide(1000);
        $('.filter').filter('.' + value).show(1000);
    }
    //active
    $('ul .button').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
    });
});





//go top
var goTop = $("#goTop");

$(function () {
    $(document).scroll(function () {
        if ($(this).scrollTop() > 200) {
            goTop.css('display', 'block');

        } else {
            goTop.css('display', 'none');
        }
    });
    goTop.click(function () {
        $('html').animate({ scrollTop: 0 }, 1000);
    });
});

//contact-form

const contactForm = document.querySelector(".contact-form");
function error(elemId, message) {
    document.getElementById(elemId).innerHTML = message;
}

function validateForm() {

    let nombre = contactForm.nombre.value;


    let email = contactForm.mail.value;


    let nameError, emailError;
    nameError = emailError = true;

    if (nombre == "") {
        contactForm.nombre.classList.add('failed');
        document.querySelector('#nameError').classList.add('show');
        error('nameError', 'Please enter your name ');
    } else {
        var nombrePattern = /^[a-z]{3,10}$/i;
        if (nombrePattern.test(nombre) === false) {
            contactForm.nombre.classList.add('failed');
            document.querySelector('#nameError').classList.add('show');
            error('nameError', 'Please enter a valid name ');
        } else {
            nameError = false;

        }


    }

    if (email == "") {
        contactForm.mail.classList.add('failed');
        document.querySelector('#emailError').classList.add('show');
        error('emailError', 'Please enter your email address');
    } else {
        var emailPattern = /^([a-z\d\.-\w]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/ig;
        if (emailPattern.test(email) === false) {
            contactForm.mail.classList.add('failed');
            document.querySelector('#emailError').classList.add('show');
            error('emailError', 'Please enter a valid email address');
        } else {
            emailError = false;

        }

    }

    if (nameError || emailError == true) {
        return false;
    } else {

        return true;
    }

}
contactForm.nombre.addEventListener('keyup', e => {
    var nombrePattern = /^[a-z]{3,10}$/i;
    if (nombrePattern.test(e.target.value)) {
        contactForm.nombre.classList.add('success');
        contactForm.nombre.classList.remove('failed');
        document.querySelector('#nameError').classList.remove('show');
        error('nameError', '');
    } else {
        contactForm.nombre.classList.add('failed');
        document.querySelector('#nameError').classList.add('show');
        error('nameError', 'Name must contain only letters & not exceed 10 characters ');
    }
});
contactForm.mail.addEventListener('keyup', e => {
    var emailPattern = /^([a-z\d\.-\w]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/ig;
    if (emailPattern.test(e.target.value)) {
        contactForm.mail.classList.add('success');
        contactForm.mail.classList.remove('failed');
        document.querySelector('#emailError').classList.remove('show');

        error('emailError', '');
    }
    else {
        contactForm.mail.classList.add('failed');
        document.querySelector('#emailError').classList.add('show');
        error('emailError', 'Email must be a valid address, e.g. me@mydomain.com');
    }


});