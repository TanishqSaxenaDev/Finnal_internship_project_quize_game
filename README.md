# 🎯 Ultimate Quiz Challenge

An interactive **100-question quiz application** built with **HTML, CSS, and Vanilla JavaScript**. Test your knowledge across five different categories with randomized questions, real-time scoring, progress tracking, instant feedback, and a responsive modern interface.

## ✨ Features

* 🎮 **100 Questions** across 5 categories
* 🎲 **Randomized Questions** for a different experience every time
* 📊 **Real-time Score & Progress Tracking**
* ✅ **Instant Correct/Wrong Answer Feedback**
* 🏆 **Performance-based Grading System**
* 🎨 **Modern UI** with gradients, animations, and transitions
* 📱 **Fully Responsive** on desktop, tablet, and mobile
* 🔄 **Replay Support** with shuffled questions
* 🏷️ **Category Badges** for every question
* ♿ **Keyboard-friendly interaction**
* ⚡ **Zero External Dependencies**
* 🌐 **Works Offline**

## 📚 Quiz Categories

| Category                         | Questions | Topics                                                |
| -------------------------------- | --------: | ----------------------------------------------------- |
| 🌍 General Knowledge & Geography |        20 | Countries, capitals, facts, arts & literature         |
| 💻 Technology & Computing        |        20 | Hardware, software, programming, internet             |
| 📜 History & Politics            |        20 | Historical events, civilizations, political movements |
| ⚽ Sports & Entertainment         |        20 | Sports, movies, music, television, Olympics           |
| 🔬 Science & Nature              |        20 | Biology, chemistry, physics, space, animals           |

**Total: 100 Questions**

## 📊 Scoring System

Each correct answer awards **10 points**.

* Maximum Score: **1000 points**
* Passing Score: **600 points**

### Grade Scale

| Percentage | Grade         | Result |
| ---------- | ------------- | ------ |
| 90–100%    | Outstanding   | 🏆     |
| 80–89%     | Excellent     | 🎉     |
| 70–79%     | Good Job      | 😊     |
| 60–69%     | Not Bad       | 💪     |
| Below 60%  | Keep Learning | 📝     |

## 🎮 How to Play

1. Open `index.html` in your browser.
2. Read the question and select an answer.
3. Get instant visual feedback.
4. Click **Next Question** to continue.
5. Complete all 100 questions.
6. View your final score and grade.
7. Choose **Play Again** to restart the quiz with randomized questions.

### ⌨️ Keyboard Controls

| Key             | Action                                 |
| --------------- | -------------------------------------- |
| `A - D`         | Select answer options                  |
| `Enter / Space` | Move to the next question              |
| `R`             | Restart the quiz on the results screen |

## 🛠️ Technologies Used

### HTML5

* Semantic HTML structure
* Quiz interface and content
* Stats dashboard
* Progress bar
* Answer options and navigation

### CSS3

* Flexbox
* CSS Grid
* Responsive layouts
* Gradient backgrounds
* Animations and transitions
* Media queries
* Color-coded feedback states

### Vanilla JavaScript (ES6+)

* Class-based architecture
* DOM manipulation
* Event handling
* Array manipulation
* Question randomization
* Score calculation
* Dynamic UI updates
* Fisher-Yates shuffle algorithm

## 🧠 Quiz Architecture

The application uses a `Quiz` class as its main controller.

### Main Methods

```text
constructor()
    ↓
Initializes quiz state
    ↓
Shuffles questions

displayQuestion()
    ↓
Displays current question and options

selectOption()
    ↓
Handles answer selection
    ↓
Updates score

nextQuestion()
    ↓
Moves to the next question

updateStats()
    ↓
Updates score, progress and question count

showResults()
    ↓
Displays final score and grade
```

## 📁 Project Structure

```text
ultimate-quiz-challenge/
│
├── index.html
├── README.md
├── LICENSE
│
└── assets/
    └── screenshots/
        ├── quiz-interface.png
        ├── correct-answer.png
        └── results-screen.png
```

The main application can be contained entirely inside `index.html`, including the HTML, CSS, and JavaScript.

## 🚀 Getting Started

### Option 1 — Download

Download the project and open:

