import  { useEffect, useState } from "react";
import "./AfterLoggedinCSS/style.css";

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  duration: number;
  delay: number;
}

interface ShootingStar {
  id: number;
  delay: number;
  duration: number;
}

export default function Background(): JSX.Element {
  const [stars, setStars] = useState<Star[]>([]);
  const [shootingStars, setShootingStars] = useState<ShootingStar[]>([]);

  useEffect(() => {
    // Generate random stars
    const generatedStars: Star[] = Array.from({ length: 200 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      opacity: Math.random() * 0.5 + 0.5,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 5,
    }));
    setStars(generatedStars);

    // Generate shooting stars
    const generatedShootingStars: ShootingStar[] = Array.from(
      { length: 5 },
      (_, i) => ({
        id: i,
        delay: Math.random() * 10,
        duration: Math.random() * 2 + 1,
      }),
    );
    setShootingStars(generatedShootingStars);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 w-full h-screen overflow-hidden bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900">
      {/* Nebula clouds */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse"></div>
        <div
          className="absolute top-1/3 right-1/4 w-80 h-80 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-pink-500 rounded-full mix-blend-screen filter blur-3xl opacity-15 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 right-1/3 w-64 h-64 bg-indigo-500 rounded-full mix-blend-screen filter blur-3xl opacity-25 animate-pulse"
          style={{ animationDelay: "1.5s" }}
        ></div>
      </div>

      {/* Stars */}
      <div className="absolute inset-0">
        {stars.map((star: Star) => (
          <div
            key={star.id}
            className="absolute rounded-full bg-white"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.opacity,
              animation: `twinkle ${star.duration}s ease-in-out infinite`,
              animationDelay: `${star.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Shooting stars */}
      <div className="absolute inset-0">
        {shootingStars.map((star: ShootingStar) => (
          <div
            key={star.id}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              top: `${Math.random() * 50}%`,
              left: `${Math.random() * 100}%`,
              animation: `shooting ${star.duration}s linear infinite`,
              animationDelay: `${star.delay}s`,
              boxShadow: "0 0 10px 2px rgba(255, 255, 255, 0.8)",
            }}
          />
        ))}
      </div>

      {/* Center glow */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-400 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-pulse"></div>
    </div>
  );
}
