# laravel-vue-dschool

Это репозиторий сайта автошколы, переписываемого на стек Laravel + Vue. 

Первая версия была написана на CodeIgniter, а текущая - на Yii2 (см. https://github.com/maksimmanylow/yii2-driving-school). 
Сайт переписывается раз в год (только фронт или весь стек). В качестве серверного стека используется LEMP. Хостинг dev сервера - droplet на DigitalOcean, cdn - cloudlfare.

Публичная часть сайта доступна по ссылке http://dev.voenmeh-avtoshkola.ru.
Админка http://dev.voenmeh-avtoshkola.ru/dashboard.

Сайт все еще находится в стадии разработки и тестирования.

В ближайшее вемя будет интегрирован SMS-шлюз.

## Deploy

```
composer dump-autoload
php artisan migrate:fresh
php artisan db:seed
php artisan passport:install
```

## Использование Redis для очередей уведомлений

### Установка Redis

Весь процесс отлично описан в (статье)[https://www.digitalocean.com/community/tutorials/how-to-install-and-secure-redis-on-ubuntu-18-04] от Mark Drake на DigitlOcean.

Здесь заметки для себя, пока проект не вышел в релиз.

Чтобы установить Redis на Ubunru 18.04 используйте следующие команды
```language-bash
sudo apt update
sudo apt install redis-server
```

Еще следует настроить Redis
```language-bash
sudo vim /etc/redis/redis.conf
```

Набираем ```/supervised``` и находим нужную строку, устанавливаем значение 
```
supervised systemd
```

Перезагрузка Redis
```language-bash
sudo systemctl restart redis.service
```


Статус Redis
```language-bash
sudo systemctl status redis
```

### Настройка Laravel приложения

Нам нужен ```.env``` файл в корне проекта.

```
QUEUE_DRIVER=redis
REDIS_HOST=127.0.0.1
REDIS_PASSWORD=null
REDIS_PORT=6379

MAIL_DRIVER=smtp
MAIL_HOST=smtp.mailtrap.io
MAIL_PORT=2525
MAIL_USERNAME=user
MAIL_PASSWORD=password
MAIL_ENCRYPTION=null
```

### Установка драйвера

```
composer require predis/predis
```

### Установка и конфигурация Supervisor-а

```
sudo apt-get install supervisor
cd /etc/supervisor/conf.d
vim laravel-worker.conf
```
Посмотреть пример можно в корне проекта, который так и называется ```laravel-worker.conf```.

```
sudo supervisorctl reread
sudo supervisorctl update
sudo supervisorctl start laravel-worker:*
```

Источник: https://medium.com/modulr/api-rest-with-laravel-5-6-175eea5db3e8
