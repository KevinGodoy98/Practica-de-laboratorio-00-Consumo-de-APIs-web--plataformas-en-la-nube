# Practica-de-laboratorio-00-Consumo-de-APIs-web--plataformas-en-la-nube
Consumo de APIs mediante AJAX y JS
# [Estructura]

# [informe]
4. Desarrollar una aplicación con HTML + CSS + Javascript + Web Services para buscar información y visualizar toda la información disponible a través de la API.

•	HTML (index.html)

 

- En este pequeño fragmento podemos observar como procedemos a crear el documento html mediante el comando <!DOCYPE html>.

- Procedemos a crear la estructura básica de un documento html y mediante la etiqueta <html lang=”en” damos a entender que nuestra pagina sera escrita en ingles.

- Creamos las etiquetas meta que forman parte de nuestro encabezado de la pagina web, en donde indicamos la primera sentencia hace referencia al formato de texto que va a tomar la web, en este caso utf-8.

- Finalmente para cerrar la etiqueta head, procedemos a referenciar nuestros archivos css “api.css”, “tabla.css”, y usamos la etiqueta <a href> para la ultima debido a que se encuentra publica en la web; hacemos lo mismo con los archivos de javascript “Conexión.js” y “apis.js”.

- Procedemos al cuerpo o contenido de nuestra pagina mediante la etiqueta <body>.Primeramente le damos un encabezado por medio de la etiqueta <header>.Esta etiqueta esta dividida en 3 partes las cuales son: la clase logo y buscar, mientras que la ultima parte es el boton de busqueda con su id=”btnBuscar”.

En la clase logo se usó la etiqueta div para poder ubicar el elemento, en este caso la imagen que necesito usar en ese momento para direccionar el logo a la pagina de las apis.Se suele usar <nav> ya que nos vamos a referir a un solo sitio web en especifico en este caso es el url de la api.

Nuestra ultima clase del encabezado es buscar la cual hace referencia a la barra de búsqueda para ello usamos la etiqueta input para que el usuario pueda escribir lo que desea buscar, el atributo placeholder me permite colocar un valor de muestra en este caso “Buscar ingrediente” la cual se verá reflejada dentro de la barra de búsqueda, mediante el atributo type especifico que se va a tratar de una búsqueda.Y por ultimo mediante el style le doy atributos css en mi caso un margin para centrarlo debido a que es un objeto y un tamaño con width.

Con el boton<input type=”button” >de busqueda  con los valores anterior y siguiente al igual que sus id son creados para ser seleccionados mediante la funcion onclik= ‘RetrocederIngrediente()’ y ‘AvanzarIngrediente()’.Termina el header.


 
 
-	Vamos con la creación de la tabla  con el id = “TablaCoctel”, con la etiqueta <thead> la cual mediante css , al contenido le asignamos un color blanco ; procedemos con la creacion de la tabla <tr> y sus campos <th> los cuales en este caso son: strDrink,strDrinkThumb,idDrink,y More Details.
-	La etiqueta <tbody> hace referencia a las filas de la tabla,las cuales van a contar con un id =”DetallesCoctel”
-	Contamos con 2 botones<input type=”button”>, el primero es “Anterior” con un id=” Anterior” y el otro “Siguiente” con un id con el mismo nombre que el campo value.
-	Las etiquetas <br> son para dar saltos de linea
-	Como podemos ver en la imagen tenemos una seccion de <script> la cual nos sirve para la base de datos el cual esta referenciado con un link .

-	El otro script es para la tabla y su comportamiento con el uso de javascript  en donde leemos nuestra tabla 
-	Ocupe una etiqueta de texto <h2> debido a que quiero dar un titulo de informacion , el cual tiene un id=”sectionB”
-	Ya por ultimo vamos con el pie de pagina <footer> el cual tiene las etiquetas p donde colocamos derechos de autor, ultima actualizacion de la pagina , fecha y hora.Todos estos textos lo colocamos con un estilo justificadoTermina el body y el html.

•	CSS (api.css)
  

-	Dentro de la etiquta html lo unico que hacemos es darle un color de fondo a nuestra pagina html.
-	Con el .logo llamamos a la clase logo , la cual va a estar colocada al lado izquierdo del header.
-	Dentro de la etiqueta header colocamos un color,le damos un alto de 100px y con un margen de lo alto en -6px.
-	Para las etiquetas input y labels ocupada en botones y textos descriptivos lo unico que le decimos es que no va a ser colocado ni en la derecha , ni en la izquierda.Como ultimo parametro nos dice que su ancho va a ser de 100px.
-	Al cuerpo<body> le agregaremos un color de fondo.
-	Al selector button le damos un espaciado de 0.

-	Al boton <input> le decimos que va a tener un ancho de 150px y un margen a la izquierda de 40px.

