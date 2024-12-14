Steps to Set Up the Project
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
Password: 54321
