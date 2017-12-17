import React, { Component } from 'react';
import '../css/expression.css'

class Expression extends Component {

  constructor(props) {
    super(props);

    this.state = {
      nums: this.props.nums,
      isShow: this.props.isShow,
    }
  };

  render() {
   
   let arr = this.props.nums;
    if(arr.length === 0) {
      return <div>请点出题按钮</div>;
    }

    let style = this.props.isShow ? 'expression-result-show' : 'expression-result-hide';
    let sum = arr.reduce((a,b) => a + b);
    let exp = arr.join(' + ');
    
    return (
      <div className='expression-body'>
        { exp } <span className= { style }> = { sum } </span>
      </div>
    );
  }
}

Expression.defaultProps = {
  nums : []
}

export default Expression;
