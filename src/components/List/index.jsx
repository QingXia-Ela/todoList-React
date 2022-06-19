import propTypes from 'prop-types';
import React, { Component } from 'react';
import './index.scss'

class List extends Component {

  static propTypes = {
    todolist: propTypes.array,
    deltodo: propTypes.func
  }

  render() {
    return (
      <ul className='list_container updown_size' style={{
        display: this.props.todolist.length ? 'block' : 'none'
      }}>
        {
          this.props.todolist.map((val) => {
            return (
              <li className='list_item' key={val.id} >
                <input type="checkbox" onChange={this.changeState(val.id)} />
                <span className='content' style={{ textDecorationLine: val.done ? 'line-through' : 'none' }}>{val.text}</span>
                <div className="del_button" onClick={this.confirmDel(val.id)} >删除</div>
              </li>
            )
          })
        }
      </ul >
    );
  }

  changeState = (id) => {
    return () => {
      let sourceList = [...this.props.todolist]
      let ele = this.props.todolist.find((val) => val.id === id)
      ele.done = !ele.done
      this.props.updatetodo(sourceList)
    }
  }

  confirmDel = (id) => {
    return () => {
      let choose = window.confirm('确认删除吗')
      if (choose) {
        let sourceList = [...this.props.todolist]
        let ele = sourceList.find((val) => val.id === id)
        sourceList.splice(sourceList.indexOf(ele), 1)
        this.props.updatetodo(sourceList)
      }
    }
  }

}

export default List;