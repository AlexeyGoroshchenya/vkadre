//import { getData } from './getData';


export const calendar = (events) => {

    const monthCalendar = document.querySelector('.calendar-month')

    let renderedMonthIndex = new Date().getMonth()
    let renderedYear = new Date().getFullYear()

    let eventsMonth = []

    const monthArr = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

    const addZero = (number) => {
        return number < 10 ? `0${number}` : number;
    }

    const getEventsArr = (year, month) => {

        eventsMonth = []

        console.log(month);

        events.forEach((item) => {

            if (item.year === (year + '') && item.month === (addZero(month) + '')) {
                eventsMonth.push(item)

            }

        })

        console.log(eventsMonth);
    }


    const renderMonthTitle = () => {

        console.log(document.querySelector('.calendar-month .calendar__title span'));

        let monthToTitle = ''

        monthArr.forEach((month, index) => {
            if (index === renderedMonthIndex) {
                monthToTitle = month
            }
        })


        document.querySelector('.calendar-month .calendar__title span').textContent = `на ${monthToTitle} ${renderedYear}`
    }

    const renderMonth = (currentYear, currentMonth) => {

        let numberDays = new Date(currentYear, currentMonth + 1, 0).getDate(); //количество дней месяца переданного аргументом

        let firstDayNumber = new Date(currentYear, currentMonth, 1).getDay(); //день недели первого дня переданного аргументом



        if (firstDayNumber === 0) {
            firstDayNumber = 7;
        }

        document.querySelectorAll('.month-day').forEach((day) => {

            let gridNumber = day.getAttribute('grid-number');



            day.style.display = ''
            day.querySelector('.calendar-day__events').textContent = ''
            day.setAttribute('day', '')

            if (gridNumber < firstDayNumber || gridNumber > (numberDays + firstDayNumber - 1)) {

                day.querySelector('.calendar-day__number').textContent = ''

            } else {

                let dayIndex = gridNumber - firstDayNumber + 1;


                day.setAttribute('day', `${addZero(new Date(currentYear, currentMonth, dayIndex).getDate())}.${addZero(currentMonth + 1)}.${currentYear}`)

                day.querySelector('.calendar-day__number').textContent = `${addZero(new Date(currentYear, currentMonth, dayIndex).getDate())}`

                let count = 0

                eventsMonth.forEach((item) => {
                    if (item.date === `${addZero(new Date(currentYear, currentMonth, dayIndex).getDate())}.${addZero(currentMonth + 1)}.${currentYear}`) {
                        count++

                        day.querySelector('.calendar-day__events').textContent = `фотосессий: ${count} `
                        // day.querySelector('.calendar-day__events').style.color = 'rgba(0, 0, 0, 1)'
                    } else {
                        // day.querySelector('.calendar-day__events').textContent = `день свободен`
                    }
                })

            }

            if ((numberDays + firstDayNumber - 1) < 36) {

                if (day.getAttribute('grid-number') > 35) {
                    day.style.display = 'none'
                }
            }
        })
    }

    if (monthCalendar) {

        getEventsArr(renderedYear, renderedMonthIndex + 1)
        renderMonth(new Date().getFullYear(), renderedMonthIndex)
        renderMonthTitle()

        monthCalendar.addEventListener('click', (e) => {
            if (e.target.closest('.month-day')) {

                document.querySelector('.calendar-month__popup').classList.add('calendar-month__popup-active')
            }

            if (e.target.classList.contains('popup-calendar__close')) {

                document.querySelector('.calendar-month__popup').classList.remove('calendar-month__popup-active')
            }
            if (e.target.closest('.item-calendar__arrow-next')) {
                renderedMonthIndex++;

                if (renderedMonthIndex === 12) {
                    renderedMonthIndex = 0;
                    renderedYear++
                }
                // console.log(renderedMonthIndex + '.' + renderedYear);

                getEventsArr(renderedYear, renderedMonthIndex + 1)
                renderMonth(renderedYear, renderedMonthIndex)
                renderMonthTitle()
            }
            if (e.target.closest('.item-calendar__arrow-prev')) {
                renderedMonthIndex--;

                if (renderedMonthIndex < 0) {
                    renderedMonthIndex = 11;
                    renderedYear--
                }

                getEventsArr(renderedYear, renderedMonthIndex + 1)
                renderMonth(renderedYear, renderedMonthIndex)
                renderMonthTitle()
            }
        })
    }

}