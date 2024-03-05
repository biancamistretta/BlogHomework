# BlogHomework
This web application allows developers to publish articles, blog posts, and share their thoughts and opinions on various technical topics. Users can sign up, log in, create, edit, and delete their blog posts, as well as leave comments on posts by other users.

Features
User Authentication: Users can sign up for an account, log in, and log out securely.
Blog Post Management: Authenticated users can create, edit, and delete their blog posts from their dashboard.
Users can leave comments on blog posts.
Responsive Design: The site is designed to be mobile-friendly and accessible on different devices.

Technologies Used

Frontend:

HTML
CSS (with Bootstrap for styling)
JavaScript (with Fetch API for AJAX requests)
Handlebars.js for templating

Backend:

Node.js
Express.js
Sequelize.js (ORM for MySQL)
Passport.js for authentication
Database:

MySQL
Getting Started
To run this project locally, follow these steps:

Clone the repository:

bash
Copy code
git clone https://github.com/your-username/cms-blog-site.git
Navigate to the project directory:

bash
Copy code
cd cms-blog-site
Install dependencies:

bash
Copy code
npm install
Set up environment variables:

Create a .env file in the root directory.

Define the following environment variables:

plaintext
Copy code
PORT=3000
DB_USERNAME=your_database_username
DB_PASSWORD=your_database_password
DB_DATABASE=your_database_name
DB_HOST=localhost
SESSION_SECRET=your_session_secret

Initialize the database:

Ensure MySQL is running.

Run migrations to create the necessary tables:

bash
Copy code
npx sequelize-cli db:migrate
Start the server:

bash
Copy code
npm start
Access the site in your web browser at http://localhost:3000.

License
This project is licensed under the MIT License.
