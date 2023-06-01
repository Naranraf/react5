
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PokemonsList from "./pages/Pokedex";
import Pokedex from "./pages/Pokedex";
import MainLayout from "./components/MainLayout";
import ProtectedRoutes from "./components/ProtectedRoutes";

function App() {
  //Home
  //pokemons
  //pokemon-detail

  return (
    <HashRouter>
      <nav>navegacion</nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemons" element={<PokemonsList />} />



        <Route
          element={<MainLayout />}
        >
          <Route
            path="/pokemons/:id"
            element={<Pokedex />}
          />
        </Route>


        <Route element={<ProtectedRoutes />}>
          <Route path="/pokemons/:id" element={<Pokedex />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;


