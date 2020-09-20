# CodingChallenge

- [Introduction](#introduction)
- [Used frameworks and tools](#used-frameworks-and-tools)
- [Getting Started](#getting-started)
- [Tests](#tests)
- [Linting](#linting)
- [Build and Deployment](#build-and-deployment)
  * [Docker](#docker)
  * [Manual](#manual)

<small><i><a href='http://ecotrust-canada.github.io/markdown-toc/'>Table of contents generated with markdown-toc</a></i></small>

# Introduction

This project was created to demonstrate how I would setup a simple sign-up form. The form itself has the following requirements...

* The form should allow users to enter first name, last name, email, and password.
* All fields are required.
* Password validation:
  * Should be a minimum of eight characters,
  * Should contain lower and uppercase letters,
  * Should not contain user’s first or last name.
* Email should be validated but there are various ways of accomplishing this. So, show us what you consider as a proper email validation.

# Used frameworks and tools
* [Angular](http://angular.io/)
* [Bootstrap](https://getbootstrap.com/)
* [NgRx](https://ngrx.io/)

# Getting Started

After cloning this repository, install the dependencies.
```
npm install
```

To serve the project locally, run the following command...
```
npm run start
```
The app can now be reached by visiting `http://localhost:4200`. The browser will automatically refresh when the code is updated.

# Tests
Unit tests can be executed and developed by running the following command...
```
npm run test
```

# Linting
To check the code for any potential linting errors, run...
```
npm run lint
```

# Build and Deployment

## Docker
To create and run the Docker image locally, first [download Docker Desktop](https://www.docker.com/get-started).

To build an image, run the following command...
```
docker build --tag coding-challenge:1.0 .
```

And to run the image...
```
docker run --publish 80:80 coding-challenge:1.0  
```

You can now access the project by visiting `http://localhost`.

## Manual
To build the project, run...
```
npm run build
```

or the following command if you wish to build for production...
```
npm run build:prod
```

Deploy the files in `dist/coding-challenge` to your server.
