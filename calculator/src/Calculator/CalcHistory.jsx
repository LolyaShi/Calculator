import styles from "./Calculator.module.scss";

function History({ status, saver, onClick }) {
    if (status) {
       
    return (
        <div className={styles.historyBlock}>
            <div>Історія</div>
            <div className={styles.content}>
                {saver.map((el) => {
                return <div> {el} </div>
            })}
            </div>
            
            <div>
                <button className={styles.clean} onClick={() => onClick([])}>Очистити</button>
            </div>
        </div>
        )
    }
}

export default History;