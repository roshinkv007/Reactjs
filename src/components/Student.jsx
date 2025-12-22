import React from "react";

class Student extends React.Component{
    constructor(props){
        super(props);
        this.state={
            mark:49
        }
    }
render() {
    const {name,division,stream}= this.props
    return(
        <div className="Student-info">
            <h2>Name:{name}</h2>
            <h3>Division:{division}</h3>
            <h4>Stream:{stream}</h4>
            <h3>Mark:{this.state.mark}</h3>
        </div>
    );
    }
}

export default Student;
