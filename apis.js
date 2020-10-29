var paginas_totales=0;
var pagina_actual=1;
var nombre_ingr = "";

var indexActual = 0;
var paginas = [];

function BuscarCoctel(){
    ingrediente = document.getElementById('ingrediente').value;
    console.log(ingrediente)
    let url = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i='+ ingrediente;
    AJAX(url);

}
function AJAX(url) {
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
            var data = JSON.parse(this.responseText);
            paginas_totales = data.drinks.length;
            paginas_totales /= 10;
            console.log(paginas_totales + '<--');
            let parteEntera = parseInt(paginas_totales);
            let parteDecimal =10*( paginas_totales - parteEntera)
            paginas_totales = Math.ceil(paginas_totales);
            console.log(data);
            
            let paginas = [] // Numero de Paginas.
            let items = [] // Items por pagina. 
            let cantidaItems = 0;
            for (let i = 0; i < parteEntera; i++) {
                console.log('Pagina actual -->' + i);
                for (let j = i*10; j < (i+1)*10; j++) {
                    if(i >= 1){
                        let contador = (i*10)+j;                        
                    }
                    items.push(data.drinks[j]);
                    cantidaItems ++;
                }
                paginas.push(items);
                items = [];
            }
            items = [];
            for (let i = cantidaItems; i < data.drinks.length; i++) {
                items.push(data.drinks[i])
            }
            paginas.push(items);
            console.log(paginas.length);
            globalThis.paginas = paginas;
            globalThis.indexActual = 0;
            Botones();
            mostrarResultados();
            console.log("<--------------------->");

            // 0 1 
            // 0 1 2 3 4 5 6 7 8 9 .. 10 11 12 13 14 15..
            // i >= 1 10
            
           
       }
        }
   xmlhttp.open("GET",url, true);
   xmlhttp.send();

}
}//Fin del metodo

function mostrarResultados(){
    let items = globalThis.paginas[globalThis.indexActual];
    console.log(items);
    let detalles = '';
    document.getElementById("DetallesCoctel").innerHTML = detalles;
    for (let i = 0; i < items.length; i++) {
       // console.log(items[i].idDrink);
        detalles += "<tr>" +
                       "<td>" + items[i].strDrink + "</td>" +
                       "<td><img src=" + items[i].strDrinkThumb + " style='width:100px;height:100px;'></td>" +
                        "<td>" + items[i].idDrink + "</td>" +
                        "<td><input type='button' value='Mas detalles' id=" + items[i].idDrink + " onclick=BuscarCoctelID(this.id)></td>" +
                        "</tr>";
    }
    document.getElementById("DetallesCoctel").innerHTML = detalles;
    
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

                for(let j of data.drinks){
                    "<tr>"
                    detalles+=  "<td>"+j.strInstructions +"</tr>" +"<br>" ;
                    detalles+=             "<tr>"+j.strVideo +"</tr>" +"<br>" ;
                    detalles+=           "<tr>"+j.strCategory +"</tr>" +"<br>" ;

                    detalles+=          "<tr>"+j.strIngredient1 +"</tr>" +"<br>" ;
                    detalles+=           "<tr>"+j.strIngredient2 +"</tr>" +"<br>" ;
                    detalles+=          "<tr>"+j.strIngredient3 +"</tr>" +"<br>" ;
                    detalles+=          "<tr>"+j.strIngredient4 +"</tr>" +"<br>" ;
                    "</tr>"

                }
                "<tr>"
                //detalles+=  "<tr>"+Object.keys(data.drinks)+"</tr>" +"<br>" ;
                "</tr>"

            }
            document.getElementById("sectionB").innerHTML=detalles;

        };
        xmlhttp.open("GET","https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i="+ id +"&plot=full",true);
        xmlhttp.send();
    }
}
function Botones(){
  
    if(globalThis.indexActual+1 == globalThis.paginas.length){
        document.getElementById('Siguiente').disabled=true;
    }else{
        document.getElementById('Anterior').disabled=false;
    } if(globalThis.indexActual<0){
        document.getElementById('Anterior').disabled=true;
    }else{
        if(globalThis.indexActual>=0){
            document.getElementById('Siguiente').disabled=false;
        }
      

    }
    
}
function AvanzarIngrediente() {
  Botones();
   globalThis.indexActual ++;
   console.log('<---------------------->');
   mostrarResultados();
}
function RetrocederIngrediente() {
    Botones();
    globalThis.indexActual --;
    console.log("---------");
    mostrarResultados();
}
