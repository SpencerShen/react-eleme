import React from "react";
import "./index.css";
class ShopList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isUnfold:false};
    this.unfoldActivity = this.unfoldActivity.bind(this);
  }
  unfoldActivity(){
    this.setState(prevState=>({
      isUnfold:!prevState.isUnfold
    }))
  }
  render() {
    let { shoplist } = this.props;
    let reg = /.*png$/;
    return (
      <div className="shoplist">
        <div className="shoplist-content">
          <div className="shoplist-shopinfo">
            <img className="shoplist-shoplogo" src={`https://fuss10.elemecdn.com/${shoplist.restaurant.image_path}${reg.test(shoplist.restaurant.image_path)?'.png':'.jpeg'}?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/`} alt=""/>
            <div className="shoplist-shopmain">
              <div className="shoplist-mainline">
                <div className="shoplist-shopname">
                  {shoplist.restaurant.is_premium?(<div className="shopname-premium">品牌</div>):null}
                  <span>{shoplist.restaurant.name}</span>
                </div>
              </div>
              <div className="shoplist-mainline">
                <div className="shopname-ratewrap">
                  <img
                    className="rate-img" alt=""
                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IHgxPSIwJSIgeTE9IjUwJSIgeTI9IjUwJSIgaWQ9ImEiPjxzdG9wIHN0b3AtY29sb3I9IiNGRkRFMDAiIG9mZnNldD0iMCUiLz48c3RvcCBzdG9wLWNvbG9yPSIjRkZCMDAwIiBvZmZzZXQ9IjEwMCUiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cGF0aCBkPSJNNTQuMDE3IDguMDcybC0yLjU1MiAxLjU2MWMtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0w1My42My41ODljLjIxMy0uNTE1LjU1Ny0uNTIzLjc3NCAwbDEuMTQ2IDIuNzYzIDIuOTgyLjIzN2MuNTU2LjA0NC42Ny4zNjguMjQuNzM2bC0yLjI3NCAxLjk0NC42OTYgMi45MWMuMTMuNTQyLS4xNDMuNzUtLjYyNi40NTRsLTIuNTUxLTEuNTZ6bS00OCAwTDMuNDY1IDkuNjMzYy0uNDc2LjI5MS0uNzU4LjA5Ni0uNjI2LS40NTVsLjY5Ni0yLjkwOS0yLjI3My0xLjk0NGMtLjQyNC0uMzYyLS4zMjUtLjY5MS4yMzktLjczNmwyLjk4Mi0uMjM3TDUuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMEw3LjU1IDMuMzUybDIuOTgyLjIzN2MuNTU2LjA0NC42Ny4zNjguMjQuNzM2TDguNDk3IDYuMjY5bC42OTYgMi45MWMuMTMuNTQyLS4xNDMuNzUtLjYyNi40NTRsLTIuNTUxLTEuNTZ6bTEyIDBsLTIuNTUyIDEuNTYxYy0uNDc2LjI5MS0uNzU4LjA5Ni0uNjI2LS40NTVsLjY5Ni0yLjkwOS0yLjI3My0xLjk0NGMtLjQyNC0uMzYyLS4zMjUtLjY5MS4yMzktLjczNmwyLjk4Mi0uMjM3TDE3LjYzLjU4OWMuMjEzLS41MTUuNTU3LS41MjMuNzc0IDBsMS4xNDYgMi43NjMgMi45ODIuMjM3Yy41NTYuMDQ0LjY3LjM2OC4yNC43MzZsLTIuMjc0IDEuOTQ0LjY5NiAyLjkxYy4xMy41NDItLjE0My43NS0uNjI2LjQ1NGwtMi41NTEtMS41NnptMTIgMGwtMi41NTIgMS41NjFjLS40NzYuMjkxLS43NTguMDk2LS42MjYtLjQ1NWwuNjk2LTIuOTA5LTIuMjczLTEuOTQ0Yy0uNDI0LS4zNjItLjMyNS0uNjkxLjIzOS0uNzM2bDIuOTgyLS4yMzdMMjkuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMGwxLjE0NiAyLjc2MyAyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNmwtMi4yNzQgMS45NDQuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2em0xMiAwbC0yLjU1MiAxLjU2MWMtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0w0MS42My41ODljLjIxMy0uNTE1LjU1Ny0uNTIzLjc3NCAwbDEuMTQ2IDIuNzYzIDIuOTgyLjIzN2MuNTU2LjA0NC42Ny4zNjguMjQuNzM2bC0yLjI3NCAxLjk0NC42OTYgMi45MWMuMTMuNTQyLS4xNDMuNzUtLjYyNi40NTRsLTIuNTUxLTEuNTZ6IiBmaWxsPSJ1cmwoI2EpIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4="
                  />
                  <span>{shoplist.restaurant.rating}</span>
                  <span>月售{shoplist.restaurant.recent_order_num}</span>
                </div>
                {shoplist.restaurant.delivery_mode && shoplist.restaurant.delivery_mode.text ?(<div className="shopname-delivery">{shoplist.restaurant.delivery_mode.text}</div>):null}
              </div>
              <div className="shoplist-mainline">
                <div className="shopname-moneylimit-wrap">
                  <span>¥{shoplist.restaurant.float_minimum_order_amount}起送</span>
                  <span>{shoplist.restaurant.piecewise_agent_fee.tips}</span>
                </div>
                <div className="shopname-distance-time-wrap">
                  <span>{(shoplist.restaurant.distance/1000).toFixed(2)}km</span>
                  <span>{shoplist.restaurant.order_lead_time}分钟</span>
                </div>
              </div>
            </div>
          </div>
          <div className="shoplist-activity-wrap">
            <div className="activity-line">
                {shoplist.restaurant.support_tags.map((tags,index)=>(
                    <span className="activity-minitag" key={index}>{tags.text}</span>
                ))}
            </div>
            {shoplist.restaurant.activities.length > 0 ?
            (<div className="activity-choose">
              <div className="activity-list">
                {shoplist.restaurant.activities.map((activities,index)=>(
                    <div className="activity-row" key={index} style={{display:index>1 && !this.state.isUnfold ?'none':'flex'}}>
                      <span className="activity-icon" style={{backgroundColor:`#${activities.icon_color}`}}>{activities.icon_name}</span>
                      <span className="activity-desc">{activities.description}</span>
                    </div>
                ))}
              </div>
              {shoplist.restaurant.activities.length>2?<div className="activity-btn" onClick={this.unfoldActivity}>
                <span>{shoplist.restaurant.activities.length}个活动</span>
                <img className={this.state.isUnfold?'icon-open':''} alt="" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsPSIjOTk5IiBkPSJNNC41NzcgNS40MjNjLjc5Ljc3IDIuMDczLjc2NyAyLjg1NyAwbDQuMTItNC4wMjZDMTIuMzQ1LjYyNSAxMi4wOSAwIDEwLjk4NSAwSDEuMDI3Qy0uMDc3IDAtLjMzLjYzLjQ1NyAxLjM5N2w0LjEyIDQuMDI2eiIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+" />
              </div> : null }
            </div>) : null }
          </div>
        </div>
      </div>
    );
  }
}

export default ShopList;