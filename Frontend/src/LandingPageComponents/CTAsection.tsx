import Google from "../assets/google.png"
const CTASection = () => {
  return (
    <div className="w-screen h-screen  flex justify-center items-center bg-gradient-to-br from-black to-slate-950 py-20 px-6 ">
      <div className="max-w-4xl  text-center h-auto w-190">
        <h2 className="text-4xl md:text-5xl  font-bold text-white m-4">
          Stay <span className="text-green-500 font-bold">ahead</span> of your{" "}
          <span className="text-green-500 font-bold">workflow</span>
        </h2>
        <br />

        <p className="mt-10 text-gray-400 text-lg  max-w-2xl ">
          Join thousands of professionals who trust FlowTrack to keep their
          projects organized and their teams aligned.
        </p>
        <br />

        <div className=" flex  justify-center items-center gap-5">
          <div>
            <input
              type="email"
              placeholder=" Enter your email"
              className="w-full sm:w-96 px-8 py-6 rounded-lg text-gray-900 text-xl bg-white focus:outline-none focus:ring-2 focus:ring-green-500 "
            />
          </div>
          <button className="flex items-center gap-3  w-60 h-auto font-semibold text-xl text-white bg-green-600 hover:bg-green-700 rounded-lg cursor-pointer">
            <img src={Google} alt="google icon " className="w-6 " />{" "}
            Sign up with Google
          </button>
        </div>
        <br />

        <p className="text-gray-400 text-sm ">
          Sign up to always be on top of your tasks
        </p>
      </div>
    </div>
  );
};

export default CTASection;
