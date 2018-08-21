import React from "react";
import axios from "axios";
import "./index.css";

class Detail extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <div className="detail-top-wrap">
                    <div className="detail-top-bg"></div>
                    <div className="goback-icon"></div>
                </div>
                <div className="detail-top-content">
                    <div className="detail-shop-img"></div>
                    <div className="detail-shop-info-wrap">
                        <span className="detail-shop-title">店名</span>
                        <div className="detail-shop-info">
                            <span>评价4.8</span>
                            <span>月售1868单</span>
                            <span>专送约25分钟</span>
                        </div>
                    </div>
                    <div className="detail-shop-activities">
                        <div className="shop-activity-content">
                            <span>满30减4，满60减8，满100减20</span>
                        </div>
                        <div className=""></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Detail;