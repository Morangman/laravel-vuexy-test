<p align="center"><img src="https://laravel.com/assets/img/components/logo-laravel.svg"></p>

## Тестовое задание Laravel, vuexy, REST API

Сайт запускается на хосте - https://assignment.sinepolsky.website/

Использовались:

- vuexy (free)
- vue js (2)
- axios
- vue-router
- bootstrap

Для запуска сидера наполения данных:

<code>docker exec laravel_vuexy_app php artisan db:seed</code>

Сборка локального проекта

1) <code>docker-compose up --build</code>
2) создать файл с настройками <code>cp .env.example .env</code> (настроить конфигурацию)
3) <code>docker exec laravel_vuexy_app composer install --ignore-platform-reqs</code>
4) <code>docker exec laravel_vuexy_app php artisan config:cache</code>
5) <code>docker exec laravel_vuexy_app php artisan migrate</code>
6) <code>docker exec laravel_vuexy_app php artisan db:seed</code>
7) <code>docker exec laravel_vuexy_app php composer dump-autoload</code>
8) <code>docker exec laravel_vuexy_app npm install</code>

##

Локальная ссылка - http://localhost/

phpMyAdmin на - http://localhost:8080/ пароль и логин root таблица root

Установка пакетов laravel через <code>docker exec laravel_vuexy_app composer require package/name</code>

Для сборки фронта запускаем <code>docker exec laravel_vuexy_app npm run dev|watch|prod</code>

Установка пакетов npm через <code>docker exec laravel_vuexy_app npm i package-name</code>

### Конфигурация

Версия php: <code>8.0</code><br>
Версия NodeJS: <code>16.19.0</code><br>
Версия npm: <code>8.19.3</code><br>
Версия Laravel: <code>^8.75</code><br>
