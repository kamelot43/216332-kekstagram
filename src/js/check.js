

var getMessage = function (a, b) {
//Условие проверки первой переменной(булевное значение или нет?):	
if (typeof a === 'boolean') {
console.info('Переданное GIF-изображение анимировано и содержит' + b + 'кадров');
} else {
console.info('Переданное GIF-изображение не анимировано');
}
//Условие проверки первой переменной (числовое значение или нет?): 
if (typeof a === 'number') {
var multiplicationOfVariable = b * 4;
console.info('Переданное SVG-изображение содержит' + a + 'объектов и'+ multiplicationOfVariable + 'атрибутов' );
}
//Условие проверки первой переменной(массив или нет?):
if(Array.isArray(a) && !Array.isArray(b)) {
sum = 0;
for (var i = 0; i < a.length; i++) {
sum = sum + a[i];
var amountOfRedPoints=sum;
}
console.info('Количество красных точек во всех строчках изображения:' + amountOfRedPoints);
}
//Условие проверки двух переменных (a и b массивы?):
if(Array.isArray(a) && Array.isArray(b)) {
sum = 0;
for (var i = 0; i < a.length && b.length; i++) {
sum = sum + (a[i]*b[i]);
var artifactsSquare = sum;
}
console.info('Общая площадь артефактов сжатия:' + artifactsSquare + 'пикселей');
//не получается применить последнее условию со значением 'Переданы некорректные данные'
}}
console.info(getMessage());