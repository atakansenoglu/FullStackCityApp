# FullStackCityApp
City App with React.js, Node.js, MySql, Sequelize

### Features
- City based search for city coordinates and weather information.
- Used technologies: nodejs, expressjs, Sequelize ORM, MySql, XAMPP and Reactjs.

### Installation 
- First, install node modules in both project folders. This will install required node packages like; express, mysql2...
- `$ npm install`
- Then configure your database information in dbConfig file under /server/config folder.
- Use nodemon to start the server. When server starts it will create a new table called "cities" in MySql.
- `$ nodemon`
- Lastly, cd to /client folder and type in to console
- `$ npm start`

### Testing with React.js
- You can enter a city name to input box and store coordinates information instantly database
- You can list all cities in database by clicking to the link

### Testing the server side with Postman
- You can test server side with these routes:
- `$ "/", Main Page, GET`
- `$ "/listAll", City List, GET`
