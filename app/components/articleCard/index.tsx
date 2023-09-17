import styles from './articleCard.module.css'
import Link from 'next/link'

interface Props {
    article: {
        id: number
        title: string
        subtitle: string
        thumbnail: string
        article_url: string
    }
}

export default function ArticleCard(props: Props) {
    const { article } = props

    return (
        <Link href={article.article_url}>
            <div className={styles.card__wrapper}>
                <div className={styles.text__wrapper}>
                    <h2>{article.title}</h2>
                    <h4>{article.subtitle}</h4>
                </div>
                <div className={styles.img__wrapper}>
                    <img src={article.thumbnail} alt={article.title} />
                </div>
            </div>
        </Link>
    )
}
