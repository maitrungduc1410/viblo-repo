# viblo-repo
This repo is used for examples in my blog

How to run:
* clone the app
* run: `composer install` and `npm install`
* create your own `.env` file
* run: `php artisan migrate` to create table (remember to launch XAMPP)
* finally run these commands:
  ```
  php artisan serve
  npm run dev
  laravel-echo-server start
  ```
  Then go to `http://localhost:8000/chat`, open another tab to test. have fun :)
