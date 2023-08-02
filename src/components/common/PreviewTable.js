import React, {useState, useEffect} from "react";
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';

import StickyHeadTable from "./StickyHeaderTable";

function PreviewTable(props) {

    const columns = props.columns;
    const data = props.data;
    const [ clicked, setClicked ] = useState(props.clicked?props.clicked:-1);

    useEffect(()=>{
        if(props.clicked===-2){
            setClicked(-1);
        }
        else if (props.onClick){
            props.onClick(clicked);
        }
    }, [clicked, props.clicked]);

    return (
        <React.Fragment>
            <Box sx={{ display: clicked===-1? 'block': 'none' }}>
                <StickyHeadTable columns={columns} rows={data} onClick={setClicked}></StickyHeadTable>
            </Box>
            {clicked === -1
            ?<Box></Box>
            :<Box sx={{ display: clicked===-1? 'none': 'block'}}>
                <Divider></Divider>
                {props.detail(data[clicked])}
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

PreviewTable.propTypes = {
    columns: PropTypes.array.isRequired,
    data: PropTypes.array.isRequired,
    clicked: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired,
    detail: PropTypes.func.isRequired
}

export default PreviewTable;