```text
index.html
```

in any modern web browser.

No installation or server is required.

### Option 2 — Clone the Repository

```bash
git clone https://github.com/yourusername/ultimate-quiz-challenge.git

cd ultimate-quiz-challenge
```

Then open `index.html` in your browser.

### Option 3 — GitHub Pages

You can host the quiz using GitHub Pages:

1. Push the project to GitHub.
2. Open **Settings** in your repository.
3. Select **Pages**.
4. Choose **Deploy from a branch**.
5. Select the `main` branch and `/root`.
6. Save the configuration.

Your quiz can then be accessed through your GitHub Pages URL.

## 🎨 Customization

### Add New Questions

Questions are stored inside the `quizData` array.

```javascript
{
    question: "Your question here?",
    options: [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
    ],
    correct: 0,
    category: "Your Category"
}
```

The `correct` value represents the index of the correct option:

```text
0 → Option A
1 → Option B
2 → Option C
3 → Option D
```

### Change the Score

The default score is **10 points per correct answer**.

You can change the value inside the answer-selection logic:

```javascript
this.score += 10;
```

### Change the Number of Questions

You can limit the number of questions using:

```javascript
quizData.slice(0, 50);
```

For example, this can be used to create a 50-question version.

### Disable Question Shuffling

Question randomization can be disabled by removing or commenting out the shuffle call inside the constructor.

## 📱 Responsive Design

The interface is designed to work across different screen sizes:

* 💻 Desktop
* 💻 Laptop
* 📱 Mobile
* 📲 Tablet

CSS Grid, Flexbox, and media queries are used to maintain a responsive layout.

## ⚡ Performance

The project is intentionally lightweight:

* **Dependencies:** None
* **Network Required:** No
* **Architecture:** Client-side
* **Application Type:** Single-page web application
* **Storage:** No persistent storage currently implemented

## 🐛 Known Limitations

Currently, the project does not include:

* Persistent high-score storage
* Timer functionality
* Multiple difficulty levels
* Sound effects
* Multiplayer functionality
* Category filtering

## 🔮 Future Improvements

Planned features include:

* [ ] 💾 Local Storage for high scores
* [ ] ⏱️ Timed Quiz Mode
* [ ] 🎚️ Easy / Medium / Hard difficulty
* [ ] 🔊 Sound Effects
* [ ] 👥 Multiplayer Mode
* [ ] 🏷️ Category Filtering
* [ ] 📈 More detailed performance statistics
* [ ] 🌐 Additional language support

## 🤝 Contributing

Contributions are welcome!

### How to Contribute

1. Fork the repository.
2. Create a new branch:

```bash
git checkout -b feature/AmazingFeature
```

3. Make your changes.
4. Commit your changes:

```bash
git commit -m "Add AmazingFeature"
```

5. Push your branch:

```bash
git push origin feature/AmazingFeature
```

6. Open a Pull Request.

### You Can Contribute By

* ➕ Adding new questions
* 🐛 Fixing bugs
* ✨ Adding new features
* 🎨 Improving the UI
* ♿ Improving accessibility
* 🌐 Adding translations
* ⚡ Improving performance

## 📄 License

This project is licensed under the **MIT License**.

See the `LICENSE` file for more information.

## 🙏 Acknowledgments

* Unicode Standard for icons and emojis
* Modern UI design trends for visual inspiration
* General knowledge sources used for quiz questions

## ❓ FAQ

### Can I use this for educational purposes?

Yes. The quiz can be customized with questions for different subjects and learning environments.

### Can I add more than 100 questions?

Yes. Add additional question objects to the `quizData` array using the same structure.

### Does the application work offline?

Yes. The application runs entirely in the browser and does not require a network connection.

### Can I embed the quiz into another website?

Yes. The application can be embedded using an iframe or integrated directly into another website.

## ⭐ Support

If you find this project useful, consider giving the repository a ⭐ on GitHub.

If you encounter a bug or have an idea for improvement, feel free to open an Issue or Pull Request.

---

<div align="center">

### 🎯 Ultimate Quiz Challenge

**Made with ❤️ for learning and fun.**

⭐ **If you enjoyed the project, consider starring the repository!**

</div>
