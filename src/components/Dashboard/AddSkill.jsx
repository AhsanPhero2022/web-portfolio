import { useForm } from "react-hook-form";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddSkill = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await fetch("http://localhost:5000/skill", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      console.log(res);
      // if (res.ok) {
      //   reset();
      //   alert("Skill added successfully");
      // }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="lg:mt-32">
      <h1 className="text-3xl font-bold text-center my-12">
        Add Technology skills
      </h1>
      <ToastContainer />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className=" gap-4 mb-8">
          <div className="w-1/2 mx-auto">
            <h2 className="text-white font-semibold my-3">Skill Name</h2>
            <input
              required
              placeholder="Name"
              className="h-8 rounded-md w-full px-3"
              {...register("name")}
            />
          </div>
          <div className="w-1/2 mx-auto">
            <h2 className="text-white font-semibold my-3">Logo</h2>
            <input
              placeholder="Logo url"
              className="h-8 rounded-md w-full px-3"
              {...register("logo")}
            />
          </div>
        </div>

        <div className="text-center my-12 font-bold">
          <input
            className="py-4 px-8 bg-white text-blue-700  rounded-md"
            type="submit"
          />
        </div>
      </form>
    </div>
  );
};

export default AddSkill;
