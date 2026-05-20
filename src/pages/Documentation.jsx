import React, { useState } from 'react';

export default function Documentation() {
  const [activeSection, setActiveSection] = useState('dashboard');

  const docData = {
    dashboard: {
      title: "📊 Central Dashboard Hub",
      desc: "The Dashboard is your holistic life command center. It safely pulls cross-platform summaries from your planner, tracker inputs, and cycles, putting everything you care about directly in front of you.",
      tips: [
        "Review your daily statistics automatically right when you login.",
        "See remaining high-priority task flags directly from the Planner page.",
        "Track clear water target fill scales without digging into deep menu tabs."
      ]
    },
    journal: {
   title: " Technical Blueprint: How the Journal Works",
      desc: "A step-by-step breakdown of how React states, native drag-and-drop mechanisms, and custom background CSS layers combine to build your tactile scrapbook canvas.",
      tips: [
        "1. Dynamic State Initialization: Notes are managed inside a 'stickies' React state array hook. Each note tracks its unique ID string, written content, structural rotation angle, and canvas coordinates.",
        "2. Randomization Seed Vectors: When you spawn a new sticky scrap note, the code picks a random color code from a secure palette array and assigns a random rotation angle variable from -4 to +4 degrees.",
        "3. High-Utility Drag Mechanics: Absolute pinning transforms mouse events natively using client coordinates (clientX / clientY), calculating the positional offset distance during movement without extra heavy npm layout packages.",
        "4. Seamless Event Filtering: Safe logic prevents drag triggers from running if your pointer target is inside a text input shell or clicking a removal anchor pin, ensuring stable, natural user interactions.",
        "5. Tactile Line Grid CSS: The central notebook leaf renders thin horizontal rules using a linear-gradient repeating structure set at 1px thick and spaced precisely at 28px intervals to match multi-line text boxes.",
        "6. Binder Rings Emulation Layer: A repeating array map uses basic HTML elements with deep inner-inset shadows to project realistic 3D notebook binder links directly on top of the notebook leaf fold edge."
      ]
    },
    planner: {
      title: "📅 Chronological Daily Planner",
      desc: "This module helps disorganized users stay disciplined. It pairs an hourly breakdown timeline tracking workspace alongside a highly sorted, customizable task manager priority matrix.",
      tips: [
        "Daily Core Focus: Use the top banner target input box to lock in your #1 goal parameter for the day.",
        "Creating Task Targets: Type a task, select its targeted time execution window, choose its priority level label (Low, Medium, High), and press Create.",
        "Hourly Mapping: Created tasks dynamically attach themselves onto the left timeline view, giving you a clear hour-by-hour view of your day."
      ]
    },
    health: {
      title: "🌿 Health & Biological Wellness",
      desc: "Your physical tracking engine. It allows users to track their nutrition health values, water intake goals, and follow internal hormonal rhythms or symptoms carefully.",
      tips: [
        "Water Hydration Tracker: Click the preset glass volume buttons (+8 oz or +24 oz) to fill the linear hydration completion tracking bar.",
        "Meal Sorting: Log recipes and tag them with dietary tags (Healthy, Neutral, Indulgent) to keep tabs on your weight goals (loss/gain validation).",
        "Hormone & Cycle Log: Tap symptom pills to map daily physiological changes (Acne, Bloating, Fatigue, Energy spikes) across your 28-day cycle grid."
      ]
    }
  };

  const current = docData[activeSection];

  // --- Inline Style Tokens (Zero Dependence on MUI Layout Engines) ---
  const styles = {
    container: {
      backgroundColor: '#0A1414',
      color: '#FFF',
      minHeight: '100vh',
      width: '100%',
      fontFamily: 'sans-serif',
      boxSizing: 'border-box',
      padding: '40px 24px'
    },
    wrapper: {
      maxWidth: '1200px',
      margin: '0 auto'
    },
    header: {
      borderBottom: '1px solid rgba(104,195,163,0.2)',
      paddingBottom: '24px',
      marginBottom: '32px'
    },
    title: {
      margin: 0,
      fontSize: '2rem',
      fontWeight: 'bold',
      color: '#68C3A3',
      letterSpacing: '-0.02em'
    },
    subtitle: {
      margin: '8px 0 0 0',
      color: '#8A9A5B',
      fontSize: '0.95rem'
    },
    layoutGrid: {
      display: 'flex',
      flexDirection: window.innerWidth < 768 ? 'column' : 'row',
      gap: '32px'
    },
    sidebar: {
      width: window.innerWidth < 768 ? '100%' : '260px',
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
      flexShrink: 0
    },
    contentCard: {
      backgroundColor: 'rgba(17,28,28,0.6)',
      border: '1px solid rgba(63,63,70,0.2)',
      borderRadius: '16px',
      padding: '32px',
      flexGrow: 1
    },
    tipList: {
      paddingLeft: '20px',
      margin: '16px 0 0 0'
    },
    tipItem: {
      color: '#E7E5E4',
      fontSize: '0.95rem',
      lineHeight: 1.6,
      marginBottom: '12px'
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.wrapper}>
        
        {/* HEADER */}
        <header style={styles.header}>
          <h1 style={styles.title}>Alora User Documentation</h1>
          <p style={styles.subtitle}>Learn how to utilize and interact with your personal wellness ecosystem.</p>
        </header>

        {/* MAIN BODY GRID */}
        <div style={styles.layoutGrid}>
          
          {/* NAVIGATION LINKS SELECTION MENU */}
          <aside style={styles.sidebar}>
            {[
              { id: 'dashboard', label: 'Dashboard Hub' },
              { id: 'journal', label: 'Digital Journal' },
              { id: 'planner', label: 'Daily Planner' },
              { id: 'health', label: 'Health & Wellness' },
            ].map((btn) => {
              const isSelected = activeSection === btn.id;
              return (
                <div
                  key={btn.id}
                  onClick={() => setActiveSection(btn.id)}
                  style={{
                    padding: '14px 20px',
                    backgroundColor: isSelected ? 'rgba(31,53,53,0.4)' : 'rgba(17,28,28,0.4)',
                    border: isSelected ? '1px solid #68C3A3' : '1px solid rgba(63,63,70,0.3)',
                    color: isSelected ? '#68C3A3' : '#8A9A5B',
                    borderRadius: '12px',
                    cursor: 'pointer',
                    fontWeight: 600,
                    fontSize: '0.95rem',
                    transition: 'all 0.2s ease-in-out'
                  }}
                >
                  {btn.label}
                </div>
              );
            })}
          </aside>

          {/* DYNAMIC INFORMATION ARTICLE SCREEN */}
          <article style={styles.contentCard}>
            <h2 style={{ color: '#68C3A3', margin: '0 0 12px 0', fontSize: '1.5rem' }}>{current.title}</h2>
            <p style={{ color: '#E7E5E4', lineHeight: 1.6, fontSize: '1rem', margin: '0 0 24px 0' }}>{current.desc}</p>
            
            <div style={{ height: '1px', backgroundColor: 'rgba(255,255,255,0.05)', margin: '24px 0' }} />
            
            <h3 style={{ color: '#E6C594', margin: '0 0 12px 0', fontSize: '1.1rem' }}>Core Features & Blueprint Guide:</h3>
            <ul style={styles.tipList}>
              {current.tips.map((tip, idx) => (
                <li key={idx} style={styles.tipItem}>
                  <span style={{ color: '#68C3A3', marginRight: '8px', fontWeight: 'bold' }}>•</span>
                  {tip}
                </li>
              ))}
            </ul>
          </article>

        </div>
      </div>
    </div>
  );
}
