import { Link } from "react-router-dom";
import clsx from "clsx";

import Container from "../../components/Container/Container";

import s from "./HomePage.module.css";

const HomePage = () => {
  return (
    <Container>
      <div className={clsx(s.mainWrapper)}>
        <h1 className={clsx(s.mainH1)}>Rental Car</h1>
        <div className="mb-[24px]">
          <p className={s.additionalText}>
            This rental car website offers a wide selection of vehicles,
            ensuring users can find a car that fits their specific needs.
          </p>
          <p className={s.additionalText}>
            The advanced filtering options allow users to search by{" "}
            <span className="text-[var(--aqua-color)] font-semibold">
              brand
            </span>
            ,{" "}
            <span className="text-[var(--aqua-color)] font-semibold">
              hourly price
            </span>
            , and{" "}
            <span className="text-[var(--aqua-color)] font-semibold">
              mileage range
            </span>
            , making the selection process{" "}
            <span className="text-[var(--purple-color)] font-semibold">
              quick
            </span>{" "}
            and{" "}
            <span className="text-[var(--purple-color)] font-semibold">
              efficient
            </span>
            .
          </p>
          <p className={s.additionalText}>
            Competitive pricing ensures that users get the best value for their
            money.
          </p>
          <p className={s.additionalText}>
            Additionally, the user-friendly interface simplifies the booking
            process, providing a seamless experience from start to finish.
          </p>
        </div>

        <Link to="/catalog" className="animated-button aqua">
          <span className="relative z-[1] text-[18px]">Get started</span>
        </Link>
      </div>
    </Container>
  );
};

export default HomePage;
