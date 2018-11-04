import React  from 'react';

class Button extends React.Component {
    state = {counter :0};
  
  handleClick = () => {
    this.props.onClickCounter(this.props.incrementValue)
  };
 
 render () {
     return (
     <button onClick={this.handleClick }>
     +{this.props.incrementValue}
   </button>
 )
 }
}

export default Button;