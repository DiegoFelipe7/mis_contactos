import Lateral from "../components/Latera";
import { Outlet } from "react-router-dom";
const Menu = () => {
  return (
    <>
      <div className=" w-100 row ">
        <Lateral />
        <div className="col-9 bg-light  ">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Menu;
