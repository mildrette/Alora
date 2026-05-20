import React, { useState } from 'react';
import { 
  Box, Typography, TextField, Button, Paper, Checkbox, 
  IconButton, Select, MenuItem, FormControl, InputLabel, Chip, Grid
} from '@mui/material';

// These are the hours of the day for our timeline chart
const TIME_SLOTS = [
  '07:00 AM', '08:00 AM', '09:00 AM', '10:00 AM', '11:00 AM', 
  '12:00 PM', '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', 
  '05:00 PM', '06:00 PM', '07:00 PM', '08:00 PM'
];

// Playful text and font settings
const STYLES = {
  bgDark: '#0A1414',
  textGold: '#E6C594',
  fontJournal: '"Caveat", "Comic Sans MS", cursive'
};

// These are the different colored stickers for our tasks
const STICKER_TYPES = [
  { name: '🌿 Wellness', color: '#4A6B5D', bg: 'rgba(74,107,93,0.15)' },
  { name: '🏋️ Gym PR', color: '#936141', bg: 'rgba(147,97,65,0.15)' },
  { name: '🍱 Nutrition', color: '#A25942', bg: 'rgba(162,89,66,0.15)' },
  { name: '⚡ Focus Target', color: '#9E8143', bg: 'rgba(158,129,67,0.15)' }
];

