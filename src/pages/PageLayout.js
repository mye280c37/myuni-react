import * as React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

function PageLayout(props) {
    return (
        <Container component="main" maxWidth="md" sx={{ mt: 15, mb: 4 }}>
            <Typography variant='h3' component='h1' sx={{ textAlign: 'left', mb: 3 }}>{props.title}</Typography>
            <Typography variant='body2' component='h1' color="text.secondary" sx={{ mb: 3, textAlign: 'left' }}>{props.secondary}</Typography>
            {props.children}
        </Container>
    );
}

PageLayout.propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string,
    secondary: PropTypes.string
}

export default PageLayout;