import { render } from "@testing-library/react";
import React,{Component} from "react";
 class Like extends React.Component{
    constructor(props){
        super(props)
        this.state={
            likes:0,
        }
    }
    handleClick=()=>{
        this.setState({
            likes:this.state.likes+1
        })
    }
 render(){
    return(
        <div>
            {this.state.likes}<br/>
            <button onClick={this.handleClick}>like</button>
        </div>
    )
 }
}
const EnhancedLikes=Hoc(Like);
export default EnhancedLikes;

