import React, {useState, useEffect} from "react";
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';

import StickyHeadTable from "./StickyHeaderTable";
import ReviewDetail from "./ReviewDetail";

const columns = [
    { id: 'title', label: '제목', minWidth: 170 },
    { id: 'author', label: '작성자', minWidth: 100 },
    { id: 'consultingTime', label: '상담 날짜', minWidth: 100 },
];

function Reviews(props) {

    const data = props.data;
    const [ clicked, setClicked ] = useState(-1);

    useEffect(()=>{
        if (props.onClick){
            props.onClick(clicked);
        }
    }, [clicked]);

    return (
        <React.Fragment>
            <Box sx={{ display: clicked===-1? 'block': 'none' }}>
                <StickyHeadTable columns={columns} rows={data} onClick={setClicked}></StickyHeadTable>
            </Box>
            {clicked === -1
            ?<Box></Box>
            :<Box sx={{ display: clicked===-1? 'none': 'block'}}>
                <Divider></Divider>
                <ReviewDetail review={data[clicked]}/>
                <Divider></Divider>
                <Box sx={{ mt: 3, textAlign: 'right' }}>
                    <Button variant="outlined" onClick={()=>{setClicked(-1)}}>
                        목록으로
                    </Button>
                </Box>
            </Box>
            }
        </React.Fragment>
    );
}

Reviews.propTypes = {
    data: PropTypes.array.isRequired,
    onClick: PropTypes.func
}

export default Reviews;