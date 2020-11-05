const quizData = [
  {
    question: 'How would you like Premium to help?',
    choices: {
      a: 'To job search with confidence and get hired',
      b: 'To grow my network or manage my reputation',
      c: 'To find leads more effectively',
      d: 'To find and hire talent faster'
    },
    answer: 'b'
  },
  {
    question: 'What is the most used programming language?',
    choices: {
      a: 'Java',
      b: 'JS',
      c: 'Python',
      d: 'C++'
    },
    answer: 'c'
  }
];

let questionCounter = 0;

const loadQuiz = () => {
  const questionEle = document.getElementById('question');
  const optionAEle = document.getElementById('option-a');
  const optionBEle = document.getElementById('option-b');
  const optionCEle = document.getElementById('option-c');
  const optionDEle = document.getElementById('option-d');

  // deselect radio button if any
  const radios = document.querySelectorAll('input[type="radio"]');
  radios.forEach(radio => radio.checked = false)

  const quesToDisplay = quizData[questionCounter];
  const choices = quesToDisplay.choices;
  questionEle.innerHTML = quesToDisplay.question;
  optionAEle.innerHTML = choices.a
  optionBEle.innerHTML = choices.b
  optionCEle.innerHTML = choices.c
  optionDEle.innerHTML = choices.d
}

const submitFn = () => {
  const radios = document.querySelectorAll('input[type="radio"]:checked');
  if (!radios.length) {
    alert('Select one answer!');
    return;
  }

  const selectedAns = radios[0].id;
  const questionToValidate = quizData[questionCounter];

  if (selectedAns === questionToValidate.answer) {
    questionCounter++;
    if (questionCounter < quizData.length) {
      loadQuiz();
    } else {
      alert('Yay .. you completed the survey!')
      questionCounter = 0;
      loadQuiz();
    }
  } else {
    alert('Wrong answer!')
  }
}

loadQuiz();