import { useRef, useState } from "react";
import styles from "./Converter.module.scss";

function TypeScreen({ type, value, convert }) {
    const [from, setFrom] = useState('none');
    const options = useRef();
    return (
        <div className={styles.fullscreen}>
            <div className={styles.firstScreen}>
                <select ref={options} onChange={() => {
                    const value = options.current.selectedIndex;
                    setFrom(type[value])
                }} >
                    {type.map((u) => {
                        return <option value={u}>{u}</option>
                    })}
                </select>
                <input type="number" value={value} /> 
               
            </div>
            <div className={styles.firstScreen}>
                <select>
                    {type.map((u) => {
                        return <option>{u}</option>
                    })}
                </select>
                <input type="number" />
            </div>
        </div>
    )
    
}

export default TypeScreen