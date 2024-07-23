import { selectCars } from "../../redux/cars/selectors";
import { useAppSelector } from "../../redux/hooks";
import CarsItem from "../CarsItem/CarsItem";

const CarsList = () => {
  const cars = useAppSelector(selectCars);

  return (
    <div>
      <ul className="flex flex-wrap">
        {cars.map((car) => (
          <CarsItem key={car.id} car={car} />
        ))}
      </ul>
    </div>
  );
};

export default CarsList;
