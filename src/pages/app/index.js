import React from "react";
import {BrowserRouter,Route} from "react-router-dom";

import Index from "../index";
import Detail from "../detail";
class App extends React.Component{
    render(){
        return(
            <BrowserRouter>
                <div>
                    <Route exact path="/" component={Index} ></Route>
                    <Route path="/detail" component={Detail}></Route>
                </div>
            </BrowserRouter>
        )
    }
}

export default App;