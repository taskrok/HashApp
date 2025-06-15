// JarFlipCalculator.jsx
import { useState } from 'react';

export default function JarFlipCalculator({ onBack }) {
  const [costPerGram, setCostPerGram] = useState('0.00');
  const [salePricePerGram, setSalePricePerGram] = useState('0.00');
  const [grams, setGrams] = useState('0');
  const [overheadCost, setOverheadCost] = useState('0.00');
  const [packagingCost, setPackagingCost] = useState('0.00');
  const [packagingUnit, setPackagingUnit] = useState(2);

  const formatCurrency = (val) => {
    const num = parseFloat(val.replace(/[^0-9.]/g, ''));
    return isNaN(num) ? '0.00' : num.toFixed(2);
  };

  const parseVal = (val) => parseFloat(val) || 0;

  const handleCurrencyChange = (setter) => (e) => {
    const val = e.target.value;
    if (/^\d*(\.\d{0,2})?$/.test(val)) {
      setter(val);
    }
  };

  const handleCurrencyFocus = (val, setter) => () => {
    if (val === '0.00') setter('');
  };

  const quantity = parseVal(grams);
  const cost = parseVal(costPerGram) * quantity;
  const revenue = parseVal(salePricePerGram) * quantity;
  const overhead = parseVal(overheadCost);
  const unitSize = parseInt(packagingUnit, 10) || 1;
  const packagingUnits = Math.ceil(quantity / unitSize);
  const packagingTotal = parseVal(packagingCost) * packagingUnits;
  const totalCost = cost + overhead + packagingTotal;
  const profit = revenue - totalCost;
  const roi = totalCost > 0 ? (profit / totalCost) * 100 : 0;
  const margin = revenue > 0 ? (profit / revenue) * 100 : 0;

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
        <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', borderBottom: '1px solid #333', paddingBottom: '0.5rem' }}>Jar Flip Profit Calculator</h2>
        <button onClick={onBack} style={{ marginBottom: '1rem', background: '#202020', color: '#fff', border: '1px solid #444', padding: '8px 12px', borderRadius: '6px', cursor: 'pointer' }}>← Back to Main Menu</button>

        {/** Cost Per Gram **/}
        <div style={{ marginBottom: '1rem' }}>
          <label>Cost per Gram:</label>
          <div style={{ position: 'relative' }}>
            <span style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#999' }}>$</span>
            <input
              type="text"
              value={costPerGram}
              onFocus={handleCurrencyFocus(costPerGram, setCostPerGram)}
              onChange={handleCurrencyChange(setCostPerGram)}
              onBlur={e => setCostPerGram(formatCurrency(e.target.value))}
              style={{ ...inputStyle, paddingLeft: '24px' }}
            />
          </div>
        </div>

        {/** Sale Price **/}
        <div style={{ marginBottom: '1rem' }}>
          <label>Sale Price per Gram:</label>
          <div style={{ position: 'relative' }}>
            <span style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#999' }}>$</span>
            <input
              type="text"
              value={salePricePerGram}
              onFocus={handleCurrencyFocus(salePricePerGram, setSalePricePerGram)}
              onChange={handleCurrencyChange(setSalePricePerGram)}
              onBlur={e => setSalePricePerGram(formatCurrency(e.target.value))}
              style={{ ...inputStyle, paddingLeft: '24px' }}
            />
          </div>
        </div>

        {/** Quantity **/}
        <div style={{ marginBottom: '1rem' }}>
          <label>Quantity (grams):</label>
          <input
            type="number"
            value={grams}
            onChange={e => setGrams(e.target.value)}
            style={inputStyle}
          />
        </div>

        {/** Overhead **/}
        <div style={{ marginBottom: '1rem' }}>
          <label>Fixed Overhead Cost: (shipping, labor, etc)</label>
          <div style={{ position: 'relative' }}>
            <span style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#999' }}>$</span>
            <input
              type="text"
              value={overheadCost}
              onFocus={handleCurrencyFocus(overheadCost, setOverheadCost)}
              onChange={handleCurrencyChange(setOverheadCost)}
              onBlur={e => setOverheadCost(formatCurrency(e.target.value))}
              style={{ ...inputStyle, paddingLeft: '24px' }}
            />
          </div>
        </div>

        {/** Packaging Unit Slider **/}
        <div style={{ marginBottom: '1.25rem' }}>
          <label>Packaging Unit Size: {packagingUnit}g</label>
          <input
            type="range"
            min="1"
            max="28"
            value={packagingUnit}
            onChange={e => setPackagingUnit(e.target.value)}
            style={{ width: '100%', marginTop: '4px' }}
          />
        </div>

        {/** Packaging Cost **/}
        <div style={{ marginBottom: '1rem' }}>
          <label>Packaging Cost per Unit:</label>
          <div style={{ position: 'relative' }}>
            <span style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#999' }}>$</span>
            <input
              type="text"
              value={packagingCost}
              onFocus={handleCurrencyFocus(packagingCost, setPackagingCost)}
              onChange={handleCurrencyChange(setPackagingCost)}
              onBlur={e => setPackagingCost(formatCurrency(e.target.value))}
              style={{ ...inputStyle, paddingLeft: '24px' }}
            />
          </div>
        </div>

        {/** Results **/}
        <div style={{ background: '#222', padding: '1rem', borderRadius: '10px', marginTop: '1.5rem' }}>
          <p><strong>Base Cost:</strong> ${cost.toFixed(2)}</p>
          <p><strong>Overhead:</strong> ${overhead.toFixed(2)}</p>
          <p><strong>Packaging Units ({unitSize}g each):</strong> {packagingUnits}</p>
          <p><strong>Packaging Total:</strong> ${packagingTotal.toFixed(2)}</p>
          <p><strong>Total Cost:</strong> ${totalCost.toFixed(2)}</p>
          <p><strong>Total Revenue:</strong> ${revenue.toFixed(2)}</p>
          <p><strong>Profit:</strong> ${profit.toFixed(2)}</p>
          <p><strong>ROI:</strong> {roi.toFixed(1)}%</p>
          <p><strong>Margin:</strong> {margin.toFixed(1)}%</p>
        </div>
      </div>
    </div>
  );
}
