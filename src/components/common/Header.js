import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import CustomLink from './CustomLink';

const drawerWidth = 240;
const navItems = ['MyUni', '비교내신환산', '진학컨설팅', '진로설계컨설팅', '대학입시소양교육', '컨설팅 후기'];
const linkTo = ['/myuni', '/grade-conversion', '/consulting-introduction', '/career-planning-consulting', '/lectures', '/reviews'];

function Header(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
        <Typography variant="h6" sx={{ my: 2 }}>
            <CustomLink to="/">MYUNI</CustomLink>
        </Typography>
        <Divider />
        <List>
            {navItems.map((item, index) => (
                <ListItem key={item} disablePadding>
                    <ListItemButton sx={{ textAlign: 'center' }}>
                        <CustomLink to={linkTo[index]}>
                            <ListItemText primary={item} />
                        </CustomLink>
                    </ListItemButton>
                </ListItem>
            ))}
            <ListItem key={item} disablePadding>
                <ListItemButton sx={{ textAlign: 'center' }}>
                    <CustomLink to={'/consulting-request'}>
                        <ListItemText primary={'컨설팅 신청'} />
                    </CustomLink>
                </ListItemButton>
            </ListItem>
        </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
        <AppBar component="nav" sx={{ backgroundColor: '#363636' }}>
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{ mr: 2, display: { sm: 'none' } }}
                >
                    <MenuIcon /> 
                </IconButton>
                <Typography
                    variant="h6"
                    component="div"
                    sx={{ mr: 4, flexGrow: 0.5, display: { xs: 'none', sm: 'block' }, textAlign: 'left' }}
                >
                    <CustomLink to="/">MYUNI</CustomLink>
                </Typography>
                <Box sx={{ flexGrow: 35, display: { xs: 'none', sm: 'block' }, textAlign: 'left' }}>
                    {navItems.map((item, index) => (
                        <Button key={index} sx={{ color: '#fff' }}>
                            <CustomLink to={linkTo[index]}>{item}</CustomLink>
                        </Button>
                    ))}
                </Box>
                <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
                    <Button sx={{ color: '#fff', border: 'solid 1px #fff' }}>
                        <CustomLink to={'/consulting-request'}>컨설팅 신청</CustomLink>
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
        <Box component="nav">
            <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
                keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
                display: { xs: 'block', sm: 'none' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
            >
            {drawer}
            </Drawer>
        </Box>
        </Box>
    );
}

Header.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Header;
