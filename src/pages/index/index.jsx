import React from "react";
import axios from "axios";
import "./index.css";

import Search from "./search";
import IndexTopEnties from "./indexTopEnties";
import FilterHeader from "./filterHeader";
import ShopList from "./shopList";

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entryData: [],
      shoplist: []
    };
  }
  goToShopList(shopId){
    this.props.history.push({
      pathname:'/detail',
      search:`id=${shopId}`
    })
  }
  componentDidMount() {   
    //首页顶部是个入口
    axios
      .get(
        "/restapi/shopping/openapi/entries?latitude=40.099266&longitude=116.536609&templates[]=main_template&templates[]=favourable_template&templates[]=svip_template&terminal=h5"
      )
      .then(res => {
        this.setState({
          entryData: res.data[0].entries
        });
        console.log(res.data)
      });
    //店铺列表
    axios
      .get(
        "/restapi/shopping/v3/restaurants?latitude=40.099266&longitude=116.536609&offset=0&limit=8&extras[]=activities&extras[]=tags&extra_filters=home&order_by=0&rank_id=&terminal=h5"
      )
      .then(res => {
        this.setState({
          shoplist: res.data.items
        });
        console.log(res.data.items)
      });
  }
  render() {
    return (
      <div>
        <Search />
        <IndexTopEnties entrydata = {this.state.entryData} />
        <div className="shoplist-title">推荐商家</div>
        <FilterHeader />
        {this.state.shoplist.map((shopData) => (
          <ShopList key={shopData.restaurant.id} shoplist={shopData} handleClick={()=>this.goToShopList(shopData.restaurant.id)} />
        ))}
      </div>
    );
  }
}

export default Index;