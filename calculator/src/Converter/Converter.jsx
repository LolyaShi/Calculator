import { useState } from "react";
import styles from "./Converter.module.scss";
import Keyboard from "./Keyboard";
import Screen from "./Screen";

function Converter({ props, onClick }) {

    const [value, setValue] = useState('0');

    if (props) {
        return (
            <div className={styles.converter}>
                <div className={styles.top}>
                    <img onClick={() => onClick(false)} src="./back.svg" alt="" />
                    <div>Back</div>
                </div>
            
                <div className={styles.screen}>
                    <Screen value={value} />
                </div>
                <div>
                    <Keyboard value = {value} onClick={ setValue} />
                </div>

            </div>
        )
            
        
    }
    
}

export default Converter;