import { useState } from "react";
import styles from "./Converter.module.scss";
import Keyboard from "./Keyboard";
import Screen from "./Screen";

function Converter({ props, onClick, theme }) {

    const [value, setValue] = useState('0');
    const [arrow, setArrow] = useState(true);

    if (props) {
        return (
            <div id={theme === "light" ? styles.light : styles.dark} className={styles.converter}>
                <div className={styles.top}>
                    <img onClick={() => onClick(false)} src="./back.svg" alt="" />
                    <div>Back</div>
                    
                </div>
            
                <div className={styles.screen}>
                    <Screen value={value} arrow={arrow} theme={theme} />
                </div>
                <div>
                    <Keyboard value = {value} onClick={ setValue} setArrow={setArrow} arrow={arrow} />
                </div>

            </div>
        )
            
        
    }
    
}

export default Converter;