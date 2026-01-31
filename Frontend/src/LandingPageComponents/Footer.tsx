import Logo from "../assets/logo.png";
import Github from "../assets/github.png"
import Linkdin from "../assets/linkedin.png"
import FB from "../assets/facebook.png"
import Insta from "../assets/instagram.png"

const Footer = () => {
  return (
    <footer className=" bg-gradient-to-br from-black to-slate-950 text-gray-400 py-1 flex justify-center items-center ">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-6 ">
          <div className="flex justify-center items-center gap-2 text-xl ">
            <img src={Logo} alt="logo" className="w-8" />
            <h1 className="text-white font-bold">
              <div className="flex ">
                Flow <span className="text-green-500">Track</span>
              </div>
            </h1>
          </div>

          <div className="flex gap-8 text-sm">
            <a href="#" className="hover:text-white transition">
              About
            </a>
            <a href="#" className="hover:text-white transition">
              Privacy
            </a>
            <a href="#" className="hover:text-white transition">
              Terms
            </a>
            <a href="#" className="hover:text-white transition">
              Contact
            </a>
          </div>

          <div className="flex gap-4">
            <a
              href="https://github.com/Samrat-Deula7"
              className="hover:text-white transition"
            >
              <img src={Github} alt="" className="w-6 bg-white rounded-full" />
            </a>
            <a
              href="https://www.linkedin.com/in/samrat-deula-412531369/"
              className="hover:text-white transition"
            >
              <img src={Linkdin} alt="" className="w-6" />
            </a>
            <a
              href="https://www.facebook.com/samrat.deula.52"
              className="hover:text-white transition "
            >
              <img src={FB} alt="" className="w-6" />
            </a>
            <a
              href="https://www.instagram.com/deula.samrat/"
              className="hover:text-white transition"
            >
              <img src={Insta} alt="" className="w-6" />
            </a>
          </div>
        </div>


      

        <div className="flex justify-center items-center gap-10">
          {" "}
          {/* Product Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white transition">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Integrations
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Updates
                </a>
              </li>
            </ul>
          </div>
          {/* Company Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white transition">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        <br />
        <div className="border-t border-gray-800 pt-6 text-center text-sm">
          <p>
            © 2026 Flow<span className="text-green-500">Track</span>. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
