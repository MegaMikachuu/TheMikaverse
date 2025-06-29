import { useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css"; // optional: for styling

export default function Contact() {
  const [suggestion, setSuggestion] = useState("");

  const sendEmail = (event) => {
    event.preventDefault();

    emailjs
      .send(
        "service_5gnvwxa", // Your EmailJS service ID
        "template_juqwatt", // Your template ID
        {
          suggestion: suggestion,
          to_email: "lilnordia@gmail.com", // Optional if template uses dynamic fields
        },
        "wBSHIUZfiN3buc8T6" // Your public key
      )
      .then(
        () => {
          alert("Message sent successfully!");
          setSuggestion("");
        },
        (error) => {
          console.error("Email send failed:", error);
          alert("Failed to send message.");
        }
      );
  };

  return (
    <div className="Contact">
      <h1>Contact Us</h1>
      <p>Use the form below to send us your thoughts or suggestions.</p>

      <form onSubmit={sendEmail} className="contact-form">
        <label htmlFor="Suggestions">Your Message:</label>
        <input
          id="Suggestions"
          type="text"
          value={suggestion}
          onChange={(e) => setSuggestion(e.target.value)}
          required
          placeholder="Enter your message..."
        />
        <button type="submit">Submit</button>
      </form>

  
    </div>
  );
}
