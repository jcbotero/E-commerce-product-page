
let images = document.querySelectorAll(".items");
let imagenes = document.querySelectorAll(".img2");


function code() {
   for (var i = 0;  i < images.length; i++) {
   images[i].addEventListener('dblclick', function() {
     $(".black").css("display", "flex") // nunca agarrar la etiqueta html para nada. solo complica. aqui hice un div encima de toda la pagina que oscureciera toda la screen excepto unos elementos con z index
     $("#icons").css("display", "flex")
     $("#close").css("display", "block") // asi selecciono y doy estilo con jquery
     $("#imgg2").css("display", "flex", )
     $("#itemso").css("display", "flex")
     
    })}
} // function con jquery que al darle doble click a una de las imagenes me despliega las de vista mas profunda e iconos de manejo 

console.log(code());

$("#close").click(function() {
  $(".black, .icons, .close, .img2, #itemso").css("display", "none");
}); // con esta function seleccciono todo los elementos que aparecieron con el dbclick anterior y los vuelvo a desaparecer


// cada uno de estos event click de abajo.. al darle click a una imagen me despliega la misma pero grande con jquery... y antes me borra la anterior

document.getElementById("imgg2").addEventListener("click", function () {
  $(imagenes).css("display" , "none")
  $("#imgg2").css({"display" : "flex",  'height' : '78%'});}) //al colocar varios styles en jquery debo ponerlas en una array

document.getElementById("b").addEventListener("click", function () {
  $(imagenes).css("display" , "none")
  $("#bb").css({"display" : "flex",  'height' : '78%'});})

document.getElementById("c").addEventListener("click", function () {
  $(imagenes).css("display" , "none")
  $("#cc").css({"display" : "flex",  'height' : '78%'});})

document.getElementById("d").addEventListener("click", function () {
  $(imagenes).css("display" , "none")
  $("#dd").css({"display" : "flex",  'height' : '78%'});})


  // el codigo de aqui abajo es para hacer la image slider

  let imagenIndex = 1;  // declaro una variable que va ahacer el index o punto base para el movimiento
  

   function move(n) {
    show(imagenIndex += n);
  } // esta function es para los iconos de anterior y siguiente
  // dice que ejecute la function de abajo show con el parametro n .. el cual tbn pongo en los iconos en el html

  function show(n) {
   
    let imageMove = document.getElementsByClassName("img2"); //agarro todas la imagenes en una node list
   
    if (n > imageMove.length) {imagenIndex = 1}  // esto para que una vez estemos en la imagen ultima y le doy el icono next.. me salte a la primera
    if (n < 1) {imagenIndex = imageMove.length} // esto para que una vez estemos en la imagen primera y le doy el icono anterio.. me salte a la ultima
    for (i = 0; i < imageMove.length; i++) {
      imageMove[i].style.display = "none";  
    } // este display none es para que al mover la imagenes... se borre la anterior y no tener que cuadrar z-index
   
    $(imageMove[imagenIndex -1]).css({"display" : "flex"}) ;  
     // y esta ultima finalmente me dice que haga el display a las imagenes... va con -1 para que salte de la ultima a la primera imagen... y vicerversa
  }


  function cart() {
    document.getElementById("nav").style.display = "block";
  } // muestra el carrito cuando le doy clcik
  
  function remove() {
    document.getElementById("nav").style.display = "none";
  } // oculta el carrito cuadno me salgo de el 


  var currentValue = 0;

  $('#plus').click(function() {
    currentValue++;
    document.getElementById("field").textContent = currentValue;
  }); // esta funcion agarra una avariable con valor 0, que al darle click a boton plus me incrementa el numero del campo field

  $('#minus').click(function() {
    if (currentValue > 0) {
      currentValue--;
      document.getElementById("field").textContent = currentValue;
    }}
  ); // lo mismo que arriba pero con minus


  document.getElementById("addcart").addEventListener("click", function() {
     let cantidad = document.getElementById("field").textContent; // variable para agarrar el numero de la cantidad de elementos que voy a comprar
     if (cantidad > 0) {
      $("#pb").css("display", "none")
      $("#cartfull").css("display" , "block")
      document.getElementById("globo").textContent = cantidad;
      document.getElementById("globo").style.display ="block";
      let precio =  cantidad + " " + "$" + cantidad * 125.00 + ".00";
      document.getElementById("span1").textContent = precio; // con la ultimas dos lineas le inserto un text al span que es el precio del articulo por la cantidad que agregué
     } else  {
      $("#pb").css("display", "block")
      $("#cartfull").css("display" , "none")
      document.getElementById("globo").style.display ="none";  
     }
    
  }) // este event listener con if statement me muestra en el carrito de compras los elementos comprados una vez le doy click a botton add to cart


  document.getElementById("delete").addEventListener("click", function() {
    $("#pb").css("display", "block")
    $("#cartfull").css("display" , "none")
    document.getElementById("globo").style.display ="none";  
  }) // con este eventlistener al darle click a la imagen de la basura... elimino los objetos agregados al carrito y vuelvo a mostrar el texto original

  document.getElementById("menu").addEventListener("click", function() {
    $("#breadcrumbs").css("display", "inline-block")
    $(".black").css("display", "flex")
  }) // desplegar el menu superios en design mobile

  document.getElementById("close2").addEventListener("click", function() {
    $("#breadcrumbs").css("display", "none")
    $(".black").css("display", "none")
  }) // borrar el menu superior en mobile design