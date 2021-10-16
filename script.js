document.getElementById("dateSubmit").addEventListener("click", function (event) {
    event.preventDefault();
    const value = document.getElementById("dateInput").value;
    if (value === "")
        return;
    else {
        //const url = "https://api.nasa.gov/planetary/apod?api_key=y5pneC0smGlo2LueKD3szEc4gM6Qh0sgOlh96wFx&count=1&date=" + value;
        const url = "https://api.nasa.gov/planetary/apod?api_key=y5pneC0smGlo2LueKD3szEc4gM6Qh0sgOlh96wFx&count=7"
        fetch(url)
            .then(function (response) {
                return response.json();
            }).then(function (json) {
                let firstImage = "";
                firstImage += '<img src="' + json[0].hdurl + '"/>';
                firstImage += '<h4>' + json[0].title + '</h4>';
                firstImage += '<p>' + json[0].explanation + '</p>';
                document.getElementById("main_picture").innerHTML = firstImage;
                
                let images = "";
                for (let i = 1; i < json.length; i++){
                    images += '<img src="' + json[i].hdurl + '"/>';
                }
                document.getElementById("nasa_picture").innerHTML = images;
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

