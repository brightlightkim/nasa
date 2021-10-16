document.getElementById("dateSubmit").addEventListener("click", function (event) {
    event.preventDefault();
    const value = document.getElementById("dateInput").value;
    if (value === "")
        return;
    else {
        const url = "https://api.nasa.gov/planetary/apod?api_key=y5pneC0smGlo2LueKD3szEc4gM6Qh0sgOlh96wFx&date=" + value + "&concept_tags=True";
        fetch(url)
            .then(function (response) {
                return response.json();
            }).then(function (json) {
                let firstImage = '<img src="' + json.url + '"/>';
                document.getElementById("main_picture").innerHTML = firstImage;
                
                let explanation = "";
                explanation += '<h4>' + json.title + '</h4><br>';
                explanation += '<p>' + json.explanation + '</p><br><br>';
                explanation += '<h4>Other Random NASA Pictures:</hr>';
                document.getElementById("main_picture_explanation").innerHTML = explanation;
            });

    }
});

document.getElementById("dateSubmit").addEventListener("click", function (event) {
    event.preventDefault();
    const value = document.getElementById("dateInput").value;
    if (value === "")
        return;
    else {
        const url = "https://api.nasa.gov/planetary/apod?api_key=y5pneC0smGlo2LueKD3szEc4gM6Qh0sgOlh96wFx&count=7"
        fetch(url)
            .then(function (response) {
                return response.json();
            }).then(function (json) {
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

