import { useEffect, useState } from "react";
import { useAppDispatch } from "../../redux/hooks";
import { getCars } from "../../redux/cars/operations";

const CatalogPage = () => {
  const dispatch = useAppDispatch();
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(getCars(page));
    dispatch(getCars(page));
  }, [dispatch]);

  return <div>Catalog page</div>;
};

export default CatalogPage;
