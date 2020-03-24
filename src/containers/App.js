import React, { Component } from 'react';
import  classes from './App.css';
import styled from 'styled-components'
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/CockPit'
import withClass from '../hoc/withClass'
import Aux from '../hoc/Auxiliary'
import AuthContex from '../Context/auth-context'

const StyledButton = styled.button`
background-color: ${props => props.alt ? 'red': 'green'};
color: white;
border: 1px solid blue;
padding: 8px;
cursor: pointer;

 &:hover {
  background-color: blue;
  color: black;

 }

`;

class App extends Component {
  constructor(props){
    super(props);
    console.log('[App.js] constructor');
  }

  state = {
    persons: [
      { id: 'asd',name: 'Max', age: '28' },
      { id: 'asdad',name: 'Manu', age: 29 },
      { id: 'asda',name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false,
    showCockPit:true,
    counter: 0,
    authenticated: false,
  }

  static getDerivedStateFromProps(props,state){
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  switchNameHandler = (newName) => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
    this.setState( {
      persons: [
        { name: newName, age: 28 },
        { name: 'Tim', age: 29 },
        { name: 'Yoza', age: 27 }
      ]
    } )
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p =>{
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState((prevState, props) =>{
      return {
        persons : persons,
        counter: prevState.counter + 1
       
      }
    });
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});

  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons:persons});
  }

  componentDidMount(){
    console.log('[App.js] component did mount');
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log('[App.js] component should update');
    return true;
  }

  componentDidUpdate(){
    console.log('[App.js] component Did update');
  }

  loginHandler = () => {
    this.setState({authenticated:true});
  }
 
  render () {
    console.log('[App.js] render')
      let persons = null;
      
       
      if (this.state.showPersons) {
        persons =  
 
              <Persons
              persons = {this.state.persons}
              clicked = {this.deletePersonHandler}
              changed = {this.nameChangedHandler} 
              isAuthenticated = {this.state.authenticated}
              />;
       
  
      }

     

    return (
 
      <Aux>
        <button onClick = {()=> {this.setState({showCockPit:false})}}>Remove Cockpit</button>
       <AuthContex.Provider value = {{authenticated: this.state.authenticated, login : this.loginHandler }}>
        {this.state.showCockPit ?  
        <Cockpit
        name = {this.props.name}
        showPersons = {this.state.showPersons}
        personsLength = {this.state.persons.length}
        clicked = {this.togglePersonHandler}
        />: null }
      {persons}
      </AuthContex.Provider>
      </Aux>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}
export default withClass(App,classes.App);
