import React from 'react';

const FellowshipsPage = () => {
  const fellowships = [
    { country: "Australia", specialty: "Complex Spine & Deformity", years: "2021-2023", institution: "Royal Adelaide Hospital" },
    { country: "France", specialty: "Minimally Invasive Spine", years: "2025", institution: "Hôpital Paris Saint-Joseph" },
    { country: "South Korea", specialty: "Endoscopic & Robotic Spine", years: "2023", institution: "Wooridul Spine Hospital" },
    { country: "Denmark", specialty: "Spinal Deformity", years: "2018", institution: "Aarhus University Hospital" },
    { country: "Japan", specialty: "Spinal Instrumentation", years: "2017", institution: "Keio University, Tokyo" },
    { country: "Singapore", specialty: "Advanced Spine Research", years: "2015", institution: "National University of Singapore" }
  ];

  return (
    <div>
      <div className="card">
        <h2 style={{ color: '#1a6b8a', marginBottom: '0.5rem', fontSize: '1.6rem', fontWeight: '600' }}>Fellowships</h2>
        <p style={{ color: '#4a6e80', marginBottom: '0.5rem' }}>Advanced clinical and research training at world-renowned spine centers across six countries.</p>
        <div style={{ height: '3px', width: '50px', background: '#9ec8d6', marginTop: '1rem' }}></div>
      </div>

      <div className="fellowships-grid">
        {fellowships.map((fellow, idx) => (
          <div key={idx} className="fellow-item">
            <h4>{fellow.country}</h4>
            <p>{fellow.specialty}</p>
            <span className="year">{fellow.years}</span>
            <p style={{ fontSize: '0.65rem', marginTop: '0.5rem', color: '#8aaec0' }}>{fellow.institution}</p>
          </div>
        ))}
      </div>
      {/* 
      <div className="card">
        <h3 className="section-title">Fellowship Highlights</h3>
        <ul className="list">
          <li>Over 200 complex spine cases as primary fellow</li>
          <li>Training in O-arm navigation and robotic-assisted surgery</li>
          <li>Published multicenter studies on adult spinal deformity</li>
          <li>AO Spine scholarship recipient for advanced deformity course</li>
        </ul>
      </div>
      */}
    </div>
  );
};

export default FellowshipsPage;