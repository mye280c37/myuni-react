import * as React from 'react';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

export default function Footer() {
  return (
    <Container component="main" maxWidth="sm" sx={{ mt: 5, mb: 4 }}>
        <Typography variant="body2" color="text.secondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://mui.com/">
            Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
        </Typography>
    </Container>
  );
}