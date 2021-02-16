const express= require('express');
const axios=require('axios')
const morgan=require('morgan')
const fetch=require("node-fetch");
const body_parser = require('body-parser');
//usando express
const app=express();//constructor de express


//midleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());//pueda leer json obects
app.use(morgan('dev'));

app.use(body_parser.urlencoded({extended:true}));
app.use(body_parser.json())
//rutas
//req porque no es un get
app.get('/',(req,res)=>{
	res.send("<h1>Hello dude</h1>");


})
app.get('/test',(req,res)=>{
	//res.send("Hello test");
	res.json({
		prop1: "hello",
prop2: "world"
//json viewer extension

})
})

//postroutes
app.post('/post',(req,res)=>{
console.log(req.body.prop1);
aux=req.body.prop1
//answer to cliente
res.send(`Recibido: ${aux},${req.body.prop2}`);
//estas comillas concatenan
})
//testing de api Axios
//pueda consumir apis de internet
app.get('/rick',(req,res)=>{
const END_POINT='https://rickandmortyapi.com/api/character';

axios.get(END_POINT)//traerme una respuesta
	.then(function(response){
		console.log(response.data)
		res.send(response.data)

})
.catch(function(error){
console.log(error);
res.send(error);
});
})
//fin axios


//testing de api Axios
//pueda consumir apis de internet
//usando parametros
app.get('/rick/:id',(req,res)=>{
const END_POINT=`https://rickandmortyapi.com/api/character/${req.params.id}`;

axios.get(END_POINT)//traerme una respuesta
	.then(function(response){
		console.log(response.data)
//array=response.data
		res.send(response.data)

})
.catch(function(error){
console.log(error);
res.send(error);
});
})
//fin axios

//insertadotest


app.get('/randomrestroom',(req,res)=>{
const END_POINT='https://www.refugerestrooms.org/api/v1/restrooms.json';

axios.get(END_POINT)//traerme una respuesta
	.then(function(response){
		console.log(response.data)
		res.send(response.data)

})
.catch(function(error){
console.log(error);
res.send(error);
});
})



//fin axios



app.get('/clima/:ciudad',(req,res)=>{
const END_POINT=`http://api.openweathermap.org/data/2.5/weather?q=${req.params.ciudad}&units=metric&appid=f6902099c5861eb71633b6ef9828c452&lang=es`;

axios.get(END_POINT)//traerme una respuesta
	.then(function(response){
		console.log(response.data)
//array=response.data
		res.send(response.data)

})
.catch(function(error){
console.log(error);
res.send("error");
});
})
//fin axios


app.get('/entretenimiento/musica/:banda',(req,res)=>{
const END_POINT=`https://musicbrainz.org/ws/2/artist/?query=${req.params.banda}`;
//poner %20 por cada espacio
axios.get(END_POINT)//traerme una respuesta
	.then(function(response){
		console.log(response.data)
//array=response.data
		res.send(response.data)

})
.catch(function(error){
console.log(error);
res.send("error");
});
})
//fin axios


app.get('/entretenimiento/studioghiblipeliculas',(req,res)=>{
const END_POINT=`https://ghibliapi.herokuapp.com/films`;

axios.get(END_POINT)//traerme una respuesta
	.then(function(response){
		console.log(response.data)
//array=response.data
		res.send(response.data)

})
.catch(function(error){
console.log(error);
res.send("error");
});
})
//fin axios
app.get('/entretenimiento/studioghiblipeliculas/Mi_vecino_Totoro',(req,res)=>{
const END_POINT=`https://ghibliapi.herokuapp.com/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49`;

axios.get(END_POINT)//traerme una respuesta
	.then(function(response){
		console.log(response.data)
//array=response.data
		res.send(response.data)

})
.catch(function(error){
console.log(error);
res.send("error");
});
})
//fin axios
app.get('/entretenimiento/studioghiblipeliculas/Castillo_Ambulante',(req,res)=>{
const END_POINT=`https://ghibliapi.herokuapp.com/films/2baf70d1-42bb-4437-b551-e5fed5a87abe`;

axios.get(END_POINT)//traerme una respuesta
	.then(function(response){
		console.log(response.data)
//array=response.data
		res.send(response.data)

})
.catch(function(error){
console.log(error);
res.send("error");
});
})
//fin axios
app.get('/entretenimiento/studioghiblipeliculas/La_Tumba_De_las_Luciernagas',(req,res)=>{
const END_POINT=`https://ghibliapi.herokuapp.com/films/12cfb892-aac0-4c5b-94af-521852e46d6a`;

axios.get(END_POINT)//traerme una respuesta
	.then(function(response){
		console.log(response.data)
//array=response.data
		res.send(response.data)

})
.catch(function(error){
console.log(error);
res.send("error");
});
})
//fin axios

app.get('/entretenimiento/triviaxanio/:anio',(req,res)=>{
const END_POINT=`http://numbersapi.com/${req.params.anio}/year`;

axios.get(END_POINT)//traerme una respuesta
	.then(function(response){
		console.log(response.data)
//array=response.data
		res.send(response.data)

})
.catch(function(error){
console.log(error);
res.send("error");
});
})

app.post('/crearObjeto1',(req,res)=>{
console.log(req.body);
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: `${req.body.title}`,
    body: `${req.body.body}`,
    userId: `${req.body.userId}`,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
console.log(req.body);
console.log(req.params);
res.send('Objeto enviado');
})

app.post('/appfeelings',(req,res)=>{
fetch('https://sentim-api.herokuapp.com/api/v1/', {
  method: 'POST',
  body: JSON.stringify({ "text": "That's not good at all" }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((res) => res.json())
  .then((json) => console.log(json));
console.log(req.body);
console.log(req.params);
res.send('Objeeto enviado');
})

app.post('/animeporimagen',(req,res)=>{
fetch("https://trace.moe/api/search", {
  method: "POST",
  body: JSON.stringify({"url": "https://i.blogs.es/10b691/tumba-de-las-luciernagas-poster/1366_2000.jpg"  }),
  headers: { "Content-Type": "application/json" },
})
  .then((res) => res.json())
  .then((result) =>console.log(result));
res.send('Objeeto enviado');
})

app.post('/animeporimagen1/',(req,res)=>{
const END_POINT=`https://trace.moe/api/search?url=https://i.blogs.es/10b691/tumba-de-las-luciernagas-poster/1366_2000.jpg`;
axios.post(END_POINT)//traerme una respuesta
	.then(function(response){
		console.log(response.data)
//array=response.data
		res.send('Recibido')

})
.catch(function(error){
console.log(error);
res.send("error");
});
})
//fin axios

//base 64 imatch converter api


//https://sentim-api.herokuapp.com/

//insertado test

app.listen(3000,()=>{
console.log("server running on port 3000");
})

//localhost:3000