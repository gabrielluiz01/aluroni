import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/home";
import Cardapio from "pages/Cardapio";
import Menu from "components/Menu";
import Layout from "components/layout";
import Sobre from "pages/sobre";
import Footer from "components/footer";
import NotFound from "pages/NotFound";
import Prato from "pages/prato";
export default function AppRouter() {
  return (
    <main className="container">
      <Router>
        <Menu />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="cardapio" element={<Cardapio />} />
            <Route path="sobre" element={<Sobre />} />
          </Route>
          <Route path="prato/:id" element={<Prato />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </main>
  );
}
