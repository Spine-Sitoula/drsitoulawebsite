import React, { useState } from 'react';

const ContactPage = () => {
  const [copied, setCopied] = useState(null);

  const copyToClipboard = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopied(field);
    setTimeout(() => setCopied(null), 2000);
  };

  const contactItems = [
    { icon: "Location", label: "Address", value: "Sitoula Spine Institute, Bansbari, Kathmandu, Nepal" },
    { icon: "Phone", label: "Phone", value: "+977 1-5912345", secondary: "+977 9851234567" },
    { icon: "Email", label: "Email", value: "dr.prakash@spinecare.com.np" },
    { icon: "Hours", label: "Hours", value: "Mon-Fri: 9AM – 5PM", secondary: "Sat: 10AM – 2PM" }
  ];

  return (
    <div>
      <div className="card">
        <h2 style={{ color: '#1a6b8a', marginBottom: '0.5rem', fontSize: '1.6rem', fontWeight: '600' }}>Contact Information</h2>
        <p>For appointments, second opinions, or research collaboration inquiries.</p>
        <div style={{ height: '3px', width: '50px', background: '#9ec8d6', marginTop: '1rem' }}></div>
      </div>

      <div className="contact-info">
        {contactItems.map((item, idx) => (
          <div 
            key={idx} 
            className="contact-item" 
            onClick={() => copyToClipboard(item.value, item.label)}
            style={{ cursor: 'pointer' }}
          >
            <div className="contact-icon">{item.icon}</div>
            <div style={{ flex: 1 }}>
              <strong>{item.label}:</strong> {item.value}
              {item.secondary && <span style={{ color: '#5a7e90', marginLeft: '0.5rem' }}>| {item.secondary}</span>}
            </div>
            {copied === item.label && (
              <span style={{ fontSize: '0.7rem', color: '#1a6b8a' }}>Copied</span>
            )}
          </div>
        ))}
      </div>

      <div className="card">
        <h3 className="section-title">Referral & Collaboration</h3>
        <p style={{ fontSize: '0.88rem', color: '#2c4a5a' }}>International medical colleagues can refer patients or collaborate on research via the email above. Telehealth consultations available for follow-up patients.</p>
      </div>
    </div>
  );
};

export default ContactPage;