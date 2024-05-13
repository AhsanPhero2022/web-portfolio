import { Link, Outlet } from "react-router-dom";
import UserNavbar from "./UserNavbar";

const UserDashboard = () => {
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content ">
          <UserNavbar />

          <Outlet />

          <label
            htmlFor="my-drawer-2"
            className="btn btn-success drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side h-full min-h-screen">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu space-y-4 p-4 w-80 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/dashboard/addSkill">Add Skills</Link>
            </li>
            <li>
              <Link to="/dashboard/addProject">Add Projects</Link>
            </li>

            <li>
              <Link to="/dashboard/addProject">Add Experience</Link>
            </li>
            <li>
              <Link to="/dashboard/addProject">Add Blogs</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
