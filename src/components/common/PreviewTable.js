import React, {useState, useEffect} from "react";
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';

import StickyHeaderTable from "./StickyHeaderTable";

function PreviewTable(props) {

    const columns = props.columns;
    const data = props.data;
    const [ clicked, setClicked ] = useState(props.clicked);

    useEffect(()=>{
        props.onClick(clicked);
    }, [clicked, props]);

    return (
        <React.Fragment>
            <Box sx={{ display: clicked<0? 'block': 'none' }}>
                <StickyHeaderTable columns={columns} rows={data} onClick={setClicked}></StickyHeaderTable>
            </Box>
            {clicked < 0?null:
            <Box sx={{ display: clicked===-2? 'none': 'block', height: '100%'}}>
                <Box sx={{ mb: 2, textAlign: 'right' }}>
                    <Button variant="outlined" onClick={()=>{setClicked(-2)}}>
                        목록으로
                    </Button>
                </Box>
                <Divider></Divider>
                {props.detail(data[clicked])}
                <Divider></Divider>
            </Box>
            }
        </React.Fragment>
    );
}

PreviewTable.propTypes = {
    columns: PropTypes.array.isRequired,
    data: PropTypes.array.isRequired,
    clicked: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired,
    detail: PropTypes.func.isRequired
}

export default PreviewTable;