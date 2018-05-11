
'use strict';

const Hapi=require('hapi');

const https = require('https');

//install vision step #11 may need to install a module called inert
const vision = require('handlebars');

//Create a server with a host and port
const server=Hapi.server({
    host: 'localhost',
    port:8000
});

//step #13 declare the URL
const url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=749cb300bd154c4db7a15f78cbc8e0b8";

//Add the index.html route
server.route({
    method:'GET',
    path:'/',
    handler:function (request,h) {

        return'<h1> You have reached the homepage</h1>';
    }
});

//Add the content.html route
http.get(url, res => {
    res.setEncoding("utf8");
    let body = "";
    res.on ("data", data => {
    });
var data = res.on("end", () => {
    body = JSON.parse(body); 
    //body.forEach(x =>console.log(x.job_category));

    server.route({

        method:'GET',
        path:'/content.html',
        handler: function(req,h) {
            return h.view('content', {dataOutput : body} );
        }
    
    });
});


//Start the server and defining the start method
async function start() {
    await server.register(vision);
    //Defining the templating engine for handlebars
    server.views({
    engines: {
        html: require('handlebars')

    },
    relativeTo: __dirname
    });
    try {
        await server.start();
    }
    catch (err) {
        console.log(err);
        process.exit(1);
    }
    console.log('Server running at:', server.info.uri);

};

//calls the start method
start();

    //var req = new Request('https://newsapi.org/v2/top-headlines.json');
    //fetch(req)
        //.then(function(response) {
            //console.log(response.json());
        //})