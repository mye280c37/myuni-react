import * as React from 'react';
import PropTypes from 'prop-types';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import axios from 'axios';

import PageLayout from './PageLayout';
import ScoreForm from '../components/forms/ScoreForm';

import useScore from '../hooks/useScore';
import StickyHeadTable from '../components/common/StickyHeaderTable';


const columns = [
    { id: 'university', label: '대학명', minWidth: 170 },
    { id: 'area', label: '지역', minWidth: 100 },
    {
        id: 'converted',
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

const titleStyle = {
    mt: 8,
    mb: 2
};

export default function GradeConversion() {
    const { score:form, onScoreChange:onChange } = useScore();
    const { korean, english, math, society, science, history, optional, average } = form;
    const helperText="0과 100사이의 유효한 점수를 입력해주세요.";

    const [data, setData] = React.useState([]);

    const validation =(value)=>{
        return (value<0)||(value>100);
    };

    async function getResult() {
        await axios.get(
            "https://api.hellomyuni.com/v2/converter/score",
            { params: {
                korean: korean,
                english: english,
                math: math,
                society: society,
                science: science,
                history: history,
                select: optional
            } },
            { withCredentials: true }
        )
        .then((res) => {
            console.log(res.data.result);
            setData(res.data.result);
        })
        .catch((error) => {
            console.log(error);
        })
    }

    return (
        <PageLayout title={"비교내신환산"}>
            <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
                    점수입력
                </Typography>
                <Typography variant='body2' color={'text.secondary'} sx={{ mb: 3 }}>반영과목 및 비율은 전과목으로 선택되어 점수가 환산됩니다.</Typography>
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
                    onClick={() => getResult()}
                >
                    환산하기
                </Button>
            </Paper>
            {
                !(typeof data === "undefined" || data === null || data.length === 0)?
                <Box>
                    <Typography variant='h5' sx={titleStyle}>환산 결과</Typography>
                    <StickyHeadTable columns={columns} rows={data} />
                    <Typography variant='body2' color={'text.secondary'} sx={{textAlign: 'left'}}>* 예체능계열의 환산 결과와는 다를 수 있습니다.</Typography>
                    <Typography variant='body2' color={'text.secondary'} sx={{textAlign: 'left'}}>* 비교내신 등급환산 프로그램은 지원자의 등급계산 및 예전년도 성적자료와의 비교를 돕기 위한 단순 참고용이며, 실제 성적반영은 각 전형별 만점기준에 따른 환산 점수로 반영됩니다.</Typography>
                </Box> 
                :<React.Fragment></React.Fragment> 
            }
        </PageLayout>
    );
}