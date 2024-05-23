import { useRef, useState, useEffect } from "react";
import styles from "./Converter.module.scss";



function TypeScreen({ type, label, value, convert, from, setFrom, to, setTo, arrow }) {

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
    const optionTo = useRef();
    const inp1 = useRef();
    const inp2 = useRef()

    useEffect(() => {
        options.current.selectedIndex = "0";
        optionTo.current.selectedIndex = "0";
    }, [type])

    //const result = FetchResult(from, to, value);
const result = 0

    useEffect(() => {
        if (arrow) {
            inp1.current.focus();
        
        }
        else {
            inp2.current.focus();

        }

        console.log(arrow)
    }, [arrow])
    
    

    


    return (
        <div className={styles.fullscreen}>
            <div className={styles.firstScreen}>
                <select ref={options} onChange={() => {
                    const index = options.current.selectedIndex;
                    setFrom(type[index])
                   
                }}>
                    {label.map((u) => {
                        return <option value={u}> {u}</option>
                    })}
                </select>
                <div className={styles.input}>
                    <input ref={inp1} type="number" value={value}  />
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
                    
                    <input ref={inp2} type="number" value={result}  />
                    <span>{to}</span>
                </div>
                
            </div>
        </div>
    )
    
}

export default TypeScreen