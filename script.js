document.getElementById("dateSubmit").addEventListener("click", function (event) {
    event.preventDefault();
    const value = document.getElementById("dateInput").value;
    if (value === "")
        return;
    else {
        const url = "https://api.nasa.gov/planetary/apod?api_key=y5pneC0smGlo2LueKD3szEc4gM6Qh0sgOlh96wFx&count=1&date=" + value;
        fetch(url)
            .then(function (response) {
                return response.json();
            }).then(function (json) {
                let title = "<h3>Current Weather in " + json.name + "</h3>";
                document.getElementById("title1").innerHTML = title;
                
                let results = "";
                const celcius = function (fahrenheit) {
                    let number = 5 / 9 * (fahrenheit - 32);
                    return number.toFixed(2);
                };
                const celciusFromCalvin = function (kelvin) {
                    let number = kelvin - 273.15;
                    return number.toFixed(2);
                };

                results += '<h3>Weather in ' + json.name + "</h3>";
                for (let i = 0; i < json.weather.length; i++) {
                    results += '<img src="http://openweathermap.org/img/w/' + json.weather[i].icon + '.png"/>';
                }
                results += '<h2>' + celcius(json.main.temp) + " &deg;C</h2>"
                results += '<p> min temp: ' + celcius(json.main.temp_min) + '°C</p>';
                results += '<p> max temp: ' + celcius(json.main.temp_max) + '°C</p>';
                results += '<p> weather is: ' + json.weather[0].main + '</p>';

                results += "<p> There will be"
                for (let i = 0; i < json.weather.length; i++) {
                    results += json.weather[i].description
                    if (i !== json.weather.length - 1)
                        results += ", "
                }
                results += "</p>";
                document.getElementById("currentWeather").innerHTML = results;

            });

    }
});

/*
NASA Website API Key
y5pneC0smGlo2LueKD3szEc4gM6Qh0sgOlh96wFx
Example:
https://api.nasa.gov/planetary/apod?api_key=y5pneC0smGlo2LueKD3szEc4gM6Qh0sgOlh96wFx&count=1

https://api.nasa.gov/planetary/apod?api_key=y5pneC0smGlo2LueKD3szEc4gM6Qh0sgOlh96wFx
*/

