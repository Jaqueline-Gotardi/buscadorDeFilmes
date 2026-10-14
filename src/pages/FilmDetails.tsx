import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import type { Filme } from "../types/Filme"

export function FilmDetails() {

    const [filme, setFilme] = useState<Filme | null>(null)
    const {id} = useParams<{id: string}>()

    useEffect(() => {
        async function buscarFilme() {
            const response = await fetch(`https://ghibliapi.vercel.app/films/${id}`)
            const filme: Filme = await response.json()

            setFilme(filme)
        }
        buscarFilme()
    },[id])

    return (
        <main>
            <h2>{filme?.title}</h2>
            <p>{filme?.description}</p>
            <p>{filme?.director}</p>
            <p>{filme?.producer}</p>
            <p>{filme?.release_date}</p>
            <p>{filme?.rt_score}</p>
            <img src={filme?.movie_banner} alt={filme?.title} />
        </main>
    )
}