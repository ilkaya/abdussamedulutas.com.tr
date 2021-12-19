import { AppBar, Button, colors, Toolbar, Typography } from "@mui/material";
import React from "react"

import icon from "../../images/icon.webp";
import "./Appbar.scss";

export default function Appbar()
{
    return <>
        <AppBar position="static">
            <Toolbar>
                <img src={icon} alt="Logo" className="logo-image" />
                <Typography
                    variant="h6"
                    noWrap
                    sx={{ mr: 2 }}
                >
                    Abdussamed ULUTAŞ
                </Typography>
                <div style={{marginLeft:"auto"}}></div>
                <Button sx={{display:{sm:"block",xs:"none"}}} color="inherit" style={{marginLeft:10}}>React JS</Button>
                <Button sx={{display:{sm:"block",xs:"none"}}} color="inherit" style={{marginLeft:10}}>Metarial UI</Button>
            </Toolbar>
        </AppBar>
    </>;
}