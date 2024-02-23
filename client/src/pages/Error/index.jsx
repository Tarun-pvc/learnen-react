// Error.js
import React from 'react';
import './error.css';

export default function Error({ statusCode }) {
  return (
    <section className="error-container">
      <div className="container">
        <div className="error-content">
          <h2 className="error-title">Error 500</h2>
          <p className="error-message">Oops! Something went wrong.</p>
          <p className="error-description">But don't worry, you can find plenty of other things on our homepage.</p>
          <a rel="noopener noreferrer" href="/" className="back-to-home">Back to homepage</a>
        </div>
      </div>
    </section>
  );
}
