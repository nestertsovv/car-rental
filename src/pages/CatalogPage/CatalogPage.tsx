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

  const onLoadMore = () => {
    setPage((prev) => prev + 1);
  };

  useEffect(() => {
    dispatch(getCars(page));
    dispatch(getAllFavorites());
  }, [dispatch, page]);

  return cars.results.length === 0 && !loading ? (
    <div>Something went wrong, please try again</div>
  ) : (
    <>
      <CarsList />

      {page < cars?.totalPages && (
        <button
          className="p-[10px] block mx-auto my-[10px] text-[20px] text-white bg-[#3470ff] text-center rounded-[12px]"
          onClick={onLoadMore}
        >
          Load more
        </button>
      )}
    </>
  );
};

export default CatalogPage;
