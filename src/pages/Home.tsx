import { useEffect, useState } from "react"

export function Home() {

    const [ filmes, setFilmes ] = useState<Filmes />([])

    useEffect(() => {

        async function buscarDados() {
            const filmes = await fetch('https://ghibliapi.vercel.app/films')
            const response = filmes.json()
        }
    })

    return (
        <main className="bg-[#faffec] min-h-screen flex justify-center">
                <h1 className="text-[#fc0000] font-bold text-2xl mt-4">Filmes da API Studio Ghibli</h1>


                <div>

                </div>
        </main>
    )
}