import React, { Component } from 'react';
import { Card,
         CardText,
         CardTitle } from 'reactstrap';

import '../App.css';

class Quote extends Component {

  constructor(props){
    super(props);
    this.state = {
      value : 'Quote will Post Here !',
      quote : {
        quotedesc : '',
        author : ''
      }
    };

    var proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    var targetUrl = "https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en"
    fetch(proxyUrl+targetUrl,
    {
        headers: {
          'Content-Type': 'application/json',
          'Accept':'application/json'
        },
        method: "get",
        dataType: 'json',
    })
    .then((res) => res.json())
    .then((res) => {
      var quote = {};
      quote.author = '-  ' +res.quoteAuthor;
      quote.quotedesc = '" '+res.quoteText+' "';
      this.setState({quote})
    })
    .catch((res)=> console.log(res))
  }

  getRandomQuote = () => {
    var proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    var targetUrl = "https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en";
    fetch( proxyUrl+targetUrl,
    {
        headers: {
          'Content-Type': 'application/json',
          'Accept':'application/json',
          'Access-Control-Allow-Origin': 'http://localhost:3001'
        },
        method: "get",
        dataType: 'json',
    })
    .then((res) => res.json())
    .then((res) => {
      var quote = {};
      quote.author = '-  ' +res.quoteAuthor;
      quote.quotedesc = '" '+res.quoteText+' "';
      this.setState({quote})
    })
    .catch((res)=> console.log(res))
  }

  componentWillReceiveProps(nextProps){
    console.log(nextProps.clickPass);
    this.getRandomQuote();
  }

  render(){
    return (
      <div className='quoteCard'>
        <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
          <CardText className='quoteText'>{this.state.quote.quotedesc} </CardText>
          <CardTitle className='quoteAuth'>{this.state.quote.author}</CardTitle>
        </Card>
      </div>
    );
  }
};

export default Quote;
