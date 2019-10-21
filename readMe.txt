Here I have used express with sequelize (ORM - Object Relation Mapping for NodeJs)

In this project structure we can find the 

- config folder which contains the development, test and production database related data

- migrations folder which contains all the migration files to keep all the track of database changes and
    by running the
    - sequelize migration:generate --name table_name  // command to create migration file
    - sequelize db:migrate // command to migrate will create all the tables in database

- model folder which contains the index.js file which is used for the database connection using sequelize

- public folder will contain all the assets that need to shared to the whole project

- seeders folder will contain all the seeding files which insert the test data in the database tables.
    - sequelize seed:generate --name tablename_comments  // command to create migration file
    - sequelize db:seed:all // command to seed to database

- src folder which contains the folders like controllers, constants and routes.
    - controllers folder will contain all the business logic of our application in terms of different files
    - routes will contain all the routes that are defined to the project
    - constants folder will contain the files where all the static data is used through out the application

- utils folder will contain files where the similar re usable functionalities are stored in these files and
    these will be imported whenever required

- app.js is the main file which helps in running the server

- package.json file will contain all the metadata and the dependencies of the project

- In this project I have Jwt token for the user validation used as an middleware