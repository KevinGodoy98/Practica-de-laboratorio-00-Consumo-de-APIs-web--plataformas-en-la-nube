var datos;
function CargarCoctel(name) {
    var detalles ="";
    $.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin&plot=full", function (rawdatos) {
        var rawstring = JSON.stringify(rawdatos);
        datos = JSON.parse(rawstring);
        console.log(datos);
        for(var i=0; i<datos.Search.length; i++){
            detalles += "<tr>" +
                "<td>" + datos.Search[i].strDrink + "</td>" +
                "<td><img src=" + datos.Search[i].strDrinkThumb + "></td>" +
                "<td>" + datos.Search[i].idDrink + "</td>" +
                "</tr>";
        }
        document.getElementById("DetallesCoctel").innerHTML = detalles
    })
}