import { useState } from "react";
import "./FeatureMe.css";

export default function FeatureMe() {
  const [selectedTier, setSelectedTier] = useState(null);

  const tiers = [
    { id: 1, label: "Cursed Item (1 sentence curse)", price: 5 },
    { id: 2, label: "Ghost/Villain in the Codex", price: 15 },
    { id: 3, label: "Mysterious Character in Lore", price: 25 },
  ];

  const handlePayment = (tier) => {
    setSelectedTier(tier);

    // Example logic – integrate with Stripe/PayPal here
    // Redirect after payment confirmation to form page
    window.location.href = `/feature-form?tier=${tier.id}`;
  };

  return (
    <div className="feature-me-container">
      <h1>🕯️ Feature Me in the Mikaverse</h1>
      <p>Pay to become part of the mysterious Mikaverse... forever.</p>

      <div className="tiers">
        {tiers.map((tier) => (
          <div key={tier.id} className="tier-card">
            <h3>{tier.label}</h3>
            <p>${tier.price}</p>
            <button onClick={() => handlePayment(tier)}>Choose Tier</button>
          </div>
        ))}
      </div>

      {/* Optional: Featured Soul Widget */}
      <div className="featured-soul">
        <h2>✨ Featured Soul of the Week ✨</h2>
        <div className="soul-card">
          <p>🕯️ “Zavik the Forgotten” roams the Lore crypts...</p>
        </div>
      </div>
    </div>
  );
}
