import { articleData } from '@/app/data/categorisedArticles'
import Nav from '@/app/components/nav/Nav'
import { PRIMARY_RED } from '@/app/utils/globals'
import styles from './categoryPage.module.css'
import ArticleCard from '@/app/components/articleCard'

interface Props {
    params: { slug: string }
}

export default function CategoryPage(props: Props) {
    const { params } = props

    const [data] = articleData.filter((data) => data.category === params.slug)

    if (!data.articles.length) {
        return (
            <>
                <Nav category={data.category} primaryColor={PRIMARY_RED} />
                <main className={styles.wrapper}>
                    <h1>There are currently no articles in this category!</h1>
                    <h3>Check back soon...</h3>
                </main>
            </>
        )
    }

    return (
        <>
            <Nav category={data.category} primaryColor={PRIMARY_RED} />
            <main className={styles.wrapper}>
                {data.articles.map((article) => (
                    <ArticleCard article={article} key={article.id} />
                ))}
            </main>
        </>
    )
}
