import { useParams } from 'react-router-dom'
import { useEffect } from 'react'

export function FilmDetails() {

    const {id} = useParams<{id: string}>()

    useEffect(() => {
        
    })

    return (
        <main>
            <h2></h2>
        </main>
    )
}