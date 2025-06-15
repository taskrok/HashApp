// YieldCalculator.jsx
import { useState, useEffect } from 'react';

const BASE_DEFAULTS = {
  'Fresh Frozen -> Bubble Hash': 0.045,
  'Fresh Frozen -> Rosin': 0.05,
  'Bubble Hash -> Rosin': 0.6,
  'Dry Bud -> Rosin': 0.18,
  'Dry Trim -> Bubble Hash': 0.075,
  'Dry Sift -> Rosin': 0.7,
  'Dry Bud -> BHO': 0.22,
  'Dry Trim -> BHO': 0.12,
  'Bubble Hash -> BHO': 0.55,
  'Fresh Frozen -> BHO': 0.06
};

const STARTING_MATERIALS = [
  'Fresh Frozen',
  'Bubble Hash',
  'Dry Bud',
  'Dry Trim',
  'Dry Sift'
];

const FINISHED_MATERIALS = [
  'Bubble Hash',
  'Rosin',
  'BHO'
];

const TOOLTIP_MAP = {
  'Fresh Frozen -> Rosin': 'Yield range: 3–8%. Based on Reddit consensus, average is ~5%.',
  'Fresh Frozen -> Bubble Hash': 'Typical water hash yield is 4–5% from Fresh Frozen.',
  'Bubble Hash -> Rosin': 'Rosin yields ~60–70% from top quality hash.',
  'Dry Bud -> Rosin': 'Flower rosin returns are commonly 15–22%.',
  'Dry Trim -> Bubble Hash': 'Trim yields around 5–10% when processed into hash.',
  'Dry Sift -> Rosin': 'Dry sift can return up to 70% as rosin.',
  'Dry Bud -> BHO': 'Typical butane extraction yields are ~20–22% from dry flower.',
  'Dry Trim -> BHO': 'Trim to BHO yields closer to 10–12%.',
  'Bubble Hash -> BHO': 'Hash can be blasted at ~55% return.',
  'Fresh Frozen -> BHO': 'FF to BHO usually returns about 6% average.'
};

