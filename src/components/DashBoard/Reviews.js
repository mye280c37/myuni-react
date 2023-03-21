import React, {useState, useEffect} from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import Title from './Title';
import Reviews from '../common/Reviews';

export default function AdminReviews() {
    const [clicked, setClicked] = useState(-1);

    return (
    <React.Fragment>
        {clicked===-1?
        <Title>컨설팅 후기</Title>:
        <Box sx={{ mb: 2, textAlign: 'right' }}>
            <Button variant="outlined" color="error" onClick={()=>{setClicked(-1)}}>
                삭제
            </Button>
        </Box>
        }
        <Reviews onClick={setClicked}/>
    </React.Fragment>
    );
};