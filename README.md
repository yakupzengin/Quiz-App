# 🧩 Quiz Application
This application contains a simple quiz or exam interface. Users can participate in quizzes with a specific number of questions at different difficulty levels. The app fetches quiz questions from an external API and presents them to the user.


## 🚀 How to Run
- Clone the project or download it as a ZIP file.
- Navigate to the project directory and open the terminal.
- Run `npm install` or `yarn install` to install the necessary dependencies.
- Start the application by running `npm start` or `yarn start` command.
- Go to `localhost:3000` in your browser (or the port number specified in the terminal).



## 🛠️ Technologies Used and Main Files
- **React:** The JavaScript library that forms the foundation of the application.
- **React Router:** Used for page routing.


### 📂 Main Files and Functions
- **App.js:** Contains the main component of the application and manages page routing.
- **Introduce.js:** Presents options for users to start the quiz.
- **Quiz.js:** Creates the quiz component, displaying questions and the quiz screen.
- **QuestionCard.js:** Displays questions and allows users to answer them.
- **Modal.js:** Displays the user's score at the end of the quiz and offers the option to restart.
- **Dropdown.js:** Component for selecting the difficulty level.
- **api.js:** Fetches quiz data from an external API.

📝 **Notes**
- The application fetches and displays quiz data from an external API.
- Questions are shuffled randomly.
- At the end of the quiz, users can view their score and optionally restart the quiz.


## 💡 Example Usage
The application generally follows the steps below:

1. The user selects the difficulty level on the start screen.
2. The user clicks the "Start Quiz" button.
3. On the quiz screen, the user answers the questions and earns points for each correct answer.
4. At the end of the quiz, the user can view their score and optionally restart.
