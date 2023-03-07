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
        'img/main/main1.jpeg',
        'img/main/main2.jpeg',
        'img/main/main3.jpeg',
        'img/main/main4.jpeg',
        'img/main/main5.jpeg',
        'img/main/main6.jpeg',
        'img/main/main7.jpeg'
    ];

    const imageStyle = {
        'width': '100%',
        'height': '73vh',
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
        <Container 
            component="main"
            sx={{ 
                pt: { xs: 10, sm: 13 }, 
                pb: 4,
                maxWidth : { md: '85vw', lg: '77vw' },
                height: '100vh'
            }}
            >
            <Header/>
            {/* {count} */}
            <Box sx={{ pl: {sm: 10, md: 1}, pr: {sm: 10, md: 0}, mb : {sm: 3, md: 1} }}>
                <img style={imageStyle} alt="main" src={imageList[count]} />
            </Box>
            <Typography variant='h3' component='h1' sx={{ textAlign: 'right'}}>MYUNI</Typography>
            <Typography variant='body2' component='h1' color="text.secondary" sx={{ mb: 8, textAlign: 'right' }}>검정고시 출신자 전문 진로 진학 홈페이지</Typography>
            <Footer/>
        </Container>
    );
}