import React from "react";
import "./index.css";

class MenuView extends React.Component{
    render(){
        return(
            <div className="menu-view">
                <ul className="menu-category">
                    <li className="menu-category-item active">热销</li>
                    <li className="menu-category-item">优惠</li>
                    <li className="menu-category-item">新品</li>
                </ul>
                <div className="menu-view-list">
                    <dl>
                        <dt className="menu-category-title">
                            <strong className="menu-category-name">热销</strong>
                            <span className="menu-category-desc">大家喜欢吃，才叫真好吃。</span>
                        </dt>
                        <dd className="food-detail">
                            <div className="food-detail-img"></div>
                            <div className="food-detail-info">
                                <p className="food-detail-name">炸鸡年糕（甜辣味）</p>
                                <p className="food-detail-desc">鸡肉250-260克，年糕150-160克。主要原料：鸡肉,糯米</p>
                                <p className="food-detail-sale">
                                    <span>月售119份</span>
                                    <span>好评率100%</span>
                                </p>
                                <span className="sale-info-price">63</span>
                            </div>
                        </dd>
                    </dl>
                </div>
            </div>
        )
    }
}

export default MenuView;