# ТЗ

Отобразить подходящие данные из массива с учетом / без учета фильтра.

Реализация:

1) Сделать DataService
Получить TOP-250 фильмов с помощью API https://imdb-api.com/api/#IMDbList-header

Сделать сервис-обработчик ошибок http запросов.
API key добавлять через http intercepter.
Результирующий массив возвращаемый в observable методом должен содержать только поля: id, title, year, imDbRating.

2) Сделать компонент “ФИЛЬТР”Содержит 2 поля (title, year, кнопка “Искать“).
При нажатии на кнопку “Искать” передавать данные из полей в другой компонент через роутинг.

3) Второй компонент “РЕЗУЛЬТАТ”

Принимать значения из роута.
Получить данные из сервиса.
При использовании RxJS осуществить фильтрацию данных по “И” (поиск по вхождению в значение).
Отображает результат фильтрацииИспользование простых переменных (кроме хранения фильтра) нежелательно.

В идеале все реализовать с использованием RxJS цепочек / подписок / async-pipe.

# DataTest

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
