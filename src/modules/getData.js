//import { render } from './render';

export const getData = (url, callback) => {

    fetch(url)
        .then(response => response.json())
        .then(data => {

            callback(data.events);

        })
        .catch(err => console.log(err))
}

