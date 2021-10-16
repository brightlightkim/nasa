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
                let firstImage = json.list[0].title;
                firstImage += '<img src=' + json.list[0].hdrul;
                document.getElementById("main_picture").innerHTML = title;
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

