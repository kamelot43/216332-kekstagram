

var getMessage = function (theFirstVariable, theSecondVariable) {
//Условие проверки первой переменной(булевное значение или нет?):	
if (typeof theFirstVariable === 'boolean') {
console.info('Переданное GIF-изображение анимировано и содержит' + theSecondVariable + 'кадров');
} else {
console.info('Переданное GIF-изображение не анимировано');
}
//Условие проверки первой переменной (числовое значение или нет?): 
if (typeof theFirstVariable === 'number') {
var multiplicationOfVariable = theSecondVariable * 4;
console.info('Переданное SVG-изображение содержит' + theFirstVariable + 'объектов и'+ multiplicationOfVariable + 'атрибутов' );
}
//Условие проверки первой переменной(массив или нет?):
if(Array.isArray(theFirstVariable) && !Array.isArray(theSecondVariable)) {
sum = 0;
for (var i = 0; i < theFirstVariable.length; i++) {
sum = sum + theFirstVariable[i];
var amountOfRedPoints=sum;
}
console.info('Количество красных точек во всех строчках изображения:' + amountOfRedPoints);
}
//Условие проверки двух переменных (a и b массивы?):
if(Array.isArray(theFirstVariable) && Array.isArray(theSecondVariable)) {
sum = 0;
for (var i = 0; i < theFirstVariable.length && theSecondVariable.length; i++) {
sum = sum + (theFirstVariable[i]*theSecondVariable[i]);
var artifactsSquare = sum;
}
console.info('Общая площадь артефактов сжатия:' + artifactsSquare + 'пикселей');
//не получается применить последнее условию со значением 'Переданы некорректные данные'
}}
console.info(getMessage());