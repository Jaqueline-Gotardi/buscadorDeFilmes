import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
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
        <main className="min-h-screen bg-[#faffec] px-4 py-8 sm:px-8">
            <article className="max-w-5xl mx-auto">
                <Link to="/" className="inline-block mb-6 text-[#486447] font-medium hover:underline">
                    ← Voltar para a coleção
                </Link>
            <h2>{filme?.title}</h2>
            <p>{filme?.description}</p>
            <p>{filme?.director}</p>
            <p>{filme?.producer}</p>
            <p>{filme?.release_date}</p>
            <p>{filme?.rt_score}</p>
            <img src={filme?.movie_banner} alt={filme?.title} />
            </article>
        </main>
    )
}