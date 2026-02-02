import Nav from "./AfterLoggedInComponents/Nav";
import Footer from "./Footer";

function AfterLoggedIn() {
  return (
    <>
      <Nav />
      <div className="w-screen h-screen flex justify-center mt-15 gap-x-2">
        <div className="flex flex-col gap-y-2">
          <div className="w-240 h-120   bg-white/2 backdrop-blur-md shadow-lg rounded-xl border border-white/10"></div>
          <div className="w-240 h-60  bg-white/2 backdrop-blur-md shadow-lg rounded-xl border border-white/10"></div>
        </div>
        <div className="flex flex-col gap-y-2">
          <div className="w-120 h-90  bg-white/2 backdrop-blur-md shadow-lg rounded-xl border border-white/10"></div>
          <div className="w-120 h-90  bg-white/2 backdrop-blur-md shadow-lg rounded-xl border border-white/10"></div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default AfterLoggedIn;
