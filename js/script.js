/*API MARVEL*/
/*codigo del script para obtener la informacion, primero creo unas constantes de la llave publica y privada que nos da la api*/
const privatekey = 'ca2eaa2ac0f6e6874d71f29c35e2ffd4dfb385b3',
      publickey = 'd807331cdbf39818935beaaf61d8ebe9',
/*contenedor donde se va a pintar las imagenes de marvel*/
      content = document.getElementById('content');
/*creando el metodo que nos haga la conección y nos traiga los elementos*/
const getConnection = () => {
/*constante ts*/
    const ts = Date.now(),
/*java script no tiene un metodo md5, por lo que se puede descargar el algoritmo que lo genere y este archivo lo llamo primero que el js*/
    hash = MD5(ts + privatekey + publickey),
/*la url donde vamos hacer la peticion de los personajes de la api de marvel*/
      URL= `https://cors-anywhere.herokuapp.com/http://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${publickey}&hash=${hash}`;
/*verificar la petición y que la promesa sea correcta*/
    fetch(URL)
/*con json es un metodo del objeto response que me va a traer la data y la va a formatear en json */
        .then(response => response.json())
        .then(response => {
            response.data.results.forEach(e => {
                drawHero(e);
            });
        });
};

const drawHero = e => {
    const image = `${e.thumbnail.path}/portrait_uncanny.${e.thumbnail.extension}`
/*obtenemos la data conforme a la documentación de marvel*/
    const hero = `
    <div class="hero ed-ite l-1-3">
      <h3>${e.name}</h3>
      <div class="hero-img">
        <img class= "thumbnail" src="${image}">
        <p class="description">${e.description}</p>
      </div>
    </div>
     `;
    content.insertAdjacentHTML('beforeEnd',hero);
};


getConnection();
