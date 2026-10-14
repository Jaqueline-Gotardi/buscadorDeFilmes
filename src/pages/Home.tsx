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
        <main className="bg-[#faffec] min-h-screen flex flex-col items-center">
            <header className="max-w-5xl mx-auto mb-10 text-center">
                <p className="text-[#7b8065] text-xs font-semibold uppercase tracking-[0.25em] mb-3"> Um universo de histórias </p>

                <h1 className="text-[#334437] text-3xl sm:text-5xl font-bold tracking-tight mb-4"> Studio Ghibli </h1>

                <p className="text-[#4b4242] text-base sm:text-lg leading-7 max-w-2xl mx-auto"> Explore histórias encantadoras, mundos fantásticos e personagens inesquecíveis. </p>

                <div className="w-16 h-1 bg-[#a8b58a] rounded-full mx-auto mt-6" />
            </header>
            
                <h1 className="text-[#fc0000] font-bold text-2xl mt-4">Filmes da API Studio Ghibli</h1>
                
                <div className="grid grid-cols-2 gap-4 mt-4 w-[90%] mb-5">
                    {filmes.map((filme) => (
                        <div key={filme.id}>
                            <FilmeCard filme={filme} />
                        </div>
                    ))}
                </div>
        </main>
    )
}