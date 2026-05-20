import React, { useState } from 'react';
import { Box, Typography, Paper, TextField, MenuItem, Select, Button, Divider } from '@mui/material';
import { Favorite } from '@mui/icons-material';

export default function Dashboard() {
  // --- Simple Personalization States ---
  const [name, setName] = useState('Mimi');
  const [primaryFocus, setPrimaryFocus] = useState('Hormone Balance');
  const [weightGoal, setWeightGoal] = useState('Maintain Weight');
  const [dailyMantra, setDailyMantra] = useState('Be kind to your mind and nurture your body.');

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#0A1414', color: '#FFF', py: 6, px: 3 }}>
      <Box sx={{ maxWidth: 800, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 4 }}>
        
        {/* WELCOME BANNER */}
        <Box sx={{ borderBottom: '1px solid rgba(104,195,163,0.2)', pb: 3 }}>
          <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#68C3A3', letterSpacing: '-0.03em' }}>
            Personal Studio
          </Typography>
          <Typography variant="body2" sx={{ color: '#8A9A5B', mt: 0.5 }}>
            Personalize your Alora experience to fit your exact wellness and productivity targets.
          </Typography>
        </Box>

        {/* PROFILE DESIGN CARD */}
        <Paper elevation={4} sx={{ backgroundColor: 'rgba(17,28,28,0.6)', border: '1px solid rgba(63,63,70,0.3)', borderRadius: 4, p: 4, display: 'flex', flexDirection: 'column', gap: 4 }}>
          
          {/* USER NAME */}
          <Box>
            <Typography variant="subtitle2" sx={{ color: '#E6C594', fontWeight: 'bold', mb: 1, textTransform: 'uppercase', letterSpacing: 0.5 }}>Your Name</Typography>
            <TextField 
              variant="outlined" 
              fullWidth
              value={name}
              onChange={(e) => setName(e.target.value)}
              sx={{ '& .MuiOutlinedInput-root': { color: '#FFF', backgroundColor: '#0A1212', borderRadius: 3, '& fieldset': { borderColor: 'rgba(63,63,70,0.5)' }, '&:hover fieldset': { borderColor: '#68C3A3' }, '&.Mui-focused fieldset': { borderColor: '#68C3A3' } } }}
            />
          </Box>

          {/* CHOOSE APP FOCUS */}
          <Box>
            <Typography variant="subtitle2" sx={{ color: '#E6C594', fontWeight: 'bold', mb: 1, textTransform: 'uppercase', letterSpacing: 0.5 }}>What are you tracking on Alora?</Typography>
            <Select
              value={primaryFocus}
              onChange={(e) => setPrimaryFocus(e.target.value)}
              fullWidth
              sx={{ color: '#FFF', backgroundColor: '#0A1212', borderRadius: 3, '& .MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(63,63,70,0.5)' }, '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: '#68C3A3' }, '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: '#68C3A3' } }}
            >
              <MenuItem value="Hormone Balance">🌿 Fix Hormones & Cycle Wellness</MenuItem>
              <MenuItem value="Muscle Gain">🏋️ Gym Training & Muscle Hypertrophy</MenuItem>
              <MenuItem value="Organization">📅 Daily Planning & Staying Organized</MenuItem>
            </Select>
          </Box>

          {/* CHOOSE WEIGHT GOAL */}
          <Box>
            <Typography variant="subtitle2" sx={{ color: '#E6C594', fontWeight: 'bold', mb: 1, textTransform: 'uppercase', letterSpacing: 0.5 }}>Weight Strategy Target</Typography>
            <Select
              value={weightGoal}
              onChange={(e) => setWeightGoal(e.target.value)}
              fullWidth
              sx={{ color: '#FFF', backgroundColor: '#0A1212', borderRadius: 3, '& .MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(63,63,70,0.5)' }, '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: '#68C3A3' }, '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: '#68C3A3' } }}
            >
              <MenuItem value="Lose Weight">📉 Healthy Fat Loss</MenuItem>
              <MenuItem value="Gain Weight">📈 Progressive Muscle Gain</MenuItem>
              <MenuItem value="Maintain Weight">⚖️ Steady Weight Maintenance</MenuItem>
            </Select>
          </Box>

          <Divider sx={{ borderColor: 'rgba(255,255,255,0.05)' }} />

          {/* PERSONAL DAILY MANTRA */}
          <Box>
            <Typography variant="subtitle2" sx={{ color: '#E6C594', fontWeight: 'bold', mb: 1, textTransform: 'uppercase', letterSpacing: 0.5 }}>Daily Vision Statement / Mantra</Typography>
            <TextField 
              variant="outlined" 
              fullWidth
              multiline
              rows={2}
              value={dailyMantra}
              onChange={(e) => setDailyMantra(e.target.value)}
              sx={{ '& .MuiOutlinedInput-root': { color: '#FFF', backgroundColor: '#0A1212', borderRadius: 3, '& fieldset': { borderColor: 'rgba(63,63,70,0.5)' }, '&:hover fieldset': { borderColor: '#68C3A3' }, '&.Mui-focused fieldset': { borderColor: '#68C3A3' } } }}
            />
          </Box>

          {/* SAVE BUTTON */}
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
            <Button 
              variant="contained" 
              startIcon={<Favorite sx={{ fontSize: 14 }} />}
              sx={{ backgroundColor: '#2D4A43', color: '#FFF', textTransform: 'none', fontWeight: 'bold', borderRadius: 2.5, px: 4, py: 1, '&:hover': { backgroundColor: '#1F3535' } }}
            >
              Save Preferences
            </Button>
          </Box>

        </Paper>
      </Box>
    </Box>
  );
}
