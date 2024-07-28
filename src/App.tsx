import { Suspense, lazy, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";

import Loader from "./components/Loader/Loader";

import { useAppDispatch } from "./redux/hooks";
import { getAllCars } from "./redux/cars/operations";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const CatalogPage = lazy(() => import("./pages/CatalogPage/CatalogPage"));
const FavoritesPage = lazy(() => import("./pages/FavoritesPage/FavoritesPage"));
const Header = lazy(() => import("./components/Header/Header"));

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllCars());
  }, [dispatch]);

  return (
    <>
      <Toaster position="top-center" />
      <Suspense fallback={<Loader />}>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
