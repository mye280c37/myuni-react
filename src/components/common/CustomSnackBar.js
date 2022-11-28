import * as React from 'react';
import PropTypes from 'prop-types';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

function CustomSnackBar(props) {
    return (
        <Snackbar open={props.open} autoHideDuration={6000} onClose={props.onClose} anchorOrigin={{ vertical:'top', horizontal:'center' }}>
            <Alert onClose={props.onClose} severity={props.severity} sx={{ width: '100%' }}>
                <AlertTitle sx={{mb: 1.5, fontSize: 18}}>{props.title}</AlertTitle>
                {props.children}
            </Alert>
        </Snackbar>
    )
}

CustomSnackBar.propTypes = {
    title: PropTypes.string,
    open: PropTypes.bool.isRequired,
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
    severity: PropTypes.string
}

CustomSnackBar.defaultProps = {
    severity: "error"
}

export default CustomSnackBar;