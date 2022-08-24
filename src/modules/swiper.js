import Swiper, { Autoplay, Navigation } from 'swiper';


export const swiper = () => {



    const swiper = new Swiper('.slider-cover__body', {
        slidesPerView: 1.3,
        spaceBetween: 25,
        loop: true,
        modules: [Autoplay, Navigation],
        autoplay: {
            delay: 5000,
            disableOnInteraction: true,
            stopOnLastSlide: false,
        },

        navigation: {
            nextEl: '.slider-cover__next',
            prevEl: '.slider-cover__prev',
        },
        breakpoints: {

            767.98: {
                slidesPerView: 3,
            },
        }

    }
    );


    const swiperGallery = new Swiper('.slider-gallery__body', {
        slidesPerView: 2.3,
        spaceBetween: 8,
        loop: true,
        modules: [Autoplay, Navigation],
        autoplay: {
            delay: 5000,
            disableOnInteraction: true,
            stopOnLastSlide: false,
        },

        navigation: {
            nextEl: '.slider-gallery__next',
            prevEl: '.slider-gallery__prev',
        },
        breakpoints: {




            1023: {
                spaceBetween: 30,
                slidesPerView: 5,
            },

            767.98: {
                spaceBetween: 30,
                slidesPerView: 4,
            },
        }

    }
    );


}