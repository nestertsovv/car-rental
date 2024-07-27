import React from "react";

type Props = {
  children: React.ReactNode;
};

const Container = ({ children }: Props) => {
  return <div className="xl:max-w-[1300px] px-[15px] mx-auto">{children}</div>;
};

export default Container;
