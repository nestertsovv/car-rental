import CarsItem from "../CarsItem/CarsItem";

import { Car } from "../../redux/data.types";

type Props = {
  cars: Car[] | [];
};

const CarsList = ({ cars }: Props) => {
  return (
    <div>
      <ul className="flex flex-wrap mx-[-12px]">
        {cars?.map((car) => (
          <CarsItem key={car.id} car={car} />
        ))}
      </ul>
    </div>
  );
};

export default CarsList;
