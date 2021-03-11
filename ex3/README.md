# EX 3 Find movies

Let’s search for some movies!
Documentation of the API —> https://www.omdbapi.com/

Example call to the API searching for HARRY Potter movies: http://www.omdbapi.com/?s=harry potter&apikey=adf1f2d7

What is the result of the call? 
- Console log it to understand what datatype it is and what informations there are / what you might need.

Get your own API key https://www.omdbapi.com/apikey.aspx

TODO:
- For each movie create a div in the HTML and display title, year and poster.

# EXTRA

Now implement a search box, connect an event listener to it than on "keyup" event will:
- change the title in the api by inserting the value of the searchbox 
- then call the API and refresh the images and titles.
