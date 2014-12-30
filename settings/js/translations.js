﻿$(function () {

    window.getTranslations = function() {
        return {
            en: [
                { key: '[course]', value: 'Course:' },
                { key: '[start course]', value: 'Start course' },
                { key: '[finish course]', value: 'Finish course' },
                { key: '[learning objectives]', value: 'Learning objectives:' },
                { key: '[start]', value: 'Start' },
                { key: '[home]', value: 'Home' },
                { key: '[learning content]', value: 'Learning content' },
                { key: '[submit]', value: 'Submit' },
                { key: '[try again]', value: 'Try again' },
                { key: '[next]', value: 'Next' },
                { key: '[correct answer]', value: 'Correct answer' },
                { key: '[incorrect answer]', value: 'Incorrect answer' },
                { key: '[previous question]', value: 'previous' },
                { key: '[next question]', value: 'next' },
                { key: '[of]', value: 'of' },
                { key: '[to complete]', value: 'to complete' },
                { key: '[text matching question hint]', value: 'Drag items from right column to the left to match the pairs' },
                { key: '[text matching question drop here]', value: 'Drop here' },
                { key: '[statement question true text]', value: 'True' },
                { key: '[statement question false text]', value: 'False' },
                { key: '[drag and drop question all texts are placed]', value: 'All texts are placed' },
                { key: '[drag and drop question drop here]', value: 'Drop here' },
                { key: '[fill in the blank choose answer]', value: 'Choose the answer...' },
                { key: '[thank you message]', value: 'Thank you, you can close the page now' },
                { key: '[there are no questions]', value: 'No questions' },
                { key: '[browser not supported]', value: 'Your browser is currently not supported.' },
                { key: '[browser not supported hint]', value: 'Don’t worry, there is an easy fix. All you have to do is click one of the icons below and follow the instructions.' },
                { key: '[page not found title]', value: 'Page not found (404)' },
                { key: '[page not found message]', value: "Sorry, the page you have been looking for has not been found. Try checking the URL on errors, use the navigation above or click 'Home' link below." },
                { key: '[tracking and tracing header]', value: 'Your credentials for progress tracking' },
                { key: '[tracking and tracing hint]', value: 'Please enter your credentials and click "Start and report my results "to enable result tracking. Otherwise, click "Do not report, just start".' },
                { key: '[tracking and tracing name field]', value: 'Your name' },
                { key: '[tracking and tracing email field]', value: 'Your e-mail' },
                { key: '[tracking and tracing name is not valid]', value: 'Fill in your name' },
                { key: '[tracking and tracing email is not valid]', value: 'Enter a valid e-mail' },
                { key: '[tracking and tracing skip reporting]', value: 'Do not report, just start' },
                { key: '[tracking and tracing start]', value: 'Start and report my results' },
                { key: '[tracking and tracing error]', value: 'Something is wrong' },
                { key: '[tracking and tracing error hint]', value: 'If you continue without restarting, your learning results will not be reported.' },
                { key: '[tracking and tracing restart course]', value: 'Restart course' },
                { key: '[tracking and tracing continue anyway]', value: 'Continue anyway' },
                { key: '[tracking and tracing reporting progress]', value: 'reporting results...' }
            ],

            nl: [
                { key: '[course]', value: 'Cursus:' },
                { key: '[start course]', value: 'Start cursus' },
                { key: '[finish course]', value: 'Stop cursus' },
                { key: '[learning objectives]', value: 'Leerdoelen:' },
                { key: '[start]', value: 'Start' },
                { key: '[home]', value: 'Home' },
                { key: '[learning content]', value: 'Leerstof' },
                { key: '[submit]', value: 'Invoeren' },
                { key: '[try again]', value: 'Probeer opnieuw' },
                { key: '[next]', value: 'Volgende' },
                { key: '[correct answer]', value: 'Juist antwoord' },
                { key: '[incorrect answer]', value: 'Onjuist antwoord' },
                { key: '[previous question]', value: 'Vorige' },
                { key: '[next question]', value: 'Volgende' },
                { key: '[of]', value: 'van' },
                { key: '[to complete]', value: 'compleet' },
                { key: '[text matching question hint]', value: 'Sleep items van de rechterkolom naar links om kloppende paren te maken' },
                { key: '[text matching question drop here]', value: 'Plaats hier' },
                { key: '[statement question true text]', value: 'Waar' },
                { key: '[statement question false text]', value: 'Niet waar' },
                { key: '[drag and drop question all texts are placed]', value: 'Alle teksten zijn geplaatst' },
                { key: '[drag and drop question drop here]', value: 'Plaats hier' },
                { key: '[fill in the blank choose answer]', value: 'Kies het antwoord…' },
                { key: '[thank you message]', value: 'Bedankt, je kan nu de pagina sluiten' },
                { key: '[there are no questions]', value: 'Geen vragen' },
                { key: '[browser not supported]', value: 'Uw browser wordt niet ondersteund.' },
                { key: '[browser not supported hint]', value: 'Maak je geen zorgen er is een simpeleoplossing. Klik op een van de iconen beneden en volg de instructies' },
                { key: '[page not found title]', value: 'Pagina niet gevonden (404)' },
                { key: '[page not found message]', value: "Sorry, de pagina is niet gevonden. Controleer de link of klik op home." },
                { key: '[tracking and tracing header]', value: 'Je gegevens om de resultaten op te slaan' },
                { key: '[tracking and tracing hint]', value: "Vul je gegevens in en druk op 'Start en leg mijn resultaten vast'. Of klik op 'leg mijn resultaten niet vast'" },
                { key: '[tracking and tracing name field]', value: 'Naam' },
                { key: '[tracking and tracing email field]', value: 'Email' },
                { key: '[tracking and tracing name is not valid]', value: 'Vul je naam in' },
                { key: '[tracking and tracing email is not valid]', value: 'Voer een geldig email adres in' },
                { key: '[tracking and tracing skip reporting]', value: 'Leg mijn resultaten niet vast' },
                { key: '[tracking and tracing start]', value: 'Start en leg mijn resultaten vast' },
                { key: '[tracking and tracing error]', value: 'Er is iets misgegaan' },
                { key: '[tracking and tracing error hint]', value: 'Als je doorgaat worden je leerresultaten niet vastgelegd' },
                { key: '[tracking and tracing restart course]', value: 'Herstart cursus' },
                { key: '[tracking and tracing continue anyway]', value: 'Ga door' },
                { key: '[tracking and tracing reporting progress]', value: 'Resultaten vastleggen...' }
            ],
            ua: [
                { key: "[course]", value: "Курс :" },
                { key: "[start course]", value: "Почати курс" },
                { key: "[finish course]", value: "Закінчити курс" },
                { key: "[learning objectives]", value: "Мета навчання:" },
                { key: "[start]", value: "Почати" },
                { key: "[home]", value: "Головна" },
                { key: "[learning content]", value: "Навчальный матеріал" },
                { key: "[submit]", value: "Відповісти" },
                { key: "[try again]", value: "Спробувати ще" },
                { key: "[next]", value: "Далі" },
                { key: "[correct answer]", value: "Правильна відповідь" },
                { key: "[incorrect answer]", value: "Неправильна відповідь" },
                { key: "[previous question]", value: "Назад" },
                { key: "[next question]", value: "Вперед" },
                { key: '[of]', value: 'з' },
                { key: '[to complete]', value: 'для досягнення цілі' },
                { key: "[text matching question hint]", value: "Перетягніть відповіді з правої колонки до лівої таким чином, щоб вони відповідали визначенням з першої колонки" },
                { key: "[text matching question drop here]", value: "Сюди" },
                { key: "[statement question true text]", value: "Вірно" },
                { key: "[statement question false text]", value: "Невірно" },
                { key: "[drag and drop question all texts are placed]", value: "Усі тексти вже використані" },
                { key: "[drag and drop question drop here]", value: "Сюди" },
                { key: "[fill in the blank choose answer]", value: "Оберіть варіант..." },
                { key: "[thank you message]", value: "Дякуємо. Тепер сторінку можна закрити" },
                { key: "[there are no questions]", value: "Питання відсутні" },
                { key: "[browser not supported]", value: "Ваш браузер не підтримується" },
                { key: "[browser not supported hint]", value: "Не хвилюйтеся, це легко виправити. Все, що вам потрібно - це натиснути на одну з іконок, розташованих нижче і дотримуватись інструкцій" },
                { key: "[page not found title]", value: "Сторінка не знайдена (404)" },
                { key: "[page not found message]", value: "Вибачте, але сторінку, яку ви шукали, не знайдено. Спробуйте перевірити URL на помилки, використати навігацію вище або посилання на головну сторінку нижче." },
                { key: "[tracking and tracing header]", value: "Ваші дані для відправки результатів" },
                { key: "[tracking and tracing hint]", value: "Будь-ласка, вкажіть необхідні дані та натисніть \"Так, відстежувати мій прогрес\" для того, щоб відправляти результати. Якщо Ви не бажаєте відстежувати прогрес, натисніть \"Пропустити цей крок\"" },
                { key: "[tracking and tracing name field]", value: "Ваше ім'я" },
                { key: "[tracking and tracing email field]", value: "Ваша електронна адреса" },
                { key: "[tracking and tracing name is not valid]", value: "Вкажіть Ваше ім'я" },
                { key: "[tracking and tracing email is not valid]", value: "Вкажіть дійсну електронну адресу" },
                { key: "[tracking and tracing skip reporting]", value: "Пропустити цей крок" },
                { key: "[tracking and tracing start]", value: "Так, відстежувати мій прогрес" },
                { key: "[tracking and tracing error]", value: "Помилка" },
                { key: "[tracking and tracing error hint]", value: "Натисніть 'Спробувати ще'. Якщо помилка повторюється і ви бажаєте продовжити курс без відправки результатів - натисніть 'Продовжити'." },
                { key: "[tracking and tracing restart course]", value: "Спробувати ще" },
                { key: "[tracking and tracing continue anyway]", value: "Продовжити" },
                { key: "[tracking and tracing reporting progress]", value: "Надсилаемо прогресс..." }
            ]
        };
    }
});
