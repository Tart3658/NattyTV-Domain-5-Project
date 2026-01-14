console.log("js console");
let data;
let grid = document.querySelector(".grid-container");
var XHR = new XMLHttpRequest();

XHR.onreadystatechange = function() {
    if(this.readyState == 4 && this.status == 200) {
        data = JSON.parse(XHR.responseText);
        console.log(data);
        data.forEach(function(movie){
            let card = document.createElement("div");
            card.classList.add("card");

            let textData = "<div class='movie-title'>" + movie.Movie + "</div>" +
            "<span class='movie-information'>" + 
            "Year: " + movie.Year + "<br>" + 
            "Length: " + movie.Length + "<br>" + 
            "Language: " + movie.Language + "<br>" + 
            "Genre: " + movie.Genre + "<br>" + 
            "Cast: " + movie.Cast + "<br>" + 
            "Rating: " + movie.Rating + "<br>" + 
            "Description: " + movie.Description + "<br>" + 
            "</span>";
            card.innerHTML = textData;

            grid.appendChild(card); 
        })
    }
};

XHR.open("GET", "file.JSON", true);
XHR.send();