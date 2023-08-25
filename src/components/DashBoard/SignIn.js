import React, {useState} from "react";
import PropTypes from 'prop-types';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';

import { setCookie } from "../../utils/cookies";

const theme = createTheme();
const url = process.env.REACT_APP_API_URL;

function SignIn(props) {

    const [ loginForm, setLoginForm ] = useState({
        email : '',
        password : ''
    });

    const handleChange = (e) => {
        setLoginForm({
            ...loginForm,
            [e.target.name]: e.target.value,
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post(
            url+"/v2/auth/login", loginForm
        ).then(function (res) {
            if(res.status === 200) {
                props.setResult(true);
                // console.log(res.data.result.jwtToken);
                let expiredDate = new Date();
                expiredDate = expiredDate.setHours(expiredDate.getHours()+2);
                setCookie('test', 'test', {
                    path: '/',
                    expires: expiredDate.toUTCString()
                });
                // console.log(getCookie('Authentication'));
            }
            else {
                console.log(res.status);
            }
        })
        .catch(function (error) {
            // if(error.response.data.statusCode >= 400) {
            //     alert(error.response.data.message);
            // }
        });
    };

    return (
        <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
            sx={{
                marginTop: 16,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
            >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
                Sign in
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                value={loginForm.email}
                onChange={handleChange}
                autoComplete="email"
                autoFocus
                />
                <TextField
                margin="normal"
                required
                fullWidth
                id="password"
                label="Password"
                type="password"
                name="password"
                value={loginForm.password}
                onChange={handleChange}
                autoComplete="current-password"
                />
                <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                >
                Sign In
                </Button>
            </Box>
            </Box>
        </Container>
        </ThemeProvider>
    );
}

SignIn.propTypes = {
    setResult: PropTypes.func
}

export default SignIn;