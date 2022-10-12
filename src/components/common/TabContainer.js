import * as React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            <Box sx={{ p: 3 }}>
                <Typography>{children}</Typography>
            </Box>
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

function getLabelList(labels) {
    let arr = [];
    for(let i =0 ; i<labels.length; i++){
        arr.push(<Tab label={labels[i]} {...a11yProps(i)} />);
    }
    return arr;
}

function getTabPanelList(contents, value, theme) {
    let arr = [];
    for(let i =0 ; i<contents.length; i++){
        arr.push(
        <TabPanel value={value} index={i} dir={theme.direction}>
            {contents[i]}
        </TabPanel>
        );
    }
    return arr;
}

export default function TabContainer({ labels, contents }) {

    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    return (
        <Box sx={{ bgcolor: 'background.paper' }}>
            <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="secondary"
                textColor="inherit"

            >
                {getLabelList(labels)}
            </Tabs>
        <SwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={value}
            onChangeIndex={handleChangeIndex}
        >
            {getTabPanelList(contents, value, theme)}
        </SwipeableViews>
        {/* <Box sx={{ p: 3 }}>
            <Typography>{contents[value]}</Typography>
        </Box> */}
        </Box>
    );
}