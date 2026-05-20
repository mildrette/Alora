import React, { useState } from 'react';
import { 
  Box, Typography, Paper, Button, TextField, Chip,
  IconButton, Select, MenuItem, FormControl, 
  LinearProgress, Grid
} from '@mui/material';
import { 
  Restaurant, Opacity, Spa,
  Add, DeleteOutline
} from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';

export default function HealthPage() {
  // --- Water Tracker State ---
  const [waterOunces, setWaterOunces] = useState(24);
  const waterGoal = 80;

  // --- Meal Tracker State ---
  const [meals, setMeals] = useState([
    { id: '1', name: 'Avocado toast with poached eggs and spinach', type: 'Breakfast', tag: 'Healthy' },
    { id: '2', name: 'Grilled salmon bowl with quinoa and broccoli', type: 'Lunch', tag: 'Healthy' }
  ]);
  const [newMealName, setNewMealName] = useState('');
  const [mealType, setMealType] = useState('Breakfast');
  const [mealTag, setMealTag] = useState('Healthy');

  // --- Hormone & Cycle Tracker State ---
  const [cycleDay, setCycleDay] = useState(12);
  const [symptoms, setSymptoms] = useState(['Energetic', 'Clear Skin']);
  const [availableSymptoms] = useState(['Bloated', 'Fatigued', 'Cramps', 'Headache', 'Energetic', 'Calm', 'Clear Skin']);

  // --- Meal Actions ---
  const handleAddMeal = (e) => {
    e.preventDefault();
    if (!newMealName.trim()) return;

    const meal = {
      id: Date.now().toString(),
      name: newMealName,
      type: mealType,
      tag: mealTag
    };
    setMeals([...meals, meal]);
    setNewMealName('');
  };

  const handleDeleteMeal = (id) => {
    setMeals(meals.filter(m => m.id !== id));
  };

  // --- Symptom Toggle Actions ---
  const handleToggleSymptom = (symptom) => {
    if (symptoms.includes(symptom)) {
      setSymptoms(symptoms.filter(s => s !== symptom));
    } else {
      setSymptoms([...symptoms, symptom]);
    }
  };

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#0A1414', color: '#F5F5F4', p: { xs: 2, md: 6 } }}>
      <Box sx={{ maxWidth: 1200, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 4 }}>
        
        {/* ==================== HEADER STRIP ==================== */}
        <Box component="header" sx={{ borderBottom: '1px solid rgba(6,78,59,0.3)', pb: 4 }}>
          <Typography variant="h4" sx={{ fontWeight: 800, color: '#68C3A3', letterSpacing: '-0.05em' }}>
            Health & Wellness
          </Typography>
          <Typography variant="body2" sx={{ color: '#A8A29E', mt: 0.5 }}>
            Synchronize your nutrition, monitor your body rhythm, and feed your vitality.
          </Typography>
        </Box>

        {/* ==================== CONTENT GRID LAYOUT ==================== */}
        <Grid container spacing={4}>
          
          {/* LEFT SECTION: NUTRITION & WATER (7/12 Columns) */}
          <Grid item xs={12} lg={7} sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            
            {/* WATER CONTROLLER CARD */}
            <Paper elevation={0} sx={{ p: 4, backgroundColor: 'rgba(17,28,28,0.6)', border: '1px solid rgba(63,63,70,0.3)', borderRadius: 4 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                <Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#D6D3D1', display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Opacity sx={{ color: '#38BDF8' }} /> Water Hydration Log
                  </Typography>
                  <Typography variant="caption" sx={{ color: '#78716C' }}>Target: {waterGoal} oz daily</Typography>
                </Box>
                <Typography variant="h4" sx={{ fontWeight: 800, color: '#38BDF8' }}>{waterOunces} <span style={{ fontSize: '1rem', color: '#78716C' }}>oz</span></Typography>
              </Box>

              <LinearProgress 
                variant="determinate" 
                value={Math.min((waterOunces / waterGoal) * 100, 100)} 
                sx={{ height: 10, borderRadius: 5, backgroundColor: '#1A2E2E', '& .MuiLinearProgress-bar': { backgroundColor: '#38BDF8' }, mb: 3 }}
              />

              <Box sx={{ display: 'flex', gap: 2 }}>
                <Button 
                  fullWidth 
                  variant="outlined" 
                  onClick={() => setWaterOunces(waterOunces + 8)}
                  startIcon={<Add />}
                  sx={{ borderColor: 'rgba(56,189,248,0.3)', color: '#38BDF8', textTransform: 'none', borderRadius: 3, '&:hover': { borderColor: '#38BDF8', backgroundColor: 'rgba(56,189,248,0.05)' } }}
                >
                  +8 oz (1 Glass)
                </Button>
                <Button 
                  fullWidth 
                  variant="outlined" 
                  onClick={() => setWaterOunces(waterOunces + 24)}
                  startIcon={<Add />}
                  sx={{ borderColor: 'rgba(56,189,248,0.3)', color: '#38BDF8', textTransform: 'none', borderRadius: 3, '&:hover': { borderColor: '#38BDF8', backgroundColor: 'rgba(56,189,248,0.05)' } }}
                >
                  +24 oz (1 Bottle)
                </Button>
              </Box>
            </Paper>

            {/* MEAL MANAGEMENT MECHANIC */}
            <Paper elevation={0} sx={{ p: 4, backgroundColor: 'rgba(17,28,28,0.6)', border: '1px solid rgba(63,63,70,0.3)', borderRadius: 4, display: 'flex', flexDirection: 'column', gap: 3 }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#D6D3D1', display: 'flex', alignItems: 'center', gap: 1 }}>
                <Restaurant sx={{ color: '#F59E0B' }} /> Daily Meal Tracking
              </Typography>

              {/* Add Meal Form */}
              <Box component="form" onSubmit={handleAddMeal} sx={{ display: 'flex', flexDirection: 'column', gap: 2, backgroundColor: '#0A1212', p: 2.5, borderRadius: 3, border: '1px solid rgba(63,63,70,0.2)' }}>
                <TextField 
                  fullWidth 
                  placeholder="What did you eat today?" 
                  value={newMealName}
                  onChange={(e) => setNewMealName(e.target.value)}
                  variant="outlined"
                  size="small"
                  sx={{ '& .MuiOutlinedInput-root': { color: '#E7E5E4', fontSize: '0.875rem', backgroundColor: '#0A1414', borderRadius: 2, '& fieldset': { borderColor: 'rgba(63,63,70,0.5)' }, '&:hover fieldset': { borderColor: '#F59E0B' }, '&.Mui-focused fieldset': { borderColor: '#F59E0B' } } }}
                />

                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 2, flexWrap: 'wrap' }}>
                  <Box sx={{ display: 'flex', gap: 1.5 }}>
                    <FormControl size="small" sx={{ minWidth: 110, '& .MuiOutlinedInput-root': { color: '#D6D3D1', fontSize: '0.75rem', backgroundColor: '#0A1414', borderRadius: 2 } }}>
                      <Select value={mealType} onChange={(e) => setMealType(e.target.value)}>
                        <MenuItem value="Breakfast">Breakfast</MenuItem>
                        <MenuItem value="Lunch">Lunch</MenuItem>
                        <MenuItem value="Dinner">Dinner</MenuItem>
                        <MenuItem value="Snack">Snack</MenuItem>
                      </Select>
                    </FormControl>

                    <FormControl size="small" sx={{ minWidth: 110, '& .MuiOutlinedInput-root': { color: '#D6D3D1', fontSize: '0.75rem', backgroundColor: '#0A1414', borderRadius: 2 } }}>
                      <Select value={mealTag} onChange={(e) => setMealTag(e.target.value)}>
                        <MenuItem value="Healthy">🌿 Healthy</MenuItem>
                        <MenuItem value="Neutral">⚖️ Neutral</MenuItem>
                        <MenuItem value="Unhealthy">🍔 Indulgent</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>

                  <Button type="submit" variant="contained" size="small" sx={{ backgroundColor: '#F59E0B', color: '#0A1414', fontWeight: 700, textTransform: 'none', borderRadius: 2, px: 3, '&:hover': { backgroundColor: '#D97706' } }}>
                    Log Meal
                  </Button>
                </Box>
              </Box>

              {/* Meal Item List Container */}
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                <AnimatePresence initial={false}>
                  {meals.map((meal) => (
                    <motion.div key={meal.id} initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, x: -10 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', p: 2, borderRadius: 3, backgroundColor: 'rgba(21,36,36,0.4)', border: '1px solid rgba(63,63,70,0.2)', width: '100%', gap: 2 }}>
                        <Box sx={{ flexGrow: 1 }}>
                          <Typography sx={{ fontSize: '0.875rem', fontWeight: 500, color: '#E7E5E4' }}>{meal.name}</Typography>
                          <Box sx={{ display: 'flex', gap: 1, mt: 0.5, alignItems: 'center' }}>
                            <Chip label={meal.type} size="small" sx={{ backgroundColor: '#1A2E2E', color: '#A7F3D0', fontSize: '0.65rem', height: 18 }} />
                            <Chip 
                              label={meal.tag} 
                              size="small" 
                              sx={{ 
                                backgroundColor: meal.tag === 'Healthy' ? 'rgba(16,185,129,0.15)' : meal.tag === 'Neutral' ? 'rgba(245,158,11,0.15)' : 'rgba(239,68,68,0.15)', 
                                color: meal.tag === 'Healthy' ? '#10B981' : meal.tag === 'Neutral' ? '#F59E0B' : '#EF4444', 
                                fontSize: '0.65rem', height: 18 
                              }} 
                            />
                          </Box>
                        </Box>
                        <IconButton onClick={() => handleDeleteMeal(meal.id)} sx={{ color: '#52525B', '&:hover': { color: '#EF4444' } }}>
                          <DeleteOutline fontSize="small" />
                        </IconButton>
                      </Box>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </Box>
            </Paper>
          </Grid>

          {/* RIGHT SECTION: HORMONAL & MENSTRUAL TRACKER (5/12 Columns) */}
          <Grid item xs={12} lg={5}>
            <Paper elevation={0} sx={{ p: 4, backgroundColor: 'rgba(17,28,28,0.6)', border: '1px solid rgba(63,63,70,0.3)', borderRadius: 4, display: 'flex', flexDirection: 'column', gap: 4 }}>
              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#D6D3D1', display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Spa sx={{ color: '#F472B6' }} /> Hormonal & Cycle Rhythm
                </Typography>
                <Typography variant="caption" sx={{ color: '#78716C' }}>Keep a clear record of physical symptom fluctuations.</Typography>
              </Box>

              {/* Cycle Tracker Interface Slider emulation */}
              <Box sx={{ textAlign: 'center', backgroundColor: '#122222', p: 3, borderRadius: 4, border: '1px solid rgba(244,114,182,0.2)' }}>
                <Typography variant="caption" sx={{ color: '#F472B6', display: 'block', textTransform: 'uppercase', fontWeight: 700, letterSpacing: 1, mb: 1 }}>Current Menstrual Phase</Typography>
                <Typography variant="h5" sx={{ fontWeight: 800, color: '#E7E5E4' }}>Follicular Phase</Typography>
                
                <Box sx={{ mt: 3, display: 'flex', justifyContent: 'center', gap: 1, alignItems: 'center' }}>
                  <Button size="small" onClick={() => setCycleDay(Math.max(1, cycleDay - 1))} sx={{ minWidth: 32, color: '#F472B6' }}>-</Button>
                  <Typography sx={{ fontSize: '0.9rem', fontWeight: 600, color: '#A8A29E' }}>Day <span style={{ fontSize: '1.4rem', color: '#F472B6', fontWeight: 800 }}>{cycleDay}</span> of 28</Typography>
                  <Button size="small" onClick={() => setCycleDay(Math.min(28, cycleDay + 1))} sx={{ minWidth: 32, color: '#F472B6' }}>+</Button>
                </Box>
              </Box>

              {/* Symptom Checkboxes Pills Section */}
              <Box>
                <Typography variant="body2" sx={{ fontWeight: 700, color: '#D6D3D1', mb: 2 }}>Log Daily Biomarkers / Symptoms</Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {availableSymptoms.map((symptom) => {
                    const isSelected = symptoms.includes(symptom);
                    return (
                      <Chip 
                        key={symptom}
                        label={symptom}
                        onClick={() => handleToggleSymptom(symptom)}
                        sx={{ 
                          backgroundColor: isSelected ? 'rgba(244,114,182,0.2)' : '#0A1212', 
                          color: isSelected ? '#F472B6' : '#78716C', 
                          border: '1px solid',
                          borderColor: isSelected ? '#F472B6' : 'rgba(63,63,70,0.4)',
                          fontWeight: isSelected ? 700 : 500,
                          fontSize: '0.75rem',
                          transition: 'all 0.2s',
                          '&:hover': { backgroundColor: isSelected ? 'rgba(244,114,182,0.3)' : 'rgba(255,255,255,0.03)' }
                        }} 
                      />
                    );
                  })}
                </Box>
              </Box>

            </Paper>
          </Grid>

        </Grid>
      </Box>
    </Box>
  );
}
