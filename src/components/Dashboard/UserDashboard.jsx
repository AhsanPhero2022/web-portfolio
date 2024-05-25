import { Link, Outlet } from "react-router-dom";
import UserNavbar from "./UserNavbar";
import Swal from "sweetalert2";

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
            Open Sidebar
          </label>
        </div>
        <div className="drawer-side h-full min-h-screen">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu space-y-4 p-4 w-80 min-h-full bg-base-200 text-base-content">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <button
                onClick={() =>
                  Swal.fire({
                    title: "Error!",
                    text: "This page access only for admin",
                    icon: "error",
                    confirmButtonText: "Sorry",
                  })
                }
              >
                Add Skills
              </button>
            </li>
            <li>
              <button
                onClick={() =>
                  Swal.fire({
                    title: "Error!",
                    text: "This page access only for admin",
                    icon: "error",
                    confirmButtonText: "Sorry",
                  })
                }
              >
                Add Projects
              </button>
            </li>

            <li>
              <button
                onClick={() =>
                  Swal.fire({
                    title: "Error!",
                    text: "This page access only for admin",
                    icon: "error",
                    confirmButtonText: "Sorry",
                  })
                }
              >
                Add Experience
              </button>
            </li>
            <li>
              <button
                onClick={() =>
                  Swal.fire({
                    title: "Error!",
                    text: "This page access only for admin",
                    icon: "error",
                    confirmButtonText: "Sorry",
                  })
                }
              >
                Add Blogs
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
