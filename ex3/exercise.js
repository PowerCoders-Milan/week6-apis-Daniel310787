// # EX 3 Find movies

// Let’s search for some movies!
// Documentation of the API —> https://www.omdbapi.com/

// Example call to the API searching for HARRY Potter movies: http://www.omdbapi.com/?s=harry potter&apikey=adf1f2d7

// What is the result of the call? 
// - Console log it to understand what datatype it is and what informations there are / what you might need.

// Get your own API key https://www.omdbapi.com/apikey.aspx

// TODO:
// - For each movie create a div in the HTML and display title, year and poster.



function Movies() {
    var newMovie = document.querySelector("input").value;
    document.querySelectorAll("div").forEach(element => {
        element.remove()
    })
    fetch(`http://www.omdbapi.com/?s=${newMovie}&apikey=3f84f47e`)
    .then(response => response.json())
    .then(data =>{
        data.Search.forEach(element => {
            var main = document.createElement("div")
            var title = document.createElement("p")
            title.innerHTML = element.Title
            var year = document.createElement("small")
            year.innerHTML = element.Year
            var img = document.createElement("img")
            img.setAttribute("src", element.Poster)
            img.style.width = "100px"
            main.appendChild(title)
            main.appendChild(year)
            main.appendChild(img)
            document.querySelector("body").appendChild(main)       
        });
    })
}

document.querySelector("input").addEventListener("keyup", Movies)


