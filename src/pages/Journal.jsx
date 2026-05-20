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

export default function AloraJournal() {
  const [mood, setMood] = useState('Happy');
  const [entryTitle, setEntryTitle] = useState('Today was a beautiful day.');
  const [entryBody, setEntryBody] = useState(
    "I woke up feeling grateful for another day to grow, learn and be better than yesterday. I went for a morning walk, listened to good music and just enjoyed the moment.\n\nI'm proud of how far I've come. Excited for what's ahead."
  );

  return (
    <Box sx={{ 
      backgroundColor: COLORS.bgDark, 
      color: '#FFF', 
      fontFamily: 'sans-serif',
      minHeight: '100vh', 
      width: '100%',
      pt: 4,
      pb: 6
    }}>
      {/* Global CSS Reset Injection to destroy default browser body margins */}
      <style>
        {`
          html, body { 
            margin: 0 !important; 
            padding: 0 !important; 
            background-color: ${COLORS.bgDark};
          }
        `}
      </style>
     
      {/* ==================== MAIN SCRAPBOOK CANVAS ==================== */}
      <Box sx={{ 
        maxWidth: 1440, // Expanded container from 1100 to 1440 to make the page big
        margin: '0 auto',
        display: 'grid', 
        gridTemplateColumns: '260px 1fr 260px', // Widened columns to match big screen width
        gap: 4, 
        px: 4,
        position: 'relative'
      }}>
        
        {/* --- LEFT COLUMN: STICKY NOTES --- */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4, pt: 8 }}>
          {/* Paper Note 1 */}
          <Paper sx={{ 
            p: 3, bgcolor: '#A25942', color: '#FADBD8', transform: 'rotate(-3deg)', 
            fontFamily: COLORS.fontJournal, fontSize: '1.5rem', boxShadow: 4, borderRadius: 0
          }}>
            You are growing every day ♡
          </Paper>

          {/* Paper Note 2 */}
          <Paper sx={{ 
            p: 3, bgcolor: '#936141', color: '#F7DC6F', transform: 'rotate(2deg)', 
            fontFamily: COLORS.fontJournal, fontSize: '1.5rem', boxShadow: 4, borderRadius: 0, mt: 4
          }}>
            Be kind to your mind. 🌿
          </Paper>
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
              minHeight: 780, // Extended paper leaf vertical space
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
                rows={16} // Increased rows capacity for tracking longer text logs
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
              width: '100%', height: 160, // Scaled Polaroid image up
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
