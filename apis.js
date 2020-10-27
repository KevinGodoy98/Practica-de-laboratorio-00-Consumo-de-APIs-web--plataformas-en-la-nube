var paginas_totales=0;
var pagina_actual=1;
var nombre_ingr = "";
function BuscarCoctel(){
    ingrediente = document.getElementById('ingrediente').value;
    let url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='+ ingrediente;
    metodoAJAX(url);
}
function metodoAJAX(url) {
    $(document).ready( function () {
        $('#TablaCoctel').DataTable();
    } );
var ing = document.getElementById("ingrediente").value;
var detalles="";
if (ing ==""){
    alert("Rellene los Campos.")
}else {
    if(window.XMLHttpRequest){
        xmlhttp = new XMLHttpRequest();
    }else {
        xmlhttp =new ActiveXObject("Microsoft.XMLHTTP");
    }

        xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200){
            var data = JSON.parse(this.responseText)
            paginas_totales = data.totalResults;
            paginas_totales /= 10;
            paginas_totales = Math.ceil(paginas_totales);

            console.log(data)
            data.Search.forEach(coctel =>{
                    detalles += "<tr>" +
                        "<td>" + coctel.idDrink + "</td>" +
                        "<td>" + coctel.strDrink + "</td>" +
                        "<td>" + coctel.strCategory + "</td>" +
                        "<td>" + coctel.strInstructions + "</td>" +
                        "<td><img src=" + coctel.strDrinkThumb + " style='width:200px;height:200px;'></td>" +
                        "<td><input type='button' value='More Details' id=" + coctel.idDrink + " onclick=BuscarCoctelID(this.id)></td>" +
                        "</tr>";
                });
            document.getElementById("DetallesCoctel").innerHTML = detalles;
        }
        }
    xmlhttp.open("GET",url, true);
    xmlhttp.send();
}
}

function BuscarCoctelID(id){
    var detalles="";
    if (id==""){
        detalles = "sin informacion";
        document.getElementById("informacion").innerHTML=detalles;

    }else {

        if(window.XMLHttpRequest){
            xmlhttp=new XMLHttpRequest();
        } else{
            xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange=function() {
            if(this.readyState ==4 && this.status ==200){
                var data= JSON.parse(this.responseText);
                console.log(data);
                var x;

                for(x in data){
                    "<tr>"
                    detalles+=  "<tr>"+data[x] +"</tr>" +"<br>" ;
                    "</tr>"

                }
                "<tr>"
                detalles+=  "<tr>"+Object.keys(data)+"</tr>" +"<br>" ;
                "</tr>"

            }
            document.getElementById("detallesId").innerHTML=detalles;

        };
        xmlhttp.open("GET","https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i="+ id +"&plot=full",true);
        xmlhttp.send();
    }
}

function AvanzarIngrediente() {
    pagina_actual = parseInt(pagina_actual)+1;
    let url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='+ nombre_ingr + '&page='+ pagina_actual;
    metodoAJAX(url);
}
function RetrocederIngrediente() {
    pagina_actual = parseInt(pagina_actual)-1;
    let url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='+ nombre_ingr + '&page='+ pagina_actual;
    metodoAJAX(url);
}