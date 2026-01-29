
const CTASection = () => {
  return (
    <div className="w-screen h-screen  flex justify-center items-center bg-gradient-to-br from-black to-slate-950 py-20 px-6 ">
      <div className="max-w-4xl  text-center h-auto">
        <h2 className="text-4xl md:text-5xl  font-bold text-white m-4">
          Stay <span className="text-green-500 font-bold">ahead</span> of your{" "}
          <span className="text-green-500 font-bold">workflow</span>
        </h2>

        <p className="text-gray-400 text-lg  max-w-2xl mt-16 ">
          Join thousands of professionals who trust FlowTrack to keep their projects organized and their teams aligned.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-2xl ">
          <input
            type="email"
            placeholder=" Enter your email"
            className="w-full sm:w-96 px-8 py-6 rounded-lg text-gray-900 text-xl bg-white focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button className="w-full sm:w-auto px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition whitespace-nowrap flex items-center justify-center gap-2">
           
            Sign up with Google
          </button>
        </div>

        <p className="text-gray-400 text-sm ">
          Sign up to always be on top of your tasks
        </p>
      </div>
    </div>
  );
};

export default CTASection;
