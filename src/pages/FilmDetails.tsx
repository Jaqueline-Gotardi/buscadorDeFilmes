import { useParams, Link } from 'react-router-dom'
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
        <main className="min-h-screen bg-[#faffec] px-4 py-8 sm:px-8">
            <article className="max-w-5xl mx-auto">
                <Link to="/" className="inline-block mb-6 text-[#486447] font-medium hover:underline">
                ← Voltar para a coleção
                </Link>

                <div className="bg-[#fffbeb] border border-[#e5e7d8] rounded-2xl shadow-md overflow-hidden">
                    <img src={filme?.movie_banner} alt={`Banner do filme ${filme?.title}`} className="w-full aspect-video object-cover" />

                    <div className="p-5 sm:p-8">
                        <p className="text-[#7b8065] text-xs font-semibold uppercase tracking-[0.2em] mb-3">
                        Studio Ghibli · Film Collection
                        </p>
                    <h1 className="text-[#334437] text-3xl sm:text-4xl font-bold tracking-tight mb-5">
                        {filme?.title}
                    </h1>
                    
                    <p className="text-[#4b4242] leading-7 mb-8">
                        {filme?.description}
                    </p>

                    <div className="border-t border-[#d8dfcf] pt-6">
                        <h2 className="text-[#334437] text-lg font-bold mb-5">
                            Ficha técnica
                        </h2>
                        
                        <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                            <div>
                                <dt className="text-[#7b8065] text-xs font-semibold uppercase tracking-wider mb-1"> 
                                    Diretor
                                </dt>
                                <dd className="text-[#334437] font-medium">
                                    {filme?.director}
                                </dd>
                            </div>
                            
                            <div>
                                <dt className="text-[#7b8065] text-xs font-semibold uppercase tracking-wider mb-1">
                                    Produtor
                                </dt>
                                <dd className="text-[#334437] font-medium">
                                    {filme?.producer}
                                </dd>
                                </div>

                            <div>
                                <dt className="text-[#7b8065] text-xs font-semibold uppercase tracking-wider mb-1">
                                    Ano de lançamento
                                </dt>
                                <dd className="text-[#334437] font-medium">
                                    {filme?.release_date}
                                </dd>
                            </div>
                            
                            <div>
                                <dt className="text-[#7b8065] text-xs font-semibold uppercase tracking-wider mb-1">
                                    Rotten Tomatoes
                                </dt>
                                <dd className="text-[#334437] font-medium">
                                    {filme?.rt_score}/100
                                </dd>
                                </div>
                            </dl>
                        </div>
                    </div>
                </div>
            </article>
        </main>
    )
}