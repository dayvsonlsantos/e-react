import styles from './Frase.module.css';

function Frase() {

    return (
        <div>
            <div className={styles.fraseContainer}>
                <p>Este é um componente com uma frase!</p>
            </div>
            <div>
                <p className={styles.fraseContent}>Essa é outra frase!</p>
            </div>
        </div>
    )

}

export default Frase;