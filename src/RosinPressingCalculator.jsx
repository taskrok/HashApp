// RosinPressingCalculator.jsx
import { useState } from 'react';

export default function RosinPressingCalculator({ onBack }) {
  const [micron, setMicron] = useState('45');
  const [weight, setWeight] = useState('');
  const [materialType, setMaterialType] = useState('Bubble Hash');
  const [showTips, setShowTips] = useState(false);

  // Yield projections
  const YIELD_MAP = {
    'Bubble Hash': 0.60,
    'Dry Sift': 0.65,
    'Flower': 0.20
  };

  // Pressure recommendation based on micron bag size and material type
  const numericMicron = parseInt(micron, 10);
  let recommendedPressure;
  if (materialType === 'Flower') {
    // Flower rosin: 300–1200 psi, average ~800
    recommendedPressure = 800;
  } else {
    // Hash rosin: 500–1200 psi
    recommendedPressure = numericMicron <= 45 ? 600 : numericMicron <= 70 ? 800 : 1000;
  }

  // Temperature & duration based on material type
  const recommendedTemp = materialType === 'Flower' ? 185 : 180; // °F
  const recommendedDuration = materialType === 'Flower' ? 5 : 2; // minutes

  // Yield projection
  const inputWeight = parseFloat(weight) || 0;
  const yieldPercent = YIELD_MAP[materialType] || 0;
  const expectedYield = inputWeight * yieldPercent;

  const buttonStyle = {
    padding: '10px 16px',
    background: '#202020',
    color: '#fff',
    border: '1px solid #444',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '0.9rem'
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    borderRadius: '8px',
    background: '#111',
    color: '#fff',
    border: '1px solid #333',
    marginTop: '4px'
  };

  return (
    <div style={{ fontFamily: 'Inter, sans-serif', background: '#0e0e0e', color: '#eee', minHeight: '100vh', padding: '2rem' }}>
      <div style={{ maxWidth: '700px', margin: '0 auto', background: '#181818', borderRadius: '16px', padding: '2rem', boxShadow: '0 0 20px rgba(0,0,0,0.4)' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', borderBottom: '1px solid #333', paddingBottom: '0.5rem' }}>Rosin Pressing Calculator</h2>
        <button onClick={onBack} style={{ marginBottom: '1rem', ...buttonStyle }}>← Back to Main Menu</button>

        <div style={{ marginBottom: '1rem' }}>
          <label>Micron Bag Size (µ):</label>
          <select value={micron} onChange={e => setMicron(e.target.value)} style={inputStyle}>
            {[25, 37, 45, 70, 90].map(size => (
              <option key={size} value={size}>{size} µ</option>
            ))}
          </select>
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label>Material Type:</label>
          <select value={materialType} onChange={e => setMaterialType(e.target.value)} style={inputStyle}>
            {Object.keys(YIELD_MAP).map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label>Material Weight (g):</label>
          <input
            type="number"
            value={weight}
            onChange={e => setWeight(e.target.value)}
            style={inputStyle}
          />
        </div>

        <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
          <button onClick={() => setShowTips(true)} style={buttonStyle}>Tips</button>
        </div>

        {showTips && (
          <div style={{ marginBottom: '1.5rem', background: '#222', padding: '1rem', borderRadius: '10px' }}>
            <h3 style={{ marginTop: 0 }}>Pressing Tips</h3>
            <ul style={{ paddingLeft: '1.5rem' }}>
              <li>Pressure: Flower rosin ~600–1000 psi; hash rosin ~500–1200 psi (don’t exceed 1200 psi).</li>
              <li>Pre‑heat: 30 sec–2 min before full press to “wet” material.</li>
              <li>Temperature: 160–190 °F (start 175–190 °F for clarity, adjust down).</li>
              <li>Hold time: Hash ~2 min; flower ~3–7 min.</li>
              <li>Bag: Press through smaller micron than source (e.g., 45 μ → 37 μ or 25 μ).</li>
              <li>Double‑bag at 25–37 μ to reduce blowouts and improve clarity.</li>
              <li>Material RH: 68–72 % for optimal flow; rehydrate 30–60 min if needed.</li>
              <li>Yield: Bubble hash ~60 %; dry sift ~65–70 %; flower ~15–25 %.</li>
            </ul>
            <button onClick={() => setShowTips(false)} style={{ marginTop: '1rem', ...buttonStyle }}>Close Tips</button>
          </div>
        )}

        <div style={{ background: '#222', padding: '1rem', borderRadius: '10px' }}>
          <p><strong>Recommended Pressure:</strong> {recommendedPressure} psi</p>
          <p><strong>Temperature:</strong> {recommendedTemp} °F</p>
          <p><strong>Duration:</strong> {recommendedDuration} {recommendedDuration === 1 ? 'minute' : 'minutes'}</p>
          <p><strong>Yield Projection:</strong> {expectedYield.toFixed(2)} g {(yieldPercent * 100).toFixed(1)} %</p>
        </div>
      </div>
    </div>
  );
}
