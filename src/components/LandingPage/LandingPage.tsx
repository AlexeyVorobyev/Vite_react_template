import React from "react";
import {Paper} from "@mui/material";
import {CustomDataTable} from "../formUtils/CustomDataTable/CustomDataTable";

const LandingPage:React.FC = () => {
    return (
        <Paper elevation={10} color={'#FFF'} sx={{
            width:'75%',
            height:'75%',
            display:'flex'
        }}>
            <CustomDataTable/>
        </Paper>
    )
}

export {LandingPage}