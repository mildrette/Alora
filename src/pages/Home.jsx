import { Container, Typography, Button } from "@mui/material";

function Home() {
  return (
    <Container>
      <Typography variant="h2" gutterBottom>
        Welcome to Alora
      </Typography>

      <Typography variant="body1">
        Your life, organized beautifully.
      </Typography>

      <Button variant="contained" sx={{ mt: 3 }}>
        Get Started
      </Button>
    </Container>
  );
}

export default Home;