import { useState } from "react";
import styles from "./Calculator.module.scss";

function Calculator() {

    const [value, setValue] = useState(0);
    function showValue() {
        console.log(target)
        const val = this.value;
        setValue(val)
    }
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.screen}>{value}</div>
                <div className={styles.panel}></div>
                <div className={styles.main}>
                    <div className={styles.mainRow}>
                        <button><div >C</div></button>
                        <button value={1} onClick={showValue}><div className={styles.addButton}>()</div></button>
                        <button><div className={styles.addButton}>%</div></button>
                        <button><div className={styles.addButton}>/</div></button>
                    </div>
                    <div className={styles.mainRow}>
                        <button><div className="row__item">7</div></button>
                        <button><div className="row__item">8</div></button>
                        <button><div className="row__item">9</div></button>
                        <button><div className={styles.addButton}>*</div></button>
                    </div>
                    <div className={styles.mainRow}>
                        <button><div className="row__item">4</div></button>
                        <button><div className="row__item">5</div></button>
                        <button><div className="row__item">6</div></button>
                        <button><div className={styles.addButton}>-</div></button>
                    </div>
                    <div className={styles.mainRow}>
                        <button><div className="row__item">1</div></button>
                        <button><div className="row__item">2</div></button>
                        <button><div className="row__item">3</div></button>
                        <button><div className={styles.addButton}>+</div></button>
                    </div>
                    <div className={styles.mainRow}>
                        <button><div className="row__item">+/-</div></button>
                        <button><div className="row__item">0</div></button>
                        <button><div className="row__item">.</div></button>
                        <button className={styles.equal}><div >=</div></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Calculator