import { Link } from "react-router-dom";
import Postagem from "../../../models/Postagem";

interface CardPostagensProps {
  postagem: Postagem;
}
export const CardPostagens = ({ postagem }: CardPostagensProps) => {
  return (
    <div className="w-full py-8 px-8 max-w-sm mx-auto space-y-2 bg-white border-2 rounded-xl shadow-lg sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:gap-x-6">
      <img
        src={postagem.usuario?.foto}
        className="h-12 rounded-full"
        alt={postagem.usuario?.nome}
      />
      <div className="text-center space-y-2 sm:text-left">
        <div className="space-y-0.5">
          <p className="text-lg text-black font-semibold">
            {postagem.usuario?.nome}
          </p>
          <p className="text-slate-500 font-medium">{postagem.titulo}</p>
          <p className="text-slate-500 font-medium">{postagem.texto}</p>
        </div>
        <p className="px-4 py-1 text-sm font-semibold rounded-ful focus:ring-2">
          {postagem.tema?.descricao}
        </p>
        <p>
          Data:{" "}
          {new Intl.DateTimeFormat(undefined, {
            dateStyle: "full",
            timeStyle: "medium",
          }).format(new Date(postagem.data))}
        </p>
        <div className="flex gap-2">
          <Link
            to={`/editarpostagem/${postagem.id}`}
            className="rounded-full w-full text-white bg-indigo-400 
                    hover:bg-indigo-600 flex items-center justify-center py-2 duration-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
              />
            </svg>
            <button>Editar</button>
          </Link>
          <Link
            to={`/deletarpostagem/${postagem.id}`}
            className="rounded-full text-white bg-red-400 
                    hover:bg-red-600 w-full flex items-center justify-center duration-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
              />
            </svg>
            <button>Deletar</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
