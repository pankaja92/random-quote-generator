import React, { Component } from 'react';
import { Button } from 'reactstrap';

class Generate extends Component {

  buttonIsClicked(e){
    this.props.isClicked(true);
  }

  render(){
    return(
      <div>
        <Button color="secondary" onClick={this.buttonIsClicked.bind(this)}>Generate Quote </Button>
      </div>
    )
  }
}

export default Generate;
