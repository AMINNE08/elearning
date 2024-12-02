import { AppBar, Toolbar, Button, Box } from '@mui/material';
import logo from '../images/logo1.png';
import Navbar from '../layouts/Navbar';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <AppBar
      position="sticky"
      sx={{
        boxShadow: 'none', // Remove default AppBar shadow if needed
        backgroundColor: 'white',
            }}
    >
      <Toolbar style={{ justifyContent: 'space-between'  }}>
        {/* Logo and Skill Flow text */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <img
            src={logo}
            alt="logo"
            style={{ width: '200px', height: '80px', marginRight: '10px' }}
          />
        </Box>

        {/* Navigation Links */}
        <div className='navbarr'>
          <Navbar></Navbar>

        </div>

        {/* Log In and Register Buttons */}
        <div>
          <Link to ='/registre'>
          <Button variant="contained" style={{ backgroundColor: '#EE6D77', color: 'white', marginRight: '10px'}}>
            Join for Free
          </Button>
          </Link>
          <Link to ='/admineDash'>
          <Button variant="contained" style={{ backgroundColor: '#EE6D77', color: 'white',  }}>
            admin Dashboard
          </Button>
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
