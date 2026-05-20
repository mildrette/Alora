import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography, Button, Paper } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';

// Simple design colors matching your studio theme
const DESIGN = {
  bg: '#0A1414', // Your signature dark tone
  card: '#122222', // Cozy dark teal paper folder tone
  accent: '#68C3A3', // Glowing mint
  textSoft: '#A8A29E', // Clear text sand gray
  gold: '#E6C594',
  pink: '#F472B6',
  fontJournal: '"Caveat", "Comic Sans MS", cursive'
};

export default function Home() {
  const [hovered, setHovered] = useState(null);

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: DESIGN.bg,
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        px: 2,
        py: { xs: 12, md: 10 },
        position: 'relative',
        overflow: 'hidden',
        // 🌟 MISSING ELEMENT 1: Creates a beautiful matte blueprint desk grid texture across the background
        backgroundImage: 'linear-gradient(rgba(104,195,163,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(104,195,163,0.02) 1px, transparent 1px)',
        backgroundSize: '30px 30px'
      }}
    >

      {/* ===== SOFT GLOWING LIGHTS ===== */}
      <Box sx={{ position: 'absolute', width: { xs: 300, md: 600 }, height: { xs: 300, md: 600 }, background: 'radial-gradient(circle, rgba(104,195,163,0.1), transparent 60%)', top: '-250px', left: '-200px', filter: 'blur(40px)', pointerEvents: 'none' }} />
      <Box sx={{ position: 'absolute', width: { xs: 250, md: 500 }, height: { xs: 250, md: 500 }, background: 'radial-gradient(circle, rgba(230,197,148,0.06), transparent 60%)', bottom: '-200px', right: '-150px', filter: 'blur(40px)', pointerEvents: 'none' }} />

      {/* 🌟 MISSING ELEMENT 2: Left Marginal Floating Sticky Note */}
      <Box sx={{
        position: 'absolute', left: '4%', top: '25%', width: '160px', bgcolor: '#936141', p: 2, boxShadow: 3, transform: 'rotate(-4deg)', display: { xs: 'none', lg: 'block' },
        fontFamily: DESIGN.fontJournal, fontSize: '1.3rem', color: '#FDFBF7'
      }}>
        <Box sx={{ position: 'absolute', top: -8, left: '44%', width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#EF4444' }} />
        You are completely capable of self-growth. Trust your pace. ♡
      </Box>

      {/* 🌟 MISSING ELEMENT 3: Right Marginal Floating Sticky Note */}
      <Box sx={{
        position: 'absolute', right: '5%', bottom: '30%', width: '150px', bgcolor: '#A25942', p: 2, boxShadow: 3, transform: 'rotate(3deg)', display: { xs: 'none', lg: 'block' },
        fontFamily: DESIGN.fontJournal, fontSize: '1.3rem', color: '#FADBD8'
      }}>
        <Box sx={{ position: 'absolute', top: -8, left: '46%', width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#EF4444' }} />
        Consistency beats perfection every time. 🌿
      </Box>

      {/* ================= HERO CENTER CARD ================= */}
      <Paper
        elevation={0}
        sx={{
          maxWidth: 900,
          width: '100%',
          textAlign: 'center',
          backgroundColor: DESIGN.card,
          border: '1px solid rgba(104,195,163,0.2)',
          borderRadius: 6,
          p: { xs: 4, sm: 5, md: 7 },
          mb: 6,
          position: 'relative',
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          boxShadow: '0 20px 50px rgba(0,0,0,0.4)'
        }}
      >
        {/* Playful washi tape strip header holding the main sheet */}
        <Box sx={{ position: 'absolute', top: -11, left: '50%', transform: 'translateX(-50%) rotate(-1deg)', width: '130px', height: '24px', backgroundColor: 'rgba(230,197,148,0.25)', borderLeft: '2px dashed rgba(255,255,255,0.2)', borderRight: '2px dashed rgba(255,255,255,0.2)', zIndex: 5 }} />

        {/* TOP BADGE */}
        <Typography
          sx={{
            fontFamily: 'sans-serif',
            color: DESIGN.accent,
            fontWeight: 800,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            fontSize: '0.72rem',
            mb: 2.5,
            backgroundColor: 'rgba(104,195,163,0.06)',
            px: 2,
            py: 0.6,
            borderRadius: 2
          }}
        >
          Alora Studio System
        </Typography>

        {/* MAIN TEXT TITLE */}
             {/* MAIN TEXT TITLE */}
        <Typography
          sx={{
            fontSize: { xs: '2.3rem', sm: '3.2rem', md: '4rem' },
            fontWeight: 900,
            lineHeight: 1.15,
            letterSpacing: '-0.03em',
            mb: 2.5,
            width: '100%',
            wordBreak: 'break-word',
            color: '#FFFFFF' // 🌟 Fixed! Force-swapped the text color to pure bright white
          }}
        >
          Your life, organized with{' '}
          <span style={{ color: DESIGN.accent }}>clarity.</span>
        </Typography>


        {/* SUBTITLE */}
        <Typography
          sx={{
            color: DESIGN.textSoft,
            maxWidth: 600,
            mx: 'auto',
            fontSize: { xs: '1rem', md: '1.1rem' },
            lineHeight: 1.6,
            mb: 4.5
          }}
        >
          A calm, playful digital notebook for journaling daily diaries, planning hourly schedules, and tracking gym workout splits — all inside one cozy dashboard workspace.
        </Typography>

        {/* CALL TO ACTION ENTRY BUTTON */}
        <Button
          component={Link}
          to="/dashboard"
          endIcon={<ArrowForward />}
          sx={{
            backgroundColor: DESIGN.accent,
            color: '#061010',
            fontWeight: 900,
            px: 5,
            py: 1.8,
            borderRadius: 3.5,
            textTransform: 'none',
            fontSize: '1rem',
            transition: 'all 0.2s ease-in-out',
            boxShadow: '0 10px 25px rgba(104,195,163,0.25)',

            '&:hover': {
              backgroundColor: '#fff',
              transform: 'translateY(-3px)',
              boxShadow: '0 15px 35px rgba(255,255,255,0.2)'
            }
          }}
        >
          Enter Studio Room
        </Button>
      </Paper>

      {/* ================= MODULE GRID CARDS ================= */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          gap: 2.5,
          maxWidth: 900,
          width: '100%',
          boxSizing: 'border-box'
        }}
      >
        {[
          {
            title: '📖 Journal Room',
            desc: 'Capture thoughts over lined notebook rules with cute movable sticky notes.',
            color: DESIGN.accent,
            angle: '-1.5deg'
          },
          {
            title: '📅 Daily Planner',
            desc: 'Organize your schedule steps cleanly on an hour-by-hour paper pad timeline.',
            color: DESIGN.gold,
            angle: '0deg'
          },
          {
            title: '🌿 Health & Gym',
            desc: 'Log macro nutrition food logs, weight goals, and follow biomarker cycle trails.',
            color: DESIGN.pink,
            angle: '1.5deg'
          }
        ].map((item, i) => (
          <Paper
            key={i}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            sx={{
              p: 3,
              flex: 1,
              backgroundColor: 'rgba(18,34,34,0.4)',
              border: '1px solid rgba(255,255,255,0.04)',
              borderRadius: 4,
              cursor: 'pointer',
              transition: 'all 0.2s ease-in-out',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              boxSizing: 'border-box',
              transform: hovered === i ? `translateY(-6px) rotate(${item.angle})` : 'translateY(0) rotate(0deg)',
              boxShadow: hovered === i ? '0 10px 20px rgba(0,0,0,0.3)' : 'none',

              '&:hover': {
                borderColor: item.color,
                backgroundColor: 'rgba(18,34,34,0.6)'
              }
            }}
          >
            <Typography sx={{ color: item.color, fontWeight: 800, fontSize: '1.1rem', mb: 1, fontFamily: 'sans-serif' }}>
              {item.title}
            </Typography>

            <Typography sx={{ color: DESIGN.textSoft, fontSize: '0.88rem', lineHeight: 1.45 }}>
              {item.desc}
            </Typography>
          </Paper>
        ))}

      </Box>
    </Box>
  );
}
