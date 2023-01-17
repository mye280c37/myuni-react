import React, {useEffect, useState, useRef} from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';


export default function Main() {
    const [count, setCount] = useState(0);
    const savedCallback = useRef();

    const imageList = [
        'img/main/main-image-1.jpeg',
        'img/main/main-image-2.jpeg',
        'img/main/main-image-3.jpeg'
    ];

    const imageStyle = {
        'width': '100%',
        'height': '70vh',
        'filter': 'brightness(60%)',
        'object-fit': 'cover'
    }

    const callback = () => {
        if(count === imageList.length - 1){
            setCount(0);
        }
        else setCount(count + 1);
    }

    useEffect(() => {
        savedCallback.current = callback;
    });

    useEffect(() => {
        const tick = () => {
            savedCallback.current();
        }

        const timer = setInterval(tick, 3000);
        return () => clearInterval(timer);
    }, []);

    return (
        <Container component="main" maxWidth="lg" sx={{ pt: { xs: 12, sm:15}, pb: 4, pl: { xs: 3, md: 3 }, pr: { xs: 3, md: 3 }, height: '100vh'}}>
            <Header/>
            {/* {count} */}
            <Box sx={{ pl: {sm: 10, md: 1}, pr: {sm: 10, md: 1}, pb : {sm: 5, md: 1} }}>
                <img style={imageStyle} alt="main-image" src={imageList[count]} />
            </Box>
            <Typography variant='h3' component='h1' sx={{ textAlign: 'right'}}>MYUNI</Typography>
            <Typography variant='body2' component='h1' color="text.secondary" sx={{ mb: 8, textAlign: 'right' }}>검정고시 출신자 맞춤 입시 정보 제공 홈페이지</Typography>
            <Footer/>
        </Container>
    );
}