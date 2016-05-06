
jQuery.fn.lightTabs = function(options){
    // функция, которая совершает действия по скрытию/отображению и изменению css стилей
    var createTabs = function(){

        // this в данном случае то, к чему будет применёна функция createTabs
        tabs = this;
        i = 0;
        // функция, которая отображает выбранную страницу по номеру вкладки и скрывает остальные
        showPage = function(i){
            $(tabs).children("div").children("div").hide();
            $(tabs).children("div").children("div").eq(i).show();
            $(tabs).children("ul").children("li").removeClass("active");
            $(tabs).children("ul").children("li").eq(i).addClass("active");
        }
        // при инициализации отображает 0-элемент (первую вкладку) и скрывает остальные
        showPage(0);
        // при инициализации добавляет к каждой кнопке заголовка кастомный аттрибут data-page с номером вкладки
        $(tabs).children("ul").children("li").each(function(index, element){
            $(element).attr("data-page", i);
            i++;
        });
        // при инициализации вешает обработчик события click на каждую кнопку - при нажатии запускается showPage с параметром data-page
        $(tabs).children("ul").children("li").click(function(){
            
            showPage(parseInt($(this).attr("data-page")));
        });
    };
    // для каждого таба на странице применить плагин (createTabs)
    return this.each(createTabs);
};

$(document).ready(function(){
    $(".tabs").lightTabs();
});
