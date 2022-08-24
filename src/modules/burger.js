export const burger = () => {


    const moveMenu = () => {
        document.querySelector('.menu-header').classList.toggle('menu-header-active')
        document.querySelector('.menu-header__button').classList.toggle('menu-header__button-active')
    }



    document.body.addEventListener('click', (e) => {



        if (document.querySelector('.menu-header-active')) {
            if ((e.target.matches('.menu-header>a') || e.target.classList.contains('menu-header__button')) || !e.target.closest('.menu-header')) {
                e.preventDefault()
                moveMenu()
            }

        } else {
            if (e.target.closest('.menu-header__button')) {
                e.preventDefault()
                moveMenu()
            }
        }






    })
}