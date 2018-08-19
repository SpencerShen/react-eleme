import React from "react";
import "./index.css";
class IndexTopEnties extends React.Component {
    constructor(props){
      super(props);
    }
    render() {
      let reg = /.*png$/;
      return(
        <div className="entry-wrap">
        {
          this.props.entrydata.slice(0, 10).map((data)=>(
            <a key={data.activity_id} className="">
            <img src={`https://fuss10.elemecdn.com/${data.image_hash}${reg.test(data.image_hash)?'.png':'.jpeg'}?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/`} alt=""/>
            <div className="entry-title">{data.name}</div>
            </a>
          ))
        }
        </div>
      )
    }
  }

export default IndexTopEnties;