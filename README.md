# Second Bind Interview Assignment

### Auhtor: Andre Alix 

## Stack 
#### Back-end: NodeJS, ExpressJS, SQLite
#### Front-end: ReactJS, Bootstrap
Additional libraries were also used like axios, cors, etc

## Install Guide

### Front-End
1) Navigate to front-end root folder "cd frontend"
2) Install node modules "npm i"
3) Run front-end "npm run dev"
4) Open the website using the link shown in the terminal example "http://localhost:5173/"

### Back-end
1) Navigate to back-end root folder "cd backend"
2) Install node modules "npm i"
3) Run back-end "npm run dev"
4) Leave open in a separate terminal while front-end is running

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
