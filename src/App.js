import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer';

const customer = {
  'name' : '김은성',
  'birthday' : '931224',
  'gender' : '남자',
  'job' : '개발자'
}

class App extends Component{
  render(){
    return(
      <Customer
      name ={customer.name}
      birthday ={customer.birthday}
      gender = {customer.gender}
      job = {customer.job}
      />
      );
  } 
}

export default App;
