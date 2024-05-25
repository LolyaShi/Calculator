import { useRef } from "react";
import styles from "./Converter.module.scss";

function Keyboard({onClick, value, setArrow, arrow}) {
    const expr = Array.from("789456123-0.").map((ex) => {
        return <button onClick={click} key={ex} >{ex}</button>
    })

    const up = useRef();
    const down = useRef();

    function click(e) {
    
        if (!isNaN(e.target.innerHTML)) {
            if (value === "0") {
                onClick(e.target.innerHTML)
            }   
            else {
                onClick(value + e.target.innerHTML )
            }
            
        }
        else if(e.target.innerHTML === ".") {
            //onClick(value + e.target.innerHTML )
            checkExpression(e.target.innerHTML, value)
        }
        else if (e.target.innerHTML === "-") {
            onClick(value*(-1))
        }
    }

    function checkExpression(el, value) {
        const lastNum = value[value.length - 1];
        
        if (isNaN(lastNum)) {
            onClick(value);
        }
        else {
            onClick(value + el)
            
        }
    }

   

    return (
        <div className={styles.keyboard}>
            <div className={styles.numbers}>
                {expr}
            </div>
            <div className={styles.symbols} >
                <button onClick={() => onClick(value.slice(0, value.length - 1))}>
                    <img src="./delete.svg" alt="delete" />
                </button>
                <button className={styles.clean} onClick={()=>(onClick('0'))}>C</button>
                <button ref={up} onClick={() => {
                    setArrow(true)
                    up.current.style.filter = "contrast(.5)"
                    down.current.style.filter = "contrast(1)"
                 }}>
                    <img src="./up.svg" alt="up" />
                </button>
                <button ref={down} onClick={() => {
                    setArrow(false) 
                    up.current.style.filter = "contrast(1)"
                    down.current.style.filter = "contrast(.5)"
                }}>
                    <img src="./down.svg" alt="down" />
                </button>
            </div>
        </div>
    )

    
}

export default Keyboard