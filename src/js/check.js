
var getMessage = function(a, b) {
  var result = '';
  //Условие проверки первой переменной(булевное значение или нет?):	
  if (typeof a === 'boolean') {
    if (a === true) {
      result = 'Переданное GIF-изображение анимировано и содержит' + b + 'кадров';
    } else {
      result = 'Переданное GIF-изображение не анимировано';
    }
  }
  //Условие проверки первой переменной (числовое значение или нет?): 
  else if (typeof a === 'number') {
    var multiplicationOfVariable = b * 4;
    result = 'Переданное SVG-изображение содержит' + a + 'объектов и' + multiplicationOfVariable + 'атрибутов';
  }
  //Условие проверки первой переменной(массив или нет?):
  else if (Array.isArray(a) && !Array.isArray(b)) {
    var amountOfRedPoints = 0;
    for (var i = 0; i < a.length; i++) {
      amountOfRedPoints += a[i];
      result = 'Количество красных точек во всех строчках изображения:' + amountOfRedPoints;
    }
  }
  //Условие проверки двух переменных (a и b массивы?):
  else if (Array.isArray(a) && Array.isArray(b)) {
    var artifactsSquare = 0;
    for (var i = 0; i < a.length && b.length; i++) {
      artifactsSquare += a[i] * b[i];
      result = 'Общая площадь артефактов сжатия:' + artifactsSquare + 'пикселей';
    }
    //не получается применить последнее условию со значением 'Переданы некорректные данные'    
  } else {
    result = 'Переданы некорректные данные';
  }
  return result;
}
console.info(getMessage());