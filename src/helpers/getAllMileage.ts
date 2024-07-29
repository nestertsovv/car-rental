import { Car, NumberObject } from "../redux/data.types";

const getAllMileage = (arr: Car[], type: string) => {
  const allMileage = arr.map((car) => {
    const rounded = Math.round(Number(car.mileage) / 1000) * 1000;

    const roundedTo500 =
      Number(car.mileage) > rounded ? rounded + 500 : rounded;

    return roundedTo500;
  });

  const minMileage = Math.min(...allMileage);
  const minIndex = allMileage.indexOf(minMileage);

  if (minIndex !== -1) {
    allMileage[minIndex] = allMileage[minIndex] - 500;
  }

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
    if (obj.count > 1 && !seen.has(obj.value as number)) {
      seen.add(obj.value as number);
      return true;
    }
    return obj.count === 1;
  });

  const result = mileageObjects.map(({ value, label }) => ({ value, label }));

  const totalResult = result.map((el) => {
    el.label = `${type} ${el.label.toLocaleString("en-US")}`;

    return el;
  });

  type === "From" ? totalResult.pop() : totalResult.shift();

  return totalResult;
};

export default getAllMileage;
