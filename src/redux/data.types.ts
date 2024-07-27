export interface Car {
  id: number;
  year: number;
  make: string;
  model: string;
  type: string;
  img: string;
  description: string;
  fuelConsumption: string;
  engineSize: string;
  accessories: string[];
  functionalities: string[];
  rentalPrice: string;
  rentalCompany: string;
  address: string;
  rentalConditions: string;
  mileage: number;
  id_: string;
}

export interface CarsState {
  cars: Car[] | [];
  preflightCars: {
    results: Car[] | [];
    total: number;
    totalPages: number;
  };
  page: number;
  loading: boolean;
  error: string | null;
}

export interface FavoritesState {
  favorites: Car[] | [];
}

export interface FilterState {
  filteredCars: Car[] | [];
  isEmptyInfo: string;
}

export interface FilterParams {
  make?: string;
  model?: string;
  rentalPrice?: string | number;
  mileage?: string | number;
  filter?: string | number;
  search?: string | number;
  sortBy?: string;
}

export interface FilterProps {
  brand?: string;
  perHour?: string;
  mileageFrom?: string;
  mileageTo?: string;
}
