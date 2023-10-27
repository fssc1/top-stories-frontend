import Card from "../../../Card/Card"
import styles from "../../../Home.module.css"

const StoriesRenderer = ({ stories }) => {
    return <div className={styles.centeredFlex}>
        {stories.map(({ url, title, multimedia }, index) => (<a href={url} key={index} target='_blank'><Card title={title} imageUrl={multimedia[0].url} /></a>))}
    </div>
}

export default StoriesRenderer