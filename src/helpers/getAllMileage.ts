import { Car } from "../redux/data.types";
import { NumberObject } from "./getAllPricesPerHour";

const getAllMileage = (arr: Car[]) => {
  const allMileage = arr.map((car) => {
    const rounded = Math.round(Number(car.mileage) / 1000) * 1000;

    const roundedTo500 =
      Number(car.mileage) > rounded ? rounded + 500 : rounded;

    return roundedTo500;
  });

  const minMileage = Math.min(...allMileage) - 500;
  const maxMileage = Math.max(...allMileage);

  const sortedAllMileage = allMileage.sort((a, b) => a - b);

  const countMap: { [key: number]: number } = sortedAllMileage.reduce(
    (acc: { [key: number]: number }, num: number) => {
      acc[num] = (acc[num] || 0) + 1;
      return acc;
    },
    {}
  );

  let mileageObjects: NumberObject[] = Object.keys(countMap).map((key) => ({
    value: Number(key),
    label: Number(key),
    count: countMap[Number(key)],
  }));

  const seen: Set<number> = new Set();

  mileageObjects = mileageObjects.filter((obj) => {
    if (obj.count > 1 && !seen.has(obj.value)) {
      seen.add(obj.value);
      return true;
    }
    return obj.count === 1;
  });

  const result = mileageObjects.map(({ value, label }) => ({ value, label }));

  return result;
};

export default getAllMileage;
