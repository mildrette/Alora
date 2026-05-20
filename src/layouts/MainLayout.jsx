import { Box } from "@mui/material";

function MainLayout({ children }) {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#0A1414",
        pt: "75px",
        width: "100%"
      }}
    >
      {children}
    </Box>
  );
}

export default MainLayout;
