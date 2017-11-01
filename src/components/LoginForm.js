import React from 'react';

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    (this.state.username.length > 0 && this.state.password.length > 0)? this.props.onSubmit : null
  }

  handleUsername(event) {
    this.setState({
      username: event.target.value
    })
  }

  handlePassword(event) {
    this.setState({
      password: event.target.value
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" value={this.state.username} onChange={this.handleUsername.bind(this)}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" value={this.state.password} onChange={this.handlePassword.bind(this)}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
