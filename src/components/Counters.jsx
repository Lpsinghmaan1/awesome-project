import React, { Component } from 'react';
import Counter from "./Counter"
import "bootstrap/dist/css/bootstrap.css";

class  Counters extends Component {
    state = { 
        counters:[
            {id: 1, value:1},
            {id: 2, value:0},
            {id: 3, value:0},
            {id: 4, value:0},
        ]
     };

     handelIncrement = counter => {
         const counters = [...this.state.counters];
         const index = counters.indexOf(counter);
         counters[index] = {...counter};
         counters[index].value++;
         this.setState({counters});


     ;}

     handleDelete = (counterID) => {
        const counters = this.state.counters.filter(c => c.id !== counterID);
        this.setState({counters : counters})
     };

     handleReset = () =>{
        const counters = this.state.counters.map(c=>{
             c.value = 0;
             return c;
         });

         this.setState({ counters });
     }

    render() { 
        return ( 
        <div>

            <button 
            onClick = {this.handleReset}
            className="button btn-sm btn-primary btn m-2">Reset</button>

          {this.state.counters.map(counter => 
          <Counter 
          key={counter.id} 
          onDelete ={this.handleDelete} 
          onIncrement = {this.handelIncrement}
          counter = {counter}> 
        
          </Counter>)}
        </div> );
    }
}
 
export default Counters ;