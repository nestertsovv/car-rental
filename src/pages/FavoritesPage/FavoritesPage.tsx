import CarsList from "../../components/CarsList/CarsList";

import { selectFavorites } from "../../redux/favorites/selectors";
import { useAppSelector } from "../../redux/hooks";

const FavoritesPage = () => {
  const favoritesCars = useAppSelector(selectFavorites);

  return (
    <>
      {favoritesCars.length !== 0 ? (
        <CarsList cars={favoritesCars} />
      ) : (
        <div className="my-[50px] text-center text-[18px]">
          Your favorites list is still empty
        </div>
      )}
    </>
  );
};

export default FavoritesPage;
