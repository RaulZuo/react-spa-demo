import React, { Component } from 'react';
import { Link } from 'dva/router'

export default class C extends Component{
  render(){
    return (
      <div className="route-c">
        <div className="title">this is C</div>
        <Link to="/A">to A</Link><br/>
        <Link to="/B">to B</Link>
      </div>
    );
  }
}
