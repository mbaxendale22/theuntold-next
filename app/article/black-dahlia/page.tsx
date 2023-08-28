import { Categories } from '@/app/utils/globals'
import Nav from '../../components/nav/Nav'

export default function blackDahliaPage() {
    return (
        <>
            <Nav
                category={Categories.memento_mori}
                primaryColor={'hsl(10, 79%, 65%)'}
            />
            <div style={{ minHeight: '100dvh' }}></div>
            <p>This is the black dahlia page!</p>
        </>
    )
}
