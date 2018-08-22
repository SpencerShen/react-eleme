import React from "react";
import axios from "axios";
import "./index.css";
import DetailTop from "./detailTop";
import DetailTab from "./detailTab";

class Detail extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <DetailTop />
                <DetailTab />
            </div>
        )
    }
}

export default Detail;