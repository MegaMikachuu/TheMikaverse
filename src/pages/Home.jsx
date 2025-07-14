import { useEffect } from "react";
import "./Home.css";

export default function Home() {
  useEffect(() => {
    const numStars = 30;
    const stars = [];

    for (let i = 0; i < numStars; i++) {
      const star = document.createElement("div");
      star.classList.add("star");
      star.style.left = Math.random() * 100 + "vw";
      star.style.top = Math.random() * -100 + "vh";
      star.style.animationDuration = Math.random() * 5 + 5 + "s";
      star.style.animationDelay = Math.random() * 10 + "s";
      document.body.appendChild(star);
      stars.push(star);
    }

    // Cleanup stars on unmount
    return () => {
      stars.forEach((star) => document.body.removeChild(star));
    };
  }, []);

  return (
    <div className="homepage">
      <h1>The MikaVerse Home Page</h1>
      <h3>Welcome to the starscape</h3>

      
    </div>
  );
}
