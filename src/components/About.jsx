import User from "./User";
import UserClass from "./UserClass";
import Student from "./Student";
import React from "react";

class About extends React.Component {
  constructor(props){
    super(props)
    console.log("parent constructor is called")
  }

  componentDidMount(){
    console.log("parent component did mount is called")
  }
  render() {
    console.log("parent rendered")
     return <div>
        <h1>This is a About Page</h1>

        <UserClass
          name={"first child"}
          location={"Ernakulam"}
          contact={"deekshitha@email.com"}
        />
        <UserClass
          name={"second child"}
          location={"Ernakulam"}
          contact={"deekshitha@email.com"}
        />
      </div>
   
  }
}

/* const About = () => {
  return (
    <div>
      <h1>This is a About Page</h1>
      <User name={"Sreejesh"} location={"Kottayam"} contact={"sreejesh@email.com"}/>
      <UserClass name={"Deekshitha-class"} location={"Ernakulam"} contact={"deekshitha@email.com"}/>
      <Student name={"Fathima-class"} division={"A"} stream={"MERN Stack"}/>
  
    </div>
  );
}; */

export default About;
