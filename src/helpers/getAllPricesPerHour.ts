import { Car } from "../redux/data.types";

export type NumberObject = {
  value: number;
  label: number;
  count: number;
};

const getAllPricesPerHour = (arr: Car[]) => {
  const pricePerHour = arr.map((car) => {
    const price = car.rentalPrice.replace("$", "");
    const rounded = Math.ceil(Number(price) / 10) * 10;

    return rounded;
  });

  const sortedPricePerHour = pricePerHour.sort((a, b) => a - b);

  const countMap: { [key: number]: number } = sortedPricePerHour.reduce(
    (acc: { [key: number]: number }, num: number) => {
      acc[num] = (acc[num] || 0) + 1;
      return acc;
    },
    {}
  );

  let numberObjects: NumberObject[] = Object.keys(countMap).map((key) => ({
    value: Number(key),
    label: Number(key),
    count: countMap[Number(key)],
  }));

  const seen: Set<number> = new Set();

  numberObjects = numberObjects.filter((obj) => {
    if (obj.count > 1 && !seen.has(obj.value)) {
      seen.add(obj.value);
      return true;
    }
    return obj.count === 1;
  });

  const result = numberObjects.map(({ value, label }) => ({ value, label }));

  return result;
};

export default getAllPricesPerHour;
