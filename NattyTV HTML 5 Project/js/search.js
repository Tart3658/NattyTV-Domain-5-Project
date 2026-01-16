console.log("js console");
let grid = document.querySelector(".grid-container");
var XHR = new XMLHttpRequest();

if (localStorage.getItem("movieData")) {
    var data = JSON.parse(localStorage.getItem("movieData"));
    makeCard();
} else {
    XHR.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            data = JSON.parse(XHR.responseText);
            console.log(data);



            localStorage.setItem('movieData', JSON.stringify(data));
            //data = JSON.parse(localStorage.getItem('movieData'));

            data.forEach(function (movie) {
                let card = document.createElement("div");
                card.classList.add("card");

                let textData = "<div class='movie-title'>" +
                    movie.Movie +
                    "</div>" +
                    "<span class='movie-information'>" +
                    "Year: " + movie.Year + "<br>" +
                    "Genre: " + movie.Genre + "<br>" +
                    "Rating: " + movie.Rating + "<br>" +
                    "</span>" + "<button class='AddToPlaylistButton'>" + "Add To Playlist" + "</button>"
                card.innerHTML = textData;
                if (movie.Image) {
                    card.style.backgroundImage = "url(" + movie.Image + ")";
                }
                grid.appendChild(card);

            })
        }
    };
}

const JSONData = [
    { id: 1, name: "Alice", active: true },
    { id: 2, name: "Bob", active: false },
    { id: 3, name: "Charlie", active: true }
];
XHR.open("GET", "file.JSON", true);
XHR.send();

function makeCard() {
    data.forEach(function (movie) {
        let card = document.createElement("div");
        card.classList.add("card");

        let textData = "<div class='movie-title'>" +
            movie.Movie +
            "</div>" +
            "<span class='movie-information'>" +
            "Year: " + movie.Year + "<br>" +
            "Genre: " + movie.Genre + "<br>" +
            "Rating: " + movie.Rating + "<br>" +
            "</span>" + "<button class='AddToPlaylistButton'>" + "Add To Playlist" + "</button>"
        card.innerHTML = textData;
        if (movie.Image) {
            card.style.backgroundImage = "url(" + movie.Image + ")";
        }
        grid.appendChild(card);

    })
}