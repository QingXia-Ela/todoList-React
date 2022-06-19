import React, { Component } from 'react';
import './App.scss'

import List from './components/List'
import Input from './components/Input';
import Total from './components/Total';

class App extends Component {
  state = {
    list: [
      { id: +new Date(), text: '吃饭', done: false }
    ]
  }
  render() {
    return (
      <div className='App'>
        <div className='container'>
          <Input addtodo={this.addtodo} />
          <List todolist={this.state.list} updatetodo={this.updatetodo} />
          <Total todolist={this.state.list} updatetodo={this.updatetodo} />
        </div>
      </div>
    );
  }

  addtodo = (content) => {
    let newList = [...this.state.list]
    newList.push({
      id: +new Date(),
      text: content,
      done: false
    })
    this.setState({
      list: newList
    })
  }

  updatetodo = (list) => {
    this.setState({
      list
    })
  }

}

export default App;