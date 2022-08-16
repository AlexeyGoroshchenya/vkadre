export const burger = () => {

    const menu = document.querySelector('.menu-header__body')
    const userMenu = document.querySelector('.user-menu__menu')


    const moveMenu = () => {
        menu.classList.toggle('menu-header__body-active')
    }

    const moveUserMenu = () => {
        userMenu.classList.toggle('user-menu__menu-active')
    }

    document.body.addEventListener('click', (e) => {

        if (document.querySelector('.menu-header__body-active') && !e.target.matches('.menu-header__item>a')) {
            e.preventDefault()
            moveMenu()
        }

        if (e.target.closest('.header__menu__btn') || e.target.matches('.menu-header__item>a')) {
            e.preventDefault()
            moveMenu()
        }


        if (e.target.closest('.header__user ')) {
            e.preventDefault()
            moveUserMenu()
        }

        if (document.querySelector('.user-menu__menu-active') && !e.target.closest('.header__user ')) {
            e.preventDefault()
            moveUserMenu()
        }


    })
}