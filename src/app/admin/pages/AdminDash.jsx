import { Link } from "react-router-dom";
import { Box, Grid, Typography, Paper, Button } from "@mui/material";
import { styled } from "@mui/system";

// Custom styled card component
const StatCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  textAlign: "center",
  background: "linear-gradient(45deg, #5f51b5, #2196f3)",
  color: "white",
  borderRadius: "15px",
  boxShadow: "0 3px 10px rgba(0, 0, 0, 0.2)",
}));

// Custom button styling for links
const StyledLinkButton = styled(Button)(({ theme }) => ({
  display: "block",
  width: "100%",
  padding: theme.spacing(2),
  backgroundColor: "#EE6D77",
  color: "white",
  textDecoration: "none",
  textAlign: "center",
  borderRadius: "12px",
  transition: "0.3s",
  "&:hover": {
    backgroundColor: "#388E3C",
    transform: "translateY(-2px)",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  },
}));

export default function AdminDash() {
  return (
    <Box sx={{ padding: 6, backgroundColor: "#f4f6f8", minHeight: "100vh" }}>
      {/* Admin Dashboard Title */}
      <Typography variant="h3" gutterBottom sx={{ fontWeight: 700, color: "#333", marginBottom: 4 }}>
        Admin Dashboard
      </Typography>

      {/* Overview Stats */}
      <Grid container spacing={3} sx={{ marginBottom: 6 }}>
        <Grid item xs={12} sm={6} md={4}>
          <StatCard elevation={3}>
            <Typography variant="h6" sx={{ fontWeight: 500 }}>Total Teachers</Typography>
            <Typography variant="h4" sx={{ fontWeight: 700, marginTop: 1 }}>50</Typography>
          </StatCard>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <StatCard elevation={3}>
            <Typography variant="h6" sx={{ fontWeight: 500 }}>Total Students</Typography>
            <Typography variant="h4" sx={{ fontWeight: 700, marginTop: 1 }}>200</Typography>
          </StatCard>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <StatCard elevation={3}>
            <Typography variant="h6" sx={{ fontWeight: 500 }}>Total Courses</Typography>
            <Typography variant="h4" sx={{ fontWeight: 700, marginTop: 1 }}>30</Typography>
          </StatCard>
        </Grid>
      </Grid>

      {/* Navigation Links to Pages */}
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4}>
          <StyledLinkButton component={Link} to="/teachers" variant="contained">
            Manage Teachers
          </StyledLinkButton>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <StyledLinkButton component={Link} to="/students" variant="contained">
            Manage Students
          </StyledLinkButton>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <StyledLinkButton component={Link} to="/courses" variant="contained">
            Manage Courses
          </StyledLinkButton>
        </Grid>
      </Grid>
    </Box>
  );
}
