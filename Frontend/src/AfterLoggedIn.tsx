import Nav from "./AfterLoggedInComponents/Nav";
import Footer from "./Footer";

function AfterLoggedIn() {
  return (
    <>
      <Nav />
      <div className="w-screen h-auto  flex flex-col xl:flex-row justify-center items-center mt-5 xl:mt-15 gap-x-2 py-4 gap-y-2 xl:gap-y-0">
        <div className="flex flex-col gap-y-2">
          <div className=" w-80 h-50 md:w-120 md:h-90 xl:w-220 xl:h-120   bg-white/2 backdrop-blur-md shadow-lg rounded-xl border border-white/10"></div>
          <div className=" w-80 h-50 md:w-120 md:h-90 xl:w-220 xl:h-60  bg-white/2 backdrop-blur-md shadow-lg rounded-xl border border-white/10"></div>
        </div>
        <div className="flex flex-col gap-y-2">
          <div className=" w-80 h-50 md:w-120 md:h-90 xl:w-100 xl:h-90  bg-white/2 backdrop-blur-md shadow-lg rounded-xl border border-white/10"></div>
          <div className=" w-80 h-50 md:w-120 md:h-90 xl:w-100 xl:h-90  bg-white/2 backdrop-blur-md shadow-lg rounded-xl border border-white/10"></div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AfterLoggedIn;
