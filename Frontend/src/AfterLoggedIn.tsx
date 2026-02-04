import Nav from "./AfterLoggedInComponents/Nav";
import Hero from "./AfterLoggedInComponents/Hero";
import Footer from "./Footer";

function AfterLoggedIn() {
  return (
    <>
      <Nav />
      <Hero />
      <div className="w-full min-h-screen px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-6 sm:py-8 md:py-10 lg:py-12">
        <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-4 sm:gap-5 md:gap-6 lg:gap-8 max-w-[90rem] mx-auto">
          <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 w-full lg:flex-1 lg:max-w-4xl">
            <div
              className="w-full 
                          h-48 sm:h-56 md:h-80 lg:h-96 xl:h-[30rem] 
                          bg-white/20 backdrop-blur-md shadow-lg rounded-xl border border-white/10"
            ></div>

            <div
              className="w-full 
                          h-40 sm:h-48 md:h-56 lg:h-64 xl:h-60 
                          bg-white/20 backdrop-blur-md shadow-lg rounded-xl border border-white/10"
            ></div>
          </div>

          <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 w-full lg:w-auto lg:min-w-[20rem] xl:min-w-[25rem]">
            <div
              className="w-full lg:w-[20rem] xl:w-[25rem]
                          h-48 sm:h-56 md:h-80 lg:h-96 xl:h-[22.5rem] 
                          bg-white/20 backdrop-blur-md shadow-lg rounded-xl border border-white/10"
            ></div>

            <div
              className="w-full lg:w-[20rem] xl:w-[25rem]
                          h-48 sm:h-56 md:h-80 lg:h-96 xl:h-[22.5rem] 
                          bg-white/20 backdrop-blur-md shadow-lg rounded-xl border border-white/10"
            ></div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AfterLoggedIn;
