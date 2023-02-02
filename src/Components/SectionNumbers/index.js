import styles from './SectionNumbers.module.scss';




export default function SectionNumbers(){
    return(
        <div className={styles.containerSectionNumbers}>
            <div className={styles.cardNumbers}>
                <h2>33+</h2>
                <p>Auto-estima recuperadas</p>
            </div>
            <div className={styles.cardNumbers}>
                <h2>24+</h2>
                <p>Casamentos salvos</p>
            </div>
            <div className={styles.cardNumbers}>
                <h2>45+</h2>
                <p>Homens felizes</p>
            </div>
        </div>
    );
}