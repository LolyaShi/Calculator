import { useState } from "react";
import styles from "./Calculator.module.scss";
import Numbers from "./Numbers";

function Calculator() {

    const [value, setValue] = useState("0");
    const [result, setResult] = useState("");

   
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.screen}>
                    <div className={styles.monitor}>
                        {value}
                    </div>
                    
                    <div className={styles.results}>
                        {result}
                    </div>
                </div>
                <div className={styles.panel}>
                    <div >
                        <img src="./history.svg" alt="history" />
                    </div>
                    <div onClick={() => setValue(value.slice(0, value.length - 1))}>
                        <img src="./delete.svg" alt="delete" />
                    </div>
                </div>
                <div className={styles.main}>
                    <Numbers data = {value} onClick={setValue} res={setResult} />
                    
                </div>
                
                {/* 
                <div className={styles.main}>
                    <div className={styles.mainRow}>
                        <button><div >C</div></button>
                        <button onClick={setValue}><div className={styles.addButton}>()</div></button>
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
                */}
            </div>
        </div>
    )
}

export default Calculator