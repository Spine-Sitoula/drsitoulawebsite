import React, { useState } from 'react';

const ResearchPage = () => {
  const [activeTab, setActiveTab] = useState('publications');

  const publications = [
    { title: "Minimally Invasive Spine Surgery in Low-Resource Settings", journal: "Spine Journal", year: "2024" },
    { title: "Global Trends in Cervical Disc Arthroplasty", journal: "Global Spine Journal", year: "2023" },
    { title: "Five-Year Outcomes of Endoscopic Lumbar Discectomy", journal: "European Spine Journal", year: "2022" },
    { title: "Surgical Site Infection Prevention in Spinal Surgery", journal: "Spine Deformity", year: "2021" }
  ];

  const lectures = [
    { title: "MISS in Developing Nations", event: "World Spine Summit", location: "Singapore", year: "2024" },
    { title: "Endoscopic Spine Surgery Techniques", event: "AO Spine Global Course", location: "Thailand", year: "2023" },
    { title: "Complex Deformity Correction", event: "SICOT World Congress", location: "Korea", year: "2022" }
  ];

  return (
    <div>
      <div className="card">
        <h2 style={{ color: '#1a6b8a', marginBottom: '0.5rem', fontSize: '1.6rem', fontWeight: '600' }}>Research & Publications</h2>
        <p>Dr. Sitoula has authored over 45 peer-reviewed articles, book chapters, and international presentations.</p>
        <div style={{ height: '3px', width: '50px', background: '#9ec8d6', marginTop: '1rem' }}></div>
      </div>

      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.2rem', flexWrap: 'wrap' }}>
        <button 
          onClick={() => setActiveTab('publications')}
          style={{
            background: activeTab === 'publications' ? '#1a6b8a' : 'rgba(255,255,255,0.7)',
            color: activeTab === 'publications' ? 'white' : '#1a6b8a',
            border: 'none',
            padding: '0.5rem 1.2rem',
            borderRadius: '40px',
            cursor: 'pointer',
            fontSize: '0.8rem',
            fontWeight: '500',
            fontFamily: 'inherit'
          }}
        >
          Publications
        </button>
        <button 
          onClick={() => setActiveTab('lectures')}
          style={{
            background: activeTab === 'lectures' ? '#1a6b8a' : 'rgba(255,255,255,0.7)',
            color: activeTab === 'lectures' ? 'white' : '#1a6b8a',
            border: 'none',
            padding: '0.5rem 1.2rem',
            borderRadius: '40px',
            cursor: 'pointer',
            fontSize: '0.8rem',
            fontWeight: '500',
            fontFamily: 'inherit'
          }}
        >
          Lectures
        </button>
      </div>

      {activeTab === 'publications' && (
        <div className="card">
          {publications.map((pub, idx) => (
            <div key={idx} style={{ padding: '0.8rem 0', borderBottom: idx < publications.length - 1 ? '1px solid rgba(158, 200, 214, 0.3)' : 'none' }}>
              <div style={{ fontWeight: '500', color: '#1a6b8a' }}>{pub.title}</div>
              <div style={{ fontSize: '0.75rem', color: '#5a7e90', marginTop: '0.2rem' }}>{pub.journal} · {pub.year}</div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'lectures' && (
        <div className="card">
          {lectures.map((lecture, idx) => (
            <div key={idx} style={{ padding: '0.8rem 0', borderBottom: idx < lectures.length - 1 ? '1px solid rgba(158, 200, 214, 0.3)' : 'none' }}>
              <div style={{ fontWeight: '500', color: '#1a6b8a' }}>{lecture.title}</div>
              <div style={{ fontSize: '0.75rem', color: '#5a7e90', marginTop: '0.2rem' }}>{lecture.event} · {lecture.location} · {lecture.year}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ResearchPage;