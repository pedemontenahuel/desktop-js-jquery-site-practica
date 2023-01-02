$(document).ready(function () {
  // slider
  $(".bxslider").bxSlider({
    mode: "fade",
    captions: true,
    slideWidth: 1200,
    responsive: true,
  });

  //post

  var posts = [
    {
      tittle: "Prueba de titulo 1",
      date: moment().format('MMMM ddd Do YYYY'),
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consequat risus sit amet semper bibendum. Cras id justo libero. Sed in mauris id nisi mollis vestibulum eget eu neque. Suspendisse lacinia, eros at aliquam fringilla, metus ex porttitor est, in ullamcorper neque erat ac erat. Etiam nunc nibh, volutpat a interdum a, fermentum consequat enim. Vestibulum accumsan nibh et ligula pretium molestie. Cras a dolor a dui egestas ornare sit amet vitae ipsum. Donec eros mi, tempus a dictum at, pulvinar vitae turpis. Vestibulum imperdiet aliquam aliquet. Nulla consectetur, enim eget euismod pellentesque, ipsum nibh ullamcorper sapien, mollis malesuada leo ipsum at tellus. Nunc tincidunt odio eu velit faucibus, sed venenatis lacus tristique. Pellentesque quis sapien posuere, tristique enim et, porttitor urna. Nulla feugiat consequat arcu ac fermentum. Phasellus euismod bibendum erat ac convallis. Aenean id sem sapien. In vel justo eu tortor luctus ultrices.",
    },
    {
        tittle: "Prueba de titulo 2",
        date: moment().format('MMMM ddd Do YYYY'),
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consequat risus sit amet semper bibendum. Cras id justo libero. Sed in mauris id nisi mollis vestibulum eget eu neque. Suspendisse lacinia, eros at aliquam fringilla, metus ex porttitor est, in ullamcorper neque erat ac erat. Etiam nunc nibh, volutpat a interdum a, fermentum consequat enim. Vestibulum accumsan nibh et ligula pretium molestie. Cras a dolor a dui egestas ornare sit amet vitae ipsum. Donec eros mi, tempus a dictum at, pulvinar vitae turpis. Vestibulum imperdiet aliquam aliquet. Nulla consectetur, enim eget euismod pellentesque, ipsum nibh ullamcorper sapien, mollis malesuada leo ipsum at tellus. Nunc tincidunt odio eu velit faucibus, sed venenatis lacus tristique. Pellentesque quis sapien posuere, tristique enim et, porttitor urna. Nulla feugiat consequat arcu ac fermentum. Phasellus euismod bibendum erat ac convallis. Aenean id sem sapien. In vel justo eu tortor luctus ultrices.",
      },
      {
        tittle: "Prueba de titulo 3",
        date: moment().format('MMMM ddd Do YYYY'),
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consequat risus sit amet semper bibendum. Cras id justo libero. Sed in mauris id nisi mollis vestibulum eget eu neque. Suspendisse lacinia, eros at aliquam fringilla, metus ex porttitor est, in ullamcorper neque erat ac erat. Etiam nunc nibh, volutpat a interdum a, fermentum consequat enim. Vestibulum accumsan nibh et ligula pretium molestie. Cras a dolor a dui egestas ornare sit amet vitae ipsum. Donec eros mi, tempus a dictum at, pulvinar vitae turpis. Vestibulum imperdiet aliquam aliquet. Nulla consectetur, enim eget euismod pellentesque, ipsum nibh ullamcorper sapien, mollis malesuada leo ipsum at tellus. Nunc tincidunt odio eu velit faucibus, sed venenatis lacus tristique. Pellentesque quis sapien posuere, tristique enim et, porttitor urna. Nulla feugiat consequat arcu ac fermentum. Phasellus euismod bibendum erat ac convallis. Aenean id sem sapien. In vel justo eu tortor luctus ultrices.",
      },
      {
        tittle: "Prueba de titulo 4",
        date: moment().format('MMMM ddd Do YYYY'),
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consequat risus sit amet semper bibendum. Cras id justo libero. Sed in mauris id nisi mollis vestibulum eget eu neque. Suspendisse lacinia, eros at aliquam fringilla, metus ex porttitor est, in ullamcorper neque erat ac erat. Etiam nunc nibh, volutpat a interdum a, fermentum consequat enim. Vestibulum accumsan nibh et ligula pretium molestie. Cras a dolor a dui egestas ornare sit amet vitae ipsum. Donec eros mi, tempus a dictum at, pulvinar vitae turpis. Vestibulum imperdiet aliquam aliquet. Nulla consectetur, enim eget euismod pellentesque, ipsum nibh ullamcorper sapien, mollis malesuada leo ipsum at tellus. Nunc tincidunt odio eu velit faucibus, sed venenatis lacus tristique. Pellentesque quis sapien posuere, tristique enim et, porttitor urna. Nulla feugiat consequat arcu ac fermentum. Phasellus euismod bibendum erat ac convallis. Aenean id sem sapien. In vel justo eu tortor luctus ultrices.",
      } ];


  posts.forEach( (item , index) => {
    var post = `
    <article class="post">
    <h2> ${item.tittle} </h2>
    <span class="date">${item.date}</span>
    <p>${item.content}</p>
    <a href="#" class="button-more">Leer más</a>
    </article>


    `
    $('#posts').append(post);



  })

   // selector tema
   var theme = $('#theme')
   var sliderinicial = $('#sliderinicial');
   var slidersegundo = $('#slidersegundo');
   var slidertercero= $('#slidertercero');

  $('#to-green').click(function(){
    theme.attr("href","css/green.css");
    sliderinicial.attr("src","img/hojas.jpg");
    slidersegundo.attr("src","img/rojo.jpg");
    slidertercero.attr("src","img/cielo.jpg")
    
  })
  
  $('#to-red').click(function(){

   
    localStorage.setItem("red", "red.css");
     theme.attr("href","css/red.css");
    sliderinicial.attr("src","img/rojo.jpg");
    slidersegundo.attr("src","img/hojas.jpg");
    slidertercero.attr("src","img/cielo.jpg")
  })

  $('#to-blue').click(function(){
    theme.attr("href","css/blue.css");
    sliderinicial.attr("src","img/cielo.jpg");
    slidersegundo.attr("src","img/hojas.jpg");
    slidertercero.attr("src","img/rojo.jpg")
  })

  


  // scroll-arriba
  $('.subir').click(function(e){
    e.preventDefault();
    $('html, body').animate({
      scrollTop: 0
    },500)

    return false;

  })


  // login falso

  $('#login form').submit(function(){
    // tomo el valor del imput
   var form_name = $('#form_name').val()
 // guardo el valor en el localstorage
   localStorage.setItem("form_name", form_name)
  })
  // lo pido en el localstorage y lo pongo en el about
  var form_name = localStorage.getItem("form_name")


  if( form_name != null && form_name != "undefined"  ){
    var about_parrafo = $('#about p');
     about_parrafo.html('<strong> Bienvenido '+form_name+'</strong>').css('text-align','center')
     about_parrafo.append("<br><a href='#' id='logout'> Cerrar sesión</a>");
     $('#logout').css('text-decoration','none').click(function(){
      localStorage.clear();
      window.location.reload()
     })
     $('#login').hide();
  }

  // acordeon 
// comprobar si existe en la url la palabra about
 if(window.location.href.indexOf('about') > - 1){
  $('#acordeon').accordion(
    // {collapsible: true}
  );
 }
 // reloj

 if(window.location.href.indexOf('reloj') > - 1){
  
   setInterval(function(){
    var reloj = moment().format(' h:mm:ss a');
    $('#reloj').html(reloj)
   },1000)
 }
// validacion 

if(window.location.href.indexOf('contact') > - 1){

  // poner datepicker en español 
  $.datepicker.regional['es'] = {
    closeText: 'Cerrar',
    prevText: '< Ant',
    nextText: 'Sig >',
    currentText: 'Hoy',
    monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
    monthNamesShort: ['Ene','Feb','Mar','Abr', 'May','Jun','Jul','Ago','Sep', 'Oct','Nov','Dic'],
    dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
    dayNamesShort: ['Dom','Lun','Mar','Mié','Juv','Vie','Sáb'],
    dayNamesMin: ['Do','Lu','Ma','Mi','Ju','Vi','Sá'],
    weekHeader: 'Sm',
    dateFormat: 'dd-mm-yy',
    firstDay: 1,
    isRTL: false,
    showMonthAfterYear: false,
    yearSuffix: ''
    };
    $.datepicker.setDefaults($.datepicker.regional['es']);
  

   /////// 
  $('#datepicker').datepicker({
    dateFormat: 'dd/mm/yy'
   });

  $.validate({
 
  });


}

});

