import { useRef, useState, useEffect } from "react";
import styles from "./Converter.module.scss";



function TypeScreen({ type, label, value, convert, from, setFrom }) {

   function FetchResult( from, to, value) {
        const [res, setRes] = useState('');
        useEffect(() => {
            async function getNewData() {
                const result = await convert( from, to, value)
                setRes(result)
            }

            getNewData()
        
        })
    
    return res;
}

    //const [from, setFrom] = useState(type[0]);
    const options = useRef();
    const [to, setTo] = useState(type[0]);
    const optionTo = useRef();

    const res = FetchResult(from, to, value);


    return (
        <div className={styles.fullscreen}>
            <div className={styles.firstScreen}>
                <select ref={options} onChange={() => {
                    const value = options.current.selectedIndex;
                    setFrom(type[value])
                }} >
                    {label.map((u) => {
                        return <option value={u}> {u}</option>
                    })}
                </select>
                <div className={styles.input}>
                    {value}
                    <span>{from}</span>
                </div>
               
            </div>
            <div className={styles.firstScreen}>
                <select ref={optionTo} onChange={() => {
                    const value = optionTo.current.selectedIndex;
                    setTo(type[value])
                }}>
                    {label.map((u) => {
                        return <option>{u}</option>
                    })}
                </select>
                <div className={styles.input}>
                    {res}
                    <span>{to}</span>
                </div>
                
            </div>
        </div>
    )
    
}

export default TypeScreen