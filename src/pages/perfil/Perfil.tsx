import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../../contexts/AuthContext";
import { ToastAlerta } from "../../utils/ToastAlerta";

function Perfil() {
  const navigate = useNavigate();

  const { usuario } = useContext(AuthContext);

  useEffect(() => {
    if (usuario.token === "") {
      ToastAlerta("Você precisa estar logado", "info");
      navigate("/");
    }
  }, [usuario.token]);

  return (
    <div className="flex justify-center items-start min-h-screen bg-gray-100">
    <div className="w-full max-w-2xl mt-16 flex flex-col gap-2 p-8 sm:flex-row sm:gap-6 bg-white border-2 rounded-xl shadow-lg sm:py-4 sm:items-center sm:space-y-0 sm:gap-x-6">
      <img
        className="mx-auto block h-20 rounded-full sm:mx-0 sm:shrink-0"
        // src={usuario.foto}
        src="https://ik.imagekit.io/ios4z1d4u/eu.jpg?updatedAt=1737592186386"
        alt={usuario.nome}
      />
      <div className="space-y-2 text-center sm:text-left">
        <div className="space-y-0.5">
          <p className="text-lg font-semibold text-black">{usuario.nome}</p>
          <p className="text-lg font-semibold text-black">{usuario.usuario}</p>
          <p className="font-medium text-gray-500">Analista de Software - Desenvolvedor Fullstack Java</p>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Perfil;
