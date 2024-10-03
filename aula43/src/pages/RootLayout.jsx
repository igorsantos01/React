import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const RootLayout = () => {
  return (
    <>
      <Header />
      <main>
        <p>
          Esse é o layout principal. Abaixo vai estar o conteúdo dinâmico de
          cada rota
        </p>
        <hr />
        <Outlet />
      </main>
      <footer>
        <p>Feito com React Router DOM</p>
      </footer>
    </>
  );
};

export default RootLayout;
