

import React from 'react';
import { AppBar, Toolbar, Typography, Box, Button, Avatar } from '@mui/material';
import { 
  DashboardOutlined, 
  CalendarTodayOutlined, 
  BookOutlined, 
  FavoriteBorderOutlined, 
  RestaurantOutlined, 
  FitnessCenterOutlined,
  KeyboardArrowDown, 
  WbSunnyOutlined 
} from '@mui/icons-material';

// Color definitions matching your design
const COLORS = {
  navActive: '#1F3535',
  fontJournal: '"Caveat", "Comic Sans MS", cursive'
};

export default function Navbar() {
  const navItems = [
    { text: 'Dashboard', icon: <DashboardOutlined fontSize="small" /> },
    { text: 'Planner', icon: <CalendarTodayOutlined fontSize="small" /> },
    { text: 'Journal', icon: <BookOutlined fontSize="small" />, active: true },
    { text: 'Habits', icon: <FavoriteBorderOutlined fontSize="small" /> },
    { text: 'Meals', icon: <RestaurantOutlined fontSize="small" /> },
    { text: 'Workouts', icon: <FitnessCenterOutlined fontSize="small" /> },
  ];

  return (
    <AppBar 
      position="static" 
      sx={{ 
        backgroundColor: 'rgba(10,20,20,0.8)', 
        backgroundImage: 'none', 
        boxShadow: 'none', 
        borderBottom: '1px solid #1A2E2E' 
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between', px: 4 }}>
        {/* Brand Logo */}
        <Typography 
          variant="h5" 
          sx={{ 
            fontFamily: COLORS.fontJournal, 
            color: '#68C3A3', 
            fontWeight: 'bold' 
          }}
        >
          Alora
        </Typography>

        {/* Navigation Menu links */}
        <Box sx={{ display: 'flex', gap: 1 }}>
          {navItems.map((item) => (
            <Button
              key={item.text}
              startIcon={item.icon}
              sx={{
                color: item.active ? '#68C3A3' : '#8A9A5B',
                backgroundColor: item.active ? COLORS.navActive : 'transparent',
                textTransform: 'none',
                borderRadius: 2,
                px: 2,
                '&:hover': { backgroundColor: COLORS.navActive }
              }}
            >
              {item.text}
            </Button>
          ))}
        </Box>

        {/* User controls / Settings Profile */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Avatar 
            sx={{ 
              bgcolor: COLORS.navActive, 
              color: '#68C3A3', 
              width: 32, 
              height: 32, 
              fontSize: 14 
            }}
          >
            M
          </Avatar>
          <KeyboardArrowDown sx={{ color: '#8A9A5B' }} />
          <WbSunnyOutlined sx={{ color: '#8A9A5B', ml: 1, fontSize: 20 }} />
        </Box>
      </Toolbar>
    </AppBar>
  );
}
