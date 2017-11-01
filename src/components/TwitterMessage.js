import React from 'react';

class TwitterMessage extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
      remaining: 140
    };
  }

  handleChange(event) {
    let remainder;
    if (event.target.value.length === (141 - this.state.remaining)) {
      remainder = (this.state.remaining - 1)
    } else {
      remainder = (this.state.remaining + 1)
    }

    this.setState({
      value: event.target.value,
      remaining: remainder
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.value} onChange={this.handleChange.bind(this)}/>
        <p>Characters Remaining: {this.state.remaining}</p>
      </div>
    );
  }
}

export default TwitterMessage;
