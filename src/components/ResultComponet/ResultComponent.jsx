import { Component } from "react";
import styles from "./ResultComponent.module.css";

class ResultComponent extends Component {
  render() {
    return (
      <div>
        <div className={styles["resultPageContainer"]}>
          <div className={styles["result"]}>
            <h1>Result</h1>
          </div>
          <div className={styles["headerContainer"]}>
            <p>You need more practice!</p>
            <h1>Your score is 20%</h1>
          </div>
          <div className={styles["resultContainer"]}>
            <p>
              Total number of questions <span>15</span>
            </p>
            <p>
              Number of Attempted questions <span>9</span>
            </p>
            <p>
              Number of corrected answers<span>3</span>
            </p>
            <p>
              Number of wrong answers<span>6</span>
            </p>
          </div>
        </div>
        <div className={styles["buttonContainer"]}>
          <button id={styles["playAgain"]}>Play Again</button>
          <button id={styles["home"]}>Back to home</button>
        </div>
      </div>
    );
  }
}

export default ResultComponent;
