// Сделал скрипт для получения случайного текста с сайта fish-text.ru
let xhr = new XMLHttpRequest();
let type = 'paragraph'; // тип получаемого контента (абзацы)
let number = 2; // количество абзацев
let params = '&type=' + type + '&number=' + number;
function Lorem() {
    xhr.open('GET', 'https://fish-text.ru/get?' + params, false);
    xhr.send();
    let result = JSON.parse(xhr.response);
    if (result.status === 'success') {
        return result.text;
    } else {
        return result.errorCode + '\n' + result.text;
    }
}
