import { useEffect } from "react";
import "./StoryBoard.css"; // optional styling

export default function StoryBoard() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const stories = [
    {
      title: "🕷️ The Candle That Screamed",
      body: `In the heart of the Whispering Vaults, there exists a black wax candle that flickers with a blue flame. It is said that anyone who lights it will hear their future whispered in reverse, and their voice will vanish for seven days. A monk once tried to destroy it — they found him days later with his mouth stretched ear to ear, grinning and humming... backward.`,
    },
    {
      title: "🪞 Mira of the Shattered Eyes",
      body: `Long ago, Mira was a healer who peered too long into the Reflection Well. Now, she lives within broken glass, her soul trapped in mirrors across the Mikaverse. If you say her name three times near a cracked mirror, she will show you a future no one can bear — and you’ll spend the rest of your days trying to stop it... in vain.`,
    },
  ];

  return (
    <div className="story-board">
      <h1>The Story Board</h1>
      <p>Strange tales echo through the Mikaverse. These are but a few...</p>

      <div className="stories">
        {stories.map((story, index) => (
          <div key={index} className="story-card">
            <h2>{story.title}</h2>
            <p>{story.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
