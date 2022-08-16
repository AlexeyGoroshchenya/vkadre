import Swiper, { Autoplay, Navigation } from 'swiper';


export const swiper = () => {



    const swiper = new Swiper('.swiper', {
        slidesPerView: 1,
        spaceBetween: 15,
        loop: true,
        modules: [Autoplay, Navigation],
        autoplay: {
            delay: 50000,
            disableOnInteraction: true,
            stopOnLastSlide: false,
        },

        navigation: {
            nextEl: '.popular__right',
            prevEl: '.popular__left',
        },
        breakpoints: {
            991.98: {
                slidesPerView: 3,
            },
            767.98: {
                slidesPerView: 2,
            },
        }

    }
    );

    const quoteSwiper = new Swiper('.quotes__swiper', {
        slidesPerView: 1,
        spaceBetween: 100,
        loop: true,

        modules: [Autoplay, Navigation],
        autoplay: {
            delay: 10000,
            disableOnInteraction: true,
            stopOnLastSlide: false,
        },

        navigation: {
            nextEl: '.quotes__button',
        },
    }
    );


}