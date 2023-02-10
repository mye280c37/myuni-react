import React from 'react';
import PropTypes from 'prop-types';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import BeenhereIcon from '@mui/icons-material/Beenhere';

function CustomListItem(props) {
    return (
        <ListItem key={props.key}>
        <ListItemIcon>
            <BeenhereIcon fontSize='small'/>
        </ListItemIcon>
        <ListItemText
            primary={props.primary}
            secondary={props.secondary}
            primaryTypographyProps={{
                fontSize: 16,
                fontWeight: 'medium',
                letterSpacing: 0,
            }}
        />
        </ListItem>
    );
}

CustomListItem.propsType = {
    key: PropTypes.string.isRequired,
    primary: PropTypes.string.isRequired,
    secondary: PropTypes.string
}

function generate(data, element) {
    return data.map((value, index) =>
        React.cloneElement(element, {
            key: index,
            primary: value
        }),
    );
}

function CustomList(props) {
    return (
        <List dense={true}>
            {generate(
                props.contents,
                <CustomListItem/>
            )}
        </List>
    );
}

CustomList.propsType = {
    contents: PropTypes.array.isRequired
}

export default CustomList;