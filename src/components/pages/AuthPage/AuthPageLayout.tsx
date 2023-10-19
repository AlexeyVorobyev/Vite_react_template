import React from "react";
import {Outlet} from "react-router-dom";
import {Grid, Paper} from "@mui/material";


const AuthPageLayout:React.FC<any> = () => {
    return (
        <Grid container justifyContent={'center'} alignItems={'center'} height={'100vh'}>
            <Grid item width={'400px'}>
                <Paper
                    elevation={3}
                    sx={{
                        padding:3,
                    }}
                >
                    <Outlet/>
                </Paper>
            </Grid>
        </Grid>
    )
}

export {AuthPageLayout}