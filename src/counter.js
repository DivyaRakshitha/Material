import React ,{Component} from 'react'
import './App.css'

class Counter extends Component{
    state = {
        count: 0,
    };
    handleIncrement = () =>{
        this.setState({count: this.state.count+1})
    };
    handleDecrement =() =>{
        this.setState({count: this.state.count -1})
    };
    check=()=>{
        if(this.state.count===3){
            throw new Error('Crashed!!');
        }
    }

    render(){
        return(
            <div className='App-header'>
                <this.check/> 
                <button onClick={this.handleIncrement}>Increase</button>
                <span>{this.state.count}</span>
                <button onClick={this.handleDecrement}>Decrease</button>

            </div>
        )
    }
}

export default Counter;