import React from "react";

class UserClass extends React.Component {
    constructor(props){
         super(props);
         this.state={
            counter:0,
            counter2:4,
         }
        console.log("constructor called")
    }
  render() {
    const{name,location,contact} = this.props
    console.log("body rendered")
    return (
      <div className="user-info">
        <h1>Counter:{this.state.counter}</h1>
        <button onClick={()=>{
            this.setState({
                 counter: this.state.counter +1,
                 counter2:this.state.counter2+1
            })
        }}>Increment Counter</button>
        <h1>Counter2:{this.state.counter2}</h1>
        <h3>Name:{name}</h3>
        <h4>Location:{location}</h4>
        <p>{contact}</p>
      </div>
    );
  }
}

export default UserClass;
