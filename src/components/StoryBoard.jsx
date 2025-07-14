import { useEffect } from "react";
import "./StoryBoard.css"; // optional styling

export default function StoryBoard() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);



  return (
    <div className="story-board">
      <h1>The Story Board</h1>
      <p>Strange tales echo through the Mikaverse. These are but a few...</p>

      
    </div>
  );
}
