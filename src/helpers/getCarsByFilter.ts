import { Car, FilterProps } from "../redux/data.types";

export const getCarsByFilter = (cars: Car[], filters: FilterProps) => {
  if (
    !filters.brand &&
    !filters.perHour &&
    !filters.mileageFrom &&
    !filters.mileageTo
  )
    return;

  let filteredCars = cars;

  const pricePerHourFilter = Number(filters?.perHour);
  const mileageFrom = Number(filters?.mileageFrom);
  const mileageTo = Number(filters?.mileageTo);

  if (filters.brand) {
    filteredCars = filteredCars.filter((car) => car.make === filters?.brand);
  }

  if (filters.perHour) {
    filteredCars = filteredCars.filter((car) => {
      const pricePerHourCar = Number(car.rentalPrice.replace("$", ""));
      return pricePerHourCar <= pricePerHourFilter;
    });
  }

  if (filters.mileageFrom) {
    filteredCars = filteredCars.filter((car) => car.mileage >= mileageFrom);
  }

  if (filters.mileageTo) {
    filteredCars = filteredCars.filter((car) => car.mileage <= mileageTo);
  }

  return filteredCars;
};
