var urlParams = new URLSearchParams(window.location.search); 

var myParam = urlParams.get('id');
var loc = "los Angeles"//urlParams.get('location')
var title = urlParams.get('title')

window.addEventListener("load", () => {
    // document.querySelectorAll("div").forEach(element => {
    // element.remove()
    // })
    var url = "https://jooble.org/api/";
    var key = "281e5e02-f47b-41cb-a0e7-7ea5a33f21e1";
    var params = `{ keywords: "${title}", location: "${loc}"}`
    var http = new XMLHttpRequest();
    http.open("POST", url + key, true);
    http.setRequestHeader("Content-type", "application/json");
    http.onreadystatechange = function() {
        if(http.readyState == 4 && http.status == 200) {
            var result = JSON.parse(http.responseText)
            console.log(myParam)
            console.log(loc)
            console.log(title)  
            console.log(result) 
            const found = result.jobs.find(element => element = myParam); 
            console.log(found)
            var title = document.createElement("h1")
            title.innerHTML = found.title
            document.getElementById("card").appendChild(title)
            var company = document.createElement("h1")
            company.innerHTML = found.company
            document.getElementById("card").appendChild(company)
            var description = document.createElement("p")
            description.innerHTML = found.snippet
            document.getElementById("card").appendChild(description)
            var location = document.createElement("p")
            location.innerHTML = found.location
            document.getElementById("card").appendChild(location)
            var button = document.createElement("a")
            button.setAttribute("href", found.link)
            button.innerHTML = "Apply Now"
            document.getElementById("card").appendChild(button)


        }  
    }
    http.send(params)      
})
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function mapLoc() {

    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=a649f48c0d27ec05c0d86837b49029b1&units=metric`)
    .then(response => response.json())  
    .then(data =>{
    console.log(data)
    
      })
    
  }
  window.addEventListener("load", mapLoc)
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  mapboxgl.accessToken = 'pk.eyJ1IjoiZGFuaWVsMzEwNzg3IiwiYSI6ImNrbTRzZXR2ZzA3bHgycG93YzI1dmFyb3kifQ.av0j5J9UNRTWdRs9zXR8cg';
  var map = new mapboxgl.Map({
      container: "map", 
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-74.5, 40],
      zoom: 9 
  });

var marker = new mapboxgl.Marker()
.setLngLat([-74.5, 40])
.addTo(map);