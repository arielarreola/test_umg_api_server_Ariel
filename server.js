const express= require('express');
const axios=require('axios')
const morgan=require('morgan')
const fetch=require("node-fetch");
var path = require('path');// libreria auxiliar para insertar archivos en un path
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

app.get('/', (req,res)=> {
  res.sendFile(path.join(__dirname, 'views/welcome.html'));
});


var keyOWM = "f6902099c5861eb71633b6ef9828c452";//llave
 //usada en clima y en alertas meteorologicas
var keySPN="272e1846d98d438296854d06a97c977d"

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
})//fin diasfestivos
//obtiene datos acerca del clima en general de una ciudad especificada, aplicable para cualquier país.
app.get('/clima/:ciudad',(req,res)=>{
const END_POINT=`http://api.openweathermap.org/data/2.5/weather?q=${req.params.ciudad}&units=metric&appid=${keyOWM}&lang=es`;
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
app.get('/entretenimiento/musica/:banda',(req,res)=>{
const END_POINT=`https://musicbrainz.org/ws/2/artist/?query=${req.params.banda}`;
//poner %20 por cada espacio
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

app.get('/entretenimiento/studioghiblipeliculas',(req,res)=>{
const END_POINT=`https://ghibliapi.herokuapp.com/films`;

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
app.get('/entretenimiento/studioghiblipeliculas/Mi_vecino_Totoro',(req,res)=>{
const END_POINT=`https://ghibliapi.herokuapp.com/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49`;

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

app.get('/entretenimiento/studioghiblipeliculas/Castillo_Ambulante',(req,res)=>{
const END_POINT=`https://ghibliapi.herokuapp.com/films/2baf70d1-42bb-4437-b551-e5fed5a87abe`;

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

app.get('/entretenimiento/studioghiblipeliculas/La_Tumba_De_las_Luciernagas',(req,res)=>{
const END_POINT=`https://ghibliapi.herokuapp.com/films/12cfb892-aac0-4c5b-94af-521852e46d6a`;

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

app.get('/entretenimiento/edades/:nombre',(req,res)=>{
const END_POINT=`https://api.agify.io?name=${req.params.nombre}`;

axios.get(END_POINT)//traerme una respuesta
	.then(function(response){
		console.log(response)
		res.send(response.data)
})
.catch(function(error){
console.log(error);
res.send("error");
});
})

//fin de las solicitudes de metodos get

//metodos POST

//este metodo sirve como introduccion a los metodos post creando un objeto JSON
app.post('/crearObjeto',(req,res)=>{
console.log(req.body);
axios.post('https://jsonplaceholder.typicode.com/posts', {
      userId: `${req.body.userId}`,
      title: `${req.body.title}`,
      body: `${req.body.body}`
  }).then(function(resp){
console.log(resp.data);
res.send(resp.data); 
}).catch(function(error) {
      console.log(error);
res.send("error");
    })
})//fin crear objeto

//este metodo sirve para escribir un párrafo o texto cualquiera en inglés 
//y por cada frase se interpretará si es un sentimiento positivo o negativo
app.post('/appfeelings',(req,res)=>{
console.log(req.body);
axios.post('https://sentim-api.herokuapp.com/api/v1/', {
text:`${req.body.text}`
})
.then(function(json){
 console.log(json.data.result)
res.send(json.data);

console.log(json.data.sentences)

}).catch(function(error) {
      console.log(error);
res.send("error");
    })

})//fin app feelings


//genera un usuario con datos ficticios de manera aleatoria.
//Es un Post montado en un endpoint con solicitud get 
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


//metodo para acortar urls ingresadas como parametro de entrada
app.post('/acortarURL',(req,res)=>{
axios.post(`https://cleanuri.com/api/v1/shorten`,{
url:`${req.body.url}`
}).then(function(json){
console.log(req.body);
console.log(json.data);
res.send(json.data);
}).catch(function(error) {
      console.log(error);
res.send("error");
    })

})//fin acortar URL

//recibe como entrada una receta y devuelve un análisis detallado de la misma
app.post('/analisisreceta',(req,res)=>{
axios.post(`https://api.spoonacular.com/recipes/analyze?apiKey=${keySPN}`,{ 
    title: `${req.body.title}`,
    servings: `${req.body.servings}`,
    ingredients: `${req.body.ingredients}`,
    instructions: `${req.body.instructions}`
}).then(function(json){
console.log(req.body);
console.log(json.data)
res.send(json.data);
}).catch(function(error) {
      console.log(error);
res.send("error");
    })

})//fin analisis receta



//insertado test

app.listen(3000,()=>{
console.log("server running on port 3000");
})

//localhost3000