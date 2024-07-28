import clsx from "clsx";
import { LazyLoadImage } from "react-lazy-load-image-component";

import { Car } from "../../redux/data.types";

import "react-lazy-load-image-component/src/effects/blur.css";
import s from "./CustomModalContent.module.css";

type Props = {
  car: Car;
};

const CustomModalContent = ({ car }: Props) => {
  const address = car.address.split(", ");
  const city = address[1];
  const country = address[2];
  const price = car.rentalPrice.replace("$", "") + "$";

  return (
    <>
      <div className={clsx(s.imgWrapper, "mb-[14px]")}>
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
      <div className={clsx(s.infoMain, "w-[100%]")}>
        <h3 className="text-[16px] font-semibold mb-[8px] flex justify-between gap-[4px]">
          <span>
            {car.make}
            <span className="text-[var(--aqua-color)]"> {car.model}</span>
            ,&nbsp;
            {car.year}
          </span>
        </h3>
      </div>
      <div className={clsx(s.infoAdditional, "w-[100%] mb-[14px]")}>
        <ul className={clsx(s.infoList)}>
          <li>{city}</li>
          <li>{country}</li>
          <li>Id: {car.id}</li>
          <li>Year: {car.year}</li>
          <li>Type: {car.type}</li>
        </ul>
        <ul className={clsx(s.infoList)}>
          <li>Fuel Consumption: {car.fuelConsumption}</li>
          <li>Engine Size: {car.engineSize}</li>
        </ul>
      </div>
      <div className="mb-[24px]">
        <p>{car.description}</p>
      </div>
      <div className="mb-[24px]">
        <h4 className="mb-[8px] font-semibold">
          Accessories and functionalities:
        </h4>
        <ul className={clsx(s.infoList)}>
          {car.accessories?.map((acs) => (
            <li key={acs}>{acs}</li>
          ))}
        </ul>
        <ul className={clsx(s.infoList)}>
          {car.functionalities?.map((fnc) => (
            <li key={fnc}>{fnc}</li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="mb-[8px] font-semibold">Rental Conditions:</h4>
        <ul className={clsx(s.conditionsList, "flex flex-wrap gap-[8px]")}>
          <li>
            Minimum age:<span className="text-[var(--aqua-color)]"> 25</span>
          </li>
          <li>Valid driver's license</li>
          <li>Security deposit required</li>
          <li>
            Mileage:
            <span className="text-[var(--aqua-color)]">
              {" "}
              {car.mileage.toLocaleString("en-US")}
            </span>
          </li>
          <li>
            Price: <span className="text-[var(--aqua-color)]">{price}</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default CustomModalContent;
