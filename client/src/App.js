import React from 'react';
import axios from 'axios';

class App extends React.Component{

    state = {
        city: '',
        output: ''
    }
    handleChange = (e)=>{
        this.setState({city: e.target.value, output: ''});
    }
    handleClick = (e)=>{
        axios.get(`http://localhost:5000/api/${this.state.city}`)
        .then(res => 
            this.setState({output: `The temperature of city ${this.state.city} is ${res.data.temp}C`})
        )
        .catch(e =>
            this.setState({output: `The city with name ${this.state.city} is not found!`})
        )
    }
    render(){

        return(
            <>
                <input type="text" value={this.state.city} onChange={this.handleChange}/>
                <button onClick={this.handleClick}>Find Temperature</button>
                <br/>
                {this.state.output}
            </>
        )
    }
}

export default App;