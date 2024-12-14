--------------------------------------------------------------------------------Steps to Set Up the Project and run on Localhost---------------------------


1. Clone the Repository
The first step is to clone the repository to your local machine. Open your terminal/command prompt and run the following command:

git clone <repository-url>
Replace <repository-url> with the URL of your repository (e.g., https://github.com/username/repository.git).

2. Install Dependencies for Frontend and Backend
After cloning the repository, navigate into the project directory:

bash
Copy code
cd <repository-folder-name>
For Frontend (React):
Navigate to the frontend folder (if it's separate):
bash
Copy code
cd frontend
Install the necessary dependencies using npm:
bash
Copy code
npm install
For Backend (Node.js):
Navigate to the backend folder (if it's separate):
bash
Copy code
cd backend
Install the backend dependencies:
bash
Copy code
npm install

3. Start the Frontend Server
To start the frontend server (React), run the following command in the frontend folder:

bash
Copy code
npm run dev
This will start the frontend server, typically accessible at http://localhost:3000.

4. Start the Backend Server
To start the backend server (Node.js), run the following command in the backend folder:

bash
Copy code
node server.js
This will start the backend server, typically accessible at http://localhost:8080 (or another port if configured differently).

5. Access the Application
Frontend: Open your browser and go to http://localhost:3000 to access the frontend of the application.
Backend: The backend API should be running on http://localhost:8080 (or whichever port you've configured).

6. Admin Login Credentials
To access the admin section of the application, use the following login credentials:

Email (ID): admin@gmail.com
Password: 12345


-------------------------------------------------------------------------------------------Project Features-----------------------------------------------------------------------------------------------------------
Landing Page
The landing page is the public-facing interface designed to engage users and present information dynamically fetched from the backend. Key components include:

-----{"Our Project" Section:}---

Showcases all available projects retrieved from the backend.
Each project entry displays:
A project image.
Name of the project.
A brief description.
A non-functional "Read More" button for UI purposes.
Purpose: Highlights the work portfolio in a visually appealing way.





-----{ "Happy Clients" Section }----

Displays a list of satisfied clients fetched from the backend.
Each client entry includes:
Client’s image.
Name of the client.
Their designation (e.g., CEO, Developer, etc.).
A short description or testimonial.
Purpose: Builds trust by showcasing client relationships.


------{Contact Form}--------

A form where users can enter their personal details to get in touch.
Input fields include:
Full Name.
Email Address.
Mobile Number.
City.
Submitted data will be sent to the backend and stored for administrative purposes.
Purpose: Provides a way for users to connect with the company.


-----{Newsletter Subscription Section}----

Allows users to subscribe to newsletters by providing their email address.
The entered email will be sent to the backend for storage.
Purpose: Expands the company’s outreach by building a subscription list.
Admin Panel
The admin panel is the backend management interface, accessible only to authorized administrators. It allows admins to perform CRUD (Create, Read, Update, Delete) operations on various data entities. Key functionalities include:

----{ Project Management}-----

Add new projects by entering:
Project Image.
Name.
Description.
View, edit, and delete existing project entries.
Purpose: Keeps the project portfolio up-to-date.



----{Client Management}---

Add client details including:
Client Image.
Name.
Description.
Designation (e.g., CEO, Designer).
View and manage client data.
Purpose: Maintains a database of client relationships.


-----{Contact Form Details}----

View all user-submitted contact form entries with the following details:
Full Name.
Email Address.
Mobile Number.
City.
Purpose: Provides insights into potential leads or inquiries.

{ Newsletter Subscription Management:}

View a list of all email addresses subscribed to the newsletter.

