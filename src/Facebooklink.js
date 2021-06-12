import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';

export default class Facebooklink extends Component {
  state = {
    isLoggedIn: false,
    userId: '',
    name: '',
    email: '',
    picture: '',
  };
  responseFacebook = (response) => {
    this.setState({
      isLoggedIn: true,
      userId: response.userId,
      name: response.name,
      email: response.email,
      picture: response.picture.data.url,
    });
  };

  render() {
    let fbContent;
    if (this.state.isLoggedIn) {
      fbContent = (
        <div
          style={{
            width: '400px',
            margin: 'auto',
            background: '#f4f4f',
            padding: '20px',
          }}
        >
          <img src={this.state.picture} alt={this.state.name} />
          <h2>Welcome {this.state.name}</h2>
          <h2>Email {this.state.email}</h2>
        </div>
      );
    } else {
      fbContent = (
        <FacebookLogin
          appId='594228104887812'
          autoLoad={true}
          fields='name,email,picture'
          onClick={this.componentClicked}
          callback={this.responseFacebook}
        />
      );
    }
    return <div>{fbContent}</div>;
  }
}
