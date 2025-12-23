import { useEffect } from "react";

const Contact = () => {
  useEffect(()=>{
     const timer =  setInterval(()=>{
        console.log("useEffect is called")
      },1000)
      return()=>{
        clearInterval(timer)
       console.log("useEffect end")
      }
  },[])
  return (
    <div>
      <h1>Thios is a contact page</h1>
    </div>
  );
};

export default Contact;