import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Link from '@mui/material/Link';
import ListItemButton from '@mui/material/ListItemButton';
import MuiListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';

import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';

const drawerWidth = 240;

const ListItemIcon = styled((props) => (
    <MuiListItemIcon {...props} />
  ))(({ theme }) => ({
    minWidth: 44
  }));

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(({ theme }) => ({
    border: 0,
    // border: `1px solid ${theme.palette.divider}`,
    // '&:not(:last-child)': {
    //   borderBottom: 0,
    // },
    '&:before': {
      display: 'none',
    },
  }));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ExpandMoreIcon sx={{ mr: '1px' }} />}
      {...props}
    />
  ))(({ theme }) => ({
    '& .MuiAccordionSummary-content': {
      marginTop: theme.spacing(0.2),
      marginBottom: theme.spacing(0.2),
    },
  }));

function DrawerContents(props) {
  return (
    <React.Fragment>
      <ListItemButton sx={{ pt:0, pb:0, minHeight: 48 }}>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <Link href='#' color="inherit" underline="none">
          <ListItemText primary="Dashboard" />
        </Link>
      </ListItemButton>
      <ListItemButton sx={{ p:0 }}>
      <Accordion sx={{ width: drawerWidth }}>
              <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="consulting-request"
              >   
                <ListItemIcon sx={{ mt: '4px' }}>
                    <BarChartIcon />
                </ListItemIcon>
                <ListItemText primary="컨설팅 신청 관리" />
              </AccordionSummary>
              <AccordionDetails>
                  <ListItemButton onClick={()=>props.onClick(0)}>
                      <ListItemIcon>
                        <BarChartIcon />
                      </ListItemIcon>
                      <ListItemText primary="컨설팅 신청 관리" />
                  </ListItemButton>
                  <ListItemButton onClick={()=>props.onClick(1)}>
                      <ListItemIcon>
                        <BarChartIcon />
                      </ListItemIcon>
                      <ListItemText primary="신청 날짜 관리" />
                  </ListItemButton>
                  <ListItemButton>
                      <ListItemIcon>
                        <BarChartIcon />
                      </ListItemIcon>
                      <Link href='#' color="inherit" underline="none">
                          <ListItemText primary="신청 폼 관리" />
                      </Link>
                  </ListItemButton>
              </AccordionDetails>
          </Accordion>
      </ListItemButton>
      <ListItemButton sx={{ pt:0, pb:0, minHeight: 48 }} onClick={()=>props.onClick(2)}>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="컨설팅 후기 관리" />
      </ListItemButton>
    </React.Fragment>
  );
} 

DrawerContents.propTypes = {
  onClick: PropTypes.array.isRequired
}

export default DrawerContents;