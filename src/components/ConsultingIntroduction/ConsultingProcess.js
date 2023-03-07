import * as React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


function Item({ index, contents }) {
    return (
        <Grid item xs={5.5} sm={3.3} sx={{width: '100%'}}>
            <Card sx={{ 
                    width: '100%',
                    height: { xs: 140, sm: 185, lg: 190 },
                    mb: 1,
                    textAlign: 'center', 
                    backgroundColor: 'rgba(132, 132, 132, 0.2)',
                    border: '2.5px solid darkgray',
                    borderRadius: '20px'
                }}
            >
                <CardContent sx={{ pl:{xs: 1, sm: 2}, pr:{xs: 1, sm: 2},}}>
                    <Typography sx={{ fontSize: 13, mb: { xs: 1, sm: 2} }} color="text.secondary" gutterBottom>
                        STEP {index}
                    </Typography>
                    <Typography 
                        variant="body1" 
                        sx={{ 
                            fontSize: { xs:'4.1vw', sm: '20px', md: '23px' }, 
                            mt: { xs: 2, sm: 3, lg: 4 }, 
                            fontWeight: 'bold' 
                        }} 
                        component="div"
                    >
                        {contents.primary}
                    </Typography>
                </CardContent>
            </Card>
            <Typography variant='body2' color="text.secondary" sx={{ fontSize: 12 }}>
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