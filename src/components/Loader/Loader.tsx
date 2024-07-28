import clsx from "clsx";
import { Bars } from "react-loader-spinner";

import s from "./Loader.module.css";

const Loader = () => {
  return (
    <>
      <div className={clsx(s.loaderWrapper)}>
        <Bars
          height="80"
          width="80"
          color="var(--aqua-color)"
          ariaLabel="bars-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    </>
  );
};

export default Loader;
