var builder = {
  responsesObj : {},
  userResponses : [],
  buildForm : function(text){
    var formTag = document.createElement("form");
    var divContainer = document.createElement("div");
    divContainer.className = "container";
    formTag.appendChild(divContainer);
    var body = document.body;
    body.appendChild(formTag);

    var divContainer = document.createElement("div");
    var headerThree = document.createElement("h3");
    headerThree.textContent = text;
    var divContainer = document.getElementsByClassName("container")[0];
    divContainer.appendChild(headerThree);

    var divUnbordered = document.createElement("div");
    divUnbordered.className = "unbordered";
    divContainer.appendChild(divUnbordered);
  },

  buildQuestion : function(arr){
   // [{num: 1,
   //  questions: ["Вариант ответа №1","Вариант ответа №2","Варианта ответа №3"],
   //  rightAnswer: 0}]
    var divUnbordered = document.getElementsByClassName("unbordered")[0];

    for (var key in arr){
      var p = document.createElement("p");
      p.textContent = arr[key].num + ". Вопрос №" + arr[key].num;
      divUnbordered.appendChild(p);

      for (var i=0; i<arr[key].questions.length; i++){
        var divCheckbox = document.createElement("div");
        divCheckbox.className = "checkbox";
        var label = document.createElement("label");
        //label.textContent = arr[key].questions[i];
        var text = document.createTextNode(arr[key].questions[i]);

        var input = document.createElement("input");
        input.type = "checkbox";
        input.name = "question" + arr[key].num;
        input.value = i+1;
        label.appendChild(input);
        label.appendChild(text);
        divCheckbox.appendChild(label);
        divUnbordered.appendChild(divCheckbox);
      }
    }

  },

  buildCheckButton : function(){
    var divCentered = document.createElement("div");
    divCentered.className = "center";
    var button = document.createElement("input");
    button.type = "submit";
    button.value = "Проверить мои результаты";

    divCentered.appendChild(button);
    var divUnbordered = document.getElementsByClassName("unbordered")[0];
    divUnbordered.appendChild(divCentered);

  },
  checkResponses: function(){

  }
}

builder.buildForm('Тест по программированию');
var questionsArray = [{num: 1, questions: ["Вариант ответа №1","Вариант ответа №2","Варианта ответа №3"],
rightAnswer: 0},
{num: 2, questions: ["Вариант ответа №1","Вариант ответа №2","Варианта ответа №3"],
rightAnswer: 0},
{num: 3, questions: ["Вариант ответа №1","Вариант ответа №2","Варианта ответа №3"],
rightAnswer: 0}];
builder.buildQuestion(questionsArray);
builder.buildCheckButton();
