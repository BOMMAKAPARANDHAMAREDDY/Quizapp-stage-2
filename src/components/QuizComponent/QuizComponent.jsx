import { Component } from "react";
import style from  "./QuizComponent.module.css";
import questions from "../../resources/quizQuestion.json";

class QuizComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
      questions: questions,
      currQuestion: {},
      nextQuestion: {},
      prevQuestion: {},
    };
  }

  componentDidMount() {
    this.displayQuestion();
  }
  displayQuestion = () => {
    let { currentIndex, questions } = this.state;
    if (questions.length !== 0) {
      let currQuestion = questions[currentIndex];
      let nextQuestion = questions[currentIndex + 1];
      let prevQuestion = questions[currentIndex - 1];

      this.setState({
        currQuestion,
        nextQuestion,
        prevQuestion,
      });
    }
  };

  handleNext = () => {
    if (this.state.nextQuestion !== undefined) {
      this.setState(
        (prevState) => ({
          currentIndex: prevState.currentIndex + 1,
        }),
        () => {
          this.displayQuestion();
        }
      );
    }
  };
  handlePrev = () => {
    if (this.state.prevQuestion !== undefined) {
      this.setState(
        (prevState) => ({
          currentIndex: prevState.currentIndex - 1,
        }),
        () => {
          this.displayQuestion();
        }
      );
    }
  };

  handleQuit = () => {
    if (window.confirm("Are you sure you want to quit?")) {
      window.location.reload();
    }
  };
  render() {
    const { currQuestion } = this.state;

    return (
      <div className= {style ["questionContainer"]}>
        <div className={style["content"]}>
          <h1>Question</h1>
          <span>{`${this.state.currentIndex + 1} of ${
            this.state.questions.length
          }`}</span>
          <p>{currQuestion.question}</p>
        </div>
        <div className={style["optionsContainer"]}>
          <button>{currQuestion.optionA}</button>
          <button>{currQuestion.optionB}</button>
          <button>{currQuestion.optionC}</button>
          <button>{currQuestion.optionD}</button>
        </div>
        <div className={style["buttonContainer"]}>
          <button id={style["previous"]} onClick={this.handlePrev}>
            Previous
          </button>
          <button id={style["next"]} onClick={this.handleNext}>
            Next
          </button>
          <button id={style["quit"]} onClick={this.handleQuit}>
            Quit
          </button>
        </div>
      </div>
    );
  }
}

export default QuizComponent;
