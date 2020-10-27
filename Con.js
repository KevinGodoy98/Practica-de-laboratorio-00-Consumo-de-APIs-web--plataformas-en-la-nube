var el = document.querySelector('#btnBuscar');
if (el) {
  el.addEventListener('click', function(){
    obtenerDatos();
  });
}

function obtenerDatos() {
var valor = document.getElementById("ingrediente").value;
let url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=`+ valor ;
console.log(url);

const api = new XMLHttpRequest();
api.open
('GET', url, true);
api.send();
api.onreadystatechange = function (){
  if (this.status == 200 && this.readyState == 4){
    let datos = JSON.parse(this.responseText);
    console.log(datos.result);
    //let film = document.querySelector('#DetallesCoctel');
    //film.innerHTML = '';
    let people = document.querySelector('#DetallesCoctel');
    people.innerHTML = '';
    console.log(datos.drinks);
    people.innerHTML += `<td>${datos.strDrink}</td>`
    
  }

}
}

