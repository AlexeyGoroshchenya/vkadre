import { isMobile } from './helpers'

export const services = () => {


    const servicesBlock = document.querySelector('.services')

    let activeServiceId = 0

    const getActiveServiceId = () => {

        if (servicesBlock.querySelector('.description-services__item-active')) {
            activeServiceId = servicesBlock.querySelector('.description-services__item-active').getAttribute('serv-id');
        } else {
            activeServiceId = 0
        }
    }


    const changeActiveService = (element, className) => {

        let classSelector = '.' + className

        if (element.classList.contains(className)) {
            element.classList.remove(className)
        } else {
            if (servicesBlock.querySelector(classSelector)) {
                servicesBlock.querySelector(classSelector).classList.remove(className)
            }
            element.classList.add(className)
        }
    }

    const rotateScreenToAlbum = () => {


        if (servicesBlock.querySelectorAll('.description-services__item').length == activeServiceId) {
            hideButton()
        }

        servicesBlock.querySelectorAll('.description-services__item').forEach((element) => {

            if (!servicesBlock.querySelector('.description-services__more-hidden')) {
                if (+element.getAttribute('serv-id') > activeServiceId && +element.getAttribute('serv-id') > 6) {
                    element.style.display = 'none'
                }
            }
        });
    }

    const rotateScreenToLandscape = (arr) => {

        arr.forEach(element => {
            element.style.display = ''
        });
    }

    const showMore = () => {

        servicesBlock.querySelectorAll('.description-services__item').forEach(element => {

            if (element.style.display === 'none') {
                element.style.display = 'block'
            }
        });
    }

    const hideButton = () => {
        servicesBlock.querySelector('.description-services__more').classList.add('description-services__more-hidden')
    }

    const init = () => {

        if (servicesBlock) {
            getActiveServiceId()
            if (document.body.clientWidth < 1024) {
                rotateScreenToAlbum()
            }

            servicesBlock.addEventListener('click', (e) => {

                if (isMobile.any() || document.body.clientWidth < 1024) {
                    if (e.target.closest('.description-services__title')) {
                        changeActiveService(e.target.closest('.description-services__item'), 'description-services__item-active')

                        getActiveServiceId()

                        if (activeServiceId === 0) {
                            activeServiceId = 1
                        }

                        let target = servicesBlock.querySelector(`li[serv-id='${activeServiceId}']`)
                        changeActiveService(target, 'list-services__link-active')

                    }
                }

                if (e.target.classList.contains('list-services__link')) {

                    activeServiceId = e.target.getAttribute('serv-id') + ""
                    let target = servicesBlock.querySelector(`div[serv-id='${activeServiceId}']`)
                    if (target) {
                        changeActiveService(target, 'description-services__item-active')
                        changeActiveService(e.target, 'list-services__link-active')
                    }
                }

                if (e.target.classList.contains('description-services__more-hidden')) {
                    rotateScreenToAlbum()

                } else if (e.target.classList.contains('description-services__more')) {

                    showMore()

                    hideButton()
                }
            })


            window.addEventListener("orientationchange", function () {

                if (document.body.clientWidth < 1024) {
                    if (!servicesBlock.querySelector('.description-services__item-active')) {
                        servicesBlock.querySelector('.description-services__item').classList.add('description-services__item-active')
                    }

                    rotateScreenToLandscape(servicesBlock.querySelectorAll('.description-services__item'))
                }

                if (document.body.clientWidth >= 1024) {

                    rotateScreenToAlbum()
                }
            }, false);

        }





    }

    const renderServices = (arr) => {


    }





    init()

}