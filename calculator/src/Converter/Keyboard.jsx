import styles from "./Converter.module.scss";

function Keyboard({onClick, value}) {
    const expr = Array.from("789456123-0.").map((ex) => {
        return <button onClick={click} key={ex} >{ex}</button>
    })

    function click(e) {
        if (!isNaN(e.target.innerHTML)) {
            onClick(value + e.target.innerHTML )
        }
    }

    return (
        <div className={styles.keyboard}>
            <div className={styles.numbers}>
                {expr}
            </div>
            <div className={styles.symbols}>
                <button>
                    <img src="./delete.svg" alt="delete" />
                </button>
                <button className={styles.clean}>C</button>
                <button>
                    <img src="./up.svg" alt="up" />
                </button>
                <button>
                    <img src="./down.svg" alt="down" />
                </button>
            </div>
        </div>
    )

    
}

export default Keyboard