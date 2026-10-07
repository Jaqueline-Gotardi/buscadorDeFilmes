import { useEffect, useState } from "react"
import type { Filme } from "../types/Filme"

export function Home() {

    const [ filmes, setFilmes ] = useState<Filme[]>([])

    useEffect(() => {
        async function buscarDados() {
            const filmes = await fetch('https://ghibliapi.vercel.app/films')
            const response = await filmes.json()
            
            const ordernarFilmes = [...response].sort((a, b) => a.title.localeCompare(b.title));
            const primeirosFilmes = ordernarFilmes.slice(0, 10);

            setFilmes(primeirosFilmes)
        }
        buscarDados()
    }, [])

    return (
        <main className="bg-[#faffec] min-h-screen flex justify-center">
                <h1 className="text-[#fc0000] font-bold text-2xl mt-4">Filmes da API Studio Ghibli</h1>
                
                <div>
                    {filmes.map((filme) => (
                        <div key={filme.id}>
                            <h2>{filme.title}</h2>
                            <img src={filme.movie_banner} />

                        </div>
                    ))}
                </div>
        </main>
    )
}