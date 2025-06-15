// AppLanding.jsx
import { useState } from 'react';

const buttonStyle = {
  padding: '14px 20px',
  margin: '1rem 0',
  background: '#202020',
  color: '#fff',
  border: '1px solid #444',
  borderRadius: '10px',
  fontSize: '1rem',
  width: '100%',
  cursor: 'pointer',
  textAlign: 'left',
  transition: 'background 0.3s ease'
};

export default function AppLanding({ onNavigate }) {
  return (
    <div style={{ fontFamily: 'Inter, sans-serif', background: '#0e0e0e', color: '#eee', minHeight: '100vh', padding: '2rem' }}>
      <div style={{ maxWidth: '700px', margin: '0 auto', background: '#181818', borderRadius: '16px', padding: '2rem', boxShadow: '0 0 20px rgba(0,0,0,0.4)' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', borderBottom: '1px solid #333', paddingBottom: '0.5rem' }}>
          Hash Calculator Suite
        </h2>
        <p style={{ color: '#aaa', marginBottom: '2rem' }}>
          Select a tool below to get started:
        </p>

        <button style={buttonStyle} onClick={() => onNavigate('yield')}>🧪 Yield Calculator</button>
        <button style={buttonStyle} onClick={() => onNavigate('jarflip')}>💰 Jar Flip Profit Calculator</button>
        <button style={buttonStyle} onClick={() => onNavigate('pressing')}>🧯 Rosin Pressing Calculator</button>
        <button style={buttonStyle} onClick={() => onNavigate('consumption')}>🌿 Consumption Calculator</button>
        <button style={buttonStyle} onClick={() => onNavigate('winners')}>🏆 Winners Circle</button>
        <button style={buttonStyle} onClick={() => onNavigate('split')}>🤝 Split Calculator (Collab %)</button>
      </div>
    </div>
  );
}
