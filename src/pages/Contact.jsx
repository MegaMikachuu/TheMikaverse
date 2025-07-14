import { useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    vibes: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const sendEmail = (event) => {
    event.preventDefault();

    emailjs
      .send(
        "service_5gnvwxa",
        "template_juqwatt",
        {
          name: formData.name,
          role: formData.role,
          vibes: formData.vibes,
          to_email: "lilnordia@gmail.com",
        },
        "wBSHIUZfiN3buc8T6"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          setFormData({ name: "", role: "", vibes: "" });
        },
        (error) => {
          console.error("Email send failed:", error);
          alert("Failed to send message.");
        }
      );
  };

  return (
    <div className="Contact">
      <h1>Be Featured in the Mikaverse</h1>
      <p>Fill out the form to submit your mysterious presence.</p>

      <form onSubmit={sendEmail} className="contact-form">
        <label htmlFor="name">Name / Alias</label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="e.g., LilNordia"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="role">What do you want to be?</label>
        <select
          id="role"
          name="role"
          value={formData.role}
          onChange={handleChange}
          required
        >
          <option value="">Choose one</option>
          <option value="Cursed Item">Cursed Item</option>
          <option value="Ghost / Villain">Ghost / Villain</option>
          <option value="Mysterious Character">Mysterious Character</option>
        </select>

        <label htmlFor="vibes">Inspo Vibes</label>
        <textarea
          id="vibes"
          name="vibes"
          placeholder="e.g., purple smoke, creepy, tragic backstory..."
          value={formData.vibes}
          onChange={handleChange}
          required
        />

        <button type="submit">Send Submission</button>
      </form>
    </div>
  );
}
