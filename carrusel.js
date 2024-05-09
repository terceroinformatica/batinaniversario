var swiper = new Swiper(".mySwiper",{
    spaceBetween: 10,
    grabCursor: true,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    loop: true,
    breakpoints:{
        768: {
            slidesPerView: 1,  
        },
        991: {
            slidesPerView: 3,  
        },
    },
});


