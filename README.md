# createuser
A simple form to add user

This is just a simple form for adding/registering a new user. The form design I used was created by "Coding Market"
this is his youtube channel https://www.youtube.com/channel/UCtVM2RthR4aC6o7dzySmExA and I choose a different 
background which I found on Pexel by: Photo by Miguel Á. Padriñán from Pexels. I used Nodejs as a backend and 
JS, HTML, CSS for the front and as a DB I used mysql, below the query to create the db and its table.

CREATE TABLE user_registration.user (
id INT UNIQUE AUTO_INCREMENT,
first_name VARCHAR(50) NOT NULL,
last_name VARCHAR(25) NOT NULL,
username VARCHAR(25) NOT NULL,
email VARCHAR(25) NOT NULL,
password VARCHAR(25) NOT NULL,
PRIMARY KEY (id)
)

This is just a simple exercise I know it can be done in a much neeter way but for the sake of learning and not 
getting stuck with perfecting something simple and basic I was happy with what I did.


