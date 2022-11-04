# Object-Relational-Mapping-ORM-E-Commerce-Back-End
Module 13 Challenge

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [Features](#features)
- [License](#license)

## Description

## User Story

```md
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```

## Acceptance Criteria

```md
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete data in my database
```


## Installation

* Clone this repository to your local machine.

* Right click on server.js and select "Open in Integrated Terminal"

* There should be a package.json file included. To install the various npm packages used run the command
```md
npm i
```

If you do not have Insomnia installed for testing download it here:
https://insomnia.rest/download

## Usage

Update the env.EXAMPLE file name to .env (delete .EXAMPLE from the name) and update with your username and password for MySql.

Once everything is installed and updated with your information, run the following commands to create your database, tables, and put seed information to get started.
```md
mysql - u root -p

<yourpassword>

SOURCE db/schema.sql;

exit

npm run seed
``` 

Run the following command to get the server running
```md
node server.js
``` 
Then use Insomnia to test the various functions.

* View all categories 
    * GET http://localhost:3001/api/categories
* View one category (id 1)
    * GET http://localhost:3001/api/categories/1
* Add a category
    * PUT http://localhost:3001/api/categories
    JSON
    ```md
        {
   "category_name": "Instruments",
  }
    ``` 
* Update a category (id 6)
    * PUT - http://localhost:3001/api/categories/6 
    JSON
    ```md
        {
   "category_name": "Electric Guitar",
  }
    ``` 
* Delete a category (id 6)
    * DELETE http://localhost:3001/api/categories/6 

* View all products 
    * GET http://localhost:3001/api/products
* View one product (id 1)
    * GET http://localhost:3001/api/products/1
* Add a product
    * PUT http://localhost:3001/api/products
    JSON
    ```md
        {
   "product_name": "Guitar",
    "price": 1500.00,
    "stock": 5,
    "tagIds":[1,2,3],
		"category_id":6
  }
    ``` 
* Update a product (id 6)
    * PUT - http://localhost:3001/api/products/6 
    JSON
    ```md
        {
   "product_name": "Electric Guitar",
    "price": 1500.00,
    "stock": 5,
    "tagIds":[1,2,3],
		"category_id":6
  }
    ``` 
* Delete a product (id 6)
    * DELETE http://localhost:3001/api/products/6 

* View all tags 
    * GET http://localhost:3001/api/tags
* View one tag (id 1)
    * GET http://localhost:3001/api/tags/1
* Add a tag
    * PUT http://localhost:3001/api/tags
    JSON
    ```md
        {
   "tag_name": "Guitar",
  }
    ``` 
* Update a tag (id 9)
    * PUT - http://localhost:3001/api/tags/9 
    JSON
    ```md
        {
   "tag_name": "Instruments",
  }
    ``` 
* Delete a tag (id 9)
    * DELETE http://localhost:3001/api/tags/9 



See video below for walkthrough.

https://drive.google.com/file/d/1697SDLxzi7AgFPcfzPlU_L_Q0Le51tCk/view


## Credits

Sequelize
https://www.npmjs.com/package/sequelize
https://sequelize.org/docs/v6/core-concepts/model-basics/#concept
https://sequelize.org/docs/v6/core-concepts/validations-and-constraints/

MySql2
https://www.npmjs.com/package/mysql2

Dotenv
https://www.npmjs.com/package/dotenv

Express
https://expressjs.com/

## Features

### Database Models

Four models, including the requirements listed for each model:

* `Category`

  * `id`

    * Integer.
  
    * Doesn't allow null values.
  
    * Set as primary key.
  
    * Uses auto increment.

  * `category_name`
  
    * String.
  
    * Doesn't allow null values.

* `Product`

  * `id`
  
    * Integer.
  
    * Doesn't allow null values.
  
    * Set as primary key.
  
    * Uses auto increment.

  * `product_name`
  
    * String.
  
    * Doesn't allow null values.

  * `price`
  
    * Decimal.
  
    * Doesn't allow null values.
  
    * Validates that the value is a decimal.

  * `stock`
  
    * Integer.
  
    * Doesn't allow null values.
  
    * Set a default value of `10`.
  
    * Validates that the value is numeric.

  * `category_id`
  
    * Integer.
  
    * References the `Category` model's `id`.

* `Tag`

  * `id`
  
    * Integer.
  
    * Doesn't allow null values.
  
    * Set as primary key.
  
    * Uses auto increment.

  * `tag_name`
  
    * String.

* `ProductTag`

  * `id`

    * Integer.

    * Doesn't allow null values.

    * Set as primary key.

    * Uses auto increment.

  * `product_id`

    * Integer.

    * References the `Product` model's `id`.

  * `tag_id`

    * Integer.

    * References the `Tag` model's `id`.

## License

MIT License

Copyright (c) 2022 Felisha

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.