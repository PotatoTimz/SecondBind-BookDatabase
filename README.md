# Second Bind Interview Assignment

### Auhtor: Andre Alix

## Stack

#### Back-end: NodeJS, ExpressJS, SQLite

#### Front-end: ReactJS, Bootstrap

Additional libraries were also used like axios, cors, etc

## Install Guide

### Front-End

1. Navigate to front-end root folder "cd frontend"
2. Install node modules "npm i"
3. Run front-end "npm run dev"
4. Open the website using the link shown in the terminal example "http://localhost:5173/"

### Back-end

1. Navigate to back-end root folder "cd backend"
2. Install node modules "npm i"
3. Run back-end "npm run dev"
4. Leave open in a separate terminal while front-end is running

### NOTE: Both front and back ends should be running in separate terminals for the website to work properly

## General Info

### Front-end

The Search Screen components have all the main features needed to interact with the CRUD server. From this page alone a user can search, add, edit, and delete items from the database and download a CSV or JSON file containing the currently displayed data. The main screen has three main visible components, 1) the search bar, 2) download links, and 3) the data table. Each of these components is stylized using Bootstrap and will automatically update based on the screen width to make for a better user experience

#### 1) Search Bar:

The search bar is used to adjust the query on the front end. The basic search bar screen can query the data being displayed based on the title's name. By clicking the filter button on the search button to open the advanced search button. This will update the component to have a more advanced form that allows the user to filter using all of the book's data parameters. You will be able to filter the database based on title, author, genre, publication date range, and ISBN. Each time the parameters are changed and then entered the data table will update to only display information based on the form.

#### 2) Download Links:

There are two available download links. One for downloading a CSV file and the other for downloading a JSON file. When either button is clicked the downloaded file will reflect the current query, so books that are filtered out will not be contained inside of the downloaded file.

#### 3) Data Table:

The data table contains all of the information from the database and corresponding buttons to update or delete each item. When clicking on either button a modal will appear asking the user to either fill out a form (to update) or confirm that the user would like to make a change (delete). Above the data table is a button to add books from the website. Clicking the button will open a modal with a form used to fill in information about a book that the user wants to enter into the database.

### Back-end

The back end is created using ExpressJS and SQLite. The backend is used to store and edit the database, through using CRUD operation. Additionally, the backend contains an API to allow the client to access these crud operations.

#### Database

The database is created in the folder "database" and consists of two files.

#### 1) database.js

Automatically creates a table if there is none found in the repository. Creates the table "books" which contains 6 attributes that have additional constraints. EntryID is the primary key and will automatically be created whenever entering a book. Title and IBSN must be UNIQUE. IBSN must be of length 10 or 13 to be valid. Genres must be a part of the genre list to be considered valid.

#### 2) crud.js

Contains the SQL queries needed to perform crud operations. These functions are called by ExpressJS to perform and send the queries to the front end.

#### Server

The server contains the API which is used from the front-end to interact with the database

#### 1) Routes

Contains all the possible routes that front-end uses to interact with the back-end

#### 2) Middleware

Data validation to confirm that inputted information for updating and adding books is correct. Will return custom error messages based on the type of error that is detected.

#### 3) Controller

Functionality of each route. Interact with the database to perform CRUD operations and then send info back to the front end

#### Design Problems

1. The genre list is hard coded and each book can only be associated with one genre. Normally books can have multiple genres. This can be solved by creating additional tables to represent a many-to-many relationship.
2. Pagination can be used to further query the database so that information can be sent to the front-end in slices.
