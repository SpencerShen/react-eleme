import React from "react";
import "./index.css";

class DetailTab extends React.Component{
    render(){
        return(
            <div className="detail-shop-tab-wrap">
                <div className="detail-shop-tab selected">
                    <p>tab1</p>
                </div>
                <div className="detail-shop-tab">
                    <p>tab2</p>
                </div>
                <div className="detail-shop-tab">
                    <p>tab3</p>
                </div>
            </div>
        )
    }
}

export default DetailTab;