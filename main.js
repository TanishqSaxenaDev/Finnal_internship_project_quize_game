        const quizData = [
            // General Knowledge (Questions 1-20)
            { question: "What is the capital of France?", options: ["London", "Berlin", "Paris", "Madrid"], correct: 2, category: "Geography" },
            { question: "Which planet is known as the Red Planet?", options: ["Venus", "Mars", "Jupiter", "Saturn"], correct: 1, category: "Science" },
            { question: "What is the largest mammal in the world?", options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"], correct: 1, category: "Science" },
            { question: "In which year did World War II end?", options: ["1943", "1944", "1945", "1946"], correct: 2, category: "History" },
            { question: "What is the chemical symbol for gold?", options: ["Ag", "Au", "Fe", "Cu"], correct: 1, category: "Science" },
            { question: "Who painted the Mona Lisa?", options: ["Van Gogh", "Picasso", "Leonardo da Vinci", "Michelangelo"], correct: 2, category: "Art" },
            { question: "What is the largest continent by area?", options: ["Africa", "North America", "Asia", "Europe"], correct: 2, category: "Geography" },
            { question: "How many bones are in the adult human body?", options: ["186", "206", "226", "256"], correct: 1, category: "Science" },
            { question: "Which element has the chemical symbol 'O'?", options: ["Osmium", "Oxygen", "Oganesson", "Oxide"], correct: 1, category: "Science" },
            { question: "What is the capital of Japan?", options: ["Seoul", "Beijing", "Tokyo", "Bangkok"], correct: 2, category: "Geography" },
            { question: "Who wrote 'Romeo and Juliet'?", options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"], correct: 1, category: "Literature" },
            { question: "What is the speed of light in vacuum (km/s)?", options: ["200,000", "250,000", "300,000", "350,000"], correct: 2, category: "Science" },
            { question: "Which ocean is the largest?", options: ["Atlantic", "Indian", "Arctic", "Pacific"], correct: 3, category: "Geography" },
            { question: "What year did the Titanic sink?", options: ["1910", "1911", "1912", "1913"], correct: 2, category: "History" },
            { question: "What is the hardest natural substance?", options: ["Quartz", "Diamond", "Topaz", "Sapphire"], correct: 1, category: "Science" },
            { question: "Which country has the most population?", options: ["India", "USA", "China", "Indonesia"], correct: 0, category: "Geography" },
            { question: "What does DNA stand for?", options: ["Deoxyribonucleic Acid", "Dinucleic Acid", "Deoxyribose Nucleic Acid", "Dinitric Acid"], correct: 0, category: "Science" },
            { question: "Who discovered penicillin?", options: ["Louis Pasteur", "Alexander Fleming", "Marie Curie", "Robert Koch"], correct: 1, category: "Science" },
            { question: "What is the currency of United Kingdom?", options: ["Euro", "Dollar", "Pound Sterling", "Franc"], correct: 2, category: "Economics" },
            { question: "Which planet is closest to the Sun?", options: ["Venus", "Earth", "Mercury", "Mars"], correct: 2, category: "Science" },

            // Technology & Computing (Questions 21-40)
            { question: "Who founded Microsoft?", options: ["Steve Jobs", "Bill Gates", "Jeff Bezos", "Mark Zuckerberg"], correct: 1, category: "Technology" },
            { question: "What does CPU stand for?", options: ["Central Processing Unit", "Computer Personal Unit", "Central Program Utility", "Core Processing Unit"], correct: 0, category: "Technology" },
            { question: "In what year was the first iPhone released?", options: ["2005", "2006", "2007", "2008"], correct: 2, category: "Technology" },
            { question: "What programming language is known as the 'language of the web'?", options: ["Python", "Java", "JavaScript", "C++"], correct: 2, category: "Technology" },
            { question: "What does RAM stand for?", options: ["Random Access Memory", "Read Access Memory", "Rapid Access Module", "Random Application Memory"], correct: 0, category: "Technology" },
            { question: "Who created the World Wide Web?", options: ["Vint Cerf", "Tim Berners-Lee", "Robert Cailliau", "Marc Andreessen"], correct: 1, category: "Technology" },
            { question: "What is the most popular search engine?", options: ["Bing", "Yahoo", "Google", "DuckDuckGo"], correct: 2, category: "Technology" },
            { question: "What does HTML stand for?", options: ["HyperText Markup Language", "HighTech Modern Language", "HyperText Modern Links", "Home Tool Markup Language"], correct: 0, category: "Technology" },
            { question: "Which company created Android?", options: ["Apple", "Microsoft", "Google", "Samsung"], correct: 2, category: "Technology" },
            { question: "What does 'www' stand for in a website address?", options: ["World Wide Web", "Web Wide World", "Wide World Web", "World Web Wide"], correct: 0, category: "Technology" },
            { question: "What is the binary number system based on?", options: ["0-9", "0-1", "1-10", "0-5"], correct: 1, category: "Technology" },
            { question: "Which social media platform was launched first?", options: ["Facebook", "Twitter", "LinkedIn", "MySpace"], correct: 2, category: "Technology" },
            { question: "What does API stand for?", options: ["Application Programming Interface", "Applied Program Integration", "Automated Program Interface", "Application Process Integration"], correct: 0, category: "Technology" },
            { question: "How many bits are in a byte?", options: ["4", "8", "16", "32"], correct: 1, category: "Technology" },
            { question: "Which company developed the Python programming language?", options: ["Google", "Microsoft", "Python Software Foundation", "Mozilla"], correct: 2, category: "Technology" },
            { question: "What does SSD stand for?", options: ["Solid State Drive", "Super Speed Drive", "System Storage Device", "Solid Storage Disk"], correct: 0, category: "Technology" },
            { question: "What is the primary function of a firewall?", options: ["Speed up internet", "Block unauthorized access", "Store data", "Process graphics"], correct: 1, category: "Technology" },
            { question: "What year was Amazon founded?", options: ["1994", "1995", "1996", "1997"], correct: 0, category: "Technology" },
            { question: "What does URL stand for?", options: ["Uniform Resource Locator", "Universal Resource Link", "Unified Resource Locator", "Uniform Reference Link"], correct: 0, category: "Technology" },
            { question: "Which programming language is known for its use in AI?", options: ["Ruby", "Python", "PHP", "Swift"], correct: 1, category: "Technology" },

            // History & Politics (Questions 41-60)
            { question: "Who was the first President of the United States?", options: ["Thomas Jefferson", "John Adams", "George Washington", "Benjamin Franklin"], correct: 2, category: "History" },
            { question: "In which year did the Berlin Wall fall?", options: ["1987", "1988", "1989", "1990"], correct: 2, category: "History" },
            { question: "Which ancient civilization built the pyramids?", options: ["Roman", "Greek", "Egyptian", "Mesopotamian"], correct: 2, category: "History" },
            { question: "Who was known as the 'Iron Lady'?", options: ["Angela Merkel", "Margaret Thatcher", "Indira Gandhi", "Golda Meir"], correct: 1, category: "History" },
            { question: "What event started World War I?", options: ["Invasion of Poland", "Assassination of Archduke Franz Ferdinand", "Sinking of Lusitania", "Treaty of Versailles"], correct: 1, category: "History" },
            { question: "Which country was the first to grant women the right to vote?", options: ["USA", "UK", "New Zealand", "Australia"], correct: 2, category: "History" },
            { question: "Who discovered America in 1492?", options: ["Vasco da Gama", "Christopher Columbus", "Amerigo Vespucci", "Ferdinand Magellan"], correct: 1, category: "History" },
            { question: "What was the Cold War?", options: ["War in cold regions", "Tension between USA and USSR", "Economic depression", "Civil war"], correct: 1, category: "History" },
            { question: "Who was the leader of the Civil Rights Movement in the USA?", options: ["Malcolm X", "Martin Luther King Jr.", "Rosa Parks", "Frederick Douglass"], correct: 1, category: "History" },
            { question: "Which empire was ruled by Genghis Khan?", options: ["Ottoman Empire", "Roman Empire", "Mongol Empire", "Persian Empire"], correct: 2, category: "History" },
            { question: "When did India gain independence?", options: ["1945", "1946", "1947", "1948"], correct: 2, category: "History" },
            { question: "Who was the first man to walk on the moon?", options: ["Buzz Aldrin", "Neil Armstrong", "Yuri Gagarin", "Michael Collins"], correct: 1, category: "History" },
            { question: "What was the Renaissance?", options: ["A war", "A cultural movement", "A disease", "A political system"], correct: 1, category: "History" },
            { question: "Which country was NOT part of the Allied Powers in WWII?", options: ["USA", "UK", "Germany", "France"], correct: 2, category: "History" },
            { question: "Who wrote the Declaration of Independence?", options: ["George Washington", "Thomas Jefferson", "Benjamin Franklin", "John Adams"], correct: 1, category: "History" },
            { question: "What ancient wonder was located in Alexandria?", options: ["Colossus", "Lighthouse", "Temple", "Library"], correct: 1, category: "History" },
            { question: "Which war was fought between the North and South in the USA?", options: ["Revolutionary War", "Civil War", "War of 1812", "Mexican-American War"], correct: 1, category: "History" },
            { question: "Who was the longest-reigning British monarch?", options: ["Queen Victoria", "Queen Elizabeth II", "King George III", "King Henry VIII"], correct: 1, category: "History" },
            { question: "What treaty ended World War I?", options: ["Treaty of Paris", "Treaty of Versailles", "Treaty of Vienna", "Treaty of Rome"], correct: 1, category: "History" },
            { question: "Which civilization created the first written language?", options: ["Egyptian", "Sumerian", "Chinese", "Indus Valley"], correct: 1, category: "History" },

            // Sports & Entertainment (Questions 61-80)
            { question: "How many players are on a soccer team on the field?", options: ["9", "10", "11", "12"], correct: 2, category: "Sports" },
            { question: "Which country won the first FIFA World Cup?", options: ["Brazil", "Argentina", "Uruguay", "Italy"], correct: 2, category: "Sports" },
            { question: "What sport is played at Wimbledon?", options: ["Cricket", "Tennis", "Golf", "Rugby"], correct: 1, category: "Sports" },
            { question: "Who is known as 'The King of Pop'?", options: ["Prince", "Michael Jackson", "Elvis Presley", "Stevie Wonder"], correct: 1, category: "Entertainment" },
            { question: "Which movie won the first Oscar for Best Picture?", options: ["Wings", "Sunrise", "The Jazz Singer", "Metropolis"], correct: 0, category: "Entertainment" },
            { question: "How many rings are in the Olympic symbol?", options: ["3", "4", "5", "6"], correct: 2, category: "Sports" },
            { question: "What is the highest-grossing film of all time (adjusted for inflation)?", options: ["Avatar", "Gone with the Wind", "Titanic", "Star Wars"], correct: 1, category: "Entertainment" },
            { question: "In which sport would you perform a slam dunk?", options: ["Volleyball", "Basketball", "Tennis", "Handball"], correct: 1, category: "Sports" },
            { question: "Who painted the Sistine Chapel ceiling?", options: ["Raphael", "Donatello", "Michelangelo", "Leonardo da Vinci"], correct: 2, category: "Art" },
            { question: "What band performed at the first-ever Woodstock?", options: ["Jimi Hendrix", "The Who", "Richie Havens", "Santana"], correct: 2, category: "Music" },
            { question: "How long is a marathon in kilometers?", options: ["40 km", "42.195 km", "45 km", "50 km"], correct: 1, category: "Sports" },
            { question: "Which actor played Iron Man in the Marvel movies?", options: ["Chris Evans", "Chris Hemsworth", "Robert Downey Jr.", "Mark Ruffalo"], correct: 2, category: "Entertainment" },
            { question: "What sport uses a shuttlecock?", options: ["Tennis", "Badminton", "Squash", "Table Tennis"], correct: 1, category: "Sports" },
            { question: "Who wrote the Harry Potter book series?", options: ["J.R.R. Tolkien", "J.K. Rowling", "C.S. Lewis", "Roald Dahl"], correct: 1, category: "Literature" },
            { question: "Which country has won the most Olympic gold medals?", options: ["China", "Russia", "USA", "Germany"], correct: 2, category: "Sports" },
            { question: "What instrument does a pianist play?", options: ["Guitar", "Piano", "Violin", "Drums"], correct: 1, category: "Music" },
            { question: "Which sport is played at the Super Bowl?", options: ["Baseball", "Basketball", "American Football", "Soccer"], correct: 2, category: "Sports" },
            { question: "Who directed the movie 'Jurassic Park'?", options: ["James Cameron", "Steven Spielberg", "George Lucas", "Ridley Scott"], correct: 1, category: "Entertainment" },
            { question: "What color belt is the highest rank in karate?", options: ["Red", "Blue", "White", "Black"], correct: 3, category: "Sports" },
            { question: "Which band performed 'Bohemian Rhapsody'?", options: ["The Beatles", "Queen", "Led Zeppelin", "Pink Floyd"], correct: 1, category: "Music" },

            // Science & Nature (Questions 81-100)
            { question: "What is the largest organ in the human body?", options: ["Heart", "Liver", "Skin", "Brain"], correct: 2, category: "Science" },
            { question: "How many elements are in the periodic table (as of 2024)?", options: ["112", "116", "118", "120"], correct: 2, category: "Science" },
            { question: "What is the powerhouse of the cell?", options: ["Nucleus", "Mitochondria", "Ribosome", "Endoplasmic Reticulum"], correct: 1, category: "Science" },
            { question: "What gas do plants absorb from the atmosphere?", options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"], correct: 2, category: "Science" },
            { question: "What is the largest planet in our solar system?", options: ["Saturn", "Neptune", "Uranus", "Jupiter"], correct: 3, category: "Science" },
            { question: "How many hearts does an octopus have?", options: ["1", "2", "3", "4"], correct: 2, category: "Science" },
            { question: "What is the boiling point of water in Celsius?", options: ["90°C", "95°C", "100°C", "110°C"], correct: 2, category: "Science" },
            { question: "Which animal is known as the 'King of the Jungle'?", options: ["Tiger", "Lion", "Elephant", "Gorilla"], correct: 1, category: "Science" },
            { question: "What is the chemical formula for water?", options: ["HO2", "H2O", "H2O2", "HO"], correct: 1, category: "Science" },
            { question: "How many teeth does an adult human typically have?", options: ["28", "30", "32", "34"], correct: 2, category: "Science" },
            { question: "What is the fastest land animal?", options: ["Lion", "Cheetah", "Gazelle", "Horse"], correct: 1, category: "Science" },
            { question: "What planet has the most moons?", options: ["Jupiter", "Saturn", "Uranus", "Neptune"], correct: 1, category: "Science" },
            { question: "What is the process by which plants make food?", options: ["Respiration", "Photosynthesis", "Digestion", "Absorption"], correct: 1, category: "Science" },
            { question: "What is the smallest bone in the human body?", options: ["Femur", "Tibia", "Stapes", "Radius"], correct: 2, category: "Science" },
            { question: "How many colors are in a rainbow?", options: ["5", "6", "7", "8"], correct: 2, category: "Science" },
            { question: "What is the study of earthquakes called?", options: ["Biology", "Seismology", "Meteorology", "Geology"], correct: 1, category: "Science" },
            { question: "Which blood type is known as the universal donor?", options: ["A+", "B+", "AB+", "O-"], correct: 3, category: "Science" },
            { question: "What is the largest bird in the world?", options: ["Eagle", "Albatross", "Ostrich", "Penguin"], correct: 2, category: "Science" },
            { question: "What element makes up most of the Earth's atmosphere?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"], correct: 2, category: "Science" },
            { question: "How many states of matter are there (classically)?", options: ["2", "3", "4", "5"], correct: 1, category: "Science" }
        ];

        class Quiz {
            constructor() {
                this.questions = this.shuffleArray([...quizData]);
                this.currentQuestionIndex = 0;
                this.score = 0;
                this.correctAnswers = 0;
                this.isAnswered = false;
                
                this.initializeElements();
                this.addEventListeners();
                this.displayQuestion();
            }

            initializeElements() {
                this.questionText = document.getElementById('question-text');
                this.optionsContainer = document.getElementById('options-container');
                this.nextBtn = document.getElementById('next-btn');
                this.feedback = document.getElementById('feedback');
                this.scoreElement = document.getElementById('score');
                this.currentQuestionElement = document.getElementById('current-question');
                this.correctCountElement = document.getElementById('correct-count');
                this.progressBar = document.getElementById('progress');
                this.categoryBadge = document.getElementById('category-badge');
                this.quizContent = document.getElementById('quiz-content');
            }

            addEventListeners() {
                this.nextBtn.addEventListener('click', () => this.nextQuestion());
            }

            shuffleArray(array) {
                for (let i = array.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [array[i], array[j]] = [array[j], array[i]];
                }
                return array;
            }

            displayQuestion() {
                if (this.currentQuestionIndex >= this.questions.length) {
                    this.showResults();
                    return;
                }

                this.isAnswered = false;
                this.nextBtn.classList.remove('show');
                this.feedback.textContent = '';
                this.feedback.className = 'feedback';

                const question = this.questions[this.currentQuestionIndex];
                
                this.questionText.textContent = question.question;
                this.categoryBadge.textContent = question.category;
                
                this.optionsContainer.innerHTML = '';
                
                question.options.forEach((option, index) => {
                    const optionElement = document.createElement('div');
                    optionElement.className = 'option';
                    optionElement.textContent = `${String.fromCharCode(65 + index)}) ${option}`;
                    optionElement.addEventListener('click', () => this.selectOption(index));
                    this.optionsContainer.appendChild(optionElement);
                });

                this.updateStats();
            }

            selectOption(selectedIndex) {
                if (this.isAnswered) return;
                this.isAnswered = true;

                const question = this.questions[this.currentQuestionIndex];
                const options = document.querySelectorAll('.option');
                
                options.forEach(option => option.classList.add('disabled'));
                
                if (selectedIndex === question.correct) {
                    options[selectedIndex].classList.add('correct');
                    this.score += 10;
                    this.correctAnswers++;
                    this.feedback.textContent = '✅ Correct! +10 points';
                    this.feedback.className = 'feedback correct';
                } else {
                    options[selectedIndex].classList.add('wrong');
                    options[question.correct].classList.add('correct');
                    this.feedback.textContent = '❌ Wrong! The correct answer was highlighted in green.';
                    this.feedback.className = 'feedback wrong';
                }

                this.nextBtn.classList.add('show');
                this.updateStats();
            }

            nextQuestion() {
                this.currentQuestionIndex++;
                this.displayQuestion();
            }

            updateStats() {
                this.scoreElement.textContent = this.score;
                this.currentQuestionElement.textContent = `${this.currentQuestionIndex + 1}/${this.questions.length}`;
                this.correctCountElement.textContent = this.correctAnswers;
                
                const progress = (this.currentQuestionIndex / this.questions.length) * 100;
                this.progressBar.style.width = `${progress}%`;
            }

            showResults() {
                const percentage = Math.round((this.correctAnswers / this.questions.length) * 100);
                let grade = '';
                let emoji = '';
                
                if (percentage >= 90) {
                    grade = 'Outstanding! 🏆';
                    emoji = '🌟';
                } else if (percentage >= 80) {
                    grade = 'Excellent! 👏';
                    emoji = '🎉';
                } else if (percentage >= 70) {
                    grade = 'Good Job! 👍';
                    emoji = '😊';
                } else if (percentage >= 60) {
                    grade = 'Not Bad! 📚';
                    emoji = '💪';
                } else {
                    grade = 'Keep Learning! 📖';
                    emoji = '📝';
                }

                this.quizContent.innerHTML = `
                    <div class="result-section">
                        <h2>${emoji} Quiz Complete! ${emoji}</h2>
                        <div class="final-score">${this.score}</div>
                        <p style="font-size: 1.2em; color: #666;">Total Points</p>
                        <div style="margin: 20px 0;">
                            <p style="font-size: 1.1em;">Correct Answers: <strong>${this.correctAnswers}</strong> out of <strong>${this.questions.length}</strong></p>
                            <p style="font-size: 1.1em;">Accuracy: <strong>${percentage}%</strong></p>
                            <p style="font-size: 1.3em; margin-top: 20px; color: #667eea;"><strong>${grade}</strong></p>
                        </div>
                        <div class="quiz-stats" style="margin: 20px 0;">
                            <div class="stat">
                                <div class="stat-label">Max Possible</div>
                                <div class="stat-value">${this.questions.length * 10}</div>
                            </div>
                            <div class="stat">
                                <div class="stat-label">Your Score</div>
                                <div class="stat-value">${this.score}</div>
                            </div>
                            <div class="stat">
                                <div class="stat-label">Grade</div>
                                <div class="stat-value">${percentage}%</div>
                            </div>
                        </div>
                        <button class="restart-btn" onclick="location.reload()">🔄 Play Again</button>
                    </div>
                `;
            }
        }

        // Initialize the quiz
        const quiz = new Quiz();
