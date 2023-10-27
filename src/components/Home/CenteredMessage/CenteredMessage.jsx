

import styles from "../Home.module.css"

const CenteredMessage = ({ message }) => {
    return <h2 className={styles.bodyContainer}>{message}</h2>
}

export default CenteredMessage;