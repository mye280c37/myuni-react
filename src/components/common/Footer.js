import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

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
        <Typography variant="body2" color="text.secondary" align="center">
          <FontAwesomeIcon icon={faGithub} />
          <Link color="inherit" sx={{ ml: 1 }} href="https://github.com/mye280c37/myuni-react">
            Github
          </Link> 
        </Typography>
    </Box>
  );
}