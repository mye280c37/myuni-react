import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

export default function Footer() {
  return (
    <Box component="main" sx={{ mt: 5, width: "100%", height: "5vh"}}>
        <Typography variant="body2" color="text.secondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://www.hellomyuni.com/">
            MY UNI
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
        </Typography>
    </Box>
  );
}