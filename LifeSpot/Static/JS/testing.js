﻿
    // для получения пользовательского ввода самое простое - воспользоваться конструкцией prompt()
    let userName = prompt("Пожалуйста, введите ваше имя");
alert(`Приветствуем, ${userName}. В вашем имени ${userName.length} символов`);

let elements = document.getElementsByTagName('*');

// Выведем результат в уведомление
alert(`Количество элементов на странице:  ${elements.length}`);
