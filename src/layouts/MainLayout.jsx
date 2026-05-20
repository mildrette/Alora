import { Box } from "@mui/material";

function MainLayout({ children }) {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#f5f7fb"
      }}
    >
      {children}
    </Box>
  );
}

export default MainLayout;