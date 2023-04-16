import styles from './Errormodel.module.css'
import Card from './Card'
import Button from './Button'
const Errormodel=(props)=>{
    return(
        <div>
        <div className={styles.backdrop} onClick={props.onConfirm}>
        <Card className={styles.modal}>
            <header className={styles.header}>
                <h2>{props.title}</h2>
            </header>
            <div className={styles.content}>
                <p>{props.message}</p>
            </div>
            <footer className={styles.actions}>
                <Button onClick={props.onConfirm}>Okey</Button>
            </footer>
        </Card>
        </div></div>
    );
}
export default Errormodel;