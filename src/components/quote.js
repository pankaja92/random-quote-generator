import React, { Component } from 'react';
import { Card,
         CardText,
         CardTitle } from 'reactstrap';

import '../App.css';


const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
const targetUrl = "https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en"

class Quote extends Component {

  constructor(props){
    super(props);
    this.state = {
      quote : {
        quotedesc : '',
        author : ''
      }
    };
  }

  componentDidMount(){
    this.fetchQuote();
  }

  fetchQuote = async () => {
    const res = await fetch(proxyUrl+targetUrl);
    const data = await res.json();
    console.log(data);
    var quote = {};
    quote.author = '-  ' +data.quoteAuthor;
    quote.quotedesc = '" '+data.quoteText+' "';
    this.setState({quote})   
  }

  componentWillReceiveProps(nextProps){
    this.fetchQuote();
  }

  render(){
    if(!this.state.quote.quotedesc){
      return(
        <div>
          Loading ...
        </div>
      )
    }
    return (
      <div className='quoteCard'>
        <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
          <CardText style={{'fontSize':'28px'}} className='quoteText'>{this.state.quote.quotedesc} </CardText>
          <CardTitle style={{'fontSize':'22px'}}  className='quoteAuth'>{this.state.quote.author}</CardTitle>
        </Card>
      </div>
    );
  }
};

export default Quote;
