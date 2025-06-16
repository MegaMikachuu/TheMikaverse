import { useEffect } from "react";
import "./Stars.css";

export default function Stars() {
  useEffect(() => {
    const numStars = 30;

    const stars = [];

    for (let i = 0; i < numStars; i++) {
      const star = document.createElement("div");
      star.classList.add("star");
      star.style.left = Math.random() * 100 + "vw";
      star.style.top = Math.random() * -100 + "vh";
      star.style.animationDuration = (Math.random() * 3 + 2) + "s"; // 👈 faster fall
      star.style.animationDelay = (Math.random() * 10) + "s";
      document.body.appendChild(star);
      stars.push(star);
    }

    // Cleanup stars when unmounting
    return () => {
      stars.forEach((star) => star.remove());
    };
  }, []);

  return null; // This component only adds stars to the DOM
}
