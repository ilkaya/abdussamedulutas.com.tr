import React, { useEffect } from "react";
import {Provider, store} from"./redux/redux";
import "./theme/costum.scss";
import {BrowserRouter,Route,Switch} from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material";
import {render} from "react-dom";
import {useHistory} from "react-router-dom"

let theme = createTheme({
    typography:{
        fontFamily:"Cantarell"
    }
});

import Webrtc from "./pages/frontend/webrtc";
import Ozgecmis from "./pages/ozgecmis";
import Appbar from "./pages/partials/Appbar";
import Content from "./pages/partials/Context";
import ReactJS from "./pages/frontend/react/index"
import Websocket from "./pages/frontend/websocket/index"
import indexeddb from "./pages/frontend/indexeddb/index"


function App()
{
    return <Provider store={store}>
        <ThemeProvider theme={theme}>
            <Appbar />
            <BrowserRouter>
                <Content>
                    <Switch>
                        <Route path="/ozgecmis" component={Ozgecmis}/>
                        <Route path="/frontend/webrtc" component={Webrtc}/>
                        <Route path="/frontend/react" component={ReactJS}/>
                        <Route path="/frontend/websocket" component={Websocket}/>
                        <Route path="/frontend/indexeddb" component={indexeddb}/>
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