import * as React from 'react';
import PropTypes from 'prop-types';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import LinkIcon from '@mui/icons-material/Link';
import { Typography } from '@mui/material';

function StickyHeadTable(props) {
    const columns = props.columns;
    const rows = props.rows;
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(props.rowsPerPage);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        typeof rows === "undefined"|| rows === null || rows.length === 0?
        <React.Fragment>
        <TableContainer>
            <Table stickyHeader aria-label="sticky table">
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
                </TableRow>
            </TableHead>
            </Table>
        </TableContainer>
        <Typography sx={{ p: 4 }}>내용 없음</Typography>
        </React.Fragment>
        :<Paper sx={{ width: '100%', overflow: 'hidden', boxShadow: 'none'}}>
        <TableContainer>
            <Table stickyHeader aria-label="sticky table">
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
                </TableRow>
            </TableHead>
            <TableBody>
                {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, idx) => {
                    return (
                    <TableRow hover role="checkbox" tabIndex={idx} key={row._id} onClick={()=>{props.onClick(idx + page * rowsPerPage)}} sx={{ cursor: 'pointer'}}>
                        {columns.map((column) => {
                        const value = row[column.id];
                        if(column.id === 'link'){
                            return(
                                <TableCell key={column.id} align={column.align}>
                                    {value?
                                    <a href={value} target="_blank" rel="noopener noreferrer"><LinkIcon/></a>
                                    : ''}
                                </TableCell>
                            );
                        }else{
                            return (
                                <TableCell key={column.id} align={column.align}>
                                {column.format && typeof value === 'number'
                                    ? column.format(value)
                                    : value}
                                </TableCell>
                            );
                        }
                        })}
                    </TableRow>
                    );
                })}
            </TableBody>
            </Table>
        </TableContainer>
        <TablePagination
            // rowsPerPageOptions={[15, 25, 100]}
            rowsPerPageOptions={rowsPerPage}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
        />
        </Paper>
    );
}

StickyHeadTable.propTypes = {
    columns: PropTypes.array.isRequired,
    rows: PropTypes.array.isRequired,
    rowsPerPage: PropTypes.number,
    onClick: PropTypes.func
}

StickyHeadTable.defaultProps = {
    rowsPerPage: 15
}

export default StickyHeadTable;