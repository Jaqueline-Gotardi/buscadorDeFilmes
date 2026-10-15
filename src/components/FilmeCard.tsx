import { Link } from "react-router-dom"
import type {Filme} from "../types/Filme"

export function FilmeCard({ filme }: { filme: Filme }) {
    return (
        <div className="bg-[#fffbeb] border border-[#f3f1e7] rounded-lg p-2 shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1">
            <h2 className="text-[#4b4242] font-bold mb-2 text-lg tracking-tight">{filme.title}</h2>
            <img src={filme.movie_banner} alt={filme.title} className="w-full border border-[#d8dfcf] rounded-md aspect-video object-cover" />
            <Link to={`/films/${filme.id}`} className="text-[#228B22] font-medium hover:underline inline-block mt-2">Ver detalhes</Link>
         </div>
    )
}