import { Outlet } from "react-router-dom";

export const HomeLayout = () => {
  return (
    <div>
      <nav>HomeLayout</nav>
      <Outlet />
      {/* purpose of outlet is whatever the children route will be displayed below */}
    </div>
  );
};

export default HomeLayout;
