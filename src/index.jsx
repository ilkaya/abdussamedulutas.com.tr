import React, { useEffect } from "react";
import {Provider, store} from"./redux/redux";
import "./theme/costum.scss";
import {BrowserRouter,Route,Switch} from "react-router-dom";
import { createTheme, ThemeProvider, useMediaQuery } from "@mui/material";
import {render} from "react-dom";
import {useHistory} from "react-router-dom"



import Ozgecmis from "./pages/ozgecmis";
import Appbar from "./pages/partials/Appbar";
import Content from "./pages/partials/Context";

import ReactJS from "./pages/frontend/react/index"
import Websocket from "./pages/frontend/websocket/index"
import indexeddb from "./pages/frontend/indexeddb/index"
import canvas from "./pages/frontend/canvas/index"
import webworker from "./pages/frontend/webworker/index"
import mediastream from "./pages/frontend/mediastream/index"
import Webrtc from "./pages/frontend/webrtc";
import cachestorage from "./pages/frontend/cachestorage/index"

import Ffmpeg from "./pages/backend/ffmpeg/index"
import Nodejs from "./pages/backend/nodejs/index"

import Iletisim from "./pages/iletisim";



function App()
{
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

    const theme = createTheme({
        palette: {
            mode: prefersDarkMode ? 'dark' : 'light',
        },
        typography:{
            fontFamily:"Cantarell"
        }
    });
    
    return <Provider store={store}>
        <ThemeProvider theme={theme}>
            <Appbar />
            <BrowserRouter basename="/">
                <Content>
                    <Switch>
                        <Route path="/ozgecmis" component={Ozgecmis}/>

                        <Route path="/backend/ffmpeg" component={Ffmpeg}/>
                        <Route path="/backend/nodejs" component={Nodejs}/>

                        <Route path="/frontend/webrtc" component={Webrtc}/>
                        <Route path="/frontend/react" component={ReactJS}/>
                        <Route path="/frontend/websocket" component={Websocket}/>
                        <Route path="/frontend/indexeddb" component={indexeddb}/>
                        <Route path="/frontend/canvas" component={canvas}/>
                        <Route path="/frontend/webworker" component={webworker}/>
                        <Route path="/frontend/mediastream" component={mediastream}/>
                        <Route path="/frontend/cachestorage" component={cachestorage}/>

                        <Route path="/iletisim" component={Iletisim}/>
                        <Route exact path="/"> <Redirect /> </Route>
                    </Switch>
                </Content>
            </BrowserRouter>
        </ThemeProvider>
    </Provider>;
}

function Redirect()
{ 
    let history = useHistory();
    useEffect(()=>{
        history.push("/ozgecmis")
    },[])
    return <></>;
}
render(
    <App/>,
    document.querySelector("#root")
);