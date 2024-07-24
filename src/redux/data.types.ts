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
  cars: {
    results: Car[] | [];
    total: number;
    totalPages: number;
  };
  loading: boolean;
  error: string | null;
}

export interface FavoritesState {
  favorites: Car[] | [];
}
