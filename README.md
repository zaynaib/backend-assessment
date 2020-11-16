# The TRiiBE - Backend Assessment


## Overview

This coding assignment is an opportunity for the candidate to flex their backend skills and showcase known best practices.

## The Assignment

The owner of a multi-tenant apartment building has approached you to design and develop management software to help oversee their building and its tenants. Your job is to implement the backend of the application using a database and creating an API.

## Features

### Requirements

* The application is made using Node/ES6.
* The following options are preferred for the database: MySQL, Postgres, MongoDB
* The database should contain tables for the following models
	- Tenants
	- Apartment units
* There should be a relation between the models
* The API should contain CRUD (Create-Read-Update-Delete) routes for each model
* The API should be able to retrieve the current tenant of any given unit
* The API should be able to retrieve the info of any given tenant or unit

### Nice-to-haves (Optional)
* Maintenance request tracking
* Testing
* Anything else you can think of

![alt-text](./er-diagram.png)


## How to run and install

1. Clone repo git clone git@github.com:zaynaib/backend-assessment.git
2. Install npm dependencies ```npm install```
3. Create a sql database called **apartments**  use the [SQL Schema](./app/schema.sql) file
4. Change creditianls to [.env file](.env) in order to connect the app with your database
5. Run ```node seed.js``` to create tables and rows for the database you created
6. In the terminal run node `server.js` in order to use the app
7. Test Routes in postman 

**The default port is localhost:3000**
An example on how to test routes in post man go to

```localhost:3000/api/tenants```

## Routes

### Tenant Routes

**GET**
/api/tenants
/api/tenants/:id

**POST**
/api/tenants

**UPDATE**
/api/tenants/:id

**DELETE**
/api/tenants/:id

### Unit Routes

**GET**
/api/units
/api/units/:id

**POST**
/api/units

**UPDATE**
/api/units/:id

**DELETE**
/api/units/:id

### Repair Routes

**GET**
/api/repairs
/api/repairs/:id

**POST**
/api/repairs

**UPDATE**
/api/repairs/:id

**DELETE**
/api/repairs/:id