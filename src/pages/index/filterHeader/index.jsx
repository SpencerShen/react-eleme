import React from "react";
import "./index.css";
class FilterHeader extends React.Component {
  render() {
    return (
      <div className="filter-header">
        <div className="filter-nav">综合排序</div>
        <div className="filter-nav">距离最近</div>
        <div className="filter-nav">品质联盟</div>
        <div className="filter-nav">筛选</div>
      </div>
    );
  }
}

export default FilterHeader;