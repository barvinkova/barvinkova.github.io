// ui-tabs-active ui-state-active
// классы, кот отличают активну. кнопку от неактивной

// aria-controls
// атрибут кнопки, в кот содержится id вкладки, кот нужно сделать активной при нажатии этой кнопки

// при нажатии на кнопочку она должна становиться активной, другие должны скрываться, и должен выводится таб, соответствующий нашей активной кнопе

$.fn.tabify = function() {
    $this = $(this);

    var buttons = [];
    // create some function
    var pusheen = function() {
       buttons = $(".ui-tabs-anchor"); // result will be an array of found buttons or none O_O = document.getElementsByClassName
    };
    // bind some function to the buttons
    $(buttons).each(function(){

      this.bind("click", function() {
      alert("clicked");
      })
    });

    return $this;
}

$( "#tabs" ).tabify();
