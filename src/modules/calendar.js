


export const calendar = (events) => {

    const monthCalendar = document.querySelector('.calendar-month')

    let renderedMonthIndex = new Date().getMonth()
    let renderedYear = new Date().getFullYear()

    let eventsMonth = []

    const monthArr = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

    const cityArr = []

    const addZero = (number) => {
        return number < 10 ? `0${number}` : number;
    }

    const getEventsArr = (year, month) => {

        eventsMonth = []

        events.forEach((item) => {

            if (item.year === (year + '') && item.month === (addZero(month) + '')) {
                eventsMonth.push(item)

            }
        })
    }

    const getCityArr = () => {

        events.forEach((item) => {

            if (!cityArr.includes(item.locationCity)) {
                cityArr.push(item.locationCity)
            }
        })
    }

    const renderCalendarTitleBox = () => {

        let calendarPeriod = ''

        monthArr.forEach((month, index) => {
            if (index === renderedMonthIndex) {
                calendarPeriod = month
            }
        })

        if (window.screen.width >= 1024) {
            document.querySelector('.calendar-month .calendar__titlebox').innerHTML = `
            <div class="calendar__controls">
            <div class="calendar__title section-title title">Календарь <span>на ${calendarPeriod} ${renderedYear}</span>

            </div>
            <div class="item-calendar__arrows">
                <div class="item-calendar__arrow item-calendar__arrow-prev"> <img
                        src="dist/img/location/location-arrow.png" alt=""></div>
                <div class="item-calendar__arrow item-calendar__arrow-next"> <img
                        src="dist/img/location/location-arrow.png" alt=""></div>
            </div>
        </div>

        <div class="calendar__filter calendar__filter-city screen-filter">
            <div class="calendar__filter__item screen-filter__item filter-city screen-filter__item-active">Все
            </div>
            
        </div>
        <div class="calendar__filter screen-filter">
            <div class="calendar__filter__item screen-filter__item filter-period">3 дня
            </div>
            <div class="calendar__filter__item screen-filter__item filter-period">7 дней
            </div>
            <div class="calendar__filter__item screen-filter__item filter-period screen-filter__item-active">Месяц
            </div>
        </div>
            `


        } else {
            document.querySelector('.calendar-month .calendar__titlebox').innerHTML = `
            <div class="calendar__controls">
            <div class="calendar__title section-title title">Календарь</div>
            <div class="calendar__types">
                <div class="calendar__type calendar__rows"><img src="dist/img/calendar/1.png"
                        alt="rows"></div>
                <div class="calendar__type calendar__tab"><img src="dist/img/calendar/3.png" alt="tab">
                </div>


            </div>
        </div>
        <div class="calendar__filter">
            <select class="filter__list calendar__filter-city">
                <option disabled selected>Все города</option>

            </select>
        </div>
        <div class="calendar__period">
            <div class="period__name ">На ${calendarPeriod} ${renderedYear}

            </div>
            <div class="item-calendar__arrows">
                <div class="item-calendar__arrow item-calendar__arrow-prev"> <img
                        src="dist/img/location/location-arrow.png" alt=""></div>
                <div class="item-calendar__arrow item-calendar__arrow-next"> <img
                        src="dist/img/location/location-arrow.png" alt=""></div>
            </div>
        </div>


            `
        }


        cityArr.forEach((item) => {

            let city = ''

            if (window.screen.width >= 1024) {
                city = document.createElement('div');
                city.classList.add('calendar__filter__item', 'screen-filter__item', 'filter-city')
            } else {
                city = document.createElement('option');
            }

            city.textContent = item

            monthCalendar.querySelector('.calendar__filter-city').append(city)
        })

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
            day.querySelector('.month-day__events').textContent = ''
            day.setAttribute('day', '')

            if (gridNumber < firstDayNumber || gridNumber > (numberDays + firstDayNumber - 1)) {

                day.querySelector('.month-day__number').textContent = ''

            } else {

                let dayIndex = gridNumber - firstDayNumber + 1;


                day.setAttribute('day', `${addZero(new Date(currentYear, currentMonth, dayIndex).getDate())}.${addZero(currentMonth + 1)}.${currentYear}`)

                day.querySelector('.month-day__number').textContent = `${addZero(new Date(currentYear, currentMonth, dayIndex).getDate())}`

                let count = 0

                eventsMonth.forEach((item) => {
                    if (item.date === `${addZero(new Date(currentYear, currentMonth, dayIndex).getDate())}.${addZero(currentMonth + 1)}.${currentYear}`) {
                        count++
                        if (document.body.clientWidth < 1024) {
                            day.querySelector('.month-day__events').textContent = `${count} `
                        } else {
                            day.querySelector('.month-day__events').textContent = `фотосессий: ${count} `
                        }

                        // day.querySelector('.month-day__events').style.color = 'rgba(0, 0, 0, 1)'
                    } else {
                        // day.querySelector('.month-day__events').textContent = `день свободен`
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
        getCityArr()

        renderMonth(new Date().getFullYear(), renderedMonthIndex)

        renderCalendarTitleBox()


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
                renderCalendarTitleBox()
            }
            if (e.target.closest('.item-calendar__arrow-prev')) {
                renderedMonthIndex--;

                if (renderedMonthIndex < 0) {
                    renderedMonthIndex = 11;
                    renderedYear--
                }

                getEventsArr(renderedYear, renderedMonthIndex + 1)
                renderMonth(renderedYear, renderedMonthIndex)
                renderCalendarTitleBox()
            }

            if (e.target.closest('.filter-period')) {
                monthCalendar.querySelectorAll('.filter-period').forEach((item) => item.classList.remove('screen-filter__item-active'))
                e.target.classList.add('screen-filter__item-active')
            }

            if (e.target.closest('.filter-city')) {
                monthCalendar.querySelectorAll('.filter-city').forEach((item) => item.classList.remove('screen-filter__item-active'))
                e.target.classList.add('screen-filter__item-active')
            }

        })
    }

}