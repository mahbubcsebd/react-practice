import React, { Component } from 'react';

export default class State extends Component {
// App.js এ দেওয়া  props এর ভ্যালুগুলো এখানে আনার জন্যঃ
  constructor(props) {
    super(props)
  
    this.state = {
        count: 0
    }
  }

  // উপরের state এর ভ্যালু পরিবর্তন করার জন্য ফাংশনের ভিতরে this.setState ব্যবহার করতে হবেঃ
  handleIncrement = () => {
    this.setState({
      count : this.state.count + 1,
    })
  };

  handleDecrement = () => {
    this.setState({
      count : this.state.count - 1,
    })
  };
  

  render() {
    // বারবার this.state/ this.props যাতে ব্যবহার করা না লাগে তাই  Destructuring করা হয়েছেঃ
    const {count} = this.state;

    return (
      <div className='counter-box'>
        <h1>Count: {count}</h1>

        <button className='in-btn' onClick={this.handleIncrement} disabled={count === 10 ? true :false}>+</button>

        <button className='de-btn' onClick={this.handleDecrement} disabled = {count=== 0 ? true : false}>-</button>
      </div>
    )
  }
}
