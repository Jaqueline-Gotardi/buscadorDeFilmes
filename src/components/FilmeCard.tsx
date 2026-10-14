import { Link } from "react-router-dom"
import type {Filme} from "../types/Filme"

export function FilmeCard({ filme }: { filme: Filme }) {
    return (
        <div className="bg-[#fffbeb] border border-[#f3f1e7] rounded-lg p-2 shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1">
            <h2 className="text-[#4b4242] font-bold">{filme.title}</h2>
            <img src={filme.movie_banner} alt={filme.title} className="w-full border-2 border-[#33443766] rounded-lg aspect-video object-cover overflow-hidden" />
            <Link to={`/films/${filme.id}`}>Ver detalhes</Link>
         </div>
    )
}