export default function YieldCalculator({ onBack }) {
  const [weight, setWeight] = useState('');
  const [useOunces, setUseOunces] = useState(false);
  const [start, setStart] = useState('Fresh Frozen');
  const [finish, setFinish] = useState('Bubble Hash');
  const [customYield, setCustomYield] = useState('');
  const [customDefaults, setCustomDefaults] = useState(() => {
    const saved = localStorage.getItem('customMaterialYields');
    return saved ? JSON.parse(saved) : BASE_DEFAULTS;
  });
  const [history, setHistory] = useState([]);
  const [showDefaultsMenu, setShowDefaultsMenu] = useState(false);
  const [showHistory, setShowHistory] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('hashCalculatorHistory');
    if (saved) setHistory(JSON.parse(saved));
  }, []);

  const key = `${start} -> ${finish}`;
  const defaultYield = customDefaults[key] || 0;
  const activeYield = customYield !== '' ? parseFloat(customYield) / 100 : defaultYield;
  const inputWeight = parseFloat(weight) || 0;
  const weightInGrams = useOunces ? inputWeight * 28.3495 : inputWeight;
  const estimated = weightInGrams * activeYield;
  const tooltip = TOOLTIP_MAP[key] || 'No info available.';

  const buttonStyle = {
    padding: '10px 16px',
    background: '#202020',
    color: '#fff',
    border: '1px solid #444',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '0.9rem',
    transition: 'background 0.3s ease'
  };

  function deleteHistoryEntry(index) {
    const updated = [...history];
    updated.splice(index, 1);
    setHistory(updated);
    localStorage.setItem('hashCalculatorHistory', JSON.stringify(updated));
  }

  return (
    <div style={{ fontFamily: 'Inter, sans-serif', background: '#0e0e0e', color: '#eee', minHeight: '100vh', padding: '2rem' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', background: '#181818', borderRadius: '16px', padding: '2rem', boxShadow: '0 0 20px rgba(0,0,0,0.4)' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', borderBottom: '1px solid #333', paddingBottom: '0.5rem' }}>
          Material Yield Calculator
        </h2>
        <button
          onClick={onBack}
          style={{
            marginBottom: '1rem',
            background: '#202020',
            color: '#fff',
            border: '1px solid #444',
            padding: '8px 12px',
            borderRadius: '6px',
            cursor: 'pointer'
          }}
        >
          ← Back to Main Menu
        </button>
        {/* Calculator input UI: Weight, unit toggle */}
        <div style={{ marginBottom: '1.5rem' }}>
          <label>Input Weight ({useOunces ? 'oz' : 'g'})</label>
          <input
            type="number"
            value={weight}
            onChange={e => setWeight(e.target.value)}
            style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #333', background: '#111', color: '#fff', marginTop: '4px' }}
          />
          <label style={{ display: 'block', marginTop: '8px' }}>
            <input type="checkbox" checked={useOunces} onChange={() => setUseOunces(!useOunces)} /> Use ounces instead
          </label>
        </div>
        {/* Start/Finish selectors */}
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
          <div style={{ flex: 1 }}>
            <label>Starting Material</label>
            <select
              value={start}
              onChange={e => { setStart(e.target.value); setCustomYield(''); }}
              style={{ width: '100%', padding: '10px', borderRadius: '8px', background: '#111', color: '#fff', border: '1px solid #333', marginTop: '4px' }}
            >
              {STARTING_MATERIALS.map(mat => <option key={mat} value={mat}>{mat}</option>)}
            </select>
          </div>
          <div style={{ flex: 1 }}>
            <label>Finished Material</label>
            <select
              value={finish}
              onChange={e => { setFinish(e.target.value); setCustomYield(''); }}
              style={{ width: '100%', padding: '10px', borderRadius: '8px', background: '#111', color: '#fff', border: '1px solid #333', marginTop: '4px' }}
            >
              {FINISHED_MATERIALS.map(mat => <option key={mat} value={mat}>{mat}</option>)}
            </select>
          </div>
        </div>
        {/* Estimated Yield input */}
        <div style={{ marginBottom: '1rem' }}>
          <label>Estimated Yield %</label>
          <div title={tooltip} style={{ fontSize: '0.85rem', color: '#aaa', marginBottom: '4px' }}>ℹ {tooltip}</div>
          <input
            type="number"
            value={customYield !== '' ? customYield : (defaultYield * 100).toFixed(1)}
            onChange={e => setCustomYield(e.target.value)}
            style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #333', background: '#111', color: '#fff' }}
          />
        </div>
        {/* Output display */}
        <div style={{ background: '#222', padding: '1rem', borderRadius: '10px', marginTop: '1rem' }}>
          <strong>Output:</strong><br />
          {inputWeight.toFixed(2)} {useOunces ? 'oz' : 'g'} of {start} → {estimated.toFixed(2)} g ({(estimated / 28.3495).toFixed(2)} oz) of {finish}<br />
          Yield: {(activeYield * 100).toFixed(1)}%
        </div>
        {/* Action buttons */}
        <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
          <button style={buttonStyle} onClick={() => {
            const newEntry = { date: new Date().toISOString(), start, finish, weight: inputWeight.toFixed(2), useOunces, yield: (activeYield * 100).toFixed(1), outputGrams: estimated.toFixed(2), outputOz: (estimated / 28.3495).toFixed(2) };
            const updatedHistory = [newEntry, ...history].slice(0,20);
            setHistory(updatedHistory);
            localStorage.setItem('hashCalculatorHistory', JSON.stringify(updatedHistory));
          }}>
            Save Result
          </button>
          <button style={buttonStyle} onClick={() => setShowDefaultsMenu(!showDefaultsMenu)}>Customize Defaults</button>
          <button style={buttonStyle} onClick={() => setShowHistory(!showHistory)}>{showHistory ? 'Hide History' : 'Show History'}</button>
        </div>
        {/* Defaults panel */}
        <div style={{ maxHeight: showDefaultsMenu ? '800px':'0px', overflow:'hidden', transition:'max-height 0.4s ease', marginTop: showDefaultsMenu?'2rem':'0', padding: showDefaultsMenu?'1rem':'0', background: showDefaultsMenu?'#111':'transparent', borderRadius:'10px' }}>
          {showDefaultsMenu && (
            <div>
              <h3>Edit Default Yields</h3>
              {Object.entries(customDefaults).map(([key,val])=>(
                <div key={key} style={{ marginBottom:'0.75rem' }}>
                  <label>{key}</label>
                  <input type="number" value={(val*100).toFixed(1)} onChange={e=>{ const updated={...customDefaults, [key]:parseFloat(e.target.value)/100}; setCustomDefaults(updated); localStorage.setItem('customMaterialYields', JSON.stringify(updated)); }} style={{ marginLeft:'1rem', padding:'6px', borderRadius:'6px', background:'#000', color:'#fff', border:'1px solid #333' }} />%
                </div>
              ))}
              <button style={{...buttonStyle, marginTop:'1rem'}} onClick={()=>setShowDefaultsMenu(false)}>Close</button>
            </div>
          )}
        </div>
        {/* History panel */}
        <div style={{ maxHeight: showHistory?'1000px':'0px', overflow:'hidden', transition:'max-height 0.4s ease', marginTop: showHistory?'2rem':'0', padding: showHistory?'1rem':'0', background: showHistory?'#141414':'transparent', borderRadius:'10px' }}>
          {showHistory && (
            <div>
              <strong>Saved History:</strong>
              {history.length===0?(<p style={{color:'#888'}}>No saved results yet.</p>):(
                <ul style={{listStyle:'none', paddingLeft:0}}>
                  {history.map((entry, idx)=>(
                    <li key={idx} style={{ marginBottom:'0.75rem', borderBottom:'1px solid #333', paddingBottom:'0.75rem', position:'relative' }}>
                      <div style={{fontSize:'0.85rem', color:'#aaa'}}>{new Date(entry.date).toLocaleString()}</div>
                      <div>{entry.weight} {entry.useOunces?'oz':'g'} of {entry.start} → {entry.outputGrams} g ({entry.outputOz} oz) of {entry.finish}</div>
                      <div>Yield: {entry.yield}%</div>
                      <button onClick={()=>deleteHistoryEntry(idx)} style={{position:'absolute', top:0, right:0, background:'transparent', color:'#f55', border:'none', fontSize:'1.2rem', cursor:'pointer'}}>×</button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
