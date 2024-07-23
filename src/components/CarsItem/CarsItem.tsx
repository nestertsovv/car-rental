import clsx from "clsx";

import { Car } from "../../redux/data.types";

import { Icon } from "../Icon/Icon";
import s from "./CarsItem.module.css";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { selectFavorites } from "../../redux/favorites/selectors";
import {
  addToFavorites,
  deleteFromFavorites,
  getAllFavorites,
} from "../../redux/favorites/operations";
import { useEffect, useState } from "react";

type Props = {
  car: Car;
};

const CarsItem = ({ car }: Props) => {
  const dispatch = useAppDispatch();
  const favoritesList = useAppSelector(selectFavorites);
  // const [isFavorite, setIsFavorite] = useState(false);
  const isFavorite = favoritesList.find((item) => item.id === car.id);

  const address = car.address.split(", ");
  const city = address[1];
  const country = address[2];

  const isPremium =
    car.description.toLowerCase().includes("premium") ||
    car.accessories.toString().toLowerCase().includes("premium");

  const accessories =
    car.accessories[0].length > 21
      ? car.accessories[0].slice(0, 21) + "..."
      : car.accessories[0];

  const onAToggleToFavorite = (car: Car) => {
    const itemForDelete = favoritesList.find((item) => item.id === car.id);

    if (itemForDelete) {
      dispatch(deleteFromFavorites(itemForDelete.id_))
        .unwrap()
        .then(() => {
          dispatch(getAllFavorites());
        });
    } else {
      dispatch(addToFavorites(car))
        .unwrap()
        .then(() => {
          dispatch(getAllFavorites());
        });
    }
  };

  return (
    <li className={clsx(s.item)}>
      <div className={clsx(s.imageWrapper, "h-[268px] mb-[14px] relative")}>
        <button
          className="absolute top-[15px] right-[15px]"
          onClick={() => onAToggleToFavorite(car)}
        >
          <Icon
            name="heart"
            size={18}
            stroke={isFavorite ? "#3470ff" : "rgba(255, 255, 255, 1)"}
            fill={isFavorite && "#3470ff"}
            className={clsx(s.favorite, isFavorite && s.isFavorite)}
          />
        </button>
        <img
          src={car.img}
          alt={`${car.make} - ${car.model}`}
          className="block w-[100%] h-[100%] rounded-[14px]"
        />
      </div>
      <div className={clsx(s.infoMain)}>
        <h3 className="text-[16px] font-semibold mb-[8px] flex justify-between">
          <span>
            {car.make} <span className="text-[#3470FF]">{car.model}</span>
            ,&nbsp;
            {car.year}
          </span>
          <span>{car.rentalPrice}</span>
        </h3>
      </div>
      <div className={clsx(s.infoAdditional)}>
        <ul className={clsx(s.infoList)}>
          <li>{city}</li>
          <li>{country}</li>
          <li>{car.rentalCompany}</li>
          {isPremium && <li>Premium</li>}
        </ul>
        <ul className={clsx(s.infoList)}>
          <li>{car.type}</li>
          <li>{car.model}</li>
          <li>{car.id}</li>
          <li>{accessories}</li>
        </ul>
      </div>
      <div className={clsx(s.btnWrapper)}>
        <button className={clsx(s.btn)}>Learn more</button>
      </div>
    </li>
  );
};

export default CarsItem;
