var questions = [
    {
        type: "choose",
        question: "Уберите лишнее из основных концепций ООП",
        answers: [
            "Наследование",
            "Полиморфизм",
            "Абстракция",
            "Инкапсуляция"
        ],
        correct: [3]
    },
    {
        type: "choose",
        question: "Какой из вариантов объявления функции в JavaScript правильный: <code>var func = function() {};</code> или <code>function func() {}</code>",
        answers: [
            "function func() {}",
            "Оба варианта правильные",
            "Оба варианта неправильные",
            "var func = function() {};"
        ],
        correct: [2]
    },
    {
        type: "choose",
        question: "Есть строка на PHP: $str = \"123456\". Как из этой строки получить подстроку \"5\"?",
        answers: [
            "$str[5];",
            "$str[6];",
            "$str[];",
            "$str[4];"
        ],
        correct: [4]
    },
    {
        type: "choose",
        question: "Какого оператора в PHP не существует?",
        answers: [
            "!===",
            ">=",
            "!==",
            "+="
        ],
        correct: [1]
    },
    {
        type: "choose",
        question: "Как сделать редирект (например, на google.ru) на PHP?",
        answers: [
            "header(\"Location: http://google.ru\");",
            "location.href = \"http://google.ru\";",
            "header(\"Redirect: http://google.ru\");",
            "document.location = \"http://google.ru\";"
        ],
        correct: [1]
    },
    {
        type: "choose",
        question: "Есть в PHP массив $aParams. Как вывести все элементы массива $aParams?",
        answers: [
            "print_r($aParams);",
            "print $aParams;",
            "echo $aParams;",
            "Это возможно сделать только через цикл."
        ],
        correct: [1]
    },
    {
        type: "choose",
        question: "Каков результат выполнения у данного скрипта:<br/> <code>&lt;?php <br/> $x = 5;<br/> echo 'Переменная $x = 5';<br/> ?&gt;</code>",
        answers: [
            "Ошибка, поскольку строки с переменными должны быть всегда в двойных кавычках.",
            "Переменная x = 5",
            "Переменная $x = 5",
            "Переменная 5 = 5"
        ],
        correct: [3]
    },
    {
        type: "choose",
        question: "Какой селектор CSS написан с ошибкой?",
        answers: [
            "input.text",
            "div p",
            "input[\"text\"]",
            "input[type=\"text\"]"
        ],
        correct: [3]
    },
    {
        type: "choose",
        question: "В каком из представленных ниже вариантов содержится явная ошибка:",
        answers: [
            "p text (font-size: 150%;}",
            "p span#text (font-size: 150%;}",
            "p span {font-size: 150%;}",
            "p {font-size: 150%;}"
        ],
        correct: [1]
    },
    {
        type: "choose",
        question: "Какое принципиальное отличие в HTML селектора ID от селектора CLASS?",
        answers: [
            "Никакого отличия между ними нет.",
            "Разница только в наборе свойств, который может быть использован для этих селекторов. Например, для ID нельзя задавать свойство border, а для CLASS можно.",
            "CLASS должен быть уникальным на странице, а одинаковый ID может быть у нескольких элементов.",
            "ID должен быть уникальным на странице, а одинаковый CLASS может быть у нескольких элементов."
        ],
        correct: [4]
    },
    {
        type: "choose",
        question: "Какой вариант задания цвета НЕ сработает?",
        answers: [
            "color: #000;",
            "color: #hhh;",
            "color: #aaa;",
            "color: #aaaaaa;"
        ],
        correct: [2]
    },
    {
        type: "choose",
        question: "Какое свойство используется для задания полей у блока?",
        answers: [
            "direction",
            "padding",
            "position",
            "margin"
        ],
        correct: [2]
    },
    {
        type: "choose",
        question: "Как в SQL удалить таблицу \"my_table\":",
        answers: [
            "DELETE \"my_table\"",
            "DELETE FROM \"my_table\"",
            "DROP TABLE \"my_table\"",
            "DELETE TABLE \"my_table\""
        ],
        correct: [3]
    },
    {
        type: "choose",
        question: "Что делает в SQL конструкция: <br/> <code>ORDER BY ASC</code>",
        answers: [
            "ASC вообще не существует",
            "ASC - это функция, которая здесь некорректно использована",
            "Сортирует записи по убыванию",
            "Сортирует записи по возрастанию"
        ],
        correct: [4]
    },
    {
        type: "choose",
        question: "Выберите верное утверждение относительно индекса в SQL:",
        answers: [
            "Индекс позволяет сэкономить место, занимаемое таблицей",
            "Индекс позволяет ускорить выборку с тем полем, для которого он сделан",
            "Индекс ускоряет добавление записей в таблицу",
            "Индекс ускоряет абсолютно любые запросы с таблицей"
        ],
        correct: [2]
    }
];