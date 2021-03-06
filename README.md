﻿# Testing for Api Server at UMG - Prueba de servidor API en UMG 
## Made for Cloud Computing class
## Descripción
La presente Api está orientada a ser un intermediario entre páginas de Apis existentes y nuestro equipo. La ruta base para el acceso al presente servidor es mediante [localhost:8080/](https://localhost:8080/) o bien, [https://apipruebaariel.herokuapp.com/](https://apipruebaariel.herokuapp.com/). 
En el presente proyecto definimos 5 accesos a métodos GET y 5 de acceso a POST.
## Requisitos
- Nodejs
- Postman
- Navegador Chrome (opcional)
## Instalación
En nodejs se requieren las siguientes dependencias:
- Axios 0.21.1
- body-parser 1.19.0
- express 4.17.1
- morgan 1.10.0
- node-fetch 2.6.1
- nodemon 2.0.7
- request 2.88.2

Al montar el presente servidor en Nodejs instalando sus debidas dependencias con **npm install** y mientras se esté ejecutando el server.js con el comando **"npm run dev"**, podrá acceder mediante el navegador (en el caso de las acciones GET) o en Postman (en GET y POST).
```sh
npm install express nodemon request morgan body-parser node-fetch axios
```
```sh
npm run dev
```
## Documentos
- **Server.js**: aqui se define cada método empleado en lenguaje Javascript, es el código fuente del proyecto
- **package.json**: lista de versión, dependencias, nombre, etcétera.
- **package-lock.json**: archivo requerido para la ejecución del package y dependencias, no modificar
- **DocumentacionApiPrueba.docx**: archivo de Word con documentación detallada de la API
- **README**: documento que usted está leyendo en este momento.
- **views/welcome**: archivo de html de bienvenida al acceder al método raíz (por defecto).

## Prueba del código
Para acceder a cada uno de los métodos del servidor de prueba, seguido del **localhost:8080** se agrega cada uno de los puntos de entrada desarrollados en el proyecto, cada uno de ellos se describirá a continuación. Los resultados se configuraron para que aparezcan en la terminal de Postman, así como respondería un endpoint si usted lo envía por separado. 

## Rest
URL Base: [http://localhost:8080/](https://localhost:8080/) y [https://apipruebaariel.herokuapp.com/](https://apipruebaariel.herokuapp.com/)
Estos sitios presenta una página de formato Html con la descripción básica de cada uno de los puntos de entrada de la presente aplicación. A continuación se describen los métodos GET y POST que soporta la aplicación y su uso.
Cada método devuelve información en formato json, se recomienda tener en el navegador un plugin para una mejor lectura del texto. Para los métodos POST se requieren objetos tipo JSON de entrada, los cuales se pueden aplicar a Postman en la sección de Body.


Métodos GET
- **Días Festivos**: localhost:8080/diasfestivos/{año}/{codpais}
Brinda una lista de las festividades más populares en un país y en que fecha se celebra dado un año
- **Obtener Clima**: localhost:8080/clima/{ciudad}/
Brinda toda la información sobre el clima actual de la ciudad indicada
- **Obtener info música**: localhost:8080/entretenimiento/musica/{banda o cantante}--si aplica, sustituir espacios en blanco por "%20".
Despliega todos los objetos e información almacenada relacionada con la banda o el cantante
- **Obtener info Studio Ghibli**: localhost:8080/entretenimiento/studioghiblipeliculas/
Obtiene información en orden cronológico acerca de las peliculas de Studio Ghibli
- **Edad de nombres**: localhost:8080/entretenimiento/edades/{nombre}
Dado un nombre, la página devuelve el índice de frecuencia del mismo y una posible edad asociada al nombre.

Los parámetros entre llaves indican que en este espacio pondremos un dato del tipo especificado por ellos.

Métodos POST
- [Mi primer objeto de Javascript](https://localhost:8080/crearObjeto)
Crea un objeto JSON con base en parámetros de entrada.
- [Detector de sentimientos en texto (en inglés)](https://localhost:8080/appfeelings)
Recibe como entrada un texto en inglés y de salida interpreta si las frases dichas reflejan una emoción positiva o negativa (o neutra).
- [Análisis de recetas](https://localhost:8080/analisisreceta)
Recibe como entrada una receta con parámetros puntuales y de salida despliega un análisis completo sobre atributos posibles de la receta, ingredientes, imágenes, alérgenos, etcétera.
- [Generador de usuarios aleatorios](https://localhost:8080/personarandom)
Recibe un objeto con parámetros para generar usuarios ficticios de manera aleatoria. Útil para crear bases de datos de muestra o práctica.
- [Acortador de URL](https://localhost:8080/acortarURL)
Dada una url cualquiera, devuelve una url corta originaria del propio endpoint.

NOTA: las URL se están marcando, sin embargo estas funcionan al ejecutarlas en postman con sus debidos objetos JSON de entrada.
# Ejemplos

**Método GET**
Obtener clima: 
[localhost:8080/clima/Seattle](localhost:8080/clima/Seattle)

Respuesta (JSON)
```
{
    "coord": {
        "lon": -122.3321,
        "lat": 47.6062
    },
    "weather": [
        {
            "id": 802,
            "main": "Clouds",
            "description": "nubes dispersas",
            "icon": "03n"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 5.09,
        "feels_like": -0.16,
        "temp_min": 3.89,
        "temp_max": 6.11,
        "pressure": 1019,
        "humidity": 81
    },
    "visibility": 10000,
    "wind": {
        "speed": 5.14,
        "deg": 220
    },
    "clouds": {
        "all": 40
    },
    "dt": 1613534876,
    "sys": {
        "type": 1,
        "id": 5798,
        "country": "US",
        "sunrise": 1613488372,
        "sunset": 1613525650
    },
    "timezone": -28800,
    "id": 5809844,
    "name": "Seattle",
    "cod": 200
}
```

**Método POST**
Generador de usuarios aleatorios:
JSON de entrada
```sh
{
      "password": "number",
      "results": "1",
      "gender": "male",
      "nat": "US"
    }
```
Esquema de parámetros
- Password (string): tipo de contraseñas de usuario a generar en los perfiles
- Results (int): número de usuarios que se espera crear
- Gender(string): género de los usuarios a crear, posibles respuestas: male, female o vacío  " ".
- Nat(string): código de nacionalidad de los usuarios a crear

Respuesta
```sh
[
    {
        "gender": "male",
        "name": {
            "title": "Mr",
            "first": "Johnni",
            "last": "Franklin"
        },
        "location": {
            "street": {
                "number": 345,
                "name": "Fairview St"
            },
            "city": "Broken Arrow",
            "state": "Delaware",
            "country": "United States",
            "postcode": 33422,
            "coordinates": {
                "latitude": "1.0056",
                "longitude": "7.9117"
            },
            "timezone": {
                "offset": "-5:00",
                "description": "Eastern Time (US & Canada), Bogota, Lima"
            }
        },
        "email": "johnni.franklin@example.com",
        "login": {
            "uuid": "4304124d-9d75-4bd9-b8dd-40fd6825ecc3",
            "username": "sadduck846",
            "password": "58820984513977207294446895397794428249139788160",
            "salt": "2M1DwQZJ",
            "md5": "3b15b5af44be5975acb95107a0e02166",
            "sha1": "6dbc47fc36098ced997e733740fffbf46b8136ef",
            "sha256": "435b3f91c6cd7404cf3bb46bff46ff13a0b88077f5a40ba311f92c4ba277e166"
        },
        "dob": {
            "date": "1954-02-14T01:04:39.374Z",
            "age": 67
        },
        "registered": {
            "date": "2004-02-03T15:36:35.397Z",
            "age": 17
        },
        "phone": "(852)-068-6907",
        "cell": "(563)-838-5892",
        "id": {
            "name": "SSN",
            "value": "179-83-0559"
        },
        "picture": {
            "large": "https://randomuser.me/api/portraits/men/4.jpg",
            "medium": "https://randomuser.me/api/portraits/med/men/4.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/men/4.jpg"
        },
        "nat": "US"
    }
]
```
Para más información sobre la implementación de los demás métodos y sus parámetros de entrada, así también ejemplos, véase el archivo DocumentaciónPruebaApi.

## Contribución

Repositorio github:https://github.com/arielarreola/test_umg_api_server_Ariel/

Contacto: arielyohaina.arreolablanco@umg.edu.mx
Puedes libremente realizar un fork al presente proyecto.
Página: https://apipruebaariel.herokuapp.com/

## Licencia
Software libre con fines educativos 

Creado por Ariel Arreola Blanco
19/02/2021
