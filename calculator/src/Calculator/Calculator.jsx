import { useState } from "react";
import styles from "./Calculator.module.scss";
import Numbers from "./Numbers";
import History from "./CalcHistory";
import Converter from "../Converter/Converter.jsx";

function Calculator() {

    const [value, setValue] = useState("0");
    const [result, setResult] = useState("");
    const [history, setHistory] = useState(false);
    const [save, setSave] = useState([]);
    const [converter, setConverter] = useState(false);

    const [theme, setTheme] = useState('light');
    function changeTheme() {
        setTheme((val) => (val === "light") ? "dark" : "light" )
    }

    const takeRes = (val) => {
        const example = `${val} = ${eval(val)}`;
        save.push(example);
        if (save.length > 15) {
            save.shift();
        }
        setSave(save)
    }
    
   
    return (
        <div  >
            <div id={theme === "light" ? styles.light : styles.dark} className={styles.container}>
                <Converter props = {converter} onClick={setConverter} theme={theme} />
                <div className={styles.screen}>
                    <div className={styles.top}>
                        Theme {theme}
                        
                            <label className={styles.switchBlock} htmlFor="themeBtn">
                                <input onChange={changeTheme} id="themeBtn" type="checkbox" />
                                < span className={styles.switch}></span>
                            </label>  
                    </div>
                    <div className={styles.monitor}>
                        {value}
                    </div>
                    
                    <div className={styles.results}>
                        {result}
                    </div>
                </div>
                <div className={styles.panel}>
                    <div className={styles.panelLeft}>
                        <div onClick={() => {
                            setHistory(!history)
                        }}>
                            <img src="./history.svg" alt="history" />
                        </div>
                        <div onClick={() => setConverter(true)}> 
                            <img src="./converter.svg" alt="" />
                        </div>
                    </div>
                    
                    <div onClick={() => setValue(value.slice(0, value.length - 1))}>
                        <img src="./delete.svg" alt="delete" />
                    </div>
                </div>
                <div className={styles.main}>
                    <Numbers data = {value} onClick={setValue} result={result} res={setResult} takeRes={takeRes} />
                    <History status={history} item={value} saver={save} onClick={setSave} />
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