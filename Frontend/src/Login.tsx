import { useState } from "react";
import { useEffect } from "react";

type LoginProps = {
  setLoggedin: React.Dispatch<React.SetStateAction<boolean>>;
  setLoginbtn: React.Dispatch<React.SetStateAction<boolean>>;
  setSignupbtn: React.Dispatch<React.SetStateAction<boolean>>;
  Loginbtn: boolean;
};

const Login: React.FC<LoginProps> = ({
  Loginbtn,
  setLoggedin,
  setLoginbtn,
  setSignupbtn,
}) => {
  useEffect(() => {
    const token = localStorage.getItem("FlowTrackToken");
    if (token) {
      setLoggedin(true);
    } else {
      setLoggedin(false);
    }
  }, []);

  const [loginErrorValidation, setLoginErrorValidation] = useState({
    loginError1: "",
    loginError2: "",
  });

  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const onChange = (e: any) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const createUser = async () => {
    // API Call
    const url = "http://localhost:3000/api/tasks/LoginUser";
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Email: credentials.email,
          Password: credentials.password,
        }),
      });
      const result = await response.json();
      console.log(result);
      if (result.FlowTrackAuthtoken) {
        // Save the auth token and redirect
        setCredentials({
          email: "",
          password: "",
        });
        alert("logged in");
        setLoggedin(true);
        localStorage.setItem("FlowTrackToken", result.FlowTrackAuthtoken);
        setLoginbtn(false);
      } else {
        if (result.errors) {
          const getErrorMessage = (field: string) => {
            const errors = result.errors.find((e: any) => e.path === field);
            return errors?.msg || null;
          };
          setLoginErrorValidation({
            loginError1: getErrorMessage("Email"),
            loginError2: "",
          });
        } else {
          const error2 = result.error;
          setLoginErrorValidation({
            loginError1: "",
            loginError2: error2,
          });
        }

        setLoggedin(false);
      }
    } catch (error: any) {
      alert(error.message);
    }
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
  };
  return (
    <div
      className={`fixed top-0 left-0 max-w-screen w-full bg-[#020617CC] z-40 flex flex-col items-center justify-center transition-all duration-300 ease-in-out ${
        Loginbtn
          ? "h-screen opacity-100 pointer-events-auto"
          : "h-0 opacity-0 pointer-events-none scale-0"
      }`}
    >
      <div
        className={`relative  w-[300px]  xl:w-[500px] 2xl:w-[500px] text-center bg-[#10172a]  rounded-2xl py-3 px-2 ${
          Loginbtn ? "animate-popup" : ""
        }`}
      >
        <h2 className="text-2xl  xl:text-6xl font-bold mb-4 text-[#2563eb] text-center">
          Log in
        </h2>
        <h6 className="text-red-500">{loginErrorValidation.loginError1}</h6>
        <h6 className="text-red-500">{loginErrorValidation.loginError2}</h6>
        <button
          onClick={() => {
            setLoginbtn(false);
          }}
          className="absolute top-1 right-2  text-white text-xl lg:text-3xl  focus:outline-none cursor-pointer "
          aria-label="Close button"
        >
          &times;
        </button>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center text-center "
        >
          <div className="relative">
            <input
              type="email"
              id="login-email"
              name="email"
              className="w-[280px] mb-1 xl:mb-2 xl:w-[400px] bg-black border border-white/10 rounded px-2 py-1 xl:px-4 xl:py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-[#020617CC]"
              placeholder="example@gmail.com"
              onChange={onChange}
              value={credentials.email}
            />
          </div>

          <div className="relative">
            <input
              type="password"
              id="login-password"
              name="password"
              className="w-[280px] mb-1 xl:mb-2 xl:w-[400px]  bg-black border border-white/10 rounded px-2 py-1 xl:px-4 xl:py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-[#020617CC]"
              placeholder="Enter your password"
              onChange={onChange}
              value={credentials.password}
            />
          </div>

          <button
            onClick={createUser}
            id="login"
            type="submit"
            className="w-[280px] xl:w-[400px] mb-2 mt-1 bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
          >
            Log in
          </button>
        </form>
        <button
          onClick={() => {
            setSignupbtn(true);
            setLoginbtn(false);
          }}
          className="text-blue-600 underline cursor-pointer"
        >
          Don't have an account?
        </button>
      </div>
    </div>
  );
};

export default Login;
