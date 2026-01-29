import Clock from "../assets/Click.png";
import List from "../assets/list.png";
export default function CosmicGradient() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10 ">
      <div className="absolute inset-0 bg-gradient-to-br from-black to-slate-950 z-0"></div>

      <div className="absolute inset-0">
        <div
          className="absolute -top-20 -right-20 w-96 h-96 rounded-full mix-blend-screen filter blur-3xl "
          style={{
            background:
              "radial-gradient(circle, rgba(16, 185, 129, 0.9) 0%, rgba(5, 150, 105, 0.6) 100%)",
          }}
        ></div>

        <div
          className="absolute top-1/4 -left-32 w-80 h-80 rounded-full mix-blend-screen filter blur-3xl "
          style={{
            background:
              "radial-gradient(circle, rgba(6, 182, 212, 0.8) 0%, rgba(8, 145, 178, 0.5) 100%)",
          }}
        ></div>

        <div
          className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full mix-blend-screen filter blur-2xl "
          style={{
            background:
              "radial-gradient(circle, rgba(132, 204, 22, 0.7) 0%, rgba(101, 163, 13, 0.4) 100%)",
          }}
        ></div>

        <div
          className="absolute bottom-1/4 left-1/3 w-48 h-48 rounded-full mix-blend-screen filter blur-2xl "
          style={{
            background:
              "radial-gradient(circle, rgba(34, 197, 94, 1) 0%, rgba(6, 182, 212, 0.7) 100%)",
          }}
        ></div>

        <div
          className="absolute bottom-1/3 right-1/3 w-72 h-72 rounded-full mix-blend-screen filter blur-3xl "
          style={{
            background:
              "radial-gradient(circle, rgba(20, 184, 166, 0.6) 0%, rgba(5, 150, 105, 0.3) 100%)",
            animationDelay: "5s",
          }}
        ></div>
      </div>

      <div
        className="absolute inset-0 opacity-20 mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      ></div>

      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, transparent 0%, rgba(6, 78, 59, 0.2) 50%, rgba(17, 24, 39, 0.5) 100%)",
        }}
      ></div>

      <div className="flex justify-center items-center w-screen h-screen">
        <img
          src={Clock}
          alt="clock"
          className=" w-25 md:w-35 xl:w-45 m-auto opacity-20"
        />
        <img
          src={List}
          alt="list"
          className="  w-25 md:w-35 xl:w-45 opacity-20"
        />
      </div>
    </div>
  );
}
