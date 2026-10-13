import type {Filme} from "../types/Filme"

export function FilmeCard({ filme }: { filme: Filme }) {
    return (
        <div>
            <h2 className="text-[#4b4242] font-bold">{filme.title}</h2>
            <img src={filme.movie_banner} alt={filme.title} className="w-full border-2 border-[#33443766] rounded-lg" />
        </div>
    )
}