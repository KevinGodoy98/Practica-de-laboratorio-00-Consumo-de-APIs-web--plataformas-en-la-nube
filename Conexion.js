var datos;
function CargarCoctel(name) {
    var detalles ="";
    $.get("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=", function (rawdatos) {
        var rawstring = JSON.stringify(rawdatos);
        datos = JSON.parse(rawstring);
        console.log(datos);
        for(var i=0; i<datos.Search.length; i++){
            detalles += "<tr>" +
                "<td>" + datos.Search[i].idDrink + "</td>" +
                "<td>" + datos.Search[i].strDrink + "</td>" +
                "<td>" + datos.Search[i].strCategory + "</td>" +
                "<td>" + datos.Search[i].strInstructions +"</td>" +
                "<td><img src=" + datos.Search[i].strDrinkThumb + "></td>" +
                "</tr>";
        }
        document.getElementById("DetallesCoctel").innerHTML = detalles
    })
}