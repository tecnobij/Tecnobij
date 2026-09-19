"use client";

import { useState } from "react";

export function OutcomeForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    type: "",
    idea: "",
    budget: "",
    timeline: ""
  });

  const handleNext = () => setStep(step + 1);
  const handlePrev = () => setStep(step - 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hello Tecnobij!\nI have an idea for a ${formData.type}.\nDetails: ${formData.idea}\nBudget: ${formData.budget}\nTimeline: ${formData.timeline}`;
    const whatsappUrl = `https://wa.me/917620638650?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="outcome-form-container" style={{ backgroundColor: '#11151a', padding: '2rem', borderRadius: '12px', border: '1px solid #1a222c', maxWidth: '600px', margin: '0 auto', color: '#fff' }}>
      <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
        <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Tell us what you're trying to achieve</h3>
        <p style={{ color: '#a2b1bd' }}>Step {step} of 4</p>
      </div>

      <form onSubmit={handleSubmit}>
        {step === 1 && (
          <div className="form-step">
            <h4 style={{ marginBottom: '1rem' }}>What do you need?</h4>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              {['Website', 'Mobile App', 'Web App', 'PWA', 'Desktop App', 'Business Software', 'ERP / CRM', 'AI Solution', 'Automation', 'Not sure yet'].map(option => (
                <label key={option} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '1rem', border: '1px solid #333', borderRadius: '8px', cursor: 'pointer', backgroundColor: formData.type === option ? '#1a222c' : 'transparent' }}>
                  <input type="radio" name="type" value={option} checked={formData.type === option} onChange={(e) => setFormData({...formData, type: e.target.value})} style={{ accentColor: 'var(--lime)' }} />
                  {option}
                </label>
              ))}
            </div>
            <button type="button" onClick={handleNext} disabled={!formData.type} className="button button-lime" style={{ marginTop: '2rem', width: '100%' }}>Next</button>
          </div>
        )}

        {step === 2 && (
          <div className="form-step">
            <h4 style={{ marginBottom: '1rem' }}>Tell us about your requirement</h4>
            <textarea 
              placeholder="Describe your idea or the problem you are trying to solve..." 
              value={formData.idea}
              onChange={(e) => setFormData({...formData, idea: e.target.value})}
              style={{ width: '100%', minHeight: '150px', padding: '1rem', backgroundColor: '#0b0f13', color: '#fff', border: '1px solid #333', borderRadius: '8px', outline: 'none' }}
              required
            />
            <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
              <button type="button" onClick={handlePrev} className="button button-dark" style={{ flex: 1 }}>Back</button>
              <button type="button" onClick={handleNext} disabled={!formData.idea} className="button button-lime" style={{ flex: 1 }}>Next</button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="form-step">
            <h4 style={{ marginBottom: '1rem' }}>Estimated Budget</h4>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              {['₹25K–₹50K', '₹50K–₹1L', '₹1L–₹3L', '₹3L–₹10L', '₹10L+', 'Not decided'].map(option => (
                <label key={option} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '1rem', border: '1px solid #333', borderRadius: '8px', cursor: 'pointer', backgroundColor: formData.budget === option ? '#1a222c' : 'transparent' }}>
                  <input type="radio" name="budget" value={option} checked={formData.budget === option} onChange={(e) => setFormData({...formData, budget: e.target.value})} style={{ accentColor: 'var(--lime)' }} />
                  {option}
                </label>
              ))}
            </div>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
              <button type="button" onClick={handlePrev} className="button button-dark" style={{ flex: 1 }}>Back</button>
              <button type="button" onClick={handleNext} disabled={!formData.budget} className="button button-lime" style={{ flex: 1 }}>Next</button>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="form-step">
            <h4 style={{ marginBottom: '1rem' }}>When do you want to start?</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {['Immediately', 'Within 1 month', '1–3 months', 'Exploring'].map(option => (
                <label key={option} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '1rem', border: '1px solid #333', borderRadius: '8px', cursor: 'pointer', backgroundColor: formData.timeline === option ? '#1a222c' : 'transparent' }}>
                  <input type="radio" name="timeline" value={option} checked={formData.timeline === option} onChange={(e) => setFormData({...formData, timeline: e.target.value})} style={{ accentColor: 'var(--lime)' }} />
                  {option}
                </label>
              ))}
            </div>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
              <button type="button" onClick={handlePrev} className="button button-dark" style={{ flex: 1 }}>Back</button>
              <button type="submit" disabled={!formData.timeline} className="button button-lime" style={{ flex: 1 }}>Get a Free Initial Consultation</button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}
