// создаем массив из 5-ти элементов
var names = [5];
// проходим 5 раз и просим пользователя ввести имена, результат ввода пользователя сохраняем в names[i]
for(var i=0; i<5; i++){
  names[i] = prompt('Enter name #'+(i+1));
}
// спрашиваем имя пользователя
var username = prompt('Enter your name');

var found = false;
// проходим по массиву имен и сравниваем с именем пользователя
for(var i=0; i<5; i++){
  if (names[i] == username){
    alert(username + ', you entered successfully');
    found = true;
    // выход из цикла
    break;
  }
}

if (!found) alert('Error!');
