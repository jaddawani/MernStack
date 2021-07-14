
import React, { Component, PureComponent } from 'react';


class PersonCard extends Component {
    constructor(props){
        super(props);
        this.state={

            age : this.props.age
        }
    }

    incremateAge= () =>{
        // const {age} = this.state;
    this.setState({age : this.state.age +1 })
    }
        
    
    

    render() {
        const  {name , color} = this.props;
        const {age} = this.state;
        return (
        <div>
            <h1>{ name } </h1>
            <p>Age: { age }</p>
            <p>Hair Color: { color }</p>
            <button onClick={this.incremateAge} >clickHere{name}</button>

        </div>
        );
    }
}

export default PersonCard;