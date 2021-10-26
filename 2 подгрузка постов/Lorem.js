// Сделал скрипт для получения случайного текста с сайта fish-text.ru
// Сильно не мудрил, взял образец из примера FishText API немного переделал
// Пытался сделать сделать, чтоб в каждом посте был разный текст, но, так и не понял как это реализовать)
let xhr = new XMLHttpRequest();
let type = 'paragraph'; // тип получаемого контента (абзацы)
let number = 2; // количество абзацев
let params = '&type=' + type + '&number=' + number;
xhr.open('GET', 'https://fish-text.ru/get?' + params, false);
let text = null;
xhr.send();
let result = JSON.parse(xhr.response);
if (result.status === 'success') {
    text = result.text;
} else {
    console.log(result.errorCode + '\n' + result.text);
}
