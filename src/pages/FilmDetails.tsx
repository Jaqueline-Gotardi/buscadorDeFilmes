import { useParams } from 'react-router-dom';

export function FilmDetails() {

    const {id} = useParams<{id: string}>()

    return (
        <main>

        </main>
    )
}