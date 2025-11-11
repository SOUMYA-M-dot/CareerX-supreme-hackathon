import { useEffect } from "react";
import { asyncgetusers } from "./store/UserActions";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "./components/Navbar";
import MainRoutes from "./routes/MainRoutes";
import Footer from "./components/Footer";
const App = () => {
  const data = useSelector((state) => state);
  const dispatch = useDispatch();

  console.log(data);

  useEffect(() => {
    dispatch(asyncgetusers());
  }, []);

  return (
    <>
      <div className="bg-[#1A1A1A] text-white px-2.5 lg:px-[2.5vw]">
        <Navbar />
        <MainRoutes />
      </div>
      <Footer />
    </>
  );
};

export default App;
