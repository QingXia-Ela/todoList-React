import React, { Component } from 'react';
import propTypes from 'prop-types';
import './index.scss'

class Input extends Component {
  static propTypes = {
    addtodo: propTypes.func
  }

  state = {
    content: ''
  }

  render() {
    return (
      <input ref={c => this.inputEle = c} className='input_area updown_size' type="text" onChange={this.changeContent} onKeyDown={this.checkContent} />
    );
  }

  changeContent = () => {
    this.setState({
      content: this.inputEle.value
    })
  }

  checkContent = (e) => {
    if (e.keyCode === 13 && this.state.content.length) {
      this.props.addtodo(this.state.content)
      this.inputEle.value = ''
    }
  }
}

export default Input;