import { useEffect, useState } from "react"
import type { Filme } from "../types/Filme"
import { FilmeCard } from "../components/FilmeCard"

export function Home() {

const [ filmes, setFilmes ] = useState<Filme[]>([])

useEffect(() => {
    async function buscarDados() {
        const filmes = await fetch('https://ghibliapi.vercel.app/films')
        const response: Filme[] = await filmes.json()
        
        const ordernarFilmes = [...response].sort((a, b) => a.title.localeCompare(b.title));
        const primeirosFilmes = ordernarFilmes.slice(0, 10);

        setFilmes(primeirosFilmes)
    }
    buscarDados()
}, [])

return (
    <main className="min-h-screen bg-[#faffec] px-4 py-10 sm:px-8">
        <header className="max-w-5xl mx-auto mb-10 text-center">
            <p className="text-[#7b8065] text-xs font-semibold uppercase tracking-[0.25em] mb-3"> Um universo de histórias </p>

            <h1 className="text-[#334437] text-3xl sm:text-5xl font-bold tracking-tight mb-4"> Studio Ghibli </h1>

            <p className="text-[#4b4242] text-base sm:text-lg leading-7 max-w-2xl mx-auto"> Explore histórias encantadoras, mundos fantásticos e personagens inesquecíveis. </p>

            <div className="w-16 h-1 bg-[#a8b58a] rounded-full mx-auto mt-6" />
        </header>

        <section className="max-w-5xl mx-auto">
            <div className="flex items-center justify-between mb-5">
                <h2 className="text-[#334437] text-xl sm:text-2xl font-bold">
                    Nossa coleção
                </h2>

                <span className="text-[#7b8065] text-sm">
                    {filmes.length} filmes
                </span>
            </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {filmes.map((filme) => (
                        <FilmeCard key={filme.id} filme={filme}
                        />
                    ))}
                </div>
        </section>

        <footer className="max-w-5xl mx-auto mt-12 pt-5 border-t border-[#d8dfcf] text-center">
            <p className="text-[#7b8065] text-xs">
                Uma coleção de filmes do Studio Ghibli · Dados fornecidos pela API
            </p>
        </footer>
    </main>
)
}