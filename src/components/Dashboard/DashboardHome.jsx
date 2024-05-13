import dashboardImg from "../../assets/dashboard.gif";
const DashboardHome = () => {
  return (
    <div>
      <div>
        <h1 className="text-3xl font-bold my-12 text-center">
          This is Admin dashboard! <br />
          Admin can upload Skills, project, Blogs.
        </h1>
        <div className="">
          <img className="mx-auto " src={dashboardImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
