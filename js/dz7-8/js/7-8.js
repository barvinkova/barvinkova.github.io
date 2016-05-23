// ui-tabs-active ui-state-active
// классы, кот отличают активну. кнопку от неактивной

// aria-controls
// атрибут кнопки, в кот содержится id вкладки, кот нужно сделать активной при нажатии этой кнопки

// при нажатии на кнопочку она должна становиться активной, другие должны скрываться, и должен выводится таб, соответствующий нашей активной кнопе

$.fn.tabify = function() {
  $this = $(this);

  $(function(){




  };

  // bind some function to the buttons
  $(".ui-tabs-anchor").each(function(){
    $(this).bind("click", function() {
      makeMagic(); // make function and use it instead of alert
    })
  });

  return $this;
}

$( "#tabs" ).tabify();
