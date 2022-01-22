import React, { Component } from 'react';

class EVENT_HANDLER_CLASS extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      changedValue : ''
    }
  }
  
  handleOnChange = (e) => {
    this.setState ({
      changedValue : e.target.value
    }, () => {
      console.log(this.state.changedValue)
    });

    
  }


  render() {
    return (
      <div className='onchange-box'>
        <input onChange={this.handleOnChange} type="text" />
        <p>{this.state.changedValue}</p>
      </div>
    )
  }
}

export default EVENT_HANDLER_CLASS;
