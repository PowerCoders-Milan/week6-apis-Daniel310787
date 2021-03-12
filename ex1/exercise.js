// # EX 1 Google maps

// Let’s implement the google map api in our code like in the slides! 

// - Go to the slides and copy the code

// - Create the div in the HTML (like in the slides), give it height (otherwise we will not be able to see it) and width, connect your code and test it.

// - Add the marker like shown in the slides.


// var map;
// function initMap() {
//   map = new google.maps.Map(document.getElementById('map'), {
//     center: {lat: 13.8029939, lng: -88.9053364},
//     zoom: 8
//   });
//   new google.maps.Marker({
//     position: {lat: 13.8029939, lng: -88.9053364},
//     map: map
//   });
// }

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


