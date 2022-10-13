import React from "react";
import "./homepage.css";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

const Homepage = ({setLoginUser}) => {
    return (
        <div className="homepage">
            <Stack direction="row" spacing={2}>
            <Avatar
                alt="Remy Sharp"
                src=""
                sx={{ width: 56, height: 56 }}
            />
            </Stack>
            <h1>Hello Homepage</h1>
            <div className="button" onClick={() => setLoginUser({})} >Logout</div>
        </div>
    );
}

export default Homepage;