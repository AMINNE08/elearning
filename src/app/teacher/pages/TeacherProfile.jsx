import { Card, Avatar, Typography, Box } from '@mui/material';
import { Facebook, Twitter, YouTube, LinkedIn } from '@mui/icons-material';

const TeacherProfile = () => {
  return (
    <Card sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 2 }}>
      <Avatar alt="Dianne Ameter" src="/profile-pic-url" sx={{ width: 120, height: 120 }} />
      <Typography variant="h5" sx={{ fontWeight: 'bold', mt: 2 }}>
        Dianne Ameter
      </Typography>
      <Typography variant="subtitle1">Illustrator</Typography>
      <Typography variant="body2" color="textSecondary" align="center" sx={{ mt: 1 }}>
        Cup of char skive off bodge bobby blower tickety-boo delinquent grub so I said cuppa faff...
      </Typography>
      <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
        <Facebook sx={{ color: '#1877F2' }} />
        <Twitter sx={{ color: '#1DA1F2' }} />
        <YouTube sx={{ color: '#FF0000' }} />
        <LinkedIn sx={{ color: '#0A66C2' }} />
      </Box>
    </Card>
  );
};

export default TeacherProfile;
