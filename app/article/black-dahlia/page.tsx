import { Categories, PRIMARY_RED } from '@/app/utils/globals'
import Nav from '../../components/nav/Nav'

export default function BlackDahliaPage() {
    return (
        <>
            <Nav
                category={Categories.memento_mori}
                primaryColor={PRIMARY_RED}
            />
            <main style={{ minHeight: '100dvh' }}>
                <p>This is the black dahlia page!</p>
            </main>
        </>
    )
}
