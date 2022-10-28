import * as React from 'react';
import PropTypes from 'prop-types';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';

import PageLayout from './PageLayout';
import ScoreForm from '../components/forms/ScoreForm';

import useScore from '../hooks/useScore';
import StickyHeadTable from '../components/common/StickyHeaderTable';


const columns = [
    { id: 'name', label: '대학명', minWidth: 170 },
    { id: 'region', label: '지역', minWidth: 100 },
    {
        id: 'result',
        label: '내신환산',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toFixed(2),
    },
    {
        id: 'link',
        label: '과별 입결',
        align: 'center',
        minWidth: 170,
    }
    // {
    //     id: 'size',
    //     label: 'Size\u00a0(km\u00b2)',
    //     minWidth: 170,
    //     align: 'right',
    //     format: (value) => value.toLocaleString('en-US'),
    // },
];

function createData(name, region, link, a) {
    const result = link/ a;
    return { name, region, link, result};
}

const rows = [
    createData('India', 'IN', 1324171354, 3287263),
    createData('China', 'CN', 1403500365, 9596961),
    createData('Italy', 'IT', 60483973, 301340),
    createData('United States', 'US', 327167434, 9833520),
    createData('Canada', 'CA', 37602103, 9984670),
    createData('Australia', 'AU', 25475400, 7692024),
    createData('Germany', 'DE', 83019200, 357578),
    createData('Ireland', 'IE', 4857000, 70273),
    createData('Mexico', 'MX', 126577691, 1972550),
    createData('Japan', 'JP', 126317000, 377973),
    createData('France', 'FR', 67022000, 640679),
    createData('United Kingdom', 'GB', 67545757, 242495),
    createData('Russia', 'RU', 146793744, 17098246),
    createData('Nigeria', 'NG', 200962417, 923768),
    createData('Brazil', 'BR', 210147125, 8515767),
];

const titleStyle = {
    mt: 8,
    mb: 2
};

export default function GradeConversion() {
    const { form, onChange } = useScore();
    const { korean, english, math, society, science, history, optional, average } = form;
    const helperText="0과 100사이의 유효한 점수를 입력해주세요.";

    const [data, setData] = React.useState([]);

    const validation =(value)=>{
        return (value<0)||(value>100);
    };

    return (
        <PageLayout title={"비교내신환산"}>
            <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
                    점수입력
                </Typography>
                <Typography variant='body2' color={'text.secondary'}>반영과목 및 비율은 전과목으로 선택되어 점수가 환산됩니다.</Typography>
                <Grid container spacing={3} sx={{ mb: 10 }}>
                    <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="korean"
                        name="korean"
                        label="국어"
                        value={korean}
                        onChange={onChange}
                        error={validation(korean)}
                        helperText={validation(korean)? helperText: ''}
                        fullWidth
                        autoComplete="shipping country"
                        variant="standard"
                    />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="english"
                        name="english"
                        label="영어"
                        value={english}
                        onChange={onChange}
                        error={validation(english)}
                        helperText={validation(english)? helperText: ''}
                        fullWidth
                        autoComplete="shipping country"
                        variant="standard"
                    />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="math"
                        name="math"
                        label="수학"
                        value={math}
                        onChange={onChange}
                        error={validation(math)}
                        helperText={validation(math)? helperText: ''}
                        fullWidth
                        autoComplete="shipping country"
                        variant="standard"
                    />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="society"
                        name="society"
                        label="사회"
                        value={society}
                        onChange={onChange}
                        error={validation(society)}
                        helperText={validation(society)? helperText: ''}
                        fullWidth
                        autoComplete="shipping country"
                        variant="standard"
                    />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="science"
                        name="science"
                        label="과학"
                        value={science}
                        onChange={onChange}
                        error={validation(science)}
                        helperText={validation(science)? helperText: ''}
                        fullWidth
                        autoComplete="shipping country"
                        variant="standard"
                    />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="history"
                        name="history"
                        label="한국사"
                        value={history}
                        onChange={onChange}
                        error={validation(history)}
                        helperText={validation(history)? helperText: ''}
                        fullWidth
                        autoComplete="shipping country"
                        variant="standard"
                    />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="optional"
                        name="optional"
                        label="선택"
                        value={optional}
                        onChange={onChange}
                        error={validation(optional)}
                        helperText={validation(optional)? helperText: ''}
                        fullWidth
                        autoComplete="shipping country"
                        variant="standard"
                    />
                    </Grid>
                </Grid>
                <Button 
                    variant="contained" 
                    size='large'
                    sx={{fontWeight: 700}}
                    endIcon={<CompareArrowsIcon />}
                    onClick={() => {
                        alert(console.log(data));
                    }}
                >
                    환산하기
                </Button>
            </Paper>
            {
                !(typeof data === "undefined" || data === null || data.length === 0)?
                <Box>
                    <Typography variant='h5' sx={titleStyle}>환산 결과</Typography>
                    <StickyHeadTable columns={columns} rows={data} />
                </Box> 
                :<React.Fragment></React.Fragment> 
            }
        </PageLayout>
    );
}