export default function PlannerPage() {
  // This holds our list of daily tasks
  const [tasks, setTasks] = useState([
    { id: '1', text: 'Morning walk and deep breathing 🌞', completed: true, label: '🌿 Wellness', timeSlot: '07:00 AM' },
    { id: '2', text: 'Gym workout and heavy lifting 🍑', completed: false, label: '🏋️ Gym PR', timeSlot: '10:00 AM' },
    { id: '3', text: 'Eat a healthy dinner bowl 🥑', completed: false, label: '🍱 Nutrition', timeSlot: '06:00 PM' },
  ]);
  
  // These hold the inputs for creating a new task
  const [newTaskText, setNewTaskText] = useState('');
  const [activeLabel, setActiveLabel] = useState('🌿 Wellness');
  const [targetTime, setTargetTime] = useState('09:00 AM');
  
  // These hold the customization settings for the look of the page
  const [paperTheme, setPaperTheme] = useState('#FDFBF7'); 
  const [filterLabel, setFilterLabel] = useState('All'); 
  const [dailyMantra, setDailyMantra] = useState('Do your best today! Future you will be so proud! ✨');

  // This adds a brand new task to our paper sheet list
  const handleCreateTask = (e) => {
    e.preventDefault();
    if (!newTaskText.trim()) return;

    const newTask = {
      id: Date.now().toString(),
      text: newTaskText,
      completed: false,
      label: activeLabel,
      timeSlot: targetTime
    };

    setTasks([...tasks, newTask]);
    setNewTaskText('');
  };

  // This checks or unchecks a task when you click it
  const handleToggleCheck = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  // This deletes a task completely from the list
  const handleRemoveTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  // This decides which tasks to show based on the active button filter
  const filteredTasks = tasks.filter(t => filterLabel === 'All' || t.label === filterLabel);

  return (
    <Box sx={{ 
      backgroundColor: STYLES.bgDark, 
      color: '#FFF', 
      minHeight: '100vh', 
      width: '100%',
      pt: { xs: 2, md: 5 },
      pb: 8,
      position: 'relative',
      overflowX: 'hidden'
    }}>
      <style>
        {`html, body { margin: 0 !important; padding: 0 !important; background-color: ${STYLES.bgDark}; }`}
      </style>

      <Box sx={{ maxWidth: 1440, margin: '0 auto', px: { xs: 2, md: 5 } }}>
        
        {/* ==================== TOP TITLE BAR ==================== */}
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: { xs: 'stretch', md: 'center' }, borderBottom: '1px solid rgba(104,195,163,0.15)', pb: 3, mb: 5, gap: 3 }}>
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h3" sx={{ fontFamily: STYLES.fontJournal, fontWeight: 900, color: '#68C3A3' }}>
              My Day Planner 📅
            </Typography>
            <Typography variant="body2" sx={{ color: '#8A9A5B', fontSize: '0.95rem' }}>
              Organize your hours, build good habits, and make your page look pretty!
            </Typography>
          </Box>

               {/* Washi-Tape Wrapped Mantra Box (With Bright Easy-To-Read Text) */}
          <Box sx={{ position: 'relative', pt: 2, width: '100%', maxWidth: { xs: '100%', md: '450px' } }}>
            {/* Fake top tape strip */}
            <Box sx={{ position: 'absolute', top: 0, left: '35%', width: '120px', height: '22px', backgroundColor: 'rgba(196,155,116,0.35)', transform: 'rotate(-1.5deg)', borderLeft: '2px dashed rgba(255,255,255,0.15)', borderRight: '2px dashed rgba(255,255,255,0.15)', boxShadow: 1, zIndex: 5 }} />
            <Paper elevation={3} sx={{ backgroundColor: 'rgba(230,197,148,0.12)', borderLeft: '4px solid #68C3A3', p: 2, borderRadius: '0 12px 12px 0', width: '100%', boxSizing: 'border-box' }}>
              <TextField 
                variant="standard" 
                fullWidth
                multiline
                rows={2} 
                value={dailyMantra}
                onChange={(e) => setDailyMantra(e.target.value)}
                InputProps={{ 
                  disableUnderline: true, 
                  sx: { 
                    fontFamily: STYLES.fontJournal, 
                    fontSize: '1.45rem', 
                    color: '#FFF',
                    p: 0, 
                    lineHeight: 1.3 
                  } 
                }}
              />
            </Paper>
          </Box>


        </Box>

        {/* ==================== WORKSPACE GRID MAP ==================== */}
        <Grid container spacing={4} alignItems="start">
          
          {/* LEFT SIDE: THE LINED PAPER NOTEBOOK */}
          <Grid item xs={12} lg={5}>
            <Box sx={{ position: 'relative', width: '100%' }}>
              
              {/* Fake metal notebook rings along the left edge */}
              <Box sx={{ position: 'absolute', left: 14, top: 40, bottom: 40, width: 20, zIndex: 10, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                {[...Array(16)].map((_, i) => (
                  <Box key={i} sx={{ width: 24, height: 7, backgroundColor: '#2B2B2B', borderRadius: 4, boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.8), 0 1px 1px rgba(255,255,255,0.1)' }} />
                ))}
              </Box>

              {/* Lined paper sheets that match our text heights */}
              <Paper elevation={12} sx={{ 
                backgroundColor: paperTheme, 
                borderRadius: '4px 16px 16px 4px', 
                pl: { xs: 6, sm: 8 }, pr: { xs: 3, sm: 5 }, py: 4,
                minHeight: 780,
                position: 'relative',
                backgroundImage: `linear-gradient(#E2CBB5 1px, transparent 1px)`,
                backgroundSize: '100% 28px',
                backgroundPosition: '0 106px', 
                transition: 'background-color 0.2s ease'
              }}>
                
                {/* Paper sheet title heading */}
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3, borderBottom: '2px dashed #EF4444', pb: 1.5, height: '40px' }}>
                  <Typography sx={{ fontFamily: STYLES.fontJournal, fontSize: '1.65rem', color: '#4E3629', fontWeight: 800 }}>
                    My Time Schedule ⏰
                  </Typography>
                  <Box sx={{ textAlign: 'right', display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Typography sx={{ fontFamily: STYLES.fontJournal, fontSize: '1.25rem', color: '#795548', fontWeight: 700 }}>Today</Typography>
                    {filterLabel !== 'All' && <Chip label={filterLabel} size="small" sx={{ height: 16, fontSize: '0.6rem', backgroundColor: 'rgba(0,0,0,0.05)', color: '#795548', fontWeight: 'bold' }} />}
                  </Box>
                </Box>

                {/* This sets up our matching timeline text items */}
                <Box sx={{ pt: '4px' }}>
                  {TIME_SLOTS.map((slot) => {
                    const slottedTasks = filteredTasks.filter(t => t.timeSlot === slot);
                    return (
                      <Box key={slot} sx={{ display: 'flex', minHeight: '28px', height: 'auto', alignItems: 'flex-start', mb: '28px' }}>
                        <Typography sx={{ width: 55, textAlign: 'right', fontSize: '0.75rem', fontWeight: 800, color: '#8C7A6B', pt: '5px', letterSpacing: 0.5, userSelect: 'none' }}>
                          {slot}
                        </Typography>
                        
                        <Box sx={{ flexGrow: 1, pl: 4, display: 'flex', flexDirection: 'column', gap: 0 }}>
                          {slottedTasks.map(task => {
                            const currentBadge = STICKER_TYPES.find(b => b.name === task.label) || STICKER_TYPES;
                            return (
                              <Box 
                                key={task.id}
                                sx={{ 
                                  fontFamily: STYLES.fontJournal, 
                                  fontSize: '1.45rem', 
                                  color: task.completed ? 'rgba(145,129,113,0.5)' : '#231F1A',
                                  textDecoration: task.completed ? 'line-through' : 'none',
                                  display: 'flex', 
                                  alignItems: 'center', 
                                  gap: 1.2,
                                  lineHeight: '28px', 
                                  minHeight: '28px'
                                }}
                              >
                                <span style={{ 
                                  backgroundColor: currentBadge.color, color: '#FFF', 
                                  fontSize: '0.6rem', padding: '1px 5px', borderRadius: '4px',
                                  fontFamily: 'sans-serif', fontWeight: 900, textTransform: 'uppercase', letterSpacing: 0.5,
                                  display: 'inline-block',
                                  lineHeight: '14px' 
                                }}>
                                  {task.label.split(' ')[1]}
                                </span>
                                <span style={{ display: 'inline-block', paddingTop: '1px' }}>
                                  {task.text}
                                </span>
                              </Box>
                            );
                          })}
                        </Box>
                      </Box>
                    );
                  })}
                </Box>
              </Paper>
            </Box>
          </Grid>

          {/* RIGHT SIDE: CONTROL BUTTONS AND WORK BENCH */}
          <Grid item xs={12} lg={7} sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            
            {/* BOX 1: FILTER CHIPS (Isolate stickers by category) */}
            <Paper elevation={4} sx={{ p: 3, backgroundColor: 'rgba(17,28,28,0.6)', border: '1px solid rgba(63,63,70,0.3)', borderRadius: 4 }}>
              <Typography variant="subtitle2" sx={{ color: '#8A9A5B', fontWeight: 800, mb: 2, textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: 1 }}>
                🎯 Filter Timeline (Show only specific items)
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
                {['All', ...STICKER_TYPES.map(s => s.name)].map((label) => (
                  <Chip 
                    key={label}
                    label={label}
                    onClick={() => setFilterLabel(label)}
                    sx={{ 
                      backgroundColor: filterLabel === label ? '#1F3535' : '#0A1212',
                      color: filterLabel === label ? '#68C3A3' : '#78716C',
                      border: '1px solid',
                      borderColor: filterLabel === label ? '#68C3A3' : 'rgba(63,63,70,0.4)',
                      fontWeight: 'bold',
                      fontSize: '0.8rem',
                      px: 1,
                      '&:hover': { backgroundColor: 'rgba(31,53,53,0.5)' }
                    }}
                  />
                ))}
              </Box>
            </Paper>

            {/* BOX 2: NEW ITEM TYPE ENTRY FORM */}
            <Paper elevation={4} sx={{ p: 4, backgroundColor: 'rgba(17,28,28,0.6)', border: '1px solid rgba(63,63,70,0.3)', borderRadius: 4, position: 'relative' }}>
              <Box sx={{ position: 'absolute', top: -10, left: '30px', width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#EF4444', boxShadow: '0 2px 4px rgba(0,0,0,0.4)' }} />
              
              <Typography variant="subtitle2" sx={{ color: '#E6C594', fontWeight: 800, mb: 2.5, textTransform: 'uppercase', letterSpacing: 0.5, fontSize: '0.8rem' }}>
                ✍️ Write a New Task
              </Typography>

              <Box component="form" onSubmit={handleCreateTask} sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                <TextField 
                  fullWidth 
                  placeholder="What are you doing today?" 
                  value={newTaskText}
                  onChange={(e) => setNewTaskText(e.target.value)}
                  variant="outlined"
                  sx={{ '& .MuiOutlinedInput-root': { color: '#FFF', fontSize: '0.9rem', backgroundColor: '#0A1212', borderRadius: 3, '& fieldset': { borderColor: 'rgba(63,63,70,0.5)' }, '&:hover fieldset': { borderColor: '#68C3A3' }, '&.Mui-focused fieldset': { borderColor: '#68C3A3' } } }}
                />

                <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: 3 }}>
                  <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', alignItems: 'center' }}>
                    
                    {/* Time select option dropdown */}
                    <FormControl size="small" sx={{ minWidth: 120, '& .MuiOutlinedInput-root': { color: '#FFF', fontSize: '0.75rem', backgroundColor: '#0A1212', borderRadius: 2 } }}>
                      <Select value={targetTime} onChange={(e) => setTargetTime(e.target.value)}>
                        {TIME_SLOTS.map(t => <MenuItem key={t} value={t}>{t}</MenuItem>)}
                      </Select>
                    </FormControl>

                    {/* Choose active sticker color tag */}
                    <Box sx={{ display: 'flex', gap: 0.5, backgroundColor: '#0A1212', p: 0.5, borderRadius: 2.5, border: '1px solid rgba(63,63,70,0.2)' }}>
                      {STICKER_TYPES.map((stk) => (
                        <Box
                          key={stk.name}
                          onClick={() => setActiveLabel(stk.name)}
                          style={{
                            fontSize: '0.7rem', fontWeight: 'bold', padding: '6px 14px', borderRadius: '8px', cursor: 'pointer',
                            backgroundColor: activeLabel === stk.name ? stk.color : 'transparent',
                            color: activeLabel === stk.name ? '#FFF' : '#646470',
                            transition: 'all 0.15s ease'
                          }}
                        >
                          {stk.name.split(' ')[1]}
                        </Box>
                      ))}
                    </Box>
                  </Box>

                  <Button type="submit" variant="contained" sx={{ backgroundColor: '#68C3A3', color: '#0A1414', fontWeight: 900, textTransform: 'none', borderRadius: 3, px: 3, '&:hover': { backgroundColor: '#4EAE8D' } }}>
                    + Add to Sheet
                  </Button>
                </Box>
              </Box>
            </Paper>

            {/* BOX 3: TASK ACTION CHECKLIST */}
            <Paper elevation={4} sx={{ p: 4, backgroundColor: 'rgba(17,28,28,0.6)', border: '1px solid rgba(63,63,70,0.3)', borderRadius: 4 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                <Typography variant="subtitle2" sx={{ fontWeight: 800, color: '#A8A29E', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: 0.5 }}>
                  Manage My Checkpoints
                </Typography>
                <Chip label={`${tasks.filter(t => t.completed).length}/${tasks.length} Completed`} size="small" sx={{ backgroundColor: 'rgba(104,195,163,0.12)', color: '#68C3A3', fontWeight: 800, fontSize: '0.7rem' }} />
              </Box>

              {/* Individual listed row container loops */}
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {tasks.map((task) => {
                  const labelType = STICKER_TYPES.find(b => b.name === task.label) || STICKER_TYPES;
                  return (
                    <Box 
                      key={task.id}
                      style={{
                        padding: '14px 20px',
                        backgroundColor: task.completed ? 'rgba(11,18,18,0.3)' : 'rgba(21,36,36,0.4)',
                        borderLeft: `5px solid ${labelType.color}`,
                        borderRadius: '0 12px 12px 0',
                        borderTop: '1px solid rgba(63,63,70,0.2)',
                        borderRight: '1px solid rgba(63,63,70,0.2)',
                        borderBottom: '1px solid rgba(63,63,70,0.2)',
                        display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 2,
                        transition: 'all 0.2s ease'
                      }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flexGrow: 1 }}>
                        <Checkbox 
                          checked={task.completed}
                          onChange={() => handleToggleCheck(task.id)}
                          sx={{ color: '#52525B', '&.Mui-checked': { color: '#68C3A3' } }}
                        />
                        <Box>
                          <Typography sx={{ fontSize: '0.95rem', fontWeight: 600, color: task.completed ? '#52525B' : '#E7E5E4', textDecoration: task.completed ? 'line-through' : 'none', lineHeight: 1.3 }}>
                            {task.text}
                          </Typography>
                          <Typography sx={{ fontSize: '0.68rem', color: '#78716C', fontWeight: 800, mt: 0.4, textTransform: 'uppercase', letterSpacing: 0.5 }}>
                            ⏰ {task.timeSlot} • <span style={{ color: labelType.color }}>{task.label}</span>
                          </Typography>
                        </Box>
                      </Box>

                      {/* Click this standard text cross button to remove a task */}
                      <button
                        onClick={() => handleRemoveTask(task.id)}
                        style={{ background: 'none', border: 'none', color: '#52525B', cursor: 'pointer', fontSize: '1.05rem', transition: 'color 0.2s' }}
                      >
                        ✕
                      </button>
                    </Box>
                  );
                })}
              </Box>
            </Paper>

            {/* BOX 4: CONSOLE THEME BACKGROUND PAPER SHADE COLOR PICKER */}
            <Paper elevation={4} sx={{ p: 3, backgroundColor: 'rgba(17,28,28,0.4)', border: '1px solid rgba(63,63,70,0.2)', borderRadius: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 2 }}>
              <Box>
                <Typography variant="subtitle2" sx={{ color: '#8A9A5B', fontWeight: 800, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: 0.5 }}>🎨 Change Paper Color</Typography>
                <Typography variant="caption" sx={{ color: '#78716C' }}>Click a color circle below to change the shade of your notebook pad sheet instantly!</Typography>
              </Box>
              <Box sx={{ display: 'flex', gap: 1.5 }}>
                {[
                  { name: 'Warm Cream', hex: '#FDFBF7' },
                  { name: 'Retro Rose', hex: '#FADBD8' },
                  { name: 'Mint Balance', hex: '#E8F8F5' },
                  { name: 'Legal Yellow', hex: '#FEF9E7' }
                ].map((color) => (
                  <Box 
                    key={color.hex}
                    onClick={() => setPaperTheme(color.hex)}
                    style={{
                      width: '26px', height: '26px', borderRadius: '50%', backgroundColor: color.hex, cursor: 'pointer',
                      border: paperTheme === color.hex ? '3px solid #68C3A3' : '1px solid rgba(255,255,255,0.2)',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.3)', transition: 'all 0.15s ease'
                    }}
                    title={color.name}
                  />
                ))}
              </Box>
            </Paper>

          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
