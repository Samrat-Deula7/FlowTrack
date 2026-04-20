import { useState } from "react";
import { useEffect } from "react";

export type AlertType = {
  alert: boolean;
  type: "success" | "failure";
  msg: string;
};

type LoginProps = {
  setAlertPopUp: React.Dispatch<React.SetStateAction<AlertType>>;
  AlertPopUp: AlertType;
};

const Alert: React.FC<LoginProps> = ({
  AlertPopUp, setAlertPopUp
}) => {
  

 



  return (
    <div
      className={`fixed top-0 left-0 max-w-screen w-full bg-[#020617CC] z-40 flex flex-col items-center justify-center transition-all duration-300 ease-in-out ${
        AlertPopUp.alert
          ? "h-screen opacity-100 pointer-events-auto"
          : "h-0 opacity-0 pointer-events-none scale-0"
      }`}
    >
      <div
        className={`relative -top-60  w-[300px]  xl:w-[350px] xl:h-[290px]  text-center bg-[#10172a]  rounded-2xl py-3 px-2 ${
          AlertPopUp.alert ? "animate-popup" : ""
        }`}
      >
        <h2 className="text-2xl  xl:text-3xl font-bold mb-4 text-green-500 text-center">
          Log in
        </h2>
       
        <button
          onClick={() => {
            setAlertPopUp({...AlertPopUp,alert:false});
          }}
          className="absolute top-1 right-2  text-white text-xl lg:text-3xl  focus:outline-none cursor-pointer "
          aria-label="Close button"
        >
          &times;
        </button>

        <form
        //   onSubmit={handleSubmit}
          className="flex flex-col justify-around items-center text-center h-[170px]"
        >
          <div className="relative">
            <input
              type="email"
              id="login-email"
              name="email"
              className="w-[280px] xl:w-[300px] bg-black border border-white/10 rounded-full  px-2 py-1 xl:px-2 xl:py-2 text-white transition focus:outline-none focus:border-green-500 focus:bg-[#020617CC]"
              placeholder="example@gmail.com"
            //   onChange={onChange}
            //   value={credentials.email}
            />
          </div>

          <div className="relative">
            <input
              type="password"
              id="login-password"
              name="password"
              className="w-[280px] xl:w-[300px] bg-black border border-white/10 rounded-full  px-2 py-1 xl:px-2 xl:py-2 text-white transition focus:outline-none focus:border-green-500 focus:bg-[#020617CC]"
              placeholder="Enter your password"
            //   onChange={onChange}
            //   value={credentials.password}
            />
          </div>

          <button
            // onClick={createUser}
            id="login"
            type="submit"
            className="w-[280px] xl:w-[300px] mt-1 bg-green-500 text-white  px-2 py-1 xl:px-2 xl:py-2 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
          >
            Log in
          </button>
        </form>
        <button
          onClick={() => {
            // setSignupbtn(true);
            // setLoginbtn(false);
          }}
          className="text-blue-600 underline cursor-pointer"
        >
          Don't have an account?
        </button>
      </div>
    </div>
  );
};

export default Alert;
