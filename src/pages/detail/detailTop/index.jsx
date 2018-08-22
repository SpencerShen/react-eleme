import React from "react";
import "./index.css";
class DetailTop extends React.Component {
  render() {
    return (
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
                        <span>月售x单</span>
                        <span>专送约x分钟</span>
                    </div>
                </div>
                <div className="detail-shop-activities">
                    <div className="shop-activity-content">
                        <span>满30减4，满60减8，满100减20</span>
                    </div>
                    <div className="shop-activity-num">x个优惠</div>
                </div>
                <p className="detail-shop-notice">公告：欢迎光临，很高兴为您服务</p>
            </div>
        </div>
    );
  }
}

export default DetailTop;