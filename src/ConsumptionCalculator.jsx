// ConsumptionCalculator.jsx
import { useState, useEffect } from 'react';

export default function ConsumptionCalculator({ onBack }) {
  const todayISO = new Date().toISOString().slice(0, 10);
  const [startDate, setStartDate] = useState(todayISO);
  const [endDate, setEndDate] = useState(todayISO);
  const [hashAmount, setHashAmount] = useState('0');
  const [flowerAmount, setFlowerAmount] = useState('0');
  const [hashCostPerGram, setHashCostPerGram] = useState('0.00');
  const [flowerCostPerGram, setFlowerCostPerGram] = useState('0.00');
  const [inventoryHash, setInventoryHash] = useState('0');
  const [rateHash, setRateHash] = useState('0');
  const [inventoryFlower, setInventoryFlower] = useState('0');
  const [rateFlower, setRateFlower] = useState('0');
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem('consumptionEntries');
    if (saved) setEntries(JSON.parse(saved));
  }, []);

  const spanDays = entry => {
    const s = new Date(entry.startDate);
    const e = new Date(entry.endDate);
    const diff = Math.round((e - s) / (1000 * 60 * 60 * 24)) + 1;
    return Math.max(1, diff);
  };

  const handleAdd = () => {
    const entry = {
      id: Date.now(),
      startDate,
      endDate,
      hashAmount: parseFloat(hashAmount) || 0,
      flowerAmount: parseFloat(flowerAmount) || 0,
      hashCostPerGram: parseFloat(hashCostPerGram) || 0,
      flowerCostPerGram: parseFloat(flowerCostPerGram) || 0,
      inventoryHash: parseFloat(inventoryHash) || 0,
      rateHash: parseFloat(rateHash) || 0,
      inventoryFlower: parseFloat(inventoryFlower) || 0,
      rateFlower: parseFloat(rateFlower) || 0
    };
    const updated = [entry, ...entries];
    setEntries(updated);
    localStorage.setItem('consumptionEntries', JSON.stringify(updated));

    // reset amounts
    setHashAmount('0');
    setFlowerAmount('0');
  };

  const deleteHistoryEntry = id => {
    const updated = entries.filter(e => e.id !== id);
    setEntries(updated);
    localStorage.setItem('consumptionEntries', JSON.stringify(updated));
  };

  const summary = entries.reduce((acc, e) => {
    acc.hash += e.hashAmount;
    acc.flower += e.flowerAmount;
    acc.cost += e.hashAmount * e.hashCostPerGram + e.flowerAmount * e.flowerCostPerGram;
    return acc;
  }, { hash: 0, flower: 0, cost: 0 });

  const computeRunOut = (inv, rate) => {
    const i = parseFloat(inv) || 0;
    const r = parseFloat(rate) || 0;
    if (r <= 0) return null;
    const days = i / r;
    const date = new Date();
    date.setDate(date.getDate() + Math.ceil(days));
    return date.toISOString().slice(0, 10);
  };

  const runOutHash = computeRunOut(inventoryHash, rateHash);
  const runOutFlower = computeRunOut(inventoryFlower, rateFlower);

  const buttonStyle = { padding: '10px 16px', background: '#202020', color: '#fff', border: '1px solid #444', borderRadius: '8px', cursor: 'pointer', fontSize: '0.9rem' };
  const inputStyle = { width: '100%', padding: '10px', borderRadius: '8px', background: '#111', color: '#fff', border: '1px solid #333', marginTop: '4px' };

  return (
    <div style={{ fontFamily: 'Inter, sans-serif', background: '#0e0e0e', color: '#eee', minHeight: '100vh', padding: '2rem' }}>
      <div style={{ maxWidth: '700px', margin: '0 auto', background: '#181818', borderRadius: '16px', padding: '2rem', boxShadow: '0 0 20px rgba(0,0,0,0.4)' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Consumption Tracker</h2>
        <button onClick={onBack} style={{ marginBottom: '1rem', ...buttonStyle }}>← Back</button>

        {/* Entry date range */}
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
          <div style={{ flex: 1 }}>
            <label>Start Date:</label>
            <input type='date' value={startDate} onChange={e => setStartDate(e.target.value)} style={inputStyle} />
          </div>
          <div style={{ flex: 1 }}>
            <label>End Date:</label>
            <input type='date' value={endDate} onChange={e => setEndDate(e.target.value)} style={inputStyle} />
          </div>
        </div>

        {/* Consumption inputs */}
        <div style={{ marginBottom: '1rem' }}>
          <label>Hash (g):</label>
          <input type='number' step='0.01' value={hashAmount} onChange={e => setHashAmount(e.target.value)} style={inputStyle} />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label>Flower (g):</label>
          <input type='number' step='0.01' value={flowerAmount} onChange={e => setFlowerAmount(e.target.value)} style={inputStyle} />
        </div>

        {/* Cost and run-out settings */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
          <div>
            <label>Hash Cost $/g:</label>
            <input type='number' step='0.01' value={hashCostPerGram} onChange={e => setHashCostPerGram(e.target.value)} style={inputStyle} />
          </div>
          <div>
            <label>Flower Cost $/g:</label>
            <input type='number' step='0.01' value={flowerCostPerGram} onChange={e => setFlowerCostPerGram(e.target.value)} style={inputStyle} />
          </div>
          <div>
            <label>Hash Inventory (g):</label>
            <input type='number' step='0.01' value={inventoryHash} onChange={e => setInventoryHash(e.target.value)} style={inputStyle} />
          </div>
          <div>
            <label>Hash Rate (g/day):</label>
            <input type='number' step='0.01' value={rateHash} onChange={e => setRateHash(e.target.value)} style={inputStyle} />
          </div>
          <div>
            <label>Flower Inventory (g):</label>
            <input type='number' step='0.01' value={inventoryFlower} onChange={e => setInventoryFlower(e.target.value)} style={inputStyle} />
          </div>
          <div>
            <label>Flower Rate (g/day):</label>
            <input type='number' step='0.01' value={rateFlower} onChange={e => setRateFlower(e.target.value)} style={inputStyle} />
          </div>
        </div>

        <button onClick={handleAdd} style={{ ...buttonStyle, marginBottom: '2rem' }}>Save Entry</button>

        {/* Summary */}
        <div style={{ background: '#222', padding: '1rem', borderRadius: '10px', marginBottom: '1.5rem' }}>
          <p><strong>Total Hash:</strong> {summary.hash.toFixed(2)} g</p>
          <p><strong>Total Flower:</strong> {summary.flower.toFixed(2)} g</p>
          <p><strong>Total Cost:</strong> ${summary.cost.toFixed(2)}</p>
        </div>

        {/* Run-Out Predictor */}
        {(runOutHash || runOutFlower) && (
          <div style={{ background: '#222', padding: '1rem', borderRadius: '10px', marginBottom: '1.5rem' }}>
            <h3>Run-Out Predictor</h3>
            {runOutHash   && <p>Hash runs out on:   <strong>{runOutHash}</strong></p>}
            {runOutFlower && <p>Flower runs out on: <strong>{runOutFlower}</strong></p>}
          </div>
        )}

        {/* History */}
        <div style={{ maxHeight: '300px', overflowY: 'auto' }}>
          {entries.length === 0 ? (
            <p style={{ color: '#888' }}>No entries</p>
          ) : (
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {entries.map(e => (
                <li key={e.id} style={{ marginBottom: '0.75rem', borderBottom: '1px solid #333', padding: '0.5rem', position: 'relative' }}>
                  <div style={{ fontSize: '0.85rem', color: '#aaa' }}>{e.startDate} → {e.endDate} ({spanDays(e)} days)</div>
                  <div>Hash: {e.hashAmount} g → {(e.hashAmount / spanDays(e)).toFixed(2)} g/day</div>
                  <div>Flower: {e.flowerAmount} g → {(e.flowerAmount / spanDays(e)).toFixed(2)} g/day</div>
                  <div>Cost: ${( (e.hashAmount * e.hashCostPerGram + e.flowerAmount * e.flowerCostPerGram) ).toFixed(2)}</div>
                  <div>Cost/day: ${( ((e.hashAmount * e.hashCostPerGram + e.flowerAmount * e.flowerCostPerGram) / spanDays(e)).toFixed(2))}</div>
                  <button onClick={() => deleteHistoryEntry(e.id)} style={{ position: 'absolute', top: 0, right: 0, background: 'transparent', color: '#fff', border: 'none', fontSize: '1.2rem', cursor: 'pointer' }}>×</button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
