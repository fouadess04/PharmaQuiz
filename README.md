

# PharmaQuiz

PharmaQuiz is an interactive web-based quiz application designed for testing knowledge in the pharmaceutical domain. Users can upload a JSON file containing quiz questions, answer them, and receive instant feedback with explanations. The application also tracks the user's score as they progress through the quiz.

## Features

- **Dynamic Quiz Loading**: Upload a JSON file containing quiz questions and answers.
- **Interactive Quiz Interface**: Answer multiple-choice questions and get instant feedback.
- **Explanation Display**: Detailed explanations for each question after answering.

## How to Use

1. **Upload Quiz File**:
   - Click the "Upload Quiz File" button to upload a JSON file containing quiz questions.
   - The JSON file should follow the format below.

2. **Start the Quiz**:
   - After uploading the file, click the "Start Quiz" button to begin.

3. **Answer Questions**:
   - Select the correct answers for each question.
   - Click "Check Answers" to see if your answers are correct and view explanations.

4. **Proceed to Next Question**:
   - Click "Next Question" to move to the next question after checking your answers.

5. **End of Quiz**:
   - When the quiz ends, you'll see your final score.

## JSON File Format

The quiz questions must be provided in a JSON file with the following format:

```json
[
    {
        "question": "What is the primary function of the liver?",
        "options": ["Digestion", "Detoxification", "Respiration", "Circulation"],
        "rightPropositions": [1], // Index of the correct answer(s)
        "explanation": "The liver is responsible for detoxifying harmful substances in the body."
    },
    {
        "question": "Which vitamin is essential for blood clotting?",
        "options": ["Vitamin A", "Vitamin B12", "Vitamin C", "Vitamin K"],
        "rightPropositions": [3], // Index of the correct answer(s)
        "explanation": "Vitamin K is essential for the synthesis of blood-clotting proteins."
    }
]
```

- `question`: The question text.
- `options`: An array of possible answers.
- `rightPropositions`: An array of indices representing the correct answer(s).
- `explanation`: A brief explanation of the correct answer.

## Demo

You can try the live demo [here](#) (add your live demo link if available).

## Technologies Used

- **HTML5**: Structure of the web page.
- **CSS3**: Styling and layout.
- **JavaScript**: Interactive functionality and quiz logic.
- **Google Fonts**: Lexend Deca and Red Hat Display fonts.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/PharmaQuiz.git
   ```
2. Open the `index.html` file in your browser.

## Contributing

Contributions are welcome! If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Commit your changes.
4. Submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Thanks to [Google Fonts](https://fonts.google.com/) for providing the Lexend Deca and Red Hat Display fonts.
- Inspired by the need for interactive and engaging quiz applications in the pharmaceutical field.
