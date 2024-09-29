# Project:  PayKids

PayKids is a multi-page React application, that allows children to customise their own virtual debit cards and bank account user interface.

The application uses React, Postgres, Node and Express.

## PayKids: Landing Page and Login Form
!["Screenshot of URLs page"](https://github.com/nsagias/lhl_final/blob/master/docs/01_landing_login_page.gif)


## PayKids: Dashboard
!["Screenshot of URLs page"](https://github.com/nsagias/lhl_final/blob/master/docs/02_dashboard.gif)


## PayKids: Request Money Form
!["Screenshot of URLs page"](https://github.com/nsagias/lhl_final/blob/master/docs/03_request_money.gif)


## PayKids: Personalise Virtual Debit Card
!["Screenshot of URLs page"](https://github.com/nsagias/lhl_final/blob/master/docs/04_choose_cards.gif)


## PayKids: Personalise Account User Interface Theme
!["Screenshot of URLs page"](https://github.com/nsagias/lhl_final/blob/master/docs/05_choose_theme.gif)


## PayKids: Logout Screen to Landing Page
!["Screenshot of URLs page"](https://github.com/nsagias/lhl_final/blob/master/docs/06_logout.gif)



## Frontend Dependencies
- React                       ^16.9.0 
- React-dom                   ^17.0.2
- React-router-dom            ^6.0.2
- React-scripts                4.0.3
- Axios                       ^0.24.0
- Muicss                      ^0.10.3
- Testing-library/react       ^8.0.7
- Testing-library/react-hooks  7.0.2
- Testing-library/jest-dom    ^4.0.0

## Backend Dependencies
- chalk                       ^4.1.2
- cookie-parser               ~1.4.4
- cookie-session              ^1.4.0
- cors                        ^2.8.5
- debug                       ~2.6.9
- dotenv                      ^10.0.0
- express                     ~4.16.1
- morgan                      ~1.9.1
- pg                          ^8.7.1
- pg-native                   ^3.0.0 
- uuid                        ^8.3.2


## Getting Started
- Use the following Frontend and Backend to install dependencies

```sh
npm install
```

## Know Package Version Issue 
- Use the following install command if there is a Muicss version error

```sh
npm install --save muicss --legacy-peer-deps
```

## Running Webpack Developmement Server or Express
- Use the following command to start the frondend and backend from within each app root directory

```sh
npm start
```

## Seeding The Database
- Seed and reset the database using the following command

```sh
npm db:reset
```

## TODO:
- Add schemas and seed data for updated frontend
- Create new backend endpoints
- Refactor 
- Create Parents UI/UX



## NOTE:  The creative commons license is meant for the app design and user interfaces 

Shield: [![CC BY-NC-SA 4.0][cc-by-nc-sa-shield]][cc-by-nc-sa]

This work is licensed under a
[Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License][cc-by-nc-sa].

[![CC BY-NC-SA 4.0][cc-by-nc-sa-image]][cc-by-nc-sa]

[cc-by-nc-sa]: http://creativecommons.org/licenses/by-nc-sa/4.0/
[cc-by-nc-sa-image]: https://licensebuttons.net/l/by-nc-sa/4.0/88x31.png
[cc-by-nc-sa-shield]: https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-lightgrey.svg
