export const faq = () => {

    const faqBlock = document.querySelector('.faq')

    const changeActiveQuestion = (element, className) => {

        let classSelector = '.' + className

        if (element.classList.contains(className)) {
            element.classList.remove(className)
        } else {
            if (faqBlock.querySelector(classSelector)) {
                faqBlock.querySelector(classSelector).classList.remove(className)
            }
            element.classList.add(className)
        }
    }

    if (faqBlock) {
        faqBlock.addEventListener('click', (e) => {

            if (e.target.closest('.item-faq__title')) {
                console.log(1);

                changeActiveQuestion(e.target.closest('.item-faq'), 'item-faq-active')
            }

        })
    }



}