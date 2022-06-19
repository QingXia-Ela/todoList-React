import React, { Component } from 'react';
import propTypes from 'prop-types';
import './index.scss'

class Total extends Component {
  static propTypes = {
    todolist: propTypes.array
  }

  state = {
    count: 0
  }

  render() {
    return (
      <div className='info'>
        <div className='finish_state'>
          已完成 / 总计：{this.state.count} / {this.props.todolist.length}
        </div>
        <div className="del_finish" onClick={this.confirmDelete} style={{ display: this.state.count ? 'block' : 'none' }}>
          删除已完成事件
        </div>
      </div>
    );
  }

  confirmDelete = () => {
    let res = window.confirm('确认删除吗')
    if (res) {
      let sourceData = [...this.props.todolist]
      let fil = sourceData.filter((val) => {
        return !val.done
      })
      this.props.updatetodo(fil)
    }
  }

  componentDidUpdate() {
    let cnt2 = 0
    this.props.todolist.forEach((val) => {
      if (val.done) cnt2++
    })
    if (this.state.count !== cnt2) {
      this.setState({
        count: cnt2
      })
    }
  }
}

export default Total;