import React, {useState, useEffect} from "react";
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import { Grid, Typography } from "@mui/material";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function ReviewPost(props) {

    const [ post, setPost ] = useState(props.post?props.post:true);

    const goBackHandler = () => {
        alert("작성하신 내용이 저장되지 않습니다.");
        setPost(false);
    }
    
    useEffect(()=>{
        if (props.postHandler){
            props.postHandler(post);
        }
    }, [post, props]);

    return (
        <React.Fragment>
        <Box sx={{ p: { xs: 5, sm: 7 }, minHeight: "800px" }}>
            <TextField 
                fullWidth 
                label="제목" 
                id="title" 
                sx={{ m: 1 }}
            />
            <Grid container spacing={2}>
                <Grid item sm={6} xs={12} sx={{textAlign: 'left'}}>
                    <TextField
                        fullWidth
                        label="작성자"
                        id="outlined-start-adornment"
                        sx={{ m: 1 }}
                    />
                </Grid>
                <Grid item sm={6} xs={12} sx={{textAlign: 'left'}}>
                    <TextField
                        fullWidth
                        label="상담 날짜"
                        id="outlined-start-adornment"
                        sx={{ m: 1 }}
                    />
                </Grid>
            </Grid>
            <TextField 
                fullWidth 
                multiline
                rows={35}
                label="내용" 
                id="body" 
                sx={{ m: 1 }}
            />
        </Box>
        <Box sx={{ mt: 2, textAlign: 'right' }}>
            <Button variant="outlined" onClick={()=>{setPost(false)}}>
                저장
            </Button>
            <Button variant="outlined" color="error" sx={{ ml: 1 }} onClick={goBackHandler}>
                목록으로
            </Button>
        </Box>
        </React.Fragment>
    );
}

ReviewPost.propTypes = {
    post: PropTypes.bool,
    postHandler: PropTypes.func,
    review: PropTypes.object
}

export default ReviewPost;