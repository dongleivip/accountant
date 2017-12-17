import React, { Component } from 'react';
import Expression from './Expression.js'
import '../css/panel.css'

class Panel extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isShowResult: false,
      rows: this.props.rows,
      columns: this.props.columns,
      numbers: [],
    };

    this.handleStartButtonClick = this.handleStartButtonClick.bind(this);
    this.handleResuleButtonClick = this.handleResuleButtonClick.bind(this)
  }

  handleResuleButtonClick(event) {
    this.setState(
      {
        isShowResult: !this.isShowResult,
      }
    );
  }

  handleStartButtonClick(event) {
    this.setState(
      {
        isShowResult: false,
        numbers: this.generateNumbs(),
      }
    );
  }

  generateNumbs() {
    let row = this.state.rows;
    let col = this.state.columns;

    let arr = [];
    for (let i = 0; i < row; i++) {
      arr[i] = [];
      for (let j = 0; j < col; j++) {
        let num = (Math.random() * 99999).toFixed(2);
        console.log(num)
        arr[i][j] = parseFloat(num);
      }
    }
    console.log(arr);
    return arr;
  }

  generateExpressions() {
    let numbers = this.state.numbers;
    let list = [];

    console.log('generate expressions', this.state.numbers);
    
    for(let i = 0; i < numbers.length; i++){

      let arr = numbers[i];

      var elem = <li key={ 'expression' + i }> <Expression key= {i} isShow={this.state.showResult} nums={ arr } /> </li>;

      list.push(elem);
    }
    return list;
  }

  calcTotal(){
    let numbers = this.state.numbers;
    let total = 0;

    for(let i = 0; i < numbers.length; i++){
      total += numbers[i].reduce((x, y) => x + y);
    }

    return total.toFixed(2);
  }

  render() {
    let content = this.generateExpressions();
    let total = this.calcTotal();
    let resultStyle = this.state.isShowResult ? 'panel-result-show' : 'panel-result-hide'

    return (
      <div className='panel'>
        <div>
          <ul>
            { content }
          </ul>
        </div>
        <div className={ resultStyle }>合计: {total}</div>
        <div>
          <button className="button-start" onClick={this.handleStartButtonClick}>出题</button>
          <button className="button-result" onClick={this.handleResuleButtonClick}>查看结果</button>
        </div>
      </div>
    );
  }

}


Panel.defaultProps = {
  isShowResult: false,
  rows: 4,
  columns: 5,
}

export default Panel;