# Consumiendo API de MARVEL
## Desarrollado para [Laboratoria](http://www.laboratoria.la/)

Con un Json es más fácil el uso de ajax (concepto) (XML), para el consumo de api, através de la herramienta objeto fetch que es de js puro, también nos permite hacer peticiones para generar el ajax y con fetch ya nos trae las promesas incluidas.

Entramos a la web de la api de marvel, nos logueamos y una vez adentro vemos los How-Tos, en donde marvel nos va a dar una API-KEY y unos codigos para poder consumir su API,  nos da una llave pública y privada para poder hacer la petición através del protocolo de http.

![api_marvel](https://user-images.githubusercontent.com/32883876/38582351-0b152226-3cd5-11e8-9637-4b4b12a10a2a.png)


Se tiene que hacer la petición a marvel utilizando las keys y haciendo uso de un parámetro ts que es un número único en la petición y un hash con la cual me estoy autenticando ante esta API, por lo que nos pide que utilicemos un archivo md5 para generar el hash = md5(ts+privatekey+publickey) para asi obtener la data.
