# URL Shortener API

## Описание

URL Shortener API — это серверное приложение на Node.js, которое предоставляет RESTful API для сокращения URL-адресов. Это приложение позволяет пользователям отправлять длинные URL-адреса и получать короткие коды для перенаправления.

## Установка

1.  Клонируйте репозиторий:

```js
git clone <URL_ВАШЕГО_РЕПОЗИТОРИЯ>
cd url_shortener-api
```

2.  Установите зависимости:

```js
npm install
```

3. Запустите сервер:

```js
npm run dev
```

Сервер будет запущен на http://localhost:3000.

## Эндпоинты

# POST /shorten

**Описание:** Принимает JSON-объект, содержащий URL-адрес, и возвращает уникальный код для перенаправления.

**Запрос:**

URL:

```js
http://localhost:3000/shorten
```

Заголовки:
Content-Type: application/json
Тело:

```js
{
  "url": "http://google.com/q=."
}
```

## Ответ:

Успешный ответ (HTTP 200):

```js
{
  "shortcode": "c0a42b39-5799-4a0d-b353-2e090bcbbfc1",
  "redirect": "http://localhost:3000/c0a42b39-5799-4a0d-b353-2e090bcbbfc1"
}
```

Ошибка валидации (HTTP 400):

```js
{
  "error": "Invalid URL"
}
```

# GET/

**Описание:** Принимает уникальный код и перенаправляет на оригинальный URL-адрес.

**Запрос:**

URL:

```js
http://localhost:3000/:shortcode
```

**Ответ:**

Успешный ответ (HTTP 302):
Перенаправление на оригинальный URL.


Ошибка (HTTP 404):

```js
{
  "error": "Not found"
}
```

# Используемые технологии

Node.js
Express.js
UUID
Valid-url
