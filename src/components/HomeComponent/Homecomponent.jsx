import { Component } from 'react';
import styles from "./HomeComponent.module.css"

class HomeComponent extends Component {
    render() {
        return (
            <div className={styles ['mainContainer']}>
            <h1>Quiz App</h1>
            <button>Play</button>
            </div>
        );
    }
}

export default HomeComponent;