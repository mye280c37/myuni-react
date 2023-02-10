import * as React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


function Item({ index, contents }) {
    return (
        <Grid item sm={2.4} sx={{width: '100%',  pl: {xs: 4, sm: 1}, pr: {xs: 4, sm: 1}}}>
            <Card sx={{ 
                    width: '100%',
                    height: { xs: 120, sm: 150 },
                    mb: 1,
                    textAlign: 'center', 
                    backgroundColor: 'rgba(132, 132, 132, 0.2)',
                    border: '2.5px solid darkgray',
                    borderRadius: '20px'
                }}
            >
                <CardContent>
                    <Typography sx={{ fontSize: 10, mb: 2 }} color="text.secondary" gutterBottom>
                        STEP {index}
                    </Typography>
                    <Typography variant="body1" sx={{ fontSize: 16, fontWeight: 'bold' }} component="div">
                        {contents.primary}
                    </Typography>
                </CardContent>
            </Card>
            <Typography variant='body2' color="text.secondary" sx={{ fontSize: 11 }}>
                {contents.secondary? '* ': ''}{contents.secondary}
            </Typography>
        </Grid>
        
    )
}

function generateItemList(process, element) {
    return process.map((value, index) =>
        React.cloneElement(element, {
            index: index+1,
            contents: value
        }),
    );
}

function ConsultingProcess({ process }) {
    return (
        <Grid 
            container 
            spacing={1}
            justifyContent="space-evenly"
            // alignItems="center"
        >
            {generateItemList(
                process,
                <Item/>
            )}
        </Grid>
    );
}

ConsultingProcess.propTypes = {
    process: PropTypes.array.isRequired
}

export default ConsultingProcess;