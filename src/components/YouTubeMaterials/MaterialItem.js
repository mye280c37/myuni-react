import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
    ))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
        {...props}
    />
    ))(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === 'dark'
        ? 'rgba(255, 255, 255, .05)'
        : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function MaterialItem(props) {

    // const materialWidth = 720;
    const materialHeight = 450;

    return (
        <Accordion expanded={props.expanded === props.id } onChange={props.handleChange(props.id)}>
            <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography>{props.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <iframe width={"100%"} height={materialHeight} src={props.src} title={props.title} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </AccordionDetails>
        </Accordion>
    );
}

MaterialItem.propTypes = {
    expanded: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired
}
