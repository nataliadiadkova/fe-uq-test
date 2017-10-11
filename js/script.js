// move progress bar
function move(root) {
  root = root || document;
  var elem =  $(root).find(".rectangle");
  var procent = $(root).find(".procent");      
  var width = 0;
  var maxWidth =  parseInt($(root).data('value')) || 100;
  var id = setInterval(frame, 20);

  function frame() {
    if (width >= maxWidth) {
      clearInterval(id);
    } else {
      width++; 
      elem.css('width', width + '%'); 
      procent.html(width * 1  + '%');
    }
  }
}

// check if element visible in window
function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

$(function() {

  function runProgressIfVisible() {
    $('.pg-bar.untouched').each(function(index, elem) {
      if (isScrolledIntoView(elem)) {
        $(elem).removeClass('untouched')
        move(elem);
      }
    });
  }

  $(window).scroll(runProgressIfVisible);

  runProgressIfVisible();
})

 
$(document).ready(function(){
  $("#menu").on("click", "a.someclass", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();

    //забираем идентификатор бока с атрибута href
    var id  = $(this).attr('href'),

    //узнаем высоту от начала страницы до блока на который ссылается якорь
    top = $(id).offset().top;
    
    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({scrollTop: top}, 1500);
  });
});