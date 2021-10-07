console.log(' Weather app using HTML, CSS & JS');

// apiKey = 'b65fbbe508b4c92bd71a0c3aa7ba1633';
// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

const weatherApp = {
    key: 'b65fbbe508b4c92bd71a0c3aa7ba1633',
    baseUrl: "http://api.openweathermap.org/data/2.5/weather"
}

// event listener on keypress
const searchBox = document.getElementById('input-box');
searchBox.addEventListener('keypress', (event) => {
    if (event.keyCode == 13) {
        console.log(searchBox.value);
        getWeather(searchBox.value);
        // to display detail
        document.querySelector('.weather-box').style.display = "block";
    }

});

// get weather report
function getWeather(city) {
    fetch(`${weatherApp.baseUrl}?q=${city}&appid=${weatherApp.key}&units=metric`)
    .then(weather => {
        return weather.json();
    }).then(showWeather);
}

// show weather report
function showWeather(weather) {
    console.log('show weather report', weather);

    let city = document.getElementById('city');
    city.innerHTML = `${weather.name},${weather.sys.country}`

    let temperature = document.getElementById('temp');
    temperature.innerHTML = `${Math.round(weather.main.temp)}&deg;c`

    let minMaxTemp = document.getElementById('min-max');
    minMaxTemp.innerHTML = `${Math.floor(weather.main.temp_min)}&deg;c(min)/${Math.ceil(weather.main.temp_min)}&deg;c(max)`;

    let weatherType = document.getElementById('weather');
    weatherType.innerHTML = `${weather.weather[0].main}`;

    let date = document.getElementById('date');
    let todayDate = new Date()
    date.innerText = dateManage(todayDate);

    // to show different background
    if (weatherType.textContent == 'clear') {
        document.body.style.background = "url(bgdark.jpg)";
    } else if
        (weatherType.textContent == 'clear') {
            document.body.style.background = "url(bglight.jpg)";
    }




}

// date function to update date 
function dateManage(dateArg) {
    let days = [ "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    let months = [ "January"," February", "March", "April"," May", "June", "July", "August", "September", "October", "November", "December"];

    let year = dateArg.getFullYear();
    let month = months[dateArg.getMonth()];
    let date = dateArg.getDate();
    let day = days[dateArg.getDay()];

    return `${date} ${month} ${day}, ${year}`;
}
