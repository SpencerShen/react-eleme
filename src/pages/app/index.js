import React from "react";
import {BrowserRouter,Switch,Route} from "react-router-dom";

import Index from "../index";
import Detail from "../detail";
class App extends React.Component{
    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Index} ></Route>
                    <Route path="/detail" component={Detail}></Route>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App;