import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

import CustomLink from '../components/common/CustomLink';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

function PageLayout(props) {
    return (
        <React.Fragment>
            <Header/>
            <Container component="main" maxWidth="md" sx={{ mt: 18, mb: 4, pl: { xs: 3, md: 0 }, pr: { xs: 3, md: 0 }  }}>
                <Typography variant='h3' component='h1' sx={{ textAlign: 'left', mb: props.secondary?3:8 }}>{props.title}</Typography>
                <Typography variant='body2' component='h1' color="text.secondary" sx={{ mb: 8, textAlign: 'left' }}>{props.secondary}</Typography>
                {props.children}
            </Container>
            <Button variant="contained"
                size="large" 
                color="success" 
                sx={{
                    position: 'fixed', 
                    bottom: 30,  
                    right: 30,
                    width: {md: '175px'},
                    height: {md: '55px'},
                    fontSize: {md: '1.5rem'}
                    }}
                >
                <CustomLink to={"/consulting-request"}>컨설팅 신청</CustomLink>
            </Button>
            <Footer />
        </React.Fragment>
    );
}

PageLayout.propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string,
    secondary: PropTypes.string
}

export default PageLayout;