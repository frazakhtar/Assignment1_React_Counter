import React, {Component} from 'react';

class CounterTwo extends Component{
    state = {count: 0}
    handleDecrement=()=>{
        this.state.count>=1 && this.setState({count:this.state.count - 1})
    }
    handleIncrement = ()=>{
        this.setState({count: this.state.count + 1})
    }
    render(){
        return(
            <>
             <h2 className='subheading1'>Class Based Component - Counter</h2>
            <button disabled = {this.state.count === 0} className='DecrementButton' onClick={this.handleDecrement}>Decrement</button>
            <span className='count'>{this.state.count}</span>
            <button className='IncrementButton' onClick={this.handleIncrement}>Increment</button>
            </>
        )
    }
}

export default CounterTwo;