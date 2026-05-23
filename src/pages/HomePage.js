import React, { useEffect, useState } from 'react';

const HomePage = () => {
  const [years, setYears] = useState(0);
  const [surgeries, setSurgeries] = useState(0);
  const [fellowships, setFellowships] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setYears(15);
      setSurgeries(38);
      setFellowships(6);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const specialties = [
    "Minimally Invasive Spine Surgery",
    "Cervical & Lumbar Disc Replacement",
    "Spinal Deformity Correction",
    "Endoscopic Discectomy",
    "Spinal Trauma & Tumor Surgery"
  ];

  const affiliations = [
    "AO Spine International Member",
    "Nepal Spine Society",
    "North American Spine Society",
    "Global Spine Congress Faculty"
  ];

  return (
    <div>
      <div className="card">
        <div className="hero">
          <div className="hero-content">
            <div className="hero-badge">Spine Specialist · Surgeon</div>
            <h1>Prakash Sitoula, MBBS, MS(Ortho)</h1>
            <h2>Orthopaedic Spine Surgeon</h2>
            <p>Dr. Sitoula is a globally trained spine surgeon with advanced international fellowships in complex spinal reconstruction, minimally invasive techniques, and deformity correction. He has performed over numerous successful spine procedures and is dedicated to evidence-based care.</p>
            <div className="stats">
              <div className="stat-item">
                <div className="stat-number">{years}+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              {/*<div className="stat-item">
                <div className="stat-number">{surgeries}00+</div>
                <div className="stat-label">Surgeries</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">{fellowships}</div>
                <div className="stat-label">Fellowships</div>
              </div>
              */}
            </div> 
          </div>
          <div className="photo-card">
            <div className="person-photo">
              <img 
                src="/drprakash.jpg"
                alt="Dr. Prakash Sitoula"
                onError={(e) => e.target.src = 'https://placehold.co/400x500?text=Dr.+Prakash+Sitoula'}
              />
            </div>
            <h3>Dr. Prakash Sitoula</h3>
            {/*<p>Australia · France · South Korea · Denmark · Japan · Singapore</p>*/}
          </div>
        </div>
      </div>

      <div className="two-col">
        <div className="card col">
          <h3 className="section-title">Clinical Specialties</h3>
          <ul className="list">
            {specialties.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="card col">
          <h3 className="section-title">Professional Affiliations</h3>
          <ul className="list">
            {affiliations.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomePage;