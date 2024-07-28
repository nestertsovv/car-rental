import { useState } from "react";
import clsx from "clsx";
import toast from "react-hot-toast";
import { LazyLoadImage } from "react-lazy-load-image-component";

import CustomModalContent from "../CustomModalContent/CustomModalContent";
import CustomModal from "../CustomModal/CustomModal";

import { Car } from "../../redux/data.types";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { selectFavorites } from "../../redux/favorites/selectors";
import {
  addToFavorites,
  removeFromFavorites,
} from "../../redux/favorites/slice";

import "react-lazy-load-image-component/src/effects/blur.css";
import s from "./CarsItem.module.css";
import IconHeart from "../Icons/IconHeart/IconHeart";

type Props = {
  car: Car;
};

const CarsItem = ({ car }: Props) => {
  const dispatch = useAppDispatch();
  const favoritesList = useAppSelector(selectFavorites);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const isFavorite = favoritesList.find((item) => item.id === car.id);

  const address = car.address.split(", ");
  const city = address[1];
  const country = address[2];

  const isPremium =
    car.description.toLowerCase().includes("premium") ||
    car.accessories.toString().toLowerCase().includes("premium");

  const accessories =
    car.accessories[0].length > 13
      ? car.accessories[0].slice(0, 13) + "..."
      : car.accessories[0];

  const onToggleToFavorite = (car: Car) => {
    const itemForDelete = favoritesList?.find((item) => item.id === car.id);

    if (itemForDelete) {
      dispatch(removeFromFavorites(itemForDelete.id));
      toast.success(
        `${car.make} ${car.model} was successfully deleted from favorites`
      );
    } else {
      dispatch(addToFavorites(car));
      toast.success(
        `${car.make} ${car.model} was successfully added to favorites`
      );
    }
  };

  const onOpenModal = (): void => {
    setModalIsOpen(true);
  };

  const onCloseModal = (): void => {
    setModalIsOpen(false);
  };

  return (
    <>
      <li className={clsx(s.item)}>
        <div
          className={clsx(
            s.imageWrapper,
            "h-[268px] mb-[14px] relative w-[100%]"
          )}
        >
          <button
            className="absolute top-[15px] right-[15px] z-[1]"
            onClick={() => onToggleToFavorite(car)}
          >
            <IconHeart
              fill={isFavorite && "var(--aqua-color)"}
              stroke={isFavorite && "var(--aqua-color)"}
              className={clsx(s.favorite, isFavorite && s.isFavorite)}
            />
          </button>
          <LazyLoadImage
            src={car.img}
            alt={`${car.make} - ${car.model}`}
            wrapperProps={{
              style: { transitionDelay: "0.5s" },
            }}
            delayTime={500}
            effect="blur"
            className="block w-[100%] h-[100%] rounded-[14px]"
          />
        </div>
        <div
          className={clsx(
            s.infoMain,
            "w-[100%] flex justify-between gap-[4px] mb-[8px]"
          )}
        >
          <h2 className="text-[16px] font-semibold">
            <span>
              {car.make}
              <span className="text-[var(--aqua-color)]"> {car.model}</span>
              ,&nbsp;
              {car.year}
            </span>
          </h2>
          <span className="text-[16px] font-semibold">{car.rentalPrice}</span>
        </div>
        <div className={clsx(s.infoAdditional, "w-[100%]")}>
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
        <div className={clsx(s.btnWrapper, "w-[100%]")}>
          <button
            onClick={onOpenModal}
            className={clsx(s.btn, "animated-button aqua")}
          >
            Learn more
          </button>
        </div>
      </li>

      {modalIsOpen && (
        <CustomModal isOpen={modalIsOpen} onClose={onCloseModal}>
          <CustomModalContent car={car} />
        </CustomModal>
      )}
    </>
  );
};

export default CarsItem;
