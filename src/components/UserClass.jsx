import { userInfo } from "os";
import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      counter2: 4,
      userInfo: {
        name: "dummy",
        bio: "dummy-bio",

        avatar_url: "http://dummy.com",
      },
    };
    console.log(this.props.name+"constructor called");
  }
  async componentDidMount() {
    console.log(this.props.name+"mounted");
    const data = await fetch("https://api.github.com/users/thejas-1999");
    const json = await data.json();
    this.setState({
      userInfo:json
    })
  }
  render() {
   const {name,bio,avatar_url} = this.state.userInfo
    console.log(this.props.name+"body rendered");
    return (
      <div className="user-info">
        <img src={avatar_url} alt="" />
        <h3>Name:{name}</h3>
        <h4>Bio:{bio}</h4>
        
      </div>
    );
  }
}

export default UserClass;

/* 
parent constructor
parent render
first child constructor
first child render
first child mount
second child constructor
second child render
second child mount
parent mount

 */
