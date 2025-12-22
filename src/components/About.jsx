import User from "./User";
import UserClass from "./UserClass";
import Student from "./Student";

const About = () => {
  return (
    <div>
      <h1>This is a About Page</h1>
      <User name={"Sreejesh"} location={"Kottayam"} contact={"sreejesh@email.com"}/>
      <UserClass name={"Deekshitha-class"} location={"Ernakulam"} contact={"deekshitha@email.com"}/>
      <Student name={"Fathima-class"} division={"A"} stream={"MERN Stack"}/>
  
    </div>
  );
};

export default About;