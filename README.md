# CodingChallenge

This project was created to demonstrate how I would setup a simple sign-up form. The form itself has the following requirements...

* The form should allow users to enter first name, last name, email, and password.
* All fields are required.
* Password validation:
  * Should be a minimum of eight characters,
  * Should contain lower and uppercase letters,
  * Should not contain user’s first or last name.
* Email should be validated but there are various ways of accomplishing this. So, show us what you consider as a proper email validation.


## Used frameworks and tools
* [Angular](http://angular.io/)
* [Bootstrap](https://getbootstrap.com/)
* [NgRx](https://ngrx.io/)

## Getting Started

After cloning this repository, install the dependencies.
```
npm install
```

To serve the project locally, run the following command...
```
npm run serve
```

The app can now be reached by visiting `http://localhost:4200`.

## Tests
Unit tests can be served and deveoped by running the following command...
```
npm run test
```

## Build and Deployment

To build the project, run...
```
npm run build
```

or the following command if you wish to build for production...
```
npm run build:prod
```

Deploy the files in `dist/coding-challenge` to your server.
