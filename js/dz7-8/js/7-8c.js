jQuery.fx.off = true;

jQuery.fn.toolTip = function(options){
    // функция, которая совершает действия по скрытию/отображению и изменению css стилей
    var createTips = function(){

        // this в данном случае то, к чему будет применёна функция createTips - форма
        tips = this;

        // функция, которая отображает выбранную подсказку по id поля и скрывает остальные
        showTip = function(id,showAll){
           // если showAll не true, то прятать
            if(!showAll) $(tips).find(".tooltip").hide();

            var tooltip = $("#"+id)[0].parentElement.nextElementSibling.children[0];
            tooltip.innerText = $("#"+id).attr("xtitle");
            $(tooltip).show();
            //setTimeout(function(){
              //$(tooltip).hide();
            //}, 600);
        };

        // при инициализации вешает обработчик события маусовер на каждый input - при наведении запускается showTip с параметром id

        $(tips).find("input").on("mouseover", function(){
            showTip($(this)[0].id);
        });
        // при убирании мышки, подсказка скрывается
        $(tips).find("input").on("mouseleave", function(){
            var tooltip = $(this)[0].parentElement.nextElementSibling.children[0];
            $(tooltip).hide();
        });

        // отобразить все подсказки в течение 1,5 секунд при нажатии кнопки
        showAll = function(){
          $(tips).find("input").each(function(index,elem){showTip(elem.id,true)});
          setTimeout(function(){
              $(tips).find(".tooltip").hide();
          }, 1500);
        };

        $("#helpBtn").on("click", function(){
          showAll();
        });
    };
    // для каждой формы на странице применить createTips
    return this.each(createTips);
};

$(document).ready(function(){
    $("#myToolTip").toolTip();
});
