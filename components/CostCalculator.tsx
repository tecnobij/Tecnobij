"use client";

import { useState } from "react";

export function CostCalculator() {
  const [formData, setFormData] = useState({
    platform: [] as string[],
    complexity: "",
    users: "",
    features: [] as string[]
  });
  
  const [showResult, setShowResult] = useState(false);

  const toggleArray = (arrayName: 'platform' | 'features', value: string) => {
    const arr = formData[arrayName];
    if (arr.includes(value)) {
      setFormData({ ...formData, [arrayName]: arr.filter(item => item !== value) });
    } else {
      setFormData({ ...formData, [arrayName]: [...arr, value] });
    }
  };

  const handleEstimate = () => {
    setShowResult(true);
  };

  const handleConsultation = () => {
    const message = `Hello Tecnobij!\nI used the Cost Calculator.\nPlatform: ${formData.platform.join(", ")}\nComplexity: ${formData.complexity}\nUsers: ${formData.users}\nFeatures: ${formData.features.join(", ")}`;
    const whatsappUrl = `https://wa.me/917620638650?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="calculator-container" style={{ backgroundColor: '#11151a', padding: '2rem', borderRadius: '12px', border: '1px solid #1a222c', maxWidth: '600px', margin: '0 auto', color: '#fff' }}>
      
      {!showResult ? (
        <>
          <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Estimate your project</h3>
            <p style={{ color: '#a2b1bd' }}>Select your requirements to get an estimated complexity.</p>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <h4 style={{ marginBottom: '1rem' }}>Platform</h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '0.5rem' }}>
              {['Web', 'Android', 'iOS', 'Desktop', 'PWA'].map(option => (
                <label key={option} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                  <input type="checkbox" checked={formData.platform.includes(option)} onChange={() => toggleArray('platform', option)} style={{ accentColor: 'var(--lime)' }} />
                  {option}
                </label>
              ))}
            </div>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <h4 style={{ marginBottom: '1rem' }}>Complexity</h4>
            <div style={{ display: 'flex', gap: '1rem' }}>
              {['Basic', 'Medium', 'Advanced'].map(option => (
                <label key={option} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                  <input type="radio" name="complexity" value={option} checked={formData.complexity === option} onChange={(e) => setFormData({...formData, complexity: e.target.value})} style={{ accentColor: 'var(--lime)' }} />
                  {option}
                </label>
              ))}
            </div>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <h4 style={{ marginBottom: '1rem' }}>Users</h4>
            <div style={{ display: 'flex', gap: '1rem' }}>
              {['1–100', '100–1,000', '1,000+'].map(option => (
                <label key={option} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                  <input type="radio" name="users" value={option} checked={formData.users === option} onChange={(e) => setFormData({...formData, users: e.target.value})} style={{ accentColor: 'var(--lime)' }} />
                  {option}
                </label>
              ))}
            </div>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <h4 style={{ marginBottom: '1rem' }}>Features</h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '0.5rem' }}>
              {['Login', 'Payments', 'Chat', 'Notifications', 'Maps', 'AI', 'Admin panel', 'Reports', 'API integrations'].map(option => (
                <label key={option} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                  <input type="checkbox" checked={formData.features.includes(option)} onChange={() => toggleArray('features', option)} style={{ accentColor: 'var(--lime)' }} />
                  {option}
                </label>
              ))}
            </div>
          </div>

          <button onClick={handleEstimate} disabled={!formData.complexity || !formData.users || formData.platform.length === 0} className="button button-lime" style={{ width: '100%' }}>Get My Project Estimate</button>
        </>
      ) : (
        <div style={{ textAlign: 'center', padding: '2rem 0' }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Estimated Project Complexity</h3>
          <div style={{ fontSize: '3rem', fontWeight: 'bold', color: 'var(--lime)', marginBottom: '2rem' }}>
            {formData.complexity}
          </div>
          <p style={{ color: '#a2b1bd', marginBottom: '2rem' }}>
            Since every project is unique, we prefer discussing your specific business needs to provide an accurate commercial proposal.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <button onClick={() => setShowResult(false)} className="button button-dark">Recalculate</button>
            <button onClick={handleConsultation} className="button button-lime">Discuss Project Scope</button>
          </div>
        </div>
      )}
    </div>
  );
}