-	Tenemos las propiedades del footer o pie de pagina modificamos su color de fondo mediante el backgound,el espaciado mediante el padding , el margen superior (margin-top),y los bordes: border-top el cual tomo un grosor de 2px con un color negro,el color ; el cual hace referencia a los bordes.

-	Por ultimo la propiedad color hace referencia al color de las etiquetas <p> , osea el texto.

-	La seccion B hace referencia al espacio donde se van a visualizar los detalles de la api.Esta seccion contiene propiedades de margenes superiores,bordes,espaciado,backgroud,alineacion de texto.

•	CSS (tabla.css)
 
-	La etiqueta table va a tener un color blanco en su contenido
-	El borde va a tomar la propiedad de collapse
-	Va a estar alineado al centro 
-	Y va a estar con un margen superior de 65px
-	Para las etiquetas th y td que hace referencia a los campos y filas va a tener un borde solido de color negro con un grosor de 3px, ademas de contar con un espaciado de 75px;

•	 JAVASCRIPT(paginacion.js)

 
-	Creamos una funcion CargarCoctel() mandamos el parametro name y con el $._get obtenemos la url de la api , mediante la funcion rawdatos como su nombre lo dice colocamos las filas y las pasamos a json , y ya para finalizar las leemos en la tabla mediante el uso de un for .y con el innerHTML lo mostramos dentro de nuestro index.html.
•	JAVASCRIPT(apis.js)
 
-	Creamos las variables a usar en la paginación como el total de las paginas , la pagina actual que inicia en 1.Ademas de ello cresmos un vector global de paginas y una variable index para las paginas la cual inicia en 0.
-	Por otro lado tambien creamos una variable para ingresar nuestro ingrediente a buscar .
 
-	Creamos nuestra primera funcion la cual es BuscarCoctel() , donde obtenemos el valor ingresado mediante la propiedad getElementByID 
-	Imprimimos en consola 
-	Y creamos una variable llamada url donde vamos a guardar el enlace de nuestra api , concatenandolo con el valor ingresado por el usuario.
-	Llamamos a nuestro metodo ajax y le pasamos como parametro la url para que proceda a realizar la busqueda.










  

-	Creamos nuestra segunda funcion la cual es la funcion Ajax en la cual creamos una variable ing donde mediante la propiedad getElementBy donde recuperamos el valor ingresado en la barra de busqueda;creamos una variable detalles donde vamos almacenar los datos recuperados de la api
-	Procedemos a preguntar si nuestra variable de ingrediente es igual a vacio, de serlo me manda una alerta indicandome que el campo esta vacio , sino aplica ajax y transforma el texto a formato json .
-	Al campo de paginas totales , indico que va a ser igual al tamaño de los datos de la api.Declaramos que nuestras paginas totales van a estar dividida para 10.
-	Creamos una variable que se va a llamar parteEntera la cual va a tomar solo los enteros de nuestro total.Creamos otra variable denominada parteDecimal la cual va a estar formada por el numero de items que vamos a querer por pagina, multiplicado por el resultado de la rersta entre las paginas totales – parte entera.
-	Creamos 2 vectores uno para las paginas y otra para los items de cada pagina.Añadimos un contador inicializado en 0
-	Recorremos un for(i)en la cual nos va a sacar los pares es decir cuantas paginas de 10 items en este caso vamos a obtener.
-	Recorremos otro for(j) la cual va a sacar la diferencia de paginas que nos falten y que no son pares.
-	Hacemos un push que vendria siendo como un append de los items 
-	Hacemos globales al index y a las paginas tambien.
-	Por ultimo llamamos a las funciones de Botones() y a mostrar resultados ()
 

-	La funcion de mostrarResultados lo que hacemos es crear una variable local llamada items a la cual le vamos a dar la equivalencia de un vector paginas con sus respectivos items
-	Crearemos otra variable detalles donde cargaremos los datos de la api 
-	Por ultimo en el for insertamos los datos de la api en tablas
-	Y lo visualizamos mediante la propiedad innerHTML.

 
-	Volvemos a usar ajax para recuperar datos de la api pero a diferencia del primero que fue a traves de los ingredientes que contenia el coctel lo vamos ha realizar directamente desde el id , con el fin de localizar mas informacion acerca del coctel.

 

-	Ya por ultimo procedemos a crear nuestras funciones para avazar entre cada pagina ; estas funciones son Botones() en la cual le decimos cuando detenerse con los botones 
-	Y la funcion Avanzar y retroceder ingrediente en la cual llamamos a la funcion botones y mostrar resultados; y mediante el indexActual avanzar con ++ y retroceder con --;



## Copyright and License

Copyright 2020 @Kevin Godoy. Code released under the [API](https://www.thecocktaildb.com/api.php) license.
