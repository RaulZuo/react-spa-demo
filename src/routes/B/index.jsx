import React, { Component } from 'react';
import { Link } from 'dva/router'

export default class B extends Component{
  render(){
    return (
      <div className="route-b">
        <div className="title">this is B</div>
        <Link to="/A">to A</Link><br/>
        <Link to="/C">to C</Link>
      </div>
    );
  }
}