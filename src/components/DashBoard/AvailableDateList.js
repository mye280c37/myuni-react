import React, {useState, useEffect} from "react";
import Title from './Title';
import axios from 'axios';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import { Typography } from "@mui/material";
import TextField from '@mui/material/TextField';
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const url = process.env.REACT_APP_API_URL;

const columns = [
    { id: 'date', label: '날짜' },
    { id: 'timeFrom', label: '시작 시간'},
    { id: 'timeTo', label: '종료 시간'}
];

const AvailableDateField = () => {
    return (
        <TableRow>
            <TableCell>
                <TextField
                    id={'date'}
                    name={'date'}
                    // value={form.value}
                    // onChange={additionalFormItemHandler}
                    fullWidth
                    variant="outlined"
                    size="small"
                />
            </TableCell>
            <TableCell>
                <TextField
                    id={'timeFrom'}
                    name={'timeFrom'}
                    // value={form.value}
                    // onChange={additionalFormItemHandler}
                    fullWidth
                    variant="outlined"
                    size="small"
                />
            </TableCell>
            <TableCell>
                <TextField
                    id={'timeTo'}
                    name={'timeTo'}
                    // value={form.value}
                    // onChange={additionalFormItemHandler}
                    fullWidth
                    variant="outlined"
                    size="small"
                />
            </TableCell>
            <TableCell>
                <RemoveCircleOutlineIcon fontSize="small" color="action"></RemoveCircleOutlineIcon>
            </TableCell>
        </TableRow>
    );
}

export default function AvailableDateList() {

    const [ getData, setGetData ] = useState(false);
    const [ data, setData] = useState([]);

    async function getAvailableDates() {
        await axios.get(
            url + "/v2/available-date",
        )
        .then((res) => {
            console.log(res.data.result);
            setData(res.data.result);
        })
        .catch((error) => {
            console.log(error);
        })
    }

    useEffect(()=>{
        if (!getData){
            getAvailableDates();
        }
        setGetData(true);
    },[getData, getAvailableDates]);

    const addAvailableDateField = () => {
        setData(
            [...data, {date: "", timeFrom: "", timeTo: ""}]
        );
        console.log(data);
    };


    return (
        <React.Fragment>
        <Title>신청 가능 날짜</Title>
        <TableContainer>
            <Table size="small">
            <TableHead>
                <TableRow>
                {columns.map((column) => (
                    <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth? column.minWidth: 0 }}
                    >
                    {column.label}
                    </TableCell>
                ))}
                <TableCell>{""}</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {data
                .map((row, idx) => {
                    if(row._id != null){
                        return (
                            <TableRow tabIndex={idx} key={row._id} sx={{ cursor: 'pointer'}}>
                                {columns.map((column) => {
                                const value = row[column.id];
                                return (
                                    <TableCell key={column.id} align={column.align}>
                                    {column.format && typeof value === 'number'
                                        ? column.format(value)
                                        : value}
                                    </TableCell>
                                );
                                })}
                                <TableCell>
                                    <DeleteIcon color="error" fontSize="small"></DeleteIcon>
                                </TableCell>
                            </TableRow>
                        );
                    }
                    else{
                        return AvailableDateField();
                    }
                })}
            </TableBody>
            </Table>
        </TableContainer>
        {data.length === 0?
        <Typography sx= {{ p: 4 }}>신청 가능 날짜 없음</Typography>:
        <React.Fragment></React.Fragment>
        }
        <Box sx={{ p: 2 }}>
            <AddCircleIcon color="primary" onClick={addAvailableDateField} sx={{ cursor: 'pointer'}}></AddCircleIcon>
        </Box>
        <Box sx={{ ml: "auto" }}>
            <Button variant="outlined">추가</Button>
        </Box>
        </React.Fragment>
    );
}