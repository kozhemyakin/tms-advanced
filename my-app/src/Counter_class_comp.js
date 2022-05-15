// CLASS COMPONENT
import React from 'react'; 

class MyComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 1,
        }
    }

    decrement = () => {
        this.setState({count: this.state.count - 1});
    }

    increment = () => {
        this.setState({count: this.state.count + 1});
    }


render () {
    return (
    <div className="empty">
        <button onClick={this.decrement}>  -  </button>  {this.state.count}  <button onClick={this.increment}>  +  </button>  
    </div>
    )
}}

export default MyComponent;
