import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { getCars } from "../../redux/cars/operations";
import { selectCars, selectLoading } from "../../redux/cars/selectors";
import CarsList from "../../components/CarsList/CarsList";
import { getAllFavorites } from "../../redux/favorites/operations";

const CatalogPage = () => {
  const dispatch = useAppDispatch();
  const [page, setPage] = useState(1);
  const cars = useAppSelector(selectCars);
  const loading = useAppSelector(selectLoading);

  useEffect(() => {
    dispatch(getCars(page));
    dispatch(getAllFavorites());
  }, [dispatch]);

  return cars.length === 0 && !loading ? (
    <div>Something went wrong, please try again</div>
  ) : (
    <>
      <h1 className="text-center font-semibold text-[30px]">Catalog page</h1>

      <CarsList />
    </>
  );
};

export default CatalogPage;
