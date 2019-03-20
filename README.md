# Laravel-Vue-Quasar SPA preset

This repository is forked from [https://github.com/cretueusebiu/laravel-vue-spa](https://github.com/cretueusebiu/laravel-vue-spa). The original repository provides a Laravel-Vue preset based on Bootstrap 4. Instead of Bootstrap, this repository uses the [Quasar Framework](https://v1.quasar-framework.org/) resulting in applications with a powerful Material UI.

<p align="center">
<img src="https://i.imgur.com/MQMGsVH.png">
</p>

## Features

- Laravel 5.7 
- Vue + VueRouter + Vuex + VueI18n + ESlint
- Pages with dynamic import and custom layouts
- Login, register and password reset
- Authentication with JWT
- Socialite integration
- Quasar 1.0.0 Beta 11

## Installation

- `git clone https://github.com/HansSchouten/Laravel-Vue-Quasar-SPA.git`
- `cd Laravel-Vue-Quasar-SPA`
- `cp .env.example .env`
- Edit `.env` and set your database connection details
- `composer install`
- `php artisan key:generate`
- `php artisan jwt:secret`
- `php artisan migrate`
- `npm install` / `yarn`

## Usage

An account can be created via `/register`. After logging in via `/login` the dashboard is accessible.

### Development

```bash
# build and watch
npm run watch

# serve with hot reloading
npm run hot
```

### Production

```bash
npm run production
```

## Changelog

Please see [CHANGELOG](CHANGELOG.md) for information about the changes made on the original repository.
