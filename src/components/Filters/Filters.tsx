import { useRef, useState } from "react";
import Select, { SelectInstance } from "react-select";
import clsx from "clsx";

import { brandsName } from "../../helpers/brands";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { selectPage, selectPreflightCars } from "../../redux/cars/selectors";
import getAllPricesPerHour from "../../helpers/getAllPricesPerHour";
import getAllMileage from "../../helpers/getAllMileage";
import { FilterProps } from "../../redux/data.types";
import { colorStyles } from "./FiltersStyles";
import { setFilteredCars, setIsEmptyInfo } from "../../redux/filters/slice";
import {
  selectFilteredCars,
  selectIsEmptyInfo,
} from "../../redux/filters/selectors";

import { setPage } from "../../redux/cars/slice";
import { getCars } from "../../redux/cars/operations";

import s from "./Filters.module.css";

type Props = {
  onFilteredCars: (filters: FilterProps) => void;
};

type OptionType = {
  label: string | undefined;
  value: number | string | undefined;
};

const Filters = ({ onFilteredCars }: Props) => {
  const dispatch = useAppDispatch();
  const preflightCars = useAppSelector(selectPreflightCars);
  const pricesPerHourList = getAllPricesPerHour(preflightCars.results);
  const mileageFromList = getAllMileage(preflightCars.results, "From");
  const mileageToList = getAllMileage(preflightCars.results, "To");
  const filteredCars = useAppSelector(selectFilteredCars);
  const isEmptyInfo = useAppSelector(selectIsEmptyInfo);
  const page = useAppSelector(selectPage);

  const [filters, setFilters] = useState<FilterProps>({});

  const selectBrandRef = useRef<SelectInstance | null>(null);
  const selectPerHourRef = useRef<SelectInstance | null>(null);
  const selectMileageFromRef = useRef<SelectInstance | null>(null);
  const selectMileageToRef = useRef<SelectInstance | null>(null);

  const [brandValue, setBrandValue] = useState<unknown>(null);
  const [pricePerHourValue, setPricePerHourValue] = useState<unknown>(null);
  const [mileageFromValue, setMileageFromValue] = useState<unknown>(null);
  const [mileageToValue, setMileageToValue] = useState<unknown>(null);

  const onChangeFilter = (value: OptionType, type: string): void => {
    if (type === "brand") {
      setFilters({ ...filters, brand: value.value as string });

      selectBrandRef.current?.blur();
    }
    if (type === "pricePerHour") {
      setFilters({ ...filters, perHour: value.value as string });
      selectPerHourRef.current?.blur();
    }
    if (type === "mileageFrom") {
      setFilters({ ...filters, mileageFrom: value.value as string });
      selectMileageFromRef.current?.blur();
    }
    if (type === "mileageTo") {
      setFilters({ ...filters, mileageTo: value.value as string });
      selectMileageToRef.current?.blur();
    }
  };

  const onSubmitFilters = (): void => {
    onFilteredCars(filters);
  };

  const onResetFilters = (): void => {
    setBrandValue(null);
    setPricePerHourValue(null);
    setMileageFromValue(null);
    setMileageToValue(null);

    dispatch(setIsEmptyInfo(""));
    setFilters({});
    dispatch(setFilteredCars([]));
    page === 1 ? dispatch(getCars(page)) : dispatch(setPage(1));
  };

  return (
    <div className="flex gap-[18px] justify-center mb-[24px] items-end">
      <div>
        <label
          htmlFor="brand"
          className="inline-block mb-[8px] text-[var(--label-color)]"
        >
          Car brand
        </label>
        <Select
          options={brandsName}
          placeholder="Enter the brand"
          name="brand"
          id="brand"
          className={clsx(s.select, s.selectBrand)}
          styles={colorStyles}
          value={brandValue}
          ref={selectBrandRef}
          onChange={(option: unknown | OptionType) => {
            setBrandValue(option);
            onChangeFilter(option as OptionType, "brand");
          }}
        />
      </div>

      <div>
        <label
          htmlFor="pricePerHour"
          className="inline-block mb-[8px] text-[var(--label-color)]"
        >
          Price / 1 hour
        </label>
        <Select
          options={pricesPerHourList}
          placeholder="To $"
          name="pricePerHour"
          id="pricePerHour"
          className={clsx(s.select, s.selectPricePerHour)}
          styles={colorStyles}
          value={pricePerHourValue}
          ref={selectPerHourRef}
          onChange={(option: unknown | OptionType) => {
            setPricePerHourValue(option);
            onChangeFilter(option as OptionType, "pricePerHour");
          }}
        />
      </div>

      <div>
        <label
          htmlFor="mileageFrom"
          className="inline-block mb-[8px] text-[var(--label-color)]"
        >
          Car mileage / km
        </label>
        <Select
          options={mileageFromList}
          placeholder="From"
          name="mileageFrom"
          id="mileageFrom"
          className={clsx(s.select, s.selectMileage)}
          styles={colorStyles}
          value={mileageFromValue}
          ref={selectMileageFromRef}
          onChange={(option: unknown | OptionType) => {
            setMileageFromValue(option);
            onChangeFilter(option as OptionType, "mileageFrom");
          }}
        />
      </div>

      <div>
        <label
          htmlFor="mileageTo"
          className="inline-block mb-[8px] text-[var(--label-color)]"
        >
          Car mileage / km
        </label>
        <Select
          options={mileageToList}
          placeholder="To"
          name="mileageTo"
          id="mileageTo"
          className={clsx(s.select, s.selectMileage)}
          styles={colorStyles}
          value={mileageToValue}
          ref={selectMileageToRef}
          onChange={(option: unknown | OptionType) => {
            setMileageToValue(option);
            onChangeFilter(option as OptionType, "mileageTo");
          }}
        />
      </div>

      <div>
        <button onClick={onSubmitFilters} className="animated-button aqua">
          Search
        </button>
      </div>
      {filteredCars.length !== 0 || isEmptyInfo ? (
        <div>
          <button
            onClick={onResetFilters}
            className={clsx(s.btnReset, "animated-button purple")}
          >
            Reset filters
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Filters;
