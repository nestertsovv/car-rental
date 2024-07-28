import { useState } from "react";
import clsx from "clsx";
import toast from "react-hot-toast";
import { LazyLoadImage } from "react-lazy-load-image-component";

import { Icon } from "../Icon/Icon";
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
            <svg
              width="18"
              height="16"
              viewBox="0 0 18 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.6301 2.4575C15.247 2.07425 14.7922 1.77023 14.2916 1.56281C13.791 1.35539 13.2545 1.24863 12.7126 1.24863C12.1707 1.24863 11.6342 1.35539 11.1336 1.56281C10.633 1.77023 10.1782 2.07425 9.79509 2.4575L9.00009 3.2525L8.20509 2.4575C7.43132 1.68373 6.38186 1.24903 5.28759 1.24903C4.19331 1.24903 3.14386 1.68373 2.37009 2.4575C1.59632 3.23127 1.16162 4.28072 1.16162 5.375C1.16162 6.46927 1.59632 7.51873 2.37009 8.2925L3.16509 9.0875L9.00009 14.9225L14.8351 9.0875L15.6301 8.2925C16.0133 7.90943 16.3174 7.45461 16.5248 6.95401C16.7322 6.45342 16.839 5.91686 16.839 5.375C16.839 4.83313 16.7322 4.29657 16.5248 3.79598C16.3174 3.29539 16.0133 2.84056 15.6301 2.4575Z"
                stroke="white"
                strokeOpacity="0.8"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {/* <Icon
              name="heart"
              size={18}
              stroke={isFavorite ? "var(--aqua-color)" : "var(--white-color)"}
              fill={isFavorite && "var(--aqua-color)"}
              className={clsx(s.favorite, isFavorite && s.isFavorite)}
            /> */}
          </button>
          {/* <LazyLoadImage
            src={car.img}
            alt={`${car.make} - ${car.model}`}
            wrapperProps={{
              style: { transitionDelay: "0.5s" },
            }}
            delayTime={500}
            effect="blur"
            className="block w-[100%] h-[100%] rounded-[14px]"
          /> */}
          <img
            src={car.img}
            alt={`${car.make} - ${car.model}`}
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
