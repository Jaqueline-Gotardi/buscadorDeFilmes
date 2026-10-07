import { useEffect, useState } from "react"

export function Home() {

    const [ filmes, setFilmes ] = useState<Filmes />([])

    useEffect(() => {
        async function buscarDados() {
            const filmes = await fetch('https://ghibliapi.vercel.app/films')
            const response = await filmes.json()
            
            const ordernarFilmes = [...response].sort((a, b) => a.title.localeCompare(b.title))


            setFilmes(ordernarFilmes)
        }
        buscarDados()
    }, [])

    return (
        <main className="bg-[#faffec] min-h-screen flex justify-center">
                <h1 className="text-[#fc0000] font-bold text-2xl mt-4">Filmes da API Studio Ghibli</h1>


                <div>

                </div>
        </main>
    )
}