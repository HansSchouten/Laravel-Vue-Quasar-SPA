# Laravel-Vue-Quasar SPA preset

This repository is forked from [https://github.com/cretueusebiu/laravel-vue-spa](https://github.com/cretueusebiu/laravel-vue-spa). The original repository provides a Laravel-Vue preset using Bootstrap 4. Instead of Bootstrap, this repository uses the [Quasar Framework](https://v1.quasar-framework.org/) providing applications with a Material UI.

<p align="center">
<img src="https://i.imgur.com/NHFTsGt.png">
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

- `composer create-project --prefer-dist cretueusebiu/laravel-vue-spa`
- Edit `.env` and set your database connection details
- (When installed via git clone or download, run `php artisan key:generate` and `php artisan jwt:secret`)
- `php artisan migrate`
- `npm install` or `yarn`

## Usage

#### Development

```bash
# build and watch
npm run watch

# serve with hot reloading
npm run hot
```

#### Production

```bash
npm run production
```

## Changelog

Please see [CHANGELOG](CHANGELOG.md) for more information what has changed recently.
