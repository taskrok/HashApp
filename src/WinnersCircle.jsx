import { useState, useMemo, useRef } from 'react';
import { competitions, events, placements } from './data/database';

// Updated charting component with interactive tooltips and improved layout
const SimpleBarChart = ({ data, title }) => {
  const [hoveredYear, setHoveredYear] = useState(null);
  const [tooltipData, setTooltipData] = useState(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  const maxValue = Math.max(1, ...Object.values(data).flatMap(yearData => Math.max(...Object.values(yearData))));
  const years = Object.keys(data).sort();
  const categories = [...new Set(Object.values(data).flatMap(yearData => Object.keys(yearData)))];
  const colors = ['#3b82f6', '#ef4444', '#22c55e', '#eab308', '#8b5cf6', '#14b8a6'];

  const handleMouseEnter = (e, year) => {
    setHoveredYear(year);
    setTooltipData(data[year]);
    const rect = e.currentTarget.getBoundingClientRect();
    setTooltipPosition({ x: rect.left + rect.width / 2, y: rect.top });
  };

  const handleMouseLeave = () => {
    setHoveredYear(null);
    setTooltipData(null);
  };

  return (
    <div style={{ background: '#222', borderRadius: '8px', marginTop: '1rem', padding: '1rem' }}>
      <h4 style={{ margin: '0 0 1rem 0' }}>{title}</h4>
      <div style={{ overflowX: 'auto', paddingBottom: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', height: '200px', minWidth: `${years.length * 80}px`, borderLeft: '1px solid #444', borderBottom: '1px solid #444', padding: '0 1rem', position: 'relative' }}>
          {years.map(year => (
            <div 
              key={year} 
              style={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  alignItems: 'center', 
                  height: '100%', 
                  justifyContent: 'flex-end', 
                  flexShrink: 0, 
                  width: '70px', 
                  cursor: 'pointer',
                  border: hoveredYear === year ? '1px solid #555' : '1px solid transparent',
                  background: hoveredYear === year ? 'rgba(255,255,255,0.05)' : 'transparent',
                  paddingTop: '10px'
              }}
              onMouseEnter={(e) => handleMouseEnter(e, year)}
              onMouseLeave={handleMouseLeave}
            >
              <div style={{ display: 'flex', alignItems: 'flex-end', height: '100%'}}>
                  {categories.map((cat, i) => {
                    const value = data[year][cat] || 0;
                    const height = maxValue > 0 ? (value / maxValue) * 100 : 0;
                    return (
                      <div 
                        key={cat} 
                        style={{ 
                          width: '8px', 
                          height: `${height}%`, 
                          background: colors[i % colors.length], 
                          margin: '0 2px', 
                          borderRadius: '2px 2px 0 0', 
                          transition: 'height 0.3s ease-in-out' 
                        }} 
                      />
                    )
                  })}
              </div>
              <span style={{ fontSize: '0.8rem', marginTop: '0.5rem', color: '#999' }}>{year}</span>
            </div>
          ))}
        </div>
      </div>
       <div style={{display: 'flex', justifyContent: 'center', marginTop: '1rem', flexWrap: 'wrap'}}>
          {categories.map((cat, i) => (
            <div key={cat} style={{display: 'flex', alignItems: 'center', marginRight: '1rem', fontSize: '0.9rem'}}>
              <div style={{width: '12px', height: '12px', background: colors[i % colors.length], marginRight: '5px', borderRadius: '2px'}}></div>
              <span>{cat}</span>
            </div>
          ))}
      </div>
      {hoveredYear && tooltipData && (
        <div style={{
          position: 'fixed',
          top: tooltipPosition.y - 120, // Position above the cursor
          left: tooltipPosition.x,
          transform: 'translateX(-50%)',
          background: '#333',
          padding: '0.75rem',
          borderRadius: '8px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.5)',
          zIndex: 10003,
          pointerEvents: 'none',
          textAlign: 'left'
        }}>
          <h5 style={{margin: '0 0 0.5rem 0'}}>Year: {hoveredYear}</h5>
          {Object.entries(tooltipData).sort(([,a],[,b]) => b-a).map(([cat, count]) => (
            <div key={cat} style={{display: 'flex', alignItems: 'center', fontSize: '0.9rem'}}>
               <div style={{width: '10px', height: '10px', background: colors[categories.indexOf(cat) % colors.length], marginRight: '8px', borderRadius: '2px', flexShrink: 0}}></div>
               <span>{cat}: <strong>{count}</strong></span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

// Strain Performance Chart Component
const StrainPerformanceChart = ({ data, competitions, events }) => {
    const [hoveredStrain, setHoveredStrain] = useState(null);
    const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
    const hideTimeoutId = useRef(null);

    if (!data || data.length === 0) {
        return <p>No significant strain data to display.</p>;
    }
    const maxCount = Math.max(...data.map(d => d.count));

    const rankColors = { 1: '#FFD700', 2: '#C0C0C0', 3: '#CD7F32' };

    const handleMouseEnter = (e, strain) => {
        if (hideTimeoutId.current) {
            clearTimeout(hideTimeoutId.current);
        }
        setTooltipPosition({ x: e.clientX, y: e.clientY });
        setHoveredStrain(strain);
    };

    const handleMouseLeave = () => {
        hideTimeoutId.current = setTimeout(() => {
            setHoveredStrain(null);
        }, 300); 
    };

    return (
        <div style={{ padding: '1rem', background: '#222', borderRadius: '8px', marginTop: '1rem', position: 'relative' }}>
            <h4 style={{ margin: '0 0 1rem 0' }}>Most Awarded Strains</h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
                {data.map((strain, index) => {
                    const size = 40 + (strain.count / maxCount) * 80;
                    const fontSize = 10 + (strain.count / maxCount) * 8;
                    return (
                        <div 
                            key={index} 
                            style={{
                                width: `${size}px`,
                                height: `${size}px`,
                                borderRadius: '50%',
                                background: `radial-gradient(circle, rgba(90, 90, 90, 0.8) 0%, rgba(40, 40, 40, 0.9) 100%)`,
                                color: '#fff',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                textAlign: 'center',
                                padding: '5px',
                                fontSize: `${fontSize}px`,
                                lineHeight: 1.1,
                                transition: 'transform 0.2s ease-in-out',
                                cursor: 'pointer'
                            }}
                            onMouseEnter={(e) => handleMouseEnter(e, strain)}
                            onMouseLeave={handleMouseLeave}
                        >
                           {strain.name}
                        </div>
                    );
                })}
            </div>
            {hoveredStrain && (
                 <div 
                    style={{
                        position: 'fixed',
                        top: tooltipPosition.y + 25,
                        left: tooltipPosition.x,
                        transform: 'translateX(-50%)',
                        background: '#333',
                        padding: '1rem',
                        borderRadius: '8px',
                        boxShadow: '0 2px 10px rgba(0,0,0,0.5)',
                        zIndex: 10002,
                        width: '300px'
                    }}
                    onMouseEnter={() => { if (hideTimeoutId.current) clearTimeout(hideTimeoutId.current); }}
                    onMouseLeave={handleMouseLeave}
                  >
                    <h5 style={{ marginTop: 0, marginBottom: '0.5rem', borderBottom: '1px solid #555', paddingBottom: '0.5rem' }}>{hoveredStrain.name} ({hoveredStrain.count} awards)</h5>
                    <ul style={{ margin: 0, paddingLeft: 0, listStyle: 'none', maxHeight: '150px', overflowY: 'auto' }}>
                      {hoveredStrain.awards.map((award, i) => {
                          const event = events.find(e => e.id === award.eventId);
                          const competition = event ? competitions.find(c => c.id === event.competitionId) : null;
                          return (
                            <li key={i} style={{ marginBottom: '0.5rem', fontSize: '0.9rem' }}>
                                <strong style={{ color: rankColors[award.rank] || '#eee' }}>
                                    {award.rank <= 3 ? `Place ${award.rank}` : 'Award'}
                                </strong> in "{award.category}"
                                <br />
                                <small style={{color: '#bbb'}}>{competition?.name} - {event?.name}</small>
                            </li>
                          )
                      })}
                    </ul>
                </div>
            )}
        </div>
    );
};


export default function WinnersCircle({ onBack }) {
  const [expandedRegions, setExpandedRegions] = useState({});
  const [expandedComps, setExpandedComps] = useState({});
  const [expandedEvents, setExpandedEvents] = useState({});
  const [showLeaderboard, setShowLeaderboard] = useState(false);
  const [showTrends, setShowTrends] = useState(false);
  const [activeAwardInfo, setActiveAwardInfo] = useState(null);
  const [selectedCompetitor, setSelectedCompetitor] = useState('');

  const processedData = useMemo(() => {
    // ... (logic remains the same)
    const placementsByEvent = {};
    for (const p of placements) {
      if (!placementsByEvent[p.eventId]) {
        placementsByEvent[p.eventId] = {};
      }
      if (!placementsByEvent[p.eventId][p.category]) {
        placementsByEvent[p.eventId][p.category] = [];
      }
      placementsByEvent[p.eventId][p.category].push(p);
    }
    const eventsByComp = {};
    for (const e of events) {
      if (!eventsByComp[e.competitionId]) {
        eventsByComp[e.competitionId] = [];
      }
      eventsByComp[e.competitionId].push({
        ...e,
        categories: placementsByEvent[e.id] || {},
      });
    }
    const dataByRegion = {};
    for (const c of competitions) {
      const region = c.defaultRegion;
      if (!dataByRegion[region]) {
        dataByRegion[region] = [];
      }
      dataByRegion[region].push({
        ...c,
        events: eventsByComp[c.id] || [],
      });
    }
    return dataByRegion;
  }, []);

const leaderboard = useMemo(() => {
  const stats = {};
  const splitPattern = /\s+(?:&|and|\+|×|\/|x)\s+/i;

  placements.forEach(p => {
    // normalize winnerName into an array of strings
    let raw = p.winnerName;
    if (!raw) return;                 // skip empty
    const namesArray = Array.isArray(raw)
      ? raw
      : typeof raw === 'string'
        ? [raw]
        : [String(raw)];              // fallback to string

    namesArray.forEach(entry => {
      // now safe to split on our pattern
      entry
        .split(splitPattern)
        .map(n => n.trim())
        .filter(Boolean)
        .forEach(name => {
          if (!stats[name]) {
            stats[name] = { first: 0, second: 0, third: 0, total: 0, other: [], allAwards: [] };
          }
          // increment the right bucket
          if (p.rank === 1) stats[name].first++;
          else if (p.rank === 2) stats[name].second++;
          else if (p.rank === 3) stats[name].third++;
          else stats[name].other.push(p);

          stats[name].total++;
          stats[name].allAwards.push(p);
        });
    });
  });

  return Object.entries(stats)
    .map(([name, data]) => ({ name, ...data }))
    .sort((a, b) => 
      b.total - a.total ||
      b.first - a.first ||
      a.name.localeCompare(b.name)
    );
}, [placements]);


const stats = useMemo(() => {
  const totalCompetitions = competitions.length;
  const totalEvents = events.length;
  const totalWinners = placements.length;
  return { totalCompetitions, totalEvents, totalWinners };
}, []);


  // --- `useMemo` hooks for Trends ---

  const categoryPopularity = useMemo(() => {
    const popularCats = ['Rosin', 'Dry Sift', 'Ice-O-Lator', 'Full Melt', 'Hash', 'Solventless'];
    const yearlyCounts = {};
    for(const p of placements) {
      const event = events.find(e => e.id === p.eventId);
      if(!event || !event.year) continue;
      const year = String(event.year).substring(0, 4); // Handle date ranges
      if (!yearlyCounts[year]) yearlyCounts[year] = {};

      for(const cat of popularCats) {
        if(p.category.toLowerCase().includes(cat.toLowerCase())) {
          if(!yearlyCounts[year][cat]) yearlyCounts[year][cat] = 0;
          yearlyCounts[year][cat]++;
        }
      }
    }
    return yearlyCounts;
  }, []);

  const winTrajectories = useMemo(() => {
    const trajectories = {};
    leaderboard.forEach(competitor => {
      trajectories[competitor.name] = {};
      competitor.allAwards.forEach(award => {
        const event = events.find(e => e.id === award.eventId);
        if(!event || !event.year) return;
        const year = String(event.year).substring(0,4);
        if(!trajectories[competitor.name][year]) {
          trajectories[competitor.name][year] = [];
        }
        trajectories[competitor.name][year].push(award);
      })
    });
    return trajectories;
  }, [leaderboard]);
  
  const strainPerformance = useMemo(() => {
    const strainCounts = {};
    placements.forEach(p => {
        if (p.entryName) {
            const cleanName = p.entryName.split(/[(xX]/)[0].trim();
            if (cleanName) {
                if (!strainCounts[cleanName]) {
                    strainCounts[cleanName] = { count: 0, awards: [] };
                }
                strainCounts[cleanName].count++;
                strainCounts[cleanName].awards.push(p);
            }
        }
    });
    return Object.entries(strainCounts)
        .map(([name, data]) => ({ name, count: data.count, awards: data.awards }))
        .filter(strain => strain.count > 1)
        .sort((a, b) => b.count - a.count)
        .slice(0, 25);
  }, []);
  
// Accordion logic for Regions: Correctly resets lower levels.
  const toggleRegion = region => {
    const isAlreadyOpen = expandedRegions[region];
    setExpandedComps({});
    setExpandedEvents({});
    setExpandedRegions(isAlreadyOpen ? {} : { [region]: true });
  };

  // Accordion logic for Competitions: Correctly resets the event level.
  const toggleComp = compId => {
    const isAlreadyOpen = expandedComps[compId];
    setExpandedEvents({});
    setExpandedComps(isAlreadyOpen ? {} : { [compId]: true });
  };

  // MODIFIED: Multi-expand logic for Events.
  const toggleEvent = eventId => {
    setExpandedEvents(prev => ({
      ...prev, // 1. Keep all other currently expanded events
      [eventId]: !prev[eventId] // 2. Toggle the state of just the clicked event
    }));
  };

  const buttonStyle = {
    padding: '10px 16px',
    background: '#202020',
    color: '#fff',
    border: '1px solid #444',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '0.9rem'
  };

  const rankColors = {
    1: '#FFD700',
    2: '#C0C0C0',
    3: '#CD7F32'
  };

  return (
    <div style={{ fontFamily: 'Inter, sans-serif', background: '#0e0e0e', color: '#eee', minHeight: '100vh', padding: '2rem', position: 'relative' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', background: '#181818', borderRadius: '16px', padding: '2rem', boxShadow: '0 0 20px rgba(0,0,0,0.4)' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Winners Circle</h2>
        <button onClick={onBack} style={{ marginBottom: '1.5rem', ...buttonStyle }}>← Back</button>
        <button onClick={() => setShowLeaderboard(true)} style={{ marginBottom: '1.5rem', marginLeft: '1rem', ...buttonStyle }}>🏆 Leaderboard</button>
        <button onClick={() => setShowTrends(true)} style={{ marginBottom: '1.5rem', marginLeft: '1rem', ...buttonStyle }}>📈 Trends</button>

        {/* Trends Modal */}
        {showTrends && (
          <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.7)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 9998 }}>
            <div style={{ width: '90%', maxWidth: '800px', maxHeight: '80vh', overflowY: 'auto', background: '#121212', border: '2px solid #444', borderRadius: '12px', padding: '1rem', zIndex: 9999 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <h3 style={{ fontSize: '1.5rem' }}>📈 Trends & Analytics</h3>
                <button onClick={() => setShowTrends(false)} style={{ ...buttonStyle }}>Close ✖</button>
              </div>
              
              <SimpleBarChart data={categoryPopularity} title="Category Popularity Over Time" />
              
              <StrainPerformanceChart data={strainPerformance} competitions={competitions} events={events} />

              <div style={{ padding: '1rem', background: '#222', borderRadius: '8px', marginTop: '1rem' }}>
                <h4 style={{ margin: '0 0 1rem 0' }}>Win Trajectories</h4>
                <select onChange={(e) => setSelectedCompetitor(e.target.value)} value={selectedCompetitor} style={{...buttonStyle, width: '100%', marginBottom: '1rem'}}>
                  <option value="">Select a Competitor...</option>
                  {leaderboard.map(c => <option key={c.name} value={c.name}>{c.name}</option>)}
                </select>
                {selectedCompetitor && winTrajectories[selectedCompetitor] && (
                  <div>
                    {Object.entries(winTrajectories[selectedCompetitor]).sort(([a],[b])=> a.localeCompare(b)).map(([year, awards]) => (
                      <div key={year} style={{display: 'flex', alignItems: 'flex-start', marginBottom: '0.5rem'}}>
                        <div style={{width: '60px', color: '#999'}}>{year}:</div>
                        <div style={{display: 'flex', flexWrap: 'wrap'}}>
                          {awards.map((award, i) => (
                            <span key={i} title={`${award.category}: ${award.entryName || 'N/A'}`} style={{color: rankColors[award.rank] || '#eee', marginRight: '5px', fontSize: '1.5rem'}}>
                              {award.rank === 1 ? '🥇' : award.rank === 2 ? '🥈' : award.rank === 3 ? '🥉' : '🏅'}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              
            </div>
          </div>
        )}

        {/* Leaderboard Modal */}
        {showLeaderboard && (
          <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.7)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 9998 }}>
            <div style={{ width: '90%', maxWidth: '800px', maxHeight: '80vh', overflowY: 'auto', background: '#121212', border: '2px solid #444', borderRadius: '12px', padding: '1rem', zIndex: 9999 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <h3 style={{ fontSize: '1.5rem' }}>🏆 Competitor Leaderboard</h3>
                <button onClick={() => { setShowLeaderboard(false); setActiveAwardInfo(null); }} style={{ ...buttonStyle }}>Close ✖</button>
              </div>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid #444' }}>
                    <th style={{ textAlign: 'left', padding: '8px' }}>#</th>
                    <th style={{ textAlign: 'left', padding: '8px' }}>Name</th>
                    <th style={{ textAlign: 'center', padding: '8px' }}>🥇</th>
                    <th style={{ textAlign: 'center', padding: '8px' }}>🥈</th>
                    <th style={{ textAlign: 'center', padding: '8px' }}>🥉</th>
                    <th style={{ textAlign: 'center', padding: '8px' }}>🏅</th>
                    <th style={{ textAlign: 'center', padding: '8px' }}>Total</th>
                  </tr>
                </thead>
                <tbody>
                  {leaderboard.map((entry, idx) => (
                    <tr key={idx} style={{ borderBottom: '1px solid #222' }}>
                      <td style={{ padding: '8px', color: '#999' }}>{idx + 1}</td>
                      <td style={{ padding: '8px' }}>{entry.name}</td>
                      <td style={{ textAlign: 'center', color: '#FFD700' }}>{entry.first}</td>
                      <td style={{ textAlign: 'center', color: '#C0C0C0' }}>{entry.second}</td>
                      <td style={{ textAlign: 'center', color: '#CD7F32' }}>{entry.third}</td>
                      <td style={{ textAlign: 'center', color: '#66ccff' }}>{entry.other.length}</td>
                      <td
                        style={{ textAlign: 'center', color: '#eee', cursor: 'pointer', fontWeight: 'bold' }}
                        onClick={() => setActiveAwardInfo(activeAwardInfo === idx ? null : idx)}
                      >
                        {entry.total}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              
              {activeAwardInfo !== null && (
                <>
                  <div 
                    style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.5)', zIndex: 10000 }}
                    onClick={() => setActiveAwardInfo(null)}
                  />
                  <div style={{
                    position: 'fixed',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    background: '#222',
                    padding: '1.5rem',
                    borderRadius: '12px',
                    boxShadow: '0 5px 25px rgba(0,0,0,0.7)',
                    zIndex: 10001,
                    width: '90%',
                    maxWidth: '500px',
                    maxHeight: '70vh',
                    overflowY: 'auto'
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <h4 style={{ marginBottom: '1rem', marginTop: 0 }}>🎖 Awards for {leaderboard[activeAwardInfo].name}:</h4>
                       <button onClick={() => setActiveAwardInfo(null)} style={{...buttonStyle, padding: '5px 10px', background: '#333' }}>✖</button>
                    </div>
                    <ul style={{ paddingLeft: '1rem', margin: 0, listStyle: 'none' }}>
                      {leaderboard[activeAwardInfo].allAwards.map((award, i) => {
                        const event = events.find(e => e.id === award.eventId);
                        const competition = event ? competitions.find(c => c.id === event.competitionId) : null;
                        return (
                          <li key={i} style={{ marginBottom: '0.5rem', borderLeft: `3px solid ${rankColors[award.rank] || '#555'}`, paddingLeft: '10px' }}>
                            <strong>{award.rank <= 3 ? `Place ${award.rank}` : (award.category || 'Special Award')}</strong>
                            <br />
                            <em>{award.entryName || 'Unnamed Entry'}</em><br />
                            <small style={{ color: '#aaa' }}>
                              {competition?.name || 'Unknown Competition'} - {event?.name || 'Unknown Event'}
                            </small>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </>
              )}
            </div>
          </div>
        )}

        {/* Main collapsible list of competitions */}
        {Object.entries(processedData).map(([region, comps]) => (
          <div key={region} style={{ marginBottom: '1.0rem' }}>
            <div onClick={() => toggleRegion(region)} style={{ fontSize: '1.15rem', fontWeight: 'bold', display: 'flex', alignItems: 'center', cursor: 'pointer', borderBottom: '1px solid #333', paddingBottom: '0.25rem', userSelect: 'none' }}>
              <span style={{ marginRight: '0.5rem' }}>{expandedRegions[region] ? '▾' : '▸'}</span>
              {region}
            </div>

            {expandedRegions[region] && (
              <ul style={{ listStyle: 'none', paddingLeft: 0, marginTop: '0.75rem' }}>
                {comps.map(comp => (
                  <li key={comp.id} style={{ marginBottom: '0.5rem' }}>
                    <div onClick={() => toggleComp(comp.id)} style={{ fontWeight: 'bold', display: 'flex', alignItems: 'center', cursor: 'pointer', userSelect: 'none', padding: '0.25rem 0' }}>
                      <span style={{ marginRight: '0.5rem' }}>{expandedComps[comp.id] ? '▾' : '▸'}</span>
                      {comp.name}
                    </div>

                    {expandedComps[comp.id] && (
                      <div style={{ marginLeft: '1.25rem', marginTop: '0.5rem' }}>
                        {comp.events.map(event => (
                          <div key={event.id} style={{ marginTop: '1rem' }}>
                            <div onClick={() => toggleEvent(event.id)} style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', userSelect: 'none', color: '#ccc', fontStyle: 'italic' }}>
                               <span style={{ marginRight: '0.5rem' }}>{expandedEvents[event.id] ? '▾' : '▸'}</span>
                               {event.name}
                            </div>
                            
                            {expandedEvents[event.id] && (
                               <div style={{ marginLeft: '1.25rem', marginTop: '0.25rem', borderLeft: '1px solid #333', paddingLeft: '1rem' }}>
                                 {Object.entries(event.categories).map(([categoryTitle, placements]) => (
                                   <div key={categoryTitle} style={{ marginBottom: '1rem' }}>
                                     <strong>{categoryTitle}:</strong>
                                     <ul style={{ listStyle: 'none', paddingLeft: '1rem', marginTop: '0.5rem' }}>
                                       {placements.map((p, idx) => (
                                         <li key={idx} style={{ marginBottom: '0.25rem' }}>
                                           <span style={{ color: rankColors[p.rank] || '#eee', fontWeight: 'bold', minWidth: '20px', display: 'inline-block' }}>{p.rank}</span>
                                           <span style={{ margin: '0 8px' }}>-</span>
                                           <span>{p.winnerName}</span>
                                           {p.entryName && <em style={{ color: '#999', marginLeft: '8px' }}>({p.entryName})</em>}
                                         </li>
                                       ))}
                                     </ul>
                                   </div>
                                 ))}
                               </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
      <div style={{ marginTop: '2rem', borderTop: '1px solid #333', paddingTop: '1rem', textAlign: 'center', fontSize: '0.95rem', color: '#aaa' }}>
  <p><strong>{stats.totalCompetitions}</strong> Competitions • <strong>{stats.totalEvents}</strong> Events • <strong>{stats.totalWinners}</strong> Awarded Placements</p>
</div>

    </div>
    
  );
}
