import React from "react";
import ReactDOM from "react-dom/client";
/* {
  /* <div id="parent">
  <div id="child">
    <h1>Hello world from react</h1>
    <h2>This is h2 tag</h2>
  </div>
  <div id="child2">
    <h1>Hello world from react</h1>
    <h2>This is h2 tag</h2>
  </div>
</div>; 
} */
const Hello=()=>{
 return "This is a Component"
}

const heading02=(
  <div>
    <Hello/>
  </div>
)
console.log(heading02);


const heading=(
  <div>
    <h1>This is day3 react using jsx</h1>
     <div>
  </div>
  </div>
 
)
console.log(heading)

/* const heading = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child", key:"1"}, [
    React.createElement("h1",{key:"a"}, "Hello world from react"),
    React.createElement("h2", {key:"b"}, "This is h2 tag"),
  ]),
  React.createElement("div", { id: "child2" ,key:"2" }, [
    React.createElement("h1",{key:"c"}, "Hello world from react-day2"),
    React.createElement("h2", {key:"d"}, "This is h2 tag 2"),
  ]),
]); */
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

const root2 = ReactDOM.createRoot(document.getElementById("root2"));
root2.render(heading02);