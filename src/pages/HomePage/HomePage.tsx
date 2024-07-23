import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <h1>Home page</h1>
      <Link to="/catalog">Go to catalog</Link>
    </>
  );
};

export default HomePage;
