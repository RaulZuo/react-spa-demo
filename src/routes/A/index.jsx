import React, { Component } from 'react';
import { Link } from 'dva/router'

export default class A extends Component{
  render(){
    return (
      <div className="route-A">
        <div className="title">this is A</div>
        <Link to="/B">to B</Link><br/>
        <Link to="/C">to C</Link>
      </div>
    );
  }
}
