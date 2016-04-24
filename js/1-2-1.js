function Pow(value,exp){
  // сохраняем в result наше число
  var result = value;
  // проходимся exp раз умножая результат на число
  for(var i=1; i<exp; i++){
    result *= value;
  }
  // вовзращаем результат
  return result;
}

do{
  var value = prompt('Enter an integer value!');
  value = value.replace(',','.');
} while (isNaN(value) || (parseFloat(value) % 1) > 0)

do{
  var exp = prompt('Enter an integer exp!');
  exp = exp.replace(',','.');
} while (isNaN(exp) || (parseFloat(exp) % 1) > 0)


console.log (Pow(value,exp));
