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