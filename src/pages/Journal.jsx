import React, { useState } from 'react';
import { 
  Box, Typography, Button, Paper, Select, MenuItem, TextField 
} from '@mui/material';
import { PushPinOutlined, Favorite } from '@mui/icons-material';

// --- Custom Theme Configuration & Styling Constants ---
const COLORS = {
  bgDark: '#0A1414',
  navActive: '#1F3535',
  textGold: '#E6C594',
  paperBg: '#F3E5D8',
  paperLines: '#E2CBB5',
  cardboard: '#D1AF94',
  tapeColor: '#C49B74',
  fontJournal: '"Caveat", "Comic Sans MS", cursive'
};

const STICKY_COLORS = ['#A25942', '#936141', '#4A6B5D', '#63537D', '#9E8143'];

export default function AloraJournal() {
  const [mood, setMood] = useState('Happy');
  const [entryTitle, setEntryTitle] = useState('Today was a beautiful day.');
  const [entryBody, setEntryBody] = useState(
    "I woke up feeling grateful for another day to grow, learn and be better than yesterday. I went for a morning walk, listened to good music and just enjoyed the moment.\n\nI'm proud of how far I've come. Excited for what's ahead."
  );

  // --- Dynamic Movable Sticky Notes State Array ---
  const [stickies, setStickies] = useState([
    { id: '1', text: 'You are growing every day ♡', color: '#A25942', rotate: -3, x: 20, y: 120 },
    { id: '2', text: 'Be kind to your mind. 🌿', color: '#936141', rotate: 2, x: 20, y: 340 }
  ]);

  // Track the note currently being dragged
  const [activeDragId, setActiveDragId] = useState(null);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

  // --- Drag and Drop Logic Handlers ---
  const handleMouseDown = (e, sticky) => {
    // Prevent dragging when typing inside the textarea or clicking the delete button
    if (e.target.tagName === 'TEXTAREA' || e.target.tagName === 'BUTTON') return;
    
    setActiveDragId(sticky.id);
    setDragOffset({
      x: e.clientX - sticky.x,
      y: e.clientY - sticky.y
    });
  };

  const handleMouseMove = (e) => {
    if (!activeDragId) return;

    setStickies(stickies.map(s => {
      if (s.id === activeDragId) {
        return {
          ...s,
          x: e.clientX - dragOffset.x,
          y: e.clientY - dragOffset.y
        };
      }
      return s;
    }));
  };

  const handleMouseUp = () => {
    setActiveDragId(null);
  };

  // --- General Note Actions ---
  const handleAddSticky = () => {
    const randomColor = STICKY_COLORS[Math.floor(Math.random() * STICKY_COLORS.length)];
    const randomRotate = Math.floor(Math.random() * 8) - 4;
    
    const newSticky = {
      id: Date.now().toString(),
      text: 'Drag me around! ✏️',
      color: randomColor,
      rotate: randomRotate === 0 ? 3 : randomRotate,
      x: 40, // Spawn positions near left column area
      y: 180
    };
    setStickies([...stickies, newSticky]);
  };

  const handleUpdateText = (id, newText) => {
    setStickies(stickies.map(s => s.id === id ? { ...s, text: newText } : s));
  };

  const handleRemoveSticky = (id) => {
    setStickies(stickies.filter(s => s.id !== id));
  };

  return (
    <Box 
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      sx={{ 
        backgroundColor: COLORS.bgDark, 
        color: '#FFF', 
        fontFamily: 'sans-serif',
        minHeight: '100vh', 
        width: '100%',
        pt: 4,
        pb: 6,
        userSelect: activeDragId ? 'none' : 'auto' // Prevents text selection while dragging
      }}
    >
      {/* Global CSS Reset Injection to destroy default browser body margins */}
      <style>
        {`
          html, body { 
            margin: 0 !important; 
            padding: 0 !important; 
            background-color: ${COLORS.bgDark};
            overflow-x: hidden;
          }
        `}
      </style>
     
      {/* ==================== MAIN SCRAPBOOK CANVAS ==================== */}
      <Box sx={{ 
        maxWidth: 1440, 
        margin: '0 auto',
        display: 'grid', 
        gridTemplateColumns: '260px 1fr 260px', 
        gap: 4, 
        px: 4,
        position: 'relative'
      }}>
        
        {/* --- LEFT COLUMN: STICKIES DISPENSER AND CONTAINER HUB --- */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4, pt: 2, position: 'relative', minHeight: 700 }}>
          {/* Add Note Button Controller */}
          <Button
            variant="outlined"
            onClick={handleAddSticky}
            sx={{
              color: '#68C3A3',
              borderColor: 'rgba(104,195,163,0.4)',
              textTransform: 'none',
              borderRadius: 2,
              fontFamily: COLORS.fontJournal,
              fontSize: '1.25rem',
              zIndex: 100,
              '&:hover': { borderColor: '#68C3A3', backgroundColor: 'rgba(104,195,163,0.05)' }
            }}
          >
            + Add Sticky Note
          </Button>

          {/* Rendered Movable Sticky List Elements */}
          {stickies.map((sticky) => (
            <Paper 
              key={sticky.id}
              elevation={activeDragId === sticky.id ? 10 : 4} 
              onMouseDown={(e) => handleMouseDown(e, sticky)}
              sx={{ 
                p: 2.5, 
                pt: 1.5,
                bgcolor: sticky.color, 
                color: '#FADBD8', 
                transform: `rotate(${sticky.rotate}deg)`, 
                fontFamily: COLORS.fontJournal, 
                fontSize: '1.5rem', 
                borderRadius: 0,
                position: 'absolute', // Absolute positioning enables dragging across the screen grid
                left: `${sticky.x}px`,
                top: `${sticky.y}px`,
                cursor: activeDragId === sticky.id ? 'grabbing' : 'grab',
                width: '210px',
                zIndex: activeDragId === sticky.id ? 1000 : 50,
                transition: activeDragId === sticky.id ? 'none' : 'transform 0.2s ease'
              }}
            >
              {/* Native Delete X Trigger Pin */}
              <button
                onClick={() => handleRemoveSticky(sticky.id)}
                style={{
                  position: 'absolute',
                  top: '2px',
                  right: '6px',
                  background: 'none',
                  border: 'none',
                  color: 'rgba(255,255,255,0.5)',
                  cursor: 'pointer',
                  fontSize: '1.1rem',
                  padding: 0,
                  zIndex: 60
                }}
              >
                ✕
              </button>

              {/* Inline Writing Input Shell */}
              <textarea
                value={sticky.text}
                onChange={(e) => handleUpdateText(sticky.id, e.target.value)}
                style={{
                  width: '100%',
                  background: 'none',
                  border: 'none',
                  resize: 'none',
                  outline: 'none',
                  color: '#FFF',
                  fontFamily: COLORS.fontJournal,
                  fontSize: '1.45rem',
                  lineHeight: 1.2,
                  marginTop: '8px',
                  height: '80px'
                }}
              />
            </Paper>
          ))}
        </Box>

        {/* --- CENTER COLUMN: MAIN NOTEBOOK --- */}
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          
          {/* Top Tape Quote */}
          <Box sx={{ 
            backgroundColor: 'rgba(218,165,32,0.15)', borderLeft: '3px solid #DAA520',
            p: 2, width: '80%', textAlign: 'center', mb: 4, transform: 'rotate(-1deg)'
          }}>
            <Typography sx={{ fontFamily: COLORS.fontJournal, fontSize: '1.5rem', color: COLORS.textGold }}>
              "Write it down. Make it real. Release it." ♡
            </Typography>
          </Box>

          {/* Real Notebook Wrapper */}
          <Box sx={{ position: 'relative', width: '100%' }}>
            
            {/* Left Binder Rings Emulation */}
            <Box sx={{ 
              position: 'absolute', left: 14, top: 40, bottom: 40, width: 25, 
              zIndex: 10, display: 'flex', flexDirection: 'column', justifyContent: 'space-between'
            }}>
              {[...Array(19)].map((_, i) => (
                <Box key={i} sx={{ 
                  width: 26, height: 8, backgroundColor: '#3A3A3A', 
                  borderRadius: 4, boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.5)' 
                }} />
              ))}
            </Box>

            {/* Main Notebook Paper Leaf */}
            <Paper elevation={12} sx={{ 
              backgroundColor: COLORS.paperBg, 
              borderRadius: '4px 16px 16px 4px', 
              pl: 8, pr: 6, py: 5,
              minHeight: 780, 
              position: 'relative',
              backgroundImage: `linear-gradient(${COLORS.paperLines} 1px, transparent 1px)`,
              backgroundSize: '100% 28px',
              backgroundPosition: '0 140px',
            }}>
              
              {/* Date Header */}
              <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 3 }}>
                <Typography sx={{ fontFamily: COLORS.fontJournal, fontSize: '1.4rem', color: '#5D4037' }}>
                  Date: <span style={{ textDecoration: 'underline' }}>May 29, 2024</span>
                </Typography>
              </Box>

              {/* Mood Dropdown Selector */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 4 }}>
                <Typography sx={{ color: '#795548', fontSize: '0.95rem', fontWeight: 'bold' }}>Mood:</Typography>
                <Select
                  value={mood}
                  onChange={(e) => setMood(e.target.value)}
                  variant="standard"
                  disableUnderline
                  sx={{ 
                    fontFamily: COLORS.fontJournal, fontSize: '1.4rem', color: '#5D4037',
                    backgroundColor: 'rgba(0,0,0,0.04)', px: 1.5, py: 0.5, borderRadius: 1
                  }}
                >
                  <MenuItem value="Happy">😊 Happy</MenuItem>
                  <MenuItem value="Calm">😌 Calm</MenuItem>
                  <MenuItem value="Productive">⚡ Productive</MenuItem>
                </Select>
              </Box>

              {/* Journal Title Textfield */}
              <TextField
                variant="standard"
                fullWidth
                value={entryTitle}
                onChange={(e) => setEntryTitle(e.target.value)}
                InputProps={{ 
                  disableUnderline: true,
                  sx: { 
                    fontFamily: COLORS.fontJournal, fontSize: '2.4rem', color: '#2E1C0C',
                    lineHeight: 1.2, mb: 2
                  }
                }}
              />

              {/* Journal Body Content Area */}
              <TextField
                variant="standard"
                fullWidth
                multiline
                rows={16} 
                value={entryBody}
                onChange={(e) => setEntryBody(e.target.value)}
                InputProps={{ 
                  disableUnderline: true,
                  sx: { 
                    fontFamily: COLORS.fontJournal, fontSize: '1.7rem', color: '#4E3629',
                    lineHeight: '28px', pt: '6px'
                  }
                }}
              />

              {/* Signoff Footnote */}
              <Typography sx={{ fontFamily: COLORS.fontJournal, fontSize: '1.7rem', color: '#4E3629', mt: 3 }}>
                Thank you future me ♡
              </Typography>

              {/* CTA Save Entry Button */}
              <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 4 }}>
                <Button 
                  variant="contained" 
                  startIcon={<Favorite sx={{ fontSize: 14 }} />}
                  sx={{ 
                    backgroundColor: '#2D4A43', 
                    color: '#FFF',
                    textTransform: 'none',
                    borderRadius: 2,
                    fontSize: '0.95rem',
                    fontWeight: 'bold',
                    px: 4,
                    py: 1,
                    '&:hover': { backgroundColor: '#1F3535' }
                  }}
                >
                  Save Entry
                </Button>
              </Box>
            </Paper>
          </Box>
        </Box>

        {/* --- RIGHT COLUMN: PHOTO & REMINDERS --- */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4, pt: 2 }}>
          {/* Polaroid Picture Element */}
          <Paper elevation={5} sx={{ 
            p: 2, pb: 4, bgcolor: '#FFF', color: '#000', transform: 'rotate(4deg)', borderRadius: 0 
          }}>
            <Box sx={{ 
              width: '100%', height: 160, 
              background: 'linear-gradient(to bottom, #EAEAEA, #B3C6CD)',
              borderRadius: '2px', mb: 1.5 
            }} />
            <Typography align="center" sx={{ fontFamily: COLORS.fontJournal, fontSize: '1.2rem', lineHeight: 1.1 }}>
              good days start with gratitude ♡
            </Typography>
          </Paper>

          {/* Pin Reminder */}
          <Paper elevation={5} sx={{ 
            p: 3, bgcolor: '#F7DC6F', color: '#000', transform: 'rotate(-2deg)', borderRadius: 0, position: 'relative', mt: 2
          }}>
            <PushPinOutlined sx={{ position: 'absolute', top: -10, left: '50%', transform: 'translateX(-50%)', color: '#A25942' }} />
            <Typography sx={{ fontFamily: COLORS.fontJournal, fontSize: '1.4rem', mt: 1, lineHeight: 1.3 }}>
              Don't forget to track your hydration goals and workout markers today!
            </Typography>
          </Paper>
        </Box>

      </Box>
    </Box>
  );
}
