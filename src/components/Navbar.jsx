import React from 'react';
import { Link, useLocation } from 'react-router-dom'; 
import { AppBar, Toolbar, Typography, Box, Button, Avatar } from '@mui/material';
import { 
  DashboardOutlined, 
  CalendarTodayOutlined, 
  BookOutlined, 
  FavoriteBorderOutlined, 
  KeyboardArrowDown, 
  WbSunnyOutlined,
  MenuBook // Made sure to keep this stable icon
} from '@mui/icons-material';

const COLORS = {
  navActive: '#1F3535',
  fontJournal: '"Caveat", "Comic Sans MS", cursive'
};

export default function Navbar() {
  const location = useLocation(); 

  const navItems = [
    { text: 'Dashboard', path: '/dashboard', icon: <DashboardOutlined fontSize="small" /> },
    { text: 'Planner', path: '/planner', icon: <CalendarTodayOutlined fontSize="small" /> },
    { text: 'Journal', path: '/journal', icon: <BookOutlined fontSize="small" /> },
    { text: 'Health', path: '/health', icon: <FavoriteBorderOutlined fontSize="small" /> },
    { text: 'Docs', path: '/documentation', icon: <MenuBook fontSize="small" /> },
  ];

  return (
    <AppBar 
      position="fixed" // 🌟 Changed this to fixed so it stays stuck at the top!
      sx={{ 
        backgroundColor: 'rgba(10,20,20,0.8)', // Semi-see-through background
        backdropFilter: 'blur(8px)', // 🌟 Blurs things behind it so it looks super clean when you scroll!
        backgroundImage: 'none', 
        boxShadow: 'none', 
        borderBottom: '1px solid #1A2E2E',
        top: 0,
        left: 0,
        right: 0
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between', px: 4 }}>
        {/* Brand Logo */}
        <Typography 
          variant="h5" 
          component={Link}
          to="/"
          sx={{ 
            fontFamily: COLORS.fontJournal, 
            color: '#68C3A3', 
            fontWeight: 'bold',
            textDecoration: 'none'
          }}
        >
          Alora
        </Typography>

        {/* Navigation Menu links */}
        <Box sx={{ display: 'flex', gap: 1 }}>
          {navItems.map((item) => {
            const isItemActive = location.pathname === item.path;

            return (
              <Button
                key={item.text}
                component={Link} 
                to={item.path}   
                startIcon={item.icon}
                sx={{
                  color: isItemActive ? '#68C3A3' : '#8A9A5B',
                  backgroundColor: isItemActive ? COLORS.navActive : 'transparent',
                  textTransform: 'none',
                  borderRadius: 2,
                  px: 2,
                  '&:hover': { backgroundColor: COLORS.navActive }
                }}
              >
                {item.text}
              </Button>
            );
          })}
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
          <WbSunnyOutlined sx={{ color: '#8A9A5B', ml: 1, fontSize: 20, cursor: 'pointer' }} />
        </Box>
      </Toolbar>
    </AppBar>
  );
}
