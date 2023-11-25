# Tech Blog Application (Work in Progress)

This is a basic CMS-style blog site built using the Model-View-Controller (MVC) architecture. The application is designed for developers to publish their blog posts and comment on other developers' posts.

Please note that this is a work in progress, and some functionalities may not be fully implemented. The current version provides code structure and examples, but certain features may not work as intended.

## Installation

To run this application locally, follow these steps:

1. Clone the repository to your local machine.
2. Install the required npm packages:


npm install

Set up your MySQL database by running the SQL script provided in the db folder:

mysql -u your_username -p < db/schema.sql
Create a .env file in the root directory with your database credentials:

env
Copy code
DB_USERNAME=your_username
DB_PASSWORD=your_password
DB_DATABASE=techblog_db
DB_HOST=localhost
Run the application:

npm start
Access the application in your web browser at http://localhost:3000.

Issues and Future Updates
This version of the application serves as a starting point, and certain features are not fully implemented. Future updates will address the following:

Authentication and user sessions
Comment functionality
Dashboard features for creating, updating, and deleting blog posts
Improved styling and user interface
Please be aware that this application is a part of ongoing development, and updates will be made to enhance its functionality and user experience.

## Contributing
Contributions are welcome! If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request.

## License
This project is licensed under the MIT License.