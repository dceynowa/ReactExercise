import React  from 'react';

import Button from './Button';
import Result from './Result';

class Counter extends React.Component {
    state = {counter :0};
  
  incrementCounter = (incrementValue) => {
     this.setState((prevState) =>({
        counter: prevState.counter + incrementValue
     }))
   };
   
  render() {
  	return(
    	<div>
            <div>
                <Button incrementValue={1} onClickCounter={this.incrementCounter}/>
                <Button incrementValue={5} onClickCounter={this.incrementCounter}/>
                <Button incrementValue={10} onClickCounter={this.incrementCounter}/>
                <Button incrementValue={100} onClickCounter={this.incrementCounter}/>
            </div>
        <Result counter={this.state.counter}/>      
      </div>)
  }

}


export default Counter;