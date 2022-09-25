import * as React from 'react';
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

export const mainListItems = (
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
    <Accordion>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="consulting-request"
            >   
                    <ListItemIcon>
                        <BarChartIcon />
                    </ListItemIcon>
                    <ListItemText primary="컨설팅 신청 관리" />
            </AccordionSummary>
            <AccordionDetails>
                <ListItemButton>
                    <ListItemIcon>
                        <DashboardIcon />
                    </ListItemIcon>
                    <Link href='#' color="inherit" underline="none">
                        <ListItemText primary="컨설팅 신청 관리" />
                    </Link>
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>
                        <DashboardIcon />
                    </ListItemIcon>
                    <Link href='#' color="inherit" underline="none">
                        <ListItemText primary="신청 날짜 관리" />
                    </Link>
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>
                        <DashboardIcon />
                    </ListItemIcon>
                    <Link href='#' color="inherit" underline="none">
                        <ListItemText primary="신청 폼 관리" />
                    </Link>
                </ListItemButton>
            </AccordionDetails>
        </Accordion>
    </ListItemButton>
    <ListItemButton sx={{ pt:0, pb:0, minHeight: 48 }}>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="컨설팅 관리" />
    </ListItemButton>
  </React.Fragment>
);