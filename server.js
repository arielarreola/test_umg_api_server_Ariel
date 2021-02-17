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
//testing de api Axios
//pueda consumir apis de internet
//usando parametros
//insertadotest


app.get('/diasfestivos/:anio/:codpais',(req,res)=>{
const END_POINT=`https://date.nager.at/api/v2/PublicHolidays/${req.params.anio}/${req.params.codpais}`;
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


//fin diasfestivos

app.get('/clima/:ciudad',(req,res)=>{
const END_POINT=`http://api.openweathermap.org/data/2.5/weather?q=${req.params.ciudad}&units=metric&appid=f6902099c5861eb71633b6ef9828c452&lang=es`;
axios.get(END_POINT)//traerme una respuesta
	.then(function(response){
		console.log(response.data)
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

app.post('/crearObjeto',(req,res)=>{
console.log(req.body);
axios.post('https://jsonplaceholder.typicode.com/posts', {
    data: {
      userId: `${req.body.userId}`,
      title: `${req.body.title}`,
      body: `${req.body.body}`
    }
  }) 
      .catch(function(error) {
      console.log(error);
res.send("error");
    })

res.send('Objeto enviado');
})//fin crear objeto

app.post('/appfeelings',(req,res)=>{
console.log(req.body);
axios.post('https://sentim-api.herokuapp.com/api/v1/', {
text:`${req.body.text}`
})
.then(function(json){
 console.log(json.data)
console.log(json.data.sentences)
res.send('Objeto enviado');
}).catch(function(error) {
      console.log(error);
res.send("error");
    })

})//fin app feelings

app.post('/animeporimagen',(req,res)=>{
fetch("https://trace.moe/api/search", {
  method: "POST",
  body: JSON.stringify({ image: "https://i.blogs.es/10b691/tumba-de-las-luciernagas-poster/1366_2000.jpg" }),
  headers: { "Content-Type": "application/json" },
}).then((res) => res.json())
  .then((result) => {
    console.log(result);
  });
})



app.post('/personarandom',(req,res)=>{
axios.get(`https://randomuser.me/api/?password=${req.body.password}&results=${req.body.results}&gender=${req.body.gender}&nat=${req.body.nat}`).then(function(json){
console.log(json.data.results)
console.log(req.body);
res.send(json.data.results);
}).catch(function(error) {
      console.log(error);
res.send("error");
    })

})//fin app personarandom

app.post('/acortarURL',(req,res)=>{
axios.post(`https://cleanuri.com/api/v1/shorten`,{
url:`${req.body.url}`
}).then(function(json){
console.log(json.data)
console.log(req.body);
res.send('Objeto enviado');
}).catch(function(error) {
      console.log(error);
res.send("error");
    })

})//fin acortar URL


app.post('/imagenes',(req,res)=>{
axios.post(`https://image-charts.com/chart`,{
cht:`${req.body.cht}`,
chs:`${req.body.chs}`,
chxt:`${req.body.chxt}`,
chd:`${req.body.chd}`
}).then(function(json){
console.log(json.data)
console.log(req.body);
res.send('Objeto enviado');
}).catch(function(error) {
      console.log(error);
res.send("error");
    })

})//fin acortar URL


//https://api.archivelab.org/v1/images
https://image-charts.com/chart

//base 64 imatch converter api

//insertado test

app.listen(3000,()=>{
console.log("server running on port 3000");
})

//localhost3000