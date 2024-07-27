import { useEffect } from "react";
import toast from "react-hot-toast";

import Container from "../../components/Container/Container";
import CarsList from "../../components/CarsList/CarsList";
import Filters from "../../components/Filters/Filters";

import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { getCars } from "../../redux/cars/operations";
import {
  selectCars,
  selectLoading,
  selectPage,
  selectPreflightCars,
} from "../../redux/cars/selectors";
import {
  selectFilteredCars,
  selectIsEmptyInfo,
} from "../../redux/filters/selectors";
import { FilterProps } from "../../redux/data.types";
import { getCarsByFilter } from "../../helpers/getCarsByFilter";
import { setFilteredCars, setIsEmptyInfo } from "../../redux/filters/slice";
import { setCars, setPage } from "../../redux/cars/slice";

const CatalogPage = () => {
  const dispatch = useAppDispatch();
  const page = useAppSelector(selectPage);
  const cars = useAppSelector(selectCars);
  const preflightCars = useAppSelector(selectPreflightCars);
  const loading = useAppSelector(selectLoading);
  const filteredCars = useAppSelector(selectFilteredCars);
  const isEmptyInfo = useAppSelector(selectIsEmptyInfo);

  const onLoadMore = () => {
    dispatch(setPage(page + 1));
  };

  const onFilteredCars = (filters: FilterProps): void => {
    const getFilteredCars = getCarsByFilter(preflightCars.results, filters);

    getFilteredCars?.length === 0
      ? dispatch(setIsEmptyInfo("There are no matches for your request"))
      : dispatch(setIsEmptyInfo(""));

    if (!getFilteredCars) {
      toast.error("Please select a filter");
    } else {
      dispatch(setCars([]));
      dispatch(setFilteredCars(getFilteredCars));
    }
  };

  useEffect(() => {
    return () => {
      dispatch(setCars([]));
      dispatch(setPage(1));
      dispatch(setFilteredCars([]));
    };
  }, [dispatch]);

  useEffect(() => {
    dispatch(getCars(page));
  }, [dispatch, page]);

  return (
    <>
      <Container>
        {preflightCars.total !== 0 && (
          <Filters onFilteredCars={onFilteredCars} />
        )}

        {cars.length !== 0 && <CarsList cars={cars} />}

        {filteredCars.length !== 0 && !isEmptyInfo ? (
          <CarsList cars={filteredCars} />
        ) : (
          <div className="my-[50px] text-center text-[18px]">{isEmptyInfo}</div>
        )}

        {page < preflightCars?.totalPages &&
        filteredCars &&
        filteredCars.length === 0 &&
        !loading &&
        !isEmptyInfo ? (
          <div className="mx-auto my-[10px] flex justify-center">
            <button className=" animated-button purple" onClick={onLoadMore}>
              Load more
            </button>
          </div>
        ) : (
          ""
        )}
      </Container>
    </>
  );
};

export default CatalogPage;
