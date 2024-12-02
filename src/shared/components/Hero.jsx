import { Box, Typography, Button, Stack } from "@mui/material";
import bodyimag from "../images/bodyimg.png";
import m from "../images/1m.png"; // Example icon
import spot from "../images/spot.png"; // Import the SVG file

const Hero = () => {
  return (
    <Box
      sx={{
        minHeight: "90vh",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Stack spacing={4} sx={{ maxWidth: "600px", zIndex: 2 }}>
        <Typography
          variant="h2"
          fontWeight="bold"
          style={{ marginLeft: "60px" }}
        >
          Let’s <span style={{ color: "#EE6D77" }}>Learn</span> New Courses & Gain More Skills!
        </Typography>
        <Stack direction="row" spacing={2} justifyContent="center">
          <Button
            variant="contained"
            style={{ backgroundColor: "#8B36F5", color: "white" }}
          >
            Ready to Get Started?
          </Button>
        </Stack>
      </Stack>

     

      {/* Blob SVG Positioned Behind the Girl */}
      <Box
        component="img"
        src={spot}
        alt="Blob Background"
        sx={{
          position: "absolute",
          right: "0%",
          bottom: "-20%",
          zIndex: 1,
          width: "600px",
          height: "auto",
        }}
      />

      {/* Body Image Positioned to the Right */}
      <Box
        component="img"
        sx={{
          position: "absolute",
          right: 50,
          bottom: 0,
          width: "400px",
          height: "auto",
          objectFit: "cover",
          zIndex: 2,
        }}
        src={bodyimag}
        alt="Body Image"
      />

      <Box
        component="img"
        src={m}
        alt="Pen Icon"
        sx={{
          position: "absolute",
          top: "53%",
          left: "33%",
          width: "40px",
          height: "40px",
          zIndex: 3,
        }}
      />
    </Box>
  );
};

export default Hero;
