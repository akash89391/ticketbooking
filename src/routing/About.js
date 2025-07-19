import React from "react";
import "./style.css";

export default function About() {
  return (
    <div className="about-container">
      <h1>About Movie Booking App</h1>
      <p>
        Welcome to the Movie Booking App! Our platform allows you to browse the latest movies, check showtimes, and book your tickets easily from the comfort of your home.
      </p>

      <h2>Why Choose Us?</h2>
      <ul>
        <li>🎟️ Easy and fast online ticket booking</li>
        <li>🍿 Browse the latest and upcoming movies</li>
        <li>🏆 Secure payment options</li>
        <li>📍 Multiple theaters and locations</li>
        <li>🔔 Instant booking confirmation</li>
      </ul>

      <h2>How It Works</h2>
      <ol>
        <li>Search for your favorite movie.</li>
        <li>Select the showtime and theater.</li>
        <li>Choose your preferred seats.</li>
        <li>Make a secure payment.</li>
        <li>Get instant confirmation and enjoy your movie!</li>
      </ol>

      <h2>Contact Us</h2>
      <p>
        Have any questions or need support? Reach out to us at:  
        <br />
        📧 Email: akashm89391@gmail.com  
        <br />
        📞 Phone: 8939178718
      </p>
    </div>
  );
}
