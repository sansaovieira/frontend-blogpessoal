import { ReactNode, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { ToastAlerta } from "../../utils/ToastAlerta";

export const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { usuario, handleLogout } = useContext(AuthContext);

  function logout() {
    handleLogout();
    ToastAlerta("O Usuário foi desconectado com sucesso!", "sucesso");
    navigate("/");
  }

  let component: ReactNode;

  const getNavLinkClass = (path: string) => {
    return location.pathname === path
      ? "hover:underline text-yellow-300"
      : "hover:underline"
  }

  if (usuario.token !== "") {
    component = (
      <div
        className="w-full bg-indigo-900 text-white
                flex justify-center py-4"
      >
        <div className="container flex justify-between text-lg">
          <Link to="/home" className="text-2xl font-bold">
            Blog Pessoal
          </Link>

          <div className="flex gap-4">
            <Link to="/postagens" className={getNavLinkClass("/postagens")}>
              Postagens
            </Link>
            <Link to="/temas" className={getNavLinkClass("/temas")}>
              Temas
            </Link>
            <Link to="/cadastrartema" className={getNavLinkClass("/cadastrartema")}>
              Cadastrar tema
            </Link>
            <Link to="/perfil" className={getNavLinkClass("/perfil")}>
              Perfil
            </Link>
            <Link to="" onClick={logout} className="hover:underline">
              Sair
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return <>{component}</>;
}

