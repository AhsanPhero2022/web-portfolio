import { useForm } from "react-hook-form";

const AddProject = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => console.log(data, new Date());

  return (
    <div>
      <h1 className="text-3xl font-bold text-center my-12">Add Projects</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className=" gap-4 mb-8">
          <div className="w-1/2 mx-auto">
            <h2 className="text-white font-semibold my-3">Project Name</h2>
            <input
              required
              placeholder="Name"
              className="h-8 rounded-md w-full px-3"
              {...register("name")}
            />
          </div>
          <div className="w-1/2 mx-auto">
            <h2 className="text-white font-semibold my-3">Image</h2>
            <input
              placeholder="Image url"
              className="h-8 rounded-md w-full px-3"
              {...register("image")}
            />
          </div>
          <div className="w-1/2 mx-auto">
            <h2 className="text-white font-semibold my-3">Client Side Code</h2>
            <input
              placeholder="client code url"
              className="h-8 rounded-md w-full px-3"
              {...register("client-side-code")}
            />
          </div>
          <div className="w-1/2 mx-auto">
            <h2 className="text-white font-semibold my-3">Server Side Code</h2>
            <input
              placeholder="server code url"
              className="h-8 rounded-md w-full px-3"
              {...register("server-side-code")}
            />
          </div>
          <div className="w-1/2 mx-auto">
            <h2 className="text-white font-semibold my-3">Description</h2>
            <input
              placeholder="write description"
              className="h-16 rounded-md w-full px-3   "
              {...register("description")}
            />
          </div>
          <div className="w-1/2 mx-auto">
            <h2 className="text-white font-semibold my-3">Features</h2>
            <ol className="space-y-4">
              <li>
                <input
                  className="h-8 rounded-md w-full px-3"
                  placeholder="features-1"
                  {...register("features1")}
                />
              </li>
              <li>
                <input
                  className="h-8 rounded-md w-full px-3"
                  placeholder="features-2"
                  {...register("features2")}
                />
              </li>
              <li>
                <input
                  className="h-8 rounded-md w-full px-3"
                  placeholder="features-3"
                  {...register("features3")}
                />
              </li>
              <li>
                <input
                  className="h-8 rounded-md w-full px-3"
                  placeholder="features4"
                  {...register("features4")}
                />
              </li>
              <li>
                <input
                  className="h-8 rounded-md w-full px-3"
                  placeholder="features-5"
                  {...register("features5")}
                />
              </li>
            </ol>
          </div>
        </div>

        <div className="text-center my-12 font-bold">
          <input
            className="py-4 px-8 bg-white text-blue-700 
             rounded-md"
            type="submit"
          />
        </div>
      </form>
    </div>
  );
};

export default AddProject;
