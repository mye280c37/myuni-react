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
import Input from '@mui/material/Input';
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const url = process.env.REACT_APP_API_URL;

const rowHeight = '42px';

const columns = [
    { id: 'date', label: '날짜' }
];

export default function AvailableDateList() {

    const [ getData, setGetData ] = useState(false);
    const [ data, setData] = useState([]);
    const [ newData, setNewData ] = useState([]);

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

    async function postAvailableDates() {
        const dataList = newData.map((data) => {
            return data.date;
        });
        console.log(dataList);
        await axios.post(
            url + "/v2/available-date/admin", {
                dateList: dataList
            }
        )
        .then((res) => {
            console.log(res.data.result);
            setGetData(false);
        })
        .catch((error) => {
            console.log(error);
        })
    }

    const deleteAvailableDate = async (availableDateId) => {
        await axios.delete(
            url + "/v2/available-date/admin/" + availableDateId,
        )
        .then((res) => {
            setGetData(false);
        })
        .catch((error) => {
            console.log(error);
        })
    };

    useEffect(()=>{
        if (!getData){
            getAvailableDates();
        }
        setGetData(true);
        setNewData([]);
    },[getData, getAvailableDates]);

    const addAvailableDateField = () => {
        setNewData(
            [...newData, {id: newData.length, date: ""}]
        );
        console.log(newData);
    };

    const AvailableDateField = (idx) => {
        return (
            <TableRow tabIndex={idx} sx={{height: rowHeight, p: 0}}>
                <TableCell sx={{ p: 0 }}>
                    <Input 
                        id={'date'}
                        name={'date'}
                        value={newData[idx].date}
                        onChange={(e)=>{
                            setNewData(
                                newData.map(data =>
                                    data.id === idx ? { ...data, date: e.target.value } : data
                                )
                            );
                        }}
                        variant="outlined"
                        size="small"
                        aria-label="form"
                        sx={{ ml: 2 }}
                    />
                </TableCell>
                <TableCell>
                    <RemoveCircleOutlineIcon 
                        fontSize="small" 
                        color="action" 
                        onClick={() => {
                            setNewData(newData.filter(data => data.id !== idx));
                        }}
                    ></RemoveCircleOutlineIcon>
                </TableCell>
            </TableRow>
        );
    };

    return (
        <React.Fragment>
        <Title>신청 가능 날짜</Title>
        <TableContainer>
            <Table size="small">
            <TableHead>
                <TableRow sx={{ height: rowHeight }}>
                {columns.map((column) => (
                    <TableCell
                    key={column.id}
                    align={column.align}
                    sx={{ minWidth: column.minWidth? column.minWidth: 0 }}
                    >
                    {column.label}
                    </TableCell>
                ))}
                <TableCell>{""}</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {data.map((row, idx) => {
                    return (
                        <TableRow tabIndex={idx} key={row._id} sx={{ cursor: 'pointer', height: rowHeight }}>
                            {columns.map((column) => {
                            const value = row[column.id];
                            return (
                                <TableCell align={column.align}>
                                {column.format && typeof value === 'number'
                                    ? column.format(value)
                                    : value}
                                </TableCell>
                            );
                            })}
                            <TableCell>
                                <DeleteIcon color="error" fontSize="small" onClick={()=>deleteAvailableDate(row._id)}></DeleteIcon>
                            </TableCell>
                        </TableRow>
                    );
                })}
                {newData.map((row, idx) => {
                    return AvailableDateField(idx);
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
            <Button variant="outlined" onClick={()=>{postAvailableDates()}}>추가</Button>
        </Box>
        </React.Fragment>
    );
}