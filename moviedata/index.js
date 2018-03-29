const http = require('http');
const fs = require('fs');
const data = require('./top_2018_movies.json');
const PORT = 3000;

//Create a function that lists all the movies

function getAllMovies(response){
  
    var i = 0;

     for(var x = 0; x < data.length; x++){

         if(data[x].movie){
             response.write("<br>" + data[x].movie + "<br>");
    }
}
// how to put the err if else in? err?



//Create a function that lists the movies that grossed above 20 million and genre is action

function getGenreAction(response){
   
    var i = 0;

    for(var x = 0; x < data.length; x++){

        if(data[x].gross >= 20000000 && data[x].genre === "Action"){

            response.write("<br>" + data[x].movie + "<br>");
            
        }

    }
   

 }

//Create a function that lists the movies that are rated "PG-13" and number of tickets sold is between 1 and 5 million

function getGenrePG_13(response){
   
    var i = 0;
    //var distros = data[2];
    //distros.sort(function(a, b){



    for (var x = 0;  x < data.length; x++){

        if (data[x].tickets_sold >= 20000000 && data[x].tickets_sold >=1000000 && data[x].mppa === "PG-13"){

            response.write("<br>" + data[x].movie + data[x].tickets_sold + data[x].mppa + "<br>");
        }
    }




//Create a function that sorts the movies based on "distributor"

function getDistroSort(response){

    var i = 0;
   

    for (var x = 0; x < data.length; x++){
        
        if (data[x].distributor)
    
//sort?


    }
}

//create server method
let server = http.createServer(function(request, response){
    if ((request.url === "/" ) && (request.method === "GET")) {
        response.statusCode = 500;
        response.write("<h1>This is the index page</h1>");
        response.end();
    }else
    if(request.url === "/action" && request.method === "GET") {
        response.statusCode = 200;
        response.setHeader('Content-Type', 'text/html');
        response.write("<h2> These are all the movies </h2>");
        getGenreAction(response)
        //getAllMovies(response) "/all_movies"
        //getGenrePG_13(response) "/pg"
        //getDistroSort(response) "/disributor"
        //do these calls all need their own if(request ?
        response.end();

    }else{
        console.log("invalid route");
        response.end("404 page, you requested a page that does not exist");
    }

});


//create call to listen *call using node index.js in the gitbash terminal
server.listen(PORT, ()=>{
    console.log("Sever is running on port 3000");
});