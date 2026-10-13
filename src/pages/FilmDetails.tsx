import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import type { Filme } from "../types/Filme"

export function FilmDetails() {

    const [filme, setFilme] = useState<Filme | null>(null)
    const {id} = useParams<{id: string}>()

    useEffect(() => {

    },[id])

    return (
        <main>
            <h2></h2>
        </main>
    